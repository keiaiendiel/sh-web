# Šablona článku pro Aktuality

Tento dokument ukazuje, jak má vypadat zdrojový Google Doc, ze kterého se
automaticky generuje článek na `osa2.cz/aktuality/`. Kopírujte strukturu
jedna k jedné, jen nahraďte obsah.

Doprovodný setup je v [APPS_SCRIPT.md](./APPS_SCRIPT.md). Tento soubor
popisuje jen formát jednoho dokumentu.

## Hotová šablona, ze které lze začít

Ve složce [templates/](./templates/) leží dva ekvivalentní soubory:

- [`sablona-clanku.docx`](./templates/sablona-clanku.docx) - klasický
  Word dokument. Stáhněte, nahrajte do sdílené složky "OSA Aktuality"
  na Drive, pravý klik na soubor, "Otevřít pomocí > Google dokumenty".
  Docs ho převede na nativní Google Doc. Hotovou šablonu duplikujte
  pro každý další článek ("Soubor > Vytvořit kopii").
- [`sablona-clanku.md`](./templates/sablona-clanku.md) - stejný obsah
  v Markdownu. Google Docs od 2024 umí Markdown importovat přímo
  ("Soubor > Otevřít" na nahraném .md souboru). Kratší cesta,
  pokud pracujete z terminálu.

Šablona je česky okomentovaná a obsahuje pět kroků (přejmenovat dokument,
vyplnit metadata, vložit fotku, napsat tělo, uložit). Od prázdného
dokumentu k rozepsanému článku za 5 minut.

## Jaký formát na Drive: .docx, .md, nebo Google Doc?

Odpověď na otázku "muzou clanky byt v docxu klasickem?": ano, ale s
podmínkou.

Sync skript čte přes Google Drive + Docs API, který pracuje s nativními
Google Docs. Soubory .docx nebo .md uložené přímo v Drive skript nečte.
Fungují tyto tři scénáře:

- **Google Doc nativně** (doporučeno): vytvoříte v Drive "Nový > Google
  dokument" a píšete v prohlížeči. Sync ho okamžitě najde.
- **.docx uploadnutý a převedený**: přetáhnete .docx do Drive složky,
  pravý klik, "Otevřít pomocí > Google dokumenty". Drive vyrobí Google
  Doc vedle originálu; originál můžete smazat. Výsledný Doc sync najde.
- **.docx ponechaný jako .docx v Drive**: sync skript ho dneska nečte.
  Pokud to budeme chtít v budoucnu, prodloužíme sync o knihovnu `mammoth`,
  ale zatím to potřeba nebylo.

Pro většinu lidí je nejpohodlnější první varianta (psaní přímo v Docs
v prohlížeči). Druhá varianta se hodí, když už máte hotový článek ve
Wordu nebo v Pages a jen ho nahrajete.

## Princip: dokument má dvě části

1. **Metadata** - jdou do "Popisu" dokumentu (File > Document details > Description).
   Klíč dvojtečka hodnota, jeden řádek na klíč. Sync skript to přečte a použije
   jako YAML frontmatter v MDX.
2. **Tělo** - píše se normálně v Docs. Sync stáhne text jako Markdown,
   normalizuje typografii, první vložený obrázek povýší na hero.

Název dokumentu = nadpis článku. Nic dalšího, žádný ASCII art, žádné
datum v názvu. Max. 120 znaků, bez tečky na konci.

## Minimální článek, který projde sync

Název dokumentu:

    PF 2026: Spolek plánuje rok obnovy Výletné

Description (Soubor > Vlastnosti dokumentu > Popis):

    lead: Novoroční pozdrav od vedení spolku. Shrnujeme, co se povedlo v roce 2025, a otevíráme plán oprav hlavní budovy pro rok 2026.
    date: 2026-01-01

