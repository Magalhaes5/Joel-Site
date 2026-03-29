# JM Digital Solutions — Website

Premium digital studio website showcasing web design services with a complete template marketplace for restaurants, wellness businesses, and local brands in Luxembourg and Switzerland.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Cormorant Garamond & Jost (Google Fonts)
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Forms**: EmailJS for contact form handling

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
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Home page with all sections
│   └── globals.css             # Global styles & Tailwind config
├── components/
│   ├── Navigation.tsx          # Fixed nav with scroll behavior
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── TrustStrip.tsx          # Stats bar (14+ templates, etc.)
│   ├── Work.tsx                # Portfolio grid (live projects)
│   ├── Templates.tsx           # ⭐ Template marketplace with filters
│   ├── Services.tsx            # Service cards
│   ├── Process.tsx             # Process steps
│   ├── Pricing.tsx             # ⭐ Pricing with template tiers
│   ├── Testimonials.tsx        # ⭐ Client testimonials
│   ├── Blog.tsx                # Blog section
│   ├── About.tsx               # About section
│   ├── Contact.tsx             # ⭐ Contact form with EmailJS
│   ├── Footer.tsx              # Footer
│   └── FadeIn.tsx              # Animation wrapper
└── public/
    ├── docs/
    │   └── template-setup-guide.md  # ⭐ Client documentation
    ├── miazia-images/          # Restaurant project images
    ├── cafe-moderne-template.html       # ⭐ Coffee shop template
    ├── beauty-salon-template.html       # ⭐ Beauty salon template
    ├── yoga-studio-template.html        # ⭐ Yoga studio template
    ├── boutique-hotel-template.html     # ⭐ Hotel template
    ├── professional-services-template.html  # ⭐ Corporate template
    └── [9 other existing templates]     # Restaurant/wellness templates
```

⭐ = New in this update

## Features

### Main Site
- ✅ Fully responsive design (mobile-first)
- ✅ Scroll animations with Framer Motion
- ✅ Fixed navigation with backdrop blur on scroll
- ✅ Premium dark theme with gold accents
- ✅ SEO optimized
- ✅ EmailJS contact form integration
- ✅ Client testimonials with results
- ✅ Updated pricing with template marketplace tiers
- ✅ Real-time template filtering by industry

### Template Marketplace
- ✅ **14+ professional templates** across 5 industries
- ✅ **Category filtering**: Restaurant, Wellness, Retail, Professional, Hospitality
- ✅ **Live demo links** for each template
- ✅ **Fully responsive** HTML/CSS templates
- ✅ **EmailJS-ready** contact forms in all templates
- ✅ **Google Fonts** integration
- ✅ **Setup documentation** for clients

### Templates Included
1. **Restaurants**: Miazia, La Maison, Miazia Menu
2. **Wellness**: Perspective Massages, Krystelle Wellness, Serenity Yoga, Élégance Beauty Salon
3. **Retail**: Café Moderne
4. **Hospitality**: Le Refuge Boutique Hotel
5. **Professional Services**: Sterling & Associates (accountant/lawyer)

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

## EmailJS Setup

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create a template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{businessType}}` - Business type
   - `{{service}}` - Service interest
   - `{{budget}}` - Budget range
   - `{{message}}` - Message content

4. Copy `.env.local.example` to `.env.local` and add your credentials:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important**: Never commit `.env.local` to git (already in .gitignore)

## Pricing Structure

- **Template Only**: €499 (as-is HTML/CSS)
- **Template + Customization**: €899 (colors, content, images)
- **Template + Branding**: €1,290 (includes logo design)
- **Custom Design**: €1,490 (designed from scratch)
- **Premium Custom**: €2,490 (unlimited pages, branding)
- **Social Media**: From €350/month

## Client Documentation

Template clients receive:
- `template-setup-guide.md` - Complete customization guide
- 30 days email support
- 1 revision round included

## Notes

- Domain-agnostic: No hardcoded domain references
- All images lazy-loaded with Next.js Image
- Contact email: magalhaesjoel5@gmail.com
- Based in Luxembourg
- Serving Luxembourg, Switzerland, and France
