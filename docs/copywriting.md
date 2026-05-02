# Copywriting — Startovací Hub Klecany

Kompletní soupis veškerého viditelného textu na webu, organizovaný po stránkách
a sekcích. Každý text má **stabilní klíč** v backticks (`klic.podklic`) a
**HTML komentář se zdrojem** (soubor:řádek), který slouží mně k zpětnému
zápisu — vy ho ignorujte.

## Jak v tomto souboru editovat

1. Najděte text, který chcete změnit.
2. Přepište **jen** tělo (řádky pod nadpisem až k další `###` nebo `##`).
3. **Nemažte ani neupravujte:**
   - klíč v backticks (např. `` `hero.h1` ``)
   - HTML komentář se zdrojem (`<!-- src/...:N -->`)
   - strukturu nadpisů `##` / `###`
4. Pokud chcete **vyhodit text úplně**, napište pod nadpis řádek `[VYNECHAT]`
   a já s vámi probereme, zda lze odstranit i obklopující markup.
5. Pro nový odstavec uvnitř víceřádkové položky stačí prázdný řádek, jako v
   běžném markdown.
6. Pro **nový text**, který v současnosti neexistuje, napište pod čerstvý
   nadpis `### [NOVÝ] název` a tělo — domluvíme umístění.

Pošlete soubor zpět; já ho parsuju a navrhnu commit s diffem.

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

### `footer.legal.gdpr` <!-- src/components/Footer.astro:25 -->

Údaje o ochraně osobních údajů doplníme s nasazením formulářů.

### `tooltip.aria.template` <!-- src/components/Tooltip.astro:10 -->

Vysvětlit: {label}

> Pozn.: `{label}` je proměnná — dosadí se kontext z místa, kde je tooltip použit.

---

## Stránka: Domovská · `/`  — `src/pages/index.astro`

### `home.meta.title` <!-- src/pages/index.astro:111 -->

Startovací hub

### `home.meta.description` <!-- src/pages/index.astro:112 -->

Nájemní bydlení blízko Prahy s komunitním a coworkingovým zázemím v areálu horních kasáren v Klecanech. Přijímáme nezávazné před-rezervace.

### `home.hero.kicker` <!-- src/pages/index.astro:132 -->

Areál horních kasáren · Klecany

### `home.hero.kicker.external` <!-- src/pages/index.astro:133 -->

Záměr VPD1 →

### `home.hero.h1` <!-- src/pages/index.astro:135 -->

Startovací hub.

### `home.hero.lede` <!-- src/pages/index.astro:136 -->

Nájemní bydlení blízko Prahy s komunitním a coworkingovým zázemím. Hledáme mladé kreativce, začínající podnikatele a pracující studenty.

### `home.hero.cta` <!-- src/pages/index.astro:137 -->

Rezervace →

### `home.formats.eyebrow` <!-- src/pages/index.astro:143 -->

Co Hub nabídne

### `home.formats.h2` <!-- src/pages/index.astro:144 -->

Čtyři režimy obsazení jednotky.

### `home.formats.kapsle.name` <!-- src/pages/index.astro:19 -->

Kapsle

### `home.formats.kapsle.body` <!-- src/pages/index.astro:21 -->

Nejlevnější varianta. Spací modul ve sdílené jednotce, sdílená koupelna a kuchyň. Pro krátkodobé pobyty a lidi, pro které je hlavní cena.

### `home.formats.klid.name` <!-- src/pages/index.astro:24 -->

Klidnější uzavíratelné místo

### `home.formats.klid.body` <!-- src/pages/index.astro:26 -->

Privátní mikropokoj s vlastními dveřmi a stolem. Sdílené sociální zázemí s pár sousedy. Pro lidi, kteří potřebují klid na práci nebo studium.

### `home.formats.jednoluzkovy.name` <!-- src/pages/index.astro:29 -->

Jednolůžkový pokoj

### `home.formats.jednoluzkovy.body` <!-- src/pages/index.astro:31 -->

Plnohodnotný menší pokoj s vlastním sociálním zázemím. Sdílená kuchyň s pár sousedy. Pro delší pobyty a stabilnější rezidenty.

### `home.formats.sdileny.name` <!-- src/pages/index.astro:34 -->

Sdílený pokoj

### `home.formats.sdileny.body` <!-- src/pages/index.astro:36 -->

Dvojlůžkový pokoj sdílený se spolubydlícím. Levnější varianta delšího pobytu pro studenty a lidi, kteří jsou v pohodě se sdílením.

### `home.formats.note` <!-- src/pages/index.astro:157 -->

Architektonický základ Hubu je 331 jednotek 1+kk s privátním sociálním zázemím (sprcha, umyvadlo, toaleta). Výše uvedené formáty popisují způsoby obsazení těchto jednotek, ne fyzicky odlišné typy místností.

### `home.claims.koncept.eyebrow` <!-- src/pages/index.astro:44 -->

Koncept

### `home.claims.koncept.title` <!-- src/pages/index.astro:45 -->

Sedm budov, ~331 jednotek 1+kk.

### `home.claims.koncept.body` <!-- src/pages/index.astro:46 -->

Rekonstrukce A1–A6 a budovy C v jádru areálu Horních kasáren. Privátní jednotky 1+kk se sklopnou postelí a vlastním sociálním zázemím.

### `home.claims.pro-koho.eyebrow` <!-- src/pages/index.astro:49 -->

Pro koho

### `home.claims.pro-koho.title` <!-- src/pages/index.astro:50 -->

Lidé, kteří startují.

### `home.claims.pro-koho.body` <!-- src/pages/index.astro:51 -->

Pracující studenti, OSVČ na začátku, mladí kreativci, začínající podnikatelé. Hub dává smysl tomu, kdo hledá flexibilní bydlení blízko Prahy.

### `home.claims.sdilene.eyebrow` <!-- src/pages/index.astro:54 -->

Sdílené prostory

### `home.claims.sdilene.title` <!-- src/pages/index.astro:55 -->

Privátní jednotka, sdílený zbytek.