Tělo dokumentu:

    (prázdný odstavec - klidně sem vložte hero fotku na první řádek)

    Rok 2025 byl pro spolek zlomový v jedné věci: poprvé se hospodaření
    dostalo do černých čísel bez grantu. Všechny tři pilíře (dary,
    barter, členské příspěvky) pracovaly souběžně a výsledek je patrný
    ve výroční zprávě.

    V Praze 6, leden 2026
    Marek Semerád, předseda

Po syncu z toho vznikne:

```markdown
---
title: "PF 2026: Spolek plánuje rok obnovy Výletné"
lead: "Novoroční pozdrav od vedení spolku. Shrnujeme, co se povedlo v roce 2025, a otevíráme plán oprav hlavní budovy pro rok 2026."
date: 2026-01-01
slug: pf-2026-spolek-planuje-rok-obnovy-vyletne
hero: /images/aktuality/pf-2026-spolek-planuje-rok-obnovy-vyletne/hero.webp
hero_alt: ""
author: "Občanské sdružení Alternativa II, z.s."
---

Rok 2025 byl pro spolek zlomový...
```

## Kompletní článek se vším

Pokud chcete použít všechny pole a vícestupňovou strukturu, šablona vypadá takto.

**Název dokumentu:**

    Výletná otevírá veřejnosti piano nobile po dvou letech restaurování

**Description:**

    lead: Hlavní salón první patra má za sebou dvouletou restaurátorskou sezónu. V sobotu 5. dubna otevíráme poprvé návštěvníkům, vstup je volný do 16:00.
    date: 2026-04-03
    author: Redakce Výletné
    tags: Výletná, restaurování, památka
    hero_alt: Piano nobile Výletné po restaurování, pohled od severního okna na lustr a bílé stěny se štukem.
    slug: vyletna-piano-nobile-duben-2026

**Tělo:**

Začněte obrázkem. Nepovinný, ale bez něj je kartička článku na gridu
smutná. Vložte obrázek menu "Vložit > Obrázek > Nahrát z počítače".
Ideálně vodorovná fotka 3:2 nebo 16:9, min. šířka 1600 px, max. 5 MB.
Sync ji automaticky zmenší a převede do WebP.

Pokračujte úvodním odstavcem (cca 3 věty), který rozvíjí perex.
Nezačínejte "Jak jsme psali minule" - každý článek stojí sám.

**Heading 2 (styl menu Docs):**

    Co se změnilo

Odstavce pod nadpisem. Klidně 2-4 odstavce mezi jednotlivými hlavami.

**Další Heading 2:**

    Harmonogram otevření

Seznam je v pořádku. Použijte odrážkový seznam z menu Docs:

    - Sobota 5. dubna, 10:00 až 16:00 - volný vstup.
    - Neděle 6. dubna, 14:00 - komentovaná prohlídka s restaurátorkou.
    - Pondělí 7. dubna - znovu zavřeno do konce dubna.

**Heading 3** (podnadpis, když potřebujete druhou úroveň pod H2):

    Co si můžete prohlédnout

Další odstavce.

**Zakončení:**

Krátce, bez mrkavého odkazu "sledujte nás na sítích". Spíš konkrétně:

    Fotodokumentaci z restaurování zveřejníme v samostatném článku
    v průběhu dubna.

    Redakce Výletné
    3. dubna 2026, Praha 7

## Co smí a nesmí v textu

Tohle není estetická preference, toto je lint, který zabrání mergnout PR.

### Smí

- Kompletní české i slovenské diakritiky (žáček, čárka, kroužek).
- Pevné mezery (Ctrl+Shift+mezera) před jednopísmennými předložkami
  a mezi číslem a jednotkou. `25 km`, `v Praze`.
- Čísla odstavců a podnadpisy H2 / H3.
- Tučný text (Ctrl+B) a kurzíva (Ctrl+I).
- Přímé uvozovky `"..."` a `'...'`. Docs je někdy automaticky zamění
  za oblé - sync je vrátí na přímé.
- Seznamy odrážkové i číslované.
- Odkaz v textu - označte text, Ctrl+K, vložte URL. Render funguje.
- Obrázky vložené jako obrázek (ne jako link z webu).

