# sh-web — CLAUDE.md

Operational handoff for the Startovací Hub Klecany site. Keep this file terse — it loads into every Claude Code conversation. Long-form history (per-page anatomy, design decisions, redesign aftermath) lives in `docs/HISTORY.md`; read it on demand only.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Repo: `github.com/keiaiendiel/sh-web`. Deployed to GitHub Pages at `https://keiaiendiel.github.io/sh-web/`; will move to `startovacihub.cz` after DNS cutover.

The Hub is phase 1 of the VPD1 záměr (revitalization of horní kasárny Klecany). After the May 2026 refactor the site is a **conversion funnel for non-binding reservations** of 6 room types. Družstvo (vlastnické bydlení) je odsunuté na skrytou `/druzstvo/` s `noindex` — pro lidi nasměrované manuálně rezervačním oddělením po telefonu. Investor surface lives on the sibling `vpd-web` repo + footer link.

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections (MDX + JSON), Zod-validated — `subProjects`, `rooms`, `faq`, `org` |
| Styling | Vanilla CSS, tokens in `src/styles/`. Plum accent `#5A2A5F`, `--radius-input: 7px` |
| Fonts | Self-hosted Atyp Special WOFF2 in `public/fonts/` |
| Client JS | Tiny inline `<script is:inline>` islands — no bundle |
| Map | Leaflet 1.9.4 (CDN unpkg) + CARTO Voyager tiles, only on `/o-arealu/` and `/` |
| Deploy | GH Pages, `base: '/sh-web/'`. CI in `.github/workflows/deploy-pages.yml` |

## Pages (20)

```
/                       landing — hero + 6 RoomCards + amenity grid + extras + zigzag + final CTA + map + mini-FAQ
/pokoje/                overview of 6 room types
/pokoje/<slug>/         × 6 detail pages (capsule, capsule-double, 1kk-2l, 1kk-3l, 2kk, 3kk)
/sluzby/                paid extras (stravování, e-vozidla, sklady) — no sauna here
/areal/                 5 sub-projektů (komunitní centrum, coworking, pivovar, sauna+bazén, sportoviště+park)
/areal/<slug>/          × 5 detail
/o-arealu/              location, transport, OSA II identity
/rezervace/             3-section booking form
/druzstvo/              SKRYTÁ (noindex) — manuální nasměrování pro vlastnické bydlení
/faq/                   audience-tabbed
/404
```

Per-page anatomy + redesign history in `docs/HISTORY.md`.

## Audience & voice

- **Primární persona:** pracující studenti, OSVČ, mladí kreativci, začínající podnikatelé
- **Voice:** komunita + kreativa + pragmatic value
- **Hook:** „Bydlení 15 minut od metra Kobylisy", levnější než centrum
- **Konverzní funnel:** hero → RoomCard → /rezervace/ → telefon do 24 h
- **Investor:** jen footer link na VPD1, žádná homepage real estate

## Pricing draft (orientační, klient finalizuje)

Anchor cena za celou jednotku při plné obsazenosti + per-osoba ekvivalent v UI. 3-tier slevy (3+ / 6+ / 12+ měsíců).

| Typ | Max lůžek | Anchor | 3+ / 6+ / 12+ |
|---|---|---|---|
| Kapsle | 1 | 4 500 Kč | −5 / −15 / −25 % |
| Dvoulůžková kapsle | 2 | 6 500 Kč | −5 / −15 / −25 % |
| 1+kk · 2 lůžka | 2 | 9 500 Kč | −5 / −10 / −20 % |
| 1+kk · 3 lůžka | 3 | 11 500 Kč | −5 / −10 / −20 % |
| 2+kk · 4 lůžka | 4 | 16 000 Kč | −5 / −10 / −20 % |
| 3+kk · 6 lůžek | 6 | 21 000 Kč | −5 / −10 / −20 % |

