import FadeIn from "./FadeIn";

export default function Pricing() {
  const packages = [
    {
      name: "Website Starter",
      description: "Perfect for small businesses ready to go online",
      features: [
        "Professional template customization",
        "Custom colors & branding",
        "Mobile-optimized design",
        "Contact form setup",
        "Fast 5-7 day delivery",
        "2 revision rounds",
        "30-day support",
      ],
      highlight: false,
      cta: "Get Custom Quote",
      ctaLink: "#contact",
    },
    {
      name: "Custom Website",
      description: "Unique design built specifically for your business",
      features: [
        "100% custom design from scratch",
        "Up to 5 pages",
        "Photo galleries & menus",
        "Booking & contact forms",
        "Advanced SEO optimization",
        "3 revision rounds",
        "60-day premium support",
      ],
      highlight: true,
      badge: "MOST POPULAR",
      cta: "Get Custom Quote",
      ctaLink: "#contact",
    },
    {
      name: "Complete Brand Package",
      description: "Full brand identity + professional website",
      features: [
        "Complete brand identity design",
        "Logo, colors & typography",
        "Custom website (5 pages)",
        "Brand guidelines document",
        "Social media templates",
        "Business cards & materials",
        "90-day premium support",
      ],
      highlight: false,
      cta: "Get Custom Quote",
      ctaLink: "#contact",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Investment That Pays For Itself
            </h2>
            <p className="text-textMuted font-light text-lg max-w-2xl mx-auto">
              Every project is unique. Let's discuss your needs and create a custom solution that fits your budget and goals.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background border p-8 flex flex-col transition-all duration-300 hover:shadow-xl ${
                pkg.highlight
                  ? "border-gold shadow-lg shadow-gold/10 md:scale-105"
                  : "border-border hover:border-gold/50"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 text-xs font-medium">
                  {pkg.badge}
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-display mb-2">{pkg.name}</h3>

              {/* Description */}
              <p className="text-textMuted font-light text-sm mb-6 pb-6 border-b border-border">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
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
                href={pkg.ctaLink || "#contact"}
                className={`block text-center py-3 font-medium transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-gold text-background hover:bg-goldLight"
                    : "border border-gold text-gold hover:bg-gold hover:text-background"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-surface border border-border p-8">
            <h3 className="text-xl font-display mb-6 text-center">
              Why Invest In A Professional Website?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-display text-gold mb-2">24/7</div>
                <p className="text-textMuted font-light">
                  Your website works around the clock attracting customers while you sleep
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-gold mb-2">3x</div>
                <p className="text-textMuted font-light">
                  Our clients see an average 3x increase in customer inquiries
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-gold mb-2">ROI</div>
                <p className="text-textMuted font-light">
                  Most clients recover their investment within the first 2-3 months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Guarantee Box */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gold/10 border-2 border-gold/30 p-8 text-center">
            <h3 className="text-2xl font-display text-gold mb-3">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-textMuted font-light leading-relaxed">
              We'll work with you until you're completely satisfied with your website. Your success is our success.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-textMuted text-sm font-light mb-4">
            Ready to discuss your project? Let's create something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-background px-10 py-4 font-medium hover:bg-goldLight transition-all duration-200"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
