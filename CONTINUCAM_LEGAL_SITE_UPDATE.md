# ContinuCam Legal Website Update

**Date:** 2026-09-24

This site package retains the existing Serevon Labs website-level privacy notice and adds product-specific ContinuCam Privacy Policy and Terms of Service pages in all 12 app languages.

## New product legal paths

- `continucam/privacy/en.html` plus 11 localized equivalents.
- `continucam/terms/en.html` plus 11 localized equivalents.
- `continucam/privacy/index.html` and `continucam/terms/index.html` provide English folder defaults.

Each legal page includes an accessible language switcher. The Arabic pages use RTL document direction.

## Existing site integration

- `apps.html` now links directly to the ContinuCam Privacy Policy and Terms of Service.
- `privacy.html` remains the website privacy notice and now points visitors to the ContinuCam product-specific legal documents.
- `sitemap.xml` includes all 24 localized ContinuCam legal URLs.
- No inline JavaScript was added; the existing Content Security Policy remains compatible.

## Deployment

Deploy this package to the same Azure Static Web Apps site currently serving `serevonlabs.com`. The Android B079 source expects these exact URL families:

- `https://serevonlabs.com/continucam/privacy/<locale>.html`
- `https://serevonlabs.com/continucam/terms/<locale>.html`
