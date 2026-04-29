# Startovací Hub Klecany — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the existing `sh-web` repo (currently a copy of osa-web) into the Startovací Hub Klecany sub-site — six pages, two forms, a simplified investment calculator, sub-projects grid, FAQ — keeping the OSA design tokens, fonts, motion vocabulary, and lint scripts while wiping all OSA-parent content.

**Architecture:** Astro 6.1.8 static site (current osa-web stack, unchanged). Two content collections + two JSON files. Frontend-only forms (submission deferred to a programmer). Calculator is a small inline `<script is:inline>` widget reading from `scenarios.json`. No client framework, no React island. Six pages: `/`, `/obyvatele/`, `/investori/`, `/projekty/`, `/o-projektu/`, `/faq/` plus a `/projekty/[slug]/` stub template for five programme cards.

**Tech Stack:** Astro 6.1.8, MDX, `@astrojs/sitemap`, Zod content collections, vanilla CSS with existing tokens (Atyp Text/Special, K10–K90 monochrome, `--c-red: #d0342c`), `sharp` for image optimization. No new dependencies.

**Source-of-truth spec:** Lives in the conversation that created this plan (sections §0–§15 of the Hub Plan). The plan references that spec by section number rather than duplicating ~5000 words of Czech copy. Engineer reads both side-by-side.

**Cross-references:**
- Parent VPD page that the Hub site mirrors (timeline, unit count, financials): `/Users/kindl/Work/_2026/02 OSA/11 WWW/vpd-web/src/pages/vpd1/startovaci-hub.astro` and `vpd-web/src/pages/vpd1/index.astro`
- Reusable Hub renders already produced: `vpd-web/public/images/zamer-vpd/hub-*.jpg` (8 files)
- New raw assets to migrate: `/Users/kindl/Work/_2026/02 OSA/12 Startovaci Hub/image/` — `2D-MAP.jpeg` (masterplan) + `indoor/` (8 files) + `outdoor/` (27 files)
- Original VPD logomark to port into sh-web: `vpd-web/src/components/VpdLogomark.astro`
- OSA org identity (Marek Semerád, contact, parent links): existing `sh-web/src/content/org/identity.json`

---

## File Structure

```
sh-web/
├── astro.config.mjs              # rewritten: site=https://klecany.osa2.cz, no base
├── package.json                  # rename to sh-web; same deps
├── README.md                     # rewritten for Hub
├── CLAUDE.md                     # rewritten for Hub (handoff doc)
├── public/
│   ├── fonts/                    # KEEP (Atyp Text/Special woff2)
│   ├── images/
│   │   └── hub/
│   │       ├── exterior/         # outdoor/* + vpd-web hub-courtyard, -street, -renovated
│   │       ├── interior/         # indoor/* + vpd-web hub-market-*
│   │       ├── masterplan.jpg    # from 2D-MAP.jpeg
│   │       └── place/map.jpg     # OSM screenshot of Klecany + Prague (operator-supplied later)
│   ├── logo/
│   │   ├── VPD-Wordmark-Black.svg  # placeholder until brand asset arrives; for now a small <svg> sprite
│   │   └── VPD-Wordmark-White.svg
│   ├── favicon.svg / .ico        # rewritten for Hub
│   ├── og/default.png            # new Hub OG card
│   └── manifest.webmanifest      # updated for Hub
├── scripts/
│   ├── lint-editorial.mjs        # KEEP (v8 state — em-dash + ! allowed, passive/hype banned)
│   ├── lint-links.mjs            # KEEP
│   ├── lint-weight.mjs           # KEEP
│   └── migrate-hub-images.mjs    # NEW: copy + sharp-optimize from /12 Startovaci Hub/image/
└── src/
    ├── content.config.ts         # rewritten: subProjects (Hub programme), faq, scenarios, org
    ├── content/
    │   ├── sub_projects/
    │   │   ├── komunitni-centrum.mdx
    │   │   ├── coworking-centrum.mdx
    │   │   ├── komunitni-pivovar.mdx
    │   │   ├── bytove-druzstvo.mdx
    │   │   └── trznice-parter.mdx
    │   ├── faq/index.json        # 12 Q&As, audience-tagged
    │   ├── scenarios/index.json  # 5 placeholder scenarios for calculator
    │   └── org/identity.json     # KEEP (OSA org for Marek + email + parent links)
    ├── components/
    │   ├── Header.astro          # REWRITTEN — VPD wordmark + part-of-OSA link + nav + role chip
    │   ├── Footer.astro          # REWRITTEN — Marek + 2 parent links + privacy stub
    │   ├── VpdLogomark.astro     # NEW — ported from vpd-web, used in Hub hero
    │   ├── RoleChip.astro        # NEW — persistent role switcher chip on /obyvatele/ and /investori/
    │   ├── Tooltip.astro         # NEW — `?` icon with hover/tap-to-toggle content for resident tracks
    │   ├── ResidentForm.astro    # NEW — branched form per spec §9
    │   ├── InvestorForm.astro    # NEW — investor interest form per spec §9
    │   ├── Calculator.astro      # NEW — 2-input / 3-output widget reading scenarios.json
    │   ├── FAQAccordion.astro    # NEW — audience-tabbed accordion per spec §8
    │   ├── ProjectCard.astro     # KEEP (rewire props for Hub programme cards)
    │   ├── Gallery.astro         # KEEP (renders the split exterior/interior galleries)
    │   ├── GraphicHeader.astro   # KEEP (used as section divider on long pages)
    │   ├── InlineCTA.astro       # KEEP
    │   ├── RevealOnScroll.astro  # KEEP
    │   ├── SVGPattern.astro      # KEEP (pozadi backgrounds on dark hero sections)
    │   └── (drop)                # delete: AktualitaSpotlight, ArticleCard, DocumentList, FilterBar,
    │                             #         Hero, InvestmentHero, ManifestoStrip, OrgChart, OsaGlyph,
    │                             #         Rozcestnik, SectionBlock, ValuesMatrix
    ├── layouts/
    │   ├── Base.astro            # ADAPTED — Hub branding, JSON-LD updated for VPD/OSA
    │   └── (drop) LongformPage.astro
    ├── pages/
    │   ├── index.astro           # Landing (spec §3)
    │   ├── obyvatele/index.astro # Pro budoucí obyvatele (spec §4)
    │   ├── investori/index.astro # Pro investory (spec §5)
    │   ├── projekty/
    │   │   ├── index.astro       # programme grid (spec §7)
    │   │   └── [slug].astro      # stub detail template
    │   ├── o-projektu/index.astro # místo + časová osa (spec §6)
    │   ├── faq/index.astro       # FAQ (spec §8)
    │   └── 404.astro             # adapted
    ├── styles/
    │   ├── tokens.css            # KEEP (--c-red: #d0342c already defined)
    │   ├── kit.css               # KEEP
    │   └── motion.css            # KEEP
    └── utils/
        └── url.ts                # KEEP (no-op when base='/'; existing components still work)
```

---

## Working Tree State

Pre-flight git status (recorded at plan-write time): branch `master`, three modified files (`package.json`, `src/components/InvestmentHero.astro`, `src/pages/zamer-vpd/index.astro`) and five untracked items in `docs/` and `scripts/` from previous OSA work. **All of these get wiped or replaced.** Phase 0 commits or stashes them on a backup branch before destruction.

---

## Phase 0 — Pre-flight

### Task 0.1: Snapshot current state on a backup branch

**Files:** none (git only).

- [ ] **Step 1: Verify the working tree**

```bash
git -C "/Users/kindl/Work/_2026/02 OSA/11 WWW/sh-web" status
```

Expected: the modifications + untracked files described in *Working Tree State* above.

- [ ] **Step 2: Commit pending OSA work to a backup branch**

```bash
cd "/Users/kindl/Work/_2026/02 OSA/11 WWW/sh-web"
git checkout -b backup/osa-web-pre-hub-redesign
git add -A
git commit -m "chore: snapshot osa-web state before Startovací Hub redesign"
git checkout master
```

Expected: `backup/osa-web-pre-hub-redesign` exists with all changes; `master` returns to its pre-modification HEAD with a clean tree (we will commit destructive changes onto master in subsequent tasks).

- [ ] **Step 3: Create the working branch**

```bash
git checkout -b feat/startovaci-hub
```

Expected: working tree clean, on branch `feat/startovaci-hub`.

---

## Phase 1 — Wipe OSA-parent content

### Task 1.1: Delete OSA-parent pages

**Files:** Delete entire directories under `src/pages/`.

- [ ] **Step 1: Remove OSA-parent page trees**

```bash
cd "/Users/kindl/Work/_2026/02 OSA/11 WWW/sh-web"
rm -rf src/pages/aktuality src/pages/kontakty src/pages/o-spolku src/pages/projekty src/pages/zamer-vpd src/pages/zapojte-se
rm -f src/pages/index.astro
```

Expected: `src/pages/` now contains only `404.astro`. Build will fail (no `index.astro`); intentional — restored in Phase 8.

- [ ] **Step 2: Verify**

```bash
ls src/pages/
```

Expected output: `404.astro`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore(hub): remove osa-parent pages"
```

### Task 1.2: Delete OSA-parent content collections

**Files:** Delete files under `src/content/` except keep `org/identity.json`.

- [ ] **Step 1: Remove OSA content**

```bash
rm -rf src/content/aktuality src/content/dokumenty src/content/pillars src/content/sub_projects src/content/values
```

- [ ] **Step 2: Verify**

```bash
ls -R src/content/
```

Expected output:

```
org

src/content/org:
identity.json
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore(hub): remove osa-parent content collections"
```

### Task 1.3: Delete unused OSA-parent components, layouts, public assets

**Files:** Delete listed components, layouts, and public assets.

- [ ] **Step 1: Drop osa-only components**

```bash
rm -f src/components/AktualitaSpotlight.astro
rm -f src/components/ArticleCard.astro
rm -f src/components/DocumentList.astro
rm -f src/components/FilterBar.astro
rm -f src/components/Hero.astro
rm -f src/components/InvestmentHero.astro
rm -f src/components/ManifestoStrip.astro
rm -f src/components/OrgChart.astro
rm -f src/components/OsaGlyph.astro
rm -f src/components/Rozcestnik.astro
rm -f src/components/SectionBlock.astro
rm -f src/components/ValuesMatrix.astro
```

- [ ] **Step 2: Drop the longform layout**

```bash
rm -f src/layouts/LongformPage.astro
```

- [ ] **Step 3: Drop osa-specific public assets**

```bash
rm -rf public/graphics public/images public/og public/logo
rm -f public/favicon-16.png public/favicon-32.png public/favicon.ico public/favicon.svg public/apple-touch-icon.png public/manifest.webmanifest public/_redirects
```

(Keep `public/fonts/` and `public/robots.txt` — both stay.)

- [ ] **Step 4: Verify the kept components**

```bash
ls src/components/
```

Expected: `Footer.astro Gallery.astro GraphicHeader.astro Header.astro InlineCTA.astro ProjectCard.astro RevealOnScroll.astro SVGPattern.astro` (eight files; we will modify four of them and add new ones in later phases).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(hub): remove osa-parent components, layouts, public assets"
```

---

## Phase 2 — Stack & config rebrand

### Task 2.1: Rewrite `astro.config.mjs` for `klecany.osa2.cz` subdomain

**Files:** Modify `astro.config.mjs`.

- [ ] **Step 1: Replace contents**

```js
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Startovací Hub Klecany — sub-site of OSA at klecany.osa2.cz.
// Subdomain deploy: no base path, so withBase() helper is a no-op.
export default defineConfig({
  site: 'https://klecany.osa2.cz',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
```

- [ ] **Step 2: Verify withBase still works**

The `src/utils/url.ts` reads `import.meta.env.BASE_URL` and trims trailing slash. With no `base` configured, BASE_URL='/', so `withBase('/foo')` returns `/foo` unchanged. No code changes needed in url.ts.

