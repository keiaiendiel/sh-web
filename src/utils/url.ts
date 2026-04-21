// Prefix an internal root-absolute path with the configured base.
// E.g. withBase('/projekty/') returns '/osa-web/projekty/' when base='/osa-web/'.
// When base is '/', passes the path through unchanged.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
