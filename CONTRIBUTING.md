# Contributing to osa-web

Short read. Three sections: why the rules exist, how to add content, how to not break the build.

## Why the editorial rules

OSA's brand voice is **institutional, operational, plain**. It refuses marketing hype, salesy calls to action, and bureaucratic legalese alike. Most non-profit websites fail in one of two directions: either they over-sell (fake warmth, "join the revolution" energy, donation funnels) or they under-edit (statute dumps nobody reads). Our rulebook protects the narrow middle path.

The rules are machine-enforced via `pnpm lint:editorial`. If the CI build fails, you'll get a `file:line` pointer to the violation and a one-line explanation. Don't suppress the linter; edit the copy.

The rules are drawn from [the content strategy research memo](../kindl-vault/Projects/OSA_Website/OSA_Website_Research_Content.md) (in the maker's vault, not this repo) and from the brand manual (`Logomanual_OSA_V2.pdf`).

## Editorial rules (what the linter checks)

| Rule | Bad | Good |
|------|-----|------|
| No em/en dashes | `Výletná — obnova klubovny` | `Výletná - obnova klubovny` |
| No exclamation in copy | `Přidejte se!` | `Kontaktovat představenstvo` |
| Active voice | `Tento projekt je realizován spolkem.` | `Tento projekt realizuje spolek.` |
| No legalese | `ve smyslu § 233 zákona č. 89/2012 Sb.` | `zapsaný spolek` |
| No hype adjectives | `úžasný projekt`, `revoluční přístup` | use a concrete fact |
| Ellipsis `…` only in motto | `… a mnoho dalšího` | `Pomáháme tvořit…` (reserved) |
| Czech diacritics | `Citkov` | `Čičov` |

## How to add a sub-project

1. Copy an existing file from `src/content/sub_projects/` as a template.
2. Fill in all required fields: `name`, `description`, `accent`, `status`, `relationship`, `topic`. Optionally `external_url`, `year_from`, `featured`, `order`.
3. `description` must be 30-160 characters. Aim for 15-20 slov (words) that state what the project actually does, no marketing.
4. `accent` must be one of the eight brand colors: `red`, `coral`, `mustard`, `olive`, `forest`, `teal`, `blue`, `plum`. Any other value fails the build.
5. If the project has its own domain, set `external_url` and the card will exit outward. Otherwise it routes to a `/projekty/<slug>/` placeholder.
6. Run `pnpm dev` and verify the card renders on `/` (if `featured: true` or in the first 12 by `order`) and on `/projekty/`.

## Before you push

```bash
pnpm build        # must succeed
pnpm lint         # all green
```

CI runs the same checks. `lint:editorial` and `lint:weight` are hard gates. `lint:links` is informational (third-party availability is out of our control).

## Brand surfaces that are load-bearing

Don't change without discussing first:

- The monochrome parent brand (black / white / K0-K100 grays). Accent colors **only** on sub-project cards.
- The 60° diagonal motif (inline SVG pattern, `public/logo/osa-glyph.svg`).
- Motion timings: 120 ms hover fade, 200 ms button inversion. No spring physics, no parallax, no scroll hijacking.
- Zero rounded corners on parent-brand surfaces. Form controls may use `--radius-sm` (2 px) as a usability concession.
- The Hero motto `Pomáháme tvořit…` is the only place the ellipsis `…` is allowed.

## Writing code

- Prefer `.astro` components. Only reach for a client island when the UI is genuinely dynamic (the filter bar on `/projekty/` is the one exception).
- Scoped `<style>` blocks in components. Global CSS in `src/styles/*.css` only for tokens, utilities, and the motion rulebook.
- No CSS frameworks (no Tailwind, no CSS-in-JS). Tokens in `src/styles/tokens.css` cover every value you should ever need.
- No new dependencies without a good reason. The stack is deliberately small.
