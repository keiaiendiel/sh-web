/*
 * Astro 6 Content Collections for the Startovací Hub.
 * Three collections: subProjects (Hub programme cards), faq, org (OSA identity).
 */
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const subProjectStatusEnum = z.enum(['v-priprave', 'realizujeme']);

const subProjects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/sub_projects' }),
  schema: z.object({
    name: z.string().min(3).max(80),
    role: z.string().min(20).max(160),
    status: subProjectStatusEnum,
    order: z.number().int(),
    thumbnail: z.string().startsWith('/').optional(),
    heroImage: z.string().startsWith('/').optional(),
    heroImageAlt: z.string().min(10).max(200).optional(),
    /* Provozy chips — drobný řádek ikonek pod nadpisem na sub-projekt page,
       tematicky odpovídá tile na landing page „Provozy a služby". `icon` =
       lucide-static name, `label` = krátký český název. */
    provozy: z
      .array(z.object({ icon: z.string(), label: z.string() }))
      .optional(),
  }),
});

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

/* Rooms = 6 typů ubytovacích jednotek (capsule single, capsule double, 1+kk-2L,
   1+kk-3L, 2+kk, 3+kk). Anchor cena je cena za jednotku při plné konfiguraci
   (= maxBeds v ceně); discount3/6/12 jsou procentuální slevy za pobyt 3+ / 6+
   / 12+ měsíců, 3-tier struktura zachycuje Erasmus i celoroční pobyty.
   maxBeds = počet lůžek v ceně (klíč pro per-osoba ekvivalent v UI). */
const roomTypeEnum = z.enum(['capsule', 'capsule-double', '1kk-2l', '1kk-3l', '2kk', '3kk']);

const rooms = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/rooms' }),
  schema: z.object({
    type: roomTypeEnum,
    name: z.string().min(3).max(80),
    shortName: z.string().min(2).max(40),
    size: z.string(),
    capacity: z.string(),
    maxBeds: z.number().int().min(1).max(8),
    priceFrom: z.number().int().min(1000).max(100000),
    discount3: z.number().int().min(0).max(50).optional(),
    discount6: z.number().int().min(0).max(50).optional(),
    discount12: z.number().int().min(0).max(50).optional(),
    order: z.number().int(),
    pitch: z.string().min(20).max(300),
    idealFor: z.string().min(20).max(280),
    features: z.array(z.string()).optional(),
    thumbnail: z.string().startsWith('/'),
    heroImage: z.string().startsWith('/'),
    heroImageAlt: z.string().min(10).max(200),
    sharedGenderOptions: z.boolean().default(false),
  }),
});

export const collections = { subProjects, faq, org, rooms };
