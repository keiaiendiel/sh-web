# sh-web-form Worker

Rezervační backend pro Startovací Hub Klecany. Cloudflare Worker, Turnstile invisible captcha, Resend pro notifikační e-maily, D1 v EU jurisdikci pro persistenci.

**Endpoint po deploy:** `POST https://form.startovacihub.cz/submit`

## Setup (před prvním deploy)

```bash
# 1. Install
cd worker
pnpm install

# 2. Cloudflare login
wrangler login

# 3. Vytvoř D1 databázi (zkopíruj database_id do wrangler.toml)
wrangler d1 create sh-web-rezervace
# výstup pošli do wrangler.toml [[d1_databases]] database_id

# Pro preview environment (volitelné):
wrangler d1 create sh-web-rezervace-preview
# pošli ID do preview_database_id

# 4. Inicializuj schema
pnpm d1:init

# 5. Vytvoř Turnstile site (https://dash.cloudflare.com → Turnstile → Add site)
#    Hostnames: startovacihub.cz, keiaiendiel.github.io
#    Mode: invisible
#    Skopíruj site key do astro front-endu (src/pages/rezervace/index.astro,
#    do <Turnstile/> komponenty Phase 5b), secret key do Worker secret:
wrangler secret put TURNSTILE_SECRET

# 6. Resend API key z https://resend.com → API Keys → Create API Key
wrangler secret put RESEND_API_KEY
# Verifikuj doménu startovacihub.cz v Resend dashboardu (DNS DKIM + SPF).

# 7. Notifikační e-mail kam přijdou rezervace
wrangler secret put NOTIFY_EMAIL
# zadej: vpd@osa2.cz (nebo aktuální koordinátor rezervací)

# 8. Deploy
pnpm deploy

# 9. Custom doména: Cloudflare dashboard → Workers & Pages → sh-web-form
#    → Triggers → Custom Domains → Add Custom Domain → form.startovacihub.cz
```

## Front-end napojení (Phase 5b)

`src/pages/rezervace/index.astro` aktuálně dělá `console.log(payload)` v submit
handleru. Phase 5b doplní:

1. Script tag s Turnstile widget (`https://challenges.cloudflare.com/turnstile/v0/api.js`)
2. Submit POST na `https://form.startovacihub.cz/submit` s JSON body včetně `cf-turnstile-response`.
3. Render success/error UI podle response statusu.

Současný success state v Astro stránce zůstává jako post-submit UX, jen se k němu dostane až po úspěšné HTTP response.

## Validace na Workeru

- Povinná pole: koncept, mesic, delka, jmeno, prijmeni, telefon, email, gdpr
- E-mail regex
- Poznámka max 500 znaků
- Turnstile token validace
- CORS allowlist: startovacihub.cz, www.startovacihub.cz, keiaiendiel.github.io

## D1 schema (`schema.sql`)

Sloupce: id, created_at, koncept, format, mesic, delka, stipendium, jmeno, prijmeni,
telefon, email, poznamka, ip_hash, status, notes.

`ip_hash` je SHA-256(ip + salt) prvních 32 znaků, slouží jen pro rate-limiting,
GDPR-friendly (raw IP se neukládá).

`status` se ručně updatuje rezervačním týmem (novy → volano → dohodnuto / odmitnuto).
Plánovaný interní dashboard pro správu otevřené.

## Backup a export

```bash
pnpm d1:dump   # exportuje do backup.sql
```

Doporučená frekvence: 1× měsíčně manuálně. Pro automatizaci by šlo nasadit
GitHub Action s `wrangler d1 export`.

## Náklady (orientačně)

Cloudflare:
- Worker: free tier 100 000 requests/den, dost pro očekávanou poptávku
- D1: free tier 5 GB storage, 25M reads/měs, 50k writes/měs
- Turnstile: zdarma

Resend:
- 3 000 e-mailů/měs zdarma, pak $20 za 50 000 e-mailů

Realistická spotřeba prvního roku: < 0,5 % free tieru. Worker je téměř zdarma.

## Open loops

- Front-end submit handler napojit na endpoint (Phase 5b)
- Turnstile site key přenést do Astro stránky
- Custom doménu `form.startovacihub.cz` v Cloudflare nastavit (vyžaduje, aby
  apex doména už byla na Cloudflare DNS)
- Interní dashboard pro správu příchozích rezervací (Phase 6, mimo scope)
