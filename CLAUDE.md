# sh-web — CLAUDE.md

Operational handoff for the Startovací Hub Klecany site. Keep this file terse — it loads into every Claude Code conversation. Long-form history (per-page anatomy, design decisions, redesign aftermath) lives in `docs/HISTORY.md`; read it on demand only.

## What this is

Static site for **Startovací Hub Klecany**, run by OSA II, z.s. Repo: `github.com/keiaiendiel/sh-web`. Deployed to GitHub Pages at `https://keiaiendiel.github.io/sh-web/`; will move to `startovacihub.cz` after DNS cutover.

The Hub is phase 1 of the VPD1 záměr (revitalization of horní kasárny Klecany). After the May 2026 refactor the site is a **conversion funnel for non-binding reservations** of 6 room types. Družstvo (vlastnické bydlení) je odsunuté na skrytou `/druzstvo/` s `noindex` — pro lidi nasměrované manuálně rezervačním oddělením po telefonu. Investor surface lives on the sibling `vpd-web` repo + footer link.

## ACTIVE WORK (2026-05): full restructure across 5 phases

**Master source of truth:** `/Users/kindl/kindl-vault/Projects/SH_Web/` (mimo repo). Klíčové soubory:

- `SH_Web_Site_Copy.md` (83 KB), kanonický copy pro živý web. Mirror v repu jako `CONTENT.md` (re-sync přes `cp`).
- `SH_Web_Plan.md` (39 KB), uzamčená rozhodnutí, IA, fázování, otevřené otázky pro Marka.
- `SH_Web_Visualization_List.md` (33 KB), shot list pro ~90 záběrů (Tier A/B/C).
- `Research/SH_Web_Research_CopyVoice.md` (29 KB), **povinné čtení před psaním**, banned phrases v `scripts/lint-editorial.mjs`.

**Phase 1 — IA foundation (DONE 2026-05-13):** smazány staré routes (`/pokoje/`, `/areal/`, `/sluzby/`, `/o-arealu/`), 11 nepoužitých MDX a 2 orphan komponenty; přepsán Header (8-item nav + site-wide plum badge „V projektové přípravě" per Marek 2026-05-12 + Rezervace CTA chip) a Footer (per Site_Copy § 0.3); vytvořeno 12 stub pages pro novou IA; rozšířen `lint-editorial` o 14 banned patterns z CopyVoice research § 1-6 (em/en-dash, „v srdci", „objevte", „více než jen", duté gerundium v -ící, atd.); landing dostala minimální hero shell s claimem z § 0.1.

**Phase 2 — Landing (TODO):** hero rotace 5 záběrů (Tier A produkce Hugo), „Co Hub nabízí" 4 karty se swipe gallery, section teasery, mapa.

**Phase 3 — Ubytování + Kapsle (TODO):** nové content collections (4 co-living + 5 privátní apartmány = 9 typů), 9 detail stránek + `/kapsle/` A/B landing, cenovka per Plan.md ř. 125-136.

**Phase 4 — Ostatní content (TODO):** `/coworking/`, `/komunita/`, `/okoli/`, `/doprava/`, `/stipendia/`, `/galerie/`, `/novinky/`, `/kontakty/`, `/faq/`. Plné copy z Site_Copy.md.

**Phase 5 — Rezervace wizard + backend (TODO):** 5-krokový průvodce (per ConfiguratorUX research), Cloudflare Worker na `form.startovacihub.cz` (Turnstile + Resend + D1 EU jurisdikce), `/metodika-srovnani/` + `/gdpr/` + SEO meta + JSON-LD + sitemap.xml + robots.txt.

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

## Pages (17 post-Phase-1, target 17+5 post-Phase-3)

Aktuální stav po Phase 1:

```
/                          landing (Phase 1 shell, plný redesign v Phase 2)
/ubytovani/                stub (Phase 3: 9 detail pages)
/coworking/                stub (Phase 4)
/komunita/                 stub (Phase 4)
/okoli/                    stub (Phase 4)
/doprava/                  stub (Phase 4)
/stipendia/                stub (Phase 4)
/novinky/                  stub (Phase 4)
/galerie/                  stub (Phase 4)
/kontakty/                 stub (Phase 4)
/rezervace/                stub s email fallbackem (Phase 5: 5-step wizard)
/kapsle/                   stub (Phase 3: dedikovaný A/B landing per Plan.md ř. 195)
/metodika-srovnani/        stub (Phase 5: plná metodika per § 2980 OZ)
/gdpr/                     stub (Phase 5: plná pravidla s nasazením formuláře)
/faq/                      drží předchozí obsah (Phase 4 redo per Site_Copy)
/druzstvo/                 SKRYTÁ (noindex), drží předchozí obsah
/404
```

Phase 3 přidá 9 detail pages pod `/ubytovani/co-living/<slug>/` a `/ubytovani/privatni/<slug>/`.

Per-page anatomy + redesign history v `docs/HISTORY.md`.

## Audience & voice

- **Primární persona:** pracující studenti, OSVČ, mladí kreativci, začínající podnikatelé
- **Voice:** komunita + kreativa + pragmatic value
- **Hook:** „Bydlení 15 minut od metra Kobylisy", levnější než centrum
- **Konverzní funnel:** hero → RoomCard → /rezervace/ → telefon do 24 h
- **Investor:** jen footer link na VPD1, žádná homepage real estate

## Pricing (uzamčeno 2026-05-12 Markem, per `SH_Web_Plan.md` ř. 125-136)

