# Rameez Majeed — Portfolio

A premium one-page portfolio for a digital marketing specialist and marketing-systems builder. The content was sourced from Rameez Majeed's résumé; the structure and interaction direction follow a custom rebuild brief without copying the reference brand or content. Those private source files are intentionally excluded from the public repository.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run type-check
npm run build
```

## Content and placeholders

Portfolio content lives in `src/content/site.ts`. The résumé did not provide a portrait, approved testimonials, rates, or a booking-service URL, so the corresponding designed elements remain in place with clearly labelled placeholders. Replace those values before publishing.

Project preview art lives in `public/projects` and can be swapped for real screenshots without changing the layouts.

## Stack

- Next.js App Router, React and TypeScript
- GSAP ScrollTrigger and Lenis for motion and smooth scrolling
- React Three Fiber/Drei for the lazy-loaded hero scene
- Embla Carousel for accessible testimonial navigation
- CSS custom properties and a responsive editorial grid

## Planned CMS layer

The static content model maps cleanly to Sanity collections for `siteSettings`, `timelineEntry`, `project`, `capability`, `servicePlan`, `testimonial`, `faqItem` and `ctaBlock`. Animation settings should remain in code; editorial copy and media can move to CMS fields.

## Before deployment

1. Add a real portrait or brand image.
2. Replace placeholder testimonials with approved quotes.
3. Confirm service pricing/labels and availability.
4. Replace the email CTA with a Cal.com, Calendly, HubSpot or custom-form URL if preferred.
5. Update the canonical site URL used by metadata, `sitemap.ts` and `robots.ts` if moving away from GitHub Pages.
6. Run a final Lighthouse/accessibility pass on the production URL.

## GitHub Pages

The site is published from the generated `gh-pages` branch. The project path is added only during the Pages build, so local development continues to run at the root URL.

```bash
npm run deploy
```

Live URL: `https://visnet-report.github.io/rameez-portfolio/`

The site respects `prefers-reduced-motion`, includes keyboard-accessible navigation, a skip link, labelled controls, semantic sections and Person JSON-LD.
