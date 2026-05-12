# Startovací Hub — content brief

Jediný zdroj pravdy pro **veškerý text a obrázky nového webu**. Já (Claude) z tohohle dokumentu generuju Astro stránky, content collections, navigaci, fotky kopíruju a zmenším, alt texty si beru z popisků obrázků.

> **Stav:** kostra. Strom odpovídá navigaci, kterou jsi navrhnul. Sekce vyplňuj v libovolném pořadí, není třeba odshora dolů. Co nevyplníš, nepublikuje se (nebo se použije placeholder s viditelnou poznámkou v UI).

---

## Jak tenhle soubor vyplňovat

### Textová pole

Vyplňuj **pod každý nadpis** v sekci. Pole jsou označená inline tučně:

```
**Krátký popis (1–2 věty pro kartu):** Tady napíšu krátký popis.
**Hlavní text:**
Tady napíšu delší text. Klidně víc odstavců.
Druhý odstavec.
```

**Co napsat / nenapsat:**
- Píšu jak člověk, ne jako marketing. Editorial lint odmítá pasivum a marketingovou hypu, takže nedávej tam „revoluční", „špičkový", „unikátní".
- Em pomlčka `—` a vykřičník `!` jsou OK.
- Trojtečky `…` ne (povolené jen v locked motto).

### Obrázky

Tři způsoby, ber který je pohodlnější:

**(1) Inline drop:** přetáhni obrázek do chatu, dej mu popisek a já si ho uložím + přepíšu cestu v MD:
```
**Obrázky:**
- ![bazén z dronu, večerní osvětlení](_incoming/bazen-dron-vecer.jpg)
```

**(2) Cesta do tvé systémové složky** (jako v `pnpm migrate:images`):
```
**Obrázky:**
- foto: `../../12 Startovaci Hub/foto-bazen/IMG_4521.jpg` — bazén z dronu, večerní osvětlení
```

**(3) Jen popisek + drop do `_incoming/`** (vytvořím tu složku, ty tam házíš s libovolnými jmény, já matchuju):
```
**Obrázky:**
- ▢ bazén z dronu, večerní osvětlení
- ▢ bazén z úrovně vody, denní světlo
```

Po každé dávce udělám: optimalizace (sharp, max edge 1600 px, q=80), přesun do `public/images/hub/<sekce>/`, vyplnění alt textu z popisku.

### Cena / čísla

Když máš anchor cenu, slevy, kapacity — piš jako tabulku nebo bullety:

```
**Cena:**
- Anchor: 9 500 Kč/měs (za celou jednotku, plná obsazenost)
- Sleva 3+ měsíců: −5 %
- Sleva 6+: −10 %
- Sleva 12+: −20 %
```

Pokud cena ještě není finální, napiš `TBD` — uvidím a vynechám na webu cenovku, ne nic nevymyslím.

### Statusy a placeholdery

- `TBD` — ještě dořešíme (já v UI vynechám)
- `▢` — placeholder na obrázek
- `???` — nevím, prosím poraď / vyjasni

---

## 0. Globální (hlavička, patička, brand)

### 0.1 Brand sdělení (hero na landing, OG meta, social share)

**Hlavní claim (H1 na `/`):**

**Krátký lede pod nadpisem (60–120 znaků):**

**Primární CTA (tlačítko v hero):**

**Sekundární CTA (link/exit):**

**Hero obrázky** (cyklus 4 fotek, 5 s na frame):
- ▢
- ▢
- ▢
- ▢

### 0.2 Hlavní menu (header)

> Sem dej finální názvy položek menu — můžou se lišit od slugů.

- ▢ Ubytování
- ▢ Coworkingové zázemí
- ▢ Komunitní zázemí
- ▢ Občanská vybavenost
- ▢ Dopravní dostupnost
- ▢ Pobytová stipendia
- ▢ Galerie
- ▢ Novinky
- ▢ Rezervace
- ▢ Kontakty

### 0.3 Patička (footer)

**Kontakt (e-mail, telefon, adresa):**

**Sociální sítě (URL, pokud existují):**