### `home.claims.sdilene.body` <!-- src/pages/index.astro:56 -->

Coworking v budově C, sauna v objektu E, venkovní bazén před D, tržnice s minipivovarem v B, komunitní park s grilem a sportem.

### `home.claims.stipendium.eyebrow` <!-- src/pages/index.astro:59 -->

Stipendium

### `home.claims.stipendium.title` <!-- src/pages/index.astro:60 -->

Popsaný výběr, ne slevový kód.

### `home.claims.stipendium.body` <!-- src/pages/index.astro:61 -->

Pro lidi, kteří by Hubu dávali smysl, ale bez podpory by si pobyt nemohli dovolit. Vybíráme podle záměru, který v Hubu chcete rozjet.

### `home.zigzag.eyebrow` <!-- src/pages/index.astro:174 -->

Vizualizace

### `home.zigzag.h2` <!-- src/pages/index.astro:175 -->

Jak to bude vypadat.

### `home.zigzag.row1.eyebrow` <!-- src/pages/index.astro:71 -->

Místo

### `home.zigzag.row1.title` <!-- src/pages/index.astro:72 -->

Areál horních kasáren · 12 km od Prahy.

### `home.zigzag.row1.body` <!-- src/pages/index.astro:73 -->

Klecany jsou těsně za hranicí Prahy. Areál je na trase plánované tramvajové zastávky Výzkumný ústav I. (vydáno stavební povolení) a navrhované cyklostezky podél Vltavy.

### `home.zigzag.row1.alt` <!-- src/pages/index.astro:70 -->

Mladí lidé v okolí zrekonstruované budovy v duchu kasáren.

### `home.zigzag.row2.eyebrow` <!-- src/pages/index.astro:80 -->

Komunita

### `home.zigzag.row2.title` <!-- src/pages/index.astro:81 -->

Tržnice, minipivovar a food-trucky v objektu B.

### `home.zigzag.row2.body` <!-- src/pages/index.astro:82 -->

V budově B vzniká tržnice s minipivovarem, pekárnou a zázemím pro food-trucky. V přízemí budovy C bude coworkingový sál s pódiem.

### `home.zigzag.row2.alt` <!-- src/pages/index.astro:79 -->

Tržnice za soumraku v objektu B s prosvícenými okny.

### `home.zigzag.row3.eyebrow` <!-- src/pages/index.astro:88 -->

Bydlení

### `home.zigzag.row3.title` <!-- src/pages/index.astro:89 -->

~331 privátních jednotek 1+kk.

### `home.zigzag.row3.body` <!-- src/pages/index.astro:90 -->

Každá jednotka má vlastní sociální zázemí — sprchu, umyvadlo a toaletu. Sklopná postel uvolní obytný prostor přes den. Ve formátu mikrostudia 1+kk.

### `home.zigzag.row3.alt` <!-- src/pages/index.astro:87 -->

Interiér 1+kk se sklopnou postelí a balkonem.

### `home.zigzag.row4.eyebrow` <!-- src/pages/index.astro:96 -->

Areál

### `home.zigzag.row4.title` <!-- src/pages/index.astro:97 -->

Vnitřní dvůr a zázemí.

### `home.zigzag.row4.body` <!-- src/pages/index.astro:98 -->

Sedm rekonstruovaných budov (A1–A6 + C) na ~6 700 m² čistých podlahových ploch. Mezi nimi sauna v objektu E, venkovní bazén před objektem D a komunitní park s grilovacími místy.

### `home.zigzag.row4.alt` <!-- src/pages/index.astro:95 -->

Vnitřní dvůr s břízami, lavicemi a večerním osvětlením.

### `home.zigzag.row5.eyebrow` <!-- src/pages/index.astro:104 -->

Pro koho

### `home.zigzag.row5.title` <!-- src/pages/index.astro:105 -->

Pracující studenty, OSVČ a mladí kreativci.

### `home.zigzag.row5.body` <!-- src/pages/index.astro:106 -->

Hub je dimenzovaný pro lidi, kteří startují — začínající podnikatele, studenty pracující na bakalářce nebo diplomce, OSVČ na začátku kariéry. Pro někoho je to startovní bydlení; pro jiného přechodné mezikolečko.

### `home.zigzag.row5.alt` <!-- src/pages/index.astro:103 -->

Pracovní zákoutí v jednotce 1+kk s knihovnou a stolem.

### `home.lightbox.aria` <!-- src/pages/index.astro:202 -->

Vizualizace areálu

### `home.lightbox.close` <!-- src/pages/index.astro:203 -->

Zavřít

### `home.lightbox.prev` <!-- src/pages/index.astro:204 -->

Předchozí

### `home.lightbox.next` <!-- src/pages/index.astro:205 -->

Další

### `home.cta.primary.eyebrow` <!-- src/pages/index.astro:220 -->

Chci tu bydlet

### `home.cta.primary.lede` <!-- src/pages/index.astro:221 -->

Otevřeli jsme nezávazné před-rezervace. Vyplnění je krátké, nic neúčtujeme a žádný závazek nevzniká.

### `home.cta.primary.btn` <!-- src/pages/index.astro:222 -->

Vyplnit před-rezervaci →

### `home.cta.secondary.eyebrow` <!-- src/pages/index.astro:228 -->

Investice do záměru

### `home.cta.secondary.lede` <!-- src/pages/index.astro:229 -->

Nezajímá vás bydlení, ale revitalizace celého areálu? Záměr VPD1 cílí na strategické a finanční partnery.

### `home.cta.secondary.btn` <!-- src/pages/index.astro:230 -->

Záměr VPD1 →

### `home.projekty-teaser.eyebrow` <!-- src/pages/index.astro:238 -->

Provozy

### `home.projekty-teaser.h2` <!-- src/pages/index.astro:239 -->

Jak se Hub rozrůstá.

### `home.projekty-teaser.intro` <!-- src/pages/index.astro:241 -->

Hub se nerozjede naráz. Skládá se z propojených provozů, které vznikají postupně — některé v aktivní přípravě, jiné teprve dolaďujeme.

