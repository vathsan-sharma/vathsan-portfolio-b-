# SEO plan

Site: https://www.vathsansharma.com

## Done in the code

| Item | Where |
| --- | --- |
| Sitemap (18 URLs, homepage without trailing slash) | `app/sitemap.js` → `/sitemap.xml` |
| Robots rules and sitemap link | `app/robots.js` → `/robots.txt` |
| No noindex tags on any page | checked by crawl |
| Canonical tag on every page | `lib/seo.js` (`pageMetadata`) |
| Unique title and description per page | page metadata; blog titles under 60 characters |
| One H1 per page, no skipped heading levels | checked by crawl |
| Alt text on every image | checked by crawl |
| Schema markup: Person, WebSite, Article, FAQPage, BreadcrumbList | `lib/schema.js` |
| Internal links, none broken | 21 internal links checked |
| OG and Twitter share image on every page | `app/opengraph-image.js`, `lib/seo.js` |
| HTTPS enforced (http redirects with 308) | live check |
| Images compressed | hero, one client logo and one tool icon moved to WebP; gallery already WebP |
| Mobile: no sideways scroll on checked pages | Playwright at 390px |
| Core Web Vitals (homepage, mobile, local build) | Lighthouse: Performance 97, SEO 100, Accessibility 100, Best practices 100; LCP 2.6 s, CLS 0 |
| URL slugs | lowercase, hyphenated, descriptive (`/work/cloud-pos`, `/blog/...`) |

## Needs your action

1. **Deploy.** The live site doesn't have these changes until they're deployed.
2. **Verify Search Console.** In Google Search Console, add the property `https://www.vathsansharma.com`
   and choose the HTML tag method. Copy the `content` value, then set it as the
   `GOOGLE_SITE_VERIFICATION` environment variable in your hosting dashboard and redeploy.
   Then submit `https://www.vathsansharma.com/sitemap.xml` under Sitemaps.
3. **Confirm the photo for LCP.** The homepage LCP is still about 2.6 s on a simulated mobile connection.
   Test again on the live site with PageSpeed Insights after deploying.

## Backlink strategy

Aim for a few strong links from relevant, real sites. Quality matters more than volume.

1. **Your existing profiles.** Make sure the website link is on LinkedIn, your DMASL and CIM profiles,
   and the institutions where you teach (ACIDM, TrendsEd, Hatch, Miami Ad School alumni page).
2. **Speaking and training.** Ask event organisers and partners (ReDM 2026, Green Impact Week,
   Founder Institute) to link to your profile page on their site.
3. **Case studies as sources.** Publish the case-study pages with real numbers and ask clients who agree
   (only with their permission) to link to them from their sites or testimonials.
4. **Useful articles.** The blog posts answer real questions, so they can earn links from marketing
   newsletters, communities and tool vendors. Share each post where your audience already reads.
5. **Directories.** Add profiles to reputable industry directories (for example the DMASL member list).
   Skip paid link schemes and bulk directories.
6. **Track it.** In Search Console, check the Links report every month. Note which links you asked for
   and which ones arrived.

## Not done yet

- A Google Business Profile (only useful if you want local search for Sri Lanka).
- Analytics and conversion tracking on the booking button. Tell me which tool you want and I'll add it.
