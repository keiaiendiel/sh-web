/*
 * Astro 6 Content Collections pro Startovací Hub Klecany.
 *
 * Phase 3 (2026-05-13): schémata pro 11 typů ubytování per Site_Copy.md
 * § 1.1 (privátní apartmány 1+kk až 5+kk) a § 1.2 (co-living: pokoj-basic,
 * pokoj-privacy, kapsle single, kapsle double, jedno lůžko, dvoulůžko).
 *
 * Phase 5 (2026-05-25): rozšíření coliving enum o pokoj-basic a pokoj-privacy
 * + přidán gallery field do obou kolekcí pro multi-image slideshow na detail
 * stránkách (předtím gallery hardcoded v [slug].astro template).
 *
 * Collections:
 *   - apartmany → src/content/apartmany/*.mdx (5 typů privátních)
 *   - coliving  → src/content/coliving/*.mdx (6 typů co-living)
 *   - faq       → src/content/faq/index.json (10 FAQ otázek, Phase 4)
 *   - org       → src/content/org/identity.json (OSA II identita, JSON-LD)
 */
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/* === Gallery field (sdílený pro apartmány i coliving) === */
const galleryItem = z.object({
  src: z.string().startsWith('/').optional(),
  placeholder: z.string().optional(),
  alt: z.string(),
});

/* === APARTMÁNY (privátní 1+kk až 5+kk) === */
const apartmanySlug = z.enum(['1kk', '2kk', '3kk', '4kk', '5kk']);

const apartmany = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/apartmany' }),
  schema: z.object({
    slug: apartmanySlug,
    name: z.string().min(3).max(80),
    shortName: z.string().min(2).max(40),
    order: z.number().int(),
    popis: z.string().min(20).max(300),
    plocha: z.string(),
    kapacita: z.number().int(),
    konfigurace: z.string(),
    koupelna: z.string(),
    wc: z.string().optional(),
    kuchyn: z.string(),
    klicove: z.array(z.string()),
    cena: z.object({
      anchor: z.number().int(),
      m3: z.number().int(),
      m6: z.number().int(),
      m12: z.number().int(),
      perOsoba: z.string().optional(),
      perOsoba12: z.string().optional(),
    }),
    thumbnail: z.string().startsWith('/').optional(),
    hero: z.string().startsWith('/').optional(),
    heroAlt: z.string().optional(),
    gallery: z.array(galleryItem).optional(),
    hidden: z.boolean().optional(),
  }),
});

/* === SDÍLENÉ POKOJE (6 variant) ===
 * Bývalá kolekce `coliving`. Pojem co-living z produktové vrstvy zmizel
 * (celý kampus je co-living), kategorie se jmenuje Sdílené pokoje. Slugy
 * souborů zůstaly kvůli stabilitě URL + rezervačního prefillu; mění se jen
 * `name`/`shortName`/`order`. Šest viditelných variant: lůžko/dvojlůžko ve
 * dvou stupních soukromí + kapslové lůžko/dvojlůžko. */
const sdilenePokojeSlug = z.enum([
  'pokoj-basic',     // Lůžko ve sdíleném pokoji
  'dvojluzko-basic', // Dvojlůžko ve sdíleném pokoji (NOVÝ, cena orientační)
  'pokoj-privacy',   // Lůžko se zvýšeným soukromím
  'dvouluzko',       // Dvojlůžko se zvýšeným soukromím
  'kapsle-single',   // Kapslové lůžko
  'kapsle-double',   // Kapslové dvojlůžko
]);

const sdilenePokoje = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/sdilene-pokoje' }),
  schema: z.object({
    slug: sdilenePokojeSlug,
    name: z.string().min(3).max(80),
    shortName: z.string().min(2).max(40),
    order: z.number().int(),
    popis: z.string().min(20).max(300),
    matrace: z.array(z.string()),
    klicove: z.array(z.string()),
    spec: z.object({
      plochaKapsle: z.string().optional(),
      plochaPokoj: z.string(),
      koupelna: z.string(),
      kuchyn: z.string(),
      sklon: z.string().optional(),
    }),
    cena: z.object({
      anchor: z.number().int(),
      m3: z.number().int(),
      m6: z.number().int(),
      m12: z.number().int(),
      perOsoba: z.string().optional(),
      perOsoba12: z.string().optional(),
    }),
    pricePending: z.boolean().optional(), // cena orientační, k potvrzení s klientem
    thumbnail: z.string().startsWith('/').optional(),
    hero: z.string().startsWith('/').optional(),
    heroAlt: z.string().optional(),
    gallery: z.array(galleryItem).optional(),
    hidden: z.boolean().optional(),
  }),
});

/* === ZÁZEMÍ (data-driven strom provozů) ===
 * Jeden JSON soubor per kategorie (gastronomie, wellness, coworking, komunita,
 * ostatni, okoli). Stránky /zazemi/* se renderují smyčkou přes `items`. Přidat
 * provoz = editovat data, ne psát stránku. */
const zazemiImage = z.object({
  src: z.string().optional(),
  placeholder: z.string().optional(),
  alt: z.string(),
});
const zazemiBlock = z.object({
  subtitle: z.string().optional(),
  text: z.string(),
});
const zazemiItem = z.object({
  name: z.string(),
  slug: z.string(),
  lede: z.string(),
  blocks: z.array(zazemiBlock).optional(),
  images: z.array(zazemiImage).optional(),
  bookable: z.boolean().optional(),
  detail: z.boolean().optional(),
  price: z.union([z.number(), z.string()]).optional(),
  priceNote: z.string().optional(),
  order: z.number().int().optional(),
  flags: z.array(z.string()).optional(),
});
const zazemi = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/zazemi' }),
  schema: z.object({
    category: z.string(),
    route: z.string(),
    order: z.number().int().optional(),
    variant: z.enum(['deep', 'cream', 'rose', 'ink']).optional(),
    intro: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
    }),
    items: z.array(zazemiItem),
  }),
});

/* === FAQ === */
const faqAudienceEnum = z.enum(['project', 'resident']);

const faq = defineCollection({
  loader: file('./src/content/faq/index.json'),
  schema: z.object({
    audience: faqAudienceEnum,
    question: z.string().min(8).max(200),
    answer: z.string().min(40).max(1200),
    order: z.number().int(),
  }),
});

/* === ORG identita === */
const org = defineCollection({
  loader: file('./src/content/org/identity.json'),
  schema: z.object({
    name: z.string(),
    abbreviations: z.array(z.string()),
    ico: z.string(),
    dic: z.string(),
    datova_schranka: z.string(),
    spisova_znacka: z.string(),
    founded: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    seat_address: z.string(),
    office_address: z.string(),
    email: z.string().email(),
    phone: z.string(),
    bank_transparent: z.string(),
    bank_other: z.string(),
    predseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
    mistopredseda: z.object({ name: z.string(), email: z.string().email(), phone: z.string() }),
  }),
});

export const collections = { apartmany, sdilenePokoje, zazemi, faq, org };