### `home.projekty-teaser.cta` <!-- src/pages/index.astro:247 -->

Detail →

### `home.projekty-teaser.more.title` <!-- src/pages/index.astro:251 -->

Další provozy

### `home.projekty-teaser.more.body` <!-- src/pages/index.astro:252 -->

Hub se rozrůstá. Podívejte se na všechny provozy a jejich postup.

### `home.projekty-teaser.more.cta` <!-- src/pages/index.astro:253 -->

Provozy →

### `home.place.eyebrow` <!-- src/pages/index.astro:262 -->

Místo

### `home.place.h2` <!-- src/pages/index.astro:263 -->

Kde to je.

### `home.place.body` <!-- src/pages/index.astro:265 -->

Klecany leží severně od Prahy, 12 km od centra. Areál je na trase plánované tramvajové zastávky Výzkumný ústav I. (na hranici Klecany / Zdiby; vydáno stavební povolení) a navrhované cyklolávky Roztoky–Klecany.

### `home.place.cta` <!-- src/pages/index.astro:266 -->

O areálu a kontextu →

### `home.place.map.alt` <!-- src/pages/index.astro:269 -->

Schéma areálu Horních kasáren — Hub jádro (A1–A6 + C) zvýrazněno.

### `home.place.map.caption` <!-- src/pages/index.astro:270 -->

Areál Horních kasáren — sedm budov etapy 1 (A1–A6 a C) v rámci celkového záměru.

### `home.map-strip.eyebrow` <!-- src/pages/index.astro:278 -->

Klecany na mapě

### `home.map-strip.h2` <!-- src/pages/index.astro:279 -->

Severní okraj Prahy, hned za Vltavou.

### `home.map-strip.address` <!-- src/pages/index.astro:283 -->

Horní kasárna Klecany

### `home.map-strip.maps-link` <!-- src/pages/index.astro:284 -->

Otevřít v Mapách →

### `home.map.aria` <!-- src/pages/index.astro:281 -->

Interaktivní mapa areálu Horní kasárna Klecany

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
> (klíče `q1`, `q5`, `q7`) — viz sekci „Obsah · FAQ".

---

## Stránka: Provozy · `/projekty/` — `src/pages/projekty/index.astro`

### `projekty.meta.title` <!-- src/pages/projekty/index.astro:22 -->

Provozy Startovacího Hubu

### `projekty.meta.description` <!-- src/pages/projekty/index.astro:23 -->

Komunitní centrum, coworking, pivovar, sauna a bazén, park, bytové družstvo. Hub se rozrůstá postupně — sdílené provozy, které dělají z areálu fungující celek.

### `projekty.hero.eyebrow` <!-- src/pages/projekty/index.astro:30 -->

Provozy

### `projekty.hero.h1` <!-- src/pages/projekty/index.astro:31 -->

Hub se rozrůstá postupně.

### `projekty.hero.lede` <!-- src/pages/projekty/index.astro:32 -->

Komunitní centrum, coworking, pivovar, sauna a bazén, park, bytové družstvo. Některé provozy už dolaďujeme, jiné teprve definujeme. Tady je aktuální mapa toho, co Hub bude obsahovat.

### `projekty.card.placeholder` <!-- src/pages/projekty/index.astro:43 -->

Vizualizace v přípravě

### `projekty.card.cta` <!-- src/pages/projekty/index.astro:50 -->

Detail →

### `projekty.foot-note` <!-- src/pages/projekty/index.astro:55 -->

Hub se rozrůstá. Další provozy a iniciativy doplníme, jakmile budou konkrétně definované. Pro dotazy nebo zapojení napište na info@startovacihub.cz.

### `projekty.building-label.komunitni-centrum` <!-- src/pages/projekty/index.astro:11 -->

Objekt B

### `projekty.building-label.coworking-centrum` <!-- src/pages/projekty/index.astro:12 -->

Přízemí budovy C

### `projekty.building-label.komunitni-pivovar` <!-- src/pages/projekty/index.astro:13 -->

Objekt B

### `projekty.building-label.bytove-druzstvo` <!-- src/pages/projekty/index.astro:14 -->

Vlastnické vehikl

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

### `projekty-slug.status.v-priprave` <!-- src/pages/projekty/[slug].astro:27 -->

V přípravě

### `projekty-slug.cta.lede` <!-- src/pages/projekty/[slug].astro:52 -->

Pokud Hub vidíte jako reálnou možnost bydlení, vyplňte před-rezervaci. Na otázky k jednotlivým provozům odpovíme e-mailem.

### `projekty-slug.cta.primary` <!-- src/pages/projekty/[slug].astro:54 -->

Vyplnit před-rezervaci →

### `projekty-slug.cta.email` <!-- src/pages/projekty/[slug].astro:55 -->

info@startovacihub.cz

---

## Obsah · provozy (MDX) — `src/content/sub_projects/*.mdx`

> Každý provoz má frontmatter (`name`, `role`) a tělo (markdown s `##` nadpisy).
> Editujte stejně jako kdekoliv jinde v tomto souboru.

### `subproject.komunitni-centrum.name` <!-- src/content/sub_projects/komunitni-centrum.mdx:2 -->

Komunitní Centrum

### `subproject.komunitni-centrum.role` <!-- src/content/sub_projects/komunitni-centrum.mdx:3 -->

Tržnice, minipivovar, pekárna a food-trucky v objektu B — komunitní jádro, které propojí Hub s Klecanami.

### `subproject.komunitni-centrum.body` <!-- src/content/sub_projects/komunitni-centrum.mdx:9 -->

## Co to bude

V budově B (původní stravovací objekt) vzniká komunitní jádro Hubu — tržnice s lokálními producenty, pekárna, restaurace, minipivovar a venkovní zázemí pro food-trucky. Doplňuje to společenský sál v přízemí budovy C, takže komunitní program má dva vzájemně propojené body.

## Pro koho

Otevřené rezidentům Hubu i obyvatelům Klecan a okolních obcí. Záměrně veřejný prostor — Hub má dovnitř přivést sousedy, ne se od nich oddělit.

