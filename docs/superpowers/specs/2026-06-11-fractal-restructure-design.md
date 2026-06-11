# Fraktální restrukturalizace sh-web — design & handoff

Datum: 2026-06-11. Větev: `feat/fractal-restructure`. Status: schváleno klientem („jdi na to"), v implementaci.

Tento dokument je zároveň **handoff pro kodéra**, který web převezme. Popisuje princip „celý web = skoro identické landing pages" a unifikované komponenty, ze kterých se skládá.

## 1. Princip

Každá stránka (kromě ubytování-detailu, ceníku a investorských podkladů) má stejný tvar:

```
SubpageHero (užší banner, unikátní grafika + jump tlačítka na sekce)
  → N× Section (zig-zag: nadpis + popis + pod-bloky + tlačítka + média + volitelná cenová tabulka)
  → CtaBanner
  → CrossLinkPair (2 odkazy na příbuzné sekce)
```

Landing (`/`) je jediná s **videem** na pozadí; všude jinde je `SubpageHero` se statickou grafikou. Fraktál jde do hloubky: L1 (Zázemí) → L2 (Gastronomie) → L3 (detail provozu) — vždy stejný layout, mění se jen obsah, strana obrázku a typ tlačítka. Odkaz na L2/L3 může působit jako samostatná „landing page" daného provozu i při přesměrování z jiné domény.

## 2. Designový systém (postaví se jednou)

### Nová primitiva
- **`Arrow.astro`** — jednotná šipka ze dvou tahů v pravém úhlu (chevron + volitelný dřík). Props: `dir` (`right`|`down`|`left`|`up`), `size`, `weight`, `variant` (`inline`|`wide`). `currentColor`. Nahrazuje glyf `→` i lucide chevrony v CTA/odkazech/scroll-cue. CTA konverzní tlačítka (Rezervovat apartmán/lůžko, Požádat o stipendium) končí touto šipkou.
- **`Section.astro`** — zig-zag blok. Props:
  - `title` (konkrétní název, např. „Gastronomie"), `eyebrow?` (často vynechán), `lede?`
  - `blocks?: { subtitle?, text }[]` — PODNADPIS+POPIS repeater
  - `actions?: { label, href, kind: 'detail'|'reserve'|'link', variant? }[]` — tlačítka se šipkou
  - `media: GalleryImage[]` (→ `Gallery`), `mediaSide?: 'left'|'right'` (default auto-alternace dle indexu)
  - `priceTable?: PriceRow[]`
  - `hue?` (section-hue), `id?` (jump anchor), `ribbon?` (ornament on/off)
- **`PriceTable.astro`** — řádky `{ label, note?, prices: {anchor, m3?, m6?, m12?} | string }`. Použito pod sekcemi i v Ceníku. Data-driven → budoucí export PDF.
- **`FractalPage.astro`** (layout) — obalí `Base`, vykreslí `SubpageHero` (jumps auto z `sections[].id`), smyčku `Section[]`, `CtaBanner`, `CrossLinkPair`.

### Recyklováno beze změny
`SubpageHero`, `Gallery` (umí placeholdery „FOTO SE PŘIPRAVUJE"), `CtaBanner`, `CrossLinkPair`, `Icon` (lucide), `ResidentBenefits`, `Ribbon`, `RevealOnScroll`, tokeny (`tokens.css`/`kit.css`/`motion.css`/`ribbon.css`/`section-hue.css`). Bespoke `sec-feature` bloky z coworking/komunita/doprava se nahrazují `Section`.

### Úpravy globálu
- **Header** — rozbalení menu **vždy shora** (lišta zbělá, text ztmavne; mobil vyplní skoro celou obrazovku). Nové nav položky. Opravit kontrast (křížek hamburgeru viditelný i na bílé). Odstranit únik double-stroke focus ringu na chip Rezervace.
- **Footer** — doplnit 3 konverzní CTA (Rezervovat apartmán / lůžko / Požádat o stipendium) se šipkou. Zesvětlit mapu. 2 sloupce na mobilu (odkazy + kontakt vedle sebe).
- **FloatingAction** — opravit kontrast scroll-up šipky na bílém pozadí.
- **Hero (landing)** — kratší claim, „na prahu metropole", zmínit energie+internet v ceně, NE doslova „15 min od metra". Větší CTA tlačítka u videa.

## 3. Informační architektura

Top-level menu: **Ubytování · Zázemí · Doprava · Stipendia · Galerie · Ceník · Novinky** + chip Rezervace (+ později Přihlásit se).

```
/                          landing (video hero + zig-zag: Ubytování · Zázemí · Doprava · Stipendia + náhledy Galerie/Ceník/Novinky)
/ubytovani/                L1: Privátní apartmány · Sdílené pokoje · Ubytovací zázemí · Ubytovací služby
  /ubytovani/privatni/             L2: zig-zag 5 apartmánů
  /ubytovani/privatni/<slug>/      L3: 1kk–5kk (popis + Detail + Rezervace)
  /ubytovani/sdilene-pokoje/       L2: zig-zag 6 variant
  /ubytovani/sdilene-pokoje/<slug>/  L3: 6 variant
/zazemi/                   L1: Gastronomie · Wellness & Spa · Coworking · Komunitní centrum · Ostatní zázemí · Okolí areálu
  /zazemi/gastronomie/     L2 zig-zag (9 provozů)
  /zazemi/wellness/        L2 (7 provozů)
  /zazemi/coworking/       L2 (10 provozů)
  /zazemi/komunita/        L2 (10 provozů + tichý blok družstva)
  /zazemi/ostatni/         L2 (4 provozy)
  /zazemi/okoli/           L2 (8 skupin; Leaflet mapa zůstává)
/doprava/                  L1: Sdílená mobilita · Privátní mobilita (bez L3)
/stipendia/                L1: Pobytová · Projektová · Nadace VPD
/galerie/                  vrácena — náhledy po kategoriích
/cenik/                    speciál mimo zig-zag (všechny formáty vč. nových variant; struktura pro PDF)
/novinky/                  placeholder (blog teaser)
/rezervace/                přepis (viz §5)
/kontakty/ /faq/ /gdpr/ /metodika-srovnani/ /404   beze změny
/druzstvo/                 skrytá, ponechána
```

`/ubytovani/co-living/` → archiv, nahrazuje `/ubytovani/sdilene-pokoje/`. Pojem „co-living" mizí z produktové vrstvy (celý kampus je co-living).

## 4. Data-driven strom (Content Collections)

- `apartmany` (5) — beze změny schématu.
- `coliving` → **`sdilene-pokoje`** (6 viditelných variant). Mapování:
  | nový soubor | varianta | zdroj |
  |---|---|---|
  | `luzko-basic` | Lůžko ve sdíleném pokoji | `pokoj-basic` |
  | `dvojluzko-basic` | Dvojlůžko ve sdíleném pokoji | **NOVÝ** (cena flag) |
  | `luzko-privacy` | Lůžko se zvýšeným soukromím | `pokoj-privacy` |
  | `dvojluzko-privacy` | Dvojlůžko se zvýšeným soukromím | `dvouluzko` (re-frame) |
  | `kapsle-single` | Kapslové lůžko | `kapsle-single` |
  | `kapsle-double` | Kapslové dvojlůžko | `kapsle-double` |
  `jedno-luzko` (hidden, redundantní) → archiv.
- **NOVÁ kolekce `zazemi`** — JSON/MDX soubor per kategorie (6), každý nese `items[]` (`name`, `slug`, `lede`, `blocks[]`, `images[]`, `bookable`, `detail`, `price?`, `order`, `flags[]`). Stránky `/zazemi/*` se renderují smyčkou přes data → přidat provoz = editovat data, ne psát stránku.
- `faq`, `org` — beze změny.

## 5. Rezervace (přepis)

1. **Rozcestník**: 3 velké primární CTA (Rezervovat apartmán / lůžko / Požádat o stipendium) nahoře. Pod nimi grid **všeho ostatního rezervovatelného** (cowork sál, fixní stůl, dílna, sauna, kuchyně, zasedačka, grilovací místo, společenský sál, doprava, sklad, parking…) s ikonou. Klik → „zatím jen pro přihlášené" → „připravujeme". Slepé, ale připravené.
2. **3-krokový tok** (format → termín → kontakt → poděkování), prefill `?typ=`. Desktop zachová náhledy ubytování. Tlačítko ZPĚT vlevo, číslovky vpravo. Opravit focus ring.
3. **Post-submit upsell** — doplňující otázky po jedné (výměna prádla: jak často + kolik → živá cena; parking; sklad; sklep; cowork stůl; sauna; snídaně/donáška; concierge; právo prodloužit…), interaktivní cenový náhled. Sbírá zájem, bez backendu (open loop).

## 6. Ceny — POZOR (otevřené)

- **Rozpor**: MDX kotvy ≠ uzamčená tabulka v CLAUDE.md (1+kk: MDX 10 000 vs locked 9 500; podobně dál). **Needělat tichou změnu uzamčených cen.** Zobrazení sjednotit po potvrzení klientem; do té doby flag.
- Nová varianta „dvojlůžko ve sdíleném pokoji bez soukromí" nemá cenu → orientační + viditelný flag „k potvrzení".
- Komparace vůči Praze jen v sekundárním social-proof pruhu s odkazem na `/metodika-srovnani/`.

## 7. Voice

Lowercase vy/váš, bez ty-formy, bez em-dash/en-dash/výpustky (`!` povolen), bez hype, imperativ v CTA. Ověření: `pnpm lint:editorial && pnpm lint:links && pnpm build`. Počet stránek vyroste z 23 na ~40+.

## 8. Fáze implementace

- [ ] **F0 Foundation** — `Arrow`, `Section`, `PriceTable`, `FractalPage`; přepis Header/Footer/FloatingAction/hero; kolekce (`sdilene-pokoje` rename + `dvojluzko-basic`, nová `zazemi`); nav IA.
- [ ] **F1 Landing** — video hero text, 6 dlaždic na nové sekce, zig-zag Ubytování (2 srovnávací tabulky) · Zázemí · Doprava · Stipendia + náhledy Galerie/Ceník/Novinky, footer CTA.
- [ ] **F2 Strom** — `/ubytovani/` + `privatni`/`sdilene-pokoje` (L2+L3); `/zazemi/` + 6 L2; `/doprava/`; `/stipendia/`; `/galerie/`; `/novinky/`; `/cenik/` (vč. nových variant).
- [ ] **F3 Rezervace** — rozcestník + grid + 3-krok + post-submit upsell.
- [ ] **F4 Review & build** — lints, build, adversariální review, oprava kontrastu/responzivity.

## 9. Otevřené otázky pro klienta (flagy, ne blokery)

- Ceny: MDX vs uzamčená tabulka — co je kanonické?
- Cena „dvojlůžko bez soukromí".
- Družstva (Alt/Altstav) — zatím tichý info blok v `/zazemi/komunita/`, k potvrzení s Markem.
- Nadace VPD donátorská větev — startovacihub.cz vs vepde.com.
- Novinky — veřejné vs jen pro přihlášené.
- „24h provoz" kyvadlovky/taxi a tramvaj — formulováno jako výhled.
- Reálné minutáže okolí a cyklostezky — ověřit.
