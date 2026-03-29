import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Blog() {
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

  return (
    <section id="blog" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Insights & Resources
            </h2>
            <p className="text-textMuted font-light text-lg">
              Web design tips, industry trends, and business growth strategies
            </p>
          </div>
        </FadeIn>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link href={`/blog/${article.slug}`}>
                <article className="group h-full bg-background border border-border hover:border-gold transition-colors duration-300">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-gold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-textMuted">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display mb-4 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>

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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