## Stav

V přípravě. Konkrétní gastro provozovatel, harmonogram zprovoznění a otvírací doba budou doplněny po dokončení rekonstrukce objektu B.

### `subproject.coworking-centrum.name` <!-- src/content/sub_projects/coworking-centrum.mdx:2 -->

Coworking Centrum

### `subproject.coworking-centrum.role` <!-- src/content/sub_projects/coworking-centrum.mdx:3 -->

Sdílený pracovní prostor v přízemí budovy C — coworkingový sál s pódiem pro rezidenty Hubu a místní živnostníky.

### `subproject.coworking-centrum.body` <!-- src/content/sub_projects/coworking-centrum.mdx:9 -->

## Co to bude

Přízemí budovy C bude coworkingový sál s pódiem. Slouží jako primární pracovní prostor pro rezidenty Hubu a místní živnostníky. Pódium umožňuje malou kulturní scénu — přednášky, prezentace, autorská čtení, kapely.

## Recepce a administrativa

V přízemí původní strážnice a budovy C bude recepce, která zajišťuje přebírání pošty a vydávání souhlasů ke zřizování firemních sídel. Pro OSVČ a začínající podnikatele to znamená, že mají kde mít registrované sídlo.

## Stav

V přípravě. Otvírací doba, členské poplatky a režim sdílení s místní komunitou se ladí v rámci provozního modelu Hubu.

### `subproject.komunitni-pivovar.name` <!-- src/content/sub_projects/komunitni-pivovar.mdx:2 -->

Komunitní Pivovar

### `subproject.komunitni-pivovar.role` <!-- src/content/sub_projects/komunitni-pivovar.mdx:3 -->

Malý nezávislý pivovar v objektu B — součást tržnice, otevřený rezidentům Hubu i obyvatelům Klecan.

### `subproject.komunitni-pivovar.body` <!-- src/content/sub_projects/komunitni-pivovar.mdx:8 -->

## Co to bude

V budově B vznikne malý nezávislý pivovar jako součást tržnice. Vaří pro místní hospodu/restauraci a zároveň distribuuje do okolí. Komunitní v tom smyslu, že rezidenti Hubu mohou být zapojeni do provozu (work-trade), ne v tom smyslu, že vlastnictví je společné.

## Pro koho

Konzument: rezidenti Hubu, obyvatelé Klecan, návštěvníci tržnice. Provozovatel: konkrétní sládek nebo malá pivovarská firma — výběr proběhne během přípravy.

## Stav

V přípravě. Volba provozovatele, technologického vybavení a kapacity vařiště se ladí jako součást konceptu objektu B.

### `subproject.bytove-druzstvo.name` <!-- src/content/sub_projects/bytove-druzstvo.mdx:2 -->

Bytové Družstvo

### `subproject.bytove-druzstvo.role` <!-- src/content/sub_projects/bytove-druzstvo.mdx:3 -->

Družstevní vlastnictví jednotek pro lidi, kteří chtějí v Hubu zůstat dlouhodobě a podílet se na řízení areálu.

### `subproject.bytove-druzstvo.body` <!-- src/content/sub_projects/bytove-druzstvo.mdx:8 -->

## Co to bude

Stavebně-bytové družstvo, které drží práva k užívání jednotek 1+kk a po rekonstrukci převádí jednotky do osobního vlastnictví družstevníků. Členský vklad pokrývá náklady na rekonstrukci. Po kolaudaci jednotek může družstevník začít užívat svou jednotku, podnajímat ji nebo si nechat spravovat operátorem za poplatek.

## Pro koho

Lidé, kteří v Hubu chtějí zůstat na delší dobu nebo si jednotku pořídit jako investici k pronájmu. Družstevní cesta je alternativou k pouhému nájmu — vyžaduje kapitálový vklad, ale dává reálné vlastnictví.

## Detaily

Konkrétní výše vkladů, harmonogram splátek a smluvní rámec budou součástí později zveřejněného dokumentu. Předběžně: záloha při podpisu SoSB, první vklad při vydání stavebního povolení, druhý vklad při kolaudaci.

## Stav

V přípravě. Družstvo bude vzniknuto po dokončení úvodní studie a získání kladného stanoviska stavebního úřadu.

### `subproject.sauna-bazen.name` <!-- src/content/sub_projects/sauna-bazen.mdx:2 -->

Sauna a bazén

### `subproject.sauna-bazen.role` <!-- src/content/sub_projects/sauna-bazen.mdx:3 -->

Sdílené wellness — sauna v objektu E a venkovní bazén před objektem D pro rezidenty Hubu i veřejnost.

### `subproject.sauna-bazen.body` <!-- src/content/sub_projects/sauna-bazen.mdx:8 -->

## Sauna v objektu E

Opravená sauna a wellness zóna v objektu E. Slouží primárně rezidentům Hubu jako součást sdíleného zázemí. Klidnější protějšek k živé části areálu (tržnice, coworking).

## Bazén před objektem D

Obnovená nádrž před objektem D, která slouží jako venkovní bazén v letní sezóně a jako požární nádrž pro celý areál. V Klecanech není veřejné koupaliště — bazén je nabídka pro celé okolí, ne jen pro rezidenty.

## Stav

V přípravě. Provozní režim sauny, sezónnost bazénu, vstupné a technické zázemí se ladí v rámci celkového provozního modelu areálu.

### `subproject.sportoviste-park.name` <!-- src/content/sub_projects/sportoviste-park.mdx:2 -->

Sportoviště a park

### `subproject.sportoviste-park.role` <!-- src/content/sub_projects/sportoviste-park.mdx:3 -->

Komunitní park před objektem B — grilovací místa, ping-pong, dětské hřiště, venkovní tělocvična.

### `subproject.sportoviste-park.body` <!-- src/content/sub_projects/sportoviste-park.mdx:9 -->

## Co to bude

Před objektem B vzniká komunitní park s aktivním programem: grilovací místa, komunitní zahrádky, venkovní pingpongové stoly, dětské hřiště, venkovní tělocvična. Park propojuje budovu B (tržnice) s budovami A (rezidence) a s venkovním vstupem do areálu.

