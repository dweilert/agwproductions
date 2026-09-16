# Alien Ghost Wizard Productions Website

Static starter site for Alien Ghost Wizard Productions, a small publishing company and author platform launching with `Grey's on 51st St.`.

## What is included

- Publisher-focused home page
- Alien Ghost Wizard brand hero using `assets/agw.png`
- Expandable book catalog
- Featured `Grey's on 51st St.` section using content from greysdiner.com
- Creative team section
- Newsletter/contact placeholder
- Responsive CSS with no build step

## Editing books

Book cards are defined in `script.js` in the `books` array. Add future titles there with:

- `title`
- `status`
- `format`
- `genre`
- `price`
- `image`
- `description`
- `buyUrl`

## Running locally

Open `index.html` directly in a browser, or run a small local server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

This project is set up for AWS Amplify static hosting, matching the MMPOA static-site deployment pattern.

Deploy manually with:

```sh
./scripts/deploy-amplify.sh
```

Deployment details are in `docs/DEPLOYMENT.md`.

## Production notes

Before launch, replace placeholder newsletter behavior with the chosen email provider and confirm whether AGW Productions should use a dedicated domain, a GitHub Pages domain, or another host.
