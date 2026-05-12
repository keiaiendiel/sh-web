# sh-web — Startovací Hub Klecany

Static site for **Startovací Hub Klecany**, the first phase of the VPD1 záměr by VPD under OSA II, z.s.

**Live preview:** https://keiaiendiel.github.io/sh-web/ (GitHub Pages, auto-deployed on every push to master)
**Future canonical:** `startovacihub.cz` (after DNS cutover)

> **Status (2026-05):** repo je v pre-restructure cleanup stavu. Aktuální stránky níže odpovídají předchozí verzi; klient připravuje obsah pro novou strukturu v `CONTENT.md` v rootu. Operační kontext + průběh restructure: `CLAUDE.md`.

## Stack

- Astro 6.1.8, static output, Czech-only.
- Atyp Special font, K0–K100 monochrome scale, **plum accent `#5A2A5F`** (1 of 8 OSA tricolor accent colors).
- Light radii (`--radius-input: 7px`) for inputs, CTA buttons, and cards; sharp `0` everywhere else.
- MDX content collections (`subProjects`, `rooms`, `faq`, `org`).
- Vanilla CSS, no client framework, no React island. Tiny inline `<script is:inline>` islands for header drawer, form, lightbox, and Leaflet map.
- `sharp` for image migration only; Leaflet 1.9.4 from CDN (unpkg) used only on `/o-arealu/` for the map banner.

## Pages (20)

- `/` Landing — 4-image full-bleed hero slide carousel (with −15 % brightness scrim); 6 room-type cards with anchor pricing + per-osoba ekvivalent + dual CTA (Detail / Rezervovat); „Co Hub nabízí" amenity grid (cowork, bazén, sauna, recepce, kyvadla); „Můžeš si přikoupit" extras (stravování, e-vozidla, sklady); zigzag (Místo + Komunita); final plum CTA panel; place + masterplan; interactive Leaflet map; mini-FAQ.
- `/pokoje/` — overview of all 6 room types with the same anchor + per-osoba pricing pattern as the homepage cards.
- `/pokoje/<slug>/` × 6 — detail pages for: `capsule` (jednolůžková), `capsule-double`, `1kk-2l`, `1kk-3l`, `2kk`, `3kk`. Each: hero image with size/kapacita/cena meta, ideal-for panel, MDX body, 4-tier pricing table (1–2 měs / 3+ / 6+ / 12+ months), reserve CTA with URL pre-fill (`/rezervace/?typ=...`).
- `/sluzby/` — paid extras: stravování, půjčovna e-vozidel, kontejnerové sklady (sauna is **in-rent**, not here). Pitch + price table per service.
- `/areal/` — 5 sub-project provozů (Komunitní centrum, Coworking, Pivovar, Sauna+bazén, Sportoviště+park) + masterplan. Renamed from `/projekty/`.
- `/areal/<slug>/` × 5 — per-objekt detail.
- `/o-arealu/` — data-first chapter layout (Klecany 12 km, kyvadla, plánovaná tramvaj + cyklolávka — both in přípravě), interactive Leaflet map of the area pinned at the Horní kasárny coordinates.
- `/rezervace/` — 3-section booking flow (typ + termín + délka → kontakt → souhlas with optional stipendium checkbox). URL pre-fill `?typ=<slug>`. Telefon povinný (rezervační oddělení volá).
- `/druzstvo/` (skrytá, `noindex`) — pro lidi nasměrované manuálně z rezervace, kteří mají zájem o vlastnické bydlení v rámci VPD1.
- `/faq/` — audience-tabbed FAQ (Vše / O projektu / Pro obyvatele).
- `/404`.

All non-landing pages share the same dark image hero pattern (eyebrow + H1 + lede on a hero photo with `filter: brightness(0.85)` and a bottom-heavy black scrim).

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
