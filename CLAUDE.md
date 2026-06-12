# sh-web — CLAUDE.md

Operativní handoff pro budoucí Claude sessions. Tenhle soubor se načítá do každé konverzace, ať je krátký. Technický popis (stack, build, deploy, DNS cutover) žije v `README.md`.

## Co to je

Statický web Startovacího Hubu Klecany. Provozuje Občanské sdružení Alternativa II, z.s. (potvrzeno 2026-06-12), na webu komunikováno brandem „Startovací Hub". **MyShelter** je brand celého kampusu (hero pod-slogan „MyShelter · coliving & coworking space") i kyvadlové dopravy; bydlení „ve správě družstva Altstav". **Hero motto: „Žijte, milujte & tvořte!"** (dle klientské tabulky Koncept webu, 12. 6. 2026). „Coliving" je zastřešující pojem kampusu (všichni něco sdílejí), produktové dělení zůstává Privátní apartmány vs Sdílené pokoje. Auto-deployed na GitHub Pages, kanonická doména `startovacihub.cz` po DNS cutoveru. Konverzní funnel pro nezávazné rezervace **11 formátů ubytování: 5 privátních apartmánů 1+kk až 5+kk + 6 sdílených pokojů** (lůžko/dvojlůžko ve třech stupních soukromí: základní bez příček, zvýšená = lůžkový box, vysoká = uzamykatelná kapsle). Investor surface žije v sourozeneckém repu `vpd-web`, sem se z hubu odkazuje jen z patičky.

**Kanonický zdroj struktury webu** je klientská Excel tabulka „Koncept webu (aktuální)" (Záměr VPD1, list 5): fraktální mapa, hloubka uzlu = sloupec (úrovně 0 až 7, využito 0 až 4), hranaté závorky = meta-anotace (publikum, CTA, fakta, cross-linky). Synchronizováno 12. 6. 2026.

**Strategie copy (rozhodnutí klienta 12. 6. 2026): vše píšeme sebevědomě v přítomném čase, jako by už fungovalo** (24h provozy, tramvaj, linky se zastávkami, výdejní boxy s partnery). Právní neutralizaci řeší site-wide badge „V projektové přípravě" v patičce, ne per-amenity disclaimery. Výjimka: neznámé ceny smí mít „ceny doplníme".

## Stack snapshot

| | |
|---|---|
| Framework | Astro 6.1.8, static output |
| Content | Astro Content Collections, Zod-validated: `apartmany`, `sdilenePokoje`, `zazemi` (data-driven strom), `novinky` (MDX články), `faq`, `org` |
| Styling | Vanilla CSS s tokens v `src/styles/`. Plum accent `#5A2A5F`, `--radius-input: 7px` |
| Fonts | Self-hosted Atyp Special WOFF2 v `public/fonts/` |
| Client JS | Inline `<script is:inline>` islands, žádný bundle |
| Map | Leaflet 1.9.4 (CDN unpkg) + CARTO Voyager tiles, jen footer (mapa na `/zazemi/okoli/` je open loop) |
| Deploy | GH Pages, `base: '/sh-web/'` (transitional). CI: `.github/workflows/deploy-pages.yml` |
| Form backend | Cloudflare Worker v `worker/` (Turnstile + Resend + D1 EU), deploy pending |

## Fraktální systém (od 2026-06-11, větev feat/fractal-restructure)

Web byl přestavěn na fraktální vzor: **každá stránka = `SubpageHero` → N× `Section` (zig-zag) → `CtaBanner` → `CrossLinkPair`**. Video na pozadí jen na `/`. Plný spec + handoff: `docs/superpowers/specs/2026-06-11-fractal-restructure-design.md`.

**Unifikované komponenty (postaveny jednou, používej je):** `Arrow.astro` (jednotná šipka ze 2 tahů, nahrazuje glyf →), `Section.astro` (zig-zag blok: title/lede/blocks/actions/media/priceRows), `PriceTable.astro`, `FractalPage.astro` (layout, který skládá celý vzor + auto-alternuje strany). Recyklováno: `SubpageHero`, `Gallery`, `CtaBanner`, `CrossLinkPair`, `Icon`, `ResidentBenefits`, `Ribbon`.

**Strom zázemí je data-driven** přes kolekci `zazemi` (6 JSON souborů per kategorie). Přidat provoz = editovat data, ne psát stránku. `/zazemi/[category].astro` renderuje L2 smyčkou přes `items`.

**Coliving = zastřešující pojem kampusu** (rehabilitován 2026-06-12: všichni něco sdílejí, ne nutně pokoj). Produktové dělení zůstává: Privátní apartmány vs Sdílené pokoje (kolekce `sdilenePokoje`, 6 variant ve 3 stupních soukromí).

## Pages (~41)