- [ ] **Step 3: Commit**

```bash
git add astro.config.mjs
git commit -m "chore(hub): point astro.config to klecany.osa2.cz"
```

### Task 2.2: Update `package.json` name and `tokens.css` font URLs

**Files:** Modify `package.json`, `src/styles/tokens.css`.

- [ ] **Step 1: Rename the package**

In `package.json`, change `"name": "osa-web"` to `"name": "sh-web"`. Bump nothing else.

- [ ] **Step 2: Strip the /osa-web/ prefix from font URLs**

In `src/styles/tokens.css`, find every `/osa-web/fonts/...` URL inside `@font-face` rules and replace with `/fonts/...`. This is a single find/replace across the file.

```bash
grep -n "/osa-web/" src/styles/tokens.css
```

Expected before: several `/osa-web/fonts/AtypText-Special-*.woff2` URLs.

```bash
sed -i '' 's|/osa-web/fonts/|/fonts/|g' src/styles/tokens.css
grep -n "/osa-web/" src/styles/tokens.css
```

Expected after: empty grep result.

- [ ] **Step 3: Verify build still passes (sanity check, build will still fail on missing index.astro)**

```bash
pnpm install
```

Expected: install completes; lockfile may regenerate slightly because of the rename.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml src/styles/tokens.css
git commit -m "chore(hub): rename package to sh-web and strip /osa-web/ from font URLs"
```

### Task 2.3: Expose `--c-red` as the Hub accent token

**Files:** Modify `src/styles/tokens.css`.

The token already exists (`--c-red: #d0342c`). The Hub uses one accent. Add a semantic alias next to it so components reference `var(--accent)` instead of `var(--c-red)` directly. This keeps the token layer isolated from a possible future re-skin.

- [ ] **Step 1: Add the alias**

In `src/styles/tokens.css`, find the `--c-red: #d0342c;` line and add immediately below it (still inside the same `:root { ... }` block):

```css
  --accent: var(--c-red);
  --accent-on: #ffffff; /* foreground used on accent fills */
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/tokens.css
git commit -m "feat(hub): expose --accent semantic token (binds to tricolor red)"
```

---

## Phase 3 — Editorial linter sanity

### Task 3.1: Verify the editorial linter is in v8 state and runs clean on an empty content set

**Files:** none (verification only).

- [ ] **Step 1: Confirm em-dash and `!` rules are NOT enforced**

```bash
grep -n "em-dash\|en-dash\|exclamation" scripts/lint-editorial.mjs
```

Expected: only commented-out references in the file's header (the v8 lift). If active rules still ban these characters, fix the linter file (delete the corresponding rule object) before continuing.

- [ ] **Step 2: Confirm voice rules ARE enforced**

```bash
grep -n "passive-voice\|marketing-hype\|legalese" scripts/lint-editorial.mjs
```

Expected: each appears in an active rule object.

- [ ] **Step 3: Run the linter on the now-empty content tree**

```bash
pnpm lint:editorial
```

Expected: lints zero MDX files, exits 0. (The MDX glob `src/content/**/*.mdx` matches nothing right now.)

- [ ] **Step 4: No commit needed (verification only).**

---

## Phase 4 — Content collections

### Task 4.1: Rewrite `src/content.config.ts` for Hub collections

**Files:** Modify `src/content.config.ts`.

- [ ] **Step 1: Replace contents**

```ts
/*
 * Astro 6 Content Collections for the Startovací Hub.
 * Three collections: subProjects (Hub programme cards), faq, org (OSA identity).
 * Calculator scenarios live in a static JSON file at public/data/, not a collection,
 * so the inline calculator script can fetch it directly.
 */
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const subProjectStatusEnum = z.enum(['v-priprave', 'pripravujeme', 'realizujeme']);

const subProjects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/sub_projects' }),
  schema: z.object({
    name: z.string().min(3).max(80),
    role: z.string().min(20).max(160),
    status: subProjectStatusEnum,
    order: z.number().int(),
    thumbnail: z.string().startsWith('/').optional(),
  }),
});

const faqAudienceEnum = z.enum(['project', 'resident', 'investor', 'legal']);

const faq = defineCollection({
  loader: file('./src/content/faq/index.json'),
  schema: z.object({
    audience: faqAudienceEnum,
    question: z.string().min(8).max(200),
    answer: z.string().min(40).max(1200),
    order: z.number().int(),
  }),
});

const org = defineCollection({
  loader: file('./src/content/org/identity.json'),
  schema: z.object({
    name: z.string(),
    abbreviations: z.array(z.string()),
    ico: z.string(),
    dic: z.string(),
    datova_schranka: z.string(),
    spisova_znacka: z.string(),
    founded: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    seat_address: z.string(),
    office_address: z.string(),
    email: z.string().email(),
    phone: z.string(),
    bank_transparent: z.string(),
    bank_other: z.string(),
    predseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
    mistopredseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
  }),
});

export const collections = { subProjects, faq, org };
```

- [ ] **Step 2: Commit**

```bash
git add src/content.config.ts
git commit -m "feat(hub): rewrite content collections for subProjects, faq, org"
```

### Task 4.2: Author the five sub-project MDX files

**Files:**
- Create: `src/content/sub_projects/komunitni-centrum.mdx`
- Create: `src/content/sub_projects/coworking-centrum.mdx`
- Create: `src/content/sub_projects/komunitni-pivovar.mdx`
- Create: `src/content/sub_projects/bytove-druzstvo.mdx`
- Create: `src/content/sub_projects/trznice-parter.mdx`

Source: spec §7 (each card lists name, role, status). Order field 1–5 in the order they appear in the spec.

- [ ] **Step 1: Create each MDX file with frontmatter only (no body content yet)**

Template for each (replace per-file values from spec §7):

```mdx
---
name: "Komunitní Centrum Klecany"
role: "Místo, kde se setkávají rezidenti Hubu se sousedy a hosty. Program, kultura, dílny, neformální setkávání."
status: "v-priprave"
order: 1
---

Detail tohoto projektu doplníme. Zatím se ozvěte na vpd@osa2.cz pro dotazy.
```

The other four use the `name` / `role` from spec §7 cards 2–5, status `v-priprave`, order 2–5. Body is the single placeholder paragraph above (will appear on the stub detail page).

- [ ] **Step 2: Verify Zod schema accepts all five**

```bash
pnpm astro sync
```

Expected: completes without schema errors. (`astro sync` regenerates collection types.)

- [ ] **Step 3: Commit**

```bash
git add src/content/sub_projects/ src/content.config.ts
git commit -m "feat(hub): seed five sub-project programme cards"
```

### Task 4.3: Author `src/content/faq/index.json` (12 Q&As)

**Files:** Create `src/content/faq/index.json`.

Source: spec §8. Each entry's `audience` is one of `project|resident|investor|legal`, ordered Q1→Q12 from the spec.

- [ ] **Step 1: Write the file as a top-level keyed object so the `file()` loader accepts it**

Schema is `file()` loader → keyed-by-id. Each Q gets an id like `q1` … `q12`.

```json
{
  "q1": {
    "audience": "project",
    "question": "Co přesně je Startovací Hub a co bude dál?",
    "answer": "Startovací Hub je první obyvatelná etapa záměru VPD1 ...",
    "order": 1
  },
  "q2": { "audience": "project",  "question": "Kdo za projektem stojí?",                            "answer": "Záměr běží pod hlavičkou VPD ...",       "order": 2 },
  "q3": { "audience": "project",  "question": "Kdy Hub otevírá?",                                   "answer": "Cílově ve čtvrtém kvartálu 2026 ...",    "order": 3 },
  "q4": { "audience": "project",  "question": "V jaké fázi je projekt teď?",                        "answer": "Máme dokončený investiční záměr ...",    "order": 4 },
  "q5": { "audience": "resident", "question": "Je vyplnění formuláře k něčemu zavazující?",         "answer": "Není. Formulář není rezervace ...",      "order": 5 },
  "q6": { "audience": "resident", "question": "Kolik bude pobyt stát?",                             "answer": "Cenová pásma ladíme ...",                 "order": 6 },
  "q7": { "audience": "resident", "question": "Co znamená stipendijní režim, work-trade nebo rezident-tvůrce?", "answer": "Stipendium je popsaný výběr ...", "order": 7 },
  "q8": { "audience": "resident", "question": "Jak je to s délkou pobytu a flexibilitou?",          "answer": "Hub je dimenzovaný na různě dlouhé ...", "order": 8 },
  "q9": { "audience": "investor", "question": "Jaký je dnes právní rámec investice?",               "answer": "Záměr finalizujeme přes některý ...",    "order": 9 },
  "q10": { "audience": "investor","question": "Co jsou scénáře S1-S5 a jak se mezi nimi rozhodnout?","answer": "Scénáře pokrývají rozsah ...",         "order": 10 },
  "q11": { "audience": "investor","question": "Jak je projekt zajištěný? Co když se zpozdí?",       "answer": "Zpoždění při povolování ...",            "order": 11 },
  "q12": { "audience": "legal",   "question": "Je formulář pro investory zavazující?",              "answer": "Není. Vyplněním nevstupujete ...",       "order": 12 }
}
```

**The full answers are in spec §8 verbatim.** Copy them into the `answer` fields exactly. No paraphrasing.

- [ ] **Step 2: Verify Zod accepts the file**

```bash
pnpm astro sync
```

Expected: completes without schema errors.

- [ ] **Step 3: Commit**

```bash
git add src/content/faq/
git commit -m "feat(hub): seed 12 FAQ entries"
```

### Task 4.4: Update `src/content/org/identity.json`

**Files:** Modify `src/content/org/identity.json`.

The OSA org file is reused (Marek Semerád is the contact for the Hub). No content changes needed — just verify it parses against the unchanged `org` schema.

- [ ] **Step 1: Verify**

```bash
pnpm astro sync
```

Expected: no schema errors against `org` collection.

- [ ] **Step 2: No commit needed if unchanged.**

### Task 4.5: Author `public/data/scenarios.json` (calculator placeholder data)

**Files:** Create `public/data/scenarios.json`.

The calculator reads this at runtime via `fetch()`. Schema (open, will be tightened when real data arrives):

