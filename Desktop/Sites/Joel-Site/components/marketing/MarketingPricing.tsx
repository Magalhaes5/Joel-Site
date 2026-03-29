import FadeIn from "../FadeIn";

export default function MarketingPricing() {
  const tiers = [
    {
      name: "Starter",
      price: "€999",
      billing: "per month",
      idealFor: "Small businesses ready to optimize their existing website and start growing",
      features: [
        "Monthly CRO audit & recommendations",
        "Landing page copywriting (1/month)",
        "Basic SEO optimization",
        "Google Analytics setup & tracking",
        "Monthly performance report",
        "Email/Slack support",
      ],
      highlight: false,
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "€1,999",
      billing: "per month",
      idealFor: "Growing businesses wanting a complete marketing system that drives consistent results",
      features: [
        "Everything in Starter, plus:",
        "Full website optimization (CRO)",
        "SEO content strategy (4 articles/month)",
        "Email marketing setup & automation",
        "A/B testing & experimentation",
        "Paid ads management (up to €2K spend)",
        "Bi-weekly strategy calls",
        "Priority support",
      ],
      highlight: true,
      badge: "MOST POPULAR",
      cta: "Start Growing",
    },
    {
      name: "Scale",
      price: "€3,999",
      billing: "per month",
      idealFor: "Established businesses ready to scale aggressively with a dedicated growth partner",
      features: [
        "Everything in Growth, plus:",
        "Multi-channel paid advertising",
        "Advanced conversion optimization",
        "Custom analytics dashboards",
        "Marketing automation & workflows",
        "Growth engineering & experiments",
        "Dedicated account manager",
        "Weekly strategy sessions",
        "Unlimited revisions & support",
      ],
      highlight: false,
      cta: "Let's Scale",
    },
  ];

  const addOns = [
    {
      name: "Social Media Management",
      price: "€350/month",
      description: "12 posts/month, captions, scheduling, performance tracking",
    },
    {
      name: "Extra Ad Spend Management",
      price: "15% of spend",
      description: "For paid ad budgets exceeding package limits",
    },
    {
      name: "Custom Landing Pages",
      price: "€490 each",
      description: "High-converting landing pages for campaigns",
    },
    {
      name: "Video Content Creation",
      price: "€790/month",
      description: "4 short-form videos for ads/social (up to 60s each)",
    },
  ];

  return (
    <section id="marketing-pricing" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Growth-Focused Pricing
            </h2>
            <p className="text-textMuted font-light text-lg">
              Monthly retainers designed to scale with your business. No setup fees. Cancel anytime.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div
                className={`relative bg-background border p-8 flex flex-col h-full ${
                  tier.highlight
                    ? "border-gold shadow-lg shadow-gold/10 scale-105"
                    : "border-border"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 text-xs font-medium">
                    {tier.badge}
                  </div>
                )}

                {/* Tier Name */}
                <h3 className="text-2xl font-display mb-2">{tier.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-display text-gold">
                    {tier.price}
                  </span>
                  <span className="text-textMuted text-sm ml-2">
                    {tier.billing}
                  </span>
                </div>

                {/* Ideal For */}
                <p className="text-textMuted font-light text-sm mb-6 pb-6 border-b border-border">
                  {tier.idealFor}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-light">
                      <svg
                        className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block text-center py-3 font-medium transition-all duration-200 ${
                    tier.highlight
                      ? "bg-gold text-background hover:bg-goldLight"
                      : "border border-gold text-gold hover:bg-gold hover:text-background"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Add-ons Section */}
        <FadeIn delay={0.4}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-display text-center mb-8">
              Optional Add-Ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-background border border-border p-6 hover:border-gold/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{addon.name}</h4>
                    <span className="text-gold font-display text-lg">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-textMuted text-sm font-light">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Money-Back Guarantee */}
        <FadeIn delay={0.5}>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-gold/10 border-2 border-gold/30 p-8 text-center">
              <h3 className="text-2xl font-display text-gold mb-3">
                90-Day Performance Guarantee
              </h3>
              <p className="text-textMuted font-light leading-relaxed">
                If we don't improve your key metrics within 90 days, we'll keep working for free until we do—or refund your last month. Your growth is our reputation.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* FAQ Quick Links */}
        <FadeIn delay={0.6}>
          <div className="text-center">
            <p className="text-textMuted text-sm font-light mb-4">
              Have questions about which plan is right for you?
            </p>
            <a
              href="#marketing-faq"
              className="text-gold hover:text-goldLight transition-colors font-medium"
            >
              Check the FAQ →
            </a>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <p className="text-center text-textMuted text-xs font-light mt-12">
          All prices exclude VAT. Ad spend budgets are separate from management fees.
        </p>
      </div>
    </section>
  );
}
