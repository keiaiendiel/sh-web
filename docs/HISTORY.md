# sh-web — design + layout history

This file is **not auto-loaded into Claude conversations**. Open it on demand when you need per-page anatomy, design decisions, or context about the post-redesign state. Operational handoff lives in `CLAUDE.md`.

## Current state (post 2026-04-30 redesign + polish rounds)

All 12 pages build cleanly. `lint:editorial` + `lint:weight` + `lint:links` all green. Reality-checked against PDF "Zadávací dokumentace OSA228 z 2.9.2025" — copy references real claims (~331 jednotek 1+kk in budovách A1–A6 + C, ~6 700 m² ČPP, sdílené zázemí v objektech B/C/D/E + park, tramvajová zastávka Výzkumný ústav I. s vydaným stavebním povolením, vize z diplomových prací ČVUT).

## Layout per page

### Landing (`/`)

- Hero — 4-image slide carousel (sh-1..4 from `public/images/hub/hero/`). 20 s loop, 5 s per frame, 1 s cross-overlap. `animation-delay: -1s` on image 0 starts it already on-screen. `prefers-reduced-motion` freezes on sh-1.
- Hero kicker row carries "Areál horních kasáren · Klecany" (left) and "Záměr VPD1 →" (right, exit-link). Row has `max-width: clamp(320px, 48vw, 660px)` so the right kicker lines up with the end of the H1's "Startovací hub." text.
- "Co Hub nabídne" — 4 format cards (Kapsle / Klidnější / Jednolůžkový / Sdílený). Kapsle uses real photo (`kapsle.jpg`); other three use migrated indoor renders.
- 4-claim 2×2 grid (Koncept / Pro koho / Sdílené prostory / Stipendium) with a thin cross divider in the middle (per-cell border-right + border-bottom on the first 3 cells).
- Vizualizace zigzag — 5 alternating ltr/rtl rows, slight overlap (`margin-top: clamp(-100px, -5vw, -40px)` on rows 2–5), `align-items: center`. **IntersectionObserver reveal-on-scroll**: rows fade up + opacity 0→1 over 700 ms when they enter the viewport. Image hover scales 1.015. Each image is wrapped in a `<button data-lightbox-open>`.
- **Lightbox** (`#hub-lightbox`): fullscreen overlay, ESC closes, click outside closes, ← / → arrows + buttons navigate, counter "1 / 5", caption shows row eyebrow + title.
- **Dual CTA pair**: left card is the residents banner ("Chci tu bydlet" — 2 px plum border, white bg, plum CTA pill), right card is the investor exit ("Investice do záměru" — 1 px K30 outline, white bg, black outline CTA → vpd-web/vpd1).
- "Jak se Hub rozrůstá" — 3-col teaser grid keyed off the `subProjects` collection.
- "Místo / Kde to je" — masterplan on the right, copy on the left, link to `/o-arealu/#misto`.
- FAQ teaser (3 questions q1/q5/q7) + link to `/faq/`.

### `/rezervace/`

- Dark image hero (`hub-courtyard-night.jpg`) with eyebrow "PŘED-REZERVACE", H1 "Před-rezervujte si místo.", lede.
- Meta strip below hero (Žádná platba / Žádný pořadník / Krátké), 3-col with internal vertical dividers.
- Form shell (`.rsv-form-shell`): outer `max-width: 880px`, inner `<form>` has 1 px K20 border, 4 px radius, layered box-shadow (subtle multi-layer + plum tint at the deepest layer).
- Form: 8-question research-spec flow + role-branch reveal + contact + consent.
- Status pull-quote ("Aktuální stav") between form and the 3-step "Co se stane po odeslání".
- Mini-FAQ at bottom (q5/q7/q8 — resident audience).

### `/o-arealu/`

- Dark image hero (`hub-street-sunset.jpg`) with eyebrow "O areálu", title "Místo, čas a kontext."
- Three chapters: **01 Klecany · 12 km od Prahy** (8-row fact table + masterplan figure), **02 Časová osa** (6-stamp timeline), **03 Co stojí za Hubem** (OSA II identity, Marek Semerád, ČVUT diplomky, financial framing).
- **Map banner under chapter 01**: full-width Leaflet map (CARTO Voyager tiles, plum SVG marker at 50.17430 / 14.40824, custom popup with Horní kasárna Klecany + Dolní Kasárna 250 67 + Mapy.com link). Address line below the map carries the same data in plain text. Wheel-zoom is disabled until the user clicks/focuses the map.

### `/projekty/`

- Dark image hero (`hub-courtyard-night.jpg`) with title "Hub se rozrůstá postupně.".
- 3-col grid of 6 sub-project cards. Each card carries a building eyebrow ("Objekt B" / "Přízemí budovy C" / "Objekty D + E" / "Park před objektem B" / "Vlastnické vehiklum") + name + role + status pill.
- Below cards: **Mapa areálu / Kde co bude** with `2D-MAP.jpeg` (masterplan) and 16 000 / 18 000 / 82 000 m² breakdown.

### `/projekty/<slug>/` (6 pages)

- Same dark-image hero pattern (no per-slug image yet).
- Back link → "Všechny provozy", building eyebrow, name, role, status pill.
- MDX body (Co to bude / Pro koho / Stav).
- Dual-button CTA panel at the bottom: primary = `/rezervace/`, ghost = `mailto:vpd@osa2.cz`.

