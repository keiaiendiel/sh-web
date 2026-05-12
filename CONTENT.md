<!-- ============================================================
     WORKING COPY of SH_Web_Site_Copy.md

     Source of truth:
     /Users/kindl/kindl-vault/Projects/SH_Web/SH_Web_Site_Copy.md

     Tento soubor je MIRROR vault souboru pro účely Astro buildu.
     Necommituj edity přímo sem, edituj vault verzi a sync-ni přes:
       cp "/Users/kindl/kindl-vault/Projects/SH_Web/SH_Web_Site_Copy.md" CONTENT.md
     Last sync: 2026-05-12
     ============================================================ -->

---
title: SH Web Site Copy
type: project
status: growing
created: 2026-05-12
tags:
  - project/sh-web
  - meta/content-brief
note: Pouze obsah, který se objeví na živém webu startovacihub.cz. Cenové srovnání s konkurencí a research v `Research/SH_Web_Research_Pricing_Comparison.md`. Brand voice + locked decisions v `SH_Web_Plan.md`.
---

# Startovací Hub - site copy

Jediný zdroj pravdy pro **veškerý text a obrázky na živém webu** startovacihub.cz. Z tohoto dokumentu generuju Astro stránky, content collections a navigaci.

> **Co tu NENÍ:**
>
> - Srovnání s pražskou konkurencí (cenové analýzy, savings kalkulace, source citations) → [`Research/SH_Web_Research_Pricing_Comparison.md`](Research/SH_Web_Research_Pricing_Comparison.md)
> - Uzamčená rozhodnutí (brand voice, pricing strategy, legal floor strategie) → [`SH_Web_Plan.md`](SH_Web_Plan.md)
> - Vizualizační produkční seznam → [`SH_Web_Visualization_List.md`](SH_Web_Visualization_List.md)
> - Image prompty pro generativní modely → [`SH_Web_Image_Prompts.md`](SH_Web_Image_Prompts.md)

---

## 0. Globální (hlavička, patička, brand)

### 0.1 Brand sdělení (hero na landing, OG meta, social share)

**Hlavní claim (H1 na `/`):**

Horní kasárny Klecan, otevřené pro bydlení a práci. Devět typů pokojů a apartmánů: od kapsle pro jednoho po byt 5+kk pro skupinu. Coworking, dílny, sauna, společná kuchyně, kavárna. Pobytové stipendium dvakrát ročně.

**Krátký lede pod nadpisem (60-120 znaků):**

Areál se otevírá postupně od roku 2026. Bývalé vojenské kasárny nad Vltavou, patnáct kilometrů severně od centra.

**Primární CTA (tlačítko v hero):**

*Rezervovat* (vede na `/rezervace/`)

**Sekundární CTA (link/exit):**

*Podívat se na pokoje* (vede na `/ubytovani/`)