Anchor cena za celou jednotku v krátkém pobytu, 3-tier slevy (3+ / 6+ / 12+ měs). Kapsle a co-living agresivně dolů oproti původnímu draftu (Markovo Q1: „za 3 000 Kč super deal pro jednolůžko"). 1+kk-5+kk drží draft.

| Formát | Plocha | Lůžek | Anchor | 3+ / 6+ / 12+ |
|---|---|---|---|---|
| Privátní 1-lůžková kapsle | n/a | 1 | 3 000 Kč | 2 850 / 2 550 / 2 250 Kč |
| Privátní 2-lůžková kapsle | n/a | 2 | 4 500 Kč | 4 275 / 3 825 / 3 375 Kč |
| Jedno lůžko sdílený pokoj | n/a | 1 | 3 500 Kč | 3 325 / 2 975 / 2 625 Kč |
| Dvoulůžko sdílený byt | n/a | 2 | 6 000 Kč | 5 700 / 5 100 / 4 500 Kč |
| 1+kk | 21 m² | 2 | 9 500 Kč | 9 025 / 8 550 / 7 600 Kč |
| 2+kk | 42 m² | 4 | 14 000 Kč | 13 300 / 12 600 / 11 200 Kč |
| 3+kk | 63 m² | 6 | 18 000 Kč | 17 100 / 16 200 / 14 400 Kč |
| 4+kk | 84 m² | 8 | 22 000 Kč | 20 900 / 19 800 / 17 600 Kč |
| 5+kk | 105 m² | 10 | 25 000 Kč | 23 750 / 22 500 / 20 000 Kč |

**Vše v ceně bydlení:** energie, internet, úklid společných prostor, **5 jízd Hub-shuttle do metra Kobylis měsíčně**, **1 jízda Hub-taxi lokálně měsíčně**, přístup do coworkingového sálu (volný stůl), poukaz do sauny 1× týdně. Další shuttle/taxi za zvýhodněnou sazbu.

Komunikační pravidlo per CopyVoice research: per-jednotka anchor + paralelní per-osoba pro velké formáty (2+kk a výš). **Komparativní cenová tvrzení vůči Praze** žijí jen v sekundárním social-proof pruhu, nikdy v body textu, vždy s odkazem na `/metodika-srovnani/` (§ 2980 OZ).

Coworking ceny (uzamčené per Plan.md ř. 152-163):

| Tier | Cena |
|---|---|
| Volný stůl v sále 24/7 | 2 900 Kč/měs (rezidenti zdarma) |
| Fixní stůl | 4 200 Kč/měs |
| Sdílená kancelář pro čtyři | 15 000 Kč/měs |
| Zasedací místnost (6 osob) | 350 Kč/hod, 1 200 Kč/půlden, 2 000 Kč/den |
| Ateliér 15-25 m² | 6 500 Kč/měs (~325 Kč/m²) |
| Dílna základní | 490 Kč/měs |
| Dílna těžké stroje | 150 Kč/hod (CNC, laser, 3D tiskárny) |

## Reservation flow (Phase 5, locked design)

`/rezervace/` cíl: 5-krokový průvodce per Plan.md ř. 217-251. URL slug zachován, **H1 „Registrace zájmu o bydlení"**, tlačítko „Odeslat nezávaznou registraci", legal floor: každé potvrzení říká „Toto není závazek na vaší straně".

Kroky: 1. Koncept (Privátní / Co-living / „Nevím, poradíme"), 2. Konfigurace prostoru (radio karty per koncept), 3. Termín + stipendium toggle, 4. Osobní profil (telefon povinný), 5. Rekapitulace + GDPR. Stálý sidebar s aktuální cenou + „vše v ceně" checklistem.

Backend: Cloudflare Worker na `form.startovacihub.cz` → Turnstile invisible → Resend → D1 EU jurisdikce. Per `Projects/OSA_Website/OSA_Website_Hub_Research_Forms.md`.

**Phase 1 stav:** `/rezervace/` je stub s email fallbackem (`mailto:vpd@osa2.cz`), wizard přijde v Phase 5.

Voice principle (per `Research/SH_Web_Research_LegalFloor.md` + `_CopyVoice.md`): **prezentovat vše sebevědomě jako fungující** + **site-wide „V projektové přípravě" badge** v headeru neutralizuje vábivou reklamu podle Přílohy č. 1 písm. d) ZOOS, ne per-amenity disclaimery.

## Don't read these (token traps)

- `dist/` (build output, ~15M)
- `.astro/` (generated types)
- `node_modules/`, `pnpm-lock.yaml`
- `docs/HISTORY.md` unless the question is about historical decisions

> Pre-pivot copy snapshoty (`docs/copywriting*.md`, `docs/web-texty.{md,docx}`, `docs/visual-assets.md`) **byly smazány** 2026-05-12 — vyčistili jsme repo před restrukturalizací. Pokud je potřebuješ historicky, najdeš je v `git log` (commit „chore(hub): pre-restructure cleanup").

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

- **Phase 2-5 restructure** — viz „ACTIVE WORK" výše. Master sources v `/Users/kindl/kindl-vault/Projects/SH_Web/`, mirror v `CONTENT.md`.
- **Otevřené Markovy otázky** (per Plan.md ř. 37-51): IČO + telefon kontaktního čísla, Hub-shuttle provozovatel, advokát na smluvní šablony (§ 2235 + § 2326 OZ), pojmenovaní rezidenti pro launch, kapacita Hubu v lůžkách, domain timing.
- **Domain cutover** (`startovacihub.cz`): plánovaný po Phase 4 launch. Per Plan.md Q10 otevřeno.
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
