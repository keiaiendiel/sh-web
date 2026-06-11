# sh-web — CLAUDE.md

Operativní handoff pro budoucí Claude sessions. Tenhle soubor se načítá do každé konverzace, ať je krátký. Technický popis (stack, build, deploy, DNS cutover) žije v `README.md`.

## Co to je

Statický web Startovacího Hubu Klecany pro OSA II, z.s. Auto-deployed na GitHub Pages, kanonická doména `startovacihub.cz` po DNS cutoveru. Konverzní funnel pro nezávazné rezervace 9 typů ubytování (5 privátních apartmánů 1+kk až 5+kk + 4 co-living varianty kapsle/lůžka). Investor surface žije v sourozeneckém repu `vpd-web`, sem se z hubu odkazuje jen z patičky.

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections, Zod-validated: `apartmany`, `coliving`, `faq`, `org` |
| Styling | Vanilla CSS s tokens v `src/styles/`. Plum accent `#5A2A5F`, `--radius-input: 7px` |
| Fonts | Self-hosted Atyp Special WOFF2 v `public/fonts/` |
| Client JS | Inline `<script is:inline>` islands, žádný bundle |
| Map | Leaflet 1.9.4 (CDN unpkg) + CARTO Voyager tiles, jen `/okoli/` a footer |
| Deploy | GH Pages, `base: '/sh-web/'` (transitional). CI: `.github/workflows/deploy-pages.yml` |
| Form backend | Cloudflare Worker v `worker/` (Turnstile + Resend + D1 EU), deploy pending |

## Fraktální systém (od 2026-06-11, větev feat/fractal-restructure)

Web byl přestavěn na fraktální vzor: **každá stránka = `SubpageHero` → N× `Section` (zig-zag) → `CtaBanner` → `CrossLinkPair`**. Video na pozadí jen na `/`. Plný spec + handoff: `docs/superpowers/specs/2026-06-11-fractal-restructure-design.md`.

**Unifikované komponenty (postaveny jednou, používej je):** `Arrow.astro` (jednotná šipka ze 2 tahů, nahrazuje glyf →), `Section.astro` (zig-zag blok: title/lede/blocks/actions/media/priceRows), `PriceTable.astro`, `FractalPage.astro` (layout, který skládá celý vzor + auto-alternuje strany). Recyklováno: `SubpageHero`, `Gallery`, `CtaBanner`, `CrossLinkPair`, `Icon`, `ResidentBenefits`, `Ribbon`.

**Strom zázemí je data-driven** přes kolekci `zazemi` (6 JSON souborů per kategorie). Přidat provoz = editovat data, ne psát stránku. `/zazemi/[category].astro` renderuje L2 smyčkou přes `items`.

**Co-living jako dělící pojem ZRUŠEN.** Kolekce `coliving` → `sdilenePokoje` (6 variant). Dělení jen: Privátní apartmány vs Sdílené pokoje.

## Pages (~33)

```
/                              landing (video hero + 6 dlaždic + zig-zag: Ubytování/Zázemí/Doprava/Stipendia + Galerie/Ceník/Novinky teaser)
/ubytovani/                    L1: 2 srovnávací tabulky (sdílené + privátní) + ubytovací zázemí/služby
/ubytovani/privatni/           L2 overview + /ubytovani/privatni/<slug>/ (1kk–5kk) L3 detail
/ubytovani/sdilene-pokoje/     L2 overview + /<slug>/ L3 detail (pokoj-basic, dvojluzko-basic, pokoj-privacy, dvouluzko, kapsle-single, kapsle-double)
/zazemi/                       L1: 6 kategorií → /zazemi/{gastronomie,wellness,coworking,komunita,ostatni,okoli}/ L2 (data-driven)
/doprava/                      L1: sdílená + privátní mobilita (bez L3)
/stipendia/                    L1: pobytová, projektová, Nadace VPD
/galerie/                      náhledy po kategoriích
/cenik/                        speciál mimo zig-zag (6 variant + 5 apartmánů + coworking + doplňky)
/novinky/                      placeholder
/rezervace/                    rozcestník (3 CTA + grid rezervovatelného zázemí, login-only) → 3-krok wizard
/kontakty/, /faq/, /gdpr/, /metodika-srovnani/
/druzstvo/                     SKRYTÁ (noindex)
/404
```

