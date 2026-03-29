import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Web Design Tips & Business Growth',
  description: 'Expert insights on web design, SEO, and digital marketing for local businesses in Europe.',
};

const articles = [
  {
    title: "5 Web Design Trends for Restaurants in 2026",
    excerpt:
      "Dark modes, immersive media, and booking integrations are transforming how diners discover restaurants online.",
    date: "March 24, 2026",
    readTime: "4 min read",
    slug: "restaurant-web-design-trends-2026",
    category: "Industry Trends",
  },
  {
    title: "Why Your Business Needs a Professional Website",
    excerpt:
      "92% of consumers research online before visiting. Your website is your 24/7 salesperson, brand ambassador, and first impression.",
    date: "March 20, 2026",
    readTime: "5 min read",
    slug: "why-professional-website-matters",
    category: "Business Growth",
  },
  {
    title: "The ROI of Good Web Design: Real Numbers",
    excerpt:
      "Our clients see 45% booking increases and 3x traffic growth. Here's how professional design pays for itself in months.",
    date: "March 15, 2026",
    readTime: "6 min read",
    slug: "roi-of-good-web-design",
    category: "Case Studies",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              Insights & Resources
            </h1>
            <p className="text-textMuted font-light text-xl max-w-3xl mx-auto">
              Web design tips, industry trends, and business growth strategies for local businesses
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="h-full bg-surface border border-border hover:border-gold transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-gold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-textMuted">
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-display mb-4 group-hover:text-gold transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-textMuted font-light leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-textMuted">
                        {article.date}
                      </span>
                      <span className="text-gold group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center p-8 bg-surface border border-border">
            <p className="text-textMuted font-light text-lg">
              More articles coming soon! Subscribe to our newsletter for updates.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-gold hover:text-goldLight transition-colors font-medium"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
