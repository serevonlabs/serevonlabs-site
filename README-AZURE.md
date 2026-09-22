# Serevon Labs website — Azure Static Web Apps

This package is a complete static website. All logos and visual assets are bundled locally in `assets/`; there are no third-party image or font dependencies.

## Pages
- `index.html` — homepage
- `about.html` — company/about page with the 1320 Tower Road business address
- `apps.html` — product page for ContinuCam
- `support.html` — support/contact page
- `privacy.html` — website privacy notice
- `404.html` — custom not-found page

## Deploy with Azure Static Web Apps Free
1. Create a new GitHub repository, for example `serevonlabs-website`.
2. Upload the contents of this folder to the repository root and commit them.
3. In Azure Portal, create **Static Web App**.
4. Select the **Free** plan.
5. Connect the GitHub repository and branch.
6. For build details choose **Custom** / static HTML if prompted.
   - App location: `/`
   - API location: leave blank
   - Output location: leave blank
7. Create the resource and allow the generated GitHub Actions workflow to deploy the site.
8. Test the Azure-generated `*.azurestaticapps.net` URL.

## Add serevonlabs.com
After deployment, open the Static Web App in Azure and choose **Custom domains**.

Add:
- `serevonlabs.com`
- `www.serevonlabs.com`

Azure will show the DNS validation/target records required for your domain registrar. Keep the domain at your existing registrar; you only need to update DNS records.

## Google Search Console / Play Console website verification
For a Google organization developer account, verify `serevonlabs.com` in Google Search Console. DNS verification is recommended because it verifies the full domain. Add Google's TXT verification record at your domain registrar, wait for DNS propagation, and click **Verify** in Search Console.

Then enter `https://serevonlabs.com` as the official organization website in Google Play Console.

## Before public launch
- Replace or expand the ContinuCam copy if desired.
- Add the final Google Play listing URL to `apps.html` after it is public.
- If you want an app-specific privacy policy hosted here, add it as a separate page rather than replacing the general website privacy notice.
- The site currently has no analytics or advertising scripts.
