# Cloudflare Pages Deployment

This project is deployed to Cloudflare Pages using GitHub Actions.

## Cloudflare Configuration

To set up the deployment, you need to:

1.  **Create a Cloudflare Pages project:**
    - Go to the Cloudflare dashboard.
    - Navigate to **Workers & Pages**.
    - Click **Create application** > **Pages** > **Connect to Git** (or create a direct upload project named `reading-list`).
    - Even if you use GitHub Actions, having the project name match `reading-list` in the workflow is important.

2.  **Generate an API Token:**
    - Go to **My Profile** > **API Tokens**.
    - Create a token with **Cloudflare Pages: Edit** permissions.

3.  **Get your Account ID:**
    - You can find your Account ID in the Cloudflare dashboard URL or on the overview page of any of your domains/workers.

## GitHub Repository Secrets

Add the following secrets to your GitHub repository (**Settings** > **Secrets and variables** > **Actions**):

- `CLOUDFLARE_API_TOKEN`: The API token you generated.
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.

## CI/CD Workflow

The deployment is handled by the `.github/workflows/cloudflare.yml` workflow.

- **Production:** Every push to the `main` branch is automatically deployed to production.
- **Previews:** Every Pull Request targeting `main` generates a preview deployment. Cloudflare will provide a unique URL for each preview, which will be added as a comment or status check in the PR.
