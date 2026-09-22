# Serevon Labs LLC Website

Static HTML/CSS/JS site designed for Azure Static Web Apps Free.

## Azure build settings
- Build preset: Custom
- App location: `/`
- API location: leave blank
- Output location: leave blank

## Updating an existing GitHub deployment
Replace the existing repository files with the contents of this folder and commit to `main`. Azure Static Web Apps will redeploy automatically through the existing GitHub Actions workflow.

## Custom domain
Add `serevonlabs.com` and optionally `www.serevonlabs.com` under the Static Web App's **Custom domains** blade, then create the DNS records Azure requests at your domain registrar.

## Google Search Console
After the custom domain resolves over HTTPS, add `serevonlabs.com` to Google Search Console and complete DNS verification. Use the verified site as the official organization website in Google Play Console.
