# sh-web — CLAUDE.md

Operational handoff for the Startovací Hub Klecany site. Keep this file terse — it loads into every Claude Code conversation. Long-form history (per-page anatomy, design decisions, redesign aftermath) lives in `docs/HISTORY.md`; read it on demand only.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Repo: `github.com/keiaiendiel/sh-web`. Deployed to GitHub Pages at `https://keiaiendiel.github.io/sh-web/`; will move to `startovacihub.cz` after DNS cutover.

The Hub is phase 1 of the VPD1 záměr (revitalization of horní kasárny Klecany). The site funnels future residents to `/rezervace/`. Investors get a secondary CTA on the landing + footer pointer; investor surface lives on the sibling `vpd-web` repo.

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections (MDX + JSON), Zod-validated |
| Styling | Vanilla CSS, tokens in `src/styles/`. Plum accent `#5A2A5F`, `--radius-input: 4px` |
| Fonts | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | Tiny inline `<script is:inline>` islands — no bundle |
| Map | Leaflet 1.9.4 (CDN unpkg) + CARTO Voyager tiles, only on `/o-arealu/` |
| Deploy | GH Pages, `base: '/sh-web/'`. CI in `.github/workflows/deploy-pages.yml` |

## Pages (12)

`/` · `/rezervace/` · `/projekty/` · `/projekty/<slug>/` × 6 (komunitni-centrum, coworking-centrum, komunitni-pivovar, bytove-druzstvo, sauna-bazen, sportoviste-park) · `/o-arealu/` · `/faq/` · `/404`.

For per-page layout and design decisions, see `docs/HISTORY.md`.

## Don't read these (token traps)

- `dist/` (build output, ~15M)
- `.astro/` (generated types)
- `node_modules/`, `pnpm-lock.yaml`
- `docs/HISTORY.md` unless the question is about historical decisions

## Running locally

```bash
pnpm install
pnpm dev      # http://localhost:4321 (or 4322 via .claude/launch.json)
pnpm build    # writes dist/
pnpm preview  # serves dist/
```

## Lints (all three must pass; CI runs them)

```bash
pnpm lint:editorial  # voice/style — strictest, see scripts/lint-editorial.mjs
pnpm lint:links      # external URL HEAD check
pnpm lint:weight     # per-page eager-weight budget against dist/
```

`lint:editorial` forbids passive voice, marketing hype, legalese; ellipsis only inside the locked motto; em/en-dash and `!` allowed.

## Image migration

```bash
pnpm migrate:images  # reads from ../../12 Startovaci Hub/image/, writes public/images/hub/
```

## Pushing to GitHub

`master` is the deploy branch — every push triggers `deploy-pages.yml` (lint + build + `actions/deploy-pages@v4`, ~2 min). Use conventional-commit prefixes: `feat(hub):`, `fix(hub):`, `docs(hub):`, `ci(hub):`.

Always inspect first; never `git add -A`:

```bash
git status
git add <specific files>
git commit -m "feat(hub): describe what+why"
git push origin master
```

## Open loops

- **Transitional base path.** `astro.config.mjs` has `base: '/sh-web/'`; `tokens.css` font URLs are `/sh-web/fonts/...`. When DNS flips to `startovacihub.cz`: set `site: 'https://startovacihub.cz'`, delete `base`, find/replace `/sh-web/fonts/` → `/fonts/`. `withBase()` becomes a no-op.
- **Pre-reservation form `console.log`s payload.** Backend wiring (endpoint, validation, anti-spam, autoresponse, storage) needed before public launch.
- **Per-format room schematics** on landing's "Co Hub nabídne" still use stand-in renders (Kapsle has a real photo). Replace when operator delivers.
- **Per-sub-project thumbnails on `/projekty/`** are partial — add `thumbnail: "/sh-web/images/hub/..."` to MDX frontmatter as assets arrive.
- **`lint:weight` doesn't see the hero image** because the base path resolves against a flat `dist/`. Fix when DNS flips (base becomes `/`).
- **Leaflet from CDN (unpkg).** No local fallback. Acceptable for v1.
- **Backup branch `backup/osa-web-pre-hub-redesign`** is local only. Keep until Hub has been in production for one cycle.

## Contact points

- Operator: Občanské sdružení Alternativa II, z.s. (OSA II).
- Předseda: Marek Semerád — `vpd@osa2.cz`.
- Místopředseda: Štěpán Říha.
- Legal identifiers: `src/content/org/identity.json` (drives JSON-LD on every page).

## Deploy checklist (before public launch)

1. Replace per-format room schematics + per-sub-project thumbnails when delivered.
2. Wire pre-reservation form backend.
3. Cut DNS to `startovacihub.cz` (drop `CNAME` in `public/`, configure DNS, flip `astro.config.mjs`).
4. Analytics decision (Plausible / GoatCounter — out of scope for v1).

The repo builds, lints, and auto-deploys on every push to master.
