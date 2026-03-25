import FadeIn from "./FadeIn";

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      price: "€799",
      billing: "one-time",
      idealFor: "New businesses needing a clean online presence fast",
      features: [
        "1-page website (scroll sections)",
        "Mobile responsive",
        "Contact form",
        "Google Maps integration",
        "Delivery in 5 days",
        "1 revision round",
      ],
      highlight: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "€1,490",
      billing: "one-time",
      idealFor: "Restaurants, wellness, and service businesses",
      features: [
        "Up to 5 pages",
        "Custom design from scratch",
        "Photo gallery or menu section",
        "Reservation or contact form",
        "Basic SEO setup",
        "Delivery in 7–10 days",
        "2 revision rounds",
        "1 month support included",
      ],
      highlight: true,
      badge: "Most Popular",
      cta: "Start Project",
    },
    {
      name: "Premium",
      price: "€2,490",
      billing: "one-time",
      idealFor: "Brands wanting a full digital presence",
      features: [
        "Unlimited pages",
        "Full brand identity included",
        "Advanced animations",
        "Blog or news section",
        "Multilingual support",
        "Priority delivery",
        "3 months support included",
      ],
      highlight: false,
      cta: "Let's Talk",
    },
    {
      name: "Social Media",
      price: "From €350",
      billing: "per month",
      idealFor: "Businesses wanting consistent content without the hassle",
      features: [
        "12 posts per month",
        "Captions + hashtags",
        "Content calendar",
        "Instagram + Facebook",
        "Monthly report",
      ],
      highlight: false,
      cta: "Get a Quote",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Clear Pricing. No Surprises.
            </h2>
            <p className="text-textMuted font-light text-lg">
              You know exactly what you get — before you sign anything.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-surface border p-8 flex flex-col ${
                pkg.highlight
                  ? "border-gold shadow-lg shadow-gold/10 scale-105"
                  : "border-border"
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

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-display text-gold">
                  {pkg.price}
                </span>
                <span className="text-textMuted text-sm ml-2">
                  {pkg.billing}
                </span>
              </div>

              {/* Ideal For */}
              <p className="text-textMuted font-light text-sm mb-6 pb-6 border-b border-border">
                {pkg.idealFor}
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
                href="#contact"
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

        {/* Disclaimer */}
        <p className="text-center text-textMuted text-xs font-light">
          Prices are indicative. Final quote provided after brief. VAT may apply.
        </p>
      </div>
    </section>
  );
}