## Pro koho

Rezidenti Hubu, sousedé z Klecan, návštěvníci tržnice. Záměrně živý, aktivní prostor.

## Plánované sportoviště

Mimo park je v dlouhodobém plánu sportovní areál s krytou halou a venkovními kurty na pozemcích přiléhajících k severní straně areálu. Tato kapacita je za rámcem etapy 1 a propojí se s Hubem až v dalších fázích záměru VPD1.

## Stav

V přípravě. Vybavení parku se ladí — komunitní zahrádky budou patrně otevřené pro vyhrazené registrované zájemce z řad rezidentů a sousedů.

---

## Stránka: O areálu · `/o-arealu/` — `src/pages/o-arealu/index.astro`

### `o-arealu.meta.title` <!-- src/pages/o-arealu/index.astro:8 -->

O areálu — Startovací Hub Klecany

### `o-arealu.meta.description` <!-- src/pages/o-arealu/index.astro:9 -->

Místo, kontext a časová osa záměru. Areál horních kasáren v Klecanech, dopravní napojení na Prahu, etapová rekonstrukce sedmi budov.

### `o-arealu.hero.eyebrow` <!-- src/pages/o-arealu/index.astro:16 -->

O areálu

### `o-arealu.hero.h1` <!-- src/pages/o-arealu/index.astro:17 -->

Místo, čas a kontext.

### `o-arealu.hero.lede` <!-- src/pages/o-arealu/index.astro:18 -->

Co Hub je, kde stojí, kdy se otevírá a kdo za ním stojí. Fakta, čísla a souvislosti, které by rezident měl vidět než vyplní formulář.

### `o-arealu.kap1.label` <!-- src/pages/o-arealu/index.astro:24 -->

Kapitola 01

### `o-arealu.kap1.heading` <!-- src/pages/o-arealu/index.astro:25 -->

Klecany · 12 km od Prahy.

### `o-arealu.kap1.lede` <!-- src/pages/o-arealu/index.astro:29 -->

Areál Horních kasáren leží severně od Prahy, 12 km od centra. Je to bývalý vojenský areál o rozloze přibližně 83 000 m² (rozvojové území). Smluvně máme zajištěná práva odkupu, užívání a stavby do roku 2039. Areál je na trase plánované tramvajové zastávky Výzkumný ústav I. (na hranici Klecany / Zdiby; vydáno stavební povolení) a navrhované cyklolávky Roztoky–Klecany.

### `o-arealu.kap1.fact.lokace.dt` <!-- src/pages/o-arealu/index.astro:34 -->

Lokace

### `o-arealu.kap1.fact.lokace.dd` <!-- src/pages/o-arealu/index.astro:35 -->

Klecany, 12 km od centra Prahy, na trase plánované tramvaje Výzkumný ústav I.

### `o-arealu.kap1.fact.uzemi.dt` <!-- src/pages/o-arealu/index.astro:38 -->

Rozvojové území

### `o-arealu.kap1.fact.uzemi.dd` <!-- src/pages/o-arealu/index.astro:39 -->

~83 000 m² celkem (areál Horních kasáren)

### `o-arealu.kap1.fact.etapa1.dt` <!-- src/pages/o-arealu/index.astro:42 -->

Etapa 1 (Hub jádro)

### `o-arealu.kap1.fact.etapa1.dd` <!-- src/pages/o-arealu/index.astro:43 -->

Rekonstrukce A1–A6 a budovy C, ~6 700 m² čistých podlahových ploch (~10 000 m² hrubých)

### `o-arealu.kap1.fact.kapacita.dt` <!-- src/pages/o-arealu/index.astro:46 -->

Hub kapacita

### `o-arealu.kap1.fact.kapacita.dd` <!-- src/pages/o-arealu/index.astro:47 -->

~331 menších privátních jednotek 1+kk s vlastním sociálním zázemím

### `o-arealu.kap1.fact.doprava-dnes.dt` <!-- src/pages/o-arealu/index.astro:50 -->

Doprava dnes

### `o-arealu.kap1.fact.doprava-dnes.dd` <!-- src/pages/o-arealu/index.astro:51 -->

Příměstská linka PID, ~25 minut do stanice Kobylisy

### `o-arealu.kap1.fact.doprava-vyhled.dt` <!-- src/pages/o-arealu/index.astro:54 -->

Doprava výhled

### `o-arealu.kap1.fact.doprava-vyhled.dd` <!-- src/pages/o-arealu/index.astro:55 -->

Tramvajová zastávka Výzkumný ústav I. (vydáno stavební povolení), cyklolávka Roztoky–Klecany

### `o-arealu.kap1.fact.etapa2.dt` <!-- src/pages/o-arealu/index.astro:58 -->

Etapa 2+

### `o-arealu.kap1.fact.etapa2.dd` <!-- src/pages/o-arealu/index.astro:59 -->

Nové stavby v areálu — možné podmíněně od roku 2030 po změně územního plánu

### `o-arealu.kap1.fact.prava.dt` <!-- src/pages/o-arealu/index.astro:62 -->

Práva

### `o-arealu.kap1.fact.prava.dd` <!-- src/pages/o-arealu/index.astro:63 -->

Smluvně zajištěná do roku 2039: odkup, užívání, stavba

### `o-arealu.kap1.map.alt` <!-- src/pages/o-arealu/index.astro:68 -->

Schéma areálu Horních kasáren — Hub jádro (růžová: A1–A6 + C) a Hub zázemí (modrá: B, E, F, S, T, V, bazén) v rámci celkového rozvojového území.

### `o-arealu.kap1.map.caption` <!-- src/pages/o-arealu/index.astro:69 -->

Areál Horních kasáren — sedm budov etapy 1 (A1–A6 a C, růžová) a sdílené zázemí (modrá) v rámci celkového rozvojového území. Číselné popisky: počty jednotek 1+kk per budova.

### `o-arealu.kap1.h3.doprava` <!-- src/pages/o-arealu/index.astro:72 -->

