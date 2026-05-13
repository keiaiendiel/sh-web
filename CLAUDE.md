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

**Phase 1 — IA foundation (DONE 2026-05-13):** smazány staré routes (`/pokoje/`, `/areal/`, `/sluzby/`, `/o-arealu/`), 11 nepoužitých MDX a 2 orphan komponenty; přepsán Header (8-item nav + site-wide plum badge „V projektové přípravě" + Rezervace CTA chip) a Footer (per Site_Copy § 0.3); vytvořeno 12 stub pages; rozšířen `lint-editorial` o 14 banned patterns z CopyVoice research § 1-6.

**Phase 2 — Landing (DONE 2026-05-13):** hero rotace 5 záběrů s placeholdery (Tier A render Hugo pending), „Co Hub nabízí" 4 karty s horizontal scroll-snap gallery (4 fotky/karta, 16 placeholder slotů celkem), section teasery 4×2 grid, místo + masterplan, finální plum CTA panel.

**Phase 3 — Ubytování + Kapsle (DONE 2026-05-13):** dvě nové content collections (`apartmany` 5 MDX × 1+kk až 5+kk; `coliving` 4 MDX × kapsle-single/-double/jedno-luzko/dvouluzko); 9 detail stránek pod `/ubytovani/privatni/[slug]/` a `/ubytovani/co-living/[slug]/` (dynamické routes, shared layout: dark hero + meta lišta + 2-col text+spec + cenová tabulka + CTA); `/ubytovani/` overview s 2 skupinami × 9 karet; `/kapsle/` dedikovaný A/B landing per CapsulePositioning reframing.

**Phase 4 — Ostatní content (DONE 2026-05-13):** plný obsah pro `/coworking/` (5 tarifů), `/komunita/` (wellness, park, gastro, klubovna + § 3.5 TBD), `/okoli/` (9 podsekcí, fakta ověřená k 12.5.2026), `/doprava/` (Hub-shuttle, 374, Hub-taxi, auto, kolo, plánovaná tramvaj+cyklolávka), `/stipendia/` (4 role + jak se přihlásit), `/galerie/` (4 foto-skupiny), `/novinky/` (blog model + první článek šablona), `/kontakty/` (4 osoby + OSA II), `/faq/` (10 nových otázek z § A.1-A.10). Sdílené utility `sec-*` v kit.css.

**Phase 5 — Rezervace wizard + Worker scaffold (DONE 2026-05-13):** 5-krokový průvodce v `/rezervace/` (koncept → konfigurace per koncept → termín+stipendium → kontakt → rekapitulace+GDPR) s živým sidebar (cena podle vybraného formátu + délky, kontrolní seznam „vše v ceně"), URL pre-fill `?typ=<slug>`, vanilla JS state, console.log payload (Worker endpoint čeká na deploy). Cloudflare Worker scaffold v `worker/` (TypeScript, validace + Turnstile + Resend + D1 EU + CORS, SHA-256 hash IP, SQL schema). `/metodika-srovnani/` plný obsah per § 2980 OZ, `/gdpr/` plné zásady.

**Phase 6 — SEO + copy polish + design polish (DONE 2026-05-13):**
- SEO foundation per `Research/SH_Web_Research_SEO.md`: LocalBusiness JSON-LD globálně v `Base.astro` (PostalAddress Klecany, GeoCoordinates, areaServed, priceRange, NGO parentOrganization OSA II), BreadcrumbList automaticky z URL pathu s lidsky znějícími labely, per-page meta titles cíleně na long-tail Czech keywords (př. „Bydlení v Klecanech, 15 minut autobusem z Prahy · Hub"). `robots.txt` opravený sitemap URL + disallow `/druzstvo/` a `/rezervace/?`.
- Copy fixy podle CopyVoice § 4.2 + user feedback: site-wide ty→vy konverze v MDX (12+ substitucí: tvoje/tvůj/tvojí, 2. os. sg. slovesa); imperativ pro CTA volání (Bydlíte → Bydlete, Najmete si → Najměte si); calque „na měsíc" + missing comma před „nebo" v parech; všech 16 amenity card placeholderů přepsány jako popisné alt texty, žádné „Hugo" / „Tier A produkce" mentions.
- Design polish: focus-visible ring na všechny interaktivní prvky (plum, 2px + 2px offset), skip-link „Přeskočit na hlavní obsah" pro a11y/klávesnici, card hover lift (translateY -2px + soft plum shadow) na `.ub-card` a `.kp-variant`, CTA button hover lift; sofistikovaná typografie globálně (font-feature-settings kern/liga/calt/ss01, text-rendering optimizeLegibility, tabular-nums na td/dd), scroll-padding-top pro anchor links, smooth scroll.

**Vault sync 2026-05-13 (post-Phase-6):**
- Renames v co-living: „Jedno lůžko ve sdíleném pokoji" → „Jedno lůžko", „Dvoulůžko ve sdíleném bytě" → „Dvoulůžko".
- Reorder co-living po cenovém ascending: kapsle-single (1) → jedno-luzko (2) → kapsle-double (3) → dvouluzko (4). `/ubytovani/` overview, wizard step 2, `/kapsle/` landing všechno auto-pickup z collection order.
- Body texts v 4 coliving MDX ~50 % kratší per nové Site_Copy § 1.2.x.
- `/ubytovani/` § 1.1 + 1.2 intro: nový odstavec o volitelném sdílení v privátních + 2-odstavcový reframing o lůžku vs kapsli v co-livingu.
- FAQ JSON: kompletně přepsáno (předchozí Phase 4 update se ztratil, držel pre-pivot otázky). Nyní 10 otázek z vault A.1-A.10, vč. A.1 reformulace produktů a A.5 mazlíčci alignment s rename.
- CONTENT.md re-synced z `/Users/kindl/kindl-vault/Projects/SH_Web/SH_Web_Site_Copy.md`.

## Workflow: vault → repo sync

Klient pracuje v `/Users/kindl/kindl-vault/Projects/SH_Web/`. Když editne **Site_Copy.md** (kanonický copy zdroj), nebo **Plan.md** (locked decisions), Claude má za úkol porovnat a syncnout. Postup:

1. **Re-read vault soubory** (`Site_Copy.md` první, `Plan.md` jen když user explicitně zmíní strukturální nebo cenovou změnu).
2. **Porovnej s aktuálním stavem repa** na úrovni:
   - `src/content/apartmany/*.mdx` (5 souborů) ↔ Site_Copy § 1.1.1-1.1.5
   - `src/content/coliving/*.mdx` (4 soubory) ↔ Site_Copy § 1.2.1-1.2.4
   - `src/content/faq/index.json` (10 otázek) ↔ Site_Copy § A.1-A.10
   - `src/pages/index.astro` (hero claim + amenity karty) ↔ § 0.1 + Visualization_List § 1.2
   - `src/pages/ubytovani/index.astro` (sekce intros) ↔ § 1.0 + 1.1 + 1.2 intra
   - `src/pages/coworking/` ↔ § 2.x
   - `src/pages/komunita/` ↔ § 3.x
   - `src/pages/okoli/` ↔ § 4.x
   - `src/pages/doprava/` ↔ § 5.x
   - `src/pages/stipendia/` ↔ § 6.x
   - `src/pages/galerie/` ↔ § 7.x
   - `src/pages/novinky/` ↔ § 8.x
   - `src/pages/rezervace/` ↔ § 9.x (success copy, mini-FAQ, configurator field labels) — wizard cards auto z collections
   - `src/pages/kontakty/` ↔ § 10.x
3. **Aplikuj změny** v MDX a Astro souborech.
4. **Voice rule guardrails** (CopyVoice § 4.2 lock): vy/váš lowercase, bez ty form, bez em-dash, bez „v srdci", bez „objevte/ponořte se", bez duté gerundium v -ící, bez source citations Otiwilium/Bezrealitky/Compass v body textu (jen na `/metodika-srovnani/`).
5. **Imperativ pro CTA volání** (user feedback): „Bydlete tady", „Najměte si", „Rezervujte si" — ne „Bydlíte tady", „Najmete si".
6. **Sync CONTENT.md**: `cp "/Users/kindl/kindl-vault/Projects/SH_Web/SH_Web_Site_Copy.md" CONTENT.md` + frontmatter „Last sync: YYYY-MM-DD" + sync note.
7. **Verifikace**: `pnpm lint:editorial` + `pnpm build`. Žádné violations, 26 stránek.
8. **Commit** s prefixem `content(hub):` nebo `fix(hub):` a popisem co se v Site_Copy změnilo.

Pokud vault přidá novou stránku nebo amenity, řekni klientovi (potřebuje to přidat do Plan.md locked sitemap + Astro routy + nav).

**Open na ostrý launch:**
- Deploy Cloudflare Worker (`worker/`): `wrangler login` → `d1 create` → secrets (TURNSTILE_SECRET, RESEND_API_KEY, NOTIFY_EMAIL) → `wrangler deploy` → custom domain `form.startovacihub.cz`. Detail v `worker/README.md`.
- Phase 5b: front-end napojit `/rezervace/` submit na Worker endpoint + Turnstile widget. Aktuálně `console.log(payload)` + success state.
- Tier A render produkce Hugo pro hero rotaci + amenity karty (16 placeholder slotů na landing, 9 hero placeholderů per format).
- IČO + telefon a další Markovy TBD (viz Plan.md ř. 37-51).
- SEO meta + JSON-LD per-page + sitemap.xml + robots.txt (Phase 6).

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
