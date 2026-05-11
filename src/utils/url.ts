// Prefix an internal root-absolute path with the configured base.
// E.g. withBase('/pokoje/') returns '/sh-web/pokoje/' when base='/sh-web/'.
// When base is '/', passes the path through unchanged.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
