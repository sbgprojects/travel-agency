# Yeto Holidays

Marketing site for Yeto Holidays — *Your Journey. Your Story. Your Yeto.*

Built with **Next.js 15.5** (App Router), **React 19**, **TypeScript** and **Tailwind CSS v4**.
Mobile-first, light-themed and image-led.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Structure

```
app/
  layout.tsx                 root layout — fonts, metadata, Header/Footer/Reveal
  page.tsx                   homepage, composed from components/sections/*
  destinations/page.tsx      all destinations
  destinations/[slug]/       destination + package detail page
  plan/                      "Plan my trip" enquiry form
components/
  Header.tsx  Footer.tsx     site chrome
  SmartImage.tsx             image with a fallback chain + branded placeholder
  Reveal.tsx                 global scroll-reveal observer
  ui.tsx                     Section, SectionHeading, ButtonLink, Eyebrow
  sections/                  homepage sections
lib/
  data.ts                    all content: destinations, tours, reviews, contact
```

## Editing content

Almost everything on the site is driven by **`lib/data.ts`** — destinations,
itineraries, inclusions, group departures, reviews and contact details. Add a
destination there and it appears automatically in the footer, the homepage grid
and its own `/destinations/{slug}` page (statically generated via
`generateStaticParams`).

### Before going live

A few placeholders are deliberately obvious and need real values:

- **`CONTACT.whatsapp` / `CONTACT.whatsappDisplay` / `CONTACT.email`** in
  `lib/data.ts` — currently a dummy number and address.
- **Prices** (`fromPrice`) are indicative starting fares, not contracted rates.
  They are labelled as indicative in the UI; replace them with live pricing.
- **Images** are hotlinked from Unsplash. `SmartImage` falls through a list of
  candidate URLs and finally to a branded gradient, so a dead URL degrades
  gracefully rather than breaking a card — but self-hosted photography of real
  trips will look far better than stock.
- **The enquiry form has no backend.** It validates in the browser and hands the
  details off to WhatsApp; it does not store or email anything. Wire it to a
  form service, CRM or API route before relying on it.
- **Reviews** are placeholders attributed to "Yeto Traveller". Replace them with
  real, attributable reviews — and only publish platform ratings once they exist.
- **The EMI section is an illustration only.** It divides the holiday value by
  the tenure and shows no interest or fees. Yeto is not a lender: instalments
  must be offered through a regulated financing partner, whose rates, fees and
  eligibility terms have to be disclosed in writing before a customer commits.
  Keep the on-page disclaimer in place.

## Deployment

Deployed on Vercel. Remote image hosts are allow-listed in `next.config.ts`
(`images.unsplash.com`, `images.pexels.com`) — add any new host there or
`next/image` will refuse to optimise it.
