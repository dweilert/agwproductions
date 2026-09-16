#!/usr/bin/env bash
set -euo pipefail

APP_ID="${AMPLIFY_APP_ID:-dqe42ht65c1cl}"
BRANCH_NAME="${AMPLIFY_BRANCH_NAME:-main}"
ZIP_PATH="${TMPDIR:-/tmp}/agw-productions-frontend.zip"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Packaging AGW Productions static site..."
rm -f "$ZIP_PATH"
zip -r "$ZIP_PATH" . \
  -x '.git/*' \
  -x '.DS_Store' \
  -x 'node_modules/*' \
  -x '*.zip'

echo "Creating Amplify deployment for app ${APP_ID}, branch ${BRANCH_NAME}..."
DEPLOYMENT_JSON="$(aws amplify create-deployment \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH_NAME")"

JOB_ID="$(printf '%s' "$DEPLOYMENT_JSON" | python3 -c 'import json,sys; print(json.load(sys.stdin)["jobId"])')"
UPLOAD_URL="$(printf '%s' "$DEPLOYMENT_JSON" | python3 -c 'import json,sys; print(json.load(sys.stdin)["zipUploadUrl"])')"

echo "Uploading package..."
curl -sS -X PUT -T "$ZIP_PATH" "$UPLOAD_URL" >/dev/null

echo "Starting Amplify deployment job ${JOB_ID}..."
aws amplify start-deployment \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH_NAME" \
  --job-id "$JOB_ID" >/dev/null

echo "Deployment started."
echo "Amplify URL: https://${BRANCH_NAME}.${APP_ID}.amplifyapp.com"
echo "Custom domain: https://agw-productions.com"