### `/faq/`

- Dark image hero (`hub-courtyard-trees.jpg`) with eyebrow "ČASTÉ OTÁZKY", H1 "FAQ", lede with mailto.
- Audience tabs: "Vše" / "O projektu" / "Pro obyvatele" — active tab is plum-filled.
- `<details>` accordion items.

## Sub-page hero pattern (shared aesthetic)

All non-landing pages use the same dark image hero pattern (different per-page selectors `.sp-hero` / `.rsv-hero` / `.op-hero` / `.pj-hero` / `.pjd-hero`):

- `min-height: clamp(320px, 46vh, 440px)`, `display: flex; align-items: flex-end`.
- Background: full-bleed `<img>` with `filter: brightness(0.42) saturate(0.92)`.
- Scrim: vertical gradient `rgba(0,0,0,0.30)` → `rgba(0,0,0,0.65)`.
- Inner padding: `clamp(56px, 9vw, 96px) gutter clamp(40px, 6vw, 72px)`, max-width 760 px.
- Eyebrow: `rgba(255,255,255,0.78)`. H1: `clamp(36px, 5.5vw, 64px)`. Lede: white-ish.

Keep new sub-pages on this pattern.

## Design decisions worth knowing

**Plum accent.** `--c-plum: #5A2A5F` (one of the 8 OSA tricolor accent colors) is the Hub sub-identity. Consumed everywhere via `--accent`. `--accent-soft: rgba(90, 42, 95, 0.12)` for focus rings. CTA hover shadows use `rgba(90, 42, 95, 0.30–0.45)`.

**Light radii.** `--radius-input: 4px` is the only departure from OSA's strict-zero radii system. Applied to: form fields, CTA buttons, teaser cards, info boxes. Big sections, page hairlines, brand surfaces still use `0`.

**Header.** `Header.astro` takes `variant: 'light' | 'dark'`. All hero pages use `dark` to fuse with the dark hero. Brand row is `<OsaGlyph size="14px">` + `<span class="hub-header__wordmark">Startovací Hub</span>` in inline-flex. Nav: `Projekty` / `O areálu` / `FAQ` + `Rezervace` (CTA pill, plum hover/active fill). Mobile drawer locks page scroll via `osa-nav-lock` class on `<html>`.

**Landing CTA pair.** Two side-by-side cards replace the prior single banner + investor-out strip. Left card has 2 px plum border (residents emphasis); right card has 1 px K30 outline (subtle investor exit). No SVG pattern background. Stacks 1-col on mobile.

**Zigzag lightbox.** The `<button data-lightbox-open>` wrappers on every zigzag image collect into an array at DOM-ready, then click → open a fullscreen overlay (`#hub-lightbox`). The script handles ESC/click-outside close, ← / → keyboard navigation, counter, and caption. Pure inline JS — no library.

**Leaflet map (`/o-arealu/`).** Loads Leaflet 1.9.4 from unpkg via `<link>` + `<script src>`, then a small inline script initialises `#op-map` centred on `[50.17430, 14.40824]`, drops a plum SVG marker, and shows a styled popup with the address. CARTO Voyager (light-no-labels) tiles. Wheel-zoom disabled until click. Brand overrides on `.leaflet-control-attribution`, `.leaflet-control-zoom`, `.op-map-popup-wrap` are scoped via `:global()`.

**Footer reads `org` collection.** `Footer.astro` calls `getEntry('org', 'identity')` to render Marek Semerád + `vpd@osa2.cz`. `org/identity.json` carries OSA II legal identifiers that drive JSON-LD on every page.

**FAQ tabs.** `<details>` items are progressive enhancement — open/close works without JS. Audience tabs use a small inline script to toggle `g.hidden` on each `[data-group]`. Two audiences live now: `project` and `resident`.

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
│   └── migrate-hub-images.mjs    # one-shot image migration
├── src/
│   ├── content.config.ts         # subProjects, faq, org collections
│   ├── content/
│   │   ├── sub_projects/         # 6 mdx
│   │   ├── faq/index.json        # 8 keyed Q&As
│   │   └── org/identity.json     # OSA legal identity
│   ├── components/               # Header, OsaGlyph, Footer, Tooltip, Gallery,
│   │                             # ResidentForm, RevealOnScroll, SVGPattern
│   ├── layouts/Base.astro        # html/head with title/desc/OG/JSON-LD
│   ├── pages/                    # index, rezervace, projekty/{index,[slug]}, o-arealu, faq, 404
│   ├── styles/                   # tokens.css, kit.css, motion.css
│   └── utils/url.ts              # withBase() — prefixes /sh-web/ until DNS flip
└── docs/HISTORY.md               # this file
```

## Live preview from inside Claude Code

`.claude/launch.json` lets the agent spin up the dev server via `mcp__Claude_Preview__preview_start` with `name: "sh-web"`. Binds to port 4322 (separate from any sibling project's 4321), reused across sessions.

## Editorial rulebook

Active rules in `scripts/lint-editorial.mjs`: no passive voice (`je realizováno`, `je zajišťováno`, etc.), no legalese (`ve smyslu §`), no marketing hype (`úžasný`, `revoluční` etc.), ellipsis only inside the locked motto. Em/en-dash and `!` are allowed. Form `placeholder` attributes use `.` instead of ellipsis.
