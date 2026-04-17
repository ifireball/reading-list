# Cloudflare Workers Deployment

This project is deployed as a Cloudflare Worker that serves static assets.

## Cloudflare Configuration

To set up the deployment, you need to:

1.  **Create a Cloudflare Worker:**
    - Go to the Cloudflare dashboard.
    - Navigate to **Workers & Pages** > **Overview**.
    - Click **Create application** > **Create Worker**.
    - Name the worker `reading-list`.

2.  **Generate an API Token:**
    - Go to **My Profile** > **API Tokens**.
    - Create a token with **Edit Cloudflare Workers** permissions.

3.  **Get your Account ID:**
    - You can find your Account ID in the Cloudflare dashboard URL or on the overview page of any of your domains/workers.

## GitHub Repository Secrets

Add the following secrets to your GitHub repository (**Settings** > **Secrets and variables** > **Actions**):

- `CLOUDFLARE_API_TOKEN`: The API token you generated.
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.

## CI/CD Workflow

The deployment is split into two workflows to securely support Pull Requests from forks:

- **Build Workflow (`build.yml`):** Runs on every push and PR. It builds the site and uploads the static files and the `cloudflare/worker.js` as artifacts.
- **Deploy Workflow (`deploy.yml`):** Runs only when the Build workflow completes successfully. It runs in the repository's context (always using the `main` branch version of the workflow and `cloudflare/wrangler.toml`), giving it safe access to the Cloudflare secrets.

### PR Previews and Security

To prevent malicious code execution, PRs are only deployed if:
1.  The PR author has **write permissions** to the repository.
2.  OR, a user with write permissions adds the **allow-deploy** label to the PR.

Every push to `main` is automatically deployed to production. PR previews are deployed to unique workers named `reading-list-pr-<number>`. The workflow also creates GitHub Deployments and updates Commit Statuses and PR comments with the deployment link.