### Nesmí

- Em-dash `—` ani en-dash `–`. V Docs se občas vytvoří autokorektem,
  když píšete `slovo - slovo`. Nahraďte čárkou nebo uvozte jako `slovo,
  slovo`. Sync se pokouší je chytit, ale na 100 % se na to nespolehněte.
- Tři tečky jako jeden znak. Pokud chcete výpustku, napište tři tečky
  ručně `...`. Ale radši větu dopište, výpustky se na webu nenosí.
- Vykřičník v těle textu. V nadpisu výjimečně - proč nekřičí, je popsané
  v [CONTRIBUTING.md](../CONTRIBUTING.md).
- Marketingové superlativy: úžasný, neuvěřitelný, revoluční, světový,
  jedinečný. Nahraďte konkrétním popisem (co je na tom výjimečného,
  číselně, jmenovitě).
- Pasivum typu "je realizováno", "byl zahájen". Napište, kdo to dělá:
  "spolek dokončil", "tým zahájil".
- Legalese: `ve smyslu §`, `dle článku`, `ustanovení`. Pokud odkazujete
  na paragraf stanov, napište normálně: "podle § 4 stanov".
- Emoji. V technickém logu jsou OK, ve článku ne.
- Odkazy na hashtag (nejsou to URL) a zmínky `@user`. Web nemá feed.

### Co sync automaticky opraví

Nemusíte si s tím lámat hlavu, ale pro přehled:

- `"Oblé uvozovky"` → `"přímé uvozovky"`
- `'curly apostrof'` → `'prostý apostrof'`
- Nechtěné HTML entity z Docs exportu (`&nbsp;`, `&amp;`) → odpovídající znaky.
- `.docx` pole (komentáře, suggested edits) → odstraněno.
- Dvojité prázdné řádky → jeden prázdný řádek.
- Taby → dvě mezery.
- Heading 1 → demotovaný na Heading 2 (H1 je vyhrazený pro hlavní
  titulek článku, ten je z názvu dokumentu).
- Heading 4 a hlubší → demotované na Heading 3 (na webu 3 úrovně stačí).

### Co sync odmítne

- Články kratší než 40 znaků v leadu.
- Články bez `date:` v Description.
- Články s neplatným datem (`date: brzy`).
- Článek, kde je titulek dokumentu delší než 120 znaků.
- Slug, který není v `kebab-case` (má mezery, diakritiku, velká písmena).

Pokud sync odmítne, Action skončí chybou a PR se neotevře. V logu Action
je přesný řádek, který je špatně. Klient nemá přístup do GitHub Actions,
ale Kindl dostane mail a pošle vzkaz.

## Obrázky v textu

- **Hero** = první obrázek v dokumentu. Musí být vodorovný (3:2 nebo 16:9).
  Sync ho vezme, zmenší na 1600 px šířky, uloží jako WebP, přidá do
  `/public/images/aktuality/<slug>/hero.webp`.
- **V těle textu** lze vkládat další obrázky normálně. Sync je také
  stáhne a zoptimalizuje. Umístění v textu zůstane, jen se odkazy
  přepíšou.
- **Popisek pod fotkou** - Docs umí přidat "caption" pod obrázek.
  Sync ho převede na standardní Markdown `figcaption`. Na webu se
  zobrazí kurzívou pod obrázkem. Držte krátké (1 věta, max 140 znaků).
- **Alt text hero obrázku** = pole `hero_alt:` v Description. Vyplňte
  vždy, i když "je to očividné" - screenreader nevidí.
- **Obrázky z internetu** (copy-paste URL do Docs) sync nestahuje.
  Vložte fyzicky soubor.

## Rychlá kontrola před uložením

Než zavřete Doc, projděte:

1. Název dokumentu je finální a krátký (max 120 znaků).
2. Description obsahuje `lead:` (40 až 240 znaků) a `date:` (ISO formát
   `YYYY-MM-DD`).
