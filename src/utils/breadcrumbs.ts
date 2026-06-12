/*
 * Drobečková navigace , labely pro segmenty cesty. Sdílené Breadcrumb
 * komponentou (viditelná stylová „eyebrow" navigace) i Base JSON-LD.
 */
export const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Úvod',
  '/ubytovani/': 'Ubytování',
  '/ubytovani/privatni/': 'Privátní apartmány',
  '/ubytovani/sdilene-pokoje/': 'Sdílené pokoje',
  '/zazemi/': 'Zázemí',
  '/zazemi/gastronomie/': 'Gastronomie',
  '/zazemi/wellness/': 'Wellness & spa',
  '/zazemi/coworking/': 'Coworking',
  '/zazemi/komunita/': 'Komunitní centrum',
  '/zazemi/ostatni/': 'Ostatní zázemí',
  '/zazemi/okoli/': 'Okolí areálu',
  '/doprava/': 'Doprava',
  '/doprava/sdilena-mobilita/': 'Sdílená mobilita',
  '/doprava/privatni-mobilita/': 'Privátní mobilita',
  '/stipendia/': 'Stipendia',
  '/galerie/': 'Galerie',
  '/cenik/': 'Ceník',
  '/novinky/': 'Novinky',
  '/rezervace/': 'Rezervace',
  '/kontakty/': 'Kontakty',
  '/faq/': 'FAQ',
  '/gdpr/': 'Ochrana osobních údajů',
  '/metodika-srovnani/': 'Metodika srovnání',
  '/druzstvo/': 'Družstvo',
};

export function labelForSlug(seg: string): string {
  if (/^\d+kk$/.test(seg)) return seg.replace('kk', '+kk');
  return seg.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}

export type Crumb = { name: string; href: string; current: boolean };

/* Postaví trail z čistě relativní cesty (bez base), např. "/zazemi/gastronomie/".
 * Vrací segmenty vč. úvodu. `currentLabel` přepíše poslední (detail pages). */
export function buildTrail(cleanPath: string, currentLabel?: string): { name: string; key: string; current: boolean }[] {
  const clean = ('/' + cleanPath).replace(/\/{2,}/g, '/');
  const segs = clean.split('/').filter(Boolean);
  const trail: { name: string; key: string; current: boolean }[] = [
    { name: 'Úvod', key: '/', current: segs.length === 0 },
  ];
  let acc = '';
  segs.forEach((seg, i) => {
    acc += '/' + seg;
    const key = acc + '/';
    const isLast = i === segs.length - 1;
    const name = isLast && currentLabel ? currentLabel : (BREADCRUMB_LABELS[key] ?? labelForSlug(seg));
    trail.push({ name, key, current: isLast });
  });
  return trail;
}
