/**
 * Startovací Hub Klecany, rezervační backend
 * --------------------------------------------
 * Cloudflare Worker pro příjem registrace zájmu z /rezervace/.
 * Validace přes Turnstile (invisible captcha), odeslání e-mailu přes Resend,
 * uložení do D1 (EU jurisdikce).
 *
 * Endpoint: POST https://form.startovacihub.cz/submit
 * Body:     application/json { koncept, format, mesic, delka, stipendium,
 *                              jmeno, prijmeni, telefon, email, poznamka,
 *                              gdpr, 'cf-turnstile-response' }
 *
 * Secrets (přes `wrangler secret put`):
 *   - TURNSTILE_SECRET    secret key z Cloudflare Turnstile
 *   - RESEND_API_KEY      API key z resend.com
 *   - NOTIFY_EMAIL        adresa, kam přijdou notifikace (vpd@osa2.cz)
 *
 * Bindings (přes wrangler.toml):
 *   - DB                  D1 databáze v eeur regionu
 *
 * Per SH_Web_Plan.md sekce „Reservation configurator". Před prvním deploy
 * je nutné dokončit setup, viz worker/README.md.
 */

export interface Env {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
  NOTIFY_EMAIL: string;
  DB: D1Database;
}

interface Payload {
  koncept: string;
  format?: string;
  mesic: string;
  delka: string;
  stipendium?: string;
  jmeno: string;
  prijmeni: string;
  telefon: string;
  email: string;
  poznamka?: string;
  gdpr: string;
  'cf-turnstile-response'?: string;
}

const ALLOWED_ORIGINS = [
  'https://startovacihub.cz',
  'https://www.startovacihub.cz',
  'https://keiaiendiel.github.io',
];

function cors(origin: string | null, status = 200, body: BodyInit = '', extra: HeadersInit = {}): Response {
  const allowOrigin = origin && ALLOWED_ORIGINS.some((a) => origin.startsWith(a)) ? origin : 'https://startovacihub.cz';
  return new Response(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Content-Type': 'application/json; charset=utf-8',
      ...extra,
    },
  });
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  const fd = new FormData();
  fd.append('secret', secret);
  fd.append('response', token);
  if (ip) fd.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: fd });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

async function sendNotification(env: Env, payload: Payload): Promise<void> {
  const subject = `Hub rezervace, ${payload.jmeno} ${payload.prijmeni}, ${payload.format ?? payload.koncept}`;
  const lines = [
    `Koncept: ${payload.koncept}`,
    `Formát: ${payload.format ?? '(nevybrán, koncept „nevím")'}`,
    `Měsíc nástupu: ${payload.mesic}`,
    `Délka pobytu: ${payload.delka}`,
    `Stipendium: ${payload.stipendium === 'ano' ? 'ano' : 'ne'}`,
    '',
    `Jméno: ${payload.jmeno} ${payload.prijmeni}`,
    `Telefon: ${payload.telefon}`,
    `E-mail: ${payload.email}`,
    payload.poznamka ? `\nPoznámka:\n${payload.poznamka}` : '',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Hub Rezervace <noreply@startovacihub.cz>',
      to: env.NOTIFY_EMAIL,
      reply_to: payload.email,
      subject,
      text: lines,
    }),
  });
  if (!res.ok) {
    console.error('Resend error', await res.text());
    throw new Error('Notification send failed');
  }
}

async function storeInD1(env: Env, payload: Payload, ip: string): Promise<void> {
  await env.DB.prepare(
    `INSERT INTO rezervace (created_at, koncept, format, mesic, delka, stipendium,
                            jmeno, prijmeni, telefon, email, poznamka, ip_hash)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      new Date().toISOString(),
      payload.koncept,
      payload.format ?? null,
      payload.mesic,
      payload.delka,
      payload.stipendium === 'ano' ? 1 : 0,
      payload.jmeno,
      payload.prijmeni,
      payload.telefon,
      payload.email,
      payload.poznamka ?? null,
      await hashIp(ip)
    )
    .run();
}

async function hashIp(ip: string): Promise<string> {
  if (!ip) return '';
  const data = new TextEncoder().encode(ip + '|sh-rez');
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const origin = req.headers.get('Origin');
    if (req.method === 'OPTIONS') return cors(origin, 204);
    if (req.method !== 'POST') return cors(origin, 405, JSON.stringify({ error: 'method_not_allowed' }));

    const url = new URL(req.url);
    if (url.pathname !== '/submit') return cors(origin, 404, JSON.stringify({ error: 'not_found' }));

    let payload: Payload;
    try { payload = (await req.json()) as Payload; }
    catch { return cors(origin, 400, JSON.stringify({ error: 'invalid_json' })); }

    /* Validace: povinná pole */
    const required: (keyof Payload)[] = ['koncept', 'mesic', 'delka', 'jmeno', 'prijmeni', 'telefon', 'email', 'gdpr'];
    for (const k of required) {
      if (!payload[k]) return cors(origin, 400, JSON.stringify({ error: 'missing_field', field: k }));
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return cors(origin, 400, JSON.stringify({ error: 'invalid_email' }));
    if (payload.poznamka && payload.poznamka.length > 500) return cors(origin, 400, JSON.stringify({ error: 'poznamka_too_long' }));

    /* Turnstile verification */
    const token = payload['cf-turnstile-response'] ?? '';
    const ip = req.headers.get('CF-Connecting-IP') ?? '';
    if (!token) return cors(origin, 400, JSON.stringify({ error: 'turnstile_missing' }));
    const okCaptcha = await verifyTurnstile(token, env.TURNSTILE_SECRET, ip);
    if (!okCaptcha) return cors(origin, 403, JSON.stringify({ error: 'turnstile_failed' }));

    /* Persist + notify */
    try {
      await storeInD1(env, payload, ip);
      await sendNotification(env, payload);
    } catch (err) {
      console.error('Submit pipeline error', err);
      return cors(origin, 500, JSON.stringify({ error: 'persist_or_notify_failed' }));
    }

    return cors(origin, 200, JSON.stringify({ ok: true }));
  },
};