3. První věc v těle je obrázek (pokud ne, článek půjde, ale bez hera).
4. Žádné em-dashe, žádné vykřičníky v textu.
5. Nadpisy používají styly Heading 2 a Heading 3 (ne ručně zvětšené
   písmo a tučnost).

Uložení - v Docs automaticky. Sync běží každých 30 minut. Pokud chcete
hned, v Apps Script pusťte `triggerSync` ručně (viz
[APPS_SCRIPT.md](./APPS_SCRIPT.md#jak-napsat-článek)).

## Reference: jak vypadá zdrojový dokument vedle výstupu

**Google Doc (zdroj):**

```
Název: Obnova hlavní budovy Výletné postoupila o další podlaží

Description:
    lead: Restaurátoři dokončili první etapu prací na druhém patře. Práce pokračují na krovech, dokončení je plánováno na září.
    date: 2026-03-21
    author: Marek Semerád
    tags: Výletná, obnova, památka

Tělo:
[obrázek: lesy na druhém patře]

Práce na obnově druhého patra Výletné postoupila podle
plánu do fáze restaurování štukových výzdob. Za poslední
čtvrtletí tým dokončil všech 11 místností salónní řady.

Co je hotové

Místnosti směřující do ulice Pplk. Sochora mají dokončené
restaurování stropů, stěnových maleb i parket.

Co pokračuje

Krovy nad jižním křídlem jsou rozebrané a podrobené
dendrochronologii. Výsledky očekáváme do konce dubna.

Harmonogram

- Duben: vyhodnocení dendrochronologie krovů
- Květen: zadání výroby tesařských náhrad
- Červen až srpen: montáž nových krovů
- Září: dokončení střechy, zavření pláště budovy

Praha 7, 21. března 2026
```

**Výstupní MDX (automaticky):**

```markdown
---
title: "Obnova hlavní budovy Výletné postoupila o další podlaží"
lead: "Restaurátoři dokončili první etapu prací na druhém patře. Práce pokračují na krovech, dokončení je plánováno na září."
date: 2026-03-21
author: "Marek Semerád"
tags: ["Výletná", "obnova", "památka"]
slug: obnova-hlavni-budovy-vyletne-postoupila-o-dalsi-podlazi
hero: /images/aktuality/obnova-hlavni-budovy-vyletne-postoupila-o-dalsi-podlazi/hero.webp
hero_alt: ""
---

![](/images/aktuality/obnova-hlavni-budovy-vyletne-postoupila-o-dalsi-podlazi/hero.webp)

Práce na obnově druhého patra Výletné postoupila podle
plánu do fáze restaurování štukových výzdob. Za poslední
čtvrtletí tým dokončil všech 11 místností salónní řady.

## Co je hotové

Místnosti směřující do ulice Pplk. Sochora mají dokončené
restaurování stropů, stěnových maleb i parket.

## Co pokračuje

Krovy nad jižním křídlem jsou rozebrané a podrobené
dendrochronologii. Výsledky očekáváme do konce dubna.

## Harmonogram

- Duben: vyhodnocení dendrochronologie krovů
- Květen: zadání výroby tesařských náhrad
- Červen až srpen: montáž nových krovů
- Září: dokončení střechy, zavření pláště budovy

Praha 7, 21. března 2026
```

## Hotová šablona Google Doc

Stáhněte [sablona-clanku.docx](./templates/sablona-clanku.docx) ze složky
[`docs/templates/`](./templates/) a nahrajte ji do sdílené složky
"OSA Aktuality" na Drive. Pravým tlačítkem, "Otevřít pomocí > Google
dokumenty", a Drive vytvoří nativní Google Doc. Ten přejmenujte na
**"00 - Šablona článku - NESMAZAT"** a duplikujte pro každý článek
("Soubor > Vytvořit kopii").

Šablona obsahuje pět kroků komentovaných přímo v dokumentu (jak
přejmenovat, kam dát metadata, kam přijde fotka, jak napsat tělo,
jak to uložit). Dummy pole a placeholder obrázek jsou připravené,
takže nic nezapomenete.
