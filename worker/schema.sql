-- Startovací Hub Klecany, D1 schema pro rezervační backend
-- Spusť po vytvoření D1:
--   wrangler d1 execute sh-web-rezervace --file=schema.sql

CREATE TABLE IF NOT EXISTS rezervace (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  koncept TEXT NOT NULL,            -- privatni / co-living / nevim
  format TEXT,                       -- 1kk / 2kk / kapsle-single / ... NULL pro „nevim"
  mesic TEXT NOT NULL,               -- 2026-09 atd.
  delka TEXT NOT NULL,               -- 1-2 / 3-5 / 6-11 / 12+
  stipendium INTEGER NOT NULL DEFAULT 0,
  jmeno TEXT NOT NULL,
  prijmeni TEXT NOT NULL,
  telefon TEXT NOT NULL,
  email TEXT NOT NULL,
  poznamka TEXT,
  ip_hash TEXT,                      -- SHA-256(ip + salt), prvních 32 znaků
  status TEXT NOT NULL DEFAULT 'novy', -- novy / volano / dohodnuto / odmitnuto
  notes TEXT                         -- interní poznámky rezervačního týmu
);

CREATE INDEX IF NOT EXISTS idx_created_at ON rezervace(created_at);
CREATE INDEX IF NOT EXISTS idx_status ON rezervace(status);
CREATE INDEX IF NOT EXISTS idx_email ON rezervace(email);
