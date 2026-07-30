#!/usr/bin/env bash
# Builds the app and deploys it to a branch-named surge.sh preview URL, so
# anyone with the link can test pre-prod changes cross-device without
# touching Netlify. master/main deploy straight to 33ghosts.surge.sh; any
# other branch gets its own URL derived from the branch name.
#
# First-time setup (once per machine, or share one team login):
#   npx surge login
#
# Usage:
#   npm run deploy:preview            # deploys the current branch
#   npm run deploy:preview -- my-slug # override the URL slug

set -euo pipefail
cd "$(dirname "$0")"

# surge's CLI exits 0 even when it can't authenticate (e.g. no TTY, no
# credentials) -- it just prints a login prompt and quits, which would
# otherwise make this script report a false "Live at" success. Check for
# real credentials ourselves before attempting anything.
HAS_CREDS=false
if [ -n "${SURGE_LOGIN:-}" ] && [ -n "${SURGE_TOKEN:-}" ]; then
  HAS_CREDS=true
elif [ -f "$HOME/.netrc" ] && grep -q "machine surge.surge.sh" "$HOME/.netrc" 2>/dev/null; then
  HAS_CREDS=true
fi

if [ "$HAS_CREDS" = false ]; then
  echo "Not logged in to surge.sh yet." >&2
  echo "" >&2
  echo "Run this once (creates a free account if you don't have one already):" >&2
  echo "  npx surge login" >&2
  echo "" >&2
  echo "For CI/non-interactive use instead, set SURGE_LOGIN and SURGE_TOKEN env vars." >&2
  exit 1
fi

BRANCH="$(git symbolic-ref --short HEAD)"

if [ "$BRANCH" = "main" ] || [ "$BRANCH" = "master" ]; then
  DOMAIN="33ghosts.surge.sh"
else
  SLUG="${1:-$(echo "$BRANCH" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')}"
  DOMAIN="33ghosts-$SLUG.surge.sh"
fi

echo "==> Building..."
npm run build

echo "==> Adding SPA fallback (200.html) so client-side routes don't 404 on refresh/deep-link..."
cp dist/index.html dist/200.html

echo "==> Deploying branch '$BRANCH' to https://$DOMAIN ..."
# Not a project devDependency on purpose -- surge's own dependency tree
# (request, form-data, qs...) is old enough to trip several high/critical
# `npm audit` findings. npx fetches/caches it outside package-lock.json so
# that doesn't leak into this project's audit surface.
npx --yes surge ./dist "$DOMAIN"

echo ""
echo "Live at: https://$DOMAIN"
