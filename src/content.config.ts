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
  src: z.string().startsWith('/'),
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

/* === CO-LIVING (6 formátů) === */
const colivingSlug = z.enum([
  'pokoj-basic',
  'pokoj-privacy',
  'kapsle-single',
  'kapsle-double',
  'jedno-luzko',
  'dvouluzko',
]);

const coliving = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/coliving' }),
  schema: z.object({
    slug: colivingSlug,
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
    thumbnail: z.string().startsWith('/').optional(),
    hero: z.string().startsWith('/').optional(),
    heroAlt: z.string().optional(),
    gallery: z.array(galleryItem).optional(),
    hidden: z.boolean().optional(),
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

export const collections = { apartmany, coliving, faq, org };
