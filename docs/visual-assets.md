# Vizuální materiály — Startovací Hub Klecany

Pracovní inventář všech obrázků na webu plus wishlist nových vizuálů. Stav k 2026-05-04.

Slouží jako:

1. **Mapa současného stavu** — co kde je a kde se to používá (Sekce A).
2. **Soupis nevyužitých zdrojů** — co máme připravené a co s tím udělat (Sekce B).
3. **Priority pro doplnění** — co chybí a co je P0/P1/P2 (Sekce C).
4. **Wishlist nových záběrů** — co k dispozici dat dostat (Sekce D).
5. **Konvence** — jak nové soubory pojmenovávat a kam je dávat (Sekce E).

K dispozici je nový directory tree pod `public/images/hub/` (vedle existujícího `hero/`, `exterior/`, `interior/`, `masterplan.jpg`) — viz Sekce E.

---

## Sekce A: Aktuálně použité obrázky (20 souborů, ~6,3 MB)

| # | Cesta | Velikost | Použito v | Role |
|---|---|---|---|---|
| 1 | `hero/sh-1.jpg` | 323 KB | `src/pages/index.astro:10` + `:69` | Hero rotation 1/4 + zigzag panel 1 (ltr) |
| 2 | `hero/sh-2.jpg` | 166 KB | `src/pages/index.astro:11` + `:86` | Hero rotation 2/4 + zigzag panel 3 (ltr) |
| 3 | `hero/sh-3.jpg` | 394 KB | `src/pages/index.astro:12` | Hero rotation 3/4 |
| 4 | `hero/sh-4.jpg` | 143 KB | `src/pages/index.astro:13` + `:102` | Hero rotation 4/4 + zigzag panel 5 (ltr) |
| 5 | `interior/kapsle.jpg` | 58 KB | `src/pages/index.astro:20` | Format card — Kapsle (jediná **reálná foto**) |
| 6 | `interior/interior-01.jpg` | 143 KB | `src/pages/index.astro:25` | Format card — Lůžko (stand-in) |
| 7 | `interior/interior-02.jpg` | 166 KB | `src/pages/index.astro:30` | Format card — Dvoulůžko (stand-in) |
| 8 | `interior/interior-03.jpg` | 196 KB | `src/pages/index.astro:35` | Format card — 1+kk (stand-in) |
| 9 | `interior/hub-market-evening.jpg` | 209 KB | `src/pages/index.astro:78` | Zigzag panel 2 (rtl) — Tržnice večer |
| 10 | `exterior/hub-street-sunset.jpg` | 292 KB | `src/pages/o-arealu/index.astro:13` | Hero pozadí — `/o-arealu/` |
| 11 | `exterior/hub-courtyard-night.jpg` | 371 KB | `src/pages/rezervace/index.astro:16` | Hero pozadí — `/rezervace/` |
| 12 | `exterior/hub-courtyard-trees.jpg` | 396 KB | `src/pages/index.astro:94` | Zigzag panel 4 (rtl) — Areál |
| 13 | `exterior/hub-renovated-building.jpg` | 318 KB | `src/pages/o-arealu/index.astro:82` | Gallery 4/4 na `/o-arealu/` |
| 14 | `exterior/exterior-01.jpg` | 278 KB | `src/pages/o-arealu/index.astro:79` | Gallery 1/4 na `/o-arealu/` |
| 15 | `exterior/exterior-05.jpg` | 294 KB | `src/pages/o-arealu/index.astro:80` | Gallery 2/4 na `/o-arealu/` |
| 16 | `exterior/exterior-10.jpg` | 364 KB | `src/pages/o-arealu/index.astro:81` | Gallery 3/4 na `/o-arealu/` |
| 17 | `exterior/sport.jpg` | 310 KB | `src/pages/projekty/index.astro:27` + `src/content/sub_projects/sportoviste-park.mdx:6` | Hero `/projekty/` + thumbnail Sportoviště |
| 18 | `exterior/cowork.jpg` | 323 KB | `src/content/sub_projects/coworking-centrum.mdx:6` | Thumbnail Coworking |
| 19 | `exterior/trznice-pivovar.jpg` | 244 KB | `src/content/sub_projects/komunitni-centrum.mdx:6` | Thumbnail Komunitní centrum |
| 20 | `masterplan.jpg` | 160 KB | `src/pages/index.astro:269` + `src/pages/o-arealu/index.astro:68` | Inline schéma areálu |

