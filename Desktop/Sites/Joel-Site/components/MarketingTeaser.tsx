import FadeIn from "./FadeIn";
import Link from "next/link";

export default function MarketingTeaser() {
  const services = [
    {
      icon: "📈",
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with data-driven testing",
    },
    {
      icon: "🔍",
      title: "SEO & Content Strategy",
      description: "Rank higher on Google and attract qualified traffic",
    },
    {
      icon: "🎯",
      title: "Paid Advertising",
      description: "Google Ads, Meta Ads campaigns that deliver ROI",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="text-gold text-sm font-medium mb-4 tracking-wide">
              BEYOND WEB DESIGN
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Need Help Growing Your Traffic?
            </h2>
            <p className="text-textMuted font-light text-lg max-w-3xl mx-auto">
              A beautiful website is just the start. We also offer full-stack digital marketing to help you drive traffic, increase conversions, and grow revenue.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-surface border border-border p-8 text-center hover:border-gold/30 transition-colors">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display mb-3">{service.title}</h3>
                <p className="text-textMuted font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats Strip */}
        <FadeIn delay={0.4}>
          <div className="bg-gold/10 border border-gold/30 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-display text-gold mb-1">+173%</div>
                <div className="text-sm text-textMuted">Avg. traffic increase</div>
              </div>
              <div>
                <div className="text-3xl font-display text-gold mb-1">4.2x</div>
                <div className="text-sm text-textMuted">Avg. ROAS on paid ads</div>
              </div>
              <div>
                <div className="text-3xl font-display text-gold mb-1">€47K</div>
                <div className="text-sm text-textMuted">Avg. revenue per campaign</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center">
            <Link
              href="/marketing"
              className="inline-block bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors"
            >
              Explore Marketing Services
            </Link>
            <p className="text-textMuted text-sm mt-4">
              Month-to-month plans • No long-term contracts • Results-focused
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
