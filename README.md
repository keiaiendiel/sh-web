# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s.

**Live preview:** https://keiaiendiel.github.io/sh-web/ (GitHub Pages, auto-deployed on every push to master)
**Future canonical:** `startovacihub.cz` (after DNS cutover)

## Stack

- Astro 6.1.8, static output, Czech-only.
- Atyp Special font, K0–K100 monochrome scale, **plum accent `#5A2A5F`** (1 of 8 OSA tricolor accent colors).
- Light radii (`--radius-input: 7px`) for inputs, CTA buttons, and cards; sharp `0` everywhere else.
- MDX content collections (`subProjects`, `faq`, `org`).
- Vanilla CSS, no client framework, no React island. Tiny inline `<script is:inline>` islands for header drawer, form, lightbox, and Leaflet map.
- `sharp` for image migration only; Leaflet 1.9.4 from CDN (unpkg) used only on `/o-arealu/` for the map banner.

## Pages (12)

- `/` Landing — 4-image hero slide carousel; "Co Hub nabídne" 4 format cards (Kapsle / Klidnější / Jednolůžkový / Sdílený); 4-claim 2×2 grid (Koncept / Pro koho / Sdílené prostory / Stipendium); zigzag visualizations with reveal-on-scroll + click-to-lightbox; dual CTA (Chci tu bydlet plum + Investice do záměru subtle); "Jak se Hub rozrůstá" provoz teaser; place + masterplan; FAQ teaser.
- `/rezervace/` — standalone reservation page with 8-question form (per research spec), role-branched textareas, mini-FAQ.
- `/o-arealu/` — data-first chapter layout (Klecany, časová osa, OSA II identita, ČVUT diplomky reference). Carries an interactive Leaflet map of the area pinned at the Horní kasárny coordinates with the address "Dolní Kasárna, 250 67 Klecany".
- `/projekty/` — index of 6 sub-project provozů (Komunitní Centrum / Coworking Centrum / Komunitní Pivovar / Bytové Družstvo / Sauna a bazén / Sportoviště a park). Below cards: masterplan strip ("Mapa areálu / Kde co bude").
- `/projekty/<slug>/` × 6 — per-objekt detail with MDX body + dual-button CTA panel.
- `/faq/` — audience-tabbed FAQ (Vše / O projektu / Pro obyvatele).
- `/404`.

All non-landing pages share the same dark image hero pattern (eyebrow + H1 + lede on a hero photo at native brightness with a bottom-heavy black scrim).

## Audience

The site funnels **residents** — pracující studenti, OSVČ na začátku, mladí kreativci, začínající podnikatelé. Investors get a single secondary CTA on the landing (paired side-by-side with the residents banner) plus a footer pointer to the investor microsite [keiaiendiel.github.io/vpd-web/vpd1/](https://keiaiendiel.github.io/vpd-web/vpd1/).

## Pre-reservation form

The 8-question flow on `/rezervace/` covers: pragmatic count of 1+kk + move-in month, role (Platící rezident / Stipendium / Work-trade / Rezident-tvůrce / Ještě nevím), stay duration + renewal checkbox, monthly budget band, place type, Prague frequency, top 2 priorities (max-2 enforced via JS), klid-vs-komunita, optional role-branch textareas (only for Stipendium / Work-trade / Rezident-tvůrce), contact + consent. Submit `console.log`s the payload + shows a static success state — backend wiring is deferred.

Form spec source: `/12 Startovaci Hub/research/Optimal form and calculator for Startovací Hub Klecany.docx`.
Reality-check claims source: `/12 Startovaci Hub/Podklady_S1/Arch. studie (hub)/Zadávací dokument.pdf` (OSA228 z 2.9.2025).

## Local development

After cloning the repo:

```bash
pnpm install         # install dependencies (once)
pnpm dev             # start the dev server on http://localhost:4321
```

The repo carries `.claude/launch.json` so the Claude Code agent can spin up the same dev server via the `mcp__Claude_Preview__preview_start` tool with `name: "sh-web"` (binds to port 4322 by default).

### Other scripts

| | |
|---|---|
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve `dist/` (post-build verification) |
| `pnpm migrate:images` | One-shot image migration from `../../12 Startovaci Hub/image/` (raw photos, hero `selected/sh-{1..4}.jpeg`, named extras `kapsle / cowork / trznice-pivovar / sport`) |
| `pnpm optimize:images` | Idempotent re-encode of `aerial/ exterior/ interior/ hero/` files > 600 KB to JPEG q=80 mozjpeg, max edge 1600 px (auto-renames `.png` → `.jpg`). Use after dropping a new batch into one of those folders. |
| `pnpm lint` | Run editorial + links lints |
| `pnpm lint:editorial` | Voice/style lint over `src/content/**/*.mdx` and page bodies |
| `pnpm lint:links` | HEAD-check external URLs |
| `pnpm lint:weight` | Per-page eager-weight budget against `dist/` |

All three lints run on every CI push to master. They must pass; the deploy-pages workflow also blocks on them.

## Pushing to GitHub

The `master` branch is the deploy branch — every push triggers `.github/workflows/deploy-pages.yml` which lints, builds, and deploys to GitHub Pages at `keiaiendiel.github.io/sh-web/`.

```bash
# 1. Verify locally
pnpm build && pnpm lint:editorial && pnpm lint:weight

# 2. Stage specific files (avoid `git add -A`)
git status
git add src/pages/index.astro src/components/Header.astro    # …or whichever files changed

# 3. Commit with a conventional-commit prefix
git commit -m "feat(hub): describe what changed and why"

# 4. Push — CI runs and deploys in ~2 minutes
git push origin master
```

Watch the action at [github.com/keiaiendiel/sh-web/actions](https://github.com/keiaiendiel/sh-web/actions). Recent commits use the prefixes `feat(hub):`, `docs(hub):`, `fix(hub):`, `ci(hub):` — match these for consistency.

## Deferred to a programmer

- **Form submission backend** — validation, anti-spam (e.g. honeypot or hCaptcha), autoresponse, storage. The 10-field payload shape is documented in [src/components/ResidentForm.astro](src/components/ResidentForm.astro).
- **Analytics + cookie consent** — Plausible or GoatCounter. Out of scope for v1.
- **DNS cutover to `startovacihub.cz`** — flip `site` in `astro.config.mjs`, drop the `base` line, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. CI auto-deploys.

## Operator credit

Marek Semerád, předseda OSA II, z.s. — `vpd@osa2.cz`.
Parent organisation: [alternativa2.info](https://www.alternativa2.info/).

For deep operational context (decisions, gotchas, layout details, polish history) see [CLAUDE.md](CLAUDE.md).