**Plus jeden meta zdroj:**

| # | Cesta | Použito v | Role |
|---|---|---|---|
| — | `public/og/default.png` | `src/layouts/Base.astro:23` | OG fallback pro **všechny** stránky (žádná stránka nemá vlastní OG kartu) |

---

## Sekce B: Orphan soubory (32 souborů, ~9,5 MB — připravené, nezadrátované)

Tyto soubory existují v repu, ale na žádný z nich src/ neukazuje. Jsou připravené k zadrátování — viz „navrhované použití".

### Exteriérové — `public/images/hub/exterior/`

| Cesta | Velikost | Navrhované použití |
|---|---|---|
| `exterior-02.jpg` | 285 KB | Rozšíření `/o-arealu/` gallery (z dnešních 4 → 12-15 záběrů) |
| `exterior-03.jpg` | 295 KB | Gallery |
| `exterior-04.jpg` | 267 KB | Gallery, případně pozadí amenity karty |
| `exterior-06.jpg` | 311 KB | Gallery |
| `exterior-07.jpg` | 308 KB | Gallery |
| `exterior-08.jpg` | 203 KB | Gallery |
| `exterior-09.jpg` | 244 KB | Gallery |
| `exterior-11.jpg` | 388 KB | Gallery |
| `exterior-12.jpg` | 199 KB | Gallery |
| `exterior-13.jpg` | 338 KB | Gallery |
| `exterior-14.jpg` | 284 KB | Gallery |
| `exterior-15.jpg` | 350 KB | Gallery |
| `exterior-16.jpg` | 267 KB | Gallery (duplicita s -04?) |
| `exterior-17.jpg` | 311 KB | Gallery |
| `exterior-18.jpg` | 313 KB | Gallery |
| `exterior-19.jpg` | 217 KB | Gallery |
| `exterior-20.jpg` | 362 KB | Gallery |
| `exterior-21.jpg` | 254 KB | Gallery |
| `exterior-22.jpg` | 243 KB | Gallery |
| `exterior-23.jpg` | 257 KB | Gallery |
| `exterior-24.jpg` | 254 KB | Gallery |
| `exterior-25.jpg` | 313 KB | Gallery (duplicita s -18?) |
| `exterior-26.jpg` | 239 KB | Gallery |
| `exterior-27.jpg` | 358 KB | Gallery |
| `hub-street-daytime.jpg` | 320 KB | Variantní hero pro `/o-arealu/` (denní × současná večerní) — A/B nebo seasonal swap |

### Interiérové — `public/images/hub/interior/`

| Cesta | Velikost | Navrhované použití |
|---|---|---|
| `interior-04.jpg` | 172 KB | Rozšíření format cards / gallery jednotek |
| `interior-05.jpg` | 190 KB | Format card alternativa / detail |
| `interior-06.jpg` | 182 KB | Format card alternativa / detail |
| `interior-07.jpg` | 182 KB | Format card alternativa / detail |
| `interior-08.jpg` | 172 KB | Format card alternativa / detail |
| `hub-market-daytime.jpg` | 208 KB | „Den v Hubu" timeline — denní slot (kavárna ráno / poledne) |
| `hub-market-people.jpg` | 252 KB | „Lidé / atmosféra" — společné stoly, oběd |

**Doporučení:** dříve než zadrátujeme, projít je vizuálně a vyřadit duplicity (orientačně `-04` vs. `-16`, `-18` vs. `-25` mají identický rozměr, takže pravděpodobně skoro stejný shot).

---

## Sekce C: Placeholder sloty — co potřebuje plnění

Místa v kódu, kde je očekáván obrázek, ale buď tam je stand-in, nebo úplně chybí.

### P0 — kritické, řeší to první vlna

| # | Slot | Soubor | Stav | Akce |
|---|---|---|---|---|
| 1 | Thumbnail sub-projektu Sauna & Bazén | `src/content/sub_projects/sauna-bazen.mdx` | **EMPTY** — fallback je text „Vizualizace v přípravě" | Doplnit `thumbnail:` field s reálným záběrem (vibe: hladina vody se světly, ne reklamní) |
| 2 | Thumbnail sub-projektu Komunitní pivovar | `src/content/sub_projects/komunitni-pivovar.mdx` | **EMPTY** — fallback text | Doplnit `thumbnail:` (vibe: detail tanku v měděnce, sklenice na baru) |
| 3 | Thumbnail sub-projektu Bytové družstvo | `src/content/sub_projects/bytove-druzstvo.mdx` | **EMPTY** — fallback text | Doplnit `thumbnail:` (po reframu na **Přípravné družstvo**: lidé u stolu při domluvě, dokumenty, klíče) |

