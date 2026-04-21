# Aktuality přes Google Drive: setup pro klienta

Tento dokument popisuje, jak OSA II publikuje aktuality na web bez toho, aby
někdo sahal do gitu. Jednou nastavit, pak stačí psát Google dokumenty.

## Cílový flow

```
Klient napíše nový Google Doc ve sdílené složce "OSA Aktuality".
        ↓ (čas jednou za 30 minut, nebo po stisku "Publikovat")
Apps Script pošle signál do GitHubu.
        ↓
GitHub Action stáhne Doc, převede na MDX, stáhne první obrázek.
        ↓
GitHub otevře Pull Request. Kindl nebo Marek merguje.
        ↓
Cloudflare Pages přestaví web. Článek je online.
```

Klient nepotřebuje git, nepotřebuje CMS login. Stačí Google účet, do kterého
je sdílená složka připojena.

## Jednorázový setup (~30 minut)

Potřebujete tři věci:

1. Sdílenou Drive složku "OSA Aktuality" (v Google Workspace ideálně Shared Drive).
2. Service account s právem číst tuto složku (technický Google účet pro Action).
3. GitHub Personal Access Token (pro Apps Script, aby mohl trigger poslat).

### 1. Sdílená Drive složka

- V Google Drive vytvořte složku "OSA Aktuality".
- Otevřete ji v prohlížeči, z URL si opište ID složky (řetězec za `/folders/`).
- Přidejte jako editora e-mail service accountu (viz krok 2, bude tvaru
  `osa-aktuality@<project>.iam.gserviceaccount.com`).

### 2. Service account

Technický účet, pod kterým GitHub Action čte Drive. Dělá to Kindl, klient
ho jen dostane hotový:

1. V Google Cloud Console vytvořte projekt `osa-aktuality-sync`.
2. Povolte Drive API a Docs API.
3. Vytvořte service account `osa-aktuality`, stáhněte JSON klíč.
4. V repo na GitHubu v Settings → Secrets přidejte:
   - `GOOGLE_SERVICE_ACCOUNT` - obsah toho JSON klíče, celý vložit.
   - `DRIVE_FOLDER_ID` - ID sdílené složky z kroku 1.

### 3. Apps Script (běží v klientově Google účtu)

1. Ve sdílené složce otevřete menu "Nový > Další > Google Apps Script".
2. Do editoru vložte tento kód (jediný soubor `Code.gs`):

    ```javascript
    function triggerSync() {
      const props = PropertiesService.getScriptProperties();
      const token = props.getProperty('GITHUB_PAT');
      const repo = props.getProperty('REPO') || 'OSA-cz/osa-web';
      if (!token) {
        throw new Error('Missing GITHUB_PAT in Script Properties.');
      }
      const url = 'https://api.github.com/repos/' + repo + '/dispatches';
      const res = UrlFetchApp.fetch(url, {
        method: 'post',
        contentType: 'application/json',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/vnd.github+json',
        },
        payload: JSON.stringify({
          event_type: 'sync-aktuality',
          client_payload: { reason: 'apps-script-trigger', when: new Date().toISOString() },
        }),
        muteHttpExceptions: true,
      });
      const code = res.getResponseCode();
      if (code >= 300) {
        throw new Error('GitHub dispatch failed: HTTP ' + code + ' ' + res.getContentText());
      }
      Logger.log('Dispatch OK.');
    }
    ```

3. Vlevo v editoru Apps Script klikněte na "Project Settings" (ikona ozubeného kola)
   a v sekci "Script Properties" přidejte:
   - `GITHUB_PAT` - Personal Access Token s právem `repo` z klientova GitHub účtu
     (nebo z OSA organization accountu). Token získáte na
     `https://github.com/settings/tokens?type=beta`, scope = "Contents: Read/Write"
     pro repo `OSA-cz/osa-web`.
   - `REPO` - volitelně, pokud repo není `OSA-cz/osa-web`. Jinak vynechte.

4. V editoru zpět v `Code.gs` klikněte "Run > triggerSync" a potvrďte oprávnění.
   Pokud vyjede "Dispatch OK" v logu, máte hotovo.

5. Nastavte automatický trigger (menu "Triggers" - hodiny vlevo):
   - Funkce: `triggerSync`
   - Deployment: Head
   - Event source: Time-driven
   - Type: Minutes timer
   - Every 30 minutes

    (Pokud chcete publikovat rychleji, nastavte 5 minut. GitHub neprotestuje.)

## Jak napsat článek