Doprava a dostupnost

### `o-arealu.kap1.body.doprava` <!-- src/pages/o-arealu/index.astro:73 -->

Klecany jsou napojené na pražskou hromadnou dopravu příměstskou linkou PID, která jezdí v běžné špičce každých 15–20 minut do stanice Kobylisy. Cesta zabere zhruba 25 minut. Plánovaná tramvajová zastávka Výzkumný ústav I. (na hranici Klecany / Zdiby) má vydané stavební povolení; po realizaci se cesta do Prahy zkrátí. Pro cyklisty je v plánu lávka Roztoky–Klecany, která areál spojí s pravým břehem Vltavy a s pražskou cyklostezkou.

### `o-arealu.kap1.h3.okoli` <!-- src/pages/o-arealu/index.astro:75 -->

Okolí a služby

### `o-arealu.kap1.body.okoli` <!-- src/pages/o-arealu/index.astro:76 -->

V pěší dostupnosti od areálu jsou základní služby (potraviny, lékárna, pošta), škola, zdravotní středisko, dvě kavárny a hospoda. V Klecanech funguje dětské hřiště, sportoviště, knihovna a kulturní dům. Do pěti kilometrů je supermarket, koupaliště Vltava, řada hospůdek na pravém břehu a nedaleký zámek Veltrusy. Pro lidi, kteří chtějí bydlet blízko Prahy bez pražských nájmů, jde o reálný kompromis — ne odříznutí od služeb, ale zároveň ne v rušném městě.

### `o-arealu.map-banner.eyebrow` <!-- src/pages/o-arealu/index.astro:89 -->

Kde to je

### `o-arealu.map-banner.h2` <!-- src/pages/o-arealu/index.astro:90 -->

Klecany na mapě.

### `o-arealu.map-banner.body` <!-- src/pages/o-arealu/index.astro:91 -->

Severní okraj Prahy, hned za Vltavou. Pravý břeh, 12 km od centra. Areál sedí na ulici Dolní Kasárna.

### `o-arealu.map-banner.address` <!-- src/pages/o-arealu/index.astro:95 -->

Horní kasárna Klecany

### `o-arealu.map-banner.maps-link` <!-- src/pages/o-arealu/index.astro:96 -->

Otevřít v Mapách →

### `o-arealu.kap2.label` <!-- src/pages/o-arealu/index.astro:161 -->

Kapitola 02

### `o-arealu.kap2.heading` <!-- src/pages/o-arealu/index.astro:162 -->

Časová osa.

### `o-arealu.kap2.lede` <!-- src/pages/o-arealu/index.astro:165 -->

Etapa 1 — rekonstrukce sedmi budov v jádru areálu — má být obyvatelná na přelomu 2027 a 2028. Termíny se mohou posouvat, držíme je transparentně. Etapa 2 (nové stavby v areálu) je podmíněná změnou územního plánu a v současném ÚP je možná až od roku 2030.

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

### `o-arealu.kap2.timeline.zahajeni.status` <!-- src/pages/o-arealu/index.astro:186 -->

další

### `o-arealu.kap2.timeline.hruba.time` <!-- src/pages/o-arealu/index.astro:190 -->

2027

### `o-arealu.kap2.timeline.hruba.title` <!-- src/pages/o-arealu/index.astro:192 -->

Hrubá stavba a interiéry

### `o-arealu.kap2.timeline.hruba.status` <!-- src/pages/o-arealu/index.astro:193 -->

další

### `o-arealu.kap2.timeline.spusteni.time` <!-- src/pages/o-arealu/index.astro:197 -->

10/2028

### `o-arealu.kap2.timeline.spusteni.title` <!-- src/pages/o-arealu/index.astro:199 -->

Spuštění provozu Hubu (cílově)

### `o-arealu.kap2.timeline.spusteni.status` <!-- src/pages/o-arealu/index.astro:200 -->

další

### `o-arealu.kap2.timeline.etapa2.time` <!-- src/pages/o-arealu/index.astro:204 -->

2030+

### `o-arealu.kap2.timeline.etapa2.title` <!-- src/pages/o-arealu/index.astro:206 -->

Etapa 2: nové stavby v areálu (podmíněno změnou ÚP)

### `o-arealu.kap2.timeline.etapa2.status` <!-- src/pages/o-arealu/index.astro:207 -->

výhled

### `o-arealu.kap3.label` <!-- src/pages/o-arealu/index.astro:216 -->

Kapitola 03

### `o-arealu.kap3.heading` <!-- src/pages/o-arealu/index.astro:217 -->

Co stojí za Hubem.

### `o-arealu.kap3.lede` <!-- src/pages/o-arealu/index.astro:220 -->

Záměr běží pod hlavičkou VPD (Veřejně Prospěšný Developer) v rámci spolku **OSA II — Občanské sdružení Alternativa II, z.s.** Je to nezisková platforma fungující bez veřejných dotací, na členských příspěvcích a vlastní činnosti.

### `o-arealu.kap3.fact.provozovatel.dt` <!-- src/pages/o-arealu/index.astro:224 -->

Provozovatel

### `o-arealu.kap3.fact.provozovatel.dd` <!-- src/pages/o-arealu/index.astro:225 -->

Občanské sdružení Alternativa II, z.s. (OSA II) — neziskový spolek, bez veřejných dotací

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

Vychází z diplomových prací studentů ČVUT, vypracovaných na základě naformulovaného zadání

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

### `o-arealu.kap3.body.proc-ted` <!-- src/pages/o-arealu/index.astro:250 -->

Hub je první obyvatelná etapa záměru VPD1. Rekonstruují se stávající budovy, ne se staví nové — protože územní plán umisťování nových staveb v areálu povoluje až od roku 2030. Cílem je dotvořit areál bez čekání: během rekonstrukce sedmi budov vznikne živá komunita pracujících studentů, OSVČ, mladých kreativců a začínajících podnikatelů. Tato komunita pak v dalších etapách (po změně ÚP) může přecházet do trvalejších forem bydlení v rámci dorůstajícího areálu.

