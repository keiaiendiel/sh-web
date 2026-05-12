Sem dropuj obrázky před zařazením do webu.

Postup:
1. Přetáhni libovolný počet fotek (jpg / png / heic / cokoli).
2. V CONTENT.md napiš pod relevantní položku popisek + (volitelně) link na soubor:
     - foto: _incoming/IMG_4521.jpg — bazén z dronu, večerní osvětlení
   nebo prostě:
     - ▢ bazén z dronu, večerní osvětlení
3. Když dám pokyn „zpracuj poslední dávku", Claude:
   - matchne fotky s popisky,
   - optimalizuje (sharp, q=80, max edge 1600 px),
   - přesune do public/images/hub/<sekce>/,
   - vyplní cesty + alt texty v generovaných MDX souborech.

Tato složka je v .gitignore — nic z ní se necommitne, slouží jen jako workspace.
