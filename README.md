# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s.

**Live preview:** https://keiaiendiel.github.io/sh-web/ (GitHub Pages, auto-deployed on every push to master)
**Future canonical:** `startovacihub.cz` (after DNS cutover)

## Stack

- Astro 6.1.8, static output, Czech-only.
- Atyp Text/Special, K10–K90 monochrome + tricolor red accent (`--c-red: #d0342c` exposed as `--accent`).
- MDX content collections (`subProjects`, `faq`, `org`).
- Vanilla CSS, no client framework, no React island.
- `sharp` for image migration only.

## Scripts

| | |
|---|---|
| `pnpm dev` | Local dev (port 4321) |
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve `dist/` |
| `pnpm migrate:images` | Re-run the Hub image migration |
| `pnpm lint:editorial` | Voice/style lint over `src/content/**/*.mdx` |
| `pnpm lint:links` | HEAD-check external URLs |
| `pnpm lint:weight` | Per-page eager-weight budget |

## Pages

`/` Landing (zigzag editorial layout, single residents CTA, investor exit CTA at bottom) · `/obyvatele/` Resident pre-reservation funnel · `/projekty/` Programme cards · `/o-projektu/` Place + timeline · `/faq/` FAQ · plus `/projekty/<slug>/` stub detail pages.

## Audiences

The site funnels **residents only** (working students, young creatives, beginning entrepreneurs). Investors get a single exit CTA on the landing and a footer pointer to the investor microsite [keiaiendiel.github.io/vpd-web/vpd1/](https://keiaiendiel.github.io/vpd-web/vpd1/) (eventual `vepde.com`).

## Deferred to a programmer

- Form submission backend for the resident pre-reservation form. Currently `console.log` with a static success state.
- Analytics, cookie consent, admin.

## Operator credit

Marek Semerád, předseda OSA II, z.s. — `vpd@osa2.cz`. Parent links: [osa2.cz](https://osa2.cz), [osa2.cz/zamer-vpd/](https://osa2.cz/zamer-vpd/).