**Právní řádek (provozovatel, IČO):**

**Vnější linky (VPD1 / investorská microsite atd.):**

---

## 1. Ubytování

**Lead-in pro celou sekci (1 odstavec, sells the why):**

**Hero obrázek sekce (volitelně):**
- ▢

### 1.1 Privátní apartmány

**Lead-in pro skupinu privátních apartmánů (co je odlišuje od co-livingu, pro koho):**

#### 1.1.1 Privátní apartmán 1+kk

**Krátký popis (do karty na overview, max 25 slov):**

**Hlavní text (detail page, 1–3 odstavce):**

**Klíčové vlastnosti (5–7 bullets):**
- 
- 
- 

**Specifikace:**
- Plocha (m²):
- Kapacita (lůžek):
- Konfigurace lůžek (např. „1× dvojlůžko 200×190" nebo „2× single 200×80"):
- Vlastní koupelna: ano / ne
- Kuchyňský kout: ano / ne

**Cena:**

**Obrázky:**
- ▢

#### 1.1.2 Privátní apartmán 2+kk

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Specifikace:**
- Plocha:
- Kapacita:
- Konfigurace lůžek:
- Vlastní koupelna:
- Kuchyňský kout:

**Cena:**

**Obrázky:**
- ▢

#### 1.1.3 Privátní apartmán 3+kk

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Specifikace:**
- Plocha:
- Kapacita:
- Konfigurace lůžek:
- Vlastní koupelna:
- Kuchyňský kout:

**Cena:**

**Obrázky:**
- ▢

#### 1.1.4 Privátní apartmán 4+kk

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Specifikace:**
- Plocha:
- Kapacita:
- Konfigurace lůžek:
- Vlastní koupelna:
- Kuchyňský kout:

**Cena:**

**Obrázky:**
- ▢

#### 1.1.5 Privátní apartmán 5+kk

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Specifikace:**
- Plocha:
- Kapacita:
- Konfigurace lůžek:
- Vlastní koupelna:
- Kuchyňský kout:

**Cena:**

**Obrázky:**
- ▢

### 1.2 Co-living

**Lead-in pro skupinu co-living (sdílené pokoje, kapsle — pro koho, jak to funguje, GDPR, gender options):**

#### 1.2.1 Jedno lůžko ve sdíleném pokoji

> Dvě varianty matrace — vyplň společný popis + per-rozměr specifikaci.

**Krátký popis (společný):**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Varianta A — matrace 200 × 80:**
- Cena:
- Pro koho doporučená:
- Obrázek: ▢

**Varianta B — matrace 230 × 90:**
- Cena:
- Pro koho doporučená:
- Obrázek: ▢

#### 1.2.2 Dvoulůžko ve sdíleném pokoji

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Varianta A — matrace 200 × 190:**
- Cena:
- Obrázek: ▢

**Varianta B — matrace 230 × 200:**
- Cena:
- Obrázek: ▢

#### 1.2.3 Privátní 1-lůžková kapsle

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Varianta A — matrace 210 × 150:**
- Cena:
- Obrázek: ▢

**Varianta B — matrace 230 × 160:**
- Cena:
- Obrázek: ▢

#### 1.2.4 Privátní 2-lůžková kapsle

**Krátký popis:**

**Hlavní text:**

**Klíčové vlastnosti:**
- 

**Varianta A — matrace 210 × 230:**
- Cena:
- Obrázek: ▢

**Varianta B — matrace 230 × 240:**
- Cena:
- Obrázek: ▢

---

## 2. Coworkingové zázemí

**Lead-in pro sekci (komu to slouží, co je v ceně bydlení, co se platí navíc):**

**Hero obrázek (volitelně):**
- ▢

### 2.1 Coworkingový sál

**Krátký popis:**
**Hlavní text:**
**Klíčové vlastnosti:**
- 
**Provozní info (otevírací doba, kapacita, cena/rezervace):**
**Obrázky:**
- ▢

### 2.2 Zasedací místnosti

