# sh-web — CLAUDE.md

Operational handoff for the next agent or human colleague working on the Startovací Hub Klecany site. The README is for end-users; this file captures decisions, gotchas, and open loops.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Repo at [github.com/keiaiendiel/sh-web](https://github.com/keiaiendiel/sh-web). Currently deployed to GitHub Pages at **https://keiaiendiel.github.io/sh-web/** for public preview; will move to **startovacihub.cz** when DNS is cut over. Redesigned 2026-04-29 from the prior osa-web parent codebase per `docs/superpowers/plans/2026-04-29-startovaci-hub-redesign.md`. Two follow-up pivots on 2026-04-29 / 30: (a) **residents-only pivot** — the investor surface (page, calculator, scenarios, dedicated form, 4 FAQ entries) was dropped; (b) **visual redesign pass** — landing rebuilt as editorial zigzag, header collapsed to a single logotype, form polished, single investor exit CTA pointing at vpd-web/vpd1.

The Hub is the first phase of the VPD1 záměr (revitalization of horní kasárny Klecany). It is run as a project under OSA's umbrella; the Hub site funnels future residents into the pre-reservation form, and shows the project credibly via masterplan + interior + exterior renders. Investors get one exit-CTA at the bottom of the landing + a footer pointer; the actual investor surface lives on the sibling vpd-web at [keiaiendiel.github.io/vpd-web/vpd1/](https://keiaiendiel.github.io/vpd-web/vpd1/) (eventually `vepde.com`).

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections (MDX + JSON), Zod-validated |
| Styling | Vanilla CSS with tokens in `src/styles/` |
| Fonts | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | Tiny inline `<script is:inline>` islands per component (header drawer, form submit, FAQ tabs). No bundle. |
| Deploy | GitHub Pages at `keiaiendiel.github.io/sh-web/`. `astro.config.mjs` has `site: 'https://keiaiendiel.github.io'` + `base: '/sh-web/'`. CI: `.github/workflows/deploy-pages.yml` runs on push to master (lint:editorial + build + lint:weight, then `actions/deploy-pages@v4`). When DNS to `startovacihub.cz` cuts over, flip `site` to `https://startovacihub.cz`, drop the `base` line, and find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css` (one line). |

## Current state (2026-04-29, post residents-only pivot, post visual redesign pass)

- 11 pages build cleanly: 404, /, /obyvatele/, /projekty/, /projekty/<5 stub slugs>/, /o-projektu/, /faq/. (Was 12 — /investori/ removed.)
- All Czech copy locked per the spec. Editorial linter green. Per-page eager-weight budget green.
- Resident pre-reservation form at /obyvatele/#formular: count of 1+kk units, planned move-in month, lease length (1m / 1y / 5y / other), extension right (none / N times / indefinite), stipend opt-in with conditional intent + about-me textareas, contact block, consent checkbox. `console.log`s payload on submit and shows a static success message. Backend wiring deferred to a programmer.
- Hub renders migrated to `public/images/hub/{exterior,interior}/` (42 jpegs total, max edge 1600 px) plus `masterplan.jpg`. Re-run `pnpm migrate:images` if you change source files.
- Visual redesign pass (2026-04-29). Header collapsed to a single "Startovací hub" logotype mark (sentence case; the prior "Provozuje OSA II" top strip and the SH/Klecany two-line construction were dropped; OSA II reference still lives in footer + JSON-LD). Landing rebuilt to a tighter editorial flow: full-bleed `<img>` hero with scrim (replaces the prior `style="background-image:..."` so the hero LCP image is measurable by lint:weight), centered primary CTA strip, two-paragraph concept block, six-row alternating zigzag gallery (Vizualizace · Jak to bude vypadat), "Jak se Hub rozrůstá" provoz cards, "Kde to je", status strip, FAQ teaser, and a single investor exit CTA pointing at vpd-web/vpd1. Pre-reservation form at /obyvatele/#formular wrapped in a 2-col editorial shell (sticky head left, form right; stacks below 960 px) and the form itself gets numbered step legends, large radio/checkbox hit targets with hover/check/focus states, focus rings on inputs, hover-lift submit, animated stipend reveal, and a stronger dark success panel. Footer adds an "Investoři: záměr VPD1 →" pointer in the kontakt column.

## Design decisions worth knowing

**Brand red.** `--c-red: #d0342c` (tricolor red, OSA design system). Exposed as `--accent` in tokens.css so components reference the role, not the colour name.

**Header.** `Header.astro` takes a single `variant: 'light' | 'dark'` prop. Landing uses `dark` to fuse with the dark hero; everywhere else is `light`. The brand row is a single "Startovací hub" logotype mark in sentence case (Atyp Special 600, `clamp(20px, 2.4vw, 26px)`, `letter-spacing: -0.01em`). No top strip. The mobile drawer locks page scroll via `osa-nav-lock` class on `<html>`. Nav is four items: Pro obyvatele / Projekty / O projektu / FAQ. (Role-switcher chip and "Pro investory" link were removed in the residents-only pivot. The "Provozuje OSA II, z.s." top strip was dropped in the visual redesign pass — OSA II is still referenced in the footer and JSON-LD parentOrganization.)

**Footer reads `org` collection.** `Footer.astro` calls `getEntry('org', 'identity')` to render Marek Semerád's name + `vpd@osa2.cz`. The `org/identity.json` carries OSA II legal identifiers (IČO, DIČ etc.) that drive the JSON-LD on every page. Footer also carries the investor pointer line: `Investoři: záměr VPD1 →` linking to vpd-web/vpd1/.

**Investor exit CTA.** Single block at the bottom of the landing (above the footer): `Nezajímá vás bydlení, ale investice do záměru? → Záměr VPD1 →` linking to https://keiaiendiel.github.io/vpd-web/vpd1/. The `/investori/` route, calculator, scenarios JSON, and dedicated investor form were all deleted in the residents-only pivot. The single exit CTA + footer pointer are the only investor-facing surface that remains; everything else lives on vpd-web.

**Landing zigzag.** Editorial 6-row alternating ltr/rtl layout under the eyebrow `Vizualizace · Jak to bude vypadat.`. Each row is a `<figure>` + copy block with a per-image caption (Exteriér / Interiér + role + one-sentence description). Replaces the prior dual-Gallery exterior+interior grid.

**Tooltip.** Component is retained even though the current resident form does not use it; small footprint, may be reused on a future detail page.

**Editorial linter v8 state.** Em-dashes, en-dashes, and `!` are allowed in body. Voice rules (passive, marketing-hype, legalese) still enforced. Ellipsis is reserved for the locked motto only — placeholders in form `placeholder` attributes need to use `.` instead. Linter rules live in `scripts/lint-editorial.mjs`.

**FAQ tabs.** `<details>` items are progressive enhancement — open/close works without JS. The audience tabs use a small inline script to toggle `g.hidden` on each `[data-group]`. The "Vše" tab is `data-aud='all'`. Two audiences live now: `project` and `resident` (investor + legal removed with the pivot).

**Image migration script.** `scripts/migrate-hub-images.mjs` is one-shot: reads from `../../12 Startovaci Hub/image/` (raw photos in indoor/ + outdoor/) and `../vpd-web/public/images/zamer-vpd/` (already-optimized hub-* renders), downsamples via sharp to 1600 px max edge at q80 (masterplan: 1800 px), writes to `public/images/hub/{exterior,interior,masterplan.jpg}`. Re-run with `pnpm migrate:images` if source files change.

## Repo layout

```
sh-web/
├── astro.config.mjs              # site=keiaiendiel.github.io, base=/sh-web/ (transitional)
├── .github/workflows/
│   ├── ci.yml                    # PR + push: lint + build + dist artifact
│   └── deploy-pages.yml          # push to master: lint + build + actions/deploy-pages@v4
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
│   │   ├── index.astro           # Landing (residents-only, zigzag layout, investor exit CTA)
│   │   ├── obyvatele/index.astro # Resident pre-reservation funnel
│   │   ├── projekty/{index, [slug]}.astro
│   │   ├── o-projektu/index.astro
│   │   ├── faq/index.astro
│   │   └── 404.astro
│   ├── styles/                   # tokens.css, kit.css, motion.css
│   └── utils/url.ts              # withBase() — prefixes /sh-web/ until DNS flip
└── docs/superpowers/plans/...    # implementation plan, kept for reference
```

## Open loops / known issues

- **Transitional GH Pages base path.** Site lives at `keiaiendiel.github.io/sh-web/` so `astro.config.mjs` carries `base: '/sh-web/'` and `tokens.css` font URLs are `/sh-web/fonts/...`. When DNS to `startovacihub.cz` is ready: change `site` to `https://startovacihub.cz`, delete the `base` line, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. `withBase()` becomes a no-op automatically.
- **Sticky header stays dark on scroll.** Landing uses `headerVariant="dark"` to fuse with the dark hero. The header stays dark even after the user scrolls past the hero. Acceptable but worth flagging — switch to a scroll-driven variant flip if it reads wrong.
- **Place section uses no real OSM map.** The masterplan replaces it for now (`public/images/hub/masterplan.jpg`). If the operator wants a tiled map at /o-projektu/#misto, drop a static OSM screenshot at `public/images/hub/place/map.jpg` and update the figure in `src/pages/o-projektu/index.astro`.
- **Per-format room schematics (Kapsle, Sdílený pokoj) are stand-in interior renders.** Replace when operator supplies real schematics.
- **Per-sub-project thumbnails on /projekty/ are placeholder boxes.** When real renders arrive, drop them in and update the relevant subProjects MDX `thumbnail` frontmatter.
- **Pre-reservation form `console.log`s payload.** Backend wiring (validation, anti-spam, autoresponse, storage) is the next step before public launch.
- **`lint:weight` doesn't see the hero image because of the base path.** The hero is an `<img>` (so the linter's `<img>` walker should pick it up), but the script tries to resolve `/sh-web/images/...` against `dist/sh-web/...` and `dist/` is flat (`dist/images/...`). The eager budget therefore reports inflated headroom — actual hero JPG is ~400 KB. Either teach the linter to strip the configured base prefix, or wait for the DNS flip when `base` becomes `/`.
- **Author identity warning on git commits.** Each commit emits "Your name and email address were configured automatically based on your username and hostname" because the repo has no committed `user.email`. Set `git config --global user.email` once if you want consistent attribution.
- **Backup branch.** `backup/osa-web-pre-hub-redesign` is **local only** (not pushed to GitHub) and carries the OSA-parent state plus any uncommitted WIP that existed when this redesign started. Keep it until the Hub site is in production for at least one cycle, then delete locally.
- **`feat/startovaci-hub` branch on GitHub.** Pushed alongside master for history; identical to master after the fast-forward merge. Safe to delete on the GitHub side once you don't need the per-task commit log as a separate branch.

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

## Deploy checklist (before public launch on startovacihub.cz)

1. **Drop final OSM map** at `public/images/hub/place/map.jpg` if /o-projektu/#misto should carry one in addition to the masterplan.
2. **Replace per-format room schematics** (Kapsle, Sdílený pokoj) and per-sub-project thumbnails when operator delivers them.
3. **Wire pre-reservation form backend.** The form currently `console.log`s payloads; a programmer needs to add a serverless endpoint, validation, anti-spam, autoresponses, and storage.
4. **Cut DNS over to startovacihub.cz.** Either custom-domain on GitHub Pages (drop a `CNAME` file in `public/` with `startovacihub.cz`, configure DNS A/AAAA records to GH Pages, enable HTTPS in repo settings) or migrate to Cloudflare Pages / Netlify. After DNS: flip `astro.config.mjs` to `site: 'https://startovacihub.cz'` + remove `base`, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. One commit, GH Pages auto-redeploys.
5. **Analytics decision** — Plausible or GoatCounter if anything; out of scope for v1.

The repo builds, lints, and auto-deploys on every push to master; nothing on the technical side blocks launch beyond the deferred items above. Live preview: https://keiaiendiel.github.io/sh-web/.
