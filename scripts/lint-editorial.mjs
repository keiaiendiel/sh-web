#!/usr/bin/env node
/*
 * lint-editorial.mjs
 *
 * Editorial rulebook pro Hub voice. Grep banned characters a phrases
 * v markdown, mdx, .astro sources. Exit 1 s file:line reportem on any
 * violation.
 *
 * Pravidla pocházejí z `Projects/SH_Web/Research/SH_Web_Research_CopyVoice.md`
 * § 1-6 (uzamčeno 2026-05-12). Sentinel test pro borderline cases:
 * „Napsal bys tu větu Marek do e-mailu jednomu konkrétnímu rezidentovi?"
 *
 * Exceptions:
 *   - `…` jen v motto „Pomáháme tvořit…" a v site-wide badge „V projektové přípravě".
 *   - `!` v HTML atributech (alt="…", aria-label="…"), v <script>/<style>, MDX frontmatter.
 *   - Em-dash a en-dash nepoužívat vůbec (Cherryleaf 2026-02-13 AI-tell, public
 *     association strong enough that em-dash flags as AI generated). Místo
 *     em/en-dash použij čárku nebo středník.
 */
import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative, join } from 'node:path';

const ROOT = resolve(process.cwd());
const SCAN = [
  'src/pages',
  'src/components',
  'src/layouts',
  'src/content',
];

const rules = [
  /* Typographic — hard bans podle CopyVoice § 6 a Cherryleaf 2026-02-13.
     Em-dash a en-dash nesmí nikde, ellipsis jen ve dvou allowlisted místech. */
  {
    id: 'em-dash',
    pattern: /—/g,
    msg: 'Em-dash (—) je AI-tell. Použij čárku nebo středník.',
  },
  {
    id: 'en-dash',
    pattern: /–/g,
    msg: 'En-dash (–) je AI-tell. Použij čárku nebo středník.',
    // Allow legit number ranges "200–300", "9:00–17:00" since en-dash is
    // typographically correct there per Czech typographic rules. But the
    // brief bans it outright; if needed for ranges, use hyphen "200-300"
    // or " až " ("200 až 300"). No exemption.
  },
  {
    id: 'ellipsis-outside-motto',
    pattern: /…/g,
    msg: 'Ellipsis (…) je vyhrazený pro motto „Pomáháme tvořit…" a status badge.',
    lineExempt: (line) =>
      /Pomáháme tvořit/.test(line) ||
      /přípravě/.test(line),
  },

  /* Voice — calques z angličtiny ban podle CopyVoice § 3. */
  {
    id: 'v-srdci',
    pattern: /\bv srdci\b/gi,
    msg: '„v srdci" je kalk „in the heart of". Napiš konkrétní adresu nebo dopravní uzel.',
  },
  {
    id: 'discover-objevte',
    pattern: /\b(objevte|ponořte se|prozkoumejte)\b/gi,
    msg: '„Objevte/ponořte se/prozkoumejte" jsou kalky „discover/dive into/explore". Operátor řekne „podívejte se", „přijďte", „zkuste", nebo nic.',
  },
  {
    id: 'more-than-just',
    pattern: /\bvíce než jen\b/gi,
    msg: '„více než jen X" je nejčastější česká copy klišé (Šimeček 2023). Napiš fakticky.',
  },
  {
    id: 'vibrant-pulzujici',
    pattern: /\b(pulzující|vibrant)\b/gi,
    msg: '„Pulzující" je AI-tell pro „vibrant". Klecany nejsou pulzující; popiš co tam reálně je.',
  },
  {
    id: 'home-away-from-home',
    pattern: /\b(domov daleko od domova|home away from home)\b/gi,
    msg: '„Domov daleko od domova" je nejautomatizovanější fráze v category. Vypusť.',
  },
  {
    id: 'seamless',
    pattern: /\b(seamless|hladce propojuj|bezproblémově)/gi,
    msg: '„Seamless/hladce propojuje/bezproblémově" jsou na top AI-tell listu (Cherryleaf 2026). Vypusť.',
  },
  {
    id: 'thoughtfully-designed',
    pattern: /\b(thoughtfully designed|pečlivě navržen[áéý]|peclive navrz)/gi,
    msg: '„Pečlivě navržené" je univerzální AI-tell. Místo toho popiš, co tam je.',
  },
  {
    id: 'fast-paced-world',
    pattern: /\b(v dnešní uspěchané době|v dnešním zrychleném světě|in today.s fast.paced)/gi,
    msg: '„V dnešní uspěchané době" je kalk „in today\'s fast-paced world". Cut without replacement.',
  },
  {
    id: 'elevate-unlock',
    pattern: /\b(pozvedněte|elevate your|unlock the potential|odemkněte potenciál)\b/gi,
    msg: 'Tech-corporate fráze co přešla do living-space copy. Operator voice je faktický.',
  },
  {
    id: 'delve-leverage',
    pattern: /\b(delve|leverage|harness|tapestry|robust|intricate)\b/gi,
    msg: 'Anglická tech/marketing slovní zásoba. Najdi český fakt.',
  },

  /* Hollow gerundium v -ící podle § 4.1 — English participle calques.
     Konkrétní vysokofrekvenční offenders. */
  {
    id: 'hollow-gerund',
    pattern: /\b(nabízej[íi]c[íi]|zajišťuj[íi]c[íi]|garantuj[íi]c[íi]|propojuj[íi]c[íi]|umožňuj[íi]c[íi]|poskytuj[íi]c[íi]|vytvářej[íi]c[íi])\b/gi,
    msg: 'Hollow gerundium v -ící. Přepiš konjugovaným slovesem („ateliér je vybavený", ne „ateliér nabízející").',
  },

  /* Existing passive-voice a legalistic patterns. */
  {
    id: 'passive-voice',
    pattern: /\b(?:je realizováno|je zajišťováno|je prováděno|snaha o)\b/gi,
    msg: 'Passive voice. Prefer aktivní sloveso.',
  },
  {
    id: 'legalistic-ve-smyslu',
    pattern: /\bve smyslu §/gi,
    msg: 'Legalistic „ve smyslu §". Vypusť, jen řekni fakt.',
  },

  /* Marketing hype — superlatives banned. „revoluční" už zde, přidávám
     zbytek z CopyVoice § 4.9 a section 2 anti-patterns. */
  {
    id: 'marketing-hype',
    pattern: /\b(úžasný|úžasná|úžasné|neuvěřitelný|neuvěřitelná|zásadní význam|revoluční|klíčový moment|nejlepší|špičkový|jedinečný|výjimečný|exkluzivní|award.winning)\b/gi,
    msg: 'Marketing hype adjektivum. Nahraď konkrétním faktem (jméno, číslo, datum).',
  },

  /* Auto-translation tells z § 4.9. */
  {
    id: 'translation-tells',
    pattern: /\b(ucelený|ladný|plynulý)\b/gi,
    msg: 'AI-translation tell. Operator voice je drsnější, faktický.',
  },

  /* Source citations v body textu — banned per brief. Sources stay in
     internal `Research_Pricing_Comparison.md`, výjimka jen pro
     /metodika-srovnani/ kde je celá pointa stránky zveřejnit metodiku. */
  {
    id: 'price-source-citation',
    pattern: /\b(Otiwilium|Bezrealitky|Qara|Sreality|Compass)\b/g,
    msg: 'Citace zdroje cenového srovnání patří jen na /metodika-srovnani/, ne do body textu.',
    fileExempt: (path) => /metodika-srovnani/.test(path),
  },
];

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(astro|md|mdx|ts|tsx|js|mjs|json)$/.test(e.name)) yield p;
  }
}

