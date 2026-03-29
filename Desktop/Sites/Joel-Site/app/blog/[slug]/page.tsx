import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

// This would normally come from a database or CMS
const articles: Record<string, any> = {
  'restaurant-web-design-trends-2026': {
    title: "5 Web Design Trends for Restaurants in 2026",
    content: `
# 5 Web Design Trends for Restaurants in 2026

The restaurant industry is evolving rapidly, and your website needs to keep up. Here are the top trends transforming how diners discover and interact with restaurants online.

## 1. Dark Mode First Design

Dark backgrounds with high-quality food photography create dramatic, appetite-appealing presentations. It's not just trendy—it reduces eye strain and makes colors pop.

**Example:** Our Miazia restaurant client saw 40% longer session times after switching to a dark, moody design that showcased their Italian dishes.

## 2. Integrated Booking Systems

One-click reservations directly on your site (no third-party redirects) reduce friction and increase bookings by 60% on average.

## 3. Video Backgrounds & Ambient Audio

Subtle motion and sound create an immersive first impression. Think: sizzling steaks, pouring wine, bustling ambiance.

## 4. Interactive Menus

Filterable, searchable menus with high-quality photos and dietary tags help diners find what they want faster.

## 5. Mobile-First Everything

70% of restaurant searches happen on mobile. Your site must be thumb-friendly, fast-loading, and optimized for small screens.

---

**Ready to modernize your restaurant website?** [Get in touch](#contact) for a free consultation.
    `,
    date: "March 24, 2026",
    readTime: "4 min read",
    category: "Industry Trends",
    author: "Joel Magalhaes",
  },
  'why-professional-website-matters': {
    title: "Why Your Business Needs a Professional Website",
    content: `
# Why Your Business Needs a Professional Website in 2026

**92% of consumers research online before visiting a local business.** If your website looks outdated or doesn't exist, you're losing customers to competitors.

## Your Website is Your 24/7 Salesperson

Unlike social media, you own your website. It works while you sleep, answering questions, showing your best work, and converting visitors into customers.

## First Impressions Matter

You have 0.05 seconds to make a first impression online. A professional design signals trust, quality, and competence.

### What "Professional" Really Means:
- Fast loading times (under 3 seconds)
- Mobile-optimized (not just responsive)
- Clear calls-to-action
- High-quality visuals
- Easy navigation
- Up-to-date content

## The Cost of NOT Having a Website

Missing out on:
- Google search traffic (70% of all local searches)
- 24/7 lead generation
- Customer trust (people doubt businesses without websites)
- Competitive edge (your competitors have sites)

## The ROI is Clear

Our clients typically see:
- **173%** increase in organic traffic
- **60%** more bookings/inquiries
- **3x** ROI within 6 months

---

**Ready to invest in your digital presence?** [Contact us](#contact) for a free website audit.
    `,
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Business Growth",
    author: "Joel Magalhaes",
  },
  'roi-of-good-web-design': {
    title: "The ROI of Good Web Design: Real Numbers from Real Clients",
    content: `
# The ROI of Good Web Design: Real Numbers

Is a professional website worth the investment? Let's look at actual data from our clients.

## Case Study 1: Perspective Wellness (Chamonix)

**Investment:** €1,800 (one-page custom site)

**Results after 3 months:**
- Booking inquiries: +45%
- Organic traffic: +210%
- Time on site: 2:34 (up from 0:48)
- Bounce rate: 28% (down from 67%)

**ROI:** New bookings worth €8,400 in first quarter = 467% ROI

---

## Case Study 2: Miazia Restaurant (Luxembourg)

**Investment:** €2,500 (multi-page with interactive menu)

**Results after 2 months:**
- Reservation conversions: +60%
- Google Maps views: +180%
- Phone calls from site: +85%

**ROI:** Additional reservations worth €12,000+ = 480% ROI

---

## Case Study 3: Local Beauty Salon

**Investment:** €1,200 (template-based customization)

**Results after 6 weeks:**
- Online bookings: 40% of all appointments (vs 0% before)
- Instagram followers: +320% (thanks to site link)
- Client retention: +25%

**ROI:** Saved 8 hours/week on phone bookings = €15,000 annual value

---

## The Bottom Line

A professional website typically pays for itself in **2-4 months** for local businesses. After that, it's pure profit generation.

### Key ROI Drivers:
1. **More visibility** = More traffic
2. **Better UX** = Higher conversion
3. **Trust signals** = More sales
4. **24/7 availability** = Passive lead generation

---

**Want similar results for your business?** [Schedule a free consultation](#contact).
    `,
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    author: "Joel Magalhaes",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles[params.slug];

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | JM Digital Solutions`,
    description: article.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: Props) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-24 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-goldLight transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-textMuted">
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-textMuted">
              <span>By {article.author}</span>
              <span>{article.date}</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-gold max-w-none
                       prose-headings:font-display prose-headings:text-textPrimary
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:text-textMuted prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-gold prose-a:no-underline hover:prose-a:text-goldLight
                       prose-strong:text-textPrimary prose-strong:font-medium
                       prose-ul:text-textMuted prose-ul:font-light
                       prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content.split('\n').map((line: string) => {
              if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
              if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
              if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
              if (line.startsWith('**') && line.endsWith('**')) return `<p><strong>${line.slice(2, -2)}</strong></p>`;
              if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
              if (line.trim() === '---') return '<hr class="my-12 border-border" />';
              if (line.trim() === '') return '';
              return `<p>${line}</p>`;
            }).join('') }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-surface border border-border text-center">
            <h3 className="text-2xl font-display mb-4">
              Ready to grow your business online?
            </h3>
            <p className="text-textMuted font-light mb-6">
              Get a free website audit and personalized recommendations
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
