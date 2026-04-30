# sh-web — CLAUDE.md

Operational handoff for the next agent or human colleague working on the Startovací Hub Klecany site. The README is for end-users; this file captures decisions, gotchas, and open loops.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Lives in `sh-web/`, deploys to `startovacihub.cz`. Redesigned 2026-04-29 from the prior osa-web parent codebase per `docs/superpowers/plans/2026-04-29-startovaci-hub-redesign.md`. On 2026-04-29 the scope was narrowed further: the investor surface was dropped and the site was repointed to its own domain; the remaining funnel is a residents-only pre-reservation form.

The Hub is the first phase of the VPD1 záměr (revitalization of horní kasárny Klecany). It is run as a project under OSA's umbrella; the Hub site funnels future residents into the pre-reservation form, and shows the project credibly via masterplan + interior + exterior renders. Investor communication has moved off-site (handled directly by OSA / VPD via `vpd@osa2.cz`).

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections (MDX + JSON), Zod-validated |
| Styling | Vanilla CSS with tokens in `src/styles/` |
| Fonts | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | Tiny inline `<script is:inline>` islands per component (header drawer, form submit, FAQ tabs). No bundle. |
| Deploy | Standalone domain `startovacihub.cz`. `astro.config.mjs` sets `site` accordingly; no `base` path. |

## Current state (2026-04-29, post residents-only pivot)

- 11 pages build cleanly: 404, /, /obyvatele/, /projekty/, /projekty/<5 stub slugs>/, /o-projektu/, /faq/. (Was 12 — /investori/ removed.)
- All Czech copy locked per the spec. Editorial linter green. Per-page eager-weight budget green.
- Resident pre-reservation form at /obyvatele/#formular: count of 1+kk units, planned move-in month, lease length (1m / 1y / 5y / other), extension right (none / N times / indefinite), stipend opt-in with conditional intent + about-me textareas, contact block, consent checkbox. `console.log`s payload on submit and shows a static success message. Backend wiring deferred to a programmer.
- Hub renders migrated to `public/images/hub/{exterior,interior}/` (42 jpegs total, max edge 1600 px) plus `masterplan.jpg`. Re-run `pnpm migrate:images` if you change source files.

## Design decisions worth knowing

**Brand red.** `--c-red: #d0342c` (tricolor red, OSA design system). Exposed as `--accent` in tokens.css so components reference the role, not the colour name.

**Header.** `Header.astro` takes a single `variant: 'light' | 'dark'` prop. Landing uses `dark` to fuse with the dark hero; everywhere else is `light`. The brand row reads "SH · Startovací Hub · Klecany"; the top strip is a plain "Provozuje OSA II, z.s." link to osa2.cz. The mobile drawer locks page scroll via `osa-nav-lock` class on `<html>`. Nav is four items: Pro obyvatele / Projekty / O projektu / FAQ. (Role-switcher chip and "Pro investory" link were removed in the residents-only pivot.)

**Footer reads `org` collection.** `Footer.astro` calls `getEntry('org', 'identity')` to render Marek Semerád's name + `vpd@osa2.cz`. The `org/identity.json` carries OSA II legal identifiers (IČO, DIČ etc.) that drive the JSON-LD on every page.

**Tooltip.** Component is retained even though the current resident form does not use it; small footprint, may be reused on a future detail page.

**Editorial linter v8 state.** Em-dashes, en-dashes, and `!` are allowed in body. Voice rules (passive, marketing-hype, legalese) still enforced. Ellipsis is reserved for the locked motto only — placeholders in form `placeholder` attributes need to use `.` instead. Linter rules live in `scripts/lint-editorial.mjs`.

**FAQ tabs.** `<details>` items are progressive enhancement — open/close works without JS. The audience tabs use a small inline script to toggle `g.hidden` on each `[data-group]`. The "Vše" tab is `data-aud='all'`. Two audiences live now: `project` and `resident` (investor + legal removed with the pivot).

**Image migration script.** `scripts/migrate-hub-images.mjs` is one-shot: reads from `../../12 Startovaci Hub/image/` (raw photos in indoor/ + outdoor/) and `../vpd-web/public/images/zamer-vpd/` (already-optimized hub-* renders), downsamples via sharp to 1600 px max edge at q80 (masterplan: 1800 px), writes to `public/images/hub/{exterior,interior,masterplan.jpg}`. Re-run with `pnpm migrate:images` if source files change.

## Repo layout

