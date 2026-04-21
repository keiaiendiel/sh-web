# osa-web — CLAUDE.md

Operational handoff for the next agent (or human colleague) working on this repo. The [README.md](./README.md) is for end-users; this file captures decisions, gotchas, and open loops.

## What this is

Static site for **Občanské sdružení Alternativa II, z.s.** (OSA). Destination: `osa2.cz`, replacing the current `alternativa2.info`. Client is Kindl (the maker); the site is for the association's real stakeholders (předseda Marek Semerád, místopředseda Štěpán Říha, Členský sněm).

**Binding spec** lives in the vault at `/Users/kindl/kindl-vault/Projects/OSA_Website/OSA_Website_Plan.md` plus four research memos in the same folder. When in doubt about scope or copy, that plan wins.

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Language  | TypeScript strict |
| Content   | Astro Content Collections (MDX + JSON), Zod-validated |
| Styling   | Vanilla CSS with tokens in `src/styles/` |
| Fonts     | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | One filter island (~900 B) + IntersectionObserver reveal observer (~400 B) |
| Deploy    | Not yet connected. Target: Cloudflare Pages |

## Current state (2026-04-21, after v7.1 spotlight + hero-parity pass)

- 28 pages build cleanly, zero build errors (1.7 s).
- Editorial lint green across all `src/` content. Link lint still fails only on junktown (pre-existing 410 on `junktown.postapofestival.cz`).
- Homepage eager payload: 102 KB (target 400 KB). All 28 pages pass the per-page weight budget. Zero JS on all pages.
- Font total: 100.8 KB (target 160 KB).
- Aktuality channel has five MDX articles: the v7.2 VPD1 investment-call aktualita (article hub for the landing banner), plus PF 2026 and 3 Výletná backfill from v7.
- Landing page carries the restored `<InvestmentHero />` (v7.2) with the mustard-draft figures and a single CTA routing to `/aktuality/vpd1-hledame-strategickeho-partnera/`. `<AktualitaSpotlight />` is orphaned on disk for possible future use.
- Shared dark-hero contract: Úvod, O spolku, Projekty and aktuality detail use identical padding (96 px top, 96 px bottom, 24 px gutter, container-wide 1440 px or container 1200 px). Projekty hero embeds FilterBar inside the dark frame.
- Aktuality detail hero renders the article's hero photo as a full-bleed darkened background (filter brightness 0.45 + gradient scrim), same silhouette as /projekty/vpd/.
- SEO infrastructure in place: sitemap, per-page OG tags, Organization + Article JSON-LD, manifest, real 301 redirects, 404 page, canonical URLs.
- Drive sync pipeline scaffolded (script + Action + Apps Script docs). Client asked to wire it live; waiting on four decisions and service-account setup (see [Drive sync activation](#drive-sync-activation) below).
- No GitHub remote yet, no Cloudflare Pages yet. Local-only.
- Dev server via `pnpm dev`. `.claude/launch.json` entries: `osa-web` on 4321, `osa-web-exp` on 4331.

## Repo layout

```
osa-web/
├── .github/workflows/ci.yml      # GH Actions: lint + build + weight budget
├── public/
│   ├── favicon.{svg,ico} + apple-touch-icon.png   # generated from OSA-Logo-Black.svg
│   ├── fonts/*.woff2             # Atyp Special Medium, Bold, Italic (subsetted)
│   ├── graphics/graphic-asset-header_{1..6}.svg   # full-bleed motif strips
│   ├── images/*.jpg              # 10 gallery placeholders, downsampled
│   ├── logo/{OSA-Logo-Black,White,White-Full,osa-glyph}.svg
│   ├── robots.txt
│   └── _redirects                # placeholder; real alternativa2.info map is TBD
├── scripts/
│   ├── lint-editorial.mjs        # ban em/en dashes, !, passives, AI hype, …
│   ├── lint-links.mjs            # HEAD-check external_url, 4xx = fail
│   └── lint-weight.mjs           # per-page eager budget check on dist/
├── src/
│   ├── content.config.ts         # Zod schemas for all collections
│   ├── content/
│   │   ├── sub_projects/*.mdx    # 17 projects
│   │   ├── values/axioms.json    # 16 spolková hodnoty
│   │   ├── pillars/index.json    # 3 pilíře hospodaření
│   │   ├── org/identity.json     # legal identifiers, contacts, addresses
│   │   └── dokumenty/*.json      # PDFs and archive entries
│   ├── components/               # all .astro, one .astro filter island with <script is:inline>
│   ├── layouts/
│   │   ├── Base.astro            # html/head/body, loads tokens + kit + motion, mounts RevealOnScroll
│   │   └── LongformPage.astro    # wrapper for historie/metodologie pages
│   ├── pages/
│   │   ├── index.astro
│   │   ├── o-spolku/{index,historie,metodologie,dokumenty}.astro
│   │   ├── projekty/
│   │   │   ├── index.astro       # grid + filter bar
│   │   │   ├── [slug].astro      # stub pages for projects without external_url
│   │   │   └── vpd.astro         # FULL bespoke page for Veřejně prospěšný developer
│   │   ├── zapojte-se/index.astro
│   │   └── kontakty/index.astro
│   └── styles/
│       ├── tokens.css            # @font-face + CSS custom properties
│       ├── kit.css               # utility classes (.btn, .tag, .container-wide, .section, ...)
│       └── motion.css            # motion rules: hover fade, button invert, card accent, focus
├── astro.config.mjs              # site URL, trailingSlash: always, output: static
├── README.md                     # user-facing: stack, scripts, content model, deploy
├── CONTRIBUTING.md               # editorial rules, why they exist, how to add a project
└── CLAUDE.md                     # this file
```

## Design decisions worth knowing

**Monochrome parent brand.** Eight accent colors exist (`--c-red`, `--c-coral`, `--c-mustard`, `--c-olive`, `--c-forest`, `--c-teal`, `--c-blue`, `--c-plum`) but are reserved for sub-project surfaces. The parent brand is K0–K100 grayscale only. The Zod enum on `accent` enforces this — invalid values fail the build.

**Atyp Special is the single font family.** Medium (500) for body, Bold (600) for headings. Italic subset included. No Space Grotesk anymore. Licensed source files live at `/Users/kindl/Work/_2026/02 OSA/00 Branding/00 Font/AtypText-Special-*.otf`. Subsetted via `pyftsubset` with Latin-Extended + Czech diacritics.

**The `-OSA-` ligature does NOT work via text.** Investigated thoroughly: Atyp Special's GSUB tables contain no `-OSA-` ligature rule in any feature (`dlig`/`liga`/`ccmp`/`salt`/`ss01..ss12`). The OSA trapezoid glyph exists in the font but only as a raw glyph, not reachable from `-OSA-` text. If Suitcase Type Foundry ships a newer Atyp with a proper `clig`/`dlig` rule, the `.brand-mark` class in `src/styles/kit.css` is ready to consume it. Until then, the hero uses the explicit `<OsaGlyph />` SVG component, and the header/footer use the full `OSA-Logo-*.svg` lockups.

**Motion vocabulary.** Signature ease is `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out, portfolio reference). Key durations: 120 ms hover fade, 280–360 ms card transitions, 380 ms filter, 620 ms scroll reveal. All motion respects `prefers-reduced-motion`.

**ProjectCard layout contract (v6).** `justify-content: space-between` pins `.project-card__top` (eyebrow + rule + name + description) to the top and `.project-card__bottom` (accent rule + meta row) to the bottom. The gap between them is the single variable element: short descriptions leave more air, long ones compress it.

Hover vocabulary is Swiss restraint, NOT the earlier black-panel wipe. On hover: description flips from `--k-50` to `--fg` (muted grey becomes full black), bottom hairline rule grows `1px → 2px` and swaps to the project's `--accent`, arrow nudges right. No clip-path, no invert. If anyone brings back the wipe, they owe the client a justification.

Eyebrow shows only the topic tag (`Urbanismus`, `Kultura`, etc.), not the redundant `Projekt · <topic>` form. Meta row shows `<OsaGlyph />` + status label + arrow (`→` internal, `↗` external); the literal word "OSA" is NOT in the meta row.

The anchor carries `class="osa-nolink"`. This opts out of the global `a:not(.btn):not(.osa-nolink):hover { opacity: .6 }` rule in [motion.css](src/styles/motion.css). Without this class the whole card fades on hover and the description-color flip is invisible. **Don't remove it.**

**FilterBar is the only true client island.** One `<script is:inline>` inside a `DOMContentLoaded` listener. The inline approach failed during initial development because the script ran before the form element was parsed; wrapping in `DOMContentLoaded` fixed it. Don't refactor back.

**Scroll reveal via `[data-reveal]`.** `RevealOnScroll` component mounts one `IntersectionObserver` globally in `Base.astro`. Mark sections you want to animate with `data-reveal` (and optionally `data-reveal-delay="1|2|3"` for stagger).

**Graphic headers were simplified.** Earlier iteration tried thin tile-repeated bands (20–40 px) which felt weak; reverted to full-bleed strips (64 px) / bands (108 px) via the original SVGs. Only two on the homepage (around Values section). Light and dark variants auto-invert via `filter: invert(1)` on dark surfaces.

**Gallery is 4×2 uniform, monochrome at rest.** Earlier mixed-aspect dense-pack left empty slots at certain widths; current grid is strictly 4×2, every cell 4:3 aspect, always packed. No frame (v6): the outer border was removed, grid gap is 2px. Images sit at `filter: grayscale(1)` by default and flip to full color + `scale(1.04)` on hover. This is the ONE place color appears on the monochrome landing page.

**Dark hero pattern (v6).** Three pages share one silhouette: landing, `/o-spolku/`, `/projekty/vpd/`. The pattern is: `<Header variant="dark" />` continuing seamlessly into a dark hero section (`<section class="… osa-dark">`), optionally wrapped in `<SVGPattern variant="dark" opacity={0.1x}>` for texture. The header's hairline rule is hidden when `variant="dark"` so the two surfaces fuse into one black banner from the top edge. Other pages (projekty list, zapojte-se, kontakty, dokumenty) keep the default light header. If a new page needs the dark-hero treatment, mirror the structure from [src/pages/o-spolku/index.astro](src/pages/o-spolku/index.astro).

**ValuesMatrix has two modes.** `<ValuesMatrix />` (default, light) for landing. `<ValuesMatrix dark={true} />` for `/o-spolku/` — flips to dark scope, keeps interactive hover reveal (`+` affordance rotates to `×`, gloss slides open via `grid-template-rows` transition). There was briefly an `expanded={true}` mode showing all gloss statically; the client rejected it in favor of the interactive reveal on both pages.

**ManifestoStrip layout (v6).** Head-on-top, 3-column grid below. Was a 2-column `sticky head + list` earlier, but the sticky head appeared to jump during staggered per-item reveals. Current structure uses one `data-reveal` on the list container (no per-item stagger) and no sticky positioning. Section has `border-bottom` only; the outer `border-top` was removed because it rendered as a dark line right below the dark graphic strip above. Don't re-add it.

**Header variant prop.** `<Header variant="light" | "dark" />`. Default is `light`. `dark` applies `osa-dark` scope (white text on black) and hides the bottom hairline rule so the header merges into a dark hero. Used on the three dark-hero pages; keep others on the default.

**FilterBar spacing (v6).** `.osa-filter { gap: space-5 }`, `.osa-filter__group { gap: space-4 }`, `.osa-filter__row { gap: space-3 }`, outer padding `space-6 0`. These were tighter before and the client called out the cramped rhythm. Don't shrink them without a reason.

**Investment call (Záměr VPD1) lives in three places after v7.2.** Landing carries `<InvestmentHero />` (mustard-draft figures, schematic chart, single CTA routing to the aktualita). The canonical long-form narrative lives in `src/content/aktuality/vpd1-hledame-strategickeho-partnera.mdx` (PDF-verified figures). The inline `#zamer-vpd1` block on `/projekty/vpd/` keeps the dl-style figures with mustard `.osa-draft` highlights. Figures on the landing banner and the VPD page use older vault-research numbers (IRR 78 %, ROI 141 %); the aktualita uses PDF-verified numbers (IRR 59 %, ROI 151 %). To activate for a public launch: reconcile the three sources with Marek Semerád, strip `.osa-draft` wrappers on the landing banner and the VPD page, swap the placeholder SVG hero on the aktualita for a real image.

## Content collections schema

Defined in `src/content.config.ts`:

- `subProjects` — glob `src/content/sub_projects/*.mdx`. Fields: `name`, `description` (30–160 chars), `accent` (8-color enum, fails build on bad value), `status` (realizovany/pripravovany/ve-spanku/draft), `relationship`, `topic` (8-enum: urbanismus/kultura/sport/media/vzdelavani/tvorba/komunita/larp), `external_url` (optional — if absent, card routes to `/projekty/<slug>/`), `featured`, `order`.
- `values` — file `src/content/values/axioms.json`. Each item needs `id`, `name`, `gloss`, `order` (1–16).
- `pillars` — file `src/content/pillars/index.json`. Each item needs `id`, `n` (zero-padded 2-digit string), `title`, `body`.
- `org` — file `src/content/org/identity.json`. Single keyed entry `identity`.
- `dokumenty` — glob `src/content/dokumenty/*.json`.

**Schema gotchas.** The `file()` loader requires either an array of items with `id` fields, or a top-level object keyed by id. The single `org.identity.json` uses the keyed form — don't flatten it back. Numbers (pillars `n`) must be strings to survive the `regex(/^\d{2}$/)` check.

## Aktuality channel (v7, v7.1)

Self-service editorial channel that bypasses the "client chats with agent → agent commits" loop. Architecture summary; full client-facing docs in [docs/APPS_SCRIPT.md](./docs/APPS_SCRIPT.md).

- **Collection:** `aktuality`, MDX glob in `src/content/aktuality/`, Zod-validated with title (10-120), lead (40-240), date, hero path, optional tags/author/hero_alt/draft.
- **Pages:** `/aktuality/` grid (sorted date DESC) and `/aktuality/<slug>/` detail with hero, body, tags, "Zpět na aktuality", and up to three related cards. Detail emits Article JSON-LD.
- **Detail hero (v7.1):** VPD-style dark frame. `<Header variant="dark" />` fuses into a dark `<section>` that carries the article's hero image as a full-bleed `<img>` background (aria-hidden, loading="eager") with a `filter: brightness(0.45) saturate(0.85)` cut plus a three-stop linear-gradient scrim. Content (crumbs, eyebrow, H1 left-aligned, lead) sits on top via z-index stacking. Narrow container (1200 px) so the text reads as a reading column. Padding matches the shared dark-hero contract (96/96). When the hero asset is a dark SVG (e.g. the VPD1 Klecany schematic) the darkening filter still behaves; when it is a colour photo (PF 2026 astronaut) the scrim carries the legibility.
- **Landing spotlight (v7.1):** [src/components/AktualitaSpotlight.astro](./src/components/AktualitaSpotlight.astro) picks the newest non-draft aktualita and renders a magazine split (media 1.25 fr + body 1 fr) on the landing page. Whole card is an `<a>` with `osa-nolink` to bypass the global link fade; Swiss hover vocabulary (image saturation bloom, lead colour flip k-50 → fg, CTA rule bloom, arrow nudge). A "Další aktuality" secondary CTA sits below. Mounted on `src/pages/index.astro` in the slot previously held by `<InvestmentHero />`.
- **Component:** `ArticleCard.astro`. Mirrors ProjectCard's top/bottom labeled-row contract with a monochrome hero that flips to color on hover (Gallery vocabulary).
- **Content (v7.1):** five MDX files. The v7.1 addition is [vpd1-hledame-strategickeho-partnera.mdx](./src/content/aktuality/vpd1-hledame-strategickeho-partnera.mdx) (6.4.2026), the VPD1 investment-call pitch translated from the two source PDFs (`Investment call k záměru VPD1.pdf`, `Záměr VPD1 – základní souhrn.pdf`). Uses PDF-verified figures: IRR 59 %, ROI 151 %, profit 421 mil. Kč, 285 mil. Kč investment, 331 units 1+kk, 10 144 m² first-phase HPP, 118 903 m² second-phase HPP, start ~10/2032. Hero is a monochrome SVG placeholder ([public/images/aktuality/vpd1-klecany.svg](./public/images/aktuality/vpd1-klecany.svg)) in VPD visual language; replace with a real rendering of Horní kasárna when VPD Klecany s.r.o. provides one. The v7 set (PF 2026 + 3 Výletná backfill) is untouched.
- **Drive sync pipeline:** [scripts/sync-drive-aktuality.mjs](./scripts/sync-drive-aktuality.mjs) pulls Google Docs from a shared Drive folder, exports Markdown, downloads first inline image via Docs API, resizes to 1600 px with sharp, normalizes smart characters so the editorial linter stays green, writes MDX. [.github/workflows/sync-aktuality.yml](./.github/workflows/sync-aktuality.yml) runs on `repository_dispatch` (from Apps Script) plus a 30-minute cron fallback, opens a PR via `peter-evans/create-pull-request@v6`. Secrets: `GOOGLE_SERVICE_ACCOUNT` (service account JSON), `DRIVE_FOLDER_ID`. Client confirmed he wants the pipeline live; activation steps are in the next section.

## Drive sync activation

Client asked to wire the Drive sync live (rather than continue with the "chat the agent → agent commits" fallback). These are the remaining steps.

**Four decisions the client (Marek) must make:**

1. **Google Workspace or personal Gmail?** Workspace with a Shared Drive has cleaner ACL and survives folder-ownership changes. Personal Gmail works but sharing the folder with the service account is more fragile. Recommended: Workspace.
2. **Expected publishing volume per month?** Under ~5 articles/month the 30-minute cron is plenty. Over ~20 the Apps Script time-driven trigger should step down to every 5 minutes (or switch to `onChange`).
3. **PR review policy.** First 3 months manual review (Kindl, then Marek). After that, auto-merge when editorial lint + build pass green.
4. **Hero image policy.** Strict (every article must have an inline image, sync fails otherwise) or fallback (use a generic OSA monochrome graphic when the Doc contains no image).

**Setup work (Kindl, ~60-90 minutes once decisions land):**

1. **Google Cloud.** Create project `osa-aktuality-sync`, enable Drive API + Docs API, create service account `osa-aktuality`, download JSON key. Share the Drive folder with that service-account email as Editor.
2. **GitHub secrets.** Add `GOOGLE_SERVICE_ACCOUNT` (full JSON contents) and `DRIVE_FOLDER_ID` (the shared folder's ID from its URL) in repo Settings → Secrets → Actions. Requires the remote to exist first (see Deploy checklist).
3. **Apps Script.** In the shared folder, create a new Apps Script project with the code from [docs/APPS_SCRIPT.md](./docs/APPS_SCRIPT.md) §3. Set the two Script Properties (`GITHUB_PAT`, optionally `REPO`). Run `triggerSync` once to verify the dispatch, then set the time-driven trigger.
4. **Smoke test.** Client creates a throwaway Google Doc with one paragraph and one image, hits manual `triggerSync`, confirms a PR lands in GitHub within ~30 seconds. Merge it, confirm it appears on the preview URL.
5. **Client handoff.** Send Marek a short how-to (the first half of [docs/APPS_SCRIPT.md](./docs/APPS_SCRIPT.md) is that document, plus the `.docx` starter in [docs/templates/](./docs/templates/)).

## SEO infrastructure (v7)

- **Sitemap:** `@astrojs/sitemap` writes `dist/sitemap-index.xml` + `dist/sitemap-0.xml`. 404 excluded via filter.
- **Per-page metadata:** `Base.astro` takes `title`, `description`, `ogImage`, `ogType` props. Derives canonical from `Astro.site` + `Astro.url.pathname`. Renders OG tags, Twitter Card, manifest link, sitemap hint.
- **Organization JSON-LD:** `Base.astro` fetches `getEntry('org', 'identity')` and emits a schema.org `NGO` payload on every page (name, IČO, DIČ, address with Bubeneč, foundingDate from ARES, members with jobTitle).
- **Static OG image:** `public/og/default.png` (32 KB, 1200x630) generated from `public/og/default.svg` via rsvg-convert. Each page can override with `ogImage`.
- **404 page:** [src/pages/404.astro](./src/pages/404.astro). Swiss editorial layout matching the rest of the site.
- **Redirects:** [public/_redirects](./public/_redirects) maps the seven alternativa2.info top-level pages (kdo-jsme, nase-spolkove-projekty, spoluprace, clenstvi-ve-spolku, spolkova-galerie, kontakty, index) with 301s plus trailing-slash variants.
- **Manifest:** [public/manifest.webmanifest](./public/manifest.webmanifest) for PWA add-to-homescreen on mobile.

## Fact-check (v7 scaffold)

[docs/FACTCHECK.md](./docs/FACTCHECK.md) is the 60-claim checklist organized into eight categories with F1/F2/F3 verification phases (F1 = agent can verify against ARES/katastr/HEAD-check, F2 = needs client knowledge, F3 = needs sněm or statutes). `src/content/org/identity.json` was updated with ARES-verified founding date (2006-03-14) and the missing "Bubeneč" address fragment. Zod schema on `org` now requires `founded: YYYY-MM-DD`.

## Known issues and open loops

- **VPD1 financial figures split between two sources.** The landing spotlight + the v7.1 aktualita `vpd1-hledame-strategickeho-partnera.mdx` use PDF-verified figures (IRR 59 %, ROI 151 %, profit 421 mil. Kč, 285 mil. Kč for 331 units). The VPD page's `#zamer-vpd1` inline block still carries the older vault-research figures (IRR 78 %, ROI 141 %) wrapped in mustard draft highlights. Before the VPD page's inline block goes undrafted, reconcile it with the PDF numbers and confirm with Marek Semerád.
- **AktualitaSpotlight.astro is orphaned (v7.2).** The magazine-split spotlight component added in v7.1 is no longer imported. Landing reverted to `<InvestmentHero />` on client request. `src/components/AktualitaSpotlight.astro` stays on disk in case the spotlight approach comes back for a non-VPD feature slot; safe to delete if we're sure it will not be needed.
- **Dokumenty PDFs are stubs.** `src/content/dokumenty/*.json` references files at `/dokumenty/stanovy-osa-ii.pdf` etc., but `public/dokumenty/` isn't populated. The DocumentList will render but links 404.
- **PF 2026 hero is a compressed placeholder JPG.** The 462 KB original was sips-reduced to 202 KB for the weight budget; visually noticeable artifacts. When the final astronaut image is available, drop it at `public/images/aktuality/pf-2026.jpg` (keep under ~300 KB at 1600 px wide) and no frontmatter change is needed.
- **VPD1 aktualita hero is an SVG placeholder.** Monochrome Klecany schematic at [public/images/aktuality/vpd1-klecany.svg](./public/images/aktuality/vpd1-klecany.svg). When VPD Klecany s.r.o. provides an actual rendering of Horní kasárna, save it as `vpd1-klecany.jpg` (or `.webp`) and update the `hero:` field in the MDX frontmatter.
- **Drive sync pending activation.** Client confirmed intent to use the pipeline; four decisions + service-account setup remain. See [Drive sync activation](#drive-sync-activation) above. Fallback (chat-the-agent) continues to work in the meantime.
- **Gas Town and DIY dílny dropped their `external_url`** because the placeholder URLs I seeded (`gastown.cz`, `diydilny.cz`) were dead during link lint. If the real domains come back, re-add `external_url:` to the MDX.
- **Junktown URL is 410 Gone** — link linter flags `https://junktown.postapofestival.cz`. Pre-existing issue. Not introduced by any recent change. Either restore the site, drop `external_url:` from [junktown.mdx](src/content/sub_projects/junktown.mdx), or accept as a known warning.
- **Longform stubs.** `/o-spolku/historie/` and `/o-spolku/metodologie/` have placeholder content with an `<aside>` explaining the page is a stub. The board fills these post-launch.
- **No GitHub remote.** Local repo only. To publish: `gh repo create`, push, connect Cloudflare Pages.
- **No analytics.** v1 ships with zero tracking. Privacy-friendly counter (Plausible/GoatCounter) is a post-launch decision.
- **Atyp Special ligature question**, see the font note above. Client asked about this and the answer is "font doesn't contain the rule."

## Client-driven revisions (v1 → v5)

Each `v#` commit captures a round of feedback from the client. Reading them in order tells the story:

- **v1** (`feat(uvod)` + subsequent feat commits + `build(phase4)` + `docs(phase5)`) — original build per plan.
- **v2** — first feedback pass: new brand assets, Hero reworked, monochrome hover on cards, topic replaces relationship, 4x4 values with hover gloss, drop serif, reduced graphic headers, Gallery introduced.
- **v3** — Atyp Special everywhere (dropped Space Grotesk); smoother filter with clip-path; full-wordmark footer logo; `&nbsp;` on number+unit pairs; draft underline removed; cards shifted to gray default (a mistake, reverted in v4).
- **v4** — revert card hover to clean black-invert wipe via clip-path; add scroll-reveal observer; favicon generation; gallery bigger, frameless; footer logo 50% smaller; **full VPD project subpage** built from vault research (hero, stats, philosophy, three pillars, Výletná case study, Záměr VPD1, related projects).
- **v5** — ProjectCard top/bottom layout contract; Gallery 4x2 uniform; graphic headers reverted to full-bleed; VPD subpage gets full Záměr VPD1 investment block; VPD MDX confirmed without `external_url` so the card routes internally.
- **v6** (2026-04-20, uncommitted as of this writing) — unified dark-hero pattern across landing / O Spolku / VPD; Header `variant` prop; Hero motto "Pomáháme tvořit" folded from italic line into strapline body; O Spolku gets a full dark hero redesign with crumbs + h1 + sub-head + lede; ValuesMatrix `dark={true}` on /o-spolku/; ProjectCard hover rewritten to Swiss restraint (no more black wipe), description flips `--k-50 → --fg`, meta row loses the literal "OSA" word, eyebrow loses the redundant "Projekt ·" prefix, anchor gets `osa-nolink` to bypass global link fade; Gallery monochrome-at-rest, color-on-hover, frame removed; InvestmentHero DRAFT notice removed (mustard draft wrappers on figures kept), CTA now links internally to `/projekty/vpd/`; VPD page uses shared `.osa-vpd__wrap` container, "Jak / Tři stavební kameny" header moved into the pillars section for tighter relationship; ManifestoStrip restructured (head on top, 3-col grid below) to fix heading-jump perception, outer `border-top` removed; reveal choreography added to projekty/index, zapojte-se, kontakty, o-spolku/dokumenty, LongformPage, projekty/[slug]; FilterBar spacing bumped (space-5 between groups, space-4 legend→row, space-3 between buttons).
- **v7** (2026-04-21) — launch-prep pass: aktuality channel (collection + index + detail + ArticleCard + 4 placeholder articles), SEO infrastructure (sitemap, per-page OG, Organization + Article JSON-LD, manifest, 404, real 301 redirects), Drive sync pipeline scaffold (script + Action + Apps Script docs), fact-check scaffold (FACTCHECK.md + ARES-verified identity.json with founded date + Bubeneč).
- **v7.1** (2026-04-21, same-day follow-up on client feedback) — three asks addressed in one pass:
  (a) Investment call converted to an aktualita. `src/components/InvestmentHero.astro` unmounted from the landing; replaced by `src/components/AktualitaSpotlight.astro` (magazine-split card pointing to the latest non-draft aktualita, "Další aktuality" CTA below). New article `src/content/aktuality/vpd1-hledame-strategickeho-partnera.mdx` carries the content from the two PDFs with PDF-verified figures.
  (b) Shared dark-hero contract. Landing Hero's bespoke padding shorthand and 1280 px max-width override were removed; Hero now matches O spolku, VPD, Projekty and aktuality detail on the same 96/96 padding + 24 px gutter + container-wide 1440 px contract. Projekty got a full dark hero frame with the FilterBar moved inside.
  (c) Aktuality detail hero rebuilt VPD-style. `<Header variant="dark" />` + dark `<section>` with the article's hero as a darkened full-bleed background, left-aligned crumbs + eyebrow + H1 + lead, narrow container (1200 px). The separate `.osa-article__hero-section` figure block was removed since the photo is now in the hero background.
  PF 2026 placeholder JPG was sips-compressed 462 → 202 KB to keep the page under the eager-weight budget. Client also confirmed Drive sync should be activated for real.
- **v7.2** (2026-04-21, same-day client follow-up) — client preferred the original `<InvestmentHero />` banner over the magazine-split spotlight, so landing was reverted. `src/components/InvestmentHero.astro` restored from git history (b1d3d2e) with four edits: DRAFT notice removed, `aria-disabled` dropped, primary CTA changed to "Celý článek" routing to `/aktuality/vpd1-hledame-strategickeho-partnera/`, secondary CTA "O Veřejně prospěšném developerovi" rewired from `https://vepde.com/` to internal `/projekty/vpd/`. `confirmed` prop removed (no longer toggles anything). Motion choreography added per-element: eyebrow + title + lede + CTA wrapper + chart use `data-reveal` with a 0–180 ms stagger, and every numeric figure carries `data-count-to` so the values roll up from zero via the shared RevealOnScroll observer (11 counters: 83 327 m², 12 km x2, 10, 88 946, 1 572, 82 %, 331, 285 mil. Kč, 141 %, 78 %). Year 2039 intentionally stays plain text so the int formatter does not split it as "2 039". `src/pages/index.astro` swapped `AktualitaSpotlight` import and mount back to `InvestmentHero`. `AktualitaSpotlight.astro` stays on disk as orphaned. VPD1 figures on the banner still use older vault numbers (IRR 78 %, ROI 141 %) inside mustard `.draft` wrappers; aktualita body carries the PDF-verified IRR 59 % / ROI 151 %. Reconciliation pushed to the deploy checklist.

## Running the project

```bash
pnpm install         # once
pnpm dev             # http://localhost:4321
pnpm build           # writes to dist/
pnpm preview         # serves dist/
pnpm lint            # editorial + links (links non-blocking in CI)
pnpm lint:weight     # per-page budget check against dist/
```

Dev server uses Claude Preview when available — `.claude/launch.json` config in the repo root works with VS Code + Claude Preview MCP. See also the vault's `/Users/kindl/kindl-vault/.claude/launch.json` for the `osa-web` entry used from sessions running in the vault.

## Editorial rulebook (hard)

Enforced by `scripts/lint-editorial.mjs`. Violations fail the build. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full table.

No em/en dashes. No `!` in body copy. No passive voice (`je realizováno`, `snaha o`). No legalese (`ve smyslu §`). No marketing hype (`úžasný`, `neuvěřitelný`). Ellipsis `…` reserved for the `Pomáháme tvořit…` motto. Czech and Slovak diacritics must be correct.

**Gotcha: the editorial linter scans *all* file contents, including CSS/JS comments and TypeScript syntax.** An em-dash in a `/* comment */` fails the build. A TypeScript non-null assertion (`x!`) fails the `[exclamation]` rule. Use colons in comments (`/* foo: bar */`) and `as Type` in TS instead of `!`.

## Contact points

- Client organization: Občanské sdružení Alternativa II, z.s. (OSA II, OSA2).
- Předseda: Marek Semerád.
- Místopředseda: Štěpán Říha.
- Legal identifiers + bank accounts: `src/content/org/identity.json`.

## Deploy checklist when ready

1. `gh repo create` for the repo, set branch protection on `main`.
2. Cloudflare Pages: connect Git, build command `pnpm build`, output `dist`, Node 22, no env vars.
3. DNS: `osa2.cz` apex + `www` → Cloudflare Pages `.pages.dev` alias.
4. Confirm VPD1 figures with Marek and reconcile all three surfaces: landing `<InvestmentHero />` (mustard `.draft` wrappers on vault figures), `src/content/aktuality/vpd1-hledame-strategickeho-partnera.mdx` (PDF-verified figures, no drafts), inline `#zamer-vpd1` block on `/projekty/vpd/` (mustard `.osa-draft` wrappers). Once Marek signs off, strip draft wrappers on landing + VPD page and swap the placeholder SVG hero on the aktualita for a real image.
5. Populate `public/dokumenty/*.pdf` for the document list to work.
6. Activate Drive sync for aktuality (see **Drive sync activation** under the Aktuality channel section). Requires the four client decisions plus the five Kindl setup steps. Optional — the client can keep using the agent-commit flow for launch if desired.
7. Review `public/_redirects`: the top-level alternativa2.info routes are mapped already; if Screaming Frog or Search Console surfaces additional hot URLs (deep anchors, outlier pages), add them before switching DNS.
8. Publish.