```
/                              landing (video hero „Žijte, milujte & tvořte!" + 6 dlaždic + zig-zag: Ubytování/Zázemí/Doprava/Stipendia + Galerie/Ceník teaser)
/ubytovani/                    L1: 2 srovnávací tabulky (sdílené + privátní) + ubytovací zázemí/služby
/ubytovani/privatni/           L2 overview + /ubytovani/privatni/<slug>/ (1kk až 5kk) L3 detail
/ubytovani/sdilene-pokoje/     L2 overview + /<slug>/ L3 detail (pokoj-basic, dvojluzko-basic, pokoj-privacy, dvouluzko, kapsle-single, kapsle-double)
/zazemi/                       L1: 6 kategorií → /zazemi/{gastronomie,wellness,coworking,komunita,ostatni,okoli}/ L2 (data-driven; komunita obsahuje i 6 veřejných družstevních entit Alt/Altstav/Alterstav)
/doprava/                      L1: sdílená + privátní mobilita → L2 [branch].astro skládá ručně (kvůli DepartureBoard); doprava.json má `sections` s úrovní 4 (3 linky MyShelter se zastávkami, MHD zastávky, půjčovna, taxi)
/stipendia/                    L1: pobytová, projektová, Nadace VPD (CTA: požádat per program + donátor/sponzor/správní rada, mailto)
/galerie/                      6 kategorií dle tabulky: Privátní apartmány, Sdílené pokoje, Co-livingové zázemí, Co-workingové zázemí, Sdílená mobilita, Okolí areálu
/cenik/                        speciál mimo zig-zag (6 variant + 5 apartmánů + coworking + doplňky)
/novinky/                      kolekce novinky (MDX) → listing + /novinky/<slug>/ detail (ArticleImage v MDX); veřejné náhledové články, žádný gate
/rezervace/                    rozcestník (3 hlavní volby + barevný icon-grid všeho rezervovatelného vč. dopravy, ?zazemi=<slug> prefill, login-only stub) → wizard → post-submit dotazník doplňků s živou orientační cenou
/kontakty/, /faq/, /gdpr/, /metodika-srovnani/
/druzstvo/                     SKRYTÁ (noindex)
/404
```

Staré bespoke stránky (`/coworking/`, `/komunita/`, `/okoli/`, `/kapsle/`) + mrtvé komponenty (`RoomCard`, `QuickReserveCtas`, `Ribbon`) byly odstraněny; dohledatelné v git historii (commity `feat(hub): foundation` … `archiv starých stránek`). `/zazemi/okoli/` zatím nemá Leaflet mapu, kterou mělo staré `/okoli/`.

## Audience & voice

- **Primární persona:** pracující studenti, OSVČ, mladí kreativci, začínající podnikatelé.
- **Voice:** komunita + kreativa + pragmatic value. Lowercase „vy/váš", bez „ty" formy.
- **Hook:** hero motto „Žijte, milujte & tvořte!" + pod-slogan „MyShelter · coliving & coworking space" (oddělovač středová tečka, NE pomlčka , en-dash je lint-banned). Energie a internet v ceně, 15 min od metra , v body textu, ne v hero.
- **Konverzní funnel:** hero (3 CTA v pořadí apartmán → lůžko → stipendium) → srovnávací tabulky / zig-zag → `/rezervace/` → telefon do 24 h → post-submit dotazník doplňků.
- **Menu pořadí:** Ubytování, Zázemí, Stipendia, Doprava, Galerie, Ceník, Novinky (Stipendia PŘED Dopravou, dle tabulky). Header CTA jednotně „Rezervace" (preference klienta, desktop i mobil).

## Pricing