```
sh-web/
├── astro.config.mjs              # site=startovacihub.cz, no base
├── public/
│   ├── fonts/*.woff2             # Atyp Special Medium, Bold, Italic
│   ├── images/hub/{exterior,interior,masterplan.jpg}
│   ├── og/default.{svg,png}      # placeholder OG card
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
│   │   ├── sub_projects/<5 mdx>  # Hub programme cards
│   │   ├── faq/index.json        # 8 keyed Q&As (q1..q8: 4 project + 4 resident)
│   │   └── org/identity.json     # OSA legal identity
│   ├── components/               # Header, Footer, Tooltip, Gallery, ResidentForm, RevealOnScroll (6 files)
│   ├── layouts/Base.astro        # html/head with title/desc/OG/JSON-LD; mounts Header + slot + Footer + RevealOnScroll
│   ├── pages/
│   │   ├── index.astro           # Landing (residents-only single CTA)
│   │   ├── obyvatele/index.astro # Resident pre-reservation funnel
│   │   ├── projekty/{index, [slug]}.astro
│   │   ├── o-projektu/index.astro
│   │   ├── faq/index.astro
│   │   └── 404.astro
│   ├── styles/                   # tokens.css, kit.css, motion.css
│   └── utils/url.ts              # withBase() helper (no-op when base='/')
└── docs/superpowers/plans/...    # implementation plan, kept for reference
```

## Open loops / known issues

- **Place section uses no real OSM map.** The masterplan replaces it for now (`public/images/hub/masterplan.jpg`). If the operator wants a tiled map at /o-projektu/#misto, drop a static OSM screenshot at `public/images/hub/place/map.jpg` and update the figure in `src/pages/o-projektu/index.astro`.
- **Per-format room schematics (Kapsle, Sdílený pokoj) are stand-in interior renders.** Replace when operator supplies real schematics.
- **Per-sub-project thumbnails on /projekty/ are placeholder boxes.** When real renders arrive, drop them in and update the relevant subProjects MDX `thumbnail` frontmatter.
- **Pre-reservation form `console.log`s payload.** Backend wiring (validation, anti-spam, autoresponse, storage) is the next step before public launch.
- **`hub-hero` background-image not measured by `lint:weight`.** The eager budget walks `<img>` and `@font-face url()` — inline `style="background-image: url(...)"` slips past it. The Landing hero JPG is ~400 KB and DOES paint on first load. Two options when this matters: (a) teach the linter to walk inline styles; (b) move the hero to an `<img>` with `decoding="async"` covering the section.
- **Author identity warning on git commits.** Each commit emits "Your name and email address were configured automatically based on your username and hostname" because the repo has no committed `user.email`. Set `git config --global user.email` once if you want consistent attribution.
- **Backup branch.** `backup/osa-web-pre-hub-redesign` carries the OSA-parent state and any uncommitted WIP that existed when this redesign started. Keep it until the Hub site is in production for at least one cycle, then delete.

## Running the project

```bash
pnpm install         # once
pnpm dev             # http://localhost:4321
pnpm build           # writes to dist/
pnpm preview         # serves dist/
pnpm lint            # editorial + links
pnpm lint:weight     # per-page budget check against dist/
```

## Editorial rulebook

Active rules in `scripts/lint-editorial.mjs`: no passive voice (`je realizováno`, `je zajišťováno`, etc.), no legalese (`ve smyslu §`), no marketing hype (`úžasný`, `revoluční` etc.), ellipsis only inside the locked motto. Em/en-dash and `!` are allowed.

## Contact points

- Operator: Občanské sdružení Alternativa II, z.s. (OSA II / OSA2 / Alternativa II).
- Předseda: Marek Semerád — `vpd@osa2.cz`.
- Místopředseda: Štěpán Říha.
- Legal identifiers + bank accounts: `src/content/org/identity.json`.

## Deploy checklist (before public launch)

1. **Drop final OSM map** at `public/images/hub/place/map.jpg` if /o-projektu/#misto should carry one in addition to the masterplan.
2. **Replace per-format room schematics** (Kapsle, Sdílený pokoj) and per-sub-project thumbnails when operator delivers them.
3. **Wire pre-reservation form backend.** The form currently `console.log`s payloads; a programmer needs to add a serverless endpoint, validation, anti-spam, autoresponses, and storage.
4. **Configure DNS for startovacihub.cz** and choose a deploy target (Cloudflare Pages, Netlify, GitHub Pages with custom domain — all work for a static Astro site).
5. **Analytics decision** — Plausible or GoatCounter if anything; out of scope for v1.

The repo builds and lints clean on every commit; nothing on the technical side blocks launch beyond the deferred items above.