### `o-arealu.kap3.h3.bez-dotaci` <!-- src/pages/o-arealu/index.astro:252 -->

Bez dotací, bez spekulace

### `o-arealu.kap3.body.bez-dotaci` <!-- src/pages/o-arealu/index.astro:253 -->

OSA II nečerpá veřejné dotace. Záměr je financován kombinací vlastních zdrojů, družstevních vkladů budoucích rezidentů a strategického / finančního partnera. Žádný spekulativní mezivlastník. Detail finanční struktury je na sibling-webu VPD1; pro rezidenta je relevantní, že nájem na živnostenskou bázi je standard, ne výjimka.

### `o-arealu.kap3.foot-note` <!-- src/pages/o-arealu/index.astro:255 -->

Poslední aktualizace stránky: 2026-04-30.

### `o-arealu.cta.eyebrow` <!-- src/pages/o-arealu/index.astro:261 -->

Další krok

### `o-arealu.cta.lede` <!-- src/pages/o-arealu/index.astro:262 -->

Pokud Hub vidíte jako reálnou možnost, vyplňte před-rezervaci. Nezavazuje k ničemu, ale dá nám představu o vaší situaci.

### `o-arealu.cta.btn` <!-- src/pages/o-arealu/index.astro:263 -->

Vyplnit před-rezervaci →

---

## Stránka: Rezervace · `/rezervace/` — `src/pages/rezervace/index.astro`

### `rezervace.meta.title` <!-- src/pages/rezervace/index.astro:11 -->

Rezervace — Startovací Hub Klecany

### `rezervace.meta.description` <!-- src/pages/rezervace/index.astro:12 -->

Před-rezervujte si místo v Hubu. Vyplnění není závazné, jen nám řekne, za jakých podmínek by pro vás bydlení dávalo smysl. Ozveme se, jakmile budeme mít odpovídající nabídku.

### `rezervace.hero.eyebrow` <!-- src/pages/rezervace/index.astro:19 -->

Před-rezervace

### `rezervace.hero.h1` <!-- src/pages/rezervace/index.astro:20 -->

Před-rezervujte si místo.

### `rezervace.hero.lede` <!-- src/pages/rezervace/index.astro:21 -->

Řekněte nám, za jakých podmínek by pro vás Hub dával smysl. Nejde o smlouvu ani závazek — pomáháte nám tvarovat nabídku podle reálné poptávky.

### `rezervace.meta.bullet.platba.strong` <!-- src/pages/rezervace/index.astro:27 -->

Žádná platba.

### `rezervace.meta.bullet.platba.body` <!-- src/pages/rezervace/index.astro:27 -->

Vyplnění je zdarma a nezávazné.

### `rezervace.meta.bullet.poradnik.strong` <!-- src/pages/rezervace/index.astro:28 -->

Žádný pořadník.

### `rezervace.meta.bullet.poradnik.body` <!-- src/pages/rezervace/index.astro:28 -->

Zapisujeme zájem, ne kapacitu.

### `rezervace.meta.bullet.kratke.strong` <!-- src/pages/rezervace/index.astro:29 -->

Krátké.

### `rezervace.meta.bullet.kratke.body` <!-- src/pages/rezervace/index.astro:29 -->

Vyplnění zabere pár minut.

### `rezervace.status.eyebrow` <!-- src/pages/rezervace/index.astro:39 -->

Aktuální stav

### `rezervace.status.body` <!-- src/pages/rezervace/index.astro:40 -->

Vyplněním formuláře nám říkáte, za jakých podmínek by pro vás Hub dával smysl. Nejde o smlouvu, neúčtujeme nic. Reálný start první etapy proběhne, jakmile budou potvrzeny tři věci: kapitálová struktura, provozní připravenost areálu a právní rámec provozu.

### `rezervace.aftermath.eyebrow` <!-- src/pages/rezervace/index.astro:46 -->

Co se stane po odeslání

### `rezervace.aftermath.h2` <!-- src/pages/rezervace/index.astro:47 -->

Tři kroky, žádný papír.

### `rezervace.aftermath.step01.title` <!-- src/pages/rezervace/index.astro:52 -->

Zapíšeme váš zájem

### `rezervace.aftermath.step01.body` <!-- src/pages/rezervace/index.astro:53 -->

Vaše odpovědi jdou do okruhu, podle kterého ladíme finální nabídku jednotek a režimů.

### `rezervace.aftermath.step02.title` <!-- src/pages/rezervace/index.astro:57 -->

Ozveme se s detailem

### `rezervace.aftermath.step02.body` <!-- src/pages/rezervace/index.astro:58 -->

Až budeme mít konkrétní jednotku, cenu a termín, který odpovídá vašim preferencím, napíšeme vám e-mailem.

### `rezervace.aftermath.step03.title` <!-- src/pages/rezervace/index.astro:62 -->

Smlouvu řešíme až nakonec

### `rezervace.aftermath.step03.body` <!-- src/pages/rezervace/index.astro:63 -->

Žádný závazek nevzniká dokud spolu reálně nepodepíšeme smlouvu o budoucí smlouvě. Do té chvíle je vše nezávazné.

### `rezervace.faq.eyebrow` <!-- src/pages/rezervace/index.astro:70 -->

Časté otázky

### `rezervace.faq.h2` <!-- src/pages/rezervace/index.astro:71 -->

Co se mě jako budoucího rezidenta nejvíc týká?

### `rezervace.faq.more` <!-- src/pages/rezervace/index.astro:80 -->

Všechny otázky →

> Pozn.: Otázky níže se vykreslují z FAQ kolekce (klíče `q5`, `q7`, `q8`).

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

Vyberte cestu, která je vám dnes nejbližší. Hub je dimenzovaný pro každou z nich.

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

### `form.step04.hint` <!-- src/components/ResidentForm.astro:131 -->

Včetně základních služeb. Cenu schválně neukazujeme — ladíme ji podle reálné poptávky.

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

### `form.place.price` <!-- src/components/ResidentForm.astro:45 -->

Rozhodne cena

### `form.step06.num` <!-- src/components/ResidentForm.astro:161 -->