```json
{
  "scenarios": [
    {
      "id": "S1",
      "name": "Konzervativní",
      "description": "Pomalejší náběh, opatrný odhad. Pro investory s nižší tolerancí k riziku.",
      "termYears": 5,
      "nominalYieldPct": 4.5,
      "multiplier": 1.20,
      "breakevenMonthsOffset": 48,
      "keyAssumption": "Otevření Hubu Q1 2027, plné obsazení Q4 2027."
    },
    {
      "id": "S2",
      "name": "Základní",
      "description": "Středový scénář, který odpovídá současnému plánu záměru.",
      "termYears": 5,
      "nominalYieldPct": 6.1,
      "multiplier": 1.30,
      "breakevenMonthsOffset": 42,
      "keyAssumption": "Otevření Hubu Q4 2026, plné obsazení Q3 2027."
    },
    {
      "id": "S3",
      "name": "Optimistický",
      "description": "Rychlejší otevření a vyšší obsazenost než plán.",
      "termYears": 5,
      "nominalYieldPct": 7.8,
      "multiplier": 1.42,
      "breakevenMonthsOffset": 36,
      "keyAssumption": "Otevření Q3 2026, vysoká poptávka po krátkodobém ubytování."
    },
    {
      "id": "S4",
      "name": "Krátký závazek (3 roky)",
      "description": "Varianta pro investory s kratším horizontem.",
      "termYears": 3,
      "nominalYieldPct": 5.0,
      "multiplier": 1.16,
      "breakevenMonthsOffset": 30,
      "keyAssumption": "Výplata principálu na konci 36. měsíce."
    },
    {
      "id": "S5",
      "name": "Dlouhý závazek (10 let)",
      "description": "Stabilizační scénář s vyšším výnosem za delší závazek.",
      "termYears": 10,
      "nominalYieldPct": 6.8,
      "multiplier": 1.95,
      "breakevenMonthsOffset": 60,
      "keyAssumption": "Plný výnos po dokončení dalších etap VPD1."
    }
  ],
  "_disclaimer": "Hodnoty v kalkulátoru jsou aktuálně ilustrativní; reálné scénáře doplníme po dokončení právní struktury."
}
```

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p public/data
```

Then write the JSON above to `public/data/scenarios.json`.

- [ ] **Step 2: Commit**

```bash
git add public/data/
git commit -m "feat(hub): seed placeholder calculator scenarios"
```

---

## Phase 5 — Image migration & optimization

### Task 5.1: Author `scripts/migrate-hub-images.mjs`

**Files:** Create `scripts/migrate-hub-images.mjs`.

A Node script using `sharp` (already a devDependency) that:
1. Copies `2D-MAP.jpeg` → `public/images/hub/masterplan.jpg` (downsample to 1800 px wide, q80).
2. Optimizes every file in `indoor/` and `outdoor/` of the source folder, renaming to readable kebab-case slugs and shrinking max-edge to 1600 px at q80.
3. Re-uses `vpd-web/public/images/zamer-vpd/hub-*.jpg` by symlinking or copying into `public/images/hub/exterior` (courtyard, street, renovated) and `public/images/hub/interior` (market). Copy is simpler and avoids broken links if the sibling repo moves.

- [ ] **Step 1: Author the script**

```js
#!/usr/bin/env node
// Migrate Hub renders into public/images/hub/.
// Source A: ../../12 Startovaci Hub/image/  (raw photos, includes 2D-MAP.jpeg, indoor/, outdoor/)
// Source B: ../vpd-web/public/images/zamer-vpd/  (already-optimized hub-* renders)
// Target:   public/images/hub/{exterior,interior,masterplan.jpg}
//
// All output is JPEG at quality 80, max edge 1600 px (masterplan 1800 px).

import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = path.resolve(import.meta.dirname, '..');
const srcRaw   = path.resolve(repoRoot, '../../12 Startovaci Hub/image');
const srcVpd   = path.resolve(repoRoot, '../vpd-web/public/images/zamer-vpd');
const outRoot  = path.resolve(repoRoot, 'public/images/hub');
const outExt   = path.join(outRoot, 'exterior');
const outInt   = path.join(outRoot, 'interior');

await fs.mkdir(outExt, { recursive: true });
await fs.mkdir(outInt, { recursive: true });

async function optimize(inFile, outFile, { maxEdge = 1600, quality = 80 } = {}) {
  await sharp(inFile)
    .rotate()                                // honour EXIF orientation
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outFile);
  const { size } = await fs.stat(outFile);
  console.log(`  ${path.basename(outFile)}  ${(size / 1024).toFixed(0)} KB`);
}

console.log('Masterplan...');
await optimize(path.join(srcRaw, '2D-MAP.jpeg'), path.join(outRoot, 'masterplan.jpg'), { maxEdge: 1800 });

console.log('Indoor (raw → public/images/hub/interior/...):');
const indoorEntries = await fs.readdir(path.join(srcRaw, 'indoor'));
let i = 1;
for (const f of indoorEntries.sort()) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const slug = `interior-${String(i).padStart(2, '0')}.jpg`;
  await optimize(path.join(srcRaw, 'indoor', f), path.join(outInt, slug));
  i++;
}

console.log('Outdoor (raw → public/images/hub/exterior/...):');
const outdoorEntries = await fs.readdir(path.join(srcRaw, 'outdoor'));
i = 1;
for (const f of outdoorEntries.sort()) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const slug = `exterior-${String(i).padStart(2, '0')}.jpg`;
  await optimize(path.join(srcRaw, 'outdoor', f), path.join(outExt, slug));
  i++;
}

console.log('VPD-web hub-* (sibling repo):');
const vpdNames = [
  ['hub-courtyard-trees.jpg', outExt],
  ['hub-courtyard-night.jpg', outExt],
  ['hub-renovated-building.jpg', outExt],
  ['hub-street-daytime.jpg', outExt],
  ['hub-street-sunset.jpg', outExt],
  ['hub-market-evening.jpg', outInt],
  ['hub-market-daytime.jpg', outInt],
  ['hub-market-people.jpg', outInt],
];
for (const [name, dir] of vpdNames) {
  await optimize(path.join(srcVpd, name), path.join(dir, name));
}

console.log('Done.');
```

- [ ] **Step 2: Add a script entry to package.json**

In `package.json` under `"scripts"`, add:

```json
"migrate:images": "node scripts/migrate-hub-images.mjs",
```

- [ ] **Step 3: Commit**

```bash
git add scripts/migrate-hub-images.mjs package.json
git commit -m "feat(hub): add image migration script"
```

### Task 5.2: Run the migration and commit the optimized assets

**Files:** Output: `public/images/hub/**/*.jpg`.

- [ ] **Step 1: Run**

```bash
pnpm migrate:images
```

Expected: ~45 JPEGs land under `public/images/hub/{exterior,interior}/`, plus `masterplan.jpg`. Each interior file ≤ 700 KB after sharp; each exterior similar.

- [ ] **Step 2: Spot-check sizes**

```bash
du -sh public/images/hub/* public/images/hub/exterior/* | head -5
```

Expected: total directory under ~30 MB; no single file over 1 MB.

- [ ] **Step 3: Commit**

```bash
git add public/images/hub/
git commit -m "feat(hub): migrate render assets (masterplan, exterior, interior)"
```

---

## Phase 6 — Brand chrome (Header, Footer, Base layout)

### Task 6.1: Port `VpdLogomark.astro` from vpd-web

**Files:** Create `src/components/VpdLogomark.astro`.

- [ ] **Step 1: Copy the component**

Read `/Users/kindl/Work/_2026/02 OSA/11 WWW/vpd-web/src/components/VpdLogomark.astro` and write its exact contents to `src/components/VpdLogomark.astro`. The component is self-contained (one `<span>` + scoped `<style>`).

- [ ] **Step 2: Commit**

```bash
git add src/components/VpdLogomark.astro
git commit -m "feat(hub): port VpdLogomark from vpd-web"
```

### Task 6.2: Rewrite `Header.astro`

**Files:** Modify `src/components/Header.astro`.

The new header has three rows on desktop (collapsing to a hamburger drawer on mobile):

1. *Top strip:* small text on the left "část záměru OSA → VPD → VPD1" with a link to `https://osa2.cz/zamer-vpd/`. On the right: language placeholder slot (empty in v1).
2. *Brand row:* on the left, a small "VPD" wordmark sized to 18px height (uses `<VpdLogomark />` at a smaller scale; or a static SVG sprite at `public/logo/VPD-Wordmark-Black.svg` if available — use SVG for now, swap to logomark when designed).
3. *Nav row:* primary nav (Pro obyvatele · Pro investory · Projekty · O projektu · FAQ). On `/obyvatele/` and `/investori/` only: rightmost slot shows `<RoleChip />` (built in Task 6.4).

Mobile (≤720 px): hamburger toggles a full-screen drawer with the same nav links + parent links.

Header takes a `variant: 'light' | 'dark'` prop (default `'light'`) — same pattern as the existing osa-web Header. On dark variant the bottom hairline is hidden so the header fuses with a dark hero (used on Landing).

- [ ] **Step 1: Replace `Header.astro` with the rewritten version**

Skeleton (full inline script for hamburger; preserves osa-web's `osa-nav-lock` z-index pattern):

```astro
---
import { withBase } from '../utils/url';

interface Props {
  variant?: 'light' | 'dark';
  /** When true (on /obyvatele/ and /investori/), show the role-switcher chip */
  showRoleChip?: boolean;
  /** Active role for the chip, or null on other pages */
  activeRole?: 'resident' | 'investor' | null;
}
const { variant = 'light', showRoleChip = false, activeRole = null } = Astro.props;
---
<header class:list={['hub-header', `hub-header--${variant}`]} data-role-chip={showRoleChip ? 'on' : 'off'}>
  <div class="hub-header__strip">
    <a href="https://osa2.cz/zamer-vpd/" class="hub-header__strip-link">část záměru OSA → VPD → VPD1</a>
  </div>
  <div class="hub-header__bar">
    <a class="hub-header__brand" href={withBase('/')} aria-label="Startovací Hub Klecany — domů">
      <span class="hub-header__brand-mark">VPD</span>
      <span class="hub-header__brand-sub">Startovací Hub · Klecany</span>
    </a>
    <button class="hub-header__burger" type="button" aria-controls="hub-drawer" aria-expanded="false" aria-label="Otevřít menu">
      <span></span><span></span>
    </button>
    <nav class="hub-header__nav" aria-label="Hlavní menu">
      <a href={withBase('/obyvatele/')}>Pro obyvatele</a>
      <a href={withBase('/investori/')}>Pro investory</a>
      <a href={withBase('/projekty/')}>Projekty</a>
      <a href={withBase('/o-projektu/')}>O projektu</a>
      <a href={withBase('/faq/')}>FAQ</a>
      {showRoleChip && (
        <span class="hub-header__chip-slot">
          <a href={withBase('/obyvatele/')} class:list={['hub-chip', activeRole === 'resident' && 'is-active']}>Jdu bydlet</a>
          <a href={withBase('/investori/')} class:list={['hub-chip', activeRole === 'investor' && 'is-active']}>Jdu investovat</a>
        </span>
      )}
    </nav>
  </div>

  <div class="hub-drawer" id="hub-drawer" hidden>
    <nav class="hub-drawer__nav" aria-label="Mobilní menu">
      <a href={withBase('/obyvatele/')}>Pro obyvatele</a>
      <a href={withBase('/investori/')}>Pro investory</a>
      <a href={withBase('/projekty/')}>Projekty</a>
      <a href={withBase('/o-projektu/')}>O projektu</a>
      <a href={withBase('/faq/')}>FAQ</a>
      <a href="https://osa2.cz" class="hub-drawer__parent">osa2.cz</a>
      <a href="https://osa2.cz/zamer-vpd/" class="hub-drawer__parent">osa2.cz/zamer-vpd</a>
    </nav>
  </div>
</header>

