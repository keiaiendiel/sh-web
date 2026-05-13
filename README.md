# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s.

**Live preview:** https://keiaiendiel.github.io/sh-web/ (GitHub Pages, auto-deployed on every push to master)
**Future canonical:** `startovacihub.cz` (after DNS cutover)

> **Status (2026-05-13):** post-restructure, 6 fází + vault sync dokončeno. 26 stránek, kompletní obsah ze Site_Copy.md, Cloudflare Worker scaffold pro form backend (deploy pending). Detail v `CLAUDE.md`. Master copy a strategy v `/Users/kindl/kindl-vault/Projects/SH_Web/`, lokální mirror v `CONTENT.md`.

## Stack

- Astro 6.1.8, static output, Czech-only.
- Atyp Special font, K0–K100 monochrome scale, **plum accent `#5A2A5F`** (1 of 8 OSA tricolor accent colors).
- Light radii (`--radius-input: 7px`) for inputs, CTA buttons, and cards; sharp `0` everywhere else.
- MDX content collections: `apartmany` (5 privátních), `coliving` (4 typy), `faq` (10), `org` (OSA II identita).
- Vanilla CSS, no client framework, no React island. Tiny inline `<script is:inline>` islands pro header drawer a 5-step wizard.
- Cloudflare Worker scaffold v `worker/` pro form backend (Turnstile + Resend + D1 EU), deploy přes Wrangler. Detail v `worker/README.md`.

## Pages (26)

**Landing + core:**
- `/` Landing — hero rotace 5 záběrů (5 s/slide, cross-fade), „Co Hub nabízí" 4 karty s horizontal scroll-snap gallery (Ubytování / Coworking / Komunita / Doprava), 8-section nav grid, masterplan, finální plum CTA. Site-wide badge „V projektové přípravě" v hlavičce per Marek 2026-05-12 (neutralizuje vábivou reklamu podle Přílohy č. 1 písm. d) ZOOS).
- `/ubytovani/` Overview s 9 kartami ve 2 skupinách: 4 co-living (kapsle 1L, jedno lůžko, kapsle 2L, dvoulůžko) + 5 privátních apartmánů (1+kk až 5+kk).

**9 detail pages s plnou cenovkou + per-osoba ekvivalentem:**
- `/ubytovani/co-living/<slug>/` × 4: `kapsle-single` (3 000 Kč), `jedno-luzko` (3 500 Kč), `kapsle-double` (4 500 Kč), `dvouluzko` (6 000 Kč). Cenovka anchor + 3-tier slevy (3+/6+/12+ měs).
- `/ubytovani/privatni/<slug>/` × 5: `1kk` (9 500 Kč), `2kk` (14 000), `3kk` (18 000), `4kk` (22 000), `5kk` (25 000).
- `/kapsle/` dedikovaný A/B test landing per Plan.md (reframing kapsle, ne hostel).

**8 obsahových sekcí (Phase 4):**
- `/coworking/` — 5 tarifů (sál 2 900 Kč/měs rezidenti zdarma, fixní stůl 4 200, kancelář pro 4 15 000, zasedačka 350/hod, ateliér 6 500, dílna 490 + 150/hod CNC).
- `/komunita/` — wellness (bazén + sauna), park (zahrádky, gril, hřiště), gastro (kantýna, restaurace, pekárna v B), klubovna v C.
- `/okoli/` — 9 podsekcí Klecan (vzdělávání, zdravotnictví, obchody, doprava, sport, brigády, kavárny+kultura, co tu není).
- `/doprava/` — Hub-shuttle 5 jízd v ceně, bus 374 PID, Hub-taxi 1 jízda v ceně, auto+parkování, kolo+pěšky, plánovaná tramvaj 2029-2030 + cyklolávka 2027-2028.
- `/stipendia/` — 4 role: rezident-tvůrce, work-trade správce, stavitel-rezident, rezident-programátor. Pilot podzim 2026.
- `/galerie/` — 4 foto-skupiny (z výstavby, areál v ročních obdobích, tváře komunity, akce 2026+). Fotky se postupně doplňují.
- `/novinky/` — blog model, šablona prvního článku, rytmus dalších.
- `/kontakty/` — OSA II identita (IČO 270 26 345) + 4 osoby (Marek, rezervační, stipendijní, tisk) + adresa + GDPR.

