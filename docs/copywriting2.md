# Copywriting V2 — Startovací Hub Klecany

Druhá verze copywriting doc, **kompletní přepis do voice „as-if-open"** —
celý web mluví v přítomném indikativu, jako by Hub už fungoval.
Termín zprovoznění demotován pouze do FAQ. Nové amenity (kavárna,
ateliéry, dílny, studovny, zasedací místnosti, kyvadlová doprava,
nahrávací studia, kontejnerové sklady, telocvična na vzduchu) získávají
viditelné bloky. „Bytové družstvo" přejmenováno na **„Přípravné
družstvo"** — zakládací kohorta, která projekt připraví pro ostatní
a získá právo bydlet v luxusních 1+kk buňkách.

V1 (`docs/copywriting.md`) zůstává netknutý jako baseline. V2 je
doporučení k diskusi a wiringu do `src/**`.

Stav: **2026-05-04**, čeká na review.

---

## Jak v tomto souboru editovat

1. Najděte text, který chcete změnit.
2. Přepište **jen** tělo (řádky pod nadpisem až k další `###` nebo `##`).
3. **Nemažte ani neupravujte:**
   - klíč v backticks (např. `` `hero.h1` ``)
   - HTML komentář se zdrojem (`<!-- src/...:N -->`)
   - strukturu nadpisů `##` / `###`
4. Pokud chcete **vyhodit text úplně**, napište pod nadpis řádek
   `[VYNECHAT]`.
5. Pro nový odstavec uvnitř víceřádkové položky stačí prázdný řádek.
6. Sekce vyznačené `[NEW-V2]` nemají dnes ekvivalent v sourcu — domluvíme
   umístění při wiringu.

---

## Voice rules pro V2

Tato pravidla platí pro každý jednotlivý blok níže. Pokud něco z nich
porušuju, je to chyba — opravte to a zaznamenejte.

1. **Přítomný indikativ pro vše amenitové.** „Sauna se topí dvakrát
   týdně." Ne „Sauna bude k dispozici". Konkrétní rytmus, bez přesných
   hodin/dnů, které by nás zbytečně uvázaly (finální časy určuje
   přípravné družstvo).
2. **Druhá osoba peer-to-peer · vykání.** Konzistentně **vykání**
   napříč webem, ale ne korporátní vy-distance — držíme aktivní slovesa
   a konkrétno. Místo „Rezidenti využívají…" → „V 7 ráno si berete kafe
   v kavárně…".
3. **Ukotvit popis v čase a návyku, ne v abstraktu.** „Ve čtvrtek
   večer se dvůr plní lidmi" místo „dynamická komunita".
4. **Žádný tricolon (3 paralelní položky).** Místo „pracujete, žijete,
   tvoříte" → 2 nebo 4 nebo jedna delší.
5. **Žádná „není to jen X — je to Y" konstrukce.** Klasický AI tell.
6. **Cenová transparence — viditelná, ne skrývaná.** „Lůžko 4 800
   Kč/měs (orientačně, finalizuje přípravné družstvo)" místo „dostupné
   nájmy".
7. **Soft urgency = struktura kohort, ne strach.** „První kohorta
   přípravného družstva má kapacitu cca 50 lidí." Žádné „posledních 5
   míst", žádné countdowny.
8. **Variace délky vět.** Krátká věta. Pak delší, která vysvětluje
   rytmus a nadechne se. A zase krátká.

### Zakázané fráze (V2 nesmí obsahovat)

- Future tense pro amenity: `bude / nabídne / chystáme / vznikne /
  plánujeme / připravujeme / brzy otevíráme`
- Hype: `úžasný / dynamický / vibrant / unikátní / klíčový / revoluční`
- AI hedge: „není to jen X — je to Y"
- Filler: „v dnešní době", „v rychle se měnící době"
- Anglické tropy: `harness / leverage / curate / craft (jako sloveso)`
- Pasiv (zakázáno lintem): `je realizováno / je zajišťováno / je
  prováděno / snaha o`
- Legalese (zakázáno lintem): `ve smyslu §`
- Ellipsis `…` (zakázáno lintem mimo locked motto)
- Více než 1 em-dash na odstavec
- Více než 1 vykřičník na sekci

### Doporučené tahy (V2 by měla obsahovat)

- Konkrétní časy (7:00, 12:00, 18:00) tam, kde dávají rytmus
- Konkrétní ceny s flagem „orientačně, finalizuje přípravné družstvo"
- „Když" místo „pokud" v podmínkových větách
- Aktivní slovesa v druhé osobě
- Jeden CTA na sekci
- Em-dash maximálně 1× na odstavec, jako odsazovací rytmus
- Ticho — fakta mluví sama, žádné cheerleading

---

## Strategická rozhodnutí v této verzi

1. **„Jako kdyby to už stálo".** Celý web v přítomném indikativu.
   Termín zprovoznění není veřejně viditelný — je zmíněn jen v FAQ q3
   s reframem „určuje přípravné družstvo". Lidem, kteří vyplní zájem,
   sdělujeme termín v privátní followup zprávě.
2. **„Přípravné družstvo" jako zakládací kohorta.** Existující
   sub-projekt `bytove-druzstvo` se přejmenovává na **„Přípravné
   družstvo"**. Slug URL `/projekty/bytove-druzstvo/` zůstává (URL
   stabilita), ale title, role, body — celý obsah je přepsán.
   Přípravné družstvo = první kohorta cca 50 lidí, která projekt
   připraví pro ostatní z cílovky a získá garantované právo bydlet v
   luxusní stavební buňce 1+kk.
3. **Cenová transparence.** V V2 zveřejňujeme orientační čísla
   (kapsle 350 Kč/noc, lůžko 4 800 Kč/měs, dvoulůžko 6 200 Kč/měs,
   jednolůžko 7 800 Kč/měs, 1+kk buňka 12 000 Kč/měs, coworking flex
   2 400 Kč/měs). Vždy s flagem „orientačně, finalizuje přípravné
   družstvo".
4. **Tři nové amenity-bloky na landingu:** (a) amenity grid „Co tu
   funguje" mezi formaty a 4-claim gridem; (b) timeline „Den v Hubu" 7
   ráno → 22 večer; (c) přípravné družstvo card jako 5. claim.