<style>
  /* Layout: top strip + brand bar + (optional) drawer overlay.
     Two breakpoints: ≤720 px hamburger, >720 px full nav. */
  .hub-header { position: sticky; top: 0; z-index: 40; background: var(--bg, #fff); border-bottom: 1px solid var(--k-10, #ececec); }
  .hub-header--dark { background: var(--k-100, #000); color: var(--bg, #fff); border-bottom-color: transparent; }
  .hub-header__strip { padding: 6px 24px; font-size: 12px; letter-spacing: var(--tracking-tight, 0.01em); border-bottom: 1px solid var(--k-10); }
  .hub-header--dark .hub-header__strip { border-bottom-color: rgba(255,255,255,0.08); }
  .hub-header__strip-link { color: inherit; text-decoration: none; opacity: 0.7; }
  .hub-header__strip-link:hover { opacity: 1; text-decoration: underline; }
  .hub-header__bar { display: flex; align-items: center; gap: 24px; padding: 14px 24px; max-width: 1440px; margin: 0 auto; }
  .hub-header__brand { display: inline-flex; align-items: baseline; gap: 12px; text-decoration: none; color: inherit; z-index: 2; }
  .hub-header__brand-mark { font-family: var(--font-sans); font-weight: 700; font-size: 20px; letter-spacing: 0.02em; }
  .hub-header__brand-sub { font-size: 13px; opacity: 0.65; }
  .hub-header__nav { margin-left: auto; display: flex; align-items: center; gap: 20px; }
  .hub-header__nav a { color: inherit; text-decoration: none; font-size: 14px; }
  .hub-header__nav a:hover { text-decoration: underline; }
  .hub-header__chip-slot { display: inline-flex; gap: 8px; margin-left: 16px; padding-left: 16px; border-left: 1px solid var(--k-10); }
  .hub-chip { padding: 6px 10px; border: 1px solid var(--k-30); border-radius: 999px; font-size: 13px; }
  .hub-chip.is-active { background: var(--accent); color: var(--accent-on); border-color: var(--accent); }
  .hub-header__burger { display: none; background: none; border: 0; padding: 8px; cursor: pointer; }
  .hub-header__burger span { display: block; width: 22px; height: 2px; background: currentColor; margin: 4px 0; }
  @media (max-width: 720px) {
    .hub-header__nav { display: none; }
    .hub-header__burger { display: block; margin-left: auto; z-index: 2; }
  }
  .hub-drawer[hidden] { display: none; }
  .hub-drawer { position: fixed; inset: 0; background: var(--k-100, #000); color: var(--bg, #fff); display: grid; place-items: center; z-index: 30; }
  .hub-drawer__nav { display: grid; gap: 24px; font-size: 22px; }
  .hub-drawer__nav a { color: inherit; text-decoration: none; }
  .hub-drawer__parent { font-size: 14px; opacity: 0.6; }
  :global(html.osa-nav-lock) { overflow: hidden; }
</style>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hub-header__burger');
    const drawer = document.getElementById('hub-drawer');
    if (!burger || !drawer) return;
    function toggle(open) {
      drawer.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
      document.documentElement.classList.toggle('osa-nav-lock', open);
    }
    burger.addEventListener('click', () => toggle(drawer.hidden));
    drawer.addEventListener('click', (e) => { if (e.target === drawer) toggle(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.hidden) toggle(false); });
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat(hub): rewrite Header with VPD brand and role chip"
```

### Task 6.3: Rewrite `Footer.astro`

**Files:** Modify `src/components/Footer.astro`.

Three blocks: operator credit (Marek Semerád), parent links (osa2.cz, osa2.cz/zamer-vpd/), privacy stub.

- [ ] **Step 1: Replace contents**

```astro
---
import { getEntry } from 'astro:content';
const orgEntry = await getEntry('org', 'identity');
const org = orgEntry?.data;
---
<footer class="hub-footer">
  <div class="hub-footer__inner">
    <div class="hub-footer__col">
      <p class="hub-footer__brand">Startovací Hub Klecany</p>
      <p class="hub-footer__tagline">Záměr vede VPD pod hlavičkou OSA II, z.s.</p>
      <p class="hub-footer__parents">
        <a href="https://osa2.cz">osa2.cz</a>
        <span aria-hidden="true">·</span>
        <a href="https://osa2.cz/zamer-vpd/">osa2.cz/zamer-vpd</a>
      </p>
    </div>
    <div class="hub-footer__col">
      <p class="hub-footer__label">Kontakt</p>
      <p>{org?.predseda?.name ?? 'Marek Semerád'}, předseda OSA II, z.s.</p>
      <p><a href={`mailto:${org?.email ?? 'vpd@osa2.cz'}`}>{org?.email ?? 'vpd@osa2.cz'}</a></p>
    </div>
    <div class="hub-footer__col">
      <p class="hub-footer__label">Právní</p>
      <p>OSA II, z.s. · IČO {org?.ico ?? '—'}</p>
      <p class="hub-footer__legal">Údaje o ochraně osobních údajů doplníme s nasazením formulářů.</p>
    </div>
  </div>
</footer>

<style>
  .hub-footer { background: var(--k-100, #000); color: var(--bg, #fff); padding: 64px 24px; }
  .hub-footer__inner { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; max-width: 1440px; margin: 0 auto; }
  .hub-footer__brand { font-weight: 700; font-size: 18px; margin-bottom: 4px; }
  .hub-footer__tagline { opacity: 0.7; font-size: 14px; margin-bottom: 12px; }
  .hub-footer__parents a { color: inherit; }
  .hub-footer__label { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.55; margin-bottom: 8px; }
  .hub-footer__legal { font-size: 12px; opacity: 0.5; margin-top: 8px; }
  .hub-footer__col p { margin: 0 0 4px; line-height: 1.5; }
  @media (max-width: 720px) {
    .hub-footer__inner { grid-template-columns: 1fr; gap: 24px; }
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat(hub): rewrite Footer with operator credit and parent links"
```

### Task 6.4: Adapt `Base.astro` for Hub branding and JSON-LD

**Files:** Modify `src/layouts/Base.astro`.

Three changes:
1. Replace any `Občanské sdružení Alternativa II` defaults in title/OG with Hub defaults.
2. Update Organization JSON-LD to mention VPD as the operator and the Hub as the offering.
3. Add a new prop `headerVariant` (`'light' | 'dark'`) and `showRoleChip` + `activeRole` props that pass through to `<Header>`.

- [ ] **Step 1: Read the current Base.astro**

```bash
cat src/layouts/Base.astro
```

- [ ] **Step 2: Apply targeted edits**

Find the `<title>` and `<meta name="description">` defaults — change to the Hub equivalents:

- Default title fallback: `Startovací Hub Klecany`.
- Default description: `První etapa záměru VPD1: dostupné sdílené bydlení v areálu horních kasáren, deset minut od Prahy.`

Find the Organization JSON-LD block. Keep the OSA `NGO` schema (legal entity is still OSA II, z.s.) but change `name` to `Startovací Hub Klecany` and add `parentOrganization` referencing OSA. Add a `subjectOf` entry linking to `/zamer-vpd/` on osa2.cz.

Add Header/Footer prop pass-through:

```astro
---
interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  headerVariant?: 'light' | 'dark';
  showRoleChip?: boolean;
  activeRole?: 'resident' | 'investor' | null;
}
const {
  title = 'Startovací Hub Klecany',
  description = 'První etapa záměru VPD1 ...',
  ogImage,
  ogType = 'website',
  headerVariant = 'light',
  showRoleChip = false,
  activeRole = null,
} = Astro.props;
---
<!-- ... <head> stays mostly the same with title/description swapped -->
<body>
  <Header variant={headerVariant} showRoleChip={showRoleChip} activeRole={activeRole} />
  <main><slot /></main>
  <Footer />
</body>
```

Drop the existing `<RevealOnScroll />` mount only if the layout already mounts it; keep it (it's a global behavior).

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Base.astro
git commit -m "feat(hub): adapt Base layout for Hub branding and chip pass-through"
```

---

## Phase 7 — Shared utilities

### Task 7.1: Build `Tooltip.astro` (reusable `?` icon explainer)

**Files:** Create `src/components/Tooltip.astro`.

Used 3 times on the resident form (stipendium / work-trade / rezident-tvůrce). Hover-on-desktop + tap-to-toggle on mobile.

- [ ] **Step 1: Author**

```astro
---
interface Props {
  label: string;
  content: string;
}
const { label, content } = Astro.props;
const id = `tt-${Math.random().toString(36).slice(2, 9)}`;
---
<span class="hub-tt" data-tt>
  <button type="button" class="hub-tt__trigger" aria-describedby={id} aria-label={`Vysvětlit: ${label}`}>?</button>
  <span class="hub-tt__bubble" id={id} role="tooltip">{content}</span>
</span>

<style>
  .hub-tt { position: relative; display: inline-block; margin-left: 6px; }
  .hub-tt__trigger { width: 18px; height: 18px; border-radius: 999px; border: 1px solid var(--k-30); background: transparent; font-size: 11px; cursor: pointer; line-height: 1; }
  .hub-tt__bubble { position: absolute; top: calc(100% + 6px); left: 0; min-width: 240px; max-width: 320px; padding: 12px 14px; background: var(--k-100); color: var(--bg); font-size: 13px; line-height: 1.45; border-radius: 4px; box-shadow: 0 6px 24px rgba(0,0,0,0.18); display: none; z-index: 5; }
  .hub-tt[data-open='true'] .hub-tt__bubble { display: block; }
  @media (hover: hover) and (pointer: fine) {
    .hub-tt:hover .hub-tt__bubble { display: block; }
  }
</style>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tt]').forEach((tt) => {
      const trigger = tt.querySelector('.hub-tt__trigger');
      trigger.addEventListener('click', () => {
        const isOpen = tt.dataset.open === 'true';
        document.querySelectorAll('[data-tt]').forEach((other) => other.dataset.open = 'false');
        tt.dataset.open = isOpen ? 'false' : 'true';
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-tt]')) {
        document.querySelectorAll('[data-tt]').forEach((tt) => tt.dataset.open = 'false');
      }
    });
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Tooltip.astro
git commit -m "feat(hub): add Tooltip component for resident track explainers"
```

---

## Phase 8 — Landing `/`

### Task 8.1: Build the visual hero + two-CTA block

**Files:** Create `src/pages/index.astro`.

Sections (full content per spec §3): visual hero, two-card CTA, three-paragraph body, exterior+interior galleries, sub-projects teaser, place teaser, status, FAQ teaser.

- [ ] **Step 1: Skeleton with hero + CTA cards**

```astro
---
import Base from '../layouts/Base.astro';
import { withBase } from '../utils/url';
import Gallery from '../components/Gallery.astro';
import { getCollection } from 'astro:content';

const subProjects = (await getCollection('subProjects')).sort((a, b) => a.data.order - b.data.order);
const heroImage = withBase('/images/hub/exterior/hub-courtyard-trees.jpg');
---
<Base
  title="Startovací Hub Klecany"
  description="První etapa záměru VPD1: dostupné sdílené bydlení v areálu horních kasáren, deset minut od Prahy."
  headerVariant="dark"
  ogImage={withBase('/og/default.png')}
>
  <section class="hub-hero" style={`background-image: url('${heroImage}');`}>
    <div class="hub-hero__inner">
      <h1 class="hub-hero__title">Startovací Hub Klecany</h1>
      <p class="hub-hero__sub">První etapa záměru VPD1: dostupné sdílené bydlení v areálu horních kasáren, deset minut od Prahy.</p>
    </div>
  </section>

  <section class="hub-paths">
    <div class="hub-paths__grid">
      <a class="hub-path-card" href={withBase('/obyvatele/')}>
        <h2>Chci tu bydlet</h2>
        <p>Sdílené bydlení, kapsle, klidnější uzavíratelná místa, work-trade nebo stipendijní režim. Řekněte nám, za jakých podmínek by to pro vás dávalo smysl.</p>
        <span class="hub-path-card__cta">Pro budoucí obyvatele →</span>
      </a>
      <a class="hub-path-card" href={withBase('/investori/')}>
        <h2>Chci posoudit investici</h2>
        <p>Investiční záměr VPD1 hledá kapitál, který urychlí start první etapy. Modelujte si scénář, případně nás kontaktujte.</p>
        <span class="hub-path-card__cta">Pro investory →</span>
      </a>
    </div>
  </section>

  <!-- ... remaining sections appended in 8.2 / 8.3 -->
</Base>

<style>
  .hub-hero { min-height: 80vh; background-size: cover; background-position: center; color: #fff; display: flex; align-items: flex-end; padding: 96px 24px 64px; position: relative; }
  .hub-hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%); pointer-events: none; }
  .hub-hero__inner { position: relative; z-index: 1; max-width: 1440px; margin: 0 auto; width: 100%; }
  .hub-hero__title { font-size: clamp(48px, 6vw, 100px); font-weight: 700; line-height: 1.05; margin: 0 0 16px; letter-spacing: -0.02em; }
  .hub-hero__sub { font-size: clamp(18px, 1.6vw, 26px); max-width: 640px; line-height: 1.4; opacity: 0.92; margin: 0; }
  .hub-paths { padding: 96px 24px; max-width: 1440px; margin: 0 auto; }
  .hub-paths__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  @media (max-width: 720px) { .hub-paths__grid { grid-template-columns: 1fr; } }
  .hub-path-card { display: block; padding: 40px 32px; border: 1px solid var(--k-30); text-decoration: none; color: inherit; transition: border-color 200ms cubic-bezier(0.16,1,0.3,1); }
  .hub-path-card:hover { border-color: var(--accent); }
  .hub-path-card h2 { font-size: 32px; margin: 0 0 12px; }
  .hub-path-card p { color: var(--k-70); margin: 0 0 24px; }
  .hub-path-card__cta { color: var(--accent); font-weight: 600; }
</style>
```

- [ ] **Step 2: Verify the build runs**

```bash
pnpm build
```

Expected: builds, `dist/index.html` present. (Other pages don't exist yet — sitemap will be small.)

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(hub): build landing hero + two-CTA paths"
```

### Task 8.2: Append the body copy + split galleries

**Files:** Modify `src/pages/index.astro`.

Append three sections after `</section>` for `.hub-paths`:

1. *Body copy block* — three paragraphs from spec §3 Section 3, verbatim. Wrap in a `.hub-prose` container with max-width 720 px and serif-styled body (use existing `--font-serif` if defined, else `--font-sans` — match what's in tokens.css).
2. *Exterior gallery* — `<Gallery title="Areál a okolí.">` with the seven exterior thumbnails. Adapt `Gallery.astro` to accept an array prop or hardcode a wrapper here that reuses Gallery's lightbox but feeds custom images.
3. *Interior gallery* — `<Gallery title="Sdílené prostory a interiéry.">` with the eight interior thumbnails.

Galleries wrap a `<section>` with title + grid of thumbnails. Use the existing Gallery component if it accepts `images` prop; else wrap inline:

```astro
<section class="hub-section">
  <h2>Vizualizace záměru</h2>
  <h3>Exteriér</h3>
  <Gallery images={[
    withBase('/images/hub/exterior/hub-courtyard-trees.jpg'),
    withBase('/images/hub/exterior/hub-courtyard-night.jpg'),
    withBase('/images/hub/exterior/hub-renovated-building.jpg'),
    withBase('/images/hub/exterior/hub-street-daytime.jpg'),
    withBase('/images/hub/exterior/hub-street-sunset.jpg'),
    withBase('/images/hub/exterior/exterior-01.jpg'),
    withBase('/images/hub/exterior/exterior-02.jpg'),
  ]} />
  <h3>Interiér / společné prostory</h3>
  <Gallery images={[
    withBase('/images/hub/interior/hub-market-evening.jpg'),
    withBase('/images/hub/interior/hub-market-daytime.jpg'),
    withBase('/images/hub/interior/hub-market-people.jpg'),
    withBase('/images/hub/interior/interior-01.jpg'),
    withBase('/images/hub/interior/interior-02.jpg'),
    withBase('/images/hub/interior/interior-03.jpg'),
  ]} />
</section>
```

Before appending, **inspect the existing `Gallery.astro` API**. If it currently reads from a hardcoded list, refactor it minimally to accept an `images: string[]` and optional `title?: string` prop. Pattern is similar to how `osa-web` adapted Gallery for aktuality detail pages with `<Gallery title={null} />`.

- [ ] **Step 1: Read Gallery.astro and confirm/extend its prop signature**

```bash
cat src/components/Gallery.astro | head -40
```

Expected: a frontmatter declaring some props. If it already accepts `images` array, use it. If not, modify to accept it.

- [ ] **Step 2: Append the body and galleries to `index.astro`** as outlined above.

- [ ] **Step 3: Build + visual check**

```bash
pnpm dev &
```

Then in another terminal:

```bash
curl -s http://localhost:4321/ | head -100
```

Expected: HTML rendered with hero + paths + galleries.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro src/components/Gallery.astro
git commit -m "feat(hub): landing body + split exterior/interior galleries"
```

### Task 8.3: Append sub-projects teaser, place teaser, status, FAQ teaser

**Files:** Modify `src/pages/index.astro`.

Append four more sections per spec §3 Sections 5–8.

- [ ] **Step 1: Sub-projects teaser**

Render a row of 6 cards: 5 from `subProjects` collection (already fetched at top of frontmatter) + a "Další projekty →" link card pointing to `/projekty/`. Use a simple grid (3 cols desktop, 2 tablet, 1 mobile).

- [ ] **Step 2: Place teaser**

Single section with the spec §3 paragraph + a static image at `public/images/hub/place/map.jpg` (placeholder until operator supplies; use a `// TODO: operator-supplied OSM screenshot` comment + a 16:9 monochrome block as the placeholder if file is missing). CTA: link to `/o-projektu/#misto`.

- [ ] **Step 3: Status strip**

Single block of one paragraph from spec §3 Section 7 verbatim, set against a subtle border or callout style (re-use `.hub-prose` or wrap in a `<aside>` with light bg).

- [ ] **Step 4: FAQ teaser**

Render the three pre-picked questions from spec §3 Section 8 inside a small accordion-style block. Pull them by id from the FAQ collection so they stay in sync. Below: link to `/faq/`.

```astro
{
  ['q1', 'q5', 'q9'].map(async (id) => {
    const entry = await getEntry('faq', id);
    return entry ? (
      <details class="hub-faq-mini">
        <summary>{entry.data.question}</summary>
        <p>{entry.data.answer}</p>
      </details>
    ) : null;
  })
}
```

- [ ] **Step 5: Build, lint, commit**

```bash
pnpm build
pnpm lint:editorial
git add src/pages/index.astro
git commit -m "feat(hub): landing sub-projects teaser, place, status, FAQ teaser"
```

---

## Phase 9 — Pro budoucí obyvatele `/obyvatele/`

### Task 9.1: Build the resident page sections (no form yet)

**Files:** Create `src/pages/obyvatele/index.astro`.

Sections per spec §4: hero copy, four type cards, "pro koho dává smysl" copy, sdílené prostory copy. Form goes in next task.

- [ ] **Step 1: Page skeleton**

```astro
---
import Base from '../../layouts/Base.astro';
import { withBase } from '../../utils/url';
---
<Base
  title="Pro budoucí obyvatele — Startovací Hub Klecany"
  description="Kdo a za jakých podmínek by v Hubu mohl bydlet. Nezávazné vyjádření zájmu."
  headerVariant="light"
  showRoleChip={true}
  activeRole="resident"
>
  <section class="hub-page-hero">
    <h1>Pro budoucí obyvatele</h1>
    <p class="hub-lead">Hledáte dostupnější bydlení blízko Prahy a zajímá vás, jaké by to bylo žít v Hubu, který se teprve rozjíždí. Tady popisujeme, jak by Hub fungoval, jaké budou typy bydlení, jaké role v něm dávají smysl, a jak nám nezávazně říct, za jakých podmínek byste o pobyt uvažovali.</p>
  </section>

  <section class="hub-section">
    <h2>Co Hub nabídne</h2>
    <div class="hub-types">
      <article class="hub-type-card">
        <img src={withBase('/images/hub/interior/interior-01.jpg')} alt="Vizualizace kapsle" loading="lazy" width="600" height="450" />
        <h3>Kapsle</h3>
        <p>Nejlevnější varianta. Vlastní spací modul, sdílená kuchyň, koupelny a sociální zázemí. Vhodné pro krátkodobé pobyty a pro lidi, pro které je hlavní cena.</p>
      </article>
      <article class="hub-type-card">
        <img src={withBase('/images/hub/interior/interior-02.jpg')} alt="Vizualizace klidnějšího místa" loading="lazy" width="600" height="450" />
        <h3>Klidnější uzavíratelné místo</h3>
        <p>Privátní mikropokoj s dveřmi a vlastním stolkem. Sdílené sociální zázemí. Pro lidi, kteří potřebují základ soukromí a klid na práci nebo studium.</p>
      </article>
      <article class="hub-type-card">
        <img src={withBase('/images/hub/interior/interior-03.jpg')} alt="Vizualizace jednolůžkového pokoje" loading="lazy" width="600" height="450" />
        <h3>Jednolůžkový pokoj</h3>
        <p>Plnohodnotný menší pokoj. Sdílená kuchyň a sociální zázemí. Pro delší pobyty a stabilnější rezidenty.</p>
      </article>
      <article class="hub-type-card">
        <img src={withBase('/images/hub/interior/hub-market-people.jpg')} alt="Vizualizace sdíleného pokoje" loading="lazy" width="600" height="450" />
        <h3>Sdílený pokoj</h3>
        <p>Dvojlůžkový pokoj sdílený se spolubydlícím. Levnější varianta delšího pobytu pro studenty a lidi, kteří jsou v pohodě se sdílením.</p>
      </article>
    </div>
    <p class="hub-foot-note">Cenová pásma upřesňujeme. Orientační rozsahy jsou v formuláři níže.</p>
    <p class="hub-foot-note">Architektonický základ Hubu je 331 jednotek 1+kk v sedmi zrekonstruovaných budovách areálu. Výše uvedené formáty popisují provozní varianty obsazení těchto jednotek, ne fyzicky odlišné typy místností.</p>
  </section>

  <section class="hub-section">
    <h2>Pro koho Hub dává smysl</h2>
    <p>Hub je relevantní pro lidi, kteří potřebují bydlet blízko Prahy bez pražských nájmů, hledají flexibilní délku pobytu, chtějí žít v prostředí s nějakou společnou rovinou (kuchyň, společné prostory, kultura), nebo by se do projektu chtěli zapojit i jinak než platbou. Studenti, lidi na začátku kariéry, tvůrci, lidi v přechodné životní situaci. Hub není pro lidi, kteří chtějí klasický anonymní městský byt s vlastním vchodem a vlastní kuchyní.</p>
  </section>

  <section class="hub-section">
    <h2>Sdílené prostory a provoz</h2>
    <p><!-- spec §4 Section 3 verbatim, ~140 words --></p>
  </section>

  <!-- form section appended in 9.2 -->
</Base>
```

(Czech body for "Sdílené prostory a provoz" goes in this section: agent fills with the exact 140-word block from spec §4 Section 3.)

- [ ] **Step 2: Build + visual check**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/obyvatele/index.astro
git commit -m "feat(hub): build resident page hero, types, copy"
```

### Task 9.2: Build `ResidentForm.astro` and append to the page

**Files:**
- Create: `src/components/ResidentForm.astro`
- Modify: `src/pages/obyvatele/index.astro`

Form per spec §9: 10 questions (some branched), accessible HTML, three `?` tooltips on the role question.

- [ ] **Step 1: Author the form**

```astro
---
import Tooltip from './Tooltip.astro';

const STIPENDIUM = `Stipendijní režim je pro lidi, kteří by Hubu dávali smysl, ale bez podpory by si pobyt nemohli dovolit (například studenti, lidé v začátcích kariéry nebo v přechodné životní situaci). Kritéria a počet stipendijních míst budeme upřesňovat. Není to slevový kód, je to popsaný výběr.`;
const WORKTRADE = `Work-trade je výměna konkrétní práce za zvýhodněné nebo neplacené bydlení. Hledáme lidi, kteří by uměli převzít provoz, dohled, komunitní servis nebo drobnou správu. Žádná vágní "pomoc kolem domu". Konkrétní role, konkrétní hodiny.`;
const TVURCE   = `Rezident-tvůrce je pilotní role pro tvůrce, kurátory, facilitátory a lidi, kteří umí do místa přinést program nebo kulturní vrstvu. Bydlení za přínos do projektu (akce, dílny, výzkum, dokumentace, instalace).`;
---
<form class="hub-form hub-form--resident" data-form="resident" novalidate>
  <p class="hub-form__intro">Vyplnění není závazné. Pomáhá nám připravit Hub tak, aby na něj byla reálná poptávka.</p>

  <fieldset>
    <legend>1. Jakou roli v Hubu hledáte?</legend>
    <label><input type="radio" name="role" value="paying" required /> Platící rezident</label>
    <label><input type="radio" name="role" value="stipendium" /> Stipendium <Tooltip label="Stipendium" content={STIPENDIUM} /></label>
    <label><input type="radio" name="role" value="worktrade" /> Work-trade — správce <Tooltip label="Work-trade" content={WORKTRADE} /></label>
    <label><input type="radio" name="role" value="tvurce" /> Rezident-tvůrce <Tooltip label="Rezident-tvůrce" content={TVURCE} /></label>
    <label><input type="radio" name="role" value="undecided" /> Ještě nevím, rozhodne cena a podmínky.</label>
  </fieldset>

  <fieldset>
    <legend>2. Kdy by pro vás dávalo smysl nastěhování?</legend>
    <label><input type="radio" name="moveIn" value="asap" required /> Co nejdřív</label>
    <label><input type="radio" name="moveIn" value="3m" /> Do 3 měsíců</label>
    <label><input type="radio" name="moveIn" value="3-6m" /> Za 3–6 měsíců</label>
    <label><input type="radio" name="moveIn" value="6-12m" /> Za 6–12 měsíců</label>
    <label><input type="radio" name="moveIn" value="later" /> Později</label>
  </fieldset>

  <!-- Q3..Q10 follow the same pattern; see spec §9 for the full option lists.
       Q9 is conditionally rendered via JS based on Q1's selected value:
       - role=stipendium  -> show Q9-stipendium
       - role=worktrade   -> show Q9-worktrade
       - role=tvurce      -> show Q9-tvurce
       The agent renders all three Q9 blocks hidden, then a small inline script
       reveals the matching one when role changes. -->

  <!-- Contact block (Q10) is always visible and required. -->
  <fieldset>
    <legend>10. Kontakt</legend>
    <label>Jméno a příjmení <input type="text" name="name" required minlength="2" /></label>
    <label>E-mail <input type="email" name="email" required /></label>
    <label>Telefon <input type="tel" name="phone" /></label>
    <label class="hub-form__check"><input type="checkbox" name="consent" required /> Souhlasím se zasláním informací k záměru.</label>
  </fieldset>

  <button type="submit" class="hub-form__submit">Zapsat nezávazný zájem</button>

  <output class="hub-form__success" hidden>
    Děkujeme. Zapsali jsme váš nezávazný zájem o Startovací Hub Klecany. Není to rezervace. Ozveme se vám, jakmile bude jasnější právní a provozní rámec.
  </output>
</form>

<style>
  .hub-form { display: grid; gap: 32px; max-width: 720px; }
  .hub-form fieldset { border: 0; padding: 0; }
  .hub-form legend { font-weight: 600; margin-bottom: 12px; }
  .hub-form label { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; line-height: 1.5; }
  .hub-form input[type='text'], .hub-form input[type='email'], .hub-form input[type='tel'], .hub-form textarea { width: 100%; padding: 10px 12px; border: 1px solid var(--k-30); border-radius: 4px; font: inherit; }
  .hub-form__submit { padding: 14px 24px; background: var(--accent); color: var(--accent-on); border: 0; font-weight: 600; cursor: pointer; }
  .hub-form__success { padding: 16px 20px; background: var(--k-10); border-left: 3px solid var(--accent); }
</style>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-form="resident"]').forEach((form) => {
      // Reveal the right Q9 block when role changes (Q9 blocks have data-q9 attrs).
      form.addEventListener('change', (e) => {
        if (e.target.name !== 'role') return;
        const value = e.target.value;
        form.querySelectorAll('[data-q9]').forEach((b) => b.hidden = b.dataset.q9 !== value);
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        console.log('[resident form]', data);
        form.querySelector('.hub-form__success').hidden = false;
        form.querySelector('button[type="submit"]').disabled = true;
      });
    });
  });
</script>
```

(Author Q3–Q9 blocks per spec §9. Each Q3–Q8 mirrors Q2's pattern. Q9 has three variants wrapped with `data-q9="stipendium|worktrade|tvurce"` attributes and `hidden` initially; the inline script toggles them.)

- [ ] **Step 2: Wire it into the page**

In `src/pages/obyvatele/index.astro`, import and embed:

```astro
import ResidentForm from '../../components/ResidentForm.astro';
```

Append a section after the "Sdílené prostory a provoz" section:

```astro
<section class="hub-section" id="formular">
  <h2>Řekněte nám, za jakých podmínek by Hub pro vás dával smysl.</h2>
  <ResidentForm />
</section>
```

- [ ] **Step 3: Build, lint, commit**

```bash
pnpm build
pnpm lint:editorial
git add src/components/ResidentForm.astro src/pages/obyvatele/index.astro
git commit -m "feat(hub): resident form scaffold with track tooltips"
```

---

## Phase 10 — Pro investory `/investori/`

### Task 10.1: Build the investor page (without calculator and form)

**Files:** Create `src/pages/investori/index.astro`.

Sections per spec §5: hero + 220-word summary, 120-word operator block, 5 scenario cards.

- [ ] **Step 1: Page with hero, summary, operator block**

Use the same shell pattern as `obyvatele/index.astro`. Set `showRoleChip={true} activeRole="investor"`. Bring in copy verbatim from spec §5 Sections 1–2.

- [ ] **Step 2: Five scenario cards (read from `public/data/scenarios.json`)**

Two options:
1. *Static fetch in frontmatter:* `import scenarios from '../../public/data/scenarios.json' assert { type: 'json' };` — but Astro doesn't allow `public/` imports.
2. *Read at build time via `node:fs`:* allowed in frontmatter.

Use option 2:

```astro
---
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const scenariosPath = path.resolve(import.meta.dirname, '../../../public/data/scenarios.json');
const { scenarios, _disclaimer } = JSON.parse(await readFile(scenariosPath, 'utf8'));
---
<section class="hub-section">
  <h2>Pět modelovaných scénářů</h2>
  <p>Konzervativní, základní, optimistický a dvě varianty pro různé délky závazku.</p>
  <div class="hub-scenario-grid">
    {scenarios.map((s) => (
      <article class="hub-scenario-card">
        <header><span class="hub-scenario-card__id">{s.id}</span><h3>{s.name}</h3></header>
        <p>{s.description}</p>
        <dl>
          <div><dt>Cílový roční výnos</dt><dd>{s.nominalYieldPct.toLocaleString('cs')} % p.a.</dd></div>
          <div><dt>Doba</dt><dd>{s.termYears} let</dd></div>
        </dl>
        <p class="hub-scenario-card__assumption">{s.keyAssumption}</p>
      </article>
    ))}
  </div>
  <p class="hub-disclaimer">{_disclaimer}</p>
</section>
```

- [ ] **Step 3: Build, commit**

```bash
pnpm build
git add src/pages/investori/index.astro
git commit -m "feat(hub): build investor page hero, summary, operator, scenarios"
```

### Task 10.2: Build `Calculator.astro` and embed

**Files:**
- Create: `src/components/Calculator.astro`
- Modify: `src/pages/investori/index.astro`

Two inputs (amount + scenario), three outputs (total payback, nominal yield %, breakeven date), one disclaimer paragraph.

- [ ] **Step 1: Author the calculator**

```astro
---
// Calculator reads scenarios at build time and embeds them as a JSON island
// for the inline script to compute outputs without a network round-trip.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const scenariosPath = path.resolve(import.meta.dirname, '../../public/data/scenarios.json');
const { scenarios, _disclaimer } = JSON.parse(await readFile(scenariosPath, 'utf8'));
---
<section class="hub-calc" id="kalkulator" data-scenarios={JSON.stringify(scenarios)}>
  <h2>Modelujte si pozici</h2>
  <div class="hub-calc__grid">
    <div class="hub-calc__inputs">
      <label>Výše investice (Kč)
        <input type="number" name="amount" min="100000" step="50000" value="1000000" inputmode="numeric" />
      </label>
      <label>Scénář
        <select name="scenario">
          {scenarios.map((s) => (<option value={s.id}>{s.id} — {s.name}</option>))}
        </select>
      </label>
    </div>
    <div class="hub-calc__outputs">
      <dl>
        <div><dt>Celkem vyplaceno</dt><dd data-out="total">— Kč</dd></div>
        <div><dt>Modelovaný roční nominální výnos</dt><dd data-out="yield">— %</dd></div>
        <div><dt>Datum návratnosti</dt><dd data-out="breakeven">—</dd></div>
      </dl>
    </div>
  </div>
  <p class="hub-disclaimer">Model je orientační. Skutečný průběh záměru, termíny, právní struktura a výplaty se mohou lišit. Modelovaná výkonnost není zárukou budoucího výnosu. Můžete přijít o část nebo celý vložený kapitál. O konkrétní formě účasti jednáme po dokončení právní a licenční struktury.</p>
  <p class="hub-disclaimer hub-disclaimer--draft">{_disclaimer}</p>
</section>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('kalkulator');
    if (!root) return;
    const scenarios = JSON.parse(root.dataset.scenarios);
    const amountIn = root.querySelector('input[name="amount"]');
    const scenIn = root.querySelector('select[name="scenario"]');
    const out = (key) => root.querySelector(`[data-out="${key}"]`);
    const fmtKc = new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 0 });
    const fmtPct = (n) => `${n.toLocaleString('cs-CZ', { maximumFractionDigits: 1 })} %`;
    function startDate() { return new Date(); }
    function recalc() {
      const amount = Math.max(0, Number(amountIn.value) || 0);
      const scen = scenarios.find((s) => s.id === scenIn.value) ?? scenarios[0];
      const total = amount * scen.multiplier;
      const yieldPct = scen.nominalYieldPct;
      const start = startDate();
      const breakeven = new Date(start.getFullYear(), start.getMonth() + scen.breakevenMonthsOffset, 1);
      out('total').textContent = `${fmtKc.format(total)} Kč`;
      out('yield').textContent = fmtPct(yieldPct);
      out('breakeven').textContent = breakeven.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' });
    }
    amountIn.addEventListener('input', recalc);
    scenIn.addEventListener('change', recalc);
    recalc();
  });
