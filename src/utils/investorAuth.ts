// Klientská brána pro /investori/ (GitHub Pages nemá backend).
// Allowlist drží SHA-256 otisky "e-mail:heslo" (e-mail lowercase, trim).
// Nový účet: node -e "console.log(require('crypto').createHash('sha256').update('email:heslo').digest('hex'))"
//
// POZOR: jde o měkkou bránu na statickém webu. Obsah stránek je v HTML
// a v public repu dohledatelný i bez přihlášení. Skutečné zabezpečení
// vyžaduje server (Cloudflare Access / Worker), viz open loop v CLAUDE.md.
export const INVESTOR_ACCESS: string[] = [
  // marek.semerad@osa2.cz
  '64c1aed35fd6473edc30068e00016bb8e1950939cbc4624c95b0552ba819066c',
];

// localStorage klíč s otiskem přihlášeného účtu.
export const INVESTOR_AUTH_KEY = 'vpd1-auth';
