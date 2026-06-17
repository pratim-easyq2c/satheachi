# Sathe Achi showcase site — section manifest

Canonical inventory for `site/index.html`. **Do not remove or rename without curator approval.**  
When replacing a UI pattern (e.g. card → ribbon), keep the same **user-facing purpose** and update this file.

| # | ID / anchor | User-facing purpose | HTML / JS hook |
|---|-------------|---------------------|----------------|
| 1 | `header` | Brand + nav + Contact CTA | `#header`, `#nav` |
| 2 | `hero` | Headline, CTAs, trust stats, hero photo | `.hero`, `.hero__copy`, `.hero__visual` |
| 3 | — | **What family abroad sees** (Care Sathi feed) | `.care-feed`, `#care-feed-list` |
| 4 | — | Scrolling photo gallery | `.gallery-strip`, `#gallery-scroll` |
| 5 | `story` | Para / brand story | `#story` |
| 6 | `services` | 8 services bento | `#services`, `#services-bento` |
| 7 | `nri` | Families abroad + video CTA | `#nri` |
| 8 | `pricing` | Plans + monthly/yearly toggle | `#pricing`, `#pricing-grid` |
| 9 | `press` | News & articles (ETV, DW, YouTube) | `#press`, `#news-grid` |
| 10 | `team` | Team photo | `#team` |
| 11 | `reviews` | Google review screenshots | `#reviews` |
| 12 | `faq` | FAQ accordion | `#faq` |
| 13 | `contact` | Contact info + WhatsApp form | `#contact`, `#contact-form` |
| 14 | `footer` | Footer links | `.footer` |
| 15 | — | Mobile sticky Call / WhatsApp | `.mobile-cta` |
| 16 | — | Floating WhatsApp button | `.wa-float` |

**Also:** `site/brochure/` (print brochure) — separate page; do not break links from nav/footer.

**JS render targets** (must still populate after edits):  
`#care-feed-list`, `#gallery-scroll`, `#services-bento`, `#pricing-grid`, `#news-grid`

Last updated: 2026-06-17
