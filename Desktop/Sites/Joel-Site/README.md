# JM Digital Solutions — Website

Premium digital studio website showcasing services for restaurants, wellness businesses, and local brands in Luxembourg and Switzerland.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Cormorant Garamond & Jost (Google Fonts)
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles & Tailwind config
├── components/
│   ├── Navigation.tsx     # Fixed nav with scroll behavior
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── TrustStrip.tsx     # Stats bar
│   ├── Work.tsx           # Portfolio grid
│   ├── Services.tsx       # Service cards
│   ├── Pricing.tsx        # Pricing packages
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── FadeIn.tsx         # Animation wrapper
└── public/
    └── miazia-images/     # Restaurant project images
```

## Features

- ✅ Fully responsive design
- ✅ Scroll animations
- ✅ Fixed navigation with backdrop blur on scroll
- ✅ Premium dark theme with gold accents
- ✅ SEO optimized
- ✅ Zero build errors
- ✅ Ready for Vercel deployment

## Deployment

This site is configured for Vercel deployment:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Color Palette

- Background: `#09090b`
- Surface: `#141414`
- Text Primary: `#f2ece0`
- Text Muted: `#a89f8c`
- Gold Accent: `#c8a96e`
- Gold Light: `#e5d0a4`

## Notes

- Domain-agnostic: No hardcoded domain references
- All images lazy-loaded
- Form submission requires backend integration
- Contact email: magalhaesjoel5@gmail.com
