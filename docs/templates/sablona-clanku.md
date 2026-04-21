---
title: "NAHRAĎTE: Titulek článku (také přepište název dokumentu)"
subject: "OSA Aktuality - šablona článku"
---

# Tak se to dělá: šablona pro článek do OSA Aktualit

**Než začnete psát**: přepište tuto stránku na svůj článek. Postupujte podle
pěti kroků níže. Tato úvodní sekce slouží jen jako návod - smažte ji, až
bude článek hotový.

## KROK 1 - Přejmenujte dokument

Nahoře v Docs stojí název dokumentu. Přepište ho na skutečný titulek
článku. Maximálně 120 znaků, bez tečky na konci, bez data v názvu.

Přiklad: *Výletná otevírá piano nobile po dvouletém restaurování*

## KROK 2 - Zkopírujte metadata do popisu dokumentu

Menu **Soubor → Vlastnosti dokumentu → záložka Popis**. Vložte tam toto,
nahraďte hodnoty za svými:

```
lead: Perex článku. 40 až 240 znaků. Shrne článek v jedné větě, bez dramatiky.
date: 2026-04-21
author: Marek Semerád
tags: Výletná, Praha 7, restaurování
hero_alt: Popis hlavní fotografie pro screen-readery. Vyplňte vždy.
slug: kratky-kebab-slug-url
```

Povinné jsou jen `lead` a `date`. Zbytek je volitelný, ale doporučený.
Další vysvětlení v `docs/TEMPLATE_ARTICLE.md` v gitu.

## KROK 3 - Vložte hlavní fotku

Smažte placeholder níže a na jeho místo vložte skutečnou fotku: menu
**Vložit → Obrázek → Nahrát z počítače**. Minimální šířka 1600 px,
ideálně vodorovná (3:2 nebo 16:9), maximálně 5 MB.

![NAHRAĎTE: Hlavní fotografie článku](placeholder-hero.jpg)

## KROK 4 - Napište tělo článku

Smažte tuto úvodní sekci (KROK 1 až KROK 5) a napište článek. Struktura
je níže jako hotová šablona, stačí nahradit NAHRAĎTE označené pasáže.

## KROK 5 - Uložte a počkejte

Docs ukládá automaticky. Během 30 minut se na GitHubu objeví Pull Request
s vaším článkem. Kindl nebo Marek ho mergne a do 2 minut je článek online
na `osa2.cz/aktuality/`.

Pokud chcete publikovat dřív, v menu **Rozšíření → Apps Script → Run → triggerSync**
spustíte synchronizaci ručně.

---

# NAHRAĎTE: Titulek článku

NAHRAĎTE: Úvodní odstavec, který rozvádí perex na 2 až 4 věty.
Nezačínejte "Jak jsme psali minule" - každý článek stojí sám.
Řekněte, co se stalo, kdo to udělal a proč to má význam.

## NAHRAĎTE: První podnadpis

NAHRAĎTE: Odstavec nebo dva pod nadpisem druhé úrovně. Klidně rozvíjejte
myšlenku do podrobností, vysvětlete kontext, doložte konkrétními daty
a čísly. Odstavec má optimálně 3 až 5 vět.

NAHRAĎTE: Pokud máte druhý odstavec ve stejné sekci, oddělte ho prázdným
řádkem. Nepřidávejte dvě mezery ani zvláštní zarážky, Google Docs si to
zformátuje správně samo.

## NAHRAĎTE: Druhý podnadpis

NAHRAĎTE: Odstavec pod druhým nadpisem. Sem patří rozšíření tématu,
související událost, nebo jiný úhel pohledu.

### NAHRAĎTE: Podnadpis třetí úrovně (volitelný)

NAHRAĎTE: Třetí úroveň používejte střídmě, jen když skutečně potřebujete
další členění pod H2. Většinu článků zvládnete jen s H2.

## NAHRAĎTE: Seznam, pokud ho potřebujete

NAHRAĎTE: Odrážkový seznam:

- NAHRAĎTE: první bod seznamu
- NAHRAĎTE: druhý bod seznamu
- NAHRAĎTE: třetí bod seznamu

NAHRAĎTE: Nebo číslovaný seznam:

1. NAHRAĎTE: první krok
2. NAHRAĎTE: druhý krok
3. NAHRAĎTE: třetí krok

## NAHRAĎTE: Závěrečný odstavec

NAHRAĎTE: Stručně uzavřete článek. Pokud chystáte pokračování, řekněte
kdy. Pokud máte odkaz ven (transparentní účet, smlouva, partner), vložte
ho v textu - v Docs označte slovo, Ctrl+K, vložte URL.

NAHRAĎTE: Podpis, kdo a odkud.
NAHRAĎTE: Praha 7, NAHRAĎTE datum
