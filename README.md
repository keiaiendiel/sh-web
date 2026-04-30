# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s. Deploys to `klecany.osa2.cz`.

## Stack

- Astro 6.1.8, static output, Czech-only.
- Atyp Text/Special, K10–K90 monochrome + tricolor red accent (`--c-red: #d0342c` exposed as `--accent`).
- MDX content collections (`subProjects`, `faq`, `org`) plus `public/data/scenarios.json` for the calculator.
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

`/` Landing · `/obyvatele/` Resident · `/investori/` Investor · `/projekty/` Programme cards · `/o-projektu/` Place + timeline · `/faq/` FAQ · plus `/projekty/<slug>/` stub detail pages.

## Deferred to a programmer

- Form submission backend (resident + investor forms). Both currently `console.log` and show a static success state.
- Calculator math binding to the live VPD1 Excel; currently uses placeholder per-scenario rates in `public/data/scenarios.json` with a draft disclaimer.
- Analytics, cookie consent, admin.

## Operator credit

Marek Semerád, předseda OSA II, z.s. — `vpd@osa2.cz`. Parent links: [osa2.cz](https://osa2.cz), [osa2.cz/zamer-vpd/](https://osa2.cz/zamer-vpd/).