</script>

<style>
  .hub-calc { padding: 48px 24px; background: var(--k-05, #fafafa); }
  .hub-calc__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1200px; margin: 0 auto; }
  .hub-calc__inputs label { display: grid; gap: 6px; margin-bottom: 16px; }
  .hub-calc__inputs input, .hub-calc__inputs select { padding: 10px 12px; font: inherit; border: 1px solid var(--k-30); border-radius: 4px; }
  .hub-calc__outputs dl { display: grid; gap: 16px; }
  .hub-calc__outputs dt { font-size: 13px; opacity: 0.65; }
  .hub-calc__outputs dd { font-size: 24px; font-weight: 700; margin: 0; }
  .hub-disclaimer { max-width: 720px; margin: 24px auto 0; font-size: 13px; opacity: 0.75; }
  .hub-disclaimer--draft { color: var(--accent); }
  @media (max-width: 720px) { .hub-calc__grid { grid-template-columns: 1fr; } }
</style>
```

- [ ] **Step 2: Embed in `investori/index.astro` between scenario cards and the form**

```astro
import Calculator from '../../components/Calculator.astro';
...
<Calculator />
```

- [ ] **Step 3: Build, smoke-test in dev**

```bash
pnpm build
pnpm dev &
```

Manually open `http://localhost:4321/investori/`, change inputs, verify outputs update.

- [ ] **Step 4: Commit**

```bash
git add src/components/Calculator.astro src/pages/investori/index.astro
git commit -m "feat(hub): simplified calculator (amount + scenario → 3 outputs)"
```

### Task 10.3: Build `InvestorForm.astro` and append

**Files:**
- Create: `src/components/InvestorForm.astro`
- Modify: `src/pages/investori/index.astro`

7 fields per spec §9.

- [ ] **Step 1: Author**

```astro
---
---
<form class="hub-form" data-form="investor" novalidate>
  <fieldset>
    <legend>Mám zájem investovat.</legend>
    <p class="hub-form__intro">Pošleme vám podrobnější dokumentaci a ozveme se, jakmile bude jasnější časování.</p>

    <label>Jméno a příjmení <input type="text" name="name" required minlength="2" /></label>
    <label>E-mail <input type="email" name="email" required /></label>
    <label>Telefon <input type="tel" name="phone" /></label>

    <fieldset class="hub-form__inset">
      <legend>Typ zájemce</legend>
      <label><input type="radio" name="kind" value="fyzicka" required /> Fyzická osoba</label>
      <label><input type="radio" name="kind" value="pravnicka" /> Právnická osoba</label>
      <label><input type="radio" name="kind" value="poradce" /> Poradce</label>
      <label><input type="radio" name="kind" value="fond" /> Investiční fond</label>
    </fieldset>

    <label>Orientační výše zájmu (Kč) <input type="number" name="amount" min="0" step="100000" /></label>
    <label>Cílový roční výnos (%) <input type="number" name="targetYield" min="0" max="20" step="0.1" /></label>
    <label>Poznámka <textarea name="note" rows="4" placeholder="Co byste rád(a) o záměru věděl(a) jako první?"></textarea></label>
  </fieldset>

  <button type="submit" class="hub-form__submit">Odeslat zájem</button>
  <output class="hub-form__success" hidden>
    Děkujeme. Zařadíme vás do okruhu, se kterým postupně komunikujeme detail záměru. Ozveme se vám individuálně.
  </output>
</form>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-form="investor"]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('[investor form]', Object.fromEntries(new FormData(form)));
        form.querySelector('.hub-form__success').hidden = false;
        form.querySelector('button[type="submit"]').disabled = true;
      });
    });
  });
</script>
```

(Reuse `.hub-form` styles from ResidentForm — they share a stylesheet pattern. Add a small `.hub-form__inset` rule for the nested fieldset.)

- [ ] **Step 2: Embed in `investori/index.astro` after `<Calculator />`**

- [ ] **Step 3: Commit**

```bash
git add src/components/InvestorForm.astro src/pages/investori/index.astro
git commit -m "feat(hub): investor interest form scaffold"
```

---

## Phase 11 — Projekty `/projekty/`

### Task 11.1: Build the programme grid + stub detail template

**Files:**
- Create: `src/pages/projekty/index.astro`
- Create: `src/pages/projekty/[slug].astro`

- [ ] **Step 1: Grid page**

```astro
---
import Base from '../../layouts/Base.astro';
import { withBase } from '../../utils/url';
import { getCollection } from 'astro:content';

const cards = (await getCollection('subProjects')).sort((a, b) => a.data.order - b.data.order);
---
<Base
  title="Projekty Startovacího Hubu"
  description="Komunitní centrum, coworking, pivovar, bytové družstvo, tržnice a další provozy."
>
  <section class="hub-page-hero">
    <h1>Projekty Startovacího Hubu</h1>
    <p class="hub-lead">Startovací Hub Klecany se skládá z propojených provozů. Některé jsou v aktivní přípravě, jiné teprve dolaďujeme. Tady je přehled toho, co Hub obsahuje a kam se rozrůstá.</p>
  </section>

  <section class="hub-section">
    <div class="hub-projects-grid">
      {cards.map((p) => (
        <a class="hub-project-card" href={withBase(`/projekty/${p.id}/`)}>
          <div class="hub-project-card__thumb" aria-hidden="true">
            {p.data.thumbnail
              ? <img src={p.data.thumbnail} alt="" loading="lazy" width="600" height="450" />
              : <span class="hub-project-card__todo">Vizualizaci doplníme.</span>
            }
          </div>
          <h2>{p.data.name}</h2>
          <p>{p.data.role}</p>
          <span class="hub-project-card__status">V přípravě</span>
        </a>
      ))}
    </div>
    <p class="hub-foot-note">Pokud vás zajímá konkrétní projekt nebo byste se rád(a) zapojil(a), ozvěte se na <a href="mailto:vpd@osa2.cz">vpd@osa2.cz</a>.</p>
  </section>
</Base>
```

- [ ] **Step 2: Stub detail template**

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection, render } from 'astro:content';
export async function getStaticPaths() {
  const all = await getCollection('subProjects');
  return all.map((p) => ({ params: { slug: p.id }, props: { project: p } }));
}
const { project } = Astro.props;
const { Content } = await render(project);
---
<Base title={`${project.data.name} — Startovací Hub Klecany`} description={project.data.role}>
  <section class="hub-page-hero">
    <h1>{project.data.name}</h1>
    <p class="hub-lead">{project.data.role}</p>
  </section>
  <section class="hub-section hub-prose">
    <Content />
  </section>