Staré bespoke stránky (`/coworking/`, `/komunita/`, `/okoli/`, `/kapsle/`) jsou v `_archive/pages/` (nahrazeno `/zazemi/*`).

## Audience & voice

- **Primární persona:** pracující studenti, OSVČ, mladí kreativci, začínající podnikatelé.
- **Voice:** komunita + kreativa + pragmatic value. Lowercase „vy/váš", bez „ty" formy.
- **Hook:** „Bydlení 15 minut autobusem od metra Kobylisy", levnější než centrum.
- **Konverzní funnel:** hero → RoomCard → `/rezervace/` → telefon do 24 h.

## Pricing (uzamčeno 2026-05-12)

Anchor cena za celou jednotku, 3-tier slevy (3+ / 6+ / 12+ měs). Karty + detail pages zobrazují jen anchor, slevy žijí v MDX frontmatteru ale display ignore — komunikuje se „pro pobyt s právem prodloužit počítejte 5–10 % nad anchor".

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

**Vše v ceně bydlení:** energie, internet, úklid společných prostor, **5 jízd Hub-shuttle do metra Kobylisy měsíčně**, **1 jízda Hub-taxi lokálně měsíčně**, přístup do coworkingového sálu (volný stůl), poukaz do sauny 1× týdně. Další shuttle/taxi za zvýhodněnou sazbu.

Coworking ceny: viz `src/pages/coworking/index.astro` (5 tarifů, vč. sál 2 900 Kč/měs zdarma rezidentům, fixní stůl 4 200 Kč, kancelář pro 4 15 000 Kč, zasedačka 350 Kč/hod, ateliér 6 500 Kč/měs, dílna 490 Kč/měs + 150 Kč/hod CNC).

**Komparativní tvrzení vůči Praze** žijí jen v sekundárním social-proof pruhu, nikdy v body textu, vždy s odkazem na `/metodika-srovnani/` (§ 2980 OZ).

## Reservation flow

`/rezervace/` je 5-step wizard (Phase 5 hotový), vanilla JS state machine inline v `<script>`:

1. Koncept (privátní / co-living / „nevím, poradíme").
2. Konfigurace prostoru (radio karty per koncept, data z collections).
3. Termín + stipendium toggle.
4. Kontakt (telefon povinný).
5. Rekapitulace + GDPR.

Sidebar dynamicky počítá cenu podle vybraného formátu + délky a zobrazuje „vše v ceně" checklist. URL pre-fill `/rezervace/?typ=<slug>` z RoomCard tlačítek. Submit aktuálně `console.log(payload)` + success state — backend wiring (Worker endpoint + Turnstile widget) je open loop.

Voice principle: prezentovat sebevědomě jako fungující, site-wide badge „V projektové přípravě" v headeru neutralizuje vábivou reklamu podle Přílohy č. 1 písm. d) ZOOS, ne per-amenity disclaimery.

## Vault → repo sync workflow

Klient pracuje v `/Users/kindl/kindl-vault/Projects/SH_Web/`. Master copy zdroj je `SH_Web_Site_Copy.md` (~83 KB). Když ho klient edituje, postup:

1. Re-read `SH_Web_Site_Copy.md`. Pokud zmíní strukturální nebo cenovou změnu, taky `SH_Web_Plan.md`.
2. Aplikovat změny v Astro souborech podle mapování:

   | Vault § | Repo |
   |---|---|
   | § 0.x | `src/pages/index.astro` (hero claim, amenity karty) |
   | § 1.1.x | `src/content/apartmany/*.mdx` (5 souborů) + `/ubytovani/` intro |
   | § 1.2.x | `src/content/coliving/*.mdx` (4 soubory) + `/ubytovani/` intro |
   | § 2.x | `src/pages/coworking/` |
   | § 3.x | `src/pages/komunita/` |
   | § 4.x | `src/pages/okoli/` |
   | § 5.x | `src/pages/doprava/` |
   | § 6.x | `src/pages/stipendia/` |
   | § 9.x | `src/pages/rezervace/` (success copy, mini-FAQ, field labels) |
   | § 10.x | `src/pages/kontakty/` |
   | § A.x | `src/content/faq/index.json` |

3. Voice guardrails (CopyVoice § 4.2): lowercase vy/váš, žádné ty-form, žádný em-dash, žádné „v srdci / objevte / ponořte se", žádné -ící duté gerundium. Source citations (Otiwilium, Bezrealitky, Compass) jen na `/metodika-srovnani/`.
4. Imperativ pro CTA: „Bydlete tady" / „Najměte si" / „Rezervujte si", ne „Bydlíte tady" / „Najmete si".
5. Verifikace: `pnpm lint:editorial && pnpm build`. Žádné violations, 23 stránek.
6. Commit s prefixem `content(hub):` nebo `fix(hub):`.

Pokud vault přidá novou stránku / amenity, řekni klientovi (musí přidat do Plan.md locked sitemap + Astro route + nav).

## Running locally

```bash
pnpm install
pnpm dev        # http://localhost:4321 (or 4322 via .claude/launch.json)
pnpm build
pnpm preview
```

## Lints (CI runs all three)

```bash
pnpm lint:editorial   # voice/style, scripts/lint-editorial.mjs
pnpm lint:links       # external URL HEAD check
pnpm lint:weight      # per-page eager-weight budget against dist/
```

`lint:editorial` zakazuje passive voice, marketingový hype, legalese, em-dash, en-dash, ellipsis (mimo locked motto). `!` je povolený.

## Image pipeline

```bash
pnpm migrate:images    # one-shot import z externí složky
pnpm optimize:images   # >600 KB → q=80 mozjpeg, max edge 1600 px, .png → .jpg
```

Klientovy nové fotky landují v `_incoming/` (gitignored staging) nebo jako `==REPO: …==` anotace ve vault `Visualizations/`. Workflow: `cp` do `public/images/hub/<sekce>/`, `pnpm optimize:images`, update reference v relevantní Astro stránce nebo Gallery slot.

## Pushing to GitHub

`master` je deploy branch — každý push triggeruje `deploy-pages.yml` (lint + build + `actions/deploy-pages@v4`, ~2 min).

```bash
git status
git add <konkrétní soubory>            # nikdy git add -A
git commit -m "feat(hub): describe what+why"
git push origin master
```

Prefixy: `feat(hub):`, `fix(hub):`, `refactor(hub):`, `docs(hub):`, `content(hub):`, `style(hub):`, `ci(hub):`, `chore(hub):`.

## Open loops

- **Cloudflare Worker deploy** — `worker/wrangler.toml` má placeholdery `REPLACE_WITH_D1_ID`. Postup v `worker/README.md`.
- **Frontend wiring formuláře** — `/rezervace/` aktuálně `console.log(payload)`. Po Worker deploy připojit `fetch` na `https://form.startovacihub.cz/submit` + Turnstile widget.
- **DNS cutover na `startovacihub.cz`** — postup v `README.md`. Otevřená otázka klienta.
- **Produkční fotky** — některé Gallery sloty drží placeholdery (plum-tinted box + „FOTO SE PŘIPRAVUJE" badge). Klient postupně doplňuje přes vault `Visualizations/` + `_incoming/`.
- **Otevřené otázky pro Marka** (per vault Plan.md): Hub-shuttle provozovatel, advokát na smluvní šablony (§ 2235 + § 2326 OZ), pojmenovaní rezidenti pro launch, kapacita Hubu v lůžkách, domain timing.
- **E-mail doména** — JSON-LD odkazuje na `alternativa2.info`, e-maily zatím na `osa2.cz`. Operátor potvrdí samostatně.

## Don't read these (token traps)

- `dist/` (build output)
- `.astro/` (generated types)
- `node_modules/`, `pnpm-lock.yaml`
- `worker/node_modules/`
