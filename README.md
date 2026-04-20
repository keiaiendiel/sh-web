# osa-web

Public website for **Občanské sdružení Alternativa II, z.s.** (OSA). Built with Astro 6, zero client-side JavaScript except one 900-byte filter island on `/projekty/`. Designed to replace `alternativa2.info` at `osa2.cz`.

## Stack

| Piece              | Choice                                                 |
|--------------------|--------------------------------------------------------|
| Framework          | [Astro 6](https://astro.build) (static output)         |
| Language           | TypeScript strict                                      |
| Content            | Astro Content Collections (MDX + JSON)                 |
| Styling            | Vanilla CSS with tokens (no Tailwind, no CSS-in-JS)    |
| Fonts              | Self-hosted WOFF2 in `public/fonts/`                   |
| Deploy             | Cloudflare Pages (or any static host)                  |
| Domain             | `osa2.cz` (to be configured)                           |

## Scripts

```bash
pnpm install            # install deps
pnpm dev                # dev server, http://localhost:4321
pnpm build              # static build to dist/
pnpm preview            # serve dist/
pnpm lint               # run all linters
pnpm lint:editorial     # grep-based editorial rulebook enforcement
pnpm lint:links         # HEAD-check external_url in sub_projects
pnpm lint:weight        # verify dist/ fits the per-page weight budget
```

## Content model

All editable content lives in `src/content/`. Add a new sub-project by creating one MDX file:

```mdx
---
name: Můj nový projekt
description: 15-20 slov o tom, co projekt dělá.
accent: coral           # one of: red, coral, mustard, olive, forest, teal, blue, plum
year_from: 2026
status: pripravovany    # realizovany | pripravovany | ve-spanku | draft
relationship: pilotni   # autonomni | pilotni | ve-spanku
topic: kultura          # urbanismus | kultura | sport | media | vzdelavani | tvorba | komunita | larp
external_url: https://mujprojekt.cz   # omit if no own domain
featured: false
order: 100
---
```

Schema is enforced at build time via Zod (`src/content.config.ts`). An invalid accent or topic fails the build immediately.

Other collections:

- `src/content/values/axioms.json` - 16 spolková hodnoty
- `src/content/pillars/index.json` - 3 pilíře hospodaření
- `src/content/org/identity.json` - legal identifiers, contacts, addresses
- `src/content/dokumenty/*.json` - PDFs and archive entries

## Editorial rulebook

Enforced by `pnpm lint:editorial`. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full list and rationale. Highlights:

- No em dashes, no en dashes
- No exclamation points in body copy
- No passive-voice patterns (`je realizováno`, `je zajišťováno`, `snaha o`)
- No legalistic `ve smyslu §`
- No marketing hype (`úžasný`, `neuvěřitelný`, `zásadní význam`)
- Ellipsis reserved for `Pomáháme tvořit...` motto only
- Czech and Slovak diacritics must be correct

Lint script: [`scripts/lint-editorial.mjs`](./scripts/lint-editorial.mjs).

## Investment Hero (VPD1) DRAFT mode

The **Aktuálně: Záměr VPD1** block on the homepage is in DRAFT mode. Every financial figure (ROI %, mld. Kč, m²) is wrapped in a mustard-highlighted span with `data-review="pending"`. CTA buttons are `aria-disabled`. To activate for production:

1. Confirm every figure with Marek Semerád (předseda).
2. Change `<InvestmentHero confirmed={true} />` in `src/pages/index.astro`, or remove the component altogether if the campaign is paused.
3. Upload the real PDF to `public/dokumenty/Zamer_VPD1_zakladni_souhrn.pdf`.

## Performance budget

Checked on every build by `pnpm lint:weight`. Hard limits per page:

| Metric    | Budget |
|-----------|-------:|
| Total     | 400 KB |
| JS        |  10 KB |
| CSS       |  40 KB |
| Fonts (site total) | 160 KB |

Current homepage ships at ~51 KB total, CSS ~16 KB, JS 0 KB.

## Deploy

### Cloudflare Pages

1. Create a new Pages project in Cloudflare, connect it to this Git repository.
2. Build command: `pnpm build`
3. Build output directory: `dist`
4. Node version: 22
5. Environment variables: none required in v1.
6. Custom domain: `osa2.cz` (and optionally `www.osa2.cz`).
7. Retire `alternativa2.info` via 301 redirects (see `public/_redirects` for the placeholder pattern; full SEO-safe redirect map is a separate follow-up).

### GitHub Actions

`.github/workflows/ci.yml` runs on every push:

- `lint:editorial` (hard fail)
- `build`
- `lint:weight` (hard fail)
- `lint:links` (informational; third-party flakiness must not block merges)

## Out of scope (v1)

- English mirror
- Long-form body content for `/o-spolku/historie/` and `/o-spolku/metodologie/` (stubs only; the board fills them post-launch)
- Member-join backend (replaced by `mailto:` links)
- Image thumbnails on project cards
- Map embed on Kontakty
- Analytics of any kind
- Full SEO redirect map from `alternativa2.info/*` to `osa2.cz/*`

## Project layout

```
osa-web/
├── .github/workflows/ci.yml
├── public/
│   ├── fonts/                 # WOFF2 (Atyp Special, Space Grotesk)
│   ├── logo/osa-glyph.svg
│   ├── robots.txt
│   └── _redirects             # placeholder for production
├── scripts/
│   ├── lint-editorial.mjs
│   ├── lint-links.mjs
│   └── lint-weight.mjs
├── src/
│   ├── content/
│   │   ├── sub_projects/*.mdx       # 17 projects (6 full + 11 stubs)
│   │   ├── values/axioms.json       # 16 spolková hodnoty
│   │   ├── pillars/index.json       # 3 pilíře hospodaření
│   │   ├── org/identity.json        # legal identifiers
│   │   └── dokumenty/*.json         # archive entries
│   ├── content.config.ts            # Zod schemas
│   ├── components/                  # .astro components
│   ├── layouts/                     # Base.astro, LongformPage.astro
│   ├── pages/                       # routes
│   └── styles/
│       ├── tokens.css               # design system tokens
│       ├── kit.css                  # utility classes
│       └── motion.css               # motion rulebook
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Provenance

Plan and research lives in the OSA maker's Obsidian vault at `Projects/OSA_Website/OSA_Website_Plan.md` (binding spec). The Kit Audit at `Projects/OSA_Website/OSA_Website_Kit_Audit.md` documents which components were ported from the React UI kit and what changed during the port.