</Base>
```

- [ ] **Step 3: Build, commit**

```bash
pnpm build
git add src/pages/projekty/
git commit -m "feat(hub): projekty grid + stub detail template"
```

---

## Phase 12 — O projektu `/o-projektu/`

### Task 12.1: Build místo + časová osa

**Files:** Create `src/pages/o-projektu/index.astro`.

Spec §6: two anchored sections on one page — `#misto` + `#casova-osa`.

- [ ] **Step 1: Page skeleton with both sections**

```astro
---
import Base from '../../layouts/Base.astro';
import { withBase } from '../../utils/url';
---
<Base title="O projektu — Startovací Hub Klecany" description="Místo, kontext, časová osa záměru.">
  <section class="hub-page-hero">
    <h1>O projektu</h1>
  </section>

  <section class="hub-section" id="misto">
    <h2>Klecany</h2>
    <p>Areál horních kasáren leží na severu od Prahy, 12 km od centra. Je to bývalý vojenský areál o rozloze 83 327 m², z toho 77 210 m² zastavitelných v souladu se současným územním plánem. Smluvně máme zajištěná práva odkupu, užívání a stavby do roku 2039. Areál je na trase plánované tramvajové linky z Kobylis do Klecan a na navrhované cyklostezce do Prahy.</p>

    <dl class="hub-fact-table">
      <div><dt>Lokace</dt><dd>Klecany, 12 km od centra Prahy, na trase plánované tramvaje z Kobylis</dd></div>
      <div><dt>Rozloha</dt><dd>83 327 m² celkem, z toho 77 210 m² zastavitelných (SM)</dd></div>
      <div><dt>Práva</dt><dd>Smluvně zajištěná do roku 2039: odkup, užívání, stavba</dd></div>
      <div><dt>Doprava dnes</dt><dd>Příměstská linka PID, ~25 minut do Kobylisy</dd></div>
      <div><dt>Doprava výhled</dt><dd>Plánovaná tramvaj z Kobylis, cyklostezka do Prahy</dd></div>
      <div><dt>Cenové prostředí</dt><dd>Klecanská alej jako referenční developerský projekt v okolí</dd></div>
    </dl>

    <figure class="hub-masterplan">
      <img src={withBase('/images/hub/masterplan.jpg')} alt="Masterplan areálu horních kasáren Klecany s vyznačeným Hub jádrem (cca 16 000 m²) a zázemím (cca 18 000 m²)." loading="lazy" />
      <figcaption>Areál horních kasáren — Hub jádro a zázemí v rámci 82 000 m² celku.</figcaption>
    </figure>

    <h3>Doprava a dostupnost</h3>
    <p><!-- spec §6 §misto, ~70 word doprava paragraph --></p>

    <h3>Okolí a služby</h3>
    <p><!-- spec §6 §misto, ~70 word okolí paragraph --></p>
  </section>

  <section class="hub-section" id="casova-osa">
    <h2>Časová osa</h2>
    <p>Záměr postupuje šesti etapami. Reálné termíny se mohou posouvat — držíme je transparentně.</p>
    <ol class="hub-timeline">
      <li class="is-done">       <time>2024</time>            <strong>Identifikace areálu</strong>           <span class="hub-status">hotovo</span></li>
      <li class="is-done">       <time>2025 – H1 2026</time>  <strong>Příprava záměru a investiční model</strong> <span class="hub-status">hotovo</span></li>
      <li class="is-next">       <time>06/2026</time>         <strong>Zahájení rekonstrukcí</strong>          <span class="hub-status">další</span></li>
      <li class="is-next">       <time>2027</time>            <strong>Hrubá stavba a interiéry</strong>      <span class="hub-status">další</span></li>
      <li class="is-next">       <time>10/2028</time>         <strong>Spuštění provozu (cílově)</strong>     <span class="hub-status">další</span></li>
      <li class="is-future">     <time>2027+</time>           <strong>Další etapy VPD1</strong>              <span class="hub-status">další</span></li>
    </ol>
  </section>
</Base>
```