> Pokud chcete jen začít psát: stáhněte [sablona-clanku.docx](./templates/sablona-clanku.docx),
> nahrajte do sdílené složky "OSA Aktuality" a pravým kliknutím ji
> otevřete v Google dokumentech. Soubor obsahuje pět komentovaných
> kroků přímo v dokumentu. Duplikujte ho pro každý další článek
> ("Soubor > Vytvořit kopii"). Kompletní vysvětlení polí a editoriální
> pravidla jsou v [TEMPLATE_ARTICLE.md](./TEMPLATE_ARTICLE.md).

1. V Drive složce "OSA Aktuality" dejte "Nový > Dokument".
2. Název dokumentu = nadpis článku. Krátce, bez kliček. Max. 120 znaků.
3. Menu "Soubor > Vlastnosti dokumentu" > záložka "Popis" - sem napište
   klíče oddělené dvojtečkou, jeden na řádek:

    ```
    lead: Stručná perex. 40 až 240 znaků. Shrne článek v jedné větě, bez dramatiky.
    date: 2026-04-21
    author: Marek Semerád
    tags: Výletná, Praha 7
    hero_alt: Popis první fotografie, aby šla vidět i pro slepou návštěvnici.
    slug: kratky-url-tvar
    draft: false
    ```

    Povinné klíče: `lead`, `date`. Ostatní jsou volitelné.

    - `slug` je URL adresa článku. Pokud nezadáte, vygeneruje se z názvu.
    - `draft: true` = článek se syncne, ale na webu není vidět. Vhodné
      na rozepsané věci.
    - `hero_alt` = popis hlavní fotky pro screen-readery. Pokud nezadáte,
      obrázek bude ve stránce, ale bez popisu (zhorší to SEO).

4. Pod vlastnostmi napište článek běžně v Docs. Používejte nadpisy úrovně
   "Heading 2" a "Heading 3". Fotku vložte jako obrázek (menu "Vložit >
   Obrázek"). První obrázek v dokumentu se stane hero fotkou článku.

5. Editoriální pravidla (web je nebere jako výzdobu, má lintera, který
   neposlouchá):

    - Žádná "-" jako pomlčka. Použijte " - " (čárka-mezera) nebo čárku.
    - Žádné vykřičníky v textu. V nadpisu výjimečně, v textu ne.
    - Žádné anglické uvozovky. Apps Script je automaticky zkonvertuje
      na rovné, ale ověřte.
    - Žádné marketingové superlativy (úžasný, neuvěřitelný). Pokud se
      tam dostanou, lint se naštve a PR nepůjde mergnout.

6. Uložte dokument (Docs ukládá automaticky). Během 30 minut se na GitHubu
   objeví Pull Request s vaším článkem.

7. Pokud nechcete čekat, v menu editoru Apps Script ("Extensions >
   Apps Script > Run > triggerSync") spustíte sync ručně.

## Jak článek zveřejnit

- Každý sync otevře PR, ne přímý commit do mainu.
- V prvních 3 měsících PR reviewuje Kindl, pak Marek.
- Merge PR = cca 1-2 minuty a článek je online.
- Pokud chcete něco opravit, upravte Google Doc a počkejte na další sync.
  Sync je idempotentní: pokud se obsah nezměnil, PR se nepošle.

## Problémy

### "Action selhal s chybou editorial lint"

V Docs jste něco napsali, co lint nepovoluje (em-dash, vykřičník v textu,
marketingový termín). V PR je v logu konkrétní řádek. Buď dokument opravte
a počkejte na další sync, nebo v popisu dokumentu přidejte `draft: true`
dokud problém nenajdete.

### "PR přišel, ale obrázek chybí"

Pravděpodobně jste obrázek vložili jako odkaz, ne přímo do dokumentu.
Stáhněte ho na plochu, v Docs dejte "Vložit > Obrázek > Nahrát z počítače"
a uložte.

### "Nikdy nepřišel žádný PR"

1. Zkontrolujte, že trigger Apps Scriptu běží - v editoru Apps Script menu
   "Triggers", sloupec "Last run" ukazuje čas.
2. Zkontrolujte logy Apps Scriptu - "Executions". Pokud tam je chyba,
   pravděpodobně `GITHUB_PAT` expiroval. Vygenerujte nový a přepište
   Script Property.
3. Zkontrolujte GitHub Actions tab - jestli tam běží scheduled sync.
   Pokud neběží, je problém na GitHub straně (asi limit Actions).

## Jak to celé vypnout

Klient:
- Menu "Triggers" v Apps Script > smazat trigger.

Kindl:
- V repo Settings > Actions > workflow `sync-aktuality.yml` > Disable.

Nic se neztratí. MDX soubory v repu zůstanou.
