# sh-web — CLAUDE.md

Operational handoff for the next agent or human colleague working on the Startovací Hub Klecany site. The README is for end-users; this file captures decisions, gotchas, and open loops.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Repo at [github.com/keiaiendiel/sh-web](https://github.com/keiaiendiel/sh-web). Currently deployed to GitHub Pages at **https://keiaiendiel.github.io/sh-web/**; will move to **startovacihub.cz** when DNS is cut over.

The Hub is the first phase of the VPD1 záměr (revitalization of horní kasárny Klecany). The Hub site funnels future residents into the pre-reservation form on `/rezervace/`. Investors get a single secondary CTA on the landing (paired with the residents CTA) + a footer pointer; the actual investor surface lives on the sibling vpd-web at [keiaiendiel.github.io/vpd-web/vpd1/](https://keiaiendiel.github.io/vpd-web/vpd1/) (eventually `vepde.com`).

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections (MDX + JSON), Zod-validated |
| Styling | Vanilla CSS with tokens in `src/styles/`. **Plum accent `#5A2A5F`**, light radii (`--radius-input: 4px`) for inputs/CTA/cards |
| Fonts | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | Tiny inline `<script is:inline>` islands per component (header drawer, form submit, FAQ tabs, lightbox, Leaflet map) — no bundle |
| Map | Leaflet 1.9.4 (CDN unpkg) + CARTO Voyager tiles, only on `/o-arealu/` |
| Deploy | GitHub Pages at `keiaiendiel.github.io/sh-web/`. `astro.config.mjs` has `site: 'https://keiaiendiel.github.io'` + `base: '/sh-web/'`. CI: `.github/workflows/deploy-pages.yml` runs lint:editorial + build + lint:weight on push to master, then `actions/deploy-pages@v4`. |

## Pages (12)

`/` Landing · `/rezervace/` standalone reservation page · `/projekty/` provoz cards index · `/projekty/<slug>/` × 6 (komunitni-centrum, coworking-centrum, komunitni-pivovar, bytove-druzstvo, sauna-bazen, sportoviste-park) · `/o-arealu/` data-first chapter layout · `/faq/` audience-tabbed · `/404`.

## Current state (post 2026-04-30 redesign + 2 polish rounds)

All 12 pages build cleanly. Lint:editorial + lint:weight + lint:links all green. Reality-checked against **PDF "Zadávací dokumentace OSA228 z 2.9.2025"** — copy now references real claims (~331 jednotek 1+kk in budovách A1–A6 + C, ~6 700 m² ČPP, sdílené zázemí v objektech B/C/D/E + park, tramvajová zastávka Výzkumný ústav I. s vydaným stavebním povolením, vize z diplomových prací ČVUT).

### Layout per page

**Landing (`/`):**
- Hero — 4-image slide carousel (sh-1..4 from `public/images/hub/hero/`). 20 s loop, 5 s per frame, 1 s cross-overlap. `animation-delay: -1s` on image 0 starts it already on-screen. `prefers-reduced-motion` freezes on sh-1.
- Hero kicker row carries "Areál horních kasáren · Klecany" (left) and "Záměr VPD1 →" (right, exit-link). The row has `max-width: clamp(320px, 48vw, 660px)` so the right kicker lines up with the end of the H1's "Startovací hub." text, not the viewport edge.
- "Co Hub nabídne" — 4 format cards (Kapsle / Klidnější / Jednolůžkový / Sdílený). Kapsle uses real photo (`kapsle.jpg`); other three use migrated indoor renders.
- 4-claim 2×2 grid (Koncept / Pro koho / Sdílené prostory / Stipendium) with a thin cross divider in the middle (achieved via per-cell border-right + border-bottom on the first 3 cells).
- Vizualizace zigzag — 5 alternating ltr/rtl rows, slight overlap (`margin-top: clamp(-100px, -5vw, -40px)` on rows 2–5), `align-items: center`. **IntersectionObserver reveal-on-scroll**: rows fade up + opacity 0→1 over 700 ms when they enter the viewport. Image hover scales 1.015. Each image is wrapped in a `<button data-lightbox-open>` — clicking opens a fullscreen lightbox.
- **Lightbox** (`#hub-lightbox`): fullscreen overlay, ESC closes, click outside closes, ← / → arrow keys + buttons navigate, counter "1 / 5", caption shows row eyebrow + title.
- **Dual CTA pair**: left card is the residents banner ("Chci tu bydlet" — 2 px plum border, white bg, plum CTA pill), right card is the investor exit ("Investice do záměru" — 1 px K30 outline, white bg, black outline CTA → vpd-web/vpd1).
- "Jak se Hub rozrůstá" — 3-col teaser grid keyed off the `subProjects` collection.
- "Místo / Kde to je" — masterplan on the right, copy on the left, link to `/o-arealu/#misto`.
- FAQ teaser (3 questions q1/q5/q7) + link to `/faq/`.

**`/rezervace/`:**
- Dark image hero (hub-courtyard-night.jpg) with eyebrow "PŘED-REZERVACE", H1 "Před-rezervujte si místo.", lede.
- Meta strip below hero (Žádná platba / Žádný pořadník / Krátké), 3-col with internal vertical dividers.
- Form shell (`.rsv-form-shell`): outer `max-width: 880px`, the inner `<form>` has 1 px K20 border, 4 px radius, layered box-shadow (subtle multi-layer + plum tint at the deepest layer).
- Form: 8-question research-spec flow + role-branch reveal + contact + consent.
- Status pull-quote ("Aktuální stav" — what happens after submit) sits between form and the 3-step "Co se stane po odeslání".
- Mini-FAQ at the bottom (q5/q7/q8 — resident audience).

**`/o-arealu/`:**
- Dark image hero (hub-street-sunset.jpg) with eyebrow "O areálu", title "Místo, čas a kontext."
- Three chapters (vpd-web style): **01 Klecany · 12 km od Prahy** (8-row fact table + masterplan figure), **02 Časová osa** (6-stamp timeline), **03 Co stojí za Hubem** (OSA II identity, Marek Semerád, ČVUT diplomky, financial framing).
- **Map banner under chapter 01**: full-width Leaflet map (CARTO Voyager tiles, plum SVG marker at 50.17430 / 14.40824, custom popup with Horní kasárna Klecany + Dolní Kasárna 250 67 + Mapy.com link). Address line below the map carries the same data in plain text. Wheel-zoom is disabled until the user clicks/focuses the map (so it doesn't hijack page scroll).

**`/projekty/`:**
- Dark image hero (hub-courtyard-night.jpg) with title "Hub se rozrůstá postupně.".
- 3-col grid of 6 sub-project cards. Each card carries a building-eyebrow ("Objekt B" / "Přízemí budovy C" / "Objekty D + E" / "Park před objektem B" / "Vlastnické vehiklum") + name + role + status pill.
- Below cards: **Mapa areálu / Kde co bude** section with `2D-MAP.jpeg` (masterplan) and 16 000 / 18 000 / 82 000 m² breakdown.

**`/projekty/<slug>/`** (6 pages):
- Same dark-image hero pattern (no per-slug image yet — uses landing aesthetic).
- Back link → "Všechny provozy", building eyebrow, name, role, status pill.
- MDX body (Co to bude / Pro koho / Stav).
- Dual-button CTA panel at the bottom: primary = `/rezervace/`, ghost = `mailto:vpd@osa2.cz`.

**`/faq/`:**
- Dark image hero (hub-courtyard-trees.jpg) with eyebrow "ČASTÉ OTÁZKY", H1 "FAQ", lede with mailto.
- Audience tabs: "Vše" / "O projektu" / "Pro obyvatele" — active tab is plum-filled.
- `<details>` accordion items.

### Sub-page hero pattern (shared aesthetic)

All non-landing pages use the same dark image hero pattern (different per-page selectors `.sp-hero` / `.rsv-hero` / `.op-hero` / `.pj-hero` / `.pjd-hero`):

- `min-height: clamp(320px, 46vh, 440px)`, `display: flex; align-items: flex-end`.
- Background: full-bleed `<img>` with `filter: brightness(0.42) saturate(0.92)`.
- Scrim: vertical gradient `rgba(0,0,0,0.30)` → `rgba(0,0,0,0.65)`.
- Inner padding: `clamp(56px, 9vw, 96px) gutter clamp(40px, 6vw, 72px)`, max-width 760 px.
- Eyebrow: `rgba(255,255,255,0.78)`. H1: `clamp(36px, 5.5vw, 64px)`. Lede: white-ish.

Keep new sub-pages on this pattern.

## Design decisions worth knowing

**Plum accent.** `--c-plum: #5A2A5F` (one of the 8 OSA tricolor accent colors) is the Hub sub-identity. Consumed everywhere via `--accent`. `--accent-soft: rgba(90, 42, 95, 0.12)` for focus rings. CTA hover shadows use `rgba(90, 42, 95, 0.30–0.45)`.

**Light radii.** `--radius-input: 4px` is the only departure from OSA's strict-zero radii system. Applied to: form fields (input / textarea / pill radia), CTA buttons, teaser cards, info boxes. Big sections, page hairlines, brand surfaces still use `0`.

**Header.** `Header.astro` takes `variant: 'light' | 'dark'`. All hero pages (`/`, `/rezervace/`, `/o-arealu/`, `/projekty/`, `/faq/`, `/projekty/<slug>/`) use `dark` to fuse with the dark hero. Brand row is `<OsaGlyph size="14px">` + `<span class="hub-header__wordmark">Startovací Hub</span>` in inline-flex. Nav: `Projekty` / `O areálu` / `FAQ` + `Rezervace` (CTA pill, plum hover/active fill). Mobile drawer locks page scroll via `osa-nav-lock` class on `<html>`.

**Landing CTA pair.** Two side-by-side cards replace the prior single Chci-tu-bydlet banner + investor-out strip. Left card has 2 px plum border (residents emphasis); right card has 1 px K30 outline (subtle investor exit). No SVG pattern background — kept clean per the brief. Stacks 1-col on mobile.

**Zigzag lightbox.** The `<button data-lightbox-open>` wrappers on every zigzag image collect into an array at DOM-ready, then click → open a fullscreen overlay (`#hub-lightbox`). The script handles ESC/click-outside close, ← / → keyboard navigation, counter, and caption (sourced from each row's eyebrow + h3). Pure inline JS — no library.

**Leaflet map (`/o-arealu/`).** Loads Leaflet 1.9.4 from unpkg via `<link>` + `<script src>`, then a small inline script initialises `#op-map` centred on `[50.17430, 14.40824]`, drops a plum SVG marker, and shows a styled popup with the address ("Horní kasárna Klecany — Dolní Kasárna 250 67 Klecany" + Mapy.com link). CARTO Voyager (light-no-labels) tiles are used to keep the map clean and brand-friendly. Wheel-zoom is disabled until the user clicks the map (avoids page-scroll hijack). Brand overrides on `.leaflet-control-attribution`, `.leaflet-control-zoom`, `.op-map-popup-wrap` are scoped via `:global()`.

**Footer reads `org` collection.** `Footer.astro` calls `getEntry('org', 'identity')` to render Marek Semerád + `vpd@osa2.cz`. `org/identity.json` carries OSA II legal identifiers that drive JSON-LD on every page.

**Editorial linter v8 state.** Em-dashes, en-dashes, and `!` are allowed in body. Voice rules (passive, marketing-hype, legalese) still enforced. Ellipsis is reserved for the locked motto only — placeholders in form `placeholder` attributes need to use `.` instead. Linter rules live in `scripts/lint-editorial.mjs`.

**FAQ tabs.** `<details>` items are progressive enhancement — open/close works without JS. The audience tabs use a small inline script to toggle `g.hidden` on each `[data-group]`. Two audiences live now: `project` and `resident`.

## Repo layout

```
sh-web/
├── astro.config.mjs              # site=keiaiendiel.github.io, base=/sh-web/ (transitional)
├── .claude/launch.json           # Preview server config (sh-web on port 4322)
├── .github/workflows/
│   ├── ci.yml                    # PR + push: lint + build + dist artifact
│   └── deploy-pages.yml          # push to master: lint + build + actions/deploy-pages@v4
├── public/
│   ├── fonts/*.woff2             # Atyp Special Medium, Bold, Italic
│   ├── images/hub/{exterior,interior,hero,masterplan.jpg}
│   ├── og/default.{svg,png}
│   ├── favicon.svg, apple-touch-icon.png, manifest.webmanifest
│   ├── robots.txt
├── scripts/
│   ├── lint-editorial.mjs        # voice/style lint
│   ├── lint-links.mjs            # external-URL HEAD check
│   ├── lint-weight.mjs           # per-page eager budget
│   └── migrate-hub-images.mjs    # one-shot image migration (incl. selected/, kapsle, cowork, trznice, sport)
├── src/
│   ├── content.config.ts         # subProjects, faq, org collections
│   ├── content/
│   │   ├── sub_projects/         # 6 mdx: komunitni-centrum, coworking-centrum,
│   │   │                         # komunitni-pivovar, bytove-druzstvo,
│   │   │                         # sauna-bazen, sportoviste-park
│   │   ├── faq/index.json        # 8 keyed Q&As (q1..q8: 4 project + 4 resident)
│   │   └── org/identity.json     # OSA legal identity
│   ├── components/               # Header, OsaGlyph, Footer, Tooltip, Gallery,
│   │                             # ResidentForm, RevealOnScroll, SVGPattern (8 files)
│   ├── layouts/Base.astro        # html/head with title/desc/OG/JSON-LD; mounts Header + slot + Footer + RevealOnScroll
│   ├── pages/
│   │   ├── index.astro           # Landing
│   │   ├── rezervace/index.astro # Reservation page
│   │   ├── projekty/{index, [slug]}.astro
│   │   ├── o-arealu/index.astro  # was /o-projektu/ pre 2026-04-30 polish
│   │   ├── faq/index.astro
│   │   └── 404.astro
│   ├── styles/                   # tokens.css, kit.css, motion.css
│   └── utils/url.ts              # withBase() — prefixes /sh-web/ until DNS flip
└── docs/superpowers/plans/...    # implementation plans, kept for reference
```

## Running the project locally

```bash
pnpm install         # once (after clone)
pnpm dev             # http://localhost:4321 (or 4322 if launched via .claude/launch.json sh-web config)
pnpm build           # writes to dist/
pnpm preview         # serves dist/ — useful before deploy
```

### Live preview from inside Claude Code

The repo carries `.claude/launch.json` so the agent can spin up the dev server via the `mcp__Claude_Preview__preview_start` tool with `name: "sh-web"`. It binds to port 4322 (separate from any sibling project's 4321) and reuses across sessions if already running.

## Lints

```bash
pnpm lint            # editorial + links
pnpm lint:editorial  # voice/style lint over src/content/**/*.mdx and page bodies
pnpm lint:links      # HEAD-check external URLs (none configured currently)
pnpm lint:weight     # per-page eager-weight budget against dist/
```

All three must pass. `lint:editorial` is the strictest — it forbids passive voice, marketing hype, legalese, and ellipsis (except in the locked motto). The deploy-pages workflow runs all three on every push to master.

## Image migration

```bash
pnpm migrate:images
```

Reads from `../../12 Startovaci Hub/image/` (sibling content folder) and pulls in raw photos, hero `selected/sh-{1..4}.jpeg`, and named extras (`kapsle.jpg`, `cowork.jpeg`, `trznice-pivovar.jpeg`, `sport.jpeg`). Sharp resizes to max-edge 1600 px at q80 (masterplan: 1800 px). Output goes to `public/images/hub/{exterior,interior,hero,masterplan.jpg}`.

Re-run any time source files change.

## Pushing to GitHub

The `master` branch is the deploy branch — every push triggers `.github/workflows/deploy-pages.yml` which lints, builds, and deploys to GitHub Pages.

```bash
git status                                    # always inspect first
git add <specific files>                      # never `git add -A` blindly
git commit -m "feat(hub): describe what+why"  # use conventional-commit prefixes
git push origin master                        # deploys automatically
```

Recent commits use prefixes `feat(hub):`, `docs(hub):`, `fix(hub):`, `ci(hub):`. Match this for consistency.

If your changes haven't been reviewed locally:

```bash
pnpm build && pnpm lint:editorial && pnpm lint:weight   # match CI
pnpm dev                                                # verify visually
```

The deploy takes ~2 minutes from push to live. Watch the action at [github.com/keiaiendiel/sh-web/actions](https://github.com/keiaiendiel/sh-web/actions).

## Open loops / known issues

- **Transitional GH Pages base path.** Site lives at `keiaiendiel.github.io/sh-web/` so `astro.config.mjs` carries `base: '/sh-web/'` and `tokens.css` font URLs are `/sh-web/fonts/...`. When DNS to `startovacihub.cz` is ready: change `site` to `https://startovacihub.cz`, delete the `base` line, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. `withBase()` becomes a no-op automatically.
- **Sticky header stays dark on scroll** on hero pages (variant `dark` to fuse with hero). Acceptable but worth flagging — switch to a scroll-driven variant flip if it reads wrong.
- **Per-format room schematics on the landing's "Co Hub nabídne"** still use migrated stand-in interior renders (apart from Kapsle, which now has a real photo). Replace when the operator supplies real schematics for the other three.
- **Per-sub-project thumbnails on /projekty/** are a mix of placeholder boxes and real photos (Komunitní Centrum / Coworking Centrum / Sportoviště + park have a `thumbnail` field; the rest still show "Vizualizace v přípravě"). Drop assets into `public/images/hub/...` and add `thumbnail: "/sh-web/images/hub/..."` to the relevant MDX frontmatter.
- **Pre-reservation form `console.log`s payload.** Backend wiring (validation, anti-spam, autoresponse, storage) is the next step before public launch.
- **`lint:weight` doesn't see the hero image because of the base path.** The hero is `<img>` (so the linter's walker should pick it up), but the script tries to resolve `/sh-web/images/...` against `dist/sh-web/...` and `dist/` is flat (`dist/images/...`). Either teach the linter to strip the configured base prefix, or wait for the DNS flip when `base` becomes `/`.
- **Leaflet loaded from CDN (unpkg).** No local fallback; if unpkg goes down the map falls back to an empty `<div>`. Acceptable for v1; consider self-hosting if stability becomes a concern.
- **Backup branch.** `backup/osa-web-pre-hub-redesign` is **local only** and carries the OSA-parent state plus uncommitted WIP that existed when the redesign started. Keep it until the Hub site has been in production for at least one cycle.

## Editorial rulebook

Active rules in `scripts/lint-editorial.mjs`: no passive voice (`je realizováno`, `je zajišťováno`, etc.), no legalese (`ve smyslu §`), no marketing hype (`úžasný`, `revoluční` etc.), ellipsis only inside the locked motto. Em/en-dash and `!` are allowed.

## Contact points

- Operator: Občanské sdružení Alternativa II, z.s. (OSA II / OSA2 / Alternativa II).
- Předseda: Marek Semerád — `vpd@osa2.cz`.
- Místopředseda: Štěpán Říha.
- Legal identifiers + bank accounts: `src/content/org/identity.json`.

## Deploy checklist (before public launch on startovacihub.cz)

1. **Replace per-format room schematics** (Klidnější / Jednolůžkový / Sdílený) on the landing and per-sub-project thumbnails on /projekty/ when the operator delivers them.
2. **Wire pre-reservation form backend.** The form currently `console.log`s payloads with the 8-question shape (role, stay, renewal, budget, place, prague-frequency, priorities array, social, branch fields, contact). A programmer needs to add a serverless endpoint, validation, anti-spam, autoresponses, and storage.
3. **Cut DNS over to startovacihub.cz.** Either custom-domain on GitHub Pages (drop a `CNAME` file in `public/` with `startovacihub.cz`, configure DNS A/AAAA records to GH Pages, enable HTTPS in repo settings) or migrate to Cloudflare Pages / Netlify. After DNS: flip `astro.config.mjs` to `site: 'https://startovacihub.cz'` + remove `base`, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. One commit, GH Pages auto-redeploys.
4. **Analytics decision** — Plausible or GoatCounter if anything; out of scope for v1.

The repo builds, lints, and auto-deploys on every push to master; nothing on the technical side blocks launch beyond the deferred items above. Live preview: https://keiaiendiel.github.io/sh-web/.