5. **Devět absentních amenit dostává viditelné bloky.** Kyvadlová
   doprava na metro Kobylisy, kontejnerové sklady, kavárna, zasedací
   místnosti, studovny, sdílené dílny, ateliéry, nahrávací studia,
   telocvična na vzduchu. Jejich domov:
   - Kavárna, pekárna, dílny → součást **Komunitního centra**
   - Ateliéry, nahrávací studia, studovny, zasedací místnosti →
     součást **Coworkingového centra**
   - Telocvična na vzduchu → součást **Sportoviště a parku**
   - Kyvadlová doprava, kontejnerové sklady → součást **/o-arealu/**
     (infrastruktura)
6. **„Rezervace" zůstává jen v navigačním menu.** Hero, CTA, H1, page
   meta používá „nezávazný zájem". URL `/rezervace/` se nemění.
7. **„Areál Horních kasáren"** s velkým H — vlastní jméno, sjednoceno.

---

## Index změn v komentářích u každého klíče

- `[REWRITE-V2]` = přepsáno do as-if-open voice oproti V1
- `[NEW-V2]` = nová sekce / nový klíč, neměl ekvivalent v V1
- `[DEMOTED]` = ponecháno, ale přesunuto pod čáru / do FAQ
- `[REMOVED]` = úplně ven (klíč zde figuruje pro připomenutí, že to byl
  v V1 viditelný blok)
- (bez značky) = beze změny oproti V1

---

## Globální · navigace, patička, formulář-shellové texty

### `nav.label.projekty` <!-- src/components/Header.astro:11 -->

Projekty

### `nav.label.o-arealu` <!-- src/components/Header.astro:12 -->

O areálu

### `nav.label.faq` <!-- src/components/Header.astro:13 -->

FAQ

### `nav.label.rezervace` <!-- src/components/Header.astro:40 -->

Rezervace

### `nav.aria.brand` <!-- src/components/Header.astro:25 -->

Startovací Hub — domů

### `nav.aria.main` <!-- src/components/Header.astro:30 -->

Hlavní navigace

### `nav.aria.mobile` <!-- src/components/Header.astro:57 -->

Mobilní navigace

### `nav.aria.burger.open` <!-- src/components/Header.astro:48 -->

Otevřít menu

### `nav.aria.burger.close` <!-- src/components/Header.astro (JS) -->

Zavřít menu

### `nav.brand.wordmark` <!-- src/components/Header.astro:27 -->

Startovací Hub

### `footer.brand` <!-- src/components/Footer.astro:9 -->

Startovací Hub Klecany

### `footer.tagline` <!-- src/components/Footer.astro:10 -->

Záměr vede VPD pod hlavičkou OSA II, z.s.

### `footer.label.kontakt` <!-- src/components/Footer.astro:18 -->

Kontakt

### `footer.kontakt.email` <!-- src/components/Footer.astro:19 -->

info@startovacihub.cz

### `footer.investor.prefix` <!-- src/components/Footer.astro:20 -->

Investoři:

### `footer.investor.link` <!-- src/components/Footer.astro:20 -->

záměr VPD1 →

### `footer.label.pravni` <!-- src/components/Footer.astro:23 -->

Právní

### `footer.legal.org` <!-- src/components/Footer.astro:24 -->

OSA II, z.s. · IČO 270 26 345

### `footer.legal.gdpr` <!-- src/components/Footer.astro:25 [REWRITE-V2] -->

Pravidla ochrany osobních údajů najdete na požádání u
info@startovacihub.cz.

### `tooltip.aria.template` <!-- src/components/Tooltip.astro:10 -->

Vysvětlit: {label}

> Pozn.: `{label}` je proměnná — dosadí se kontext z místa, kde je
> tooltip použit.

---

## Stránka: Domovská · `/` — `src/pages/index.astro`

### `home.meta.title` <!-- src/pages/index.astro:111 -->

Startovací Hub

### `home.meta.description` <!-- src/pages/index.astro:112 [REWRITE-V2] -->

Nájemní bydlení blízko Prahy s coworkingem, saunou, bazénem, kavárnou
a kyvadlovým busem na metro. Areál Horních kasáren v Klecanech. Pro
pracující studenty, OSVČ na začátku a mladé kreativce.

### `home.hero.kicker` <!-- src/pages/index.astro:132 -->

Areál Horních kasáren · Klecany

### `home.hero.kicker.external` <!-- src/pages/index.astro:133 -->

Záměr VPD1 →

### `home.hero.h1` <!-- src/pages/index.astro:135 -->

Startovací Hub.

### `home.hero.lede` <!-- src/pages/index.astro:136 [REWRITE-V2] -->

Nájemní bydlení blízko Prahy v areálu Horních kasáren. Coworking,
sauna, bazén, kavárna, ateliéry, dílny — a kyvadlový bus na metro
Kobylisy. Pro pracující studenty, OSVČ na začátku a mladé kreativce.

### `home.hero.cta` <!-- src/pages/index.astro:137 -->

Nezávazný zájem →

### `home.formats.eyebrow` <!-- src/pages/index.astro:143 [REWRITE-V2] -->

Jak v Hubu bydlíte

### `home.formats.h2` <!-- src/pages/index.astro:144 -->

Čtyři způsoby, jak v Hubu bydlet.

### `home.formats.kapsle.name` <!-- src/pages/index.astro:19 -->

Kapsle

### `home.formats.kapsle.body` <!-- src/pages/index.astro:21 [REWRITE-V2] -->

Nejlevnější varianta. Spací modul ve sdílené jednotce s privátním
sociálním zázemím. Pro krátké pobyty a pro lidi, kterým rozhoduje cena.
Orientačně 350 Kč/noc nebo 4 200 Kč/měs.

### `home.formats.klid.name` <!-- src/pages/index.astro:24 -->

Klidnější uzavíratelné místo

### `home.formats.klid.body` <!-- src/pages/index.astro:26 [REWRITE-V2] -->

Privátní mikropokoj s vlastními dveřmi a stolem. Sdílené sociální
zázemí s pár sousedy. Pro lidi, kteří potřebují klid na práci nebo
studium. Orientačně 6 200 Kč/měs.

### `home.formats.jednoluzkovy.name` <!-- src/pages/index.astro:29 -->

Jednolůžkový pokoj

### `home.formats.jednoluzkovy.body` <!-- src/pages/index.astro:31 [REWRITE-V2] -->

Plnohodnotný menší pokoj s vlastním sociálním zázemím. Sdílená kuchyň
s pár sousedy. Pro delší pobyty a stabilnější rezidenty. Orientačně
7 800 Kč/měs.

### `home.formats.sdileny.name` <!-- src/pages/index.astro:34 -->

Sdílený pokoj

### `home.formats.sdileny.body` <!-- src/pages/index.astro:36 [REWRITE-V2] -->

Dvoulůžkový pokoj sdílený s druhou osobou. Levnější varianta delšího
pobytu pro studenty a pro ty, kterým sdílení nevadí. Orientačně 4 800
Kč/měs za osobu.

### `home.formats.note` <!-- src/pages/index.astro:157 [REWRITE-V2] -->

Architektonický základ Hubu je ~331 jednotek 1+kk s vlastním sociálním
zázemím (sprcha, umyvadlo, toaleta). Čtyři formáty výše popisují, jak
jednotku obýváte — ne, že by to byly různě postavené místnosti. Ceny
jsou orientační; finální nastavuje přípravné družstvo.

### [NEW-V2] `home.amenities.eyebrow` <!-- nový blok mezi sekcí Co Hub nabídne a 4-claim gridem -->

Co tu funguje

### [NEW-V2] `home.amenities.h2` <!-- -->

Sauna, kavárna, ateliéry — a kyvadlový bus na metro.

### [NEW-V2] `home.amenities.lede` <!-- -->

Hub není jen bydlení. K jednotce patří třináct sdílených provozů, které
dělají z areálu fungující celek.

### [NEW-V2] `home.amenities.kavarna.title` <!-- -->

Kavárna

### [NEW-V2] `home.amenities.kavarna.body` <!-- -->

V přízemí budovy B otevírá v 7 ráno. Specialty káva, ranní pečivo z
vlastní pekárny, klidné koutky pro práci s laptopem.

### [NEW-V2] `home.amenities.pekarna.title` <!-- -->

Pekárna

### [NEW-V2] `home.amenities.pekarna.body` <!-- -->

Vedle kavárny v budově B. Bochník chleba, croissanty, sezónní pečivo —
od 6 ráno čerstvě upečené.

### [NEW-V2] `home.amenities.coworking.title` <!-- -->

Coworkingový sál

### [NEW-V2] `home.amenities.coworking.body` <!-- -->

Devět pevných stolů, dva soft koutky, projektor, kávovar v rohu.
Přízemí budovy C. Flex členství 2 400 Kč/měs.

### [NEW-V2] `home.amenities.studovny.title` <!-- -->

Studovny

### [NEW-V2] `home.amenities.studovny.body` <!-- -->

Tři tiché čítárny na patrech budov A. Pro studium, čtení, klidné
hovory přes sluchátka. Knihovní polic ka na zdi.

### [NEW-V2] `home.amenities.zasedacky.title` <!-- -->

Zasedací místnosti

### [NEW-V2] `home.amenities.zasedacky.body` <!-- -->

Dvě uzavíratelné místnosti pro 4-8 lidí. Bílá tabule, projektor, video
hovor. Rezervace přes sdílený kalendář.

### [NEW-V2] `home.amenities.ateliery.title` <!-- -->

Ateliéry

### [NEW-V2] `home.amenities.ateliery.body` <!-- -->

Otevřené prostory pro malíře, sochaře, krejčí, designéry. Dlouhé stoly,
světlo z velkých oken, sdílené nářadí. V budově C v patře nad
coworkingem.

### [NEW-V2] `home.amenities.dilny.title` <!-- -->

Sdílené dílny

### [NEW-V2] `home.amenities.dilny.body` <!-- -->

Dřevodílna, kovodílna, oprava kol. Hoblíky, frézky, brusky — vše
značené, vše s návodem na zdi. Kdo umí, učí ostatní.

### [NEW-V2] `home.amenities.nahravaci.title` <!-- -->

Nahrávací studia

### [NEW-V2] `home.amenities.nahravaci.body` <!-- -->

Dvě akusticky tlumené místnosti pro podcast, hudbu, voiceover. Mikrofony
Shure SM7B, mixovací pult, monitory. Rezervace přes kalendář.

### [NEW-V2] `home.amenities.sauna.title` <!-- -->

Sauna

### [NEW-V2] `home.amenities.sauna.body` <!-- -->

V objektu E. Topí dvakrát týdně po práci, plus víkendová ranní směna.
Outdoor cool-down deck pro letní i zimní sezónu.

### [NEW-V2] `home.amenities.bazen.title` <!-- -->

Bazén

### [NEW-V2] `home.amenities.bazen.body` <!-- -->

Před objektem D. V létě venkovní koupání, mimo sezónu zazimovaný a
slouží jako požární nádrž areálu. Otevřený pro Klecany, ne jen pro
rezidenty.

### [NEW-V2] `home.amenities.minipivovar.title` <!-- -->

Minipivovar

### [NEW-V2] `home.amenities.minipivovar.body` <!-- -->

Malý nezávislý pivovar v objektu B. Vaří se v pondělí, rozlévá se v
pátek od 17 v sousední hospodě. Komunitní podíl na provozu (work-trade)
možný.

### [NEW-V2] `home.amenities.sportoviste.title` <!-- -->

Sportoviště a park

### [NEW-V2] `home.amenities.sportoviste.body` <!-- -->

Komunitní park před objektem B — grilovací místa, ping-pong, dětské
hřiště, telocvična na vzduchu (calisthenics). V dlouhodobém plánu krytá
hala se sálovými sporty.

### [NEW-V2] `home.amenities.kontejnery.title` <!-- -->

Kontejnerové sklady

### [NEW-V2] `home.amenities.kontejnery.body` <!-- -->

Pro horská kola, lyže, sezónní krámy, archiv. Uzamykatelné boxy s
přístupem 24/7. Doplněk k jednotkám 1+kk, kde úložný prostor není
nekonečný.

### [NEW-V2] `home.amenities.doprava.title` <!-- -->

Kyvadlový bus na metro

### [NEW-V2] `home.amenities.doprava.body` <!-- -->

Přes ranní a odpolední špičku jezdí kyvadlový minibus mezi areálem a
zastávkou metra Kobylisy. Cesta zabere 15 minut. Mimo špičku jezdí
příměstská linka PID každých 15-20 minut.

### `home.claims.koncept.eyebrow` <!-- src/pages/index.astro:44 -->

Koncept

### `home.claims.koncept.title` <!-- src/pages/index.astro:45 -->

Sedm budov, ~331 jednotek 1+kk.

### `home.claims.koncept.body` <!-- src/pages/index.astro:46 -->

Rekonstrukce A1–A6 a budovy C v centru areálu Horních kasáren.
Privátní jednotky 1+kk se sklopnou postelí a vlastním sociálním
zázemím.

### `home.claims.pro-koho.eyebrow` <!-- src/pages/index.astro:49 -->

Pro koho

### `home.claims.pro-koho.title` <!-- src/pages/index.astro:50 -->

Lidé, kteří startují.

### `home.claims.pro-koho.body` <!-- src/pages/index.astro:51 -->

Pracující studenti, OSVČ na začátku, mladí kreativci, začínající
podnikatelé. Hub dává smysl tomu, kdo hledá flexibilní bydlení blízko
Prahy.

### `home.claims.sdilene.eyebrow` <!-- src/pages/index.astro:54 -->

Sdílené prostory

### `home.claims.sdilene.title` <!-- src/pages/index.astro:55 -->

Privátní jednotka, sdílený zbytek.

### `home.claims.sdilene.body` <!-- src/pages/index.astro:56 [REWRITE-V2] -->

Coworking v budově C, sauna v objektu E, venkovní bazén před D,
tržnice s minipivovarem, pekárnou a kavárnou v B. Ateliéry, dílny,
studovny, zasedací místnosti, nahrávací studia. Komunitní park s
grilem, telocvična na vzduchu.

### `home.claims.stipendium.eyebrow` <!-- src/pages/index.astro:59 -->

Stipendium

### `home.claims.stipendium.title` <!-- src/pages/index.astro:60 -->

Výběr podle záměru, ne sleva.

### `home.claims.stipendium.body` <!-- src/pages/index.astro:61 [REWRITE-V2] -->

Pro lidi, kteří by Hubu dávali smysl, ale bez podpory by si pobyt
nemohli dovolit. Vedle stipendia jsou paralelní role — správce
(work-trade) a rezident-tvůrce. Vybíráme podle záměru, který v Hubu
chcete rozjet; cestu si vyberete ve formuláři.

### [NEW-V2] `home.claims.druzstvo.eyebrow` <!-- nový 5. claim card -->

Přípravné družstvo

### [NEW-V2] `home.claims.druzstvo.title` <!-- -->

Kdo přichází první, určuje pravidla.

### [NEW-V2] `home.claims.druzstvo.body` <!-- -->

První kohorta cca 50 lidí. Vy domlouváte denní rytmus, nájemní řád,
provozní pravidla. Za to získáváte garantované právo bydlet v luxusní
1+kk stavební buňce. Druhá kohorta otevírá později pro ty, kdo přijdou
do hotového rámce.

### [NEW-V2] `home.claims.druzstvo.cta` <!-- -->

Detail přípravného družstva →

### [NEW-V2] `home.den-v-hubu.eyebrow` <!-- nová sekce — denní timeline -->

Den v Hubu

### [NEW-V2] `home.den-v-hubu.h2` <!-- -->

7 ráno až 22 večer.

### [NEW-V2] `home.den-v-hubu.lede` <!-- -->

Jak vypadá běžný pracovní den v Hubu. Časy jsou orientační — finální
rytmus si nastavujete sami v rámci přípravného družstva.

### [NEW-V2] `home.den-v-hubu.07.time` <!-- -->

7:00

### [NEW-V2] `home.den-v-hubu.07.title` <!-- -->

Kavárna otevírá

### [NEW-V2] `home.den-v-hubu.07.body` <!-- -->

Berete si espresso a čerstvý croissant z vlastní pekárny. Mlha mezi
budovami se zvedá. U okna sedí dva lidé s laptopy.

### [NEW-V2] `home.den-v-hubu.09.time` <!-- -->

9:00

### [NEW-V2] `home.den-v-hubu.09.title` <!-- -->

Coworking se plní

### [NEW-V2] `home.den-v-hubu.09.body` <!-- -->

Devět pevných stolů, dva soft koutky. Někdo si jde do zasedačky pro
videohovor. Někdo si bere kafe číslo dvě.

### [NEW-V2] `home.den-v-hubu.12.time` <!-- -->

12:30

### [NEW-V2] `home.den-v-hubu.12.title` <!-- -->

Společný oběd

### [NEW-V2] `home.den-v-hubu.12.body` <!-- -->

Dlouhý stůl v komunitním centru. Kdo má čas, se přidá. Polévka, hlavní
chod, někdy hlasování o tom, kdo bude příští sobotu grilovat.

### [NEW-V2] `home.den-v-hubu.15.time` <!-- -->

15:00

### [NEW-V2] `home.den-v-hubu.15.title` <!-- -->

Tichá hodina

### [NEW-V2] `home.den-v-hubu.15.body` <!-- -->

Studovny, čítárna v budově A. Kdo potřebuje klid na hluboký focus,
najde si kout s lampou. Sluchátka, kniha, deka přes ramena.

### [NEW-V2] `home.den-v-hubu.17.time` <!-- -->

17:00

### [NEW-V2] `home.den-v-hubu.17.title` <!-- -->

Atelier nebo dílna

### [NEW-V2] `home.den-v-hubu.17.body` <!-- -->

Někdo dotahuje plátno, někdo brousí dřevěný stůl, někdo nahrává
podcastový rozhovor. Přechod od práce k řemeslu — bez doby na cestu.

### [NEW-V2] `home.den-v-hubu.18.time` <!-- -->

18:30

### [NEW-V2] `home.den-v-hubu.18.title` <!-- -->

Sauna večer

### [NEW-V2] `home.den-v-hubu.18.body` <!-- -->

Pára, dřevěná lavice, dva-tři lidé. Cool-down deck na volném vzduchu —
v zimě sníh, v létě hvězdy. Po dvou kolech jdete na pivo.

### [NEW-V2] `home.den-v-hubu.20.time` <!-- -->

20:30

### [NEW-V2] `home.den-v-hubu.20.title` <!-- -->

Pivovar

### [NEW-V2] `home.den-v-hubu.20.body` <!-- -->

Sklenice nepasterizovaného polotmavého. Stůl s lidmi z domu — jeden
sociolog, jeden grafik, jeden student architektury. Hovor o tom, jak
nastavit rezervační kalendář na zasedačky.

### [NEW-V2] `home.den-v-hubu.22.time` <!-- -->

22:00

### [NEW-V2] `home.den-v-hubu.22.title` <!-- -->

Dvůr v noci

### [NEW-V2] `home.den-v-hubu.22.body` <!-- -->

Tlumená světla v lampičkách u laviček. Někdo se vrací z Prahy
kyvadlovým busem, jiný odchází ke kavárně, kde má rozdělanou knížku.
Klid se rozprostírá.

### [NEW-V2] `home.den-v-hubu.note` <!-- -->

Toto je jeden běžný den. Sobota probíhá jinak — opravárenská sobota v
dílně, brunch v kavárně, večer ohně na dvoře.

### [REMOVED] `home.status.line` <!-- BLOK MIZÍ Z LANDINGU. Nahrazen kartou home.claims.druzstvo. -->

[VYNECHAT] Tento blok („Hub dnes není otevřený. Sbíráme nezávazný
zájem…") odstraňujeme z prominentního místa. Status zprovoznění žije
nadále pouze v FAQ q3.

### [DEMOTED] `home.status.updated` <!-- byl V1 [NOVÝ]; přesunout do patičky -->

Naposledy aktualizováno 2026-05-04

> Pozn.: Drobný timestamp v patičce sekce, ne v hlavním obsahu. Lze
> automatizovat z `git log -1 --format=%cs`.

### `home.zigzag.eyebrow` <!-- src/pages/index.astro:174 [REWRITE-V2] -->

Areál

### `home.zigzag.h2` <!-- src/pages/index.astro:175 [REWRITE-V2] -->

Jak to tu vypadá.

### `home.zigzag.row1.eyebrow` <!-- src/pages/index.astro:71 -->

Místo

### `home.zigzag.row1.title` <!-- src/pages/index.astro:72 -->

Areál Horních kasáren · 12 km od Prahy.

### `home.zigzag.row1.body` <!-- src/pages/index.astro:73 [REWRITE-V2] -->

Klecany leží těsně za hranicí Prahy. Areál sedí na trase plánované
tramvajové zastávky Výzkumný ústav I. (vydáno stavební povolení) a
navrhované cyklostezky podél Vltavy. Přes špičku k metru Kobylisy
jezdí kyvadlový bus areálu, mimo špičku příměstská linka PID.

### `home.zigzag.row1.alt` <!-- src/pages/index.astro:70 -->

Lidé v dlážděném dvoře mezi rekonstruovanými budovami areálu Horních
kasáren.

### `home.zigzag.row2.eyebrow` <!-- src/pages/index.astro:80 -->

Komunita

### `home.zigzag.row2.title` <!-- src/pages/index.astro:81 [REWRITE-V2] -->

Tržnice, kavárna, pekárna a minipivovar v objektu B.

### `home.zigzag.row2.body` <!-- src/pages/index.astro:82 [REWRITE-V2] -->

V budově B funguje tržnice s lokálními producenty, kavárna, pekárna,
minipivovar a venkovní zázemí pro food-trucky. V přízemí budovy C je
coworkingový sál s pódiem pro přednášky a kapely.

### `home.zigzag.row2.alt` <!-- src/pages/index.astro:79 -->

Tržnice za soumraku v objektu B s prosvícenými okny.

### `home.zigzag.row3.eyebrow` <!-- src/pages/index.astro:88 -->

Bydlení

### `home.zigzag.row3.title` <!-- src/pages/index.astro:89 -->

~331 privátních jednotek 1+kk.

### `home.zigzag.row3.body` <!-- src/pages/index.astro:90 [REWRITE-V2] -->

Každá jednotka má vlastní sociální zázemí — sprchu, umyvadlo a toaletu.
Sklopná postel uvolní obytný prostor přes den. Členové přípravného
družstva mají navíc právo na luxusní stavební buňku 1+kk se zvýšeným
standardem výbavy.

### `home.zigzag.row3.alt` <!-- src/pages/index.astro:87 -->

Interiér 1+kk se sklopnou postelí a balkonem.

### `home.zigzag.row4.eyebrow` <!-- src/pages/index.astro:96 -->

Areál

### `home.zigzag.row4.title` <!-- src/pages/index.astro:97 -->

Vnitřní dvůr a zázemí.

### `home.zigzag.row4.body` <!-- src/pages/index.astro:98 [REWRITE-V2] -->

Sedm rekonstruovaných budov (A1–A6 + C) na ~6 700 m² čistých
podlahových ploch. Mezi nimi sauna v objektu E, venkovní bazén před
objektem D, komunitní park s grilovacími místy a telocvična na
vzduchu.

### `home.zigzag.row4.alt` <!-- src/pages/index.astro:95 -->

Vnitřní dvůr s břízami, lavicemi a večerním osvětlením.

### `home.zigzag.row5.eyebrow` <!-- src/pages/index.astro:104 -->

Pro koho

### `home.zigzag.row5.title` <!-- src/pages/index.astro:105 -->

Pracující studenty, OSVČ a mladí kreativci.

### `home.zigzag.row5.body` <!-- src/pages/index.astro:106 -->

Hub je dělaný pro lidi, kteří startují — začínající podnikatele,
studenty na bakalářce nebo diplomce, OSVČ na začátku kariéry. Pro
někoho je to startovní bydlení, pro jiného přechodný mezikrok.

### `home.zigzag.row5.alt` <!-- src/pages/index.astro:103 -->

Pracovní zákoutí v jednotce 1+kk s knihovnou a stolem.

### `home.lightbox.aria` <!-- src/pages/index.astro:202 [REWRITE-V2] -->

Galerie areálu

### `home.lightbox.close` <!-- src/pages/index.astro:203 -->

Zavřít

### `home.lightbox.prev` <!-- src/pages/index.astro:204 -->

Předchozí

### `home.lightbox.next` <!-- src/pages/index.astro:205 -->

Další

### `home.cta.primary.eyebrow` <!-- src/pages/index.astro:220 -->

Chci tu bydlet

### `home.cta.primary.lede` <!-- src/pages/index.astro:221 [REWRITE-V2] -->

Vyplněním nezávazného zájmu se přidáváte k první kohortě přípravného
družstva. Vyplnění je krátké, nic neúčtujeme a žádný závazek nevzniká.

### `home.cta.primary.btn` <!-- src/pages/index.astro:222 -->

Vyplnit nezávazný zájem →

### `home.cta.secondary.eyebrow` <!-- src/pages/index.astro:228 -->

Investice do záměru

### `home.cta.secondary.lede` <!-- src/pages/index.astro:229 -->

Zajímá vás víc revitalizace areálu než vlastní bydlení? Záměr VPD1
mluví ke strategickým a finančním partnerům.

### `home.cta.secondary.btn` <!-- src/pages/index.astro:230 -->

Záměr VPD1 →

### `home.projekty-teaser.eyebrow` <!-- src/pages/index.astro:238 -->

Provozy

### `home.projekty-teaser.h2` <!-- src/pages/index.astro:239 [REWRITE-V2] -->

Šest provozů, jeden areál.

### `home.projekty-teaser.intro` <!-- src/pages/index.astro:241 [REWRITE-V2] -->

Hub má šest propojených provozů a přípravné družstvo. Každý dělá svoji
věc, dohromady tvoří fungující areál.

### `home.projekty-teaser.cta` <!-- src/pages/index.astro:247 -->

Detail →

### `home.projekty-teaser.more.title` <!-- src/pages/index.astro:251 -->

Další provozy

### `home.projekty-teaser.more.body` <!-- src/pages/index.astro:252 [REWRITE-V2] -->

Podívejte se na všechny provozy a jejich rytmus.

### `home.projekty-teaser.more.cta` <!-- src/pages/index.astro:253 -->

Provozy →

### `home.place.eyebrow` <!-- src/pages/index.astro:262 -->

Místo

### `home.place.h2` <!-- src/pages/index.astro:263 -->

Kde to je.

### `home.place.body` <!-- src/pages/index.astro:265 [REWRITE-V2] -->

Klecany leží severně od Prahy, 12 km od centra. Přes ranní a odpolední
špičku k metru Kobylisy jezdí kyvadlový bus areálu (15 minut), mimo
špičku příměstská linka PID (~25 minut). Areál sedí na trase plánované
tramvajové zastávky Výzkumný ústav I. — má vydané stavební povolení a
stojí na hranici Klecany / Zdiby. V plánu je také cyklolávka
Roztoky–Klecany.

### `home.place.cta` <!-- src/pages/index.astro:266 -->

O areálu a kontextu →

### `home.place.map.alt` <!-- src/pages/index.astro:269 -->

Schéma areálu Horních kasáren — Hub jádro (A1–A6 + C) zvýrazněno.

### `home.place.map.caption` <!-- src/pages/index.astro:270 -->

Areál Horních kasáren — sedm budov etapy 1 (A1–A6 a C) v rámci
celkového záměru.

### `home.map-strip.eyebrow` <!-- src/pages/index.astro:278 -->

Klecany na mapě

### `home.map-strip.h2` <!-- src/pages/index.astro:279 -->

Severní okraj Prahy, hned za Vltavou.

### `home.map-strip.address` <!-- src/pages/index.astro:283 -->

Horní kasárna Klecany

### `home.map-strip.maps-link` <!-- src/pages/index.astro:284 -->

Otevřít v Mapách →

### `home.map.aria` <!-- src/pages/index.astro:281 -->

Interaktivní mapa areálu Horních kasáren v Klecanech

### `home.map.popup.title` <!-- src/pages/index.astro:415 -->

Horní kasárna Klecany

### `home.map.popup.cta` <!-- src/pages/index.astro:416 -->

Otevřít v Mapách →

### `home.faq.eyebrow` <!-- src/pages/index.astro:294 -->

FAQ

### `home.faq.h2` <!-- src/pages/index.astro:295 -->

Časté otázky.

### `home.faq.more` <!-- src/pages/index.astro:306 -->

Všechny otázky →

> Pozn.: Konkrétní otázky se na úvodní stránce vykreslují z FAQ kolekce
> (klíče `q1`, `q5`, `q7`).

---

## Stránka: Provozy · `/projekty/` — `src/pages/projekty/index.astro`

### `projekty.meta.title` <!-- src/pages/projekty/index.astro:22 -->

Provozy Startovacího Hubu

### `projekty.meta.description` <!-- src/pages/projekty/index.astro:23 [REWRITE-V2] -->

Komunitní centrum s pekárnou a kavárnou, coworking s ateliéry a
nahrávacími studii, minipivovar, sauna a bazén, sportoviště a park,
přípravné družstvo. Šest provozů, které dělají z areálu fungující
celek.

### `projekty.hero.eyebrow` <!-- src/pages/projekty/index.astro:30 -->

Provozy

### `projekty.hero.h1` <!-- src/pages/projekty/index.astro:31 [REWRITE-V2] -->

Šest provozů, jeden areál.

### `projekty.hero.lede` <!-- src/pages/projekty/index.astro:32 [REWRITE-V2] -->

Komunitní centrum s pekárnou a kavárnou; coworking s ateliéry a
nahrávacími studii; minipivovar; sauna a bazén; park s telocvičnou na
vzduchu. K tomu přípravné družstvo, které všechno propojuje.

### `projekty.card.placeholder` <!-- src/pages/projekty/index.astro:43 [REWRITE-V2] -->

Vizualizaci připravujeme

### `projekty.card.cta` <!-- src/pages/projekty/index.astro:50 -->

Detail →

### `projekty.foot-note` <!-- src/pages/projekty/index.astro:55 [REWRITE-V2] -->

Další iniciativy a provozy doplňujeme, jak se přidávají do areálu.
Pokud máte nápad nebo chcete něco rozjet, napište na
info@startovacihub.cz.

### `projekty.building-label.komunitni-centrum` <!-- src/pages/projekty/index.astro:11 -->

Objekt B

### `projekty.building-label.coworking-centrum` <!-- src/pages/projekty/index.astro:12 -->

Přízemí budovy C

### `projekty.building-label.komunitni-pivovar` <!-- src/pages/projekty/index.astro:13 -->

Objekt B

### `projekty.building-label.bytove-druzstvo` <!-- src/pages/projekty/index.astro:14 [REWRITE-V2] -->

Přípravné družstvo

### `projekty.building-label.sauna-bazen` <!-- src/pages/projekty/index.astro:15 -->

Objekty D + E

### `projekty.building-label.sportoviste-park` <!-- src/pages/projekty/index.astro:16 -->

Park před objektem B

### `projekty.building-label.default` <!-- src/pages/projekty/index.astro:17 -->

Areál

---

## Šablona detailu provozu · `/projekty/<slug>/` — `src/pages/projekty/[slug].astro`

### `projekty-slug.back` <!-- src/pages/projekty/[slug].astro:36 -->

← Všechny provozy

### `projekty-slug.status.realizujeme` <!-- src/pages/projekty/[slug].astro:27 -->

Realizujeme

### `projekty-slug.status.v-priprave` <!-- src/pages/projekty/[slug].astro:27 [DEMOTED] -->

Aktivní

> Pozn.: Status label „V přípravě" v V2 mizí, protože celý site mluví,
> jako by Hub fungoval. Status label se zachovává jako technický label
> pro odlišení provozů, které ještě finálně nestojí (přípravné družstvo
> jako rámec) vs. fyzicky existujících (sauna, bazén). Doporučujeme
> přejmenovat na „Aktivní" / „Plánujeme" se sémantikou aktuální fáze.

### `projekty-slug.cta.lede` <!-- src/pages/projekty/[slug].astro:52 [REWRITE-V2] -->

Pokud vás Hub zajímá jako možné bydlení, vyplňte nezávazný zájem.
Vyplněním se přidáváte k přípravnému družstvu. Na otázky k jednotlivým
provozům odpovíme e-mailem.

### `projekty-slug.cta.primary` <!-- src/pages/projekty/[slug].astro:54 -->

Vyplnit nezávazný zájem →

### `projekty-slug.cta.email` <!-- src/pages/projekty/[slug].astro:55 -->

info@startovacihub.cz

---

## Obsah · provozy (MDX) — `src/content/sub_projects/*.mdx`

> Každý provoz má frontmatter (`name`, `role`) a tělo (markdown s `##`
> nadpisy). Editujte stejně jako kdekoliv jinde v tomto souboru.

### `subproject.komunitni-centrum.name` <!-- src/content/sub_projects/komunitni-centrum.mdx:2 -->

Komunitní Centrum

### `subproject.komunitni-centrum.role` <!-- src/content/sub_projects/komunitni-centrum.mdx:3 [REWRITE-V2] -->

Tržnice, kavárna, pekárna, minipivovar, sdílené dílny a food-trucky v
objektu B — komunitní jádro, které propojuje Hub s Klecanami.

### `subproject.komunitni-centrum.body` <!-- src/content/sub_projects/komunitni-centrum.mdx:9 [REWRITE-V2] -->

## Co tu funguje

V budově B je komunitní jádro Hubu — tržnice s lokálními producenty,
kavárna, pekárna, restaurace, minipivovar a venkovní zázemí pro
food-trucky. Doplňuje to společenský sál v přízemí budovy C, takže
komunitní program běží na dvou propojených místech.

## Kavárna a pekárna

Kavárna otevírá v 7 ráno. Specialty káva, vlastní espresso blend,
sezónní pour-overy. Vedle pečou v pekárně od 6 — bochník chleba,
croissanty, sezónní pečivo. Stoly u oken slouží přes den jako klidné
pracovní zóny pro lidi, kteří potřebují vyjít z bytu, ale nepotřebují
plný coworking.

## Minipivovar

Malý nezávislý pivovar v rohu budovy B. Vaří se v pondělí, rozlévá se
v pátek od 17 v sousední hospodě. „Komunitní" tu znamená, že se
rezidenti mohou na provozu podílet (work-trade) — ne, že je pivovar
společným majetkem.

## Sdílené dílny

Vzadu za tržnicí jsou tři dílny: dřevodílna, kovodílna a opravárna
kol. Hoblíky, frézky, brusky, rozdělaná práce na ponku, návody na zdi.
Kdo umí, učí ostatní. „Opravárenská sobota" jednou za dva týdny —
přineste věc, která se rozbila, někdo ji s vámi opraví.

## Pro koho

Otevřené rezidentům Hubu i obyvatelům Klecan a okolních obcí. Záměrně
veřejný prostor — Hub má dovnitř přivést sousedy, ne se od nich
oddělit.

## Provoz

Konkrétní otevírací doby, sortiment a cena se ladí v rámci přípravného
družstva. Orientačně: kavárna 7-19, pekárna 6-13 (nebo do vyprodání),
hospoda 11-23, dílny pro rezidenty 24/7 (s rezervací nebezpečného
nářadí).

### `subproject.coworking-centrum.name` <!-- src/content/sub_projects/coworking-centrum.mdx:2 -->

Coworking Centrum

### `subproject.coworking-centrum.role` <!-- src/content/sub_projects/coworking-centrum.mdx:3 [REWRITE-V2] -->

Sdílený pracovní prostor v přízemí budovy C — coworkingový sál,
ateliéry, nahrávací studia, studovny a zasedací místnosti pro rezidenty
Hubu a místní živnostníky.

### `subproject.coworking-centrum.body` <!-- src/content/sub_projects/coworking-centrum.mdx:9 [REWRITE-V2] -->

## Coworkingový sál

Přízemí budovy C — devět pevných stolů, dva soft koutky, projektor,
kávovar v rohu. Pódium na konci sálu slouží pro malou kulturní scénu —
přednášky, prezentace, autorská čtení, kapely. Flex členství 2 400
Kč/měs (orientačně).

## Ateliéry

V patře nad coworkingem jsou otevřené ateliéry pro malíře, sochaře,
krejčí, designéry. Dlouhé stoly, světlo z velkých oken, sdílené nářadí.
Tři dedikované koutky podle řemesla — výtvarný, řemeslný (sochy,
keramika), textilní. Měsíční pronájem koutku pro rezidenty (orientačně
1 800 Kč/měs).

## Nahrávací studia

Dvě akusticky tlumené místnosti pro podcast, hudbu, voiceover.
Mikrofony Shure SM7B, mixovací pult, monitory, akustické panely.
Rezervace přes sdílený kalendář, hodinová sazba pro nečleny (orientačně
180 Kč/h).

## Studovny

Tři tiché čítárny v patrech budov A. Každá pro 6-10 lidí. Pro studium,
čtení, klidné hovory přes sluchátka. Knihovní polic na zdi se sdílenou
literaturou. Bez rezervace, kdo přijde, sedí.

## Zasedací místnosti

Dvě uzavíratelné místnosti pro 4-8 lidí v přízemí budovy C. Bílá
tabule, projektor, video hovor (Logitech kamera, mikrofon).
Rezervace přes sdílený kalendář — 30 min slot zdarma pro každého
rezidenta, delší meeting po domluvě.

## Recepce a administrativa

V přízemí původní strážnice je recepce. Přebírá poštu, vydává souhlasy
ke zřizování firemních sídel. Pro OSVČ a začínající podnikatele to
znamená dostupné sídlo firmy bez nájmu kanceláře.

## Pro koho

Rezidenti Hubu, místní živnostníci, externí kreativci, podcasteři,
freelanceři. Veřejný prostor pro práci, kterou doma nedáte — kvůli
hluku, hluchu, nebo prostě potřebě jiného prostředí.

## Provoz

Konkrétní otvírací doba, ceník a režim sdílení se ladí v rámci
přípravného družstva. Orientačně: coworking 24/7 pro členy, ateliéry a
nahrávací studia podle rezervací, studovny otevřené během dne.

### `subproject.komunitni-pivovar.name` <!-- src/content/sub_projects/komunitni-pivovar.mdx:2 -->

Komunitní Pivovar

### `subproject.komunitni-pivovar.role` <!-- src/content/sub_projects/komunitni-pivovar.mdx:3 -->

Malý nezávislý pivovar v objektu B — součást tržnice, otevřený
rezidentům Hubu i obyvatelům Klecan.

### `subproject.komunitni-pivovar.body` <!-- src/content/sub_projects/komunitni-pivovar.mdx:8 [REWRITE-V2] -->

## Co tu funguje

V budově B je malý nezávislý pivovar jako součást tržnice. Vaří pro
místní hospodu/restauraci a zároveň distribuuje do okolí. „Komunitní"
tady znamená, že se rezidenti mohou na provozu podílet (work-trade)
— ne, že je pivovar společným majetkem.

## Rytmus

V pondělí se vaří. Ve čtvrtek se filtruje a stáčí. V pátek od 17 se
rozlévá v sousední hospodě. O víkendu si čepujete, kolik chcete, do
vlastního džbánu (orientačně 50 Kč/litr u baru, 80 Kč/0.5 l ve
sklenici).

## Sortiment

Stálice: nepasterizovaný polotmavý 11°, ležák 12°, ipa. Sezónní:
rauchbier v zimě, witbier v létě. Občas spolupráce s pivovarem z okolí
— hostující várka.

## Pro koho

Konzument: rezidenti Hubu, obyvatelé Klecan, návštěvníci tržnice.
Provozovatel: konkrétní sládek nebo malá pivovarská firma — výběr v
rámci přípravného družstva.

## Detaily

Kapacita varny ~500 l, roční výstav ~150 hl. Provoz mimo nájemní
hodiny v hospodě je tichý — žádný ranní hluk pro sousední bydlení.

### `subproject.bytove-druzstvo.name` <!-- src/content/sub_projects/bytove-druzstvo.mdx:2 [REWRITE-V2] -->

Přípravné družstvo

### `subproject.bytove-druzstvo.role` <!-- src/content/sub_projects/bytove-druzstvo.mdx:3 [REWRITE-V2] -->

Zakládací kohorta cca 50 lidí, která připravuje finální podobu Hubu a
získává garantované právo bydlet v luxusní stavební buňce 1+kk.

### `subproject.bytove-druzstvo.body` <!-- src/content/sub_projects/bytove-druzstvo.mdx:8 [REWRITE-V2] -->

## Co je přípravné družstvo

Skupina cca 50 lidí, kteří se přihlašují jako první kohorta budoucích
rezidentů Hubu. Dohromady určujete finální podobu provozu — denní
rytmus, nájemní řád, pravidla pro hosty, formát komunitních akcí,
režim sauny a bazénu, organizaci sdílených dílen. Nejde o samosprávné
shromáždění, ale o pracovní cohousing skupinu, která má reálný hlas v
rozhodnutích a podílí se na provozním modelu.

## Co za to dostáváte

- **Garantované právo bydlet** v luxusní stavební buňce 1+kk se
  zvýšeným standardem výbavy (kuchyňský kout, vlastní koupelna,
  pracovní stůl, vyšší kvalita materiálů než u základní 1+kk jednotky).
- **Hlas v pravidlech.** Pátek večer od 19 — pracovní setkání družstva
  v komunitním centru. Diskutujeme konkrétní věc (např. „má sauna
  topit ranní směnu navíc?") a hlasujeme. Členové přípravného družstva
  rozhodují o všech provozních otázkách Hubu.
- **Cenovou stabilitu.** Vaše nájem fixujeme na první rok bez
  navyšování. Druhá kohorta bude mít cenu nastavenou trhem — vy ne.
- **Vstup před ostatními.** Až bude Hub připravený k nastěhování,
  máte dveře otevřené dřív než druhá kohorta.

## Jak se přidat

Vyplňte formulář nezávazného zájmu. Z odpovědí složíme první kohortu
podle záměru, životní situace a kompatibility (nejde o pořadník — jde
o to, aby kohorta dohromady fungovala).

Po vyplnění se ozveme privátně — pošleme aktuální stav, termín
plánovaného setkání, detail buňky 1+kk a smluvní rámec. Nezávazný
zájem se ničím nezavazuje.

## Pro koho dává smysl

Lidé, kteří chtějí v Hubu **bydlet od začátku** a mají chuť tvarovat,
jak to bude vypadat. Ne pro lidi, kteří chtějí přijít do hotového
rámce a jen platit nájem (ti se přidají v druhé kohortě, je to
naprosto v pořádku).

## Detaily

Členský vklad pokrývá náklady přípravného družstva (právní rámec,
schůze, podklady) — orientačně 5 000 Kč při vstupu. Není to jistina
ani záloha na nájem. Nájemní smlouva se uzavírá zvlášť, až bude buňka
připravená k nastěhování.

### `subproject.sauna-bazen.name` <!-- src/content/sub_projects/sauna-bazen.mdx:2 -->

Sauna a bazén

### `subproject.sauna-bazen.role` <!-- src/content/sub_projects/sauna-bazen.mdx:3 [REWRITE-V2] -->

Sdílené wellness — finská sauna v objektu E a venkovní bazén před
objektem D pro rezidenty Hubu i veřejnost.

### `subproject.sauna-bazen.body` <!-- src/content/sub_projects/sauna-bazen.mdx:8 [REWRITE-V2] -->

## Sauna v objektu E

Finská sauna a wellness zóna v objektu E. Topí dvakrát týdně po práci
(úterý + pátek od 18 do 21) a o víkendu ranní směnu (sobota 8-11).
Outdoor cool-down deck pro letní i zimní cool-down. Slouží primárně
rezidentům Hubu jako součást sdíleného zázemí; ve veřejné směně i
sousedům z Klecan.

Saunový ceremoniál — afgun s teplem, esence, ručník — jednou za 14 dní
v páteční večerní směně. Mistr nebo mistryně, dva prostorné runy.

## Bazén před objektem D

Obnovená nádrž před objektem D, která slouží jako venkovní bazén v
letní sezóně (květen-září) a jako požární nádrž pro celý areál v
ostatních měsících. V Klecanech není veřejné koupaliště — bazén je
nabídka pro celé okolí, ne jen pro rezidenty.

V sezóně otevřený 10-20, plavecké dráhy ráno, volné koupání odpoledne,
v pátek a sobotu večer dlouhý cool-down do 22.

## Vstup

Pro rezidenty zdarma jako součást nájemného. Pro veřejnost jednorázové
vstupné (orientačně sauna 180 Kč, bazén 80 Kč). Sezónní permanentky
pro Klecanské podle bydliště se slevou.

## Detaily

Konkrétní časy směn, sezónní rytmus, pravidla pro hosty se ladí v
rámci přípravného družstva. Technické zázemí (vyhřívání sauny, údržba
bazénu) je v gesci provozního týmu Hubu.

### `subproject.sportoviste-park.name` <!-- src/content/sub_projects/sportoviste-park.mdx:2 -->

Sportoviště a park

### `subproject.sportoviste-park.role` <!-- src/content/sub_projects/sportoviste-park.mdx:3 [REWRITE-V2] -->

Komunitní park před objektem B — grilovací místa, ping-pong, dětské
hřiště, telocvična na vzduchu (calisthenics).

### `subproject.sportoviste-park.body` <!-- src/content/sub_projects/sportoviste-park.mdx:9 [REWRITE-V2] -->

## Park

Před objektem B je komunitní park s aktivním programem: grilovací
místa, komunitní zahrádky, venkovní pingpongové stoly, dětské hřiště.
Park propojuje budovu B (tržnice) s budovami A (rezidence) a s
venkovním vstupem do areálu.

## Telocvična na vzduchu

V severním rohu parku stojí calisthenics park — hrazda, bradla, ribstol,
lana, bouldering boulder, ribstol. Otevřený 24/7, brzy ráno bývá rosa
na nářadí, večer skupinky. Materiály ocel + dřevo, žádné fitness studio
look, prostě venkovní gym.

## Komunitní zahrádky

Sezónně dostupné políčko pro rezidenty a přihlášené Klecanské. Kdo má
zahrádku, sklízí, dává část do tržnice nebo do komunitní kuchyně.

## Sportoviště v dlouhodobém plánu

Mimo park je v dlouhodobém plánu krytá sportovní hala a venkovní kurty
na pozemcích přiléhajících k severní straně areálu. Tato kapacita je
za rámcem etapy 1 a propojí se s Hubem až v dalších fázích záměru
VPD1.

## Pro koho

Rezidenti Hubu, sousedé z Klecan, návštěvníci tržnice. Záměrně živý,
aktivní prostor.

## Provoz

Park otevřený 24/7. Komunitní zahrádky a grilovací místa se rezervují
v sdíleném kalendáři. Telocvična bez rezervace.

---

## Stránka: O areálu · `/o-arealu/` — `src/pages/o-arealu/index.astro`

### `o-arealu.meta.title` <!-- src/pages/o-arealu/index.astro:8 -->

O areálu — Startovací Hub Klecany

### `o-arealu.meta.description` <!-- src/pages/o-arealu/index.astro:9 [REWRITE-V2] -->

Místo, kontext a časová osa záměru. Areál Horních kasáren v Klecanech,
dopravní napojení na Prahu (kyvadlový bus + příměstská linka),
infrastruktura, etapová rekonstrukce sedmi budov.

### `o-arealu.hero.eyebrow` <!-- src/pages/o-arealu/index.astro:16 -->

O areálu

### `o-arealu.hero.h1` <!-- src/pages/o-arealu/index.astro:17 -->

Místo, čas a kontext.

### `o-arealu.hero.lede` <!-- src/pages/o-arealu/index.astro:18 [REWRITE-V2] -->

Co Hub je, kde stojí, jak se sem dostanete a kdo za ním stojí. Fakta,
čísla a souvislosti, které byste měli vidět než vyplníte formulář.

### `o-arealu.kap1.label` <!-- src/pages/o-arealu/index.astro:24 -->

Kapitola 01

### `o-arealu.kap1.heading` <!-- src/pages/o-arealu/index.astro:25 -->

Klecany · 12 km od Prahy.

### `o-arealu.kap1.lede` <!-- src/pages/o-arealu/index.astro:29 [REWRITE-V2] -->

Areál Horních kasáren leží severně od Prahy, 12 km od centra. Je to
bývalý vojenský areál o rozloze přibližně 83 000 m² (rozvojové území).
Smluvně máme zajištěná práva odkupu, užívání a stavby do roku 2039.
Areál sedí na trase plánované tramvajové zastávky Výzkumný ústav I. —
má vydané stavební povolení a stojí na hranici Klecany / Zdiby. V
plánu je také cyklolávka Roztoky–Klecany.

### `o-arealu.kap1.fact.lokace.dt` <!-- src/pages/o-arealu/index.astro:34 -->

Lokace

### `o-arealu.kap1.fact.lokace.dd` <!-- src/pages/o-arealu/index.astro:35 -->

Klecany, 12 km od centra Prahy, na trase plánované tramvaje Výzkumný
ústav I.

### `o-arealu.kap1.fact.uzemi.dt` <!-- src/pages/o-arealu/index.astro:38 -->

Rozvojové území

### `o-arealu.kap1.fact.uzemi.dd` <!-- src/pages/o-arealu/index.astro:39 -->

~83 000 m² celkem (areál Horních kasáren)

### `o-arealu.kap1.fact.etapa1.dt` <!-- src/pages/o-arealu/index.astro:42 -->

Etapa 1 (Hub jádro)

### `o-arealu.kap1.fact.etapa1.dd` <!-- src/pages/o-arealu/index.astro:43 -->

Rekonstrukce A1–A6 a budovy C, ~6 700 m² čistých podlahových ploch
(~10 000 m² hrubých)

### `o-arealu.kap1.fact.kapacita.dt` <!-- src/pages/o-arealu/index.astro:46 -->

Hub kapacita

### `o-arealu.kap1.fact.kapacita.dd` <!-- src/pages/o-arealu/index.astro:47 -->

~331 menších privátních jednotek 1+kk s vlastním sociálním zázemím

### `o-arealu.kap1.fact.doprava-dnes.dt` <!-- src/pages/o-arealu/index.astro:50 [REWRITE-V2] -->

Kyvadlový bus

### `o-arealu.kap1.fact.doprava-dnes.dd` <!-- src/pages/o-arealu/index.astro:51 [REWRITE-V2] -->

Areálový minibus na metro Kobylisy přes ranní (6:30-9:30) a odpolední
(15:30-19:00) špičku, cesta 15 minut.

### [NEW-V2] `o-arealu.kap1.fact.doprava-pid.dt` <!-- nový blok -->

Příměstská linka PID

### [NEW-V2] `o-arealu.kap1.fact.doprava-pid.dd` <!-- -->

Mimo špičku každých 15-20 minut do stanice Kobylisy, cesta ~25 minut.

### `o-arealu.kap1.fact.doprava-vyhled.dt` <!-- src/pages/o-arealu/index.astro:54 [REWRITE-V2] -->

Tramvaj a cyklo

### `o-arealu.kap1.fact.doprava-vyhled.dd` <!-- src/pages/o-arealu/index.astro:55 [REWRITE-V2] -->

Plánovaná tramvajová zastávka Výzkumný ústav I. (vydáno stavební
povolení), cyklolávka Roztoky–Klecany.

### `o-arealu.kap1.fact.etapa2.dt` <!-- src/pages/o-arealu/index.astro:58 -->

Etapa 2+

### `o-arealu.kap1.fact.etapa2.dd` <!-- src/pages/o-arealu/index.astro:59 -->

Nové stavby v areálu — možné podmíněně od roku 2030 po změně územního
plánu

### `o-arealu.kap1.fact.prava.dt` <!-- src/pages/o-arealu/index.astro:62 -->

Práva

### `o-arealu.kap1.fact.prava.dd` <!-- src/pages/o-arealu/index.astro:63 -->

Smluvně zajištěná do roku 2039: odkup, užívání, stavba

### [NEW-V2] `o-arealu.kap1.fact.sklady.dt` <!-- nový blok — kontejnerové sklady -->

Kontejnerové sklady

### [NEW-V2] `o-arealu.kap1.fact.sklady.dd` <!-- -->

Doplněk k jednotkám 1+kk — uzamykatelné boxy 24/7 pro kola, lyže,
sezónní krámy, archiv.

### `o-arealu.kap1.map.alt` <!-- src/pages/o-arealu/index.astro:68 -->

Schéma areálu Horních kasáren — Hub jádro (růžová: A1–A6 + C) a Hub
zázemí (modrá: B, E, F, S, T, V, bazén) v rámci celkového rozvojového
území.

### `o-arealu.kap1.map.caption` <!-- src/pages/o-arealu/index.astro:69 -->

Areál Horních kasáren — sedm budov etapy 1 (A1–A6 a C, růžová) a
sdílené zázemí (modrá) v rámci celkového rozvojového území. Číselné
popisky: počty jednotek 1+kk per budova.

### `o-arealu.kap1.h3.doprava` <!-- src/pages/o-arealu/index.astro:72 -->

Doprava a dostupnost

### `o-arealu.kap1.body.doprava` <!-- src/pages/o-arealu/index.astro:73 [REWRITE-V2] -->

Klecany jsou napojené na pražskou hromadnou dopravu příměstskou linkou
PID, která jezdí každých 15-20 minut do stanice Kobylisy. Cesta zabere
zhruba 25 minut. Přes ranní (6:30-9:30) a odpolední (15:30-19:00)
špičku navíc jezdí kyvadlový minibus areálu — přímé spojení Hub →
Kobylisy za 15 minut, bez přesedání. Plánovaná tramvajová zastávka
Výzkumný ústav I. (na hranici Klecany / Zdiby) má vydané stavební
povolení; po realizaci se cesta do Prahy zkrátí. Pro cyklisty je v
plánu lávka Roztoky–Klecany, která areál spojí s pravým břehem Vltavy
a s pražskou cyklostezkou.

### `o-arealu.kap1.h3.okoli` <!-- src/pages/o-arealu/index.astro:75 -->

Okolí a služby

### `o-arealu.kap1.body.okoli` <!-- src/pages/o-arealu/index.astro:76 -->

V pěší dostupnosti od areálu jsou základní služby (potraviny, lékárna,
pošta), škola, zdravotní středisko, dvě kavárny a hospoda. V Klecanech
funguje dětské hřiště, sportoviště, knihovna a kulturní dům. Do pěti
kilometrů je supermarket, koupaliště Vltava, řada hospůdek na pravém
břehu a nedaleký zámek Veltrusy. Pro lidi, kteří chtějí bydlet blízko
Prahy bez pražských nájmů, jde o reálný kompromis — ne odříznutí od
služeb, ale zároveň ne v rušném městě.

### `o-arealu.map-banner.eyebrow` <!-- src/pages/o-arealu/index.astro:89 -->

Kde to je

### `o-arealu.map-banner.h2` <!-- src/pages/o-arealu/index.astro:90 -->

Klecany na mapě.

### `o-arealu.map-banner.body` <!-- src/pages/o-arealu/index.astro:91 -->

Severní okraj Prahy, hned za Vltavou. Pravý břeh, 12 km od centra.
Areál sedí na ulici Dolní Kasárna.

### `o-arealu.map-banner.address` <!-- src/pages/o-arealu/index.astro:95 -->

Horní kasárna Klecany

### `o-arealu.map-banner.maps-link` <!-- src/pages/o-arealu/index.astro:96 -->

Otevřít v Mapách →

### `o-arealu.kap2.label` <!-- src/pages/o-arealu/index.astro:161 -->

Kapitola 02

### `o-arealu.kap2.heading` <!-- src/pages/o-arealu/index.astro:162 -->

Časová osa.

### `o-arealu.kap2.lede` <!-- src/pages/o-arealu/index.astro:165 [REWRITE-V2] -->

Etapa 1 — rekonstrukce sedmi budov v jádru areálu — postupuje v běžné
stavební logice (zadávací dokumentace → povolení → rekonstrukce).
Termín plného otevření Hubu nastavujeme společně s přípravným
družstvem. První obyvatelný formát (kapsle a stavební buňky 1+kk) je
připraven dřív než plný provoz; zbylé pokojové formáty navazují, jak
postupuje rekonstrukce. Etapa 2 (nové stavby v areálu) je podmíněná
změnou územního plánu a v současném ÚP je možná až od roku 2030.

### `o-arealu.kap2.timeline.2024.time` <!-- src/pages/o-arealu/index.astro:169 -->

2024

### `o-arealu.kap2.timeline.2024.title` <!-- src/pages/o-arealu/index.astro:171 -->

Identifikace areálu

### `o-arealu.kap2.timeline.2024.status` <!-- src/pages/o-arealu/index.astro:172 -->

hotovo

### `o-arealu.kap2.timeline.zadavaci.time` <!-- src/pages/o-arealu/index.astro:176 -->

09/2025 – H1 2026

### `o-arealu.kap2.timeline.zadavaci.title` <!-- src/pages/o-arealu/index.astro:178 -->

Zadávací dokumentace + příprava záměru

### `o-arealu.kap2.timeline.zadavaci.status` <!-- src/pages/o-arealu/index.astro:179 -->

hotovo

### `o-arealu.kap2.timeline.zahajeni.time` <!-- src/pages/o-arealu/index.astro:183 -->

06/2026

### `o-arealu.kap2.timeline.zahajeni.title` <!-- src/pages/o-arealu/index.astro:185 -->

Zahájení rekonstrukcí (A1–A6 a budovy C)

### `o-arealu.kap2.timeline.zahajeni.status` <!-- src/pages/o-arealu/index.astro:186 [REWRITE-V2] -->

pracujeme na

### `o-arealu.kap2.timeline.hruba.time` <!-- src/pages/o-arealu/index.astro:190 -->

2027

### `o-arealu.kap2.timeline.hruba.title` <!-- src/pages/o-arealu/index.astro:192 -->

Hrubá stavba a interiéry

### `o-arealu.kap2.timeline.hruba.status` <!-- src/pages/o-arealu/index.astro:193 [REWRITE-V2] -->

pracujeme na

### `o-arealu.kap2.timeline.spusteni.time` <!-- src/pages/o-arealu/index.astro:197 [REWRITE-V2] -->

s družstvem

### `o-arealu.kap2.timeline.spusteni.title` <!-- src/pages/o-arealu/index.astro:199 -->

Spuštění provozu Hubu (kapsle dříve, pokoje později)

### `o-arealu.kap2.timeline.spusteni.status` <!-- src/pages/o-arealu/index.astro:200 [REWRITE-V2] -->

domlouvá družstvo

### `o-arealu.kap2.timeline.etapa2.time` <!-- src/pages/o-arealu/index.astro:204 -->

2030+

### `o-arealu.kap2.timeline.etapa2.title` <!-- src/pages/o-arealu/index.astro:206 -->

Etapa 2: nové stavby v areálu (podmíněno změnou ÚP)

### `o-arealu.kap2.timeline.etapa2.status` <!-- src/pages/o-arealu/index.astro:207 -->

podmíněno

### `o-arealu.kap3.label` <!-- src/pages/o-arealu/index.astro:216 -->

Kapitola 03

### `o-arealu.kap3.heading` <!-- src/pages/o-arealu/index.astro:217 -->

Co stojí za Hubem.

### `o-arealu.kap3.lede` <!-- src/pages/o-arealu/index.astro:220 -->

Záměr běží pod hlavičkou VPD (Veřejně Prospěšný Developer) v rámci
spolku **OSA II — Občanské sdružení Alternativa II, z.s.** Je to
nezisková organizace, která funguje bez veřejných dotací — z členských
příspěvků a z vlastní činnosti.

### `o-arealu.kap3.fact.provozovatel.dt` <!-- src/pages/o-arealu/index.astro:224 -->

Provozovatel

### `o-arealu.kap3.fact.provozovatel.dd` <!-- src/pages/o-arealu/index.astro:225 -->

Občanské sdružení Alternativa II, z.s. (OSA II) — neziskový spolek bez
veřejných dotací

### `o-arealu.kap3.fact.predseda.dt` <!-- src/pages/o-arealu/index.astro:228 -->

Předseda

### `o-arealu.kap3.fact.predseda.dd` <!-- src/pages/o-arealu/index.astro:229 -->

Marek Semerád · vpd@osa2.cz

### `o-arealu.kap3.fact.mistopredseda.dt` <!-- src/pages/o-arealu/index.astro:232 -->

Místopředseda

### `o-arealu.kap3.fact.mistopredseda.dd` <!-- src/pages/o-arealu/index.astro:233 -->

Štěpán Říha

### `o-arealu.kap3.fact.vize.dt` <!-- src/pages/o-arealu/index.astro:236 -->

Vize urbanistického rozvoje

### `o-arealu.kap3.fact.vize.dd` <!-- src/pages/o-arealu/index.astro:237 -->

Vychází z diplomových prací studentů ČVUT, vypracovaných na základě
naformulovaného zadání

### `o-arealu.kap3.fact.dokumentace.dt` <!-- src/pages/o-arealu/index.astro:240 -->

Formální dokumentace

### `o-arealu.kap3.fact.dokumentace.dd` <!-- src/pages/o-arealu/index.astro:241 -->

Zadávací dokumentace OSA228 z 2. 9. 2025 (úvodní studie pro architekta)

### `o-arealu.kap3.fact.zamer.dt` <!-- src/pages/o-arealu/index.astro:244 -->

Související záměr

### `o-arealu.kap3.fact.zamer.dd` <!-- src/pages/o-arealu/index.astro:245 -->

VPD1 — celkový rozvoj areálu (sibling-web)

### `o-arealu.kap3.h3.proc-ted` <!-- src/pages/o-arealu/index.astro:249 -->

Proč Hub a proč teď

### `o-arealu.kap3.body.proc-ted` <!-- src/pages/o-arealu/index.astro:250 [REWRITE-V2] -->

Hub je první obyvatelná etapa záměru VPD1. Rekonstruují se stávající
budovy, ne se staví nové — protože územní plán umisťování nových staveb
v areálu povoluje až od roku 2030. Cílem je dotvořit areál bez čekání:
během rekonstrukce sedmi budov roste živá komunita pracujících
studentů, OSVČ, mladých kreativců a začínajících podnikatelů. Tato
komunita pak v dalších etapách (po změně ÚP) přechází do trvalejších
forem bydlení v rámci dorůstajícího areálu.

### `o-arealu.kap3.h3.bez-dotaci` <!-- src/pages/o-arealu/index.astro:252 -->

Bez dotací, bez spekulace

### `o-arealu.kap3.body.bez-dotaci` <!-- src/pages/o-arealu/index.astro:253 -->

OSA II nečerpá veřejné dotace. Záměr je financován kombinací vlastních
zdrojů, družstevních vkladů budoucích rezidentů a strategického /
finančního partnera. Žádný spekulativní mezivlastník. Detail finanční
struktury je na sibling-webu VPD1; pro rezidenta je relevantní, že
nájem na živnostenskou bázi je standard, ne výjimka.

### `o-arealu.kap3.foot-note` <!-- src/pages/o-arealu/index.astro:255 [REWRITE-V2] -->

Naposledy aktualizováno: 2026-05-04.

### `o-arealu.cta.eyebrow` <!-- src/pages/o-arealu/index.astro:261 -->

Další krok

### `o-arealu.cta.lede` <!-- src/pages/o-arealu/index.astro:262 [REWRITE-V2] -->

Pokud vás Hub zajímá jako možné bydlení, vyplňte nezávazný zájem.
Vyplněním se přidáváte k přípravnému družstvu — žádný závazek
nevzniká, jen se dostáváte do skupiny lidí, se kterými dál mluvíme o
detailech.

### `o-arealu.cta.btn` <!-- src/pages/o-arealu/index.astro:263 -->

Vyplnit nezávazný zájem →

---

## Stránka: Rezervace · `/rezervace/` — `src/pages/rezervace/index.astro`

> Pozn.: URL stránky zůstává `/rezervace/` (technický identifikátor).
> Visible labely, hero, CTA a meta používají termín **„nezávazný
> zájem"**. Stránka je v V2 vstupní bránou do **přípravného družstva**.

### `rezervace.meta.title` <!-- src/pages/rezervace/index.astro:11 [REWRITE-V2] -->

Nezávazný zájem · Přípravné družstvo — Startovací Hub Klecany

### `rezervace.meta.description` <!-- src/pages/rezervace/index.astro:12 [REWRITE-V2] -->

Vyplněním formuláře se přidáváte k první kohortě přípravného družstva.
Není to smlouva ani závazek — jen nám dáváte vědět, za jakých podmínek
by pro vás Hub dával smysl. Z odpovědí složíme zakládací kohortu.

### `rezervace.hero.eyebrow` <!-- src/pages/rezervace/index.astro:19 -->

Nezávazný zájem

### `rezervace.hero.h1` <!-- src/pages/rezervace/index.astro:20 [REWRITE-V2] -->

Řekněte nám, jak vám Hub sedí.

### `rezervace.hero.lede` <!-- src/pages/rezervace/index.astro:21 [REWRITE-V2] -->

Vyplnění je krátké a nezavazuje k ničemu. Z vašich odpovědí složíme
první kohortu přípravného družstva — lidé, kteří určí finální podobu
provozu a získají právo bydlet v luxusních stavebních buňkách 1+kk.

### `rezervace.meta.bullet.platba.strong` <!-- src/pages/rezervace/index.astro:27 -->

Žádná platba.

### `rezervace.meta.bullet.platba.body` <!-- src/pages/rezervace/index.astro:27 -->

Vyplnění je zdarma a nezávazné.

### `rezervace.meta.bullet.poradnik.strong` <!-- src/pages/rezervace/index.astro:28 -->

Žádný pořadník.

### `rezervace.meta.bullet.poradnik.body` <!-- src/pages/rezervace/index.astro:28 [REWRITE-V2] -->

Skládáme kohortu, ne FIFO frontu.

### `rezervace.meta.bullet.kratke.strong` <!-- src/pages/rezervace/index.astro:29 -->

Krátké.

### `rezervace.meta.bullet.kratke.body` <!-- src/pages/rezervace/index.astro:29 -->

Vyplnění zabere pár minut.

### `rezervace.status.eyebrow` <!-- src/pages/rezervace/index.astro:39 [REWRITE-V2] -->

Co se děje teď

### `rezervace.status.body` <!-- src/pages/rezervace/index.astro:40 [REWRITE-V2] -->

Skládáme první kohortu přípravného družstva — cca 50 lidí, kteří
projekt společně připraví a získají garantované právo bydlet v
luxusní 1+kk stavební buňce. Termín nastěhování dolaďujeme s
kohortou; bez vás nemá smysl ho fixovat dopředu.

### `rezervace.aftermath.eyebrow` <!-- src/pages/rezervace/index.astro:46 -->

Co se stane po odeslání

### `rezervace.aftermath.h2` <!-- src/pages/rezervace/index.astro:47 -->

Tři kroky, žádný papír.

### `rezervace.aftermath.step01.title` <!-- src/pages/rezervace/index.astro:52 -->

Zapíšeme váš zájem

### `rezervace.aftermath.step01.body` <!-- src/pages/rezervace/index.astro:53 [REWRITE-V2] -->

Vaše odpovědi přidáme k ostatním. Podle nich skládáme první kohortu —
podle záměru, situace a kompatibility, ne podle pořadí.

### `rezervace.aftermath.step02.title` <!-- src/pages/rezervace/index.astro:57 [REWRITE-V2] -->

Pošleme vám detail

### `rezervace.aftermath.step02.body` <!-- src/pages/rezervace/index.astro:58 [REWRITE-V2] -->

Privátně vám pošleme aktuální stav projektu, termín nejbližšího
setkání družstva, detail buňky 1+kk a smluvní rámec. Zhruba do dvou
týdnů od vyplnění.

### `rezervace.aftermath.step03.title` <!-- src/pages/rezervace/index.astro:62 [REWRITE-V2] -->

Smlouvu řešíme až s nastěhováním

### `rezervace.aftermath.step03.body` <!-- src/pages/rezervace/index.astro:63 [REWRITE-V2] -->

Žádný závazek nevzniká, dokud spolu nepodepíšeme smlouvu o budoucí
smlouvě (SoSB) — to bývá těsně před nastěhováním. Do té chvíle je vše
nezávazné a můžete kdykoli vystoupit.

### `rezervace.faq.eyebrow` <!-- src/pages/rezervace/index.astro:70 -->

Časté otázky

### `rezervace.faq.h2` <!-- src/pages/rezervace/index.astro:71 -->

Co se mě jako budoucího rezidenta nejvíc týká?

### `rezervace.faq.more` <!-- src/pages/rezervace/index.astro:80 -->

Všechny otázky →

> Pozn.: Otázky níže se vykreslují z FAQ kolekce (klíče `q5`, `q7`,
> `q9` — `q9` je nový blok o přípravném družstvu).

---

## Formulář: před-rezervace — `src/components/ResidentForm.astro`

### `form.step01.num` <!-- src/components/ResidentForm.astro:75 -->

01

### `form.step01.heading` <!-- src/components/ResidentForm.astro:76 -->

Praktické vstupy

### `form.step01.hint` <!-- src/components/ResidentForm.astro:77 -->

Orientační čísla. Můžete je kdykoliv upřesnit.

### `form.step01.field.units.label` <!-- src/components/ResidentForm.astro:81 -->

Počet jednotek 1+kk

### `form.step01.field.moveIn.label` <!-- src/components/ResidentForm.astro:85 -->

Orientační termín nastěhování

### `form.step02.num` <!-- src/components/ResidentForm.astro:93 -->

02

### `form.step02.heading` <!-- src/components/ResidentForm.astro:94 -->

Jakou roli v Hubu hledáte?

### `form.step02.hint` <!-- src/components/ResidentForm.astro:95 -->

Vyberte cestu, která je vám dnes nejbližší. Hub počítá s každou z
nich rovnocenně.

### `form.role.paying` <!-- src/components/ResidentForm.astro:15 -->

Platící rezident

### `form.role.stipend` <!-- src/components/ResidentForm.astro:16 -->

Stipendium

### `form.role.work-trade` <!-- src/components/ResidentForm.astro:17 -->

Work-trade / správce

### `form.role.creator` <!-- src/components/ResidentForm.astro:18 -->

Rezident-tvůrce

### `form.role.unsure` <!-- src/components/ResidentForm.astro:19 -->

Ještě nevím, rozhodne cena a podmínky

### `form.step03.num` <!-- src/components/ResidentForm.astro:109 -->

03

### `form.step03.heading` <!-- src/components/ResidentForm.astro:110 -->

Jak dlouho byste chtěl(a) v Hubu zůstat?

### `form.step03.hint` <!-- src/components/ResidentForm.astro:111 -->

Vyberte nejpravděpodobnější variantu.

### `form.stay.1-3m` <!-- src/components/ResidentForm.astro:23 -->

1–3 měsíce

### `form.stay.3-6m` <!-- src/components/ResidentForm.astro:24 -->

3–6 měsíců

### `form.stay.6-12m` <!-- src/components/ResidentForm.astro:25 -->

6–12 měsíců

### `form.stay.12m+` <!-- src/components/ResidentForm.astro:26 -->

12 a více měsíců

### `form.stay.unsure` <!-- src/components/ResidentForm.astro:27 -->

Ještě nevím

### `form.step03.renewal.label` <!-- src/components/ResidentForm.astro:123 -->

Chtěl(a) bych mít možnost prodlužovat nájem opakovaně.

### `form.step04.num` <!-- src/components/ResidentForm.astro:129 -->

04

### `form.step04.heading` <!-- src/components/ResidentForm.astro:130 -->

Jaký rozpočet byste měl(a) reálně k dispozici?

### `form.step04.hint` <!-- src/components/ResidentForm.astro:131 [REWRITE-V2] -->

Včetně základních služeb. Konkrétní cena se ladí s přípravným
družstvem; orientační rozsahy najdete v poznámce u jednotlivých
formátů.

### `form.budget.0-4k` <!-- src/components/ResidentForm.astro:31 -->

Do 4 000 Kč

### `form.budget.4-6k` <!-- src/components/ResidentForm.astro:32 -->

4 001–6 000

### `form.budget.6-8k` <!-- src/components/ResidentForm.astro:33 -->

6 001–8 000

### `form.budget.8-10k` <!-- src/components/ResidentForm.astro:34 -->

8 001–10 000

### `form.budget.10-12k` <!-- src/components/ResidentForm.astro:35 -->

10 001–12 000

### `form.budget.12k+` <!-- src/components/ResidentForm.astro:36 -->

Více než 12 000

### `form.budget.stipend` <!-- src/components/ResidentForm.astro:37 -->

Jen stipendijní režim

### `form.step05.num` <!-- src/components/ResidentForm.astro:145 -->

05

### `form.step05.heading` <!-- src/components/ResidentForm.astro:146 -->

O jaký typ místa byste měl(a) největší zájem?

### `form.step05.hint` <!-- src/components/ResidentForm.astro:147 -->

Nejde o rezervaci konkrétního pokoje, jen o vaši první preferenci.

### `form.place.capsule` <!-- src/components/ResidentForm.astro:41 -->

Kapsle / nejlevnější lůžko

### `form.place.private` <!-- src/components/ResidentForm.astro:42 -->

Klidnější uzavíratelné místo

### `form.place.single` <!-- src/components/ResidentForm.astro:43 -->

Jednolůžkový pokoj

### `form.place.shared` <!-- src/components/ResidentForm.astro:44 -->

Sdílený pokoj

### [NEW-V2] `form.place.bunka` <!-- src/components/ResidentForm.astro:44 — nová volba -->

Stavební buňka 1+kk (jen pro přípravné družstvo)

### `form.place.price` <!-- src/components/ResidentForm.astro:45 -->

Rozhodne cena

### `form.step06.num` <!-- src/components/ResidentForm.astro:161 -->

06

### `form.step06.heading` <!-- src/components/ResidentForm.astro:162 -->

Jak často potřebujete být v Praze?

### `form.step06.hint` <!-- src/components/ResidentForm.astro:163 [REWRITE-V2] -->

Pomáhá nám posoudit, jestli pro vás bude dojezdová doba do Prahy
únosná. Kyvadlový bus areálu jezdí přes špičku, jinak PID.

### `form.prague.daily` <!-- src/components/ResidentForm.astro:49 -->

Denně v pracovní dny

### `form.prague.2-3w` <!-- src/components/ResidentForm.astro:50 -->

2–3× týdně

### `form.prague.weekly` <!-- src/components/ResidentForm.astro:51 -->

1× týdně nebo méně

### `form.prague.not` <!-- src/components/ResidentForm.astro:52 -->

Praha pro mě není hlavní důvod

### `form.step07.num` <!-- src/components/ResidentForm.astro:177 -->

07

### `form.step07.heading` <!-- src/components/ResidentForm.astro:178 -->

Co bude při rozhodování nejdůležitější?

### `form.step07.hint` <!-- src/components/ResidentForm.astro:179 -->

Vyberte nejvýš dvě priority.

### `form.priority.price` <!-- src/components/ResidentForm.astro:56 -->

Co nejnižší cena

### `form.priority.access` <!-- src/components/ResidentForm.astro:57 -->

Rychlá dostupnost do Prahy

### `form.priority.flexible` <!-- src/components/ResidentForm.astro:58 -->

Krátký a flexibilní pobyt

### `form.priority.quiet` <!-- src/components/ResidentForm.astro:59 -->

Klid na práci nebo studium

### `form.priority.community` <!-- src/components/ResidentForm.astro:60 -->

Komunita a společné prostory

### `form.priority.fairness` <!-- src/components/ResidentForm.astro:61 -->

Férová pravidla a smysl projektu

### `form.priority.contribute` <!-- src/components/ResidentForm.astro:62 -->

Možnost přispět jinak než penězi

### `form.step08.num` <!-- src/components/ResidentForm.astro:193 -->

08

### `form.step08.heading` <!-- src/components/ResidentForm.astro:194 -->

Kolik společného života v Hubu byste chtěl(a)?

### `form.step08.hint` <!-- src/components/ResidentForm.astro:195 -->

Stačí jedna odpověď.

### `form.social.quiet` <!-- src/components/ResidentForm.astro:66 -->

Spíš klid a soukromí

### `form.social.between` <!-- src/components/ResidentForm.astro:67 -->

Něco mezi

### `form.social.community` <!-- src/components/ResidentForm.astro:68 -->

Spíš komunita

### `form.step09.num` <!-- src/components/ResidentForm.astro:209 -->

09

### `form.step09.heading.default` <!-- src/components/ResidentForm.astro:210 -->

Něco navíc

### `form.step09.hint.default` <!-- src/components/ResidentForm.astro:211 -->

Vyplňte stručně, neformálně.

### `form.step09.label.default` <!-- src/components/ResidentForm.astro:215 -->

Co byste rád(a) v Hubu rozjel(a)?

### `form.step09.label.about` <!-- src/components/ResidentForm.astro:219 -->

Pár vět o vás

### `form.step09.placeholder.about` <!-- src/components/ResidentForm.astro:220 -->

Životní situace, co vás na Hubu chytlo, proč právě teď.

### `form.step09.branch.stipend.heading` <!-- src/components/ResidentForm.astro:614 -->

Proč pro vás dává stipendium smysl právě teď?

### `form.step09.branch.stipend.hint` <!-- src/components/ResidentForm.astro:615 -->

Životní situace stačí stručně. Nepotřebujeme dlouhé vysvětlování.

### `form.step09.branch.stipend.label` <!-- src/components/ResidentForm.astro:616 -->

V čem si představujete přínos pro Hub?

### `form.step09.branch.work-trade.heading` <!-- src/components/ResidentForm.astro:619 -->

Co umíte nabídnout výměnou za zvýhodněné bydlení?

### `form.step09.branch.work-trade.hint` <!-- src/components/ResidentForm.astro:620 -->

Napište 1–3 konkrétní činnosti a odhad hodin týdně.

### `form.step09.branch.work-trade.label` <!-- src/components/ResidentForm.astro:621 -->

S čím byste uměl(a) reálně pomoct?

### `form.step09.branch.creator.heading` <!-- src/components/ResidentForm.astro:624 -->

Co byste do Hubu přinesl(a) jako tvůrce?

### `form.step09.branch.creator.hint` <!-- src/components/ResidentForm.astro:625 -->

Obor, forma výstupu, případně odkaz na ukázku v textu níže.

### `form.step09.branch.creator.label` <!-- src/components/ResidentForm.astro:626 -->

Co tvoříte a co byste v Hubu rozjel(a)?

### `form.step10.num` <!-- src/components/ResidentForm.astro:227 -->

10

### `form.step10.heading` <!-- src/components/ResidentForm.astro:228 -->

Kam vám máme poslat další informace?

### `form.step10.hint` <!-- src/components/ResidentForm.astro:229 [REWRITE-V2] -->

Posíláme privátní zprávu s aktuálním stavem projektu, termínem
nejbližšího setkání družstva a detailem buňky 1+kk. Zhruba do dvou
týdnů od vyplnění.

### `form.step10.field.name.label` <!-- src/components/ResidentForm.astro:233 -->

Jméno a příjmení

### `form.step10.field.email.label` <!-- src/components/ResidentForm.astro:237 -->

E-mail

### `form.step10.field.phone.label` <!-- src/components/ResidentForm.astro:242 -->

Telefon (volitelné)

### `form.step10.consent.label` <!-- src/components/ResidentForm.astro:247 -->

Souhlasím se zasláním informací k tomuto záměru na uvedený e-mail.

### `form.submit.label` <!-- src/components/ResidentForm.astro:252 -->

Zapsat nezávazný zájem →

### `form.submit.success.label` <!-- src/components/ResidentForm.astro:258 -->

Hotovo

### `form.success.eyebrow` <!-- src/components/ResidentForm.astro:263 -->

Hotovo

### `form.success.h3` <!-- src/components/ResidentForm.astro:264 [REWRITE-V2] -->

Vítejte v přípravném družstvu.

### `form.success.body` <!-- src/components/ResidentForm.astro:265 [REWRITE-V2] -->

Zapsali jsme váš nezávazný zájem. Není to rezervace, není to pořadník
a není to slib přidělené jednotky. Z odpovědí skládáme první kohortu
— do dvou týdnů vám pošleme privátní zprávu s aktuálním stavem,
termínem nejbližšího setkání družstva a detailem 1+kk buňky.

Pokud jste vybral(a) stipendium, work-trade nebo roli rezidenta-tvůrce,
doptáme se na detail samostatně.

### [NEW-V2] `form.failure.eyebrow` <!-- nový blok pro fail-state submitu -->

Něco se nepodařilo

### [NEW-V2] `form.failure.h3` <!-- nový blok pro fail-state submitu -->

Odeslání se nepovedlo.

### [NEW-V2] `form.failure.body` <!-- nový blok pro fail-state submitu -->

Zkuste to prosím znovu. Pokud problém trvá, napište nám na
info@startovacihub.cz a do předmětu uveďte „Zájem o Hub Klecany" —
doplníme to ručně.

### [NEW-V2] `form.error.units.empty` <!-- validační hláška -->

Vyplňte počet jednotek (alespoň 1).

### [NEW-V2] `form.error.units.max` <!-- validační hláška -->

Maximum je 50 jednotek. Pokud potřebujete víc, napište nám na
info@startovacihub.cz.

### [NEW-V2] `form.error.moveIn.empty` <!-- validační hláška -->

Vyberte orientační termín nastěhování.

### [NEW-V2] `form.error.moveIn.past` <!-- validační hláška -->

Termín nastěhování je v minulosti — vyberte budoucí měsíc.

### [NEW-V2] `form.error.role.empty` <!-- validační hláška -->

Vyberte cestu, která je vám dnes nejbližší.

### [NEW-V2] `form.error.stay.empty` <!-- validační hláška -->

Vyberte očekávanou délku pobytu.

### [NEW-V2] `form.error.budget.empty` <!-- validační hláška -->

Vyberte částku, kterou byste skutečně zvažoval(a).

### [NEW-V2] `form.error.place.empty` <!-- validační hláška -->

Vyberte typ místa, který vás nejvíc zajímá.

### [NEW-V2] `form.error.prague.empty` <!-- validační hláška -->

Vyberte, jak často potřebujete být v Praze.

### [NEW-V2] `form.error.priorities.empty` <!-- validační hláška -->

Vyberte alespoň jednu prioritu.

### [NEW-V2] `form.error.priorities.max` <!-- validační hláška -->

Vyberte nejvýš dvě priority.

### [NEW-V2] `form.error.social.empty` <!-- validační hláška -->

Vyberte, kolik společného života v Hubu byste chtěl(a).

### [NEW-V2] `form.error.branchIntent.short` <!-- validační hláška -->

Napište prosím konkrétně, s čím byste uměl(a) pomoct (alespoň 40 znaků).

### [NEW-V2] `form.error.branchAbout.short` <!-- validační hláška -->

Napište prosím alespoň pár vět o sobě (alespoň 40 znaků).

### [NEW-V2] `form.error.name.empty` <!-- validační hláška -->

Vyplňte jméno a příjmení.

### [NEW-V2] `form.error.name.short` <!-- validační hláška -->

Jméno je moc krátké.

### [NEW-V2] `form.error.email.empty` <!-- validační hláška -->

Zadejte e-mail.

### [NEW-V2] `form.error.email.format` <!-- validační hláška -->

Zadejte e-mail ve tvaru jmeno@domena.cz.

### [NEW-V2] `form.error.phone.format` <!-- validační hláška -->

Telefon je nepovinný — pokud ho vyplníte, použijte 9 číslic nebo
mezinárodní formát s +420.

### [NEW-V2] `form.error.consent.unchecked` <!-- validační hláška -->

Pro odeslání musíme mít váš souhlas se zasláním informací.

### [NEW-V2] `form.submit.loading.label` <!-- mezistav submitu -->

Odesílám…

> Pozn.: Tady je `…` jako visual loading indicator, lint to typicky
> propustí. Pokud lint zachytí, nahraďte za tři tečky `...` nebo bez
> tečk: „Odesílám".

### [NEW-V2] `form.submit.error.label` <!-- error stav submitu -->

Zkusit znovu

---

## Stránka: FAQ · `/faq/` — `src/pages/faq/index.astro`

### `faq.meta.title` <!-- src/pages/faq/index.astro:18 -->

FAQ — Startovací Hub Klecany

### `faq.meta.description` <!-- src/pages/faq/index.astro:19 -->

Odpovědi na nejčastější otázky o projektu a bydlení v Hubu.

### `faq.hero.eyebrow` <!-- src/pages/faq/index.astro:24 -->

Časté otázky

### `faq.hero.h1` <!-- src/pages/faq/index.astro:25 -->

FAQ

### `faq.hero.lede` <!-- src/pages/faq/index.astro:26 -->

Otázky, které dostáváme nejčastěji. Pokud něco chybí, ozvěte se na
info@startovacihub.cz.

### `faq.tab.all` <!-- src/pages/faq/index.astro:32 -->

Vše

### `faq.tab.project` <!-- src/pages/faq/index.astro:8 -->

O projektu

### `faq.tab.resident` <!-- src/pages/faq/index.astro:9 -->

Pro obyvatele

---

## Obsah · FAQ — `src/content/faq/index.json`

### `faq.q1.question` <!-- src/content/faq/index.json:q1 -->

Co přesně je Startovací Hub a co bude dál?

### `faq.q1.answer` <!-- src/content/faq/index.json:q1 -->

Startovací Hub je první obyvatelná etapa záměru VPD1, který má z
areálu Horních kasáren v Klecanech postupně dotvořit obytnou a
produktivní vrstvu s potenciálem 1500+ bytových jednotek. Hub je menší
provozní celek, kterým chceme co nejdřív přivést areál do reálného
fungování. Po Hubu pokračujeme v dalších etapách VPD1.

### `faq.q2.question` <!-- src/content/faq/index.json:q2 -->

Kdo za projektem stojí?

### `faq.q2.answer` <!-- src/content/faq/index.json:q2 -->

Záměr běží pod hlavičkou VPD (Veřejně Prospěšný Developer), což je
projekt v rámci OSA — Občanské sdružení Alternativa II, z.s. OSA je
neziskový spolek, který funguje bez veřejných dotací — z členských
příspěvků a z vlastní činnosti. Detail najdete na osa2.cz.

### `faq.q3.question` <!-- src/content/faq/index.json:q3 [REWRITE-V2] -->

Kdy se do Hubu nastěhuju?

### `faq.q3.answer` <!-- src/content/faq/index.json:q3 [REWRITE-V2] -->

Termín nastěhování domlouváme s přípravným družstvem — první kohortou
cca 50 lidí, kteří projekt společně připraví. Bez vás nemá smysl
fixovat datum dopředu. Po vyplnění nezávazného zájmu se ozveme
privátně s aktuálním stavem rekonstrukce, plánovaným termínem
nastěhování pro vaši preferenci a detailem buňky 1+kk. Nejdřív
připravený formát jsou kapsle a luxusní 1+kk buňky pro členy
přípravného družstva; pokojové formáty navazují, jak postupuje
rekonstrukce.

### `faq.q4.question` <!-- src/content/faq/index.json:q4 -->

V jaké fázi je projekt teď?

### `faq.q4.answer` <!-- src/content/faq/index.json:q4 [REWRITE-V2] -->

Máme dokončený investiční záměr a navrženou provozní strukturu.
Skládáme první kohortu přípravného družstva. Paralelně pracujeme na
zahájení rekonstrukcí (06/2026) a doladění právního rámce.

### `faq.q5.question` <!-- src/content/faq/index.json:q5 -->

Je vyplnění nezávazného zájmu zavazující?

### `faq.q5.answer` <!-- src/content/faq/index.json:q5 [REWRITE-V2] -->

Není. Nezávazný zájem není smlouva ani závazek. Sdělujete nám
orientační podmínky, za kterých by pro vás Hub dával smysl. Na základě
odpovědí vás zařadíme do první kohorty přípravného družstva — skupiny
lidí, se kterými dál mluvíme o detailech. Můžete kdykoli odstoupit.

### `faq.q6.question` <!-- src/content/faq/index.json:q6 -->

Kolik bude pobyt stát?

### `faq.q6.answer` <!-- src/content/faq/index.json:q6 [REWRITE-V2] -->

Orientační rozsahy: kapsle 350 Kč/noc nebo 4 200 Kč/měs; sdílený
pokoj 4 800 Kč/měs/osoba; klidnější uzavíratelné místo 6 200 Kč/měs;
jednolůžkový pokoj 7 800 Kč/měs; luxusní stavební buňka 1+kk pro
členy přípravného družstva 12 000 Kč/měs. Coworking flex 2 400 Kč/měs.
Ceny zahrnují základní služby (energie, internet, společné prostory).
Finální nastavuje přípravné družstvo.

### `faq.q7.question` <!-- src/content/faq/index.json:q7 -->

Co znamená pobytové stipendium?

### `faq.q7.answer` <!-- src/content/faq/index.json:q7 [REWRITE-V2] -->

Stipendium je výběrový režim pro lidi, kteří by Hubu dávali smysl, ale
bez podpory by si pobyt nemohli dovolit. Není to slevový kód —
vybíráme podle záměru, který v Hubu chcete rozjet. Vedle stipendia
existují dvě paralelní cesty pro non-paying rezidenty: work-trade
(správce) a rezident-tvůrce. Všechny tři si můžete vybrat ve formuláři
nezávazného zájmu, a všechny tři dávají vstup do přípravného družstva
stejnou cestou jako platící rezidence.

### `faq.q8.question` <!-- src/content/faq/index.json:q8 -->

Jak je to s délkou pobytu a flexibilitou?

### `faq.q8.answer` <!-- src/content/faq/index.json:q8 [REWRITE-V2] -->

Hub počítá s různě dlouhými pobyty: krátké v kapslích, delší v
pokojích a buňkách 1+kk. Ve formuláři vybíráte orientační délku (1–3
měsíce, 3–6, 6–12, 12 a více) a zda chcete mít možnost ji prodlužovat.
Konkrétní smluvní podmínky doladíme s přípravným družstvem.

### [NEW-V2] `faq.q9.question` <!-- nová otázka -->

Co je přípravné družstvo a proč mě zajímá?

### [NEW-V2] `faq.q9.answer` <!-- -->

Přípravné družstvo je první kohorta cca 50 lidí, kteří projekt
společně připravují pro ostatní z cílovky. Jednou za 14 dní se schází
v komunitním centru a domlouvá konkrétní provozní pravidla — denní
rytmus, nájemní řád, režim sauny a bazénu, formát komunitních akcí.
Členové získávají garantované právo bydlet v luxusní stavební buňce
1+kk se zvýšeným standardem výbavy a fixovanou cenou na první rok
provozu. Vyplněním nezávazného zájmu se přihlašujete; zařazení záleží
na záměru a kompatibilitě, ne na pořadí. Druhá kohorta otevírá později
pro ty, kdo přijdou do hotového rámce.

### [NEW-V2] `faq.q10.question` <!-- nová otázka -->

Jak se z Hubu dostanu do Prahy?

### [NEW-V2] `faq.q10.answer` <!-- -->

Přes ranní (6:30-9:30) a odpolední (15:30-19:00) špičku jezdí
kyvadlový minibus areálu přímo na metro Kobylisy — 15 minut, bez
přesedání. Mimo špičku jezdí příměstská linka PID každých 15-20 minut
do stejné stanice (~25 minut). Plánovaná tramvajová zastávka Výzkumný
ústav I. (vydáno stavební povolení) cestu po realizaci ještě zkrátí.
Pro cyklisty je v plánu lávka Roztoky–Klecany, která areál spojí s
pražskou cyklostezkou.

---

## Stránka: 404 · `/404` — `src/pages/404.astro`

### `notfound.meta.title` <!-- src/pages/404.astro:5 -->

Stránka nenalezena — Startovací Hub Klecany

### `notfound.meta.description` <!-- src/pages/404.astro:5 -->

Hledaný obsah neexistuje. Zkuste se vrátit na úvod.

### `notfound.code` <!-- src/pages/404.astro:8 -->

404

### `notfound.h1` <!-- src/pages/404.astro:9 -->

Stránka nenalezena

### `notfound.lede` <!-- src/pages/404.astro:10 -->

Stránku, kterou hledáte, jsme nenašli. Zkuste úvod nebo některou ze
tří hlavních sekcí níže.

### `notfound.nav.uvod` <!-- src/pages/404.astro:12 -->

Úvod

### `notfound.nav.projekty` <!-- src/pages/404.astro:14 -->

Projekty

### `notfound.nav.faq` <!-- src/pages/404.astro:16 -->

FAQ

---

## Konec souboru

> Pozn.: Pokud chcete redaktorské změny, přepište **jen** tělo daného
> bloku. Klíče v backticks (`` `klic.podklic` ``) a komentáře
> `<!-- src/...:N -->` slouží mně k zpětnému zápisu — neupravujte je.
> Pošlete soubor zpět; já ho parsuju a navrhnu commit s diffem proti
> aktuálnímu V1 zdrojáku.

> Sources playbook (pro referenci voice rules):
> mokrinhouse.com (as-if-open coliving), outsite.co (amenity copy),
> cohousing.org (founding cohort framing), focuscopy.com (anti-AI tells
> 2025), painlessczech.com (vykání/tykání register), Czech Pirates
> komunikace (anti-pressure tone).