**Service + legal:**
- `/rezervace/` — 5-step wizard (koncept → konfigurace → termín → kontakt → GDPR) s živým sidebar (cena podle vybraného formátu + délky, „vše v ceně" checklist). URL pre-fill `?typ=<slug>`. Backend `worker/` (scaffold).
- `/faq/` — 10 nejčastějších otázek (A.1-A.10 z Site_Copy.md).
- `/metodika-srovnani/` — povinná metodika cenového srovnání per § 2980 OZ.
- `/gdpr/` — zásady zpracování osobních údajů.
- `/druzstvo/` (skrytá, `noindex`) — manuální nasměrování pro vlastnické bydlení.
- `/404`.

Sub-page hero pattern: eyebrow + H1 + lede na dark image bg s `filter: brightness(0.65-0.7)` a bottom-heavy black scrim.

## Audience

The site funnels **residents** — pracující studenti, OSVČ, mladí kreativci, začínající podnikatelé. Voice = „komunita + kreativa + pragmatic value": Klecany s pražským dosahem, méně než centrum, vlastní kapsle nebo privátní 1+kk. Investors get a footer pointer to the investor microsite [keiaiendiel.github.io/vpd-web/vpd1/](https://keiaiendiel.github.io/vpd-web/vpd1/) — no homepage real estate.

## Pricing (draft, orientační)

| Typ | Max lůžek v ceně | Anchor cena | Sleva 3+ / 6+ / 12+ měs |
|---|---|---|---|
| Kapsle (jednolůžková, sdílený pokoj) | 1 | od 4 500 Kč/měs | −5 / −15 / −25 % |
| Dvoulůžková kapsle (sdílený pokoj) | 2 | od 6 500 Kč/měs | −5 / −15 / −25 % |
| Privátní 1+kk · 2 lůžka (21 m²) | 2 | od 9 500 Kč/měs | −5 / −10 / −20 % |
| Privátní 1+kk · 3 lůžka (21 m²) | 3 | od 11 500 Kč/měs | −5 / −10 / −20 % |
| Privátní 2+kk · 4 lůžka (42 m²) | 4 | od 16 000 Kč/měs | −5 / −10 / −20 % |
| Privátní 3+kk · 6 lůžek (63 m²) | 6 | od 21 000 Kč/měs | −5 / −10 / −20 % |

Pricing zdroj: Compass deep-research z 5/2026 (50+ pražských referenčních zdrojů — UK/ČVUT/ČZU/VŠCHT/VŠE koleje, FIZZ Holešovice, Youston, Sharedd, Coliving Prague, klasické nájmy P4/P8/P9, Klecany, Roztoky, Zdiby). Klient finalizuje před public launchem.

## Reservation form

3-section flow na `/rezervace/`:

1. **Typ ubytování + termín + délka** — radio cards 6 typů + „Ještě nevím, poraďte mi"; month picker; select 1–3 / 3–6 / 6–12 / 12+ měs.
2. **Kontakt** — jméno, e-mail, telefon (všechno povinné, rezervační oddělení volá), volitelná poznámka, volitelný stipendium checkbox.
3. **Souhlas** — GDPR checkbox.

URL pre-fill `?typ=<slug>` z RoomCard tlačítek „Rezervovat termín". Submit `console.log`s payload + zobrazí success state „Zavoláme do 24 hodin". Backend wiring deferred.

## Local development

After cloning the repo:

```bash
pnpm install         # install dependencies (once)
pnpm dev             # start the dev server on http://localhost:4321
```

The repo carries `.claude/launch.json` so the Claude Code agent can spin up the same dev server via the `mcp__Claude_Preview__preview_start` tool with `name: "sh-web"` (binds to port 4322 by default).

### Other scripts

| | |
|---|---|
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve `dist/` (post-build verification) |
| `pnpm migrate:images` | One-shot image migration from `../../12 Startovaci Hub/image/` |
| `pnpm optimize:images` | Idempotent re-encode of `aerial/ exterior/ interior/ hero/` files > 600 KB to JPEG q=80 mozjpeg, max edge 1600 px (auto-renames `.png` → `.jpg`). |
| `pnpm lint` | Run editorial + links lints |
| `pnpm lint:editorial` | Voice/style lint over `src/content/**/*.mdx` and page bodies |
| `pnpm lint:links` | HEAD-check external URLs |
| `pnpm lint:weight` | Per-page eager-weight budget against `dist/` |

All three lints run on every CI push to master. They must pass; the deploy-pages workflow also blocks on them.

## Pushing to GitHub

The `master` branch is the deploy branch — every push triggers `.github/workflows/deploy-pages.yml` which lints, builds, and deploys to GitHub Pages at `keiaiendiel.github.io/sh-web/`.

```bash
# 1. Verify locally
pnpm build && pnpm lint:editorial && pnpm lint:weight

# 2. Stage specific files (avoid `git add -A`)
git status
git add src/pages/index.astro src/components/Header.astro    # …or whichever files changed

# 3. Commit with a conventional-commit prefix
git commit -m "feat(hub): describe what changed and why"

# 4. Push — CI runs and deploys in ~2 minutes
git push origin master
```

Watch the action at [github.com/keiaiendiel/sh-web/actions](https://github.com/keiaiendiel/sh-web/actions). Recent commits use the prefixes `feat(hub):`, `docs(hub):`, `fix(hub):`, `refactor(hub):`, `content(hub):`, `style(hub):`, `ci(hub):` — match these for consistency.

## Deferred to a programmer

- **Form submission backend** — validation, anti-spam (e.g. honeypot or hCaptcha), autoresponse, storage. The reservation payload shape is documented in [src/components/ResidentForm.astro](src/components/ResidentForm.astro).
- **Analytics + cookie consent** — Plausible or GoatCounter. Out of scope for v1.
- **DNS cutover to `startovacihub.cz`** — flip `site` in `astro.config.mjs`, drop the `base` line, find/replace `/sh-web/fonts/` → `/fonts/` in `tokens.css`. CI auto-deploys.

## Operator credit

Marek Semerád, předseda OSA II, z.s. — `vpd@osa2.cz`.
Parent organisation: [alternativa2.info](https://www.alternativa2.info/).

For deep operational context (decisions, gotchas, layout details, polish history) see [CLAUDE.md](CLAUDE.md).