06

### `form.step06.heading` <!-- src/components/ResidentForm.astro:162 -->

Jak často potřebujete být v Praze?

### `form.step06.hint` <!-- src/components/ResidentForm.astro:163 -->

Pomáhá nám posoudit reálnou použitelnost lokality.

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

Jak blízko si přejete mít společný život v Hubu?

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

### `form.step10.hint` <!-- src/components/ResidentForm.astro:229 -->

Posíláme jen průběžný stav projektu a zprávu, jakmile budeme mít konkrétní nabídku.

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

### `form.success.h3` <!-- src/components/ResidentForm.astro:264 -->

Zapsali jsme váš nezávazný zájem.

### `form.success.body` <!-- src/components/ResidentForm.astro:265 -->

Není to rezervace ani pořadník. Jakmile budeme mít konkrétní nabídku odpovídající vašim preferencím, ozveme se.

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

Otázky, které dostáváme nejčastěji. Pokud něco chybí, ozvěte se na info@startovacihub.cz.

### `faq.tab.all` <!-- src/pages/faq/index.astro:32 -->

Vše

### `faq.tab.project` <!-- src/pages/faq/index.astro:8 -->

O projektu

### `faq.tab.resident` <!-- src/pages/faq/index.astro:9 -->

Pro obyvatele

---

## Obsah · FAQ — `src/content/faq/index.json`

> Každá otázka má `question` a `answer`. Vyplývající kategorie (`audience:
> project | resident`) určuje, do jakého tabu na `/faq/` patří. Pole `order`
> ovlivňuje pořadí.

### `faq.q1.question` <!-- src/content/faq/index.json:q1 -->

Co přesně je Startovací Hub a co bude dál?

### `faq.q1.answer` <!-- src/content/faq/index.json:q1 -->

Startovací Hub je první obyvatelná etapa záměru VPD1, který má z areálu horních kasáren v Klecanech postupně dotvořit obytnou a produktivní vrstvu s potenciálem 1500+ bytových jednotek. Hub je menší provozní celek, kterým chceme co nejdřív přivést areál do reálného fungování. Po Hubu pokračujeme v dalších etapách VPD1.

### `faq.q2.question` <!-- src/content/faq/index.json:q2 -->

Kdo za projektem stojí?

### `faq.q2.answer` <!-- src/content/faq/index.json:q2 -->

Záměr běží pod hlavičkou VPD (Veřejně Prospěšný Developer), což je projekt v rámci OSA — Občanské sdružení Alternativa II, z.s. OSA je nezisková platforma fungující bez veřejných dotací, na členských příspěvcích a vlastní činnosti. Detail najdete na osa2.cz.

### `faq.q3.question` <!-- src/content/faq/index.json:q3 -->

Kdy Hub otevírá?

### `faq.q3.answer` <!-- src/content/faq/index.json:q3 -->

Cílově ve čtvrtém kvartálu 2026 nebo v prvním kvartálu 2027. Reálné datum potvrdíme, jakmile budou hotové tři věci: kapitálová struktura, provozní připravenost areálu a právní rámec provozu. Aktuální stav najdete v sekci O projektu.

### `faq.q4.question` <!-- src/content/faq/index.json:q4 -->

V jaké fázi je projekt teď?

### `faq.q4.answer` <!-- src/content/faq/index.json:q4 -->

Máme dokončený investiční záměr a navrženou provozní strukturu pro Hub. Přijímáme nezávazné před-rezervace od lidí, kteří mají reálný zájem o bydlení. Paralelně dolaďujeme právní rámec a provozní přípravu.

### `faq.q5.question` <!-- src/content/faq/index.json:q5 -->

Je vyplnění před-rezervace zavazující?

### `faq.q5.answer` <!-- src/content/faq/index.json:q5 -->

Není. Před-rezervace není smlouva ani závazek. Říkáte nám orientačně, za jakých podmínek by pro vás Hub dával smysl, a my si vás zapíšeme do okruhu, se kterým komunikujeme detail nabídky. Můžete kdykoli odstoupit.

### `faq.q6.question` <!-- src/content/faq/index.json:q6 -->

Kolik bude pobyt stát?

### `faq.q6.answer` <!-- src/content/faq/index.json:q6 -->

Cenová pásma ladíme podle reálné poptávky a podle finální podoby provozu. Orientačně: kapsle nejlevněji, jednolůžkový pokoj nejdráž, sdílený pokoj a klidnější uzavíratelné místo někde mezi. Konkrétní rozsahy jsou v formuláři. Cena vždy zahrnuje základní služby.

### `faq.q7.question` <!-- src/content/faq/index.json:q7 -->

Co znamená pobytové stipendium?

### `faq.q7.answer` <!-- src/content/faq/index.json:q7 -->

Stipendium je popsaný výběr pro lidi, kteří by Hubu dávali smysl, ale bez podpory by si pobyt nemohli dovolit. Není to slevový kód, je to popsaný výběr na základě záměru či projektu, který v Hubu chcete rozjet. V před-rezervačním formuláři máte možnost o stipendium požádat.

### `faq.q8.question` <!-- src/content/faq/index.json:q8 -->

Jak je to s délkou pobytu a flexibilitou?

### `faq.q8.answer` <!-- src/content/faq/index.json:q8 -->

Hub je dimenzovaný na různě dlouhé pobyty: krátkodobé v kapslích, dlouhodobější v pokojích. Ve formuláři vybíráte orientační délku (1 měsíc / 1 rok / 5 let nebo jinou) a možnost prodloužit. Konkrétní smluvní podmínky budeme dolaďovat podle toho, co lidem nejvíc dává smysl.

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

Hledaný obsah na našem webu neexistuje. Zkuste úvod nebo nějakou ze sekcí.

### `notfound.nav.uvod` <!-- src/pages/404.astro:12 -->

Úvod

### `notfound.nav.projekty` <!-- src/pages/404.astro:14 -->

Projekty

### `notfound.nav.faq` <!-- src/pages/404.astro:16 -->

FAQ

---

## Konec souboru
