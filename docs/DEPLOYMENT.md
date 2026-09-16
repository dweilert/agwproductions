# AGW Productions Deployment

AGW Productions follows the same static-site Amplify pattern used by the MMPOA site.

## AWS Amplify

- App name: `agw-productions`
- App ID: `dqe42ht65c1cl`
- Branch: `main`
- Default Amplify URL: `https://main.dqe42ht65c1cl.amplifyapp.com`
- Custom domain: `agw-productions.com`
- Hosted zone: `agw-productions.com.` in Route 53

## Files Amplify Publishes

Amplify uses `amplify.yml` at the repository root. There is no build step; it publishes:

- `index.html`
- `styles.css`
- `script.js`
- `assets/**/*`

## Manual Deploy

From the project root:

```sh
./scripts/deploy-amplify.sh
```

The script:

1. Creates a zip of the static site.
2. Requests an Amplify deployment upload URL.
3. Uploads the zip.
4. Starts the deployment on the `main` branch.

## GitHub Repo

Target repo:

```text
https://github.com/dweilert/agwproductions
```

GitHub creation/push requires a valid `dweilert` GitHub login. If creation fails with bad credentials, refresh the CLI login:

```sh
gh auth login -h github.com
```

Then create and push:

```sh
gh repo create dweilert/agwproductions --public --source . --remote origin --push
```

After the repo exists, future deploys can stay manual with `scripts/deploy-amplify.sh`, or the Amplify app can be reconnected to the GitHub repo for automatic branch deployments.

## Domain Status

The domain association was created for:

- `agw-productions.com`
- `www.agw-productions.com`

Route 53 currently has the required records:

- Apex `A` alias to `d3kvpc7cnz8pl6.cloudfront.net`
- `www` CNAME to `d3kvpc7cnz8pl6.cloudfront.net`
- ACM certificate validation CNAME for `agw-productions.com`

Amplify may take several minutes to mark the domain as fully verified after the DNS records are created.
