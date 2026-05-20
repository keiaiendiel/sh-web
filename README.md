# sh-web

Statický web Startovacího Hubu Klecany. Astro 6, deploy na GitHub Pages, kanonická doména po DNS cutoveru: `startovacihub.cz`.

## Stack

- Astro 6.1.8, static output, čeština.
- `@astrojs/mdx` + `@astrojs/sitemap`.
- Vanilla CSS s design tokens. Žádný framework, žádný bundler na klientu.
- `lucide-static` pro ikony (server-side rendered SVG).
- `sharp` pro image optimalizaci (dev script).
- Atyp Special font, WOFF2 self-hosted v `public/fonts/`.
- Leaflet 1.9.4 z unpkg CDN (jen `/okoli/` a mapa v patičce).
- Cloudflare Worker v `worker/` pro form backend — Turnstile + Resend + D1.

## Repo layout

```
sh-web/
├── astro.config.mjs        # site + transitional base /sh-web/
├── tsconfig.json           # extends astro/tsconfigs/strict
├── package.json            # 4 prod deps, Node ≥22.12
├── public/
│   ├── fonts/              # Atyp Special WOFF2
│   ├── images/hub/         # produkční fotky (areal, hero, ubytovani, …)
│   ├── favicon.svg, apple-touch-icon.png, manifest.webmanifest
│   ├── robots.txt          # disallow /druzstvo/ a /rezervace/?
│   └── CNAME               # GitHub Pages domain pin
├── src/
│   ├── content.config.ts   # Zod schémata 4 collections
│   ├── content/
│   │   ├── apartmany/      # 5 MDX (1+kk až 5+kk)
│   │   ├── coliving/       # 4 MDX (kapsle, lůžka)
│   │   ├── faq/            # 1 JSON (10 otázek)
│   │   └── org/            # 1 JSON (OSA II identita pro JSON-LD)
│   ├── components/         # Astro komponenty (Gallery, Icon, SubpageHero, …)
│   ├── layouts/Base.astro  # html/head, JSON-LD LocalBusiness, BreadcrumbList
│   ├── pages/              # 23 stránek (viz Routes níže)
│   ├── styles/             # tokens.css, kit.css, motion.css, ribbon.css
│   └── utils/url.ts        # withBase() helper pro transitional base path
├── scripts/                # lint + image pipeline (Node ESM)
├── worker/                 # Cloudflare Worker scaffold (form backend)
├── .github/workflows/      # deploy-pages.yml
└── _incoming/              # staging area pro klientovy fotky (gitignored)
```

## Content collections (`src/content.config.ts`)

| Collection | Type | Files | Použití |
|---|---|---|---|
| `apartmany` | MDX | 5 | `/ubytovani/privatni/<slug>/` detail pages |
| `coliving` | MDX | 4 | `/ubytovani/co-living/<slug>/` detail pages |
| `faq` | JSON | 1 | `/faq/` + landing teaser |
| `org` | JSON | 1 | JSON-LD na všech stránkách (LocalBusiness) |

Schémata jsou Zod-validovaná v `src/content.config.ts`. Cenová data, slugs, kapacita a galerie žijí ve frontmatteru MDX souborů.

## Routes (23)

| Sekce | Cesty |
|---|---|
| Landing | `/` |
| Ubytování | `/ubytovani/`, `/ubytovani/privatni/<slug>/` ×5, `/ubytovani/co-living/<slug>/` ×4, `/kapsle/` |
| Obsah | `/coworking/`, `/komunita/`, `/okoli/`, `/doprava/`, `/stipendia/`, `/kontakty/`, `/faq/` |
| Formulář | `/rezervace/` |
| Legal | `/gdpr/`, `/metodika-srovnani/` |
| Skryté | `/druzstvo/` (noindex, manuální linky), `/404` |

Dynamic routes pro detail pages tahají data z odpovídající content collection.

## Styly

| Soubor | Obsah |
|---|---|
| `src/styles/tokens.css` | CSS proměnné: barvy (K0–K100 + plum `#5A2A5F`), typografie, spacing, radius (`--radius-input: 7px`). |
| `src/styles/kit.css` | Reusable patterny: `.sec-feature`, `.sec-table`, `.sec-hero`, `.ub-card`, `.rez-*` (wizard), gallery, buttons, dropdown nav. |
| `src/styles/motion.css` | Hero carousel, reveal-on-scroll, pulse animace. |
| `src/styles/ribbon.css` | SVG ribbon dekorace pro placeholder boxy. |

Interaktivita je vanilla JS v malých inline `<script is:inline>` islands přímo v Astro souborech — žádný klientský bundle.

## Reservation form

`/rezervace/` je 5-step wizard (vanilla JS state machine, inline v `<script>`):