### P1 — vylepšení vizuální kvality

| # | Slot | Stav | Akce |
|---|---|---|---|
| 4 | Format card — Lůžko | Stand-in (`interior-01.jpg`) | Reálný záběr lůžkového pokoje s konkrétním vybavením |
| 5 | Format card — Dvoulůžko | Stand-in (`interior-02.jpg`) | Reálný záběr dvoulůžka |
| 6 | Format card — 1+kk | Stand-in (`interior-03.jpg`) | Reálný záběr / 3D render luxusní stavební buňky 1+kk |
| 7 | `/projekty/` thumbnail Sportoviště | Sdílí `sport.jpg` s heroem `/projekty/` | Vlastní thumbnail (jiný úhel sportoviště, ne stejný jako hero) |

### P2 — nice-to-have

| # | Slot | Stav | Akce |
|---|---|---|---|
| 8 | OG karta — landing | `default.png` fallback | Vlastní OG `/og/index.png` (1200×630, sh logo + tagline) |
| 9 | OG karta — `/projekty/` | `default.png` fallback | Vlastní OG |
| 10 | OG karta — sub-projects | `default.png` fallback | Vlastní OG per sub-projekt |
| 11 | OG karta — `/rezervace/` | `default.png` fallback | Vlastní OG |
| 12 | Hero `/o-arealu/` — variantní | Aktuálně jen sunset | Denní varianta (už máme `hub-street-daytime.jpg` jako orphan — nutno jen zadrátovat) |
| 13 | Hero `/projekty/` — vlastní záběr | Sdílí `sport.jpg` | Vlastní záběr (kontextový pohled na areál s několika sub-projekty viditelnými v rámu) |

---

## Sekce D: Wishlist nových vizuálů (per kategorie)

