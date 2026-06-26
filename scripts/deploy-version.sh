#!/usr/bin/env bash
#
# Verzovaný deploy na GitHub Pages.
#
# Web běží na jedné Pages doméně (zdroj = větev `gh-pages`), kde:
#   /sh-web/            = hlavní (root) verze
#   /sh-web/v002/, ...  = jednotlivé verzované snapshoty
#
# Každá verze odpovídá jednomu číslu ("002", "003", ...). Build se dělá
# s odpovídajícím base (SITE_BASE=/sh-web/vNNN/), aby odkazy a assety sedely.
#
# Pouziti:
#   scripts/deploy-version.sh 003           # nasadi AKTUALNI checkout do /sh-web/v003/
#   scripts/deploy-version.sh root          # nasadi AKTUALNI checkout do rootu /sh-web/
#
# Vyzaduje: pnpm, gh (prihlaseny), pristup k orig's gh-pages vetvi.
set -euo pipefail

ARG="${1:?Zadej cislo verze (napr. 003) nebo 'root'}"
ROOT="$(git rev-parse --show-toplevel)"
REPO_URL="https://x-access-token:$(gh auth token)@github.com/keiaiendiel/sh-web.git"
SRC_REF="$(git -C "$ROOT" rev-parse --short HEAD)"

if [ "$ARG" = "root" ]; then
  SUBDIR=""
  BASE="/sh-web/"
  LABEL="root"
else
  SUBDIR="v${ARG}"
  BASE="/sh-web/${SUBDIR}/"
  LABEL="$SUBDIR"
fi

echo "→ build ${LABEL} (base ${BASE})"
( cd "$ROOT" && SITE_BASE="$BASE" pnpm build )

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# gh-pages vetev nemusi jeste existovat , v tom pripade ji zalozime jako orphan.
if git ls-remote --exit-code --heads "$REPO_URL" gh-pages >/dev/null 2>&1; then
  git clone --depth 1 --branch gh-pages "$REPO_URL" "$TMP"
else
  echo "→ gh-pages vetev neexistuje, zakladam orphan"
  git clone --depth 1 "$REPO_URL" "$TMP"
  ( cd "$TMP" && git checkout --orphan gh-pages && git rm -rf . >/dev/null 2>&1 || true )
fi

# .nojekyll aby GitHub Pages nezpracovaval _astro/ pres Jekyll.
touch "$TMP/.nojekyll"

if [ "$ARG" = "root" ]; then
  # Smaze vse v rootu KROME verzovanych slozek (v*) a .git/.nojekyll.
  find "$TMP" -mindepth 1 -maxdepth 1 \
    ! -name '.git' ! -name '.nojekyll' ! -regex '.*/v[0-9].*' -exec rm -rf {} +
  cp -r "$ROOT"/dist/. "$TMP"/
else
  rm -rf "${TMP:?}/${SUBDIR}"
  mkdir -p "$TMP/$SUBDIR"
  cp -r "$ROOT"/dist/. "$TMP/$SUBDIR"/
fi

cd "$TMP"
git add -A
if git diff --cached --quiet; then
  echo "✓ zadna zmena, nic k nasazeni"
  exit 0
fi
git -c user.name="sh-web deploy" -c user.email="deploy@startovacihub.cz" \
  commit -q -m "deploy(${LABEL}): ${SRC_REF}"
git push -q origin gh-pages
echo "✓ hotovo: https://keiaiendiel.github.io${BASE}"
