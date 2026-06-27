// Klientská brána pro /investori/ (GitHub Pages nemá backend).
// Allowlist drží SHA-256 otisky samotného HESLA.
// Nové heslo: node -e "console.log(require('crypto').createHash('sha256').update('heslo').digest('hex'))"
//
// POZOR: jde o měkkou bránu na statickém webu. Obsah stránek je v HTML
// a v public repu dohledatelný i bez přihlášení. Skutečné zabezpečení
// vyžaduje server (Cloudflare Access / Worker), viz open loop v CLAUDE.md.
export const INVESTOR_ACCESS: string[] = [
  // heslo: 8SH!
  '2250c0a01e81a5c7c27c6a9632b9f92faed24cfba6868421b7311472982a1b06',
];

// localStorage klíč s otiskem přihlášeného účtu.
export const INVESTOR_AUTH_KEY = 'vpd1-auth';