1. Koncept (privátní / co-living / „nevím, poraďte").
2. Konfigurace prostoru (radio karty per koncept, data z `apartmany` + `coliving` collections).
3. Termín + stipendium toggle.
4. Kontakt (telefon povinný).
5. Rekapitulace + GDPR.

Sidebar zobrazuje aktuální cenu + „vše v ceně" checklist. URL pre-fill: `/rezervace/?typ=<slug>` z RoomCard tlačítek na overview stránce.

Submit zatím dělá `console.log(payload)` a zobrazí success state. Frontend napojení na Worker viz níže.

## Cloudflare Worker (`worker/`)

TypeScript Worker pro `POST /submit`:

- Turnstile invisible captcha verifikace.
- Validace povinných polí + e-mail regex + 500-char limit na poznámku.
- Resend e-mail notifikace na `NOTIFY_EMAIL`.
- D1 (EU region) persistence per `worker/schema.sql`.
- SHA-256 hash IP pro rate limiting (GDPR-friendly, raw IP se neukládá).
- CORS allowlist: `startovacihub.cz`, `www.startovacihub.cz`, `keiaiendiel.github.io`.

Detailní deploy postup je v `worker/README.md`. Pre-deploy checklist:

1. `wrangler login`
2. `wrangler d1 create sh-web-rezervace` → zkopírovat `database_id` do `worker/wrangler.toml` (oba placeholdery `REPLACE_WITH_D1_ID`).
3. `pnpm --filter=./worker d1:init` (inicializuje schema).
4. Vytvořit Turnstile site v Cloudflare dashboardu (hostnames `startovacihub.cz`, `keiaiendiel.github.io`, mode invisible).
5. `wrangler secret put TURNSTILE_SECRET` / `RESEND_API_KEY` / `NOTIFY_EMAIL`.
6. Verifikovat doménu v Resend dashboardu (DKIM + SPF).
7. `pnpm --filter=./worker deploy`.
8. V CF dashboardu `Workers > sh-web-form > Triggers > Custom Domains` přidat `form.startovacihub.cz`.

Frontend wiring (po deploy Workeru) — `src/pages/rezervace/index.astro`:

- Přidat Turnstile widget script + DOM placeholder.
- Nahradit `console.log(payload)` za `fetch('https://form.startovacihub.cz/submit', { method: 'POST', body: JSON.stringify({ ...payload, 'cf-turnstile-response': token }) })`.
- Větvit success/error state podle response statusu.

## Lokální vývoj

```bash
pnpm install
pnpm dev        # http://localhost:4321 (4322 přes .claude/launch.json)
pnpm build      # writes dist/
pnpm preview    # serves dist/
```

## Scripts

| Příkaz | Co dělá |
|---|---|
| `pnpm lint` | `lint:editorial` + `lint:links` |
| `pnpm lint:editorial` | Voice/style lint na MDX + Astro page bodies (`scripts/lint-editorial.mjs`) |
| `pnpm lint:links` | HEAD check externích URLs |
| `pnpm lint:weight` | Per-page eager-load budget na `dist/` |
| `pnpm migrate:images` | One-shot import fotek z externí složky |
| `pnpm optimize:images` | Re-encode >600 KB na q=80 mozjpeg, max edge 1600 px, auto `.png` → `.jpg` |

CI volá `lint:editorial` + `build` + `lint:weight`. Všechny tři musí projít, jinak deploy spadne.

## CI / Deploy

`.github/workflows/deploy-pages.yml` — push na `master` spustí:

1. `pnpm install`
2. `pnpm lint:editorial`
3. `pnpm build` (s `base: /sh-web/`)
4. `pnpm lint:weight`
5. `actions/deploy-pages@v4`

Node 22, všechny actions `@v4`.

## DNS cutover (startovacihub.cz)

Až bude doména připravená:

1. `astro.config.mjs` — `site: 'https://startovacihub.cz'`, smazat řádek `base: '/sh-web/'`.
2. `src/styles/tokens.css` — find/replace `/sh-web/fonts/` → `/fonts/`.
3. `public/CNAME` — obsah na `startovacihub.cz`.
4. `src/utils/url.ts` — `withBase()` se stane no-op (vrací path beze změny).
5. Worker CORS whitelist obsahuje `startovacihub.cz` (už ano).

## Konvence

- Conventional commits s `(hub)` scopem: `feat(hub):`, `fix(hub):`, `refactor(hub):`, `docs(hub):`, `content(hub):`, `style(hub):`, `ci(hub):`, `chore(hub):`.
- Vždy `git add <konkrétní soubory>`, nikdy `git add -A` (kvůli image staging adresářům a `.DS_Store` risku).
- `master` je deploy branch — každý push triggeruje CI + deploy.
- Žádný klientský framework (žádný React, Vue, htmx). Interaktivita = malé inline `<script is:inline>` islands.

## Co zbývá pro public launch

1. Cloudflare Worker — deploy podle postupu výše.
2. Frontend wiring formuláře na Worker endpoint.
3. DNS cutover na `startovacihub.cz`.
4. Doplnit chybějící produkční fotky (placeholder slots v Gallery).
5. Analytics (Plausible / GoatCounter — out of scope v1, otázka pro klienta).