**Hlavní obrázky** (cyklus 4 fotek, 5 sekund na snímek; per `SH_Web_Visualization_List.md` §1.1 Tier A #1-4):
- [ ] Letecký pohled na areál Klecany v ranní mlze nebo zlaté hodině (drone foto / Marek)
- [ ] Dvůr za modré hodiny s lidmi u stolu venku, světla v oknech (render Hugo / Twinmotion)
- [ ] Coworking sál v odpoledním protisvětle, lidé v soustředění (render Hugo + lidé kompozit)
- [ ] Obývák se třemi kapslemi v jednom rohu, knihovna a rostlina (render Hugo / Blender, klíčový reframing záběr)

**OG meta a social share:**
- OG title: *Startovací Hub Klecany*
- OG description: *Horní kasárny Klecan otevíráme od roku 2026. Bydlení, coworking, dílny, sauna, společná kuchyně. Devět typů pokojů a apartmánů.*
- OG image: jeden z 4 hero záběrů, nejvýraznější (asi #2 dvůr za modré hodiny nebo letecký areál)
- Twitter card: summary_large_image, stejný obrázek

### 0.2 Hlavní menu (header)

Finální názvy položek menu, sjednocené s locked sitemap z `SH_Web_Plan.md`:

- **Ubytování** (`/ubytovani/`)
- **Coworking** (`/coworking/`)
- **Komunita** (`/komunita/`)
- **Okolí** (`/okoli/`)
- **Doprava** (`/doprava/`)
- **Stipendia** (`/stipendia/`)
- **Novinky** (`/novinky/`)
- **Galerie** (`/galerie/`)
- **Rezervace** (primární CTA chip, plum accent, vždy vpravo nahoře, vede na `/rezervace/`)

Vedle loga vlevo: štítek **„V projektové přípravě"** (per Marek 2026-05-12, viz sekce Stav projektu v menu výše).

Kontakty: nepatří do hlavního menu, jsou ve footer (sekce 0.3 + samostatná stránka `/kontakty/`).

### 0.3 Patička (footer)

**Kontakt:**
- E-mail: `vpd@osa2.cz` (rezervační i obecný kontakt)
- Telefon: TBD (Marek doplní číslo rezervačního oddělení)
- Adresa: Horní Kasárna Klecany, 250 67 Klecany

**Sociální sítě (URL, pokud existují):**
- Instagram: TBD (Marek upřesní jestli zakládáme)
- Facebook: TBD
- LinkedIn: alternativa2.info nebo OSA II profil

**Právní řádek (provozovatel, IČO):**

> Provozuje Občanské sdružení Alternativa II, z.s. (OSA II). IČO: TBD (Marek doplní). Předseda: Marek Semerád. Registrováno u Městského soudu v Praze pod TBD. Tento web prezentuje projekt Startovacího Hubu Klecany v rámci záměru VPD1. Nabídka rezervací je nezávazná, slouží k registraci zájmu, není kupní ani nájemní smlouvou.

**Vnější linky:**
- Mateřský web OSA II: [alternativa2.info](https://www.alternativa2.info/)
- Investiční záměr VPD: [vepde.com](https://vepde.com) (pro investory)
- /metodika-srovnani/ (vysvětlení srovnání s pražskými cenami, povinné dle § 2980 OZ)
- /gdpr/ (zásady ochrany osobních údajů)
- /cookies/ (cookies prohlášení, pokud zavedeme analytics)

---

## 1. Ubytování

**Úvod pro celou sekci (1 odstavec, prodává proč):**

V Hubu nabízíme devět typů bydlení. Čtyři varianty co-livingu (od kapsle pro jednoho po dvoulůžkový pokoj pro pár) a pět privátních apartmánů (1+kk až 5+kk). Energie, internet, úklid společných prostor, pět jízd Hub-shuttle do metra Kobylis měsíčně a poukaz do sauny v ceně. Najmete si pokoj na měsíc nebo na rok; čím déle zůstanete, tím nižší nájem.

**Hlavní obrázek sekce (volitelně):**
- [ ] Mozaika devíti hero záběrů, jeden za každý formát (z Tier A produkce, doplníme až po dokončení individuálních hero záběrů kapsle / pokojů / apartmánů)

### 1.1 Privátní apartmány

**Úvod pro skupinu privátních apartmánů:**

Privátní apartmán je celý byt jen pro vás. Vlastní koupelna, vlastní kuchyň, vlastní vchod. Pět velikostí od 1+kk pro pár nebo dva spolubydlící až po 5+kk pro skupinu osmi až deseti lidí. Hodí se pro páry, rodiny, kamarády, sportovní oddíly, startupy. Cena je za celý byt; čím víc vás v něm bude, tím nižší nájem na osobu.


#### 1.1.1 Privátní apartmán 1+kk

**Krátký popis (do karty na overview, max 25 slov):**

Privátní byt 21 m² pro pár nebo dva spolubydlící. Vlastní koupelna a kuchyňský kout, postel podle výběru.

**Hlavní text (detail page, 1-3 odstavce):**

1+kk je nejmenší privátní formát: jeden obytný pokoj s kuchyňským koutem, vlastní koupelna, vlastní vchod. Plocha 21 m². Standardně se obývá ve dvou (dvě jednolůžka 200×80 cm nebo manželská postel 180×200), ale jedna osoba s velkou pracovní plochou ho také zvládne.

Cena 9 500 Kč měsíčně za celý byt v krátkém pobytu, 7 600 Kč při ročním závazku. Při obsazenosti dvou osob to vychází 4 750 Kč na osobu, 3 800 Kč na osobu při ročním závazku. Energie, internet a úklid společných prostor v ceně.

**Klíčové vlastnosti:**
- Vlastní koupelna se sprchou a WC
- Kuchyňský kout (varná deska, dřez, lednice, mikrovlnka)
- 2 jednolůžka 200×80 cm nebo manželská postel 180×200 cm (volíte při rezervaci)
- Vlastní pracovní stůl pod oknem
- Okno s výhledem do dvora areálu
- 5 jízd Hub-shuttle do metra Kobylis + 1 jízda Hub-taxi po Klecanech v ceně

**Specifikace:**
- Plocha: 21 m²
- Kapacita: 2 lůžka v ceně
- Konfigurace lůžek: dle volby (2× single 200×80 nebo 1× manželské 180×200)
- Vlastní koupelna: ano
- Kuchyňský kout: ano (bez trouby, s mikrovlnkou)

**Cena:**
- Anchor (1-2 měs): 9 500 Kč/měsíc (= 4 750 Kč/osobu při dvou)
- 3+ měsíců: 9 025 Kč (-5 %)
- 6+ měsíců: 8 550 Kč (-10 %)
- 12+ měsíců: 7 600 Kč (-20 %, = 3 800 Kč/osobu)
**Obrázky:**
- [ ] Hero: ranní rituál v 1+kk (káva u okna, 50 mm foto / render); Tier A #9 v `SH_Web_Visualization_List.md`
- [ ] Kuchyňský kout detail
- [ ] Koupelna
- [ ] Pohled na celý byt s dispozicí (24 mm tilt-shift)


#### 1.1.2 Privátní apartmán 2+kk

**Krátký popis:**

Privátní byt 42 m² pro čtyři lidi. Oddělená ložnice, plnohodnotná kuchyň, vlastní koupelna a samostatné WC.

**Hlavní text:**

2+kk má samostatnou ložnici, obývací pokoj s jídelním stolem a oddělenou kuchyň. 42 m², vlastní koupelna a samostatná toaleta. Standardně pro čtyři osoby: dvě dvojlůžka, čtyři jednolůžka nebo kombinace, podle dohody při rezervaci. Funguje pro páry s dětmi, dvě dvojice spolubydlících, nebo skupinu čtyř kamarádů.

14 000 Kč měsíčně za celý byt v krátkém pobytu; 11 200 Kč při ročním závazku. Při plné obsazenosti čtyř osob to dělá 3 500 Kč na osobu základní, 2 800 Kč na osobu ročně. Najít tři spolubydlící je obvykle levnější varianta než vlastní 1+kk.

**Klíčové vlastnosti:**
- Vlastní koupelna se sprchou, samostatné WC
- Plnohodnotná oddělená kuchyň (varná deska, trouba, dřez, lednice)
- Oddělená ložnice + obývací pokoj s jídelním stolem
- 4 lůžka v různých konfiguracích (volíte při rezervaci)
- Pracovní stůl v obývacím pokoji
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Plocha: 42 m²
- Kapacita: 4 lůžka v ceně
- Konfigurace lůžek: 2× dvojlůžko, 4× jednolůžko, nebo 1× dvojlůžko + 2× jednolůžko
- Vlastní koupelna: ano
- Samostatné WC: ano
- Kuchyňský kout: plnohodnotná oddělená kuchyň s troubou

**Cena:**
- Anchor (1-2 měs): 14 000 Kč/měsíc (= 3 500 Kč/osobu při čtyřech)
- 3+ měsíců: 13 300 Kč (-5 %)
- 6+ měsíců: 12 600 Kč (-10 %)
- 12+ měsíců: 11 200 Kč (-20 %, = 2 800 Kč/osobu)
**Obrázky:**
- [ ] Hero 2+kk: dvojice nebo skupina u jídelního stolu, světlo z velkého okna; Tier A #10
- [ ] Ložnice s manželskou postelí nebo dvěma jednolůžky
- [ ] Kuchyň + obývák propojení
- [ ] Koupelna a samostatné WC


#### 1.1.3 Privátní apartmán 3+kk

**Krátký popis:**

Privátní byt 63 m² pro šest lidí. Tři pokoje, vlastní koupelna se sprchou nebo vanou, samostatné WC.

**Hlavní text:**

3+kk má tři samostatné pokoje plus kuchyň. 63 m², vlastní koupelna se sprchou nebo vanou, samostatná toaleta. Standardně pro šest osob: tři dvojlůžka, šest jednolůžek, nebo kombinace podle dohody. Pro skupinu šesti kamarádů to vychází jako rodinné bydlení; lze rozdělit i na dvě páry plus dva singly.

18 000 Kč měsíčně v krátkém pobytu, 14 400 Kč při ročním závazku. Při plné obsazenosti šesti osob to vychází 3 000 Kč na osobu, 2 400 Kč na osobu při ročním závazku. Vlastní koupelna a vlastní kuchyň pro celou skupinu, žádná gangová koupelna ani sdílené sociální zařízení.

**Klíčové vlastnosti:**
- Tři samostatné pokoje
- Vlastní koupelna (sprcha nebo vana, volitelně při rezervaci)
- Samostatné WC
- Plnohodnotná kuchyň s jídelním stolem pro šest
- 6 lůžek v různých konfiguracích
- Pracovní prostor v obývacím pokoji nebo v jednom z pokojů
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Plocha: 63 m²
- Kapacita: 6 lůžek v ceně
- Konfigurace lůžek: 3× dvojlůžko, 6× jednolůžko, nebo kombinace (dle dohody)
- Vlastní koupelna: ano (sprcha nebo vana, volitelně)
- Samostatné WC: ano
- Kuchyňský kout: plnohodnotná oddělená kuchyň

**Cena:**
- Anchor (1-2 měs): 18 000 Kč/měsíc (= 3 000 Kč/osobu při šesti)
- 3+ měsíců: 17 100 Kč (-5 %)
- 6+ měsíců: 16 200 Kč (-10 %)
- 12+ měsíců: 14 400 Kč (-20 %, = 2 400 Kč/osobu)
**Obrázky:**
- [ ] Hero 3+kk: 4-6 lidí v obytném prostoru, komunitní moment; Tier A #11
- [ ] Tři pokoje, různé konfigurace
- [ ] Společná kuchyň s jídelním stolem
- [ ] Koupelna a samostatné WC


#### 1.1.4 Privátní apartmán 4+kk

**Krátký popis:**

Privátní byt 84 m² pro osm lidí. Skupinový formát pro startup, sportovní oddíl, taneční nebo divadelní soubor.

**Hlavní text:**

4+kk má čtyři samostatné pokoje plus kuchyň. 84 m², vlastní koupelna a samostatné WC, případně druhé sociální zařízení. Standardně pro osm lidí; hodí se pro startupový tým v akcelerátoru, sportovní oddíl na soustředění, taneční nebo divadelní soubor, větší skupinu kamarádů, kteří chtějí bydlet spolu.

22 000 Kč měsíčně v krátkém pobytu, 17 600 Kč při ročním závazku. Při plné obsazenosti osmi osob to vychází 2 750 Kč na osobu, 2 200 Kč na osobu při ročním závazku. 84 m² s vlastní koupelnou (případně dvěma), vlastní kuchyní a obytným prostorem pro celou skupinu.

**Klíčové vlastnosti:**
- Čtyři samostatné pokoje
- Vlastní koupelna a samostatné WC (případně druhé sociální zařízení)
- Plnohodnotná kuchyň s velkým jídelním stolem pro osm
- 8 lůžek v různých konfiguracích
- Společný pracovní prostor v obývacím pokoji
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Plocha: 84 m²
- Kapacita: 8 lůžek v ceně
- Konfigurace lůžek: 4× dvojlůžko, 8× jednolůžko, nebo kombinace (dle dohody)
- Vlastní koupelna: ano (případně dvě)
- Samostatné WC: ano (případně dvě)
- Kuchyňský kout: plnohodnotná kuchyň

**Cena:**
- Anchor (1-2 měs): 22 000 Kč/měsíc (= 2 750 Kč/osobu při osmi)
- 3+ měsíců: 20 900 Kč (-5 %)
- 6+ měsíců: 19 800 Kč (-10 %)
- 12+ měsíců: 17 600 Kč (-20 %, = 2 200 Kč/osobu)
**Obrázky:**
- [ ] Hero 4+kk: 6-8 lidí v obytném prostoru, startup tým nebo sportovní oddíl; Tier A #12
- [ ] Čtyři pokoje, různé konfigurace
- [ ] Velká kuchyň s jídelním stolem pro osm


#### 1.1.5 Privátní apartmán 5+kk

**Krátký popis:**

Privátní byt 105 m² pro deset lidí. Největší formát; pro velkou skupinu, dvě rodiny pohromadě, sezónní taneční nebo divadelní soubor.

**Hlavní text:**

5+kk má pět samostatných pokojů plus kuchyň. 105 m², dvě koupelny, dvě samostatné WC. Standardně pro deset osob; využijí ho větší startupové týmy, sportovní celky, divadelní nebo taneční soubory na sezónní soustředění, nebo dvě rodiny, které chtějí bydlet spolu na delší dobu.

25 000 Kč měsíčně v krátkém pobytu, 20 000 Kč při ročním závazku. Při plné obsazenosti deseti osob to vychází 2 500 Kč na osobu, 2 000 Kč na osobu při ročním závazku. Nejdostupnější způsob, jak v Hubu bydlet samostatně mezi devíti známými lidmi.

**Klíčové vlastnosti:**
- Pět samostatných pokojů
- Dvě vlastní koupelny, dvě samostatné WC
- Plnohodnotná kuchyň s velkým jídelním stolem pro deset
- 10 lůžek v různých konfiguracích
- Možnost dělit prostor na dva celky (pro dvě rodiny nebo dva týmy)
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Plocha: 105 m²
- Kapacita: 10 lůžek v ceně
- Konfigurace lůžek: dle dohody (5× dvojlůžko, 10× jednolůžko, nebo kombinace)
- Vlastní koupelna: ano, dvě
- Samostatné WC: ano, dvě
- Kuchyňský kout: plnohodnotná kuchyň

**Cena:**
- Anchor (1-2 měs): 25 000 Kč/měsíc (= 2 500 Kč/osobu při deseti)
- 3+ měsíců: 23 750 Kč (-5 %)
- 6+ měsíců: 22 500 Kč (-10 %)
- 12+ měsíců: 20 000 Kč (-20 %, = 2 000 Kč/osobu)
**Obrázky:**
- [ ] Hero 5+kk: 8-10 lidí kolem velkého stolu, společná večeře nebo plánování; Tier A #13
- [ ] Pět pokojů, různé konfigurace
- [ ] Možnost rozdělení na dva celky


### 1.2 Co-living

**Úvod pro skupinu co-living:**

Co-living znamená, že nemáte vlastní celý byt, ale máte vlastní lůžko nebo vlastní kapsli a sdílíte koupelnu a kuchyň na patře s ostatními rezidenty. Cena je výrazně nižší než privátní apartmán, protože platíte za jedno místo (nebo jeden malý pokoj), ne za celý byt s vlastní kuchyní a koupelnou.

Čtyři produkty na ose „kolik soukromí dostanete":

> **Co je kapsle a co je „jen" lůžko nebo pokoj?**
>
> **Kapsle** je samostatný uzavíratelný modul s vlastní stěnou, dveřmi nebo závěsem, vlastním světlem, USB a větráním. V pokoji s tvojí kapslí je 2-5 dalších kapslí, ale každá kapsle je vlastní mikrosoukromí. V tom samém pokoji máš vlastní zamykatelnou skříň, převlékací kabinku a pohovku nebo posezení k odpočinku. Sprchy a kuchyň jsou na patře nebo v rámci patrového bytu (TBD podle dispozice).
>
> **Jedno lůžko ve sdíleném pokoji** je klasický „dorm-style" formát: jedno z dvou lůžek v pokoji. Máš vlastní postel, vlastní noční stolek, vlastní skříň a vlastní pracovní stůl. Sdílíš pokoj s jedním dalším rezidentem (každý si pronajímáte své lůžko zvlášť). Koupelnu a kuchyň sdílíš na patře nebo v rámci patrového bytu (TBD podle dispozice).
>
> **Dvoulůžko ve sdíleném bytě** je opak: pár dostane celý pokoj jen pro sebe s manželskou postelí, skříní, stolem a vybavením. Žádný spolubydlící, který by tam přišel. Pokoj je vaším domovem v rámci většího bytu, který sdílíte s 2-4 dalšími pokoji ze stejného patra (kuchyň a koupelna jsou sdílené v rámci toho bytu nebo v rámci patra - TBD).

Čtyři varianty s pořadím od nejlevnější k nejdražší při 12+ tarifu:

1. **Privátní 1lůžková kapsle** (3 000 Kč anchor, 2 250 Kč při 12+) - vlastní uzavíratelná kapsle pro jednoho (zámek, světlo, USB) v pokoji s 2-5 dalšími kapslemi. V pokoji vlastní skříň, převlékací kabinka a sezení pro odpočinek. Matrace 210×150 nebo 230×160 cm.
2. **Jedno lůžko ve sdíleném pokoji** (3 500 Kč anchor, 2 625 Kč při 12+) - jedno z dvou lůžek v pokoji. Vlastní postel, noční stolek, skříň a stůl. Pokoj sdílíš s jedním dalším rezidentem. Matrace 200×80 nebo 230×90 cm.
3. **Privátní 2lůžková kapsle** (4 500 Kč anchor, 3 375 Kč při 12+, = 1 688 Kč/os. při páru) - vlastní uzavíratelná kapsle pro pár (zámek, světlo, USB) v pokoji s 2-5 dalšími kapslemi. Stejné zázemí v pokoji jako u 1lůžkové. Matrace 210×230 nebo 230×240 cm (King+).
4. **Dvoulůžko ve sdíleném bytě** (6 000 Kč anchor, 4 500 Kč při 12+, = 2 250 Kč/os. při páru) - celý pokoj jen pro pár v rámci většího bytu. Manželská postel, skříň, stůl, vybavení. Sdílíš jen koupelnu a kuchyň v rámci bytu nebo na patře.

V každé variantě: zamykatelná skříň pro věci (u kapslí přímo v pokoji vedle kapslí, u jedno/dvoulůžka v rámci vlastního pokoje), převlékací kabinka u kapslí v pokoji, 5 jízd Hub-shuttle a 1 jízda Hub-taxi měsíčně v ceně, energie, internet, úklid společných prostor.

> **K upřesnění s Markem (architektonická dispozice):** U jednolůžka a dvoulůžka zůstává otevřené, jestli se koupelna a kuchyň sdílejí v rámci patrového bytu (cluster model: 3-5 pokojů sdílí jeden byt s kuchyní a koupelnou) nebo v rámci celého patra (corridor model: 10+ pokojů sdílí společnou kuchyň a sociální zařízení). Záleží na konečné dispozici po rekonstrukci.

#### 1.2.1 Privátní 1lůžková kapsle

**Krátký popis:**

Nejlevnější varianta bydlení v Hubu. Vlastní uzavíratelná kapsle ve sdíleném pokoji s 2-5 dalšími kapslemi. Matrace 210×150 cm (širší než standardní jednolůžko).

**Hlavní text:**

Kapsle je tvoje soukromé místo na spaní uvnitř většího pokoje. Má pevnou stěnu, závěs nebo dveře na vstupu, vlastní světlo, větrání, USB-C zásuvku. Den trávíš v loungi v parteru, v coworkingu, nebo venku. Kapsle slouží na spaní, čtení, soustředění.

V pokoji jsou typicky 3-6 kapslí (3 až 5 dalších kapslí kromě tvojí), ne 8-10 jako v tourist hostelu. Mezi nimi je místo na pohovku, knihovnu, rostliny, ale taky **tvoje zamykatelná skříň** a **převlékací kabinka přímo v pokoji**, abys nemusel běhat na patro pro kufr nebo se převlékat na chodbě.

Matrace 210×150 cm (nebo 230×160 cm při dostupnosti) - to je o 60-70 cm širší než standardní jednolůžková matrace ve studentském hostelu nebo na koleji. V kapsli si rozložíš. Notebook, šálek, knížku máš kolem sebe a stále spíš na pohodlné ploše.

Sprchy a toalety jsou na patře (nebo v rámci patrového bytu, podle dispozice). Sdílená kuchyň v parteru nebo v rámci bytu.

3 000 Kč měsíčně v krátkém pobytu; 2 250 Kč při ročním závazku.

**Klíčové vlastnosti:**
- Vlastní uzavíratelná kapsle s pevnou stěnou, závěsem nebo dveřmi
- Vlastní světlo nad lůžkem, USB-C zásuvka, polička
- Matrace 210×150 cm nebo 230×160 cm (volíš při rezervaci podle dostupnosti)
- **Zamykatelná skříň přímo v pokoji** (kufr + notebook), ne na chodbě patra
- **Převlékací kabinka v pokoji** se sedadlem a háčkem
- Pohovka nebo posezení v pokoji k odpočinku (mezi kapslemi)
- 3-6 kapslí v jednom pokoji (počet závisí na velikosti místnosti)
- Sprchy a toalety: na patře nebo v rámci patrového bytu (podle dispozice)
- Sdílená kuchyň: v parteru nebo v rámci patrového bytu (podle dispozice)
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Kapsle plocha: cca 3-4 m² (matrace plus 50 cm úložného)
- Pokoj plocha (sdílený se 2-5 dalšími kapslemi): 25-45 m² podle počtu kapslí
- Konfigurace matrace: 210×150 cm nebo 230×160 cm
- Skříň: ve sdíleném pokoji, zamykatelná
- Převlékací kabinka: ve sdíleném pokoji
- Vlastní koupelna: ne, sdílená na patře nebo v rámci patrového bytu
- Kuchyňský kout: ne, sdílená kuchyň v parteru nebo v rámci patrového bytu

**Cena:**
- Anchor (1-2 měs): 3 000 Kč/měsíc
- 3+ měsíců: 2 850 Kč (-5 %)
- 6+ měsíců: 2 550 Kč (-15 %)
- 12+ měsíců: 2 250 Kč (-25 %)
**Obrázky:**
- [ ] Hero: pohled dovnitř jedné kapsle, závěs napůl otevřený, vlastní lampa, USB, knížka (Tier A #5)
- [ ] Pokoj se 3-4 kapslemi, denní světlo z okna, knihovna a rostlina mezi nimi
- [ ] Přebalovací kabinka + zamykatelné skříně na patře

#### 1.2.2 Privátní 2lůžková kapsle

**Krátký popis:**

Kapsle pro dva. Velká matrace 210×230 cm nebo 230×240 cm (rozměr King+). Vlastní zatemnění, dvě čtecí lampy, dva USB porty. Pro páry nebo dvě osoby, které se znají.

**Hlavní text:**

Dvoulůžková kapsle je kapsle pro pár nebo dva kamarády. Velká společná matrace (210×230 nebo 230×240 cm - to je rozměr větší než klasická manželská postel), dvě čtecí lampy nad hlavou, dva USB porty, vlastní zatemnění závěsem nebo dveřmi.

V pokoji je typicky jedna dvojkapsle plus jedna až čtyři jednolůžkové kapsle, nebo dvě dvojkapsle podle dispozice. Celkem 3-6 kapslí v pokoji. Stejné zázemí jako u jednolůžkové kapsle: **vlastní zamykatelná skříň přímo v pokoji**, **převlékací kabinka v pokoji**, pohovka nebo posezení. Sprchy, toalety a kuchyň jsou na patře nebo v rámci patrového bytu (podle dispozice po rekonstrukci).

4 500 Kč měsíčně za celou kapsli v krátkém pobytu; 3 375 Kč při ročním závazku. Pro pár to znamená 2 250 Kč na osobu základní cenu, 1 688 Kč na osobu při ročním závazku. Nejlevnější způsob, jak v Hubu bydlet ve dvou.

**Klíčové vlastnosti:**
- Uzavíratelná kapsle pro dvě osoby, společná velká matrace
- Dvě čtecí lampy, dva USB-C porty
- Vlastní zatemnění, závěs nebo dveře
- Matrace 210×230 cm nebo 230×240 cm (volíš při rezervaci podle dostupnosti) - rozměr větší než klasická King postel
- Stejné sdílené zázemí jako u jednolůžkové kapsle (skříně v patře, přebalovací kabinka, sprchy, kuchyň)

**Specifikace:**
- Plocha kapsle: cca 5-6 m²
- Pokoj plocha (sdílený se 2-5 dalšími kapslemi): 30-50 m² podle počtu kapslí
- Konfigurace matrace: 210×230 cm nebo 230×240 cm
- Skříň: ve sdíleném pokoji, zamykatelná
- Převlékací kabinka: ve sdíleném pokoji
- Vlastní koupelna: ne, sdílená na patře nebo v rámci patrového bytu
- Kuchyňský kout: ne, sdílená kuchyň v parteru nebo v rámci patrového bytu

**Cena:**
- Anchor: 4 500 Kč/měsíc za kapsli (= 2 250 Kč/osobu)
- 3+ měsíců: 4 275 Kč (-5 %)
- 6+ měsíců: 3 825 Kč (-15 %)
- 12+ měsíců: 3 375 Kč (-25 %, = 1 688 Kč/osobu)
**Obrázky:**
- [ ] Hero: dvojkapsle s velkou společnou matrací, dvě čtecí lampy (Tier A #6)
- [ ] Pokoj se dvojkapslemi a jednolůžkovými kapslemi

#### 1.2.3 Jedno lůžko ve sdíleném pokoji

**Krátký popis:**

Klasický spolubydlení v pokoji. Dvě jednolůžka (200×80 cm nebo 230×90 cm), vlastní noční stolek a lampa, sdílená skříň s jedním druhým rezidentem.

**Hlavní text:**

Pokoj se dvěma jednolůžky. Pronájem si bere jeden ze dvou lidí; druhý si pronajímá vedlejší lůžko samostatně. Tvůj prostor: **vlastní lůžko, vlastní noční stolek, vlastní skříň, vlastní pracovní stůl**. Sdílíš s druhým rezidentem jenom samotnou místnost. Koupelnu a kuchyň sdílíš s dalšími rezidenty buď na patře, nebo v rámci patrového bytu (záleží na dispozici po rekonstrukci, k upřesnění s Markem).

Tohle je klasický „dorm-style" formát s dvěma lidmi v pokoji. Pokud chceš víc soukromí než kapsle, ale platit méně než privátní 1+kk, tohle je ten střed. Pokoj má okno, vlastní teploměr, vlastní vytápění.

3 500 Kč měsíčně v krátkém pobytu; 2 625 Kč při ročním závazku. Hub vám pomůže s párováním, pokud si nepronajmete oba sami: pokud preferuješ klid, řekneme to, a najdeme druhého rezidenta s podobnými potřebami.

**Klíčové vlastnosti:**
- Jedno jednolůžko ze dvou v pokoji
- Matrace 200×80 cm nebo 230×90 cm (volíš)
- Vlastní noční stolek, lampa, USB-C port
- **Vlastní skříň** (ne sdílená s druhým rezidentem)
- **Vlastní pracovní stůl**
- Okno a vlastní teploměr v pokoji
- Sdílená koupelna a kuchyň na patře nebo v rámci patrového bytu (TBD podle dispozice)
- 5 jízd Hub-shuttle + 1 Hub-taxi měsíčně v ceně

**Specifikace:**
- Pokoj plocha: cca 18-22 m² (jen vy dva)
- Konfigurace matrace: 200×80 cm nebo 230×90 cm (jednolůžková velikost)
- Vlastní koupelna: ne, sdílená na patře nebo v rámci patrového bytu (TBD)
- Kuchyňský kout: ne, sdílená kuchyň v parteru nebo v rámci patrového bytu (TBD)
- Souhlas se spolubydlením: ano, párujeme podle preferencí (klid, čas spánku, kuřáctví)

**Cena:**
- Anchor: 3 500 Kč/měsíc
- 3+ měsíců: 3 325 Kč (-5 %)
- 6+ měsíců: 2 975 Kč (-15 %)
- 12+ měsíců: 2 625 Kč (-25 %)
**Obrázky:**
- [ ] Hero: dvoulůžkový pokoj s dvěma jednolůžky kolmo, sdílená skříň, stůl mezi (Tier A #7)
- [ ] Detail jednoho lůžka s nočním stolkem

#### 1.2.4 Dvoulůžko ve sdíleném bytě

**Krátký popis:**

Celý pokoj jen pro pár v rámci většího bytu (nebo patra). Manželská postel 200×190 cm nebo 230×200 cm, vlastní skříň, stůl a vybavení. Sdílíte jen koupelnu a kuchyň s ostatními rezidenty v rámci bytu nebo na patře.

**Hlavní text:**

Toto je nejdražší co-living varianta, ale stále výrazně levnější než privátní 1+kk. Pár dostane **celý pokoj v rámci většího patrového bytu**, který má 2-4 další pokoje a sdílenou kuchyň plus koupelnu. Pokoj je váš výhradně - žádný spolubydlící, který by tam přišel mimo vás.

V pokoji je manželská postel, vlastní skříň, pracovní stůl, vybavení (lampy, polička, kobercem nebo dřevěná podlaha podle bloku). Sdílení s ostatními rezidenty bytu (2-4 dalších pokojů) se týká jen kuchyně a koupelny + případného obývacího prostoru bytu.

Co tedy dostáváte ve srovnání s privátním 1+kk: stejné soukromí v pokoji, ale bez vlastní kuchyně a bez vlastní koupelny. Místo toho ve sdíleném bytě poznáte 2-6 dalších rezidentů (nájemníků sousedních pokojů ve stejném bytě), se kterými se potkáváte v kuchyni a v obýváku, ale spát chodíte do vlastní místnosti.

Pro koho má smysl:
- Pár, který chce bydlet spolu, ale nepotřebuje vlastní kuchyňku (1+kk je pro ně moc drahé).
- Jednotlivec, který potřebuje víc prostoru než kapsle a chce mít celý pokoj jen pro sebe, ale nepotřebuje plně privátní byt.
- Někdo, kdo pracuje doma a chce mít vlastní místnost bez kompromisu se spolubydlícím, ale nevadí mu komunita ve sdíleném bytě.

V pokoji je standardně manželská postel 200×190 cm (nebo 230×200 cm). Pokud místo manželské postele preferujete dvě jednolůžka pro nepárové sdílení (např. dva kamarádi), dohodneme se při rezervaci.

6 000 Kč měsíčně v krátkém pobytu; 4 500 Kč při ročním závazku. Pro pár to vychází 3 000 Kč na osobu základní cenu, 2 250 Kč na osobu ročně.

**Klíčové vlastnosti:**
- Vlastní celý pokoj v rámci sdíleného bytu, žádný spolubydlící v pokoji
- Manželská postel 200×190 cm nebo 230×200 cm (volíš při rezervaci podle dostupnosti)
- Alternativní konfigurace: 2× jednolůžka 200×80 cm pro nepárové sdílení (po dohodě)
- Vlastní skříň, pracovní stůl, lampy
- Vlastní okno a teploměr v pokoji
- Sdílená koupelna a kuchyň v rámci patrového bytu se 2-4 dalšími pokoji
- Možné sdílené obývací prostory v rámci bytu
- 5 jízd Hub-shuttle + 1 jízda Hub-taxi měsíčně v ceně

**Specifikace:**
- Pokoj plocha: 18-22 m²
- Konfigurace matrace: 1× manželská 200×190 cm nebo 230×200 cm (standardně); alternativně 2× jednolůžka 200×80 cm po dohodě
- Vlastní koupelna: ne, sdílená v rámci patrového bytu (2-4 další pokoje)
- Kuchyňský kout: ne, sdílená kuchyň v rámci patrového bytu
- Spolubydlící v pokoji: ne, máš celý pokoj
- Spolubydlící v bytě: ano, 2-6 osob ve 2-4 dalších pokojích bytu

**Cena:**
- Anchor (1-2 měs): 6 000 Kč/měsíc za pokoj (= 3 000 Kč/osobu při páru)
- 3+ měsíců: 5 700 Kč (-5 %)
- 6+ měsíců: 5 100 Kč (-15 %)
- 12+ měsíců: 4 500 Kč (-25 %, = 2 250 Kč/osobu)
**Obrázky:**
- [ ] Hero: privátní pokoj s manželskou postelí 200×190, denní světlo z okna, pracovní stůl, vlastní skříň (Tier A #8)
- [ ] Detail: pokoj v ranní atmosféře


---

## 2. Coworkingové zázemí

**Úvod pro celou sekci:**

Coworkingové zázemí je v budově C v jádře areálu (1. nadzemní podlaží). Budova C je komunitní centrum Hubu - kromě coworkingu jsou tu i klubovna a další společenské prostory. Pět typů pracovních prostor: volný stůl ve velkém sále, fixní stůl s vlastní skříňkou, sdílená kancelář pro čtyři, zasedací místnost na hodinovou rezervaci, ateliér pro tvořivou práci. Dílny jsou v samostatných objektech (H1-H3, D1, D2) v jiné části areálu.

Pro každého rezidenta Hubu je volný stůl v sále v ceně bydlení (přístup 24/7, bez omezení). Pro externí pracovníky z okolí jsou všechny typy dostupné za měsíční nebo hodinový tarif.

**Hlavní obrázek (volitelně):**
- [ ] Coworking sál: 85mm dokumentární foto, odpolední protisvětlo, několik lidí v soustředění (Tier A #3)

### 2.1 Coworkingový sál (volný stůl)

**Krátký popis:**

Velký společný sál s volnými stoly. Přijdeš s notebookem, sedneš, pracuješ. Pro rezidenty Hubu zdarma, externí 2 900 Kč/měsíc.

**Hlavní text:**

Coworkingový sál v 1. NP budovy C je hlavní pracovní místo Hubu. Velký otevřený prostor s denním světlem z velkých oken, dřevěné podlahy, stoly s ergonomickými židlemi, dva kávovary, vodní stanice. Wi-Fi přes celý prostor, tiché telefonní budky pro hovory.

Kapacita: 30-40 míst současně. Provoz 24/7, přístup čipem.

**Provozní info:**
- Otevírací doba: 24/7
- Kapacita: 30-40 míst
- Pro rezidenty: zdarma, neomezený přístup
- Pro externí: 2 900 Kč/měsíc (přístupový čip, neomezený přístup)
- Vyžaduje se: u externích registrace s krátkým životopisem a LinkedIn profilem (omezujeme transientní využití)

**Klíčové vlastnosti:**
- 30-40 volných stolů, žádné rezervace
- Wi-Fi přes celý prostor
- 2 kávovary, voda, čaj zdarma
- 4 tiché telefonní budky pro hovory
- Tiskárna a skener za drobný kredit
- Pohovkový kout pro neformální schůzky

**Obrázky:**
- [ ] Coworking sál hero (Tier A #3)
- [ ] Detail jednoho stolu s notebookem a kávou

### 2.2 Fixní stůl (dedicated desk)

**Krátký popis:**

Tvůj vlastní stůl v rohu sálu nebo v menší zóně. Vlastní skříňka, dva monitory, ergonomická židle. 4 200 Kč/měsíc pro rezidenty i externí.

**Hlavní text:**

Fixní stůl je stejný stůl, na kterém pracuješ každý den. Personalizovaný setup: dva monitory, ergonomická židle, lampa, organizér. Pod stolem zamykatelná skříňka na nábytek z domova, dokumenty, druhý notebook.

Pro koho má smysl: lidi, kteří potřebují víc soustředění než ve volném sále, lidi, kteří mají dvě obrazovky nebo specifické nástroje (grafici, programátoři), nebo lidi, kteří chtějí stálé fyzické zázemí v Hubu i bez bydlení.

**Provozní info:**
- Otevírací doba: 24/7
- Cena: 4 200 Kč/měsíc (stejná pro rezidenty i externí; rezidenti platí navíc k bydlení)
- Smlouva: minimálně 3 měsíce
- Výpovědní lhůta: 30 dnů

**Klíčové vlastnosti:**
- Vlastní fixní stůl
- 2× monitor 27" (Full HD nebo 4K, volíš)
- Ergonomická židle
- Lampa s nastavitelným světlem
- Uzamykatelná skříňka pod stolem
- Vlastní teleprezenční slot v kalendáři

**Obrázky:**
- [ ] Fixní stůl s personalizovaným setupem, dva monitory, rostlina, obraz

### 2.3 Sdílená kancelář pro čtyři

**Krátký popis:**

Privátní kancelář pro 4-členný tým. Stůl pro čtyři, whiteboard, vlastní zámek. 15 000 Kč/měsíc za celý prostor.

**Hlavní text:**

Sdílená kancelář je menší privátní místnost v patře budovy C. 15-20 m², čtyři samostatné stoly nebo dva propojené (volíte při nastavení), whiteboard 1,5 × 1,2 m, vlastní zámek na dveřích.

Hodí se pro startupové týmy, agenturní 4-členné týmy, sociolingvistické laboratoře, malé inženýrské skupiny. Pro tým, který už nezvládá open space a potřebuje soustředění v menší skupině.

Cena 15 000 Kč za celou kancelář, 3 750 Kč na osobu při čtyřčlenném týmu.

**Provozní info:**
- Otevírací doba: 24/7 (přístupový čip)
- Kapacita: 4 stoly s ergonomickými židlemi
- Cena: 15 000 Kč/měsíc za celý prostor
- Smlouva: minimálně 6 měsíců
- Výpovědní lhůta: 60 dnů

**Klíčové vlastnosti:**
- 4 stoly v privátní místnosti
- Whiteboard 1,5 × 1,2 m
- Vlastní zámek na dveřích
- 2× monitor 27" sdílený mezi týmem
- Vlastní wifi router (volitelné, kvůli VPN izolaci)
- Zasedací místnost v ceně 4 hodiny měsíčně (rezervujete předem)

**Obrázky:**
- [ ] 4-členný tým u společného stolu, whiteboard za nimi

### 2.4 Zasedací místnost

**Krátký popis:**

Vyhrazená zasedací místnost pro 6 osob. AV technika, tabule, kávovar v rohu. 350 Kč/hod nebo 2 000 Kč na celý den.

**Hlavní text:**

Dvě zasedací místnosti v patře budovy C, každá pro 6 osob. Audiovizuální technika (Smart TV 65", konferenční mikrofon, kamera), tabule, kávovar v rohu, voda.

Rezervace přes komunitní aplikaci nebo telefonicky v recepci. Pro rezidenty bydlení v Hubu: 4 hodiny měsíčně zdarma (rezerva mimo špičku), nad rámec hodinová sazba. Pro externí: hodinová sazba bez slevy.

**Provozní info:**
- Otevírací doba: po telefonické nebo aplikační rezervaci, 07:00-22:00
- Kapacita: 6 osob (každá místnost)
- Cena: 350 Kč/hod externí, 1 200 Kč/půlden, 2 000 Kč/celý den
- Pro rezidenty: 4 hodiny v měsíci zdarma, nad rámec hodinová sazba
- Pro fixní stůl: 4 hodiny v měsíci zdarma v rámci ceny stolu

**Klíčové vlastnosti:**
- 6 osob, jednací stůl
- Smart TV 65" s HDMI + AirPlay + Miracast
- Konferenční mikrofon a kamera pro hybridní setkání
- Whiteboard 1,5 × 1,2 m
- Vlastní zámek
- Kávovar a voda

**Obrázky:**
- [ ] Zasedací místnost se 6 osobami na meeting, AV technika v provozu

### 2.5 Ateliéry a dílny

**Krátký popis:**

Pro tvořivou práci: ateliéry (D1) a dílny (H1-H3, D1, D2) v samostatných objektech areálu. Měsíční tarif (ateliér 6 500 Kč) nebo členská dílna (490 Kč/měs + hodinová sazba pro CNC a laser).

**Hlavní text:**

Ateliéry jsou v budově D1, hlavním ateliérovém bloku areálu. Plocha 15-25 m² na ateliér, vlastní zámek, velká okna pro denní světlo, elektrika 16A jednofázová (380V možno doplnit), umyvadlo. Vhodné pro malíře, grafiky, keramiky, řemeslníky s vlastním nářadím, brand a UX designéry, fotografy s vlastním studiem.

6 500 Kč/měsíc za ateliér 20 m² (= cca 325 Kč/m², stejná úroveň jako Pragovka Art District v Praze 9). Bez slevy pro rezidenty (ateliér je samostatný produkt nad rámec bydlení).

Dílny jsou v budovách H1, H2, H3 (sklady + dílny) a D1, D2 (ateliéry a dílny). Základní členství 490 Kč/měs zpřístupní ruční nářadí, pracovní stoly, pájecí stanice, brusky, elektrické nářadí. Pro CNC, laser, 3D tiskárny a větší obráběcí stroje je nad rámec hodinová sazba 150 Kč/hod (RFID zámek u stroje, automatické účtování).

**Provozní info:**
- Otevírací doba ateliérů: 24/7 (vlastní zámek)
- Otevírací doba dílen základních: 06:00-22:00
- Otevírací doba dílen s těžkou technikou: 08:00-20:00, jen pro proškolené (BOZP)
- Cena ateliér: 6 500 Kč/měs za 20 m² (± 10 % podle skutečné plochy)
- Cena dílna členství: 490 Kč/měs
- Cena dílna těžké stroje: 150 Kč/hod RFID-billed

**Klíčové vlastnosti ateliéru:**
- Vlastní zámek a 24/7 přístup
- Denní světlo z velkých oken
- Elektrika 16A jednofázová (380V po dohodě)
- Umyvadlo
- Skladovací prostor v patře (v ceně 1 m² na ateliér)
**Klíčové vlastnosti dílny:**
- Ruční nářadí kompletní (DeWalt, Festool, Bosch)
- Pracovní stoly, svěráky, brusky, pájení
- Vrtačky, pily, frézy (členská sazba)
- CNC frézka, laserová řezačka, 3D tiskárny (hodinová sazba)
- BOZP školení 1× při nástupu (zdarma, 2 hodiny)

**Obrázky:**
- [ ] Ateliér s tvůrcem v práci, denní světlo, velký stůl
- [ ] Dílna základní s ručním nářadím
- [ ] Dílna těžké stroje (CNC, laser, 3D tiskárna)


---

## 3. Komunitní zázemí

**Úvod pro sekci:**

Hub má v areálu vlastní wellness, venkovní program v komunitním parku, gastro v centrálním kuchyňském bloku, a klubovnu jako společenský prostor. Pro rezidenty s vyšším tarifem (12+ měsíců) jsou některé prvky v ceně bydlení (poukaz do sauny týdně, přístup ke společné kuchyni a zahrádkám), pro krátkodobé pobyty a pro externí návštěvníky platí tarif podle prvku.

> **Důležité k revizi s Markem:** Některé položky, které jsme původně plánovali na webu zmínit (U-rampa, pump-rampa, skate-park, tělocvična na vzduchu, vířivky, ochlazovací bazénky, samostatná vinárna, food truck zone, hudební zkušebna, koncertní místnost, divadelní sál, kino sál), nejsou v masterplánu fáze 1 explicitně doložené. Než Marek potvrdí, co reálně bude ve fázi 1, držíme níže pouze prvky, které jsou na masterplánu vidět. Ostatní jsou označeny **TBD - počká na Markovo potvrzení**.

**Hlavní obrázek (volitelně):**
- [ ] Mozaika 6 momentů z masterplán-doložených amenit: bazén, sauna, kuchyňský blok, klubovna, dílna, komunitní zahrádka (Tier A #15, dočasná koláž do prvního provozu)

### 3.1 Wellness (Bazén a sauna)

V samostatném objektu v jádře areálu (viz masterplan, sektor mezi C a U s označením BAZÉN). Vedlejší objekt obsahuje saunu, wellness a prádelnu.

#### 3.1.1 Bazén

**Krátký popis:**

Letní vnitřní/venkovní bazén v areálu Hubu. Provozní detail (vnitřní vs venkovní, plocha, teplota) ještě upřesňujeme s Markem.

**Hlavní text:**

Bazén je v samostatném objektu uprostřed areálu, blízko coworkingu a komunitního zázemí (budova C) i obytných bloků (A1-A6). Slouží jako relaxační prostor pro rezidenty po práci, místo pro letní setkání, a malou kondiční možnost.

Provozní detaily (otevírací doba, vstupné pro externí, jestli je vyhřívaný v zimě) doplníme po finalizaci stavební dokumentace.

**Provozní info (k upřesnění):**
- Otevírací doba: TBD
- Vstupné pro rezidenty: v ceně tarifu 12+ měsíců, jinak za zvýhodněnou cenu
- Vstupné pro externí: TBD
- Sezónnost: TBD (celoroční vyhřívaný nebo letní)

**Obrázky:**
- [ ] Bazén při letním odpoledni, několik lidí, sluneční terasa

#### 3.1.2 Sauna a wellness

**Krátký popis:**

Veřejná sauna pro 6-8 osob, plus menší wellness prostor (sprchy, odpočinková zóna). Vedle bazénu, ve stejném vedlejším objektu jako prádelna.

**Hlavní text:**

Sauna se topí dle harmonogramu (zatím navrhujeme čtvrtek-sobota večery, k upřesnění podle reálné poptávky). Pro rezidenty v ceně tarifu 12+ měsíců poukaz 1× týdně, jinak vstupné podle ceníku.

Wellness místnost vedle sauny má sprchy a odpočinková lehátka. Slouží pro klidové dochlazení po sauně a pro relaxaci po sportu.

**Provozní info:**
- Sauna: TBD (návrh čtvrtek-sobota 18:00-22:00, k revizi)
- Kapacita sauny: 6-8 osob
- Wellness místnost: souběžně se saunou
- Pro rezidenty 12+ tarif: 1 vstup týdně zdarma
- Pro krátkodobé rezidenty a externí: cena podle ceníku (TBD)

**Obrázky:**
- [ ] Sauna v tlumeném světle, dřevo, kameny
- [ ] Wellness odpočinková zóna

### 3.2 Venkovní program (komunitní park)

V modré zóně masterplánu (18 000 m², zázemí Hubu). Otevřený park pro rezidenty i externí návštěvníky obce. Žádné turnikety ani vstupné, jen pravidla provozu.

#### 3.2.1 Komunitní zahrádky

**Krátký popis:**

Plochy v komunitním parku, kde si rezidenti pěstují bylinky, zeleninu a květiny.

**Hlavní text:**

Komunitní zahrádky jsou v severní části komunitního parku. Plocha je rozdělená na malé záhony, které si rezidenti rezervují na sezónu (od jara do podzimu). Voda, kompost a základní nářadí v ceně. Pro nováčky 1× ročně otevíráme začátečnický workshop s místním zahradníkem.

**Provozní info:**
- Sezóna: duben-říjen
- Záhon na rezidenta: TBD (předpoklad cca 4-6 m²/záhon)
- Rezervace: přes komunitní aplikaci na jaro každý rok
- Materiál a voda: v ceně tarifu Hubu
- Externí zájemci z Klecan: TBD

**Obrázky:**
- [ ] Komunitní zahrádky v ranní rosě, lidé v práci

#### 3.2.2 Grilovací místa

**Krátký popis:**

Vyhrazená místa s pevnými grily v komunitním parku, k volnému použití po rezervaci.

**Hlavní text:**

Tři až čtyři grilovací místa s pevnými grily, lavičkami a stoly. Rezervace přes komunitní aplikaci na konkrétní den a čas. Uhlí, dřevo a podpalovač přinesete vlastní, nebo zakoupíte v kantýně. Po use vyklidíte popel.

V letní sezóně organizujeme pravidelná komunitní grilování (návrh sobota poledne), kterých se rezidenti účastní s vlastním jídlem k sdílení.

**Provozní info:**
- Počet míst: 3-4 (k upřesnění)
- Rezervace: aplikace Hubu, max 24 hodin předem
- Pro rezidenty: zdarma
- Pro externí: TBD

**Obrázky:**
- [ ] Rodinné grilování v sobotu poledne

#### 3.2.3 Hřiště a venkovní posezení

**Krátký popis:**

Otevřené hřiště v komunitním parku, venkovní posezení s lavičkami a stoly. Typ hřiště (dětské, sportovní, multifunkční) k upřesnění s Markem.

**Hlavní text:**

V komunitním parku je hřiště obecného typu a několik venkovních posezení s pevnými stoly a lavičkami. Slouží pro neformální setkání rezidentů, pro děti, pro práci venku v letní sezóně.

**Provozní info:**
- Typ hřiště: TBD (Marek upřesní jestli dětské, sportovní, nebo multifunkční)
- Otevřené: nonstop, veřejně přístupné
- Mobiliář: stoly, lavičky, případně stojany na kolo

**Obrázky:**
- [ ] Venkovní posezení s lavicemi, jaro

### 3.3 Gastro (Kuchyňský blok B)

Hlavní gastro hub Hubu je v budově B na masterplánu - „Kuchyňský blok". Obsahuje pekárnu, restauraci a kantýnu. Jeden objekt, různé režimy provozu.

#### 3.3.1 Kantýna

**Krátký popis:**

Polední menu pro rezidenty i externí, jednoduchá jídla za rozumnou cenu.

**Hlavní text:**

Kantýna v budově B nabízí polední menu v pracovní dny. Tři až čtyři varianty hlavního jídla (jedno vegetariánské, jedno levné maso), polévka, salát. Cena polední meníčko TBD (návrh 130-180 Kč podle tržního průměru pro Prahu-okolí 2026).

Vstup volný pro všechny, žádné průkazky. Platba kartou v aplikaci nebo přímo v kantýně.

**Provozní info:**
- Po-Pá: 11:00-14:00 (polední menu)
- Cena polední menu: TBD (návrh 130-180 Kč)
- Pro rezidenty 12+ tarif: TBD jestli sleva
- Po-Pá ráno: TBD jestli snídaně

**Obrázky:**
- [ ] Polední menu, lidé v řadě, kuchař v práci

#### 3.3.2 Restaurace

**Krátký popis:**

Večerní restaurace v kuchyňském bloku B, sezónní menu, brunch víkendy.

**Hlavní text:**

Restaurace přebírá kuchyňský blok B večerně a o víkendech. Sezónní menu, jednodušší á la carte. Vhodné pro setkání rezidentů s návštěvami z Prahy, pro páry, pro malé skupiny do 12 lidí.

Sobotní brunch (návrh 11:00-14:00 s živou hudbou), nedělní rodinný oběd. Rezervace přes web nebo telefonicky.

**Provozní info:**
- Po-Pá: 17:00-22:00 (večerní á la carte)
- So-Ne: 11:00-22:00 (brunch + oběd + večeře)
- Rezervace: přes web nebo telefonicky
- Cena hlavního jídla: TBD (návrh 250-380 Kč)
- Pro rezidenty 12+ tarif: TBD jestli věrnostní sleva

**Obrázky:**
- [ ] Večerní bistro, modrá hodina, světla u stolů

#### 3.3.3 Pekárna

**Krátký popis:**

Ranní pekárna v kuchyňském bloku B. Chléb, pečivo, jednoduché snídaně k odnesení.

**Hlavní text:**

Pekárna otevírá ráno (návrh 6:30) a obsluhuje rezidenty i obyvatele Klecan. Čerstvý chléb, croissanty, sladké pečivo, káva k odnesení. Začátek odpoledne pekárna zavírá, prostor přebírá kantýna pro polední menu.

**Provozní info:**
- Po-Pá: 6:30-10:30 (otevřeno)
- So-Ne: TBD (návrh 7:30-11:30)
- Cena: tržní, sladké pečivo cca 40-80 Kč, chléb 80-120 Kč
- Pro rezidenty: TBD jestli věrnostní sleva (např. káva v ceně tarifu)

**Obrázky:**
- [ ] Ranní pekárna, čerstvé pečivo na pultu

### 3.4 Klubovna a společenský prostor

#### 3.4.1 Klubovna v budově C

**Krátký popis:**

Multifunkční společenský prostor v budově K. Slouží pro komunitní akce, deskové hry, filmové projekce, diskuze.

**Hlavní text:**

Klubovna je v patrech budovy C, v jádře areálu, společně s coworkingem v 1. NP. Kapacita 30-50 lidí (k upřesnění podle dispozice). Vybavení: stoly s lavicemi, projektor a plátno, ozvučení, vařič na kávu, lednička.

V provozu pro pravidelné komunitní akce (návrh: úterní kvízový večer, čtvrteční deskoherní setkání, nedělní filmový klub). Rezidenti si můžou rezervovat klubovnu i pro soukromé akce (narozeniny, malé workshopy) podle volných termínů.

Pro externí návštěvníky Klecan: klubovna nabízí pronájem pro spolky a sousedské akce v cenách dohodou s OSA II.

**Provozní info:**
- Pravidelné akce: kvízový večer (úterý 20:00), deskoherní (čtvrtek 19:00), filmový klub (neděle 19:00) - k upřesnění s Markem
- Rezervace pro soukromé akce: přes komunitní aplikaci
- Kapacita: 30-50 osob (k upřesnění)
- Vybavení: projektor, ozvučení, kávovar, lednička

**Obrázky:**
- [ ] Quiz noc v klubovně, týmy u stolů

### 3.5 K upřesnění s Markem (amenity z původního návrhu, na masterplánu nedoložené)

Tato podsekce na webu zveřejněna nebude. Slouží jako interní seznam, co Marek potvrdí jako reálné ve fázi 1, fázi 2 nebo úplně vypustí:

- **U-rampa, pump-rampa, skate-park** - v sousedství je Skate hala Klecany v Dolních Kasárnách (verified), ale samostatný outdoor skate-program v Hubu na masterplánu není.
- **Tělocvična na vzduchu (outdoor workout)** - v sousedství obce je workout park u fotbalu (verified), v Hubu samostatně není.
- **Vířivky, ochlazovací bazénky** - na masterplánu je jen bazén a sauna, jednotlivé wellness prvky nedoložené.
- **Vinárna** - na masterplánu jen kuchyňský blok B; vinárna může být součástí B nebo samostatný program v K, k upřesnění.
- **Bufet, samostatný obchod, food truck zone** - na masterplánu jen kuchyňský blok B; rychlé občerstvení může být v kantýně, food truck zóna pravděpodobně ne (žádná vyhrazená zóna na plánu).
- **Hudební zkušebna** - na masterplánu nedoložená; mohla by být v některém z objektů H1-H3 dílen, ale není to explicitní.
- **Koncertní místnost** - na masterplánu nedoložená; klubovna v budově C může pokrýt menší koncerty, větší ne.
- **Divadelní sál, kino sál** - na masterplánu nedoložené; klubovna v budově C se na to nehodí (kapacita 30-50 osob, ne 100+).
- **Kuchyně pro přátele (sdílená komunitní kuchyně)** - může být v B nebo v některém z patrových společných prostor obytných bloků A1-A6, k upřesnění.

Po Markově odpovědi tyto položky buď přesunout do živých podsekcí 3.x s reálným textem, nebo úplně z webu vypustit.


---

## 4. Občanská vybavenost (okolí Klecan)

**Úvod pro sekci:**

Klecany jsou klidná obec na severním okraji Prahy. Hluboká práce v Klecanech, rušný život v Praze 15 minut autobusem. V docházkové a krátké dojezdové vzdálenosti najdete školství, zdravotnictví, obchody, sport, kulturu, poštu, banku a několik nabídek brigád pro studenty.

Všechna fakta níže pocházejí z verifikované rešerše (`SH_Web_Research_Klecany.md` v `Projects/SH_Web/Research/`). Adresy, vzdálenosti a otevírací doby jsou ověřené k 12. 5. 2026. Klient (OSA II) potvrzuje, že tato fakta zveřejníme s datem ověření a pravidelně aktualizujeme.

### 4.1 Vzdělávání

- **Mateřská škola Astra (Montessori)** - Dolní Kasárna 766 - 0 m od Hubu (v rámci areálu!) - Po-Pá 7:00-17:00 - česko-anglická Montessori školka v rámci komplexu Dolní Kasárna, viz `hlidani-praha.cz/astra`
- **Základní škola a Mateřská škola Klecany** - U Školky 74, výuka na Sídlišti 375 - 1,3 km - 16 minut pěšky, 5 minut na kole - `zsmsklecany.cz`
- **Základní umělecká škola Klecany (ZUŠ)** - Klecany 375 - 1,4 km - 17 minut pěšky - hudba a výtvarné obory - `zus.klecany.cz`
- **Gymnázia v Praze 8** (commute pro středoškoláky): Gymnázium Thomase Manna (Střížkovská, 8,5 km, 15 minut autem, 30 minut na kole + bus), Karlínské gymnázium (15 minut bus + metro)
- **Střední škola letecké a výpočetní techniky** - Odolena Voda (commute 15-20 minut autem)

### 4.2 Zdravotnictví

V jedné budově na adrese **U Školy 17** (1,3 km od Hubu, 16 minut pěšky, 5 minut na kole):

- **Ordinace Jach-Ta** (praktický lékař) - dr. Jáchym Bednář, dr. Pavla Stachoňová - Po a Čt do 18:00, ostatní dny dříve - online recepty přes Smartmedix - `jach-ta.cz`
- **MUDr. Alice Vosečková** (praktický lékař) - Po-Pá 8:00-13:00 - `mudrvoseckova.cz`
- **MUDr. Michaela Ondráčková** (zubařka) - Po 10-17, Út-Čt 8-15, Pá 8-12 - online rezervace - `stomatologie-ondrackova.cz`
- **Lékárna Klecany** - Po-Út do 16:00, Čt do 18:00, víkend ZAVŘENO - `lekarnici.cz`

Pohotovost a 24h lékárna nejsou v Klecanech k dispozici; nejbližší 24h lékárna je v centru Prahy (přes metro Kobylisy 25-30 minut).

### 4.3 Obchody

- **Potraviny Klecany** - V Honech 690/1 - 1,6 km - 20 minut pěšky - Po-Ne 7:00-19:00 - běžné potraviny, čerstvé pečivo, jízdenky PID - `mujobchod.cz`
- **Drogerie Och!** - Do Klecánek 58 - 1,1 km - 13 minut pěšky - otevřeno od 8:30 - čistící prostředky, drogerie, krmivo - `firmy.cz`
- **Lidl Zdiby** - Ke Zdibsku 272, Zdiby - 3,5 km - 6 minut autem, 15 minut na kole - Po-Ne do 21:00 - hlavní velký nákup
- **Albert Supermarket Roztoky** - Tyršovo nám. - 4,2 km přes Přívoz Klecánky - 25 minut s přívozem - Po-Ne 7:00-21:00 - alternativní velký nákup s krásnou cestou přes Vltavu

Pro tech-savvy: Rohlík.cz a Košík.cz doručují přímo do Klecan (nejbližší fyzický Rohlík Point je v Praze 6).

### 4.4 Pošta, balíkomaty, banka

- **Česká pošta Klecany** - Do Klecánek 52 - 1,1 km - hodiny dle aktuálního ceníku ČP (k aktualizaci)
- **Z-BOX Zásilkovna** - Do Klecánek 58 - 1,1 km - nonstop (vyžaduje Bluetooth a aplikaci)
- **AlzaBox Klecany** - Do Klecánek 58 - 1,1 km - nonstop (vyžaduje aplikaci Alza)
- **Bankomat MONETA Money Bank** - U Školky 74 - 1,3 km - nonstop bezkontaktní
- **Bankomat Komerční banka** - Zdibsko 164 - cca 2 km - nonstop

### 4.5 Sport a venkovní aktivity

- **Skate hala Klecany** - Dolní Kasárna - 100 m od Hubu (v rámci areálu!) - Po-Pá 14:00-21:00, So-Ne 10:00-21:00 - krytý dřevěný skatepark v bývalém vojenském areálu - `craness.cz/blogs/skateparky/skate-hala-klecany`
- **Fotbalové hřiště TJ Sokol Klecany** - Na Skalkách 368/33 - 1,8 km - 23 minut pěšky, 7 minut na kole - tréninky podle rozpisu - `sportmap.cz`
- **Workout a gril park** - centrum obce u fotbalu - 1,8 km - veřejně přístupné - revitalizované v posledních letech
- **Cyklostezka EuroVelo 7** - Vltavské nábřeží - 2,5 km - 30 minut pěšky, 10 minut na kole - nonstop - vede podél Vltavy směr Praha Bubenská i směr Mělník

### 4.6 Pracovní příležitosti v okolí

Pro studenty, kteří hledají brigádu nebo doplňkový příjem:

- **Alza.cz Logistické centrum Zdiby** - Zdibsko 615 - 2,5 km - 30 minut pěšky, 10 minut na kole - skladník na noční směny, brigády, nástupní mzda 31 900 Kč podle `kariera.alza.cz/pozice/skladnik-klecany/`
- **PURTEX s.r.o.** - Parkerova 617, Zdibsko - 2,5 km - údržba, provozní personál - `pracezarohem.cz`
- **HOPI** (logistika potravin) - region Zdiby - logistika a rozvoz potravin - `jooble.org`

### 4.7 Restaurace, kavárny a kultura

- **Kavárna Klícka** - Náměstí Třebízského 54 - 1,5 km - 20 minut pěšky - výběrová káva Coffee Spot, řemeslné pivo Zichovec, domácí pečivo - Čt do 21:00 - `kavarnaklicka.cz`
- **Sportklub Restaurace** - Na Skalkách 368/33 (u fotbalu) - 1,8 km - Po-Ne 11:00-23:00 - denní menu, pizza večer - `sportklubklecany.cz`
- **Kulturní centrum Rychta** - Klecany - 1,6 km - kapacita 232 osob - koncerty, plesy, kulturní akce dle programu KVČ Klecany - `mu-klecany.cz`
- **Letní kino Roztoky** - 4,5 km přes přívoz - sezónní vybrané večery v létě - `roztoky.cz`

### 4.8 Komunita

- **Klub volného času (KVČ)** - Klecany - workshopy, kurzy, deskoherní večery, masopust, plesy - aktualní program na `mu-klecany.cz`
- **Sportovní Jezdecký Klub Klecany** - Do Klecánek 25 - 1,1 km - klub jezdectví a péče o koně - `kurzy.cz`

### 4.9 Co v Klecanech NENÍ (otevřeně přiznáno)

- Žádný noční život po 23:00 (žádné kluby ani noční bary). Rámujeme to jako vlastnost, ne nedostatek: hluboký spánek pro tvrdou práci.
- Žádná víkendová lékárna (řešíme přes Rohlík/Košík nebo cestou do Prahy).
- Žádný hypermarket v docházkové vzdálenosti (Lidl Zdiby na kole nebo autem; donáška přes online supermarkety).
- Linka 374 má víkendovou frekvenci řidší (30-60 minut intervaly), večery v 22:50 poslední spoj. Hub-shuttle a Hub-taxi tento gap pokrývají.

**Hlavní obrázek (volitelně):**
- [ ] Mapa: Klecany, vzdálenosti, ikona Hubu uprostřed, ikony 8 anchorů z rešerše (Tier A #16, ale s rozšířenou legendou)


---

## 5. Dopravní dostupnost

**Úvod:**

Klecany jsou patnáct minut autobusem od metra Kobylisy. Pro rezidenty Hubu v ceně bydlení: pět jízd Hub-shuttle (peak doprava do Kobylis a zpět) a jedna jízda Hub-taxi (lokální v rámci Klecan, kolem Vltavy, nebo na nákup) měsíčně. Nad rámec za zvýhodněnou cenu.

Bus PID linka 374 jako záloha: 14 minut na Kobylisy v plné špičce s dedikovanými pruhy. Plánovaná tramvaj z Kobylis do Sedlce začne sloužit 2029-2030 (stavba 2027), plánovaná cyklolávka přes Vltavu spojí Klecany s vlakem do Masarykova nádraží 2027-2028.

**Hlavní obrázek / mapa:**
- [ ] Mapa: Klecany, vzdálenosti, autobus 374, plánovaná tramvaj, cyklolávka (Tier A #16)

### 5.1 Hub-shuttle (v ceně 5 jízd měsíčně)

**Hlavní text:**

Hub-shuttle je vlastní dopravní služba Hubu. Dvě devítimístné dodávky, peak doprava mezi Hubem a metrem Kobylisy. Časy: ranní špička 06:30-09:30 (odjezdy každých 30 minut), odpolední 15:30-18:30 (odjezdy každých 30 minut). Mimo špičku je k dispozici linka 374.

Cesta trvá 12-15 minut (mimo provoz může být i 10), což je rychleji než bus 374 (14-17 minut), protože shuttle jede přímou cestou bez stavění na všech zastávkách Zdiby, Veltěž a Přemyšlení.

V ceně bydlení: 5 jízd měsíčně na rezidenta. Po vyčerpání zvýhodněná sazba (cca 60 Kč za jízdu), tj. cca 30-50 % pod tarifem MHD nebo taxi.

**Provozní info:**
- Pracovní dny: 06:30-09:30 a 15:30-18:30
- Víkend a svátky: omezený provoz dle počasí a poptávky (zatím k upřesnění)
- Bookingová mechanika: rezervace v aplikaci Hubu, max 12 hodin předem
- Pro rezidenty: 5 jízd zdarma za měsíc
- Po vyčerpání: cca 60 Kč za jízdu (zvýhodněná sazba)

### 5.2 Linka 374 PID (záloha)

**Hlavní text:**

Linka 374 je standardní pražská integrovaná doprava. Trasa Klecany, Zdiby, Veltěž, Přemyšlení, Kobylisy. Cesta z Klecan na Kobylisy: 14-17 minut ve špičce s dedikovanými autobusovými pruhy na Cínovecké, mimo špičku 12-14 minut.

Frekvence: ve špičce každých 15 minut, mimo špičku každých 30 minut, ve večerních hodinách a o víkendech 30-60 minut. Poslední bus z Kobylis cca 22:50.

Tarif: standardní PID jízdenka. Pro Klecany potřebuješ tarif na 3 pásma (P+0+B), měsíční předplatné 1 488 Kč podle PID Lítačka ceníku 2026.

**Provozní info:**
- Zastávky u Hubu: „Klecany, U Kostela" (1,2 km od Hubu, 15 minut pěšky)
- Zastávky alternativně: „Klecany, U hřbitova" (300 m od hlavního vstupu Hubu)
- Frekvence ve špičce: cca 15 minut
- Frekvence mimo špičku: cca 30 minut
- Poslední bus večer: cca 22:50
- Tarif: 3 pásma PID (Praha + Středočeský kraj), měsíční 1 488 Kč

### 5.3 Hub-taxi (v ceně 1 jízda měsíčně, lokální)

**Hlavní text:**

Hub-taxi je lokální doprava v rámci Klecan a okolí (Roztoky, Zdiby, Dolní Chabry). Volá se přes aplikaci Hubu. Provozuje smluvní lokální dopravce nebo platforma typu Bolt Business (k upřesnění, viz otevřená otázka v `SH_Web_Plan.md`).

V ceně bydlení: 1 jízda měsíčně na rezidenta. Po vyčerpání zvýhodněná sazba.

Užitečné použití: večerní návrat z nákupu z Lidlu Zdiby, doprovod při stěhování věcí z Klecan na vlak, výjezd na vlakové nádraží Roztoky-Žalov, lékař na Kobylisích po skončení autobusu, doprava v nemoci.

**Provozní info:**
- Dostupnost: nonstop, krátká reakce
- Pro rezidenty: 1 jízda zdarma za měsíc
- Po vyčerpání: cca 80-150 Kč za jízdu (zvýhodněná sazba podle vzdálenosti)

### 5.4 Auto a parkování

**Hlavní text:**

Hub má parkoviště v rámci areálu (viz masterplan, dvě plochy: vlevo nahoře a uprostřed). Kapacita: TBD (Marek upřesní podle finální projektové dokumentace). Pro rezidenty Hubu vyhrazené stání zdarma, pro hosty dohodou.

Z Hubu na D8 sjezd Zdiby (MÚK Zdiby) je 3 km, cca 5 minut autem. Z MÚK Zdiby na centrum Prahy přes Cínoveckou cca 15 minut (špička může být 25-35 minut).

P+R Kobylisy je k dispozici 6,8 km od Hubu (11 minut autem), pak metro do centra.

**Provozní info:**
- Parkování v areálu: kapacita TBD, pro rezidenty zdarma
- D8 MÚK Zdiby: 3 km, 5 minut
- D8 MÚK Zdiby na centrum Prahy: 15-35 minut podle dopravy
- P+R Kobylisy: 6,8 km, 11 minut

### 5.5 Kolo a pěšky

**Hlavní text:**

Cyklostezka EuroVelo 7 prochází podél Vltavy pod Klecanami. Z Hubu na cyklostezku cca 30 minut pěšky nebo 10 minut na kole (sestup do údolí Vltavy).

Plánovaná cyklolávka přes Vltavu mezi Roztoky a Klecany: stavba 2027-2028. Po dokončení bude spojení Roztoky, vlak na Masarykovo nádraží v Praze trvat cca 10-15 minut na kole + 14 minut vlakem, tedy 25-30 minut na centrum Prahy z Hubu, mimo metro Kobylisy.

Klecany mají vlastní pěší a cyklistickou infrastrukturu: chodníky kolem ulic centrem, polní cesty kolem areálu, navazují na turistické trasy podél Vltavy.

**Provozní info:**
- EuroVelo 7: dostupná z Hubu pěšky 30 minut, na kole 10 minut
- Plánovaná cyklolávka: stavba 2027-2028 (per Středočeský kraj a IDSK, viz `SH_Web_Research_Transport.md`)
- Půjčovna kol v Hubu: TBD (Marek upřesní jestli budeme sami provozovat nebo partnerství s lokální službou)

### 5.6 Plánovaná tramvaj Kobylisy-Sedlec

**Hlavní text:**

Středočeský kraj a IDSK plánují prodloužení tramvajové linky 17 z Kobylis přes Zdiby do Sedlce (5,2-5,6 km nové trati). První územní rozhodnutí získalo právní moc v lednu 2025, stavba 2027, provoz 2029-2030.

Po dokončení: čtyřminutové intervaly trolejové části ve špičce (linky 17 + 10 souběžně), 8-minutové mimo špičku. Z Hubu na tramvajovou zastávku v Sedleci 5-minutový lokální autobus (nová linka 885 plánovaná, viz `SH_Web_Research_Transport.md`). Pak tramvaj přímo na centrum Prahy bez přestupu na metro.

**Provozní info:**
- Stav: stavba 2027, provoz 2029-2030 (per IDSK plánování, k aktualizaci podle skutečného postupu)
- Z Hubu na koncovou Sedlec: 5 minut autobus
- Frekvence trolejové části: 4-8 minut
- Bez přestupu do Holešovic, Karlína, Vinohrad

**Důležité upozornění:**

Tramvaj a cyklolávka jsou plánované investice se schváleným územním rozhodnutím, ale ještě nejsou postaveny. Mluvíme o nich otevřeně v budoucím čase. Hub-shuttle a linka 374 jsou dostupné dnes.

---

## 6. Pobytová stipendia

**Úvod:**

Hub Klecany nabízí pobytové stipendium pro lidi, kteří k projektu reálně přispějí. Bydlení nebo jeho zvýhodněnou cenu vyměníme za hmatatelný vstup do života Hubu, ne za vágní „pomoc kolem".

První otevřená výzva proběhne na podzim 2026 (pilot 8-12 míst). Konkrétní harmonogram, výběrová komise, daňové detaily a smluvní podmínky doladíme s právníkem před prvním ostrým kolem a zveřejníme zde.

**Hlavní obrázek:**
- [ ] Ateliér s rezidentem-tvůrcem v práci, denní světlo (Tier A není; doplníme s Tier B vizualizací stipendia)

### 6.1 Čtyři role v programu

Stipendium pokrývá čtyři rozdílné role. Při registraci zájmu vyberete tu, která vám sedí, nebo se ozveme s návrhem.

#### Rezident-tvůrce

Umělec, výzkumník, designér, autor nebo žurnalista, který pracuje na vlastním projektu. Stipendium pokrývá tříměsíční pobyt v Hubu, za to v Hubu uděláte dvě otevřené dílny nebo prezentace pro komunitu, plus závěrečnou dokumentaci své práce. Hodí se pro lidi, kteří potřebují klid blízko Prahy a nemají rozpočet na pražský ateliér.

#### Správce na výměnu (work-trade)

Operativní role v provozu Hubu: večerní recepce, koordinace komunitních akcí, péče o sdílené prostory, pomoc s návštěvníky. Měsíční úvazek 32-40 hodin (asi 8-10 hodin týdně), za to výrazně zvýhodněné nebo plně hrazené bydlení. Hodí se pro lidi, kteří mají vlastní práci na dálku a chtějí být součástí provozu Hubu.

#### Stavitel-rezident

Účast na konkrétní stavební nebo rekonstrukční fázi Hubu. Týden v měsíci na staveništi, zbytek měsíce vlastní práce. Stipendium pokrývá bydlení plus malý materiálový rozpočet. Hodí se pro lidi se stavebními dovednostmi, kteří chtějí být u toho a mít na tom autorský podíl.

#### Rezident-programátor

Vývojář, který buduje konkrétní digitální nástroj pro Hub: rezervační systém, komunitní aplikaci, dokumentační platformu, integraci s Cloudflare backendem. Tříměsíční pobyt s konkrétním deliverable na konci. Hodí se pro full-stack developery nebo design-developery, kteří chtějí pracovat na reálném produktu s reálnými uživateli.

### 6.2 Jak se přihlásit

Při registraci zájmu o bydlení (`/rezervace/`) zaškrtnete přepínač **„Mám zájem o pobytové stipendium"**. Není to závazná přihláška, jen signál: až se otevře první kolo, ozveme se s konkrétními podmínkami, termíny a formulářem.

První otevřená výzva: **podzim 2026**. Cyklus pilotu: tři měsíce, 8-12 míst, primárně role rezident-tvůrce.

### 6.3 Co stipendium pokrývá

Plný rozsah finalizujeme s právníkem před prvním kolem, ale rámec je:
- Bydlení v jedné z devíti variant podle dohody
- Sdílené zázemí Hubu v ceně (coworking, sauna 1× týdně, společná kuchyně, Hub-shuttle)
- Pro role s pracovní složkou (work-trade, stavitel) plus malý peněžní příspěvek nebo dohoda o provedení práce

Pro plnou právní strukturu a daňový rámec viz interní rešerše `SH_Web_Research_Stipend.md` v Projects/SH_Web/Research/ (nezveřejňujeme na webu, slouží jako podklad pro pilotní kolo).

**Obrázky:**
- [ ] Ateliér s tvůrcem
- [ ] Skupinový moment u stolu (společné plánování nebo večeře rezidentů)
- [ ] Stavitel-rezident v akci


---

## 7. Galerie

**Úvod:**

Galerie je auto-generovaná z fotek napříč webem (ubytování, coworking, komunita, doprava, okolí). Vedle toho máme dedikované foto-skupiny, které drží jednu narativní linii a doplňují ji o moment, který v běžných sekcích nedostává prostor.

Skupiny otevíráme postupně, podle toho, co reálně produkujeme. Některé naběhnou až po prvním provozním roce (Akce 2026, Tváře komunity), jiné už můžeme plnit teď (Z výstavby, Areál v ročních obdobích).

### 7.1 Foto-skupiny

#### 7.1.1 Z výstavby

**Krátký popis:**

Postup rekonstrukce horních kasáren v Klecanech. Bourání, vyklízení, první instalace, dokončení interiéru. Dokumentační styl, ne marketingový.

**Účel:**

Ukazuje, že stavíme reálnou věc, ne render. Zveřejňujeme měsíčně po dokončení dalších milníků.

**Fotky:**
- [ ] Stav před rekonstrukcí (vojenský areál, holé budovy)
- [ ] První fáze bourání a vyklízení
- [ ] Postupně další milníky (po měsících)

#### 7.1.2 Areál v ročních obdobích

**Krátký popis:**

Stejné záběry areálu pořízené na jaře, v létě, na podzim, v zimě. Kontext: areál v krajině nad Vltavou.

**Účel:**

Ukázat, že to není sezónní destinace ale celoroční prostor pro život.

**Fotky:**
- [ ] Areál jaro (mlha, první zeleň)
- [ ] Areál léto (komunitní park v plné zeleni)
- [ ] Areál podzim (barvy, sklizeň ze zahrádek)
- [ ] Areál zima (sníh, světla v oknech)

#### 7.1.3 Tváře komunity (postupně po prvním kole)

**Krátký popis:**

Portréty rezidentů a tvůrců, kteří v Hubu bydlí nebo skrz něj prošli. Pojmenované s krátkým představením, co dělají.

**Účel:**

Pro mladé kreativce, kteří se rozhodují podle „kdo už tady je". Pojmenovaní lidé jsou silnější signál než atmosférické fotky.

**Fotky:**
- [ ] (otevřeme po výběru první kohorty stipendia, podzim 2026)

#### 7.1.4 Akce 2026 a dál

**Krátký popis:**

Fotky z reálných akcí v Hubu: otevření, sezónní festivaly, otevřené ateliéry, koncerty, společné večeře.

**Účel:**

Důkaz, že komunita reálně žije, ne jen v marketingových slibech.

**Fotky:**
- [ ] (otevřeme po první akci po launchi)


---

## 8. Novinky

**Úvod:**

Novinky fungují jako blog: jednotlivé články s datem, autorem a kategoriemi. Píšeme o postupu výstavby, otevřených výzvách (rezervace, stipendia), o tom, co se v Hubu stalo, a o širším projektu VPD1. Žádné PR fráze, žádné „revoluční oznámení". Cílem je, aby si zájemce přečetl pár článků a věděl, na čem jsme.

Frekvence: minimálně 1× měsíčně, lépe 2-3×, podle toho, co se reálně děje.

**Model článku:**

- Titulek (5-10 slov, konkrétní)
- Datum
- Autor (Marek Semerád nebo konkrétní rezident-přispěvatel)
- Krátký lede (1-2 věty, do 200 znaků)
- Hlavní text (300-1500 slov podle tématu)
- Hlavní obrázek
- Tagy / kategorie: Výstavba, Komunita, Stipendia, Provoz, VPD1 záměr, Klecany

**První článek (placeholder, vyplníme při launchi):**

#### 8.1 Otevíráme registraci zájmu o bydlení v Hubu

**Datum:** 2026-MM-DD (vyplníme dnem reálného spuštění)

**Autor:** Marek Semerád, předseda OSA II, z.s.

**Lede:**

Web Startovacího Hubu Klecany je živý. Devět typů bydlení, ceník, podmínky. Rezervace je nezávazná, slouží nám k tomu, abychom věděli, kdo má reálný zájem.

**Hlavní text (struktura k vyplnění):**

1. Co jsme spustili (web s 9 formáty, ceník, podmínky)
2. Proč registraci zájmu, ne závaznou rezervaci (zatím sbíráme demand signal, ne podpisujeme smlouvy)
3. Kdy to reálně začne (časový rámec rekonstrukce, kdy budou první rezidenti)
4. Co dál (kdy se ozveme, jak vyběhne výběr, jak to půjde do podpisu smluv)
5. Kontakt na otázky (vpd@osa2.cz, telefon)

**Hlavní obrázek:**
- [ ] Foto nebo render areálu, klidný moment, ne efektní

**Tagy:** Provoz, Klecany, VPD1 záměr

### 8.2 Šablona pro další články

Když píšu nový článek do `/novinky/`, držím rytmus:

- **Co se reálně stalo** (fakt, datum, místo)
- **Co to znamená** (proč to čteš, jakou změnu to přinese)
- **Co je další krok** (kdy se k tomu vrátíme nebo co můžeš udělat ty)

Vyhýbám se: „jsme nadšeni, že", „s hrdostí oznamujeme", „revoluční krok kupředu". Místo toho: „dnes jsme dokončili první fázi bourání v budově A1", „od pondělka začínají pravidelné prohlídky areálu", „v listopadu otevíráme první otevřenou výzvu stipendia".


---

## 9. Rezervace

> Tato sekce řídí formulář. Konfigurátor je pětikrokový průvodce (viz `SH_Web_Plan.md` sekce „Reservation configurator"). Backend: Cloudflare Worker + Turnstile + Resend + D1 EU jurisdikce. Zatím není napojený, ale struktura textu a polí je locked.

### 9.1 Vstupní text pod hlavičkou

**Úvod (proč si rezervovat, jak rychle reagujeme):**

Sestav si bydlení podle toho, jak chceš v Hubu žít. Vyber typ, termín, délku pobytu a kontakt. Do 24 hodin se ti ozveme telefonicky a probereme detaily. Rezervace je nezávazná, neuzavíráš ji jako smlouvu, jen nám říkáš, že tě to zajímá.

### 9.2 Pole formuláře

Pětikrokový průvodce, struktura locked dle `SH_Web_Plan.md` „Reservation configurator":

**Krok 1: Koncept bydlení**
- Tři karty (radio): Privátní apartmán / Co-living / Nevím, poradíme

**Krok 2: Konfigurace prostoru** (podmínečné na kroku 1)
- Pokud Privátní: 5 karet (1+kk, 2+kk, 3+kk, 4+kk, 5+kk) s cenou za jednotku, cenou za osobu, plochou, lůžky
- Pokud Co-living: 4 karty (Jedno-lůžko 2L, Dvou-lůžko 2L, Kapsle single, Kapsle double) s cenou za osobu, výběr matrace (200×80 / 230×90 atd.)
- Pokud Nevím: 3 jednoduché otázky (rozpočet slider 3 000-25 000 Kč, soukromí vs komunita slider, úvazek full-time/hybrid/víkendy)

**Krok 3: Termín a stipendium**
- Měsíc nástupu (dropdown 09/2026 - 12/2027)
- Délka pobytu (radio: 1-2 měs / 3-5 měs / 6-11 měs / 12+ měs)
- Přepínač: „Mám zájem o pobytové stipendium (oznámíme vám příští výzvu)"

**Krok 4: Osobní profil**
- Křestní jméno (povinné)
- Příjmení (povinné)
- Telefonní číslo (povinné) - helper text: „Zavoláme do 24 hodin pro potvrzení detailů. Nikomu jinému ho nepředáme."
- E-mail (povinné)
- Poznámka (volitelná, do 500 znaků)

**Krok 5: Rekapitulace + GDPR**
- Souhrn: typ, termín, cena, vše v ceně (energie, internet, úklid, 5 jízd Hub-shuttle, 1 jízda Hub-taxi, coworking, sauna)
- GDPR checkbox: „Souhlasím se zpracováním osobních údajů pro účely vyřízení registrace zájmu. Viz [Zásady ochrany](/gdpr/)."
- Button: „Odeslat nezávaznou registraci"

**Stálý postranní panel** (přilepený na desktopu, rozbalitelný spodní panel na mobilu):
- Aktuální cena (mění se s konfigurací)
- Kontrolní seznam „vše v ceně" (energie, internet, úklid, Hub-shuttle 5 jízd, Hub-taxi 1 jízda, coworking, sauna)
- 4 amenity pilíře (Wellness, Sport, Gastro, Komunita) s popisky o tom, co spadá do každého

### 9.3 Po odeslání - success copy

**Hlavní hláška:**

Děkujeme, dorazilo. Zavoláme vám do 24 hodin.

**Co bude následovat (kdo, kdy, jak volá):**

Marek nebo někdo z rezervačního týmu se vám ozve telefonicky během příštího pracovního dne, většinou rychleji. Probereme, kdy chcete přijet na prohlídku, jaké jsou detaily kolem termínu nástupu a jak postupujeme dál. Když nestihnete, zavoláme znovu nebo napíšeme.

Toto je nezávazná registrace zájmu. Žádný závazek z vaší strany, žádný účet od nás. Pokud se rozhodnete jinak, prostě nám to dejte vědět nebo neodpovídejte, nic nezačne běžet.

### 9.4 Mini-FAQ pod formulářem

#### 9.4.1 Je registrace závazná?

**Otázka:** Co znamená „nezávazná registrace zájmu"? K čemu mě to zavazuje?

**Odpověď:** K ničemu. Není to nájemní ani ubytovací smlouva. Jen nám říkáte, že vás formát zajímá a chcete podrobnosti. My vám zavoláme, něco upřesníme. Pokud se rozhodnete nepokračovat, prostě neodpovíte při dalším kontaktu. Bez storno poplatku, bez zálohy.

#### 9.4.2 Kdy se mohu reálně nastěhovat?

**Otázka:** Kdy můžu reálně do Hubu nastoupit?

**Odpověď:** Hub je v projektové přípravě. Termíny otevření jednotlivých budov upřesňujeme s postupem rekonstrukce. V registraci vyberete měsíc, kdy byste chtěli nastoupit, a my vám při telefonu řekneme realisticky, jestli je to v té době možné. Pokud zatím není, navrhneme alternativy nebo se ozveme, až bude.

#### 9.4.3 Co když chci napřed přijet a podívat se?

**Otázka:** Můžu přijet do Klecan a podívat se, jak to vypadá, než se přihlásím?

**Odpověď:** Ano, pravidelně otevíráme prohlídky areálu. V registraci zatím není ani prohlídka závazná, jen nám usnadní, abychom věděli, koho čekat. Pokud chcete přijet bez registrace, napište na vpd@osa2.cz nebo zavolejte, domluvíme termín.


---

## 10. Kontakty

**Úvod:**

Hub a celý záměr VPD1 provozuje občanské sdružení Alternativa II, z.s. (OSA II). Hlavní kontakt je Marek Semerád, předseda spolku. Pro rezervace, novinky a otázky kolem provozu Hubu používejte společný kontakt `vpd@osa2.cz`. Pro tisk, médiové žádosti a větší partnerství máme oddělený kontakt (viz níže).

### 10.1 Provozovatel

- **Název organizace:** Občanské sdružení Alternativa II, z.s. (OSA II)
- **IČO:** TBD (Marek doplní)
- **Adresa:** Horní Kasárna Klecany, 250 67 Klecany
- **E-mail:** `vpd@osa2.cz`
- **Telefon:** TBD (Marek doplní číslo rezervačního oddělení)
- **Datová schránka:** TBD
- **Mateřský web:** [alternativa2.info](https://www.alternativa2.info/)

### 10.2 Osoby

#### 10.2.1 Marek Semerád, předseda OSA II

**Jméno:** Marek Semerád
**Funkce:** Předseda občanského sdružení Alternativa II, z.s. (OSA II), vedoucí záměru VPD1 a Startovacího Hubu Klecany
**E-mail:** `vpd@osa2.cz`
**Telefon:** TBD
**Foto (volitelně):**
- [ ] Portrét, neutrální pozadí, denní světlo

#### 10.2.2 Rezervační oddělení

**Funkce:** Zájemci o bydlení, plánování prohlídek areálu, ceník a podmínky
**Jméno:** TBD (Marek doplní jméno koordinátora rezervací)
**E-mail:** `vpd@osa2.cz` (společný)
**Telefon:** TBD

#### 10.2.3 Stipendijní program

**Funkce:** Otázky kolem pobytového stipendia, výběrový proces (otevírá se po pilotu podzim 2026)
**Jméno:** TBD
**E-mail:** `stipendium@startovacihub.cz` (návrh, k upřesnění) nebo `vpd@osa2.cz`
**Telefon:** TBD

#### 10.2.4 Tisk a média

**Funkce:** Médiové žádosti, rozhovory, podklady pro novináře
**Jméno:** TBD
**E-mail:** `tisk@startovacihub.cz` (návrh) nebo `vpd@osa2.cz`
**Telefon:** TBD

### 10.3 Kde nás najdeš (adresa a mapa)

**Adresa:** Horní Kasárna Klecany, 250 67 Klecany

**GPS:** TBD (Marek doplní souřadnice hlavního vstupu V z masterplánu)

**Otevírací doba kanceláře OSA II v Hubu:** TBD (návrh Po-Pá 9:00-17:00, k upřesnění)

**Hlavní vstup do areálu:** vrátnice V (viz masterplan), označený „Hlavní vstup". Z autobusové zastávky „Klecany, U hřbitova" pěšky 4 minuty.

**Mapa:**
- [ ] Statická mapa Mapy.cz se zvýrazněným areálem a 8 anchory okolí (Tier A #16); na detailní stránce klikatelná Leaflet mapa s detailními pinpointy

### 10.4 GDPR a právní

Ke všem kontaktům platí, že údaje, které nám napíšete, používáme jen k tomu, abychom vám odpověděli na konkrétní žádost a abychom vyřídili registraci zájmu. Nepředáváme je třetí straně, neposíláme spam. Plný text v [Zásadách ochrany osobních údajů](/gdpr/).

Hub a celý projekt jsou nekomerční záměr nestátního občanského sdružení; nehledáme zisk pro spolek, ale dostupné bydlení a komunitu pro cílovou skupinu Hubu.


---

## A) FAQ - všeobecné

> Nezávisle na sekcích. To, na co se ptají všichni. Vyplníme společně podle prvních reálných dotazů, které dostaneme po launchi.

#### A.1 Co je Startovací Hub Klecany a kdo ho provozuje?

**Otázka:** Co je Startovací Hub Klecany a kdo za ním stojí?

**Odpověď:** Hub je první fáze revitalizace bývalých horních kasáren v Klecanech (sever Prahy). 331 bytových jednotek typu 1+kk operativně konfigurovaných do 9 produktových variant (kapsle, sdílené pokoje, privátní 1+kk až 5+kk). K tomu coworking, sauna, bazén, dílny, ateliéry, klubovna, kuchyňský blok s pekárnou a restaurací, komunitní park. Provozuje občanské sdružení Alternativa II, z.s. (OSA II) v rámci záměru VPD1. Je to nekomerční projekt s cílem dostupné bydlení a komunita pro pracující studenty, OSVČ, mladé kreativce a začínající podnikatele.

#### A.2 Kdy se mohu reálně nastěhovat?

**Otázka:** Kdy reálně začne provoz a kdy se mohu nastěhovat?

**Odpověď:** Areál je v projektové přípravě (viz badge „V projektové přípravě" v hlavičce). Konkrétní termíny otevření jednotlivých budov a typů bydlení upřesňujeme s postupem rekonstrukce a zveřejňujeme v novinkách. Když si zaregistrujete zájem, při telefonickém potvrzení vám řekneme realisticky, jestli je váš preferovaný měsíc nástupu možný, nebo navrhneme alternativy.

#### A.3 Co je všechno v ceně bydlení?

**Otázka:** Co všechno je v ceně měsíčního nájmu?

**Odpověď:** Energie, internet, úklid společných prostor, 5 jízd Hub-shuttle do metra Kobylisy měsíčně, 1 jízda Hub-taxi lokálně měsíčně, přístup do coworkingového sálu (volný stůl 24/7), poukaz do sauny 1× týdně. Nad rámec za zvýhodněnou cenu: další jízdy shuttle a taxi, fixní stůl v coworkingu, ateliér nebo dílna se zvláštní sazbou, vybrané kulturní akce za vstupné.

#### A.4 Jak se k vám reálně dostanu z Prahy?

**Otázka:** Je to opravdu 15 minut do Prahy?

**Odpověď:** Z Klecan na metro Kobylisy: Hub-shuttle 12-15 minut (vlastní devítimístná dodávka v peak špičce ráno a odpoledne, pro rezidenty 5 jízd v ceně), PID linka 374 14-17 minut (standardní jízdenka). Na metru pak Florenc 9 minut, Karlák asi 12 minut. Tedy z bytu v Hubu na Florenc cca 25-30 minut, na Karlák cca 30-35 minut. Plánovaná tramvaj Kobylisy-Sedlec (2029-2030) toto zrychlí.

#### A.5 Můžu si přivézt domácího mazlíčka?

**Otázka:** Mazlíček ano nebo ne?

**Odpověď:** Předběžně ano, ale s dohodou. Plně privátní apartmány bez většího omezení (jen u sousedů zajistit dohodu o klidu). Co-living a kapsle, kde sdílíte prostor: dle dohody s ostatními rezidenty patra. Při registraci zájmu napište, jakého mazlíčka máte (pes velikost, kočka), domluvíme detaily. Definitivní pravidla doladíme s prvním kolem rezidentů.

#### A.6 Jak funguje stipendium? Kdy se otvírá?

**Otázka:** Slyšel jsem o pobytovém stipendiu. Co to je a jak se přihlásit?

**Odpověď:** Stipendium pokrývá nebo zvýhodňuje pobyt výměnou za hmatatelný vstup do života Hubu. Čtyři role: rezident-tvůrce (vlastní projekt), správce na výměnu (operativní role), stavitel-rezident (účast na rekonstrukci), rezident-programátor (vývoj digitální infrastruktury Hubu). První otevřená výzva: podzim 2026, pilot 8-12 míst, primárně rezident-tvůrce. V registraci zájmu o bydlení zaškrtnete přepínač „Mám zájem o pobytové stipendium", ozveme se, jakmile otevřeme výzvu. Konkrétní podmínky a daňový rámec finalizujeme s právníkem před první výzvou.

#### A.7 Můžu si v Hubu zaregistrovat sídlo OSVČ?

**Otázka:** Jsem živnostník, můžu si v Hubu zaregistrovat sídlo firmy?

**Odpověď:** Pracujeme na tom. Pro registraci sídla je třeba souhlas vlastníka prostor, který jako provozovatel poskytneme za drobný poplatek (cca 99 Kč/měs, k upřesnění) jen pro rezidenty Hubu. Sídlo nebude exklusivně využíváno, slouží jako poštovní adresa s skenováním pošty na e-mail. Pro detailní podmínky se ozvěte na `vpd@osa2.cz` při registraci zájmu.

#### A.8 Co se stane, když Hub nestihne otevřít, jak slibujete?

**Otázka:** Co se stane, když Hub nestihnete otevřít včas, jak plánujete?

**Odpověď:** Záleží na fázi. Pokud rezervace zájmu zatím neaktivuje žádný platební ani smluvní závazek, jsme oba kryti: nás nic netlačí spustit dřív, vás nic nezavazuje čekat. Když přijde termín otevření a něco se opozdí, ozveme se předem s odhadem, kdy reálně bude jednotka volná. Ve chvíli, kdy podepíšete reálnou nájemní nebo ubytovací smlouvu, jsou plnění a termíny závazné podle smluvního textu a podle občanského zákoníku.

#### A.9 Sdílím prostor s neznámými lidmi. Co s tím?

**Otázka:** Co když si v co-livingu nesedneme se spolubydlícím, kterého mi přidělíte?

**Odpověď:** Při registraci se ptáme na preference (klid, čas spánku, kuřáctví, partner, dítě), podle toho párujeme. Pokud první týden něco nefunguje, řešíme to. Přesun do jiné kapsle nebo do jiného pokoje provádíme zdarma, dokud zbývá volné lůžko. Pokud je obsazenost plná, hledáme jiné řešení (změna formátu, krátká přestávka, výpověď bez sankce v případě závažnějšího problému).

#### A.10 Jak velký je Hub a kolik tam reálně bude lidí?

**Otázka:** Kolik lidí v Hubu reálně bude?

**Odpověď:** Architektonický základ je přibližně 280-330 jednotek 1+kk v šesti obytných budovách (A1-A6). Sedmá budova C v jádru areálu obsahuje coworking a komunitní zázemí. Při plné obsazenosti všech variant by to bylo zhruba 500-600 lůžek. V první fázi spouštíme postupně po jednotlivých budovách, kapacita poroste s rekonstrukcí. V plně obsazené verzi bude Hub mít komunitní rozměr menšího městečka uvnitř obce Klecany.


---

## B) Co nemám vyplněné / co potřebuju doplnit od tebe

> Tady já (Claude) budu průběžně udržovat seznam neznámých. Ty se k tomu vracíš a doplňuješ. Já tu udržuju aktuální TODO.

- [ ] (zatím nic — vyplníme po první dávce)