- [ ] **Step 2: Fill in the doprava and okolí paragraphs from `vpd-web/src/pages/vpd1/index.astro`**

```bash
grep -A 20 "Doprava\|Okolí" "/Users/kindl/Work/_2026/02 OSA/11 WWW/vpd-web/src/pages/vpd1/index.astro" | head -60
```

Use the doprava and okolí paragraphs from VPD1 page Kapitola 01 (*Příležitost*). Reuse exact phrasing where the source supports it.

- [ ] **Step 3: Build + lint**

```bash
pnpm build
pnpm lint:editorial
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/o-projektu/index.astro
git commit -m "feat(hub): o-projektu místo and časová osa"
```

---

## Phase 13 — FAQ `/faq/`

### Task 13.1: Build the audience-tabbed accordion

**Files:** Create `src/pages/faq/index.astro`.

12 Q&As loaded from collection, rendered as `<details>` items grouped by audience with tab buttons that hide/show groups.

- [ ] **Step 1: Author**

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection } from 'astro:content';
const all = (await getCollection('faq')).sort((a, b) => a.data.order - b.data.order);
const groups = ['project', 'resident', 'investor', 'legal'].map((aud) => ({
  aud,
  label: { project: 'O projektu', resident: 'Pro obyvatele', investor: 'Pro investory', legal: 'Právní' }[aud],
  items: all.filter((q) => q.data.audience === aud),
}));
---
<Base title="FAQ — Startovací Hub Klecany" description="Odpovědi na nejčastější otázky o projektu, bydlení, investování a právním rámci.">
  <section class="hub-page-hero">
    <h1>FAQ</h1>
    <p class="hub-lead">Otázky, které dostáváme nejčastěji. Pokud něco chybí, ozvěte se na vpd@osa2.cz.</p>
  </section>

  <section class="hub-section hub-faq">
    <div class="hub-faq__tabs" role="tablist">
      <button class="is-active" data-aud="all" role="tab" aria-selected="true">Vše</button>
      {groups.map((g) => (<button data-aud={g.aud} role="tab" aria-selected="false">{g.label}</button>))}
    </div>

    {groups.map((g) => (
      <div class="hub-faq__group" data-group={g.aud}>
        <h2>{g.label}</h2>
        {g.items.map((q) => (
          <details class="hub-faq__item">
            <summary>{q.data.question}</summary>
            <p>{q.data.answer}</p>
          </details>
        ))}
      </div>
    ))}
  </section>
</Base>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.hub-faq__tabs button');
    const groups = document.querySelectorAll('.hub-faq__group');
    tabs.forEach((t) => t.addEventListener('click', () => {
      tabs.forEach((b) => { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      t.classList.add('is-active'); t.setAttribute('aria-selected', 'true');
      const aud = t.dataset.aud;
      groups.forEach((g) => g.hidden = !(aud === 'all' || g.dataset.group === aud));
    }));
  });