let violations = 0;
const allowExtRule = (path) =>
  // skip the rulebook itself, it contains its own forbidden patterns as examples
  /scripts\/lint-editorial\.mjs$/.test(path);

for (const root of SCAN) {
  const full = resolve(ROOT, root);
  try {
    for await (const file of walk(full)) {
      if (allowExtRule(file)) continue;
      const content = await readFile(file, 'utf8');
      const lines = content.split('\n');
      for (const rule of rules) {
        // file-level exempt (např. /metodika-srovnani/ pro price-source-citation)
        if (rule.fileExempt && rule.fileExempt(file)) continue;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // skip lines matching global exempt regex
          if (rule.exempt && rule.exempt.test(line)) continue;
          // skip lines matching per-line function exempt
          if (rule.lineExempt && rule.lineExempt(line)) continue;
          const matches = [...line.matchAll(rule.pattern)];
          if (matches.length === 0) continue;
          const snippet = line.trim().slice(0, 120);
          const rel = relative(ROOT, file);
          console.log(`\u001b[31m✗\u001b[0m ${rel}:${i + 1}  [${rule.id}]`);
          console.log(`    ${snippet}`);
          console.log(`    ${rule.msg}`);
          violations += matches.length;
        }
      }
    }
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
}

if (violations === 0) {
  console.log('\u001b[32m✓\u001b[0m editorial: no violations');
  process.exit(0);
} else {
  console.log(`\nEditorial lint failed with ${violations} violation(s).`);
  process.exit(1);
}