Pro každou kategorii v novém directory tree pod `public/images/hub/` jsou zde návrhy záběrů. Není to nutný checklist — je to mapa toho, co by sedělo do voice V2 („as-if-open"). Vyber, co je k dispozici nebo čeho lze dosáhnout.

**Vibe globálně:** Ne reklamní hero shots, ale **detail-shoty s atmosférou**. Inspirace: Mokrin House (mokrinhouse.com), Outsite (outsite.co), Vnitroblock Praha. Ranní mlha, večerní světla, ruce v záběru, jeden člověk místo skupiny, prázdné stoly s knihami a kávou.

### `_nove/`
Drop zone pro neutříděné soubory. Já pak pomůžu rozdělit do kategorií, jakmile sem něco hodíš.

### `areal/`
Celkové pohledy na areál Horních kasáren — drone shoty, walk-through, architektonické detaily.

- Drone shot ráno (mlha v dolní části, slunce na střechách)
- Drone shot večer (světla v oknech, modrá hodina)
- Drone shot v zimě (sníh, barva budov vystupuje)
- Walk-through alej k hlavní budově (perspektiva chodce, low POV)
- Detail dveří / kliček / signage (architektonické textury, ne celá budova)
- Před-rekonstrukce vs. po-rekonstrukce (split / before-after, pokud existuje archiv)

### `doprava/`
Kyvadlová doprava na metro Kobylisy + ostatní mobilita.

- Bus se SH brandingem na zastávce „Klecany — Hub" (může být placeholder bus s vinylem)
- Interiér busu, ranní lidé s kafí, dělají si práci na laptopu
- Bus zastávka „Kobylisy" (metro výstup) ráno — někdo nastupuje
- Sdílená kola na stojanu před hlavní budovou
- Parking pro hosty (denní — kdy je provoz, večerní — prázdný)

### `formaty/kapsle/`
Reálná foto **už je** v `interior/kapsle.jpg`. Co by se hodilo:

- Detail uvnitř kapsle (čtecí lampička, knihy na poličce, telefon)
- Celkový pohled na řadu kapsulí v chodbě
- Sdílená koupelna patřící ke kapslím (čistota, dřevo)

### `formaty/luzko/`
Žádná reálná foto — slot dnes drží stand-in.

- Lůžko s rozesteleným povlečením, knížka na nočním stolku
- Detail úložného prostoru pod postelí
- Sdílená koupelna jednotky lůžek

### `formaty/dvouluzko/`
Žádná reálná foto.

- Pohled přes nedovřené dveře — dvoulůžko ráno, světlo z okna
- Detail nočního stolku se dvěma šálky kávy
- Společný stůl v pokoji (učení / práce ve dvou)

### `formaty/bunka-1kk/`
**Kritické pro voice V2** — toto je „luxusní stavební buňka 1+kk", kterou slibujeme členům přípravného družstva.

- Vnější pohled na buňku (architektura modulu — drobnost je důležitá, ne kontejner z přístavu)
- Interiér: kuchyňský kout, postel, pracovní stůl, koupelna — vše v jednom záběru
- 3D render se vším vybavením, s lidmi (= obyvatelé)
- Detail oken, materiálů (dřevo, beton, sklo)

### `amenity/sauna/`
Vibe: Mokrin House, Aire Ancient Baths, Helsinki Loyly.

- Ranní záběr přes mlhu páry, dva lidi sedící na lavici
- Detail kýble s vodou + lízátka, ručník přes lavici
- Outdoor cool-down deck v zimě (sníh, sauna kouří)
- Saunové ceremoniály — záběr ze zad mistra (rituál, ne reklamní)

### `amenity/bazen/`
Vibe: Lapidárium / Vnitroblock pool, ne aquapark.

- Hladina vody se světly v pozdním odpoledni (atmosféra, ne reklamní)
- Plavec v dráze, monochromatický
- Detail keramiky / okrajů, ne celkový pohled
- Prázdný bazen ráno před otvírací (klidná hladina)

### `amenity/minipivovar/`
- Kvašené kvasinky v měděném tanku (suroviny, ne reklamní)
- Sklenice na dřevěném baru, lednová večerní
- Sládek (kdo to bude provozovat) ve výrobě, ruce
- Detail varny — měděné kotle

### `amenity/kavarna/`
Vibe: Můj šálek kávy / Místo Praha, ne řetězec.

- Barista v 7 ráno, jeden host
- Detail šálku na okenním parapetu, mlha venku
- Sortiment pekárna + káva (bochník, croissant, espresso) bez stylizace
- Stoly v poledne — práce na laptopu, kniha vedle

### `amenity/pekarna/`
- Ranní pečení, ruce, mouka
- Hotové bochníky vystavené, ne stylizované
- Detail těsta v košíku, kvas
- Pekař v zástěře, profil, ranní světlo

### `amenity/coworking-sal/`
- Pohled z otevřených dveří, dlouhé stoly, lidé pracují
- Detail zástrčky / kabelu / monitoru — funkční atmosféra
- Židle s bundou, svetr přes opěradlo (každodennost)
- Workshop / přednáška večer (řečník, projektor, lidé v lavicích)

### `amenity/zasedacky/`
- Pohled přes dveře, 4 lidi u stolu, blok flipchartu
- Detail bílé tabule s plánováním (skutečné poznámky, ne stock „business meeting")
- Prázdná místnost s židlemi v polokruhu — brzo ráno před akcí

### `amenity/studovny/`
- Tichá lampa + knihy + zápisník, jeden student v koutě
- Velké okno + déšť, příjemný klid
- Knihovní polic ka boku zdi, sdílená čítárna
- Detail koutu s hrnkem čaje, deka přes ramena

### `amenity/ateliery/`
**Důraz** — toto je magnet na kreativce. Tři typy:

- **Malíř/výtvarník:** Plátno + barvy + světlo z okna, šálek vody se štětci
- **Sochař/řemeslník:** Sochařský prach na ponku, dláto v ruce, dřevo
- **Krejčí/textil:** Šaty na ramínkách, šicí stroj, role látek
- Společný atelier: víc lidí, různá řemesla v jednom prostoru
- Pohled večerní — někdo dotahuje práci u jediné lampy

### `amenity/dilny/`
- Hoblíky + štětky + stůl s rozdělanou prací
- Někdo brousí, jiskry, dřevěná podlaha
- Skupinová akce „opravárenská sobota" — víc lidí spolupracuje
- Detail nářadí na pegboardu (organizovanost = důvěra)

### `amenity/nahravaci-studia/`
- Mikrofon + akustické panely, příšeří
- Detail mixovacího pultu, ruce na faderech
- Hudebník v boothu, sluchátka, soustředěný výraz
- Podcast set-up — dva lidi u mikrofonu, kafe vedle

### `amenity/kontejnerove-sklady/`
- Otevřený box, organizované krabice — funkční (ne prázdný)
- Klíček + zámek detail
- Někdo vytahuje horské kolo z boxu (use-case scénář)
- Řada boxů s různými barvami / čísly (orientace)

### `amenity/sportoviste/`
- Hřiště v pozdním odpoledni, hra v běhu (volejbal / fotbal)
- Park v zimě, prázdný gril (klidná atmosféra)
- Detail sítě / koše / lavičky
- Skupinka po hře — pivo na lavičce

### `amenity/telocvicna-na-vzduchu/`
(Calisthenics park — outdoor gym pod střechou nebo bez ní.)

- Hrazda + bradla + lana, brzy ráno, rosa
- Někdo dělá pull-ups, silueta proti světlu
- Detail textury — beton + ocel + dřevo
- Skupinka cvičící spolu (dva-tři lidé, ne reklamní)

### `lide/`
Komunitní život. **Vždy se souhlasem zobrazených.** Nepoužívat stock.

- 2-3 portréty členů přípravného družstva (informativní, ne portrait studio)
- Skupinka u večeře (long table, oběd / večeře)
- Sám u stolu se zápisníkem (klid v koutě, single-person scene)
- Pracovní setkání 4-5 lidí (decize-making, mapy, plány na stole)
- Drinks po práci na dvoře

### `den-v-hubu/`
Timeline shots pro novou landing sekci „Den v Hubu". Konkrétní časové sloty:

- **7:00 — Ráno** kavárna otevírá, mlha venku, první zákazník
- **9:30 — Cowork zaplněn** lidé u monitorů, soustředění
- **12:30 — Společný oběd** v komunitním centru, dlouhý stůl
- **15:00 — Tichá hodina** studovny, knihovna, single person
- **16:30 — Workshop / atelier** kreativní práce
- **18:30 — Sauna večer** pára, dva lidi
- **20:30 — Pivovar** sklenice, lidé u baru
- **22:00 — Dvůr v noci** tlumené světlo, malá skupinka

### `pudorysy/`
2D plány a schémata. Už máme `masterplan.jpg` — ten zůstává, kde je. Nové:

- Půdorys typové kapsle (rozměry, vybavení)
- Půdorys lůžkového / dvoulůžkového pokoje
- Půdorys 1+kk buňky (klíčový — pro přípravné družstvo)
- Půdorys hlavní budovy s rozmístěním amenit
- Mapa areálu zvýrazňující doprava (zastávka, parking, kola)

### `3d-vizualizace/`
3D rendery od projektantů.

- Interiér — coworking sál, kavárna, sauna
- Exteriér — drone-like render budov v plném provozu
- 1+kk buňka — render obyvatelný
- Před-vs.-po rekonstrukce (split-screen)

---

## Sekce E: Konvence

### Directory tree

```
public/images/hub/
├── (existující — netknuté, V1 stále funguje)
│   ├── hero/
│   ├── exterior/
│   ├── interior/
│   └── masterplan.jpg
└── (nové — připravené prázdné, .gitkeep)
    ├── _nove/                                  ← drop zone
    ├── areal/
    ├── doprava/
    ├── formaty/
    │   ├── kapsle/
    │   ├── luzko/
    │   ├── dvouluzko/
    │   └── bunka-1kk/
    ├── amenity/
    │   ├── sauna/
    │   ├── bazen/
    │   ├── minipivovar/
    │   ├── kavarna/
    │   ├── pekarna/
    │   ├── coworking-sal/
    │   ├── zasedacky/
    │   ├── studovny/
    │   ├── ateliery/
    │   ├── dilny/
    │   ├── nahravaci-studia/
    │   ├── kontejnerove-sklady/
    │   ├── sportoviste/
    │   └── telocvicna-na-vzduchu/
    ├── lide/
    ├── den-v-hubu/
    ├── pudorysy/
    └── 3d-vizualizace/
```

Použití: drag-and-drop nového souboru do správné podsložky. Nemusíš se trápit s pojmenováním (viz dále), ale ideálně dodržuj kebab-case — IMG_4231.jpg půjde, ale `sauna-rano-mlha.jpg` se v kódu lépe čte.

### Pojmenování souborů

- **Kebab-case**, bez diakritiky a mezer: `sauna-rano-mlha.jpg`, `kavarna-baristka-rano.jpg`
- **Popisné, ne kódy**: `IMG_4231.jpg` ➜ `coworking-rano-prazdny.jpg`
- **Pokud je číslování smysluplné** (např. série galerie), použij `-01`, `-02`, … na konci: `areal-drone-01.jpg`
- **Žádné velké písmeno** v názvech (Linux/macOS jsou case-sensitive — `Sauna.jpg` a `sauna.jpg` jsou různé soubory)

### Formáty a velikosti

- **JPG** pro fotky (preferenčně mírně komprimované, kvalita 80-85)
- **PNG** pro screenshoty, UI artefakty, věci s průhledností
- **SVG** pro ikony, loga, jednoduché diagramy
- **WebP** zatím nezavádíme (build pipeline na to není připravený, JPG/PNG plně postačí)
- **Zdrojová velikost**: ideálně >2400 px na delší straně, aby snesla retina display
- **Soubor velikosti**: pokud finální JPG >1.5 MB, ručně optimalizovat (squoosh.app, sharp CLI). Web má lint:weight, který hlídá per-page eager weight.

### Alt texty

Každý obrázek na webu potřebuje alt text v češtině. Konvence:

- **≤120 znaků** (delší jsou pro screenreader únavné)
- **Popisuj obsah, ne kontext.** Ne „Hero areálu", ale „Vnitřní dvůr Horních kasáren ve večerním slunci."
- **Pokud je obrázek dekorativní** (pozadí, hero bez informační hodnoty), použij `alt=""` + `aria-hidden="true"` (jak už dělá současný kód)
- **U schematických / vizualizačních záběrů** popisuj funkci, ne styl: „Půdorys luxusní 1+kk stavební buňky" ne „3D render moderního bytu"
- **Konkrétní alt texty pro nové bloky** budou v `docs/copywriting2.md` u každého nového obrázkového slotu

### Práva a zdroje

V `docs/visual-assets.md` (tomto souboru) v budoucnu označit u nových přírůstků:

- **Vlastní** (foto vlastní operátor — OSA II) — bez poznámky
- **Licence** od fotografa — uvést jméno, kontakt, rozsah licence
- **Stock** (Unsplash, Pexels) — uvést URL a podmínky
- **3D render** — uvést studio / autora a verzi

### Migrace existujících souborů (samostatná vlna)

V budoucnu lze existující 52 souborů (20 použitých + 32 orphan) postupně přesunout do nové struktury:

| Existující | Cíl |
|---|---|
| `hero/sh-1..4.jpg` | `areal/` (jsou to areálové celky) |
| `interior/kapsle.jpg` | `formaty/kapsle/` |
| `interior/interior-01..03.jpg` | `formaty/luzko/` resp. `formaty/dvouluzko/` resp. `formaty/bunka-1kk/` (po obsahové revizi) |
| `interior/interior-04..08.jpg` | `formaty/<podle obsahu>/` |
| `interior/hub-market-evening/-daytime/-people.jpg` | `den-v-hubu/` resp. `lide/` resp. `amenity/coworking-sal/` |
| `exterior/hub-courtyard-trees/-night.jpg` | `areal/` |
| `exterior/hub-street-sunset/-daytime.jpg` | `areal/` resp. `doprava/` |
| `exterior/hub-renovated-building.jpg` | `areal/` |
| `exterior/exterior-01..27.jpg` | `areal/` (celkové pohledy) |
| `exterior/sport.jpg` | `amenity/sportoviste/` |
| `exterior/cowork.jpg` | `amenity/coworking-sal/` |
| `exterior/trznice-pivovar.jpg` | `amenity/minipivovar/` (nebo split do `kavarna/`/`coworking-sal/` podle obsahu) |
| `masterplan.jpg` | `pudorysy/` |

Migrace vyžaduje aktualizovat `src/**` reference. **Nedělat v této vlně** — počkej, až bude obsah z nových složek a uvidíš, co finálně sedne kam.

---

## Sumár

- **20 souborů** aktivně použito (Sekce A)
- **32 orphan souborů** připravených k zadrátování (Sekce B)
- **3 P0 placeholdery** k řešení v první vlně (chybějící thumbnaily pro 3 sub-projekty) (Sekce C)
- **23 nových subkategorií** k naplnění novými vizuály (Sekce D)
- **`public/images/hub/<23 nových složek>/`** připraveno s `.gitkeep` (Sekce E)

Až budeš dropovat nové soubory, udělej to do nových podsložek pod `public/images/hub/`. Já pak při dalším copywritingovém / wiringovém průchodu zadrátuji do `src/**`.