Zdroj: Compass deep-research 5/2026 (50+ pražských referencí). GPT light Executive Summary jako sekundární zdroj. Komunikace: per-jednotka anchor, per-osoba sekundárně, sleva za dlouhý pobyt jako tier (ne „akce").

## Reservation flow

`/rezervace/` má 3 sekce:
1. **Typ + termín + délka** — 6 carded options + „Ještě nevím, poraďte mi", month picker, length select
2. **Kontakt** — jméno / e-mail / **telefon (povinný — voláme)** / poznámka / volitelný stipendium checkbox
3. **Souhlas** — GDPR

URL pre-fill `?typ=<slug>` z RoomCard. Submit `console.log` → success state „Zavoláme do 24 hodin." (backend deferred).

Voice principle: **prezentovat vše sebevědomě jako fungující** — žádné status badges („Spouštíme jaro 2026"), žádné disclaimery o fázování rekonstrukcí. Konkrétní dostupnost v termínu rezervace probere rezervační oddělení po telefonu.

## Don't read these (token traps)

- `dist/` (build output, ~15M)
- `.astro/` (generated types)
- `node_modules/`, `pnpm-lock.yaml`
- `docs/HISTORY.md` unless the question is about historical decisions
- `docs/copywriting.md`, `docs/copywriting2.md`, `docs/web-texty.md` — primárně referenční copy snapshoty, **pre-pivot stav** (před květnem 2026). Aktuální copy se generuje z content collections.

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
pnpm migrate:images   # one-shot: reads from ../../12 Startovaci Hub/image/, writes public/images/hub/
pnpm optimize:images  # idempotent: re-encodes anything > 600 KB in aerial/ exterior/ interior/ hero/ to q=80 mozjpeg, max edge 1600 px; renames .png → .jpg when re-encoding
```

## Pushing to GitHub

`master` is the deploy branch — every push triggers `deploy-pages.yml` (lint + build + `actions/deploy-pages@v4`, ~2 min). Use conventional-commit prefixes: `feat(hub):`, `fix(hub):`, `refactor(hub):`, `docs(hub):`, `content(hub):`, `style(hub):`, `ci(hub):`.

Always inspect first; never `git add -A`:

```bash
git status
git add <specific files>
git commit -m "feat(hub): describe what+why"
git push origin master
```

## Open loops

- **Pricing draft k revizi.** 6 anchor cen + 3-tier slevy podle Compass research. Klient finalizuje před public launchem; konzervativně lze cenu skrýt v fázi 1, ale `?typ=<slug>` pre-fill + per-osoba ekvivalent závisí na číslech v MDX (`priceFrom`).
- **Backend rezervačního formuláře.** `/rezervace/` stále `console.log`s payload. Nutné wirovat e-mail / DB / anti-spam před public launchem.
- **Photo content.** 2+kk a 3+kk používají placeholder fotky (`1kk-a4-a6.jpg` a `vetsi-pokoj-a.jpg`) — reálné rendery zatím nejsou.
- **Transitional base path.** `astro.config.mjs` má `base: '/sh-web/'`; `tokens.css` font URLs jsou `/sh-web/fonts/...`. Při DNS flip: set `site: 'https://startovacihub.cz'`, smaž `base`, find/replace `/sh-web/fonts/` → `/fonts/`. `withBase()` se stane no-op.
- **`lint:weight` doesn't see the hero image** because the base path resolves against a flat `dist/`. Fix když DNS flipne (base = `/`).
- **Leaflet from CDN (unpkg).** No local fallback. Acceptable for v1.
- **Email domain.** User-facing copy + JSON-LD points at `alternativa2.info`; emails (`vpd@osa2.cz` etc.) still on `osa2.cz`. Operator confirms separately whether email moves with the website.
- **Backup branch `backup/osa-web-pre-hub-redesign`** is local only. Keep until Hub has been in production for one cycle.
- **GitHub Actions Node 20 deprecation warning** — po 2026-06-02 force-upgrade na Node 24. Update `actions/*` versions before then.

## Contact points

- Operator: Občanské sdružení Alternativa II, z.s. (OSA II) — [alternativa2.info](https://www.alternativa2.info/).
- Předseda: Marek Semerád — `vpd@osa2.cz`.
- Místopředseda: Štěpán Říha.
- Legal identifiers: `src/content/org/identity.json` (drives JSON-LD on every page).

## Deploy checklist (before public launch)

1. Klient finalizuje pricing (6 typů × anchor + sleva tiers v `src/content/rooms/*.mdx`).
2. Wire pre-reservation form backend (`src/components/ResidentForm.astro`).
3. Replace placeholder photos pro 2+kk a 3+kk (případně i 1+kk variants).
4. Cut DNS to `startovacihub.cz` (drop `CNAME` in `public/`, configure DNS, flip `astro.config.mjs`).
5. Analytics decision (Plausible / GoatCounter — out of scope for v1).

The repo builds, lints, and auto-deploys on every push to master.