**Krátký popis:**
**Hlavní text:**
**Klíčové vlastnosti:**
- 
**Provozní info:**
**Obrázky:**
- ▢

### 2.3 Sdílené kanceláře

**Krátký popis:**
**Hlavní text:**
**Klíčové vlastnosti:**
- 
**Provozní info:**
**Obrázky:**
- ▢

### 2.4 Ateliéry

**Krátký popis:**
**Hlavní text:**
**Klíčové vlastnosti:**
- 
**Provozní info:**
**Obrázky:**
- ▢

### 2.5 Dílny

**Krátký popis:**
**Hlavní text:**
**Klíčové vlastnosti:**
- 
**Provozní info:**
**Obrázky:**
- ▢

---

## 3. Komunitní & networkingové zázemí

**Lead-in pro sekci (co Hub nabízí mimo bydlení a práci — sociální/zážitkový rozměr):**

**Hero obrázek (volitelně):**
- ▢

> Tahle sekce má hodně položek. Navrhuji je v UI **seskupit do 4–5 témat** (wellness · venkovní sport · gastro · kultura · komunita) přes anchor scroll, ne 25 detail pages. Potvrď, nebo navrhni jiné seskupení.

### 3.1 Wellness — bazén & sauna

#### 3.1.1 Bazén & sun-bar

**Krátký popis:**
**Hlavní text:**
**Provozní info (otevírací doba, vstupné, kapacita):**
**Obrázky:**
- ▢

#### 3.1.2 Veřejná sauna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.1.3 Privátní sauna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.1.4 Ochlazovací bazénky

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.1.5 Vířivky

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

### 3.2 Venkovní sport a aktivity

#### 3.2.1 Tělocvična na vzduchu

> Pokud jsi myslel „tělocvičnu" a „na vzduchu" jako dvě různé položky, řekni — rozdělím.

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.2.2 U-rampa

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.2.3 Pump-rampa

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.2.4 Skate-park

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.2.5 Grilovací místa

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

#### 3.2.6 Komunitní zahrádky

**Krátký popis:**
**Hlavní text:**
**Obrázky:**
- ▢

### 3.3 Gastro

#### 3.3.1 Kantýna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.2 Restaurace

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.3 Kavárna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.4 Vinárna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.5 Bufet

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.6 Obchod

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.7 Food truck zone

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.3.8 Kuchyně pro přátele

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

### 3.4 Kultura

#### 3.4.1 Společenský sál

**Krátký popis:**
**Hlavní text:**
**Provozní info (kapacita, využití, rezervace):**
**Obrázky:**
- ▢

#### 3.4.2 Hudební zkušebna

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.4.3 Koncertní místnost

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.4.4 Divadelní sál

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

#### 3.4.5 Kino sál

**Krátký popis:**
**Hlavní text:**
**Provozní info:**
**Obrázky:**
- ▢

---

## 4. Občanská vybavenost

> Co v sekci je? Lékař, lékárna, pošta, banka, MŠ, ZŠ, obchody, MHD body? Doplň seznam položek + popis.

**Lead-in pro sekci:**

**Položky občanské vybavenosti (přidej kolik chceš):**

#### 4.1 

**Krátký popis:**
**Hlavní text:**
**Vzdálenost / docházka:**
**Obrázek (volitelně):**
- ▢

---

## 5. Dopravní dostupnost

**Lead-in:**

**Hero obrázek / mapa:**
- ▢

### 5.1 Veřejná doprava

**Hlavní text (zastávky, linky, časy do Prahy, Kobylis):**

**Konkrétní spoje (tabulka — Z → Kam, doba, linka, frekvence):**
- 
- 

### 5.2 Auto

**Hlavní text (vjezd, parkování, počet stání, ceny):**

### 5.3 Kolo / pěšky

**Hlavní text (cyklolávka, cyklostezky, docházka):**

### 5.4 Kyvadla / Hub-shuttle

**Hlavní text (jestli Hub provozuje vlastní kyvadlo do Prahy, frekvence, kdo a kdy):**

### 5.5 Plánovaná tramvaj

**Hlavní text (stav stavebního povolení, předpoklad termínu):**

