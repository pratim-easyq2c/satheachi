# Sathe Achi — Website

Public website for [Sathe Achi](https://satheachi.co.in) elder care (Barasat & Kolkata).

**Live (after deploy):** https://pratim-easyq2c.github.io/satheachi/

**Repository:** https://github.com/pratim-easyq2c/satheachi

## Preview locally

Double-click `index.html`, or:

```powershell
npx serve -l 8080
```

## GitHub Pages setup

1. Push this folder to `main` on `pratim-easyq2c/satheachi`.
2. GitHub → **Settings → Pages** → Build and deployment → Source: **GitHub Actions**.
3. First push triggers `.github/workflows/pages.yml`; site goes live in ~1–2 minutes.

## Custom domain (optional)

To use `satheachi.co.in`:

1. Add `site/CNAME` containing: `satheachi.co.in`
2. DNS: `CNAME satheachi.co.in → pratim-easyq2c.github.io`
3. Enable HTTPS in Pages settings.

## Before production

- [ ] Replace placeholder testimonials with verified quotes
- [ ] Add Google Business review link
- [ ] Confirm plan starting prices with founder
- [ ] Add real team / member photos

## Wiki / strategy docs

Competitive research and content strategy live in the parent LLM-Wiki project (not deployed here).
