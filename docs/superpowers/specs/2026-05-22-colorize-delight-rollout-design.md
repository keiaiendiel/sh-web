# Colorize + Delight rollout — design spec

**Datum:** 2026-05-22
**Stav:** Schváleno klientem, ready k implementaci.
**Reference:** /cenik/ (commit `568f420 feat(hub): ceník přestavba`).

## Cíl

Rozšířit `/colorize` + `/delight` design language z Ceníku na 5 content podstránek. Klient ocenil ikonky, jemné barvičky a gradienty na Ceníku — cílem je podobně oživit zbývající podstránky **bez** kopírování Ceník mini-card grid pattern. Stávající `sec-feature`/`sec-block` struktury zůstávají, jen dostávají hue-driven treatments.

## Scope

5 stránek:

| Stránka         | Sekce                                                              |
|-----------------|--------------------------------------------------------------------|
| `/komunita/`    | Wellness, Park, Gastro, Klubovna                                   |
| `/coworking/`   | Sál, Fixní stůl, Kancelář pro 4, Zasedačka, Ateliér                |
| `/doprava/`     | Hub-shuttle, Autobus, Auto, Kolo                                   |
| `/stipendia/`   | Pobytové, Projektové, Akademické                                   |
| `/okoli/`       | Vltava, Příroda/Kola, MHD, Sport                                   |

Out of scope: `/ubytovani/` overview, detail templates `[slug].astro`, `/kontakty/`, `/faq/`, `/rezervace/`, `/kapsle/`, `/druzstvo/`, GDPR/legal.

## Strategie

**Per-section hue** (rozšíření Ceník miscGroups pattern). Každá sekce dostane CSS var `--section-hue` v rozsahu 25 / 50 / 130 / 200 / 240. Žádné per-page anchor hue, žádné monochromatické plum-only varianty.

**Hue palette (locked):**

| Hue | Název            | Sémantika                                  |
|-----|------------------|--------------------------------------------|
| 25  | Orange           | energie, gastro, auto, sport, ateliér      |
| 50  | Yellow           | MHD, gold, projektové, fixní stůl          |
| 130 | Green            | park, příroda, kolo, pobyt, kancelář-tým   |
| 200 | Water blue       | bazén, vltava, sál, focus, akademie        |
| 240 | Brand indigo     | Hub-only/brand signal, klubovna, zasedačka |

Brand `--accent` v `tokens.css` je `hsl(240 39% 27%)` — hue 240 koresponduje s aktuálním brand indigo. 200 (water) je 40° apart, čistá separace.

**Mapping per sekci:**

```
Komunita    Wellness=200  Park=130     Gastro=25     Klubovna=240
Coworking   Sál=200       Fixní=50     Kancelář=130  Zasedačka=240  Ateliér=25
Stipendia   Pobytové=130  Projekt=50   Akademie=200
Okolí       Vltava=200    Příroda=130  MHD=50        Sport=25
Doprava     Shuttle=240   Autobus=50   Auto=25       Kolo=130
```

Distribuce: 200×4, 130×5, 50×4, 25×4, 240×2. Repetice je záměrná — vytváří „rodinný" feel napříč stránkami.

## Receptura (per sekce, řízeno `--section-hue`)

7 treatments aplikovaných na sekce s class `.sec-hued`:

1. **Eyebrow text v hue** — `color: hsl(var(--h) 50% 30%)`. Žádný leading dash. Nahrazuje stávající `var(--accent)`.
2. **Subsection icon prefix** — 28×28 icon-pill před h3 každé subsekce. `background: hsl(var(--h) 55% 55% / 0.16)`, `color: hsl(var(--h) 50% 28%)`. Lucide ikona uvnitř.
3. **Section background wash** — `linear-gradient(180deg, hsl(var(--h) 45% 98%) 0%, var(--bg) 50%)`. Velmi jemný tint nahoře, fade do bílé.
4. **Decorative blob top-right** — 240px radial gradient, `opacity: 0.18`. Daří sekci „dýchat".
5. **Dl polish** — `dt` v hue, separator čára v hue (místo neutrálního gray).
6. **Photo shadow + diagonal overlay** — Gallery dostane `box-shadow: 0 4px 16px hsl(var(--h) 50% 40% / 0.18)` a 12% diagonal gradient overlay.
7. **Section bottom accent rule** — 2px gradient čára na spodu sekce, fading do stran. Místo plné border-bottom.

**Explicitně vynechané** (z brainstorm):
- Eyebrow leading dash (klient odmítl)
- Highlighter underlay pod `<em>` accent slovem (klient odmítl)

## Architektura

**1 shared partial:** `src/styles/section-hue.css`