### 5.6 Mapa areálu

**Mapa s pin-pointy zastávek a interních cest:**
- ▢ (Leaflet už používáme, můžu nakreslit, jen zaměřit a popisky)

---

## 6. Pobytová stipendia

**Lead-in (co stipendium je, pro koho, jak funguje):**

**Hero obrázek:**
- ▢

### 6.1 Pro koho stipendium je

**Hlavní text + cílové skupiny (bullets):**
- 

### 6.2 Co stipendium pokrývá

**Hlavní text:**

**Konkrétní benefit (sleva na nájmu / měsíční stipendium / pokrytí zázemí):**

### 6.3 Jak požádat

**Hlavní text (proces, deadline, koho oslovit):**

**CTA / link na žádost:**

---

## 7. Galerie

> Galerie bude pravděpodobně auto-generovaná z fotek ostatních sekcí + dedikovaná „behind the scenes" foto-skupina. Sem dej, co chceš mít v dedikovaných galeriích navíc.

**Lead-in:**

### 7.1 Foto-skupiny

> Příklad: „Z výstavby", „Tváře komunity", „Akce 2026", „Areál v ročních obdobích" — definuj, jaké skupiny chceš.

#### 7.1.1 [název skupiny]

**Krátký popis:**
**Fotky:**
- ▢
- ▢

---

## 8. Novinky

> Buď to je blog (jednotlivé články s datem), nebo časová osa (změny v projektu). Vyber a definuj.

**Lead-in / co tu bude:**

**Model článku:**
- Titulek
- Datum
- Krátký lede
- Hlavní text
- Hero obrázek
- Tagy (kategorie)

**První článek (placeholder):**

#### 8.1 [titulek prvního článku]

**Datum:**
**Lede:**
**Hlavní text:**
**Hero:**
- ▢

---

## 9. Rezervace

> Tato sekce řídí formulář. Backend ještě není napojený (`console.log` + success state).

### 9.1 Vstupní text pod headerem

**Lead-in (proč si rezervovat, jak rychle reagujeme):**

### 9.2 Pole formuláře

> Aktuálně: typ ubytování, termín, délka, jméno, e-mail, telefon (povinný), poznámka, stipendium checkbox, GDPR. Chceš změnit? Přidat / ubrat pole?

**Změny:**
- 

### 9.3 Po odeslání — success copy

**Hlavní hláška:**
**Co bude následovat (kdo, kdy, jak volá):**

### 9.4 Mini-FAQ pod formulářem

> 3 otázky které lidi nejvíc trápí. Doplň otázku + odpověď.

#### 9.4.1 

**Otázka:**
**Odpověď:**

---

## 10. Kontakty

**Lead-in:**

### 10.1 Provozovatel

**Název organizace:**
**IČO / právní info:**
**Adresa:**
**E-mail:**
**Telefon:**
**Datová schránka:**

### 10.2 Osoby

> Kdo s kým jedná o čem. Přidej kontakt-osobu na rezervace, technický kontakt, médiový kontakt atd.

#### 10.2.1 Předseda / hlavní kontakt

**Jméno:**
**Funkce:**
**E-mail:**
**Telefon:**
**Foto (volitelně):**
- ▢

#### 10.2.2 Rezervační oddělení

**Jméno:**
**E-mail:**
**Telefon:**

### 10.3 Kde nás najdeš (adresa + mapa)

**Adresa:**
**GPS:**
**Otevírací doba kanceláře:**
**Mapa:** (Leaflet už používáme)

---

## A) FAQ — všeobecné

> Nezávisle na sekcích — věci, které se ptají všichni. Vyplníme dohromady.

**Otázky (přidej kolik chceš):**

#### A.1 

**Otázka:**
**Odpověď:**

---

## B) Co nemám vyplněné / co potřebuju doplnit od tebe

> Tady já (Claude) budu průběžně udržovat seznam neznámých. Ty se k tomu vracíš a doplňuješ. Já tu udržuju aktuální TODO.

- [ ] (zatím nic — vyplníme po první dávce)