</script>
```

- [ ] **Step 2: Build, lint, commit**

```bash
pnpm build
pnpm lint:editorial
git add src/pages/faq/index.astro
git commit -m "feat(hub): FAQ with audience-tabbed accordion"
```

---

## Phase 14 — Polish & ship-readiness

### Task 14.1: Adapt 404 page

**Files:** Modify `src/pages/404.astro`.

- [ ] **Step 1: Replace OSA copy with Hub equivalent**

```astro
---
import Base from '../layouts/Base.astro';
import { withBase } from '../utils/url';
---
<Base title="Stránka nenalezena — Startovací Hub Klecany" description="Hledaný obsah neexistuje. Zkuste se vrátit na úvod.">
  <section class="hub-section" style="min-height: 60vh; display: grid; place-items: center; text-align: center;">
    <div>
      <p style="font-size: 96px; font-weight: 700; line-height: 1; margin: 0;">404</p>
      <h1 style="margin: 16px 0 8px;">Stránka nenalezena</h1>
      <p>Hledaný obsah na našem webu neexistuje. Zkuste úvod nebo nějakou ze sekcí.</p>
      <p style="margin-top: 24px;">
        <a href={withBase('/')}>Úvod</a> · <a href={withBase('/projekty/')}>Projekty</a> · <a href={withBase('/faq/')}>FAQ</a>
      </p>
    </div>
  </section>
</Base>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat(hub): adapt 404 page"
```

### Task 14.2: Generate Hub favicon, OG image, manifest

**Files:**
- Create: `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`
- Create: `public/og/default.png`, `public/og/default.svg`
- Create: `public/manifest.webmanifest`

- [ ] **Step 1: Author a placeholder favicon SVG**

```svg
<!-- public/favicon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#000"/><text x="16" y="22" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#fff" text-anchor="middle">SH</text></svg>
```

- [ ] **Step 2: Author a placeholder OG SVG and rasterize**

```svg
<!-- public/og/default.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#000"/><text x="60" y="320" font-family="Helvetica, Arial, sans-serif" font-size="80" font-weight="700" fill="#fff">Startovací Hub Klecany</text><text x="60" y="380" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#d0342c">První etapa záměru VPD1.</text></svg>
```

```bash
which rsvg-convert >/dev/null && rsvg-convert -w 1200 -h 630 public/og/default.svg -o public/og/default.png \
  || node -e "import('sharp').then(({default: sharp}) => sharp('public/og/default.svg').png().toFile('public/og/default.png'))"
```

- [ ] **Step 3: Author a small manifest**

```json
{
  "name": "Startovací Hub Klecany",
  "short_name": "Hub Klecany",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#d0342c",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

- [ ] **Step 4: Add a basic apple-touch-icon (PNG copy of the favicon at 180×180)**

```bash
node -e "import('sharp').then(({default: sharp}) => sharp('public/favicon.svg').resize(180,180).png().toFile('public/apple-touch-icon.png'))"
```

- [ ] **Step 5: Commit**

```bash
git add public/favicon.svg public/og/ public/manifest.webmanifest public/apple-touch-icon.png
git commit -m "feat(hub): brand favicon, OG card, manifest"
```

### Task 14.3: Run editorial + weight lints; fix any failures

**Files:** as needed across content.

- [ ] **Step 1: Build then lint**

```bash
pnpm build
pnpm lint:editorial
pnpm lint:weight
```

Expected: editorial passes (voice rules); weight budget green on every page.

- [ ] **Step 2: Fix lint failures**

If editorial flags hype/passive/legalese, edit the offending content or copy block in spec direction. If weight budget fails, the most likely cause is a too-large image on the Landing — re-run `pnpm migrate:images` after lowering the `maxEdge` for the offending file, or move the heavy image to a non-eager position.

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix(hub): address editorial/weight lint findings"
```

### Task 14.4: Rewrite README.md and CLAUDE.md for the Hub project

**Files:**
- Modify: `README.md`
- Modify: `CLAUDE.md`

- [ ] **Step 1: README — short user-facing doc**

Replace the OSA-focused README with a Hub-focused one:

```md
# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s. Deploys to `klecany.osa2.cz`.

## Stack

- Astro 6.1.8, static output
- Atyp Text/Special, K10–K90 monochrome + tricolor red accent
- MDX content collections + JSON for FAQ and calculator scenarios
- Vanilla CSS, no client framework, no React island
- `sharp` for image migration only

## Scripts

| | |
|---|---|
| `pnpm dev` | Local dev (port 4321) |
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve `dist/` |
| `pnpm migrate:images` | Re-run the Hub image migration |
| `pnpm lint:editorial` | Voice/style lint over `src/content/**/*.mdx` |
| `pnpm lint:weight` | Per-page eager-weight budget |

## Pages

`/` Landing · `/obyvatele/` Resident · `/investori/` Investor · `/projekty/` Programme cards · `/o-projektu/` Place + timeline · `/faq/` FAQ

## Deferred to a programmer

- Form submission backend (resident form, investor form). Both currently `console.log` and show a static success state.
- Calculator math binding to the live VPD1 záměr Excel; currently uses placeholder per-scenario rates in `public/data/scenarios.json` with a draft disclaimer.
- Analytics, cookie consent, admin.

## Operator credit

Marek Semerád, předseda OSA II, z.s. — `vpd@osa2.cz`. Parent links: [osa2.cz](https://osa2.cz), [osa2.cz/zamer-vpd/](https://osa2.cz/zamer-vpd/).
```

- [ ] **Step 2: CLAUDE.md — agent handoff doc**

Replace the 38KB OSA CLAUDE.md with a focused Hub handoff. Lead with current state, decisions worth knowing (brand red token, calculator placeholder data, deferred items, image migration script, parent VPD page as source of truth for unit count + timeline). Keep it under 500 lines. Cross-reference the implementation plan: `docs/superpowers/plans/2026-04-29-startovaci-hub-redesign.md`.

Skeleton:

```md
# sh-web — CLAUDE.md

Operational handoff for the next agent or human colleague working on the Startovací Hub Klecany site.

## What this is

Static site for the Startovací Hub Klecany sub-site of OSA II, z.s. Lives in `sh-web/`, deploys to `klecany.osa2.cz`. Redesigned 2026-04-29 from the prior osa-web parent codebase per `docs/superpowers/plans/2026-04-29-startovaci-hub-redesign.md`.

## Stack snapshot

(table — Astro 6.1.8, static, MDX, sitemap, Atyp, K10-K90 + tricolor red, vanilla CSS, sharp)

## Current state (2026-04-29, post-redesign)

(seven-bullet snapshot of what builds, what's wired, what's deferred — calculator placeholder, forms console.log only, OSM map placeholder, projekty stub pages)

## Design decisions worth knowing

(Brand: VPD wordmark in header, OSA part-of link in top strip, role chip on resident/investor pages only. Tooltips for resident tracks instead of subpages. Calculator option B (simplified). Pozadi background pattern on dark hero only. Images: optimize via `pnpm migrate:images`. Cross-reference parent VPD page for unit count + timeline.)

## Repo layout

(condensed tree pointing to key files)

## Content collections

(short description of subProjects, faq, org)

## Open loops / known issues

- Calculator scenarios.json is placeholder; reconcile with the real VPD1 model when it's stable.
- Place section uses an OSM screenshot placeholder until operator drops the final map.
- Per-format room schematics (Kapsle, Sdílený pokoj) and per-sub-project thumbnails ship as `// TODO` blocks; replace as renders arrive.
- Forms `console.log` payloads. Backend wiring deferred to programmer.

## Running the project

(usual `pnpm install` / `dev` / `build` / `preview` / `lint:editorial` / `lint:weight`)

## Deploy checklist (before launch)

1. Wire real `scenarios.json` from operator.
2. Drop final OSM map at `public/images/hub/place/map.jpg`.
3. Replace per-format room schematics + per-sub-project thumbnails.
4. Wire form submission backend (programmer).
5. Configure DNS for `klecany.osa2.cz`.
6. Decide on analytics (Plausible/GoatCounter).
```

- [ ] **Step 3: Commit**

```bash
git add README.md CLAUDE.md
git commit -m "docs(hub): rewrite README and CLAUDE handoff for Startovací Hub"
```

### Task 14.5: Final smoke test on dev server

**Files:** none (verification).

- [ ] **Step 1: Build, then preview**

```bash
pnpm build
pnpm preview &
```

- [ ] **Step 2: Walk every page and verify**

Open `http://localhost:4321/` and visit each page in turn:

- `/` — visual hero loads, two CTAs, exterior + interior galleries open lightboxes, status block, FAQ teaser collapses/expands.
- `/obyvatele/` — four type cards, role-question tooltips open on click, form submit shows success state, role-Q9 branch reveals.
- `/investori/` — five scenario cards, calculator updates on input, investor form submits to console + shows success.
- `/projekty/` — six cards (5 sub-projects + "Další"), each click goes to `/projekty/<slug>/` stub.
- `/o-projektu/#misto` — fact dl renders, masterplan image loads.
- `/o-projektu/#casova-osa` — six timeline items.
- `/faq/` — tabs filter, accordion expands.

If any page errors or renders blank, fix and recommit before declaring complete.

- [ ] **Step 3: No commit unless fixes were made.**

---

## Self-Review

**1. Spec coverage** — every spec section maps to a task:

| Spec section | Task(s) |
|---|---|
| §0 Revision drivers | n/a (decisions reflected throughout) |
| §1 Synthesis | n/a |
| §2 Sitemap (6 pages) | Phases 8–13 |
| §3 Landing | Tasks 8.1, 8.2, 8.3 |
| §4 Pro budoucí obyvatele | Tasks 9.1, 9.2 |
| §5 Pro investory | Tasks 10.1, 10.2, 10.3 |
| §6 O projektu | Task 12.1 |
| §7 Projekty | Task 11.1, plus content in 4.2 |
| §8 FAQ | Task 13.1, plus content in 4.3 |
| §9 Forms | Tasks 9.2 (resident), 10.3 (investor) |
| §10 Microcopy ruleset | Editorial linter (Phase 3 verification, runs on every commit via Phase 14.3) |
| §11 Visual assets | Phase 5 (migration) |
| §12 What the build agent does | Whole plan |
| §13 Resolved (Rev 3) | Reflected in tokens (--c-red), domain (astro.config), scenarios.json placeholder, footer parent links |
| §14 Pre-mortem | Mitigations baked in: calculator extra disclaimer (Task 4.5), placeholder image blocks (Phase 5 + 11), evolving-project paragraph kept verbatim (Task 8.2) |
| §15 Cross-references | Linked at top of plan |

No gaps.

**2. Placeholder scan** — copy in tasks references spec §X.Y instead of duplicating Czech prose; this is intentional and the engineer reads both. Component code is shown inline. Form Q3–Q8 in Task 9.2 are explicitly described as "follow Q2's pattern, see spec §9 for option lists" — that's a tight reference, not a placeholder. README and CLAUDE.md skeletons in Task 14.4 use `(table — ...)` and `(skeleton: ...)` style placeholders for the long descriptive prose; that's acceptable because the agent has the spec for current state and can author confidently.

**3. Type / signature consistency**

- `Header.astro` props: `variant`, `showRoleChip`, `activeRole` — same names propagate through `Base.astro` (Task 6.4) and through page calls in Phases 8–13. ✓
- `--accent` token added once (Task 2.3); used in Header chip, Calculator outputs, form submit button, project card hover. ✓
- `subProjects` schema: fields `name`, `role`, `status`, `order`, `thumbnail?`. Used in `index.astro` (Task 8.3), `projekty/index.astro` (Task 11.1), `projekty/[slug].astro` (Task 11.1). ✓
- `faq` schema: `audience`, `question`, `answer`, `order`. Used in `faq/index.astro` (Task 13.1) and the landing teaser (Task 8.3). ✓
- `scenarios.json` shape: each scenario carries `id`, `name`, `description`, `termYears`, `nominalYieldPct`, `multiplier`, `breakevenMonthsOffset`, `keyAssumption`. Read in Task 10.1 (cards) and Task 10.2 (calculator) — same fields. ✓

No naming drift.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-29-startovaci-hub-redesign.md`.

Two execution options:

1. **Subagent-Driven (recommended for a 14-phase, 30-task plan)** — fresh subagent per task, two-stage review between tasks, fast iteration on the form/calculator/page details.
2. **Inline Execution** — execute tasks in this session using executing-plans, batch execution with checkpoints at the end of each phase.

Which approach?