⚠️ **Živý zdroj cen = MDX frontmattery v `src/content/{apartmany,sdilene-pokoje}/*.mdx`** (a coworking/doplňky v `src/pages/cenik/index.astro`). Tabulka níže je historická („uzamčeno 2026-05-12") a **liší se** od MDX (např. 1+kk: MDX 10 000 vs tabulka 9 500; kapsle-single MDX 4 000 vs tabulka 3 000). **Sjednocení = open loop**, klient potvrdí kanonický zdroj. Nová varianta `dvojluzko-basic` (Dvojlůžko ve sdíleném pokoji bez soukromí) má cenu **orientační + flag `pricePending`**.

6 sdílených variant (názvy s tier mírou soukromí, od 2026-06-12): `pokoj-basic` (Lůžko ve sdíleném pokoji se základní mírou soukromí), `dvojluzko-basic` (Dvojlůžko ... se základní mírou, orientační cena), `pokoj-privacy` (Lůžko ... se zvýšenou mírou), `dvouluzko` (Dvojlůžko ... se zvýšenou mírou , POZOR: koncept změněn z „celý pokoj v patrovém bytě" na dvojlůžkový box s příčkami ve sdíleném pokoji), `kapsle-single` (Kapslové lůžko s vysokou mírou), `kapsle-double` (Kapslové dvojlůžko s vysokou mírou).

**Kapacity apartmánů (od 2026-06-12, dle tabulky): až 3 OSOBY na ložnici** , 1+kk až 3, 2+kk až 6, 3+kk až 9, 4+kk až 12, 5+kk až 15. Standardně dvě lůžka na ložnici, třetí na vyžádání. `kapacita` v MDX = max osob (NE lůžek), perOsoba = anchor/kapacita zaokrouhleno na desítky nahoru.

Anchor cena za celou jednotku, 3-tier slevy (3+ / 6+ / 12+ měs). Karty + detail pages zobrazují jen anchor.

**Historická tabulka (2026-05-12):**

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

**Vše v ceně bydlení:** energie, internet, úklid společných prostor, **5 jízd kyvadlové dopravy MyShelter do metra Kobylisy měsíčně**, **1 jízda sdíleného taxi lokálně měsíčně**, přístup do coworkingového sálu (volný stůl), poukaz do sauny 1× týdně. Další jízdy za zvýhodněnou sazbu. (Pojmy „Hub-shuttle"/„Hub-taxi" byly 2026-06-12 přejmenovány na „kyvadlová doprava MyShelter"/„sdílené taxi" napříč webem; cesty k obrázkům zůstaly.)

Coworking ceny + doplňky: viz `src/pages/cenik/index.astro` (sál 2 900 Kč/měs zdarma rezidentům, fixní stůl 4 200 Kč, kancelář pro 4 15 000 Kč, zasedačka 350 Kč/hod, ateliér 6 500 Kč/měs, dílna 490 Kč/měs + 150 Kč/hod CNC). Klient chce všechny ceny ověřit (open loop).

**Komparativní tvrzení vůči Praze** žijí jen v sekundárním social-proof pruhu, nikdy v body textu, vždy s odkazem na `/metodika-srovnani/` (§ 2980 OZ).

## Reservation flow

`/rezervace/` (vanilla JS state machine inline v `<script>`), redesign 2026-06-12:

1. **Stabilní šířka:** kontejner `.rez` má KONSTANTNÍ max-width (760/1200 px), žádné animované změny šířky mezi kroky (klient to explicitně nechtěl).
2. **Rozcestník** (panel „koncept"): 3 hlavní volby (privátní apartmán / sdílené pokoje / stipendium) + pod nimi **barevný icon-grid všeho rezervovatelného** (`reservableGroups`: skupiny Zázemí ~19 položek + Doprava 9 položek vč. elektrolongboardu a onewheelu, hue paletka 25/50/130/200/240) , klik → „zatím jen pro přihlášené, připravujeme" (login-only stub, `data-reserve-locked`). Prefill `?zazemi=<slug>` zvýrazní dlaždici (CTA z doprava/zazemi stránek sem vedou).
3. **Wizard**: format → termín → kontakt → success. Auto-advance po výběru. Prefill `?typ=<slug>` a `?cesta=apartman|luzko|stipendium`.
4. **Post-submit dotazník** (`surveyQuestions`, 10 otázek): jedna otázka na obrazovku (úklid, prádlo, praní, donáška, zahrádka, fixní stůl, sklad, parkování, jízdy MyShelter, mazlíček), živý součet orientační ceny v tickeru, Přeskočit/Zpět, na konci shrnutí + grid dalších rezervací. Ceny doplňků jsou ORIENTAČNÍ (klient potvrdí). Staticky renderované fieldsety (Astro scoped styles), JS jen přepíná.

Submit aktuálně success state bez backendu — Worker endpoint + Turnstile je open loop. Odpovědi dotazníku se zatím nikam neposílají (frontend-ready pro Worker payload).

Voice principle: prezentovat sebevědomě jako fungující, badge „V projektové přípravě" v patičce neutralizuje vábivou reklamu (Příloha č. 1 písm. d) ZOOS), ne per-amenity disclaimery.

## Vault → repo sync workflow

Klient pracuje v `/Users/kindl/kindl-vault/Projects/SH_Web/`. Master copy zdroj je `SH_Web_Site_Copy.md` (~83 KB). Když ho klient edituje, postup:

1. Re-read `SH_Web_Site_Copy.md`. Pokud zmíní strukturální nebo cenovou změnu, taky `SH_Web_Plan.md`.
2. Aplikovat změny v Astro souborech podle mapování:

   | Vault § | Repo |
   |---|---|
   | § 0.x | `src/pages/index.astro` + `src/data/landing.json` (hero, tabulky, zázemí/služby) |
   | § 1.1.x | `src/content/apartmany/*.mdx` (5 souborů) |
   | § 1.2.x | `src/content/sdilene-pokoje/*.mdx` (6 souborů) |
   | § 2.x (coworking) | `src/content/zazemi/coworking.json` |
   | § 3.x (wellness/komunita) | `src/content/zazemi/{wellness,komunita}.json` |
   | § 4.x (okolí) | `src/content/zazemi/okoli.json` |
   | gastro / ostatní | `src/content/zazemi/{gastronomie,ostatni}.json` |
   | § 5.x | `src/data/doprava.json` (+ `src/pages/doprava/`) |
   | § 6.x | `src/data/stipendia.json` (+ `src/pages/stipendia/`) |
   | § 9.x | `src/pages/rezervace/` (success copy, field labels) |
   | § 10.x | `src/pages/kontakty/` |
   | § A.x | `src/content/faq/index.json` |

3. Voice guardrails (CopyVoice § 4.2): lowercase vy/váš, žádné ty-form, žádný em-dash, žádné „v srdci / objevte / ponořte se", žádné -ící duté gerundium. Source citations (Otiwilium, Bezrealitky, Compass) jen na `/metodika-srovnani/`.
4. Imperativ pro CTA: „Bydlete tady" / „Najměte si" / „Rezervujte si", ne „Bydlíte tady" / „Najmete si".
5. Verifikace: `pnpm lint:editorial && pnpm lint:links && pnpm lint:weight && pnpm build`. Žádné violations, 41 stránek. Po editaci obrázků zkontroluj, že cesty existují v `public/` (časté 404 na špatných cestách).
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

- **Ceny k ověření** — sjednotit MDX vs historickou tabulku (viz Pricing); cena `dvojluzko-basic` (orientační); ověřit coworking tarify a doplňky v ceníku; **orientační ceny doplňků v post-submit dotazníku** (úklid 300/800/1400, prádlo 200/350, praní 600, donáška 500/900, zahrádka 150/300, sklad 400/900, jízdy 500/900 Kč) jsou navržené na míru, klient potvrdí.
- **Frontend wiring formuláře** — `/rezervace/` ukáže success bez backendu. Po Worker deploy připojit `fetch` na `https://form.startovacihub.cz/submit` + Turnstile + payload dotazníku doplňků. Sekundární „rezervace zázemí/dopravy" jsou login-only stuby (sběr zájmu, bez backendu).
- **Cloudflare Worker deploy** — `worker/wrangler.toml` má placeholdery `REPLACE_WITH_D1_ID`. Postup v `worker/README.md`.
- **DepartureBoard → živá data** — widget odjezdů na `/doprava/sdilena-mobilita/` počítá z statického jízdního řádu client-side; kodér později napojí PID Golemio API (kontejner má `data-api="pid-golemio"`, zastávky `data-stop-id`).
- **Mapa na `/zazemi/okoli/`** — staré `/okoli/` mělo Leaflet mapu; data-driven verze ji zatím nemá (footer mapu má). Dohledat starou v git historii.
- **Produkční fotky** — řada Gallery/PhotoGrid slotů drží placeholdery („FOTO SE PŘIPRAVUJE"). Doplňovat přes `public/images/hub/<sekce>/` + `pnpm optimize:images`. Hero video ověřit vizuálně (má začínat dronem s Pražským hradem i areálem v jednom záběru, dle tabulky).
- **Novinky** — kolekce `novinky` se 6 náhledovými MDX články funguje (listing + detaily). Reálné články = nahradit/doplnit MDX v `src/content/novinky/`.
- **Minutáže** — přepočítány realisticky 2026-06-12 (cyklostezka: ZOO ~30 min, Holešovice ~40, Staromák ~50; tabulkové 10/15/20/25/29 min byly nereálné). MHD intervaly z reálné linky 374. Klient může dodat přesnější čísla.
- **Login/účty** — header „Přihlásit se" je stub; tabulka chce i „Odhlásit se" a „Přepnout účet" (fáze 2, až bude auth backend).
- **DNS cutover na `startovacihub.cz`** — postup v `README.md`.
- **E-mail doména** — JSON-LD odkazuje na `alternativa2.info`, e-maily na `osa2.cz`. Operátor potvrdí.

**Vyřešeno 2026-06-12 dle rozhodnutí klienta** (už NEJSOU open loops): hero motto + MyShelter brand; kapacity 3 os./ložnice; fakta-jako-realita (24h, tramvaj, zastávky linek, výdejní boxy s partnery); družstva zveřejněna (6 položek v komunita.json); novinky veřejné bez gate; doprava jako rezervační kategorie; „Stát se sponzorem" CTA u Nadace VPD; coliving rehabilitován jako zastřešující pojem.

## Don't read these (token traps)

- `dist/` (build output)
- `.astro/` (generated types)
- `node_modules/`, `pnpm-lock.yaml`
- `worker/node_modules/`