- Globální import v `src/layouts/Base.astro` (jako sourozenec `tokens.css`, `kit.css`).
- Definuje class `.sec-hued` + utility classes pro icon-pill (`.sec-hued__sub`, `.sec-hued__sub-icon`).
- Funguje skrz `--section-hue` CSS var na element `.sec-hued`.
- Žádné per-page CSS duplikace.

**Per page:** Astro stránka:
- Aplikuje class `.sec-hued` na `<section class="sec-feature">` (přidává se, ne nahrazuje).
- Nastaví inline style `style="--section-hue: 200"`.
- Pro každý subsection h3 zabalí text do `<span class="sec-hued__sub-icon"><Icon name=".." /></span>` + ponechá text.
- Žádná restrukturalizace, žádné mini-card gridy.

**Ikony per subsekce** (lucide-static names):

| Sekce / Subsekce      | Ikona            |
|-----------------------|------------------|
| Komunita.Bazén        | waves            |
| Komunita.Sauna        | flame            |
| Komunita.Zahrádky     | sprout           |
| Komunita.Gril         | flame            |
| Komunita.Hřiště       | trees            |
| Komunita.Kantýna      | utensils         |
| Komunita.Pekárna      | cookie           |
| Komunita.Klubovna     | users            |
| Coworking.Sál         | laptop           |
| Coworking.Fixní stůl  | monitor          |
| Coworking.Kancelář    | users            |
| Coworking.Zasedačka   | presentation     |
| Coworking.Ateliér     | palette          |
| Coworking.Dílna       | hammer           |
| Doprava.Hub-shuttle   | van              |
| Doprava.Autobus       | bus              |
| Doprava.Auto          | car-front        |
| Doprava.Kolo          | bike             |
| Stipendia.Pobytové    | home             |
| Stipendia.Projektové  | sparkles         |
| Stipendia.Akademické  | graduation-cap   |
| Okolí.Vltava          | waves            |
| Okolí.Příroda/Kola    | trees            |
| Okolí.MHD             | bus              |
| Okolí.Sport           | medal            |

Pokud lucide-static nemá konkrétní jméno, fallback na nejbližší match (build erroruje pokud chybí).

## Implementační plán

**Pořadí commitů (per-page commits, partial first):**

1. `feat(hub): extract section-hue.css partial pro colorize+delight rollout` — commit utility.
2. `style(hub): colorize+delight pass na /komunita/` — apply.
3. `style(hub): colorize+delight pass na /coworking/`.
4. `style(hub): colorize+delight pass na /doprava/`.
5. `style(hub): colorize+delight pass na /stipendia/`.
6. `style(hub): colorize+delight pass na /okoli/`.

Klient explicitně schválil autonomní průchod — žádné per-page checkpointy, self-verify v dev preview po každé stránce.

## Verifikace per page

1. Spuštěn dev preview (port 4323).
2. Hard reload stránky.
3. `preview_console_logs level=error` — žádné errors.
4. `preview_eval` čte computed style `.sec-hued`, ověřuje `--section-hue` set na očekávanou hodnotu.
5. `preview_screenshot` — vizuální kontrola.
6. Commit + push na master pouze pokud nic z výše neselže.

Po každé stránce: `pnpm lint:editorial` na případné textové změny (alt texty subsekce ikon přidávám aria-hidden, ne alt). Build se nespouští per page (CI to udělá při push).

## Risks

- **Build error pokud lucide ikona neexistuje** — Icon component erroruje při missing. Mitigace: kontrola seznamu ikon proti `node_modules/lucide-static/icons/` před commitem.
- **Hue 240 vs 200 splývá u accessibility (color blindness)** — oba modré. Mitigace: subsection ikony jsou ne-decorativní (sémantika), nositelé info; barva je secondary signal.
- **Gallery box-shadow může kolidovat s `--gallery-radius`** — Gallery má `overflow: hidden`, shadow je outside; aplikuje se na wrapper, ne na obrázek samotný.
- **Inline `style="--section-hue: NNN"` na 5 stránkách × 3–5 sekcí = ~20 inline styles** — akceptováno; alternativa (per-section class hue-200) by vyžadovala 5 utility classes, víc verbose.

## Acceptance kritéria

- [ ] 5 stránek vidí hue treatments per sekce.
- [ ] Žádné console errors.
- [ ] Build zelený (`pnpm build`).
- [ ] Editorial lint zelený (`pnpm lint:editorial`).
- [ ] Per-section hue se používá důsledně dle mapping tabulky.
- [ ] Ceník vizuálně stále konzistentní s ostatními (jeho mini-card pattern beze změny).
- [ ] Dark Mode / `prefers-reduced-motion` — žádný break (recipe nepoužívá motion, jen statické gradienty).
