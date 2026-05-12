/*
 * Astro 6 Content Collections pro Startovací Hub Klecany.
 *
 * Phase 1 (2026-05-13): pre-restructure cleanup. Collections `rooms`
 * a `subProjects` smazány společně s odpovídajícími MDX soubory (pre-pivot
 * obsah). Phase 3 redesignuje schema pro 9 typů ubytování (4 co-living +
 * 5 privátní apartmány) a Komunita amenity podle Site_Copy.md.
 *
 * Aktivní collections:
 *   - faq      → src/content/faq/index.json  (10 FAQ otázek per Phase 4)
 *   - org      → src/content/org/identity.json  (OSA II identita, JSON-LD)
 */
import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

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

export const collections = { faq, org };
