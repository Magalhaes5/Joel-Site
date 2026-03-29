import FadeIn from "../FadeIn";

export default function MarketingResults() {
  const metrics = [
    {
      value: "+173%",
      label: "Increase in Organic Traffic",
      description: "Miazia Restaurant (6 months)",
    },
    {
      value: "+37%",
      label: "Conversion Rate Improvement",
      description: "E-commerce client (Q1 2024)",
    },
    {
      value: "€47K",
      label: "Revenue Generated",
      description: "Wellness studio (first campaign)",
    },
    {
      value: "4.2x",
      label: "Average ROAS",
      description: "Across all paid campaigns",
    },
  ];

  const caseStudies = [
    {
      client: "Miazia Restaurant",
      industry: "Hospitality",
      challenge: "Low online visibility, few direct bookings, relying on third-party platforms.",
      solution: "Complete SEO overhaul, local optimization, conversion-focused website redesign, and Google Ads campaign.",
      results: [
        "+173% organic search traffic",
        "+3x direct reservations",
        "40% reduction in platform fees",
        "#1 ranking for 'Italian restaurant Luxembourg'",
      ],
      image: "/miazia-images/CP0031_-scaled.jpg",
    },
    {
      client: "Perspective Wellness",
      industry: "Wellness & Massage",
      challenge: "New business, zero online presence, struggling to fill calendar.",
      solution: "Brand identity, conversion-optimized website, local SEO, and targeted Facebook/Instagram ads.",
      results: [
        "80% calendar occupancy in 3 months",
        "+40% appointment bookings",
        "€12K revenue from first campaign",
        "Built email list of 340+ subscribers",
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const logos = [
    { name: "Miazia", letter: "M" },
    { name: "Perspective", letter: "P" },
    { name: "La Maison", letter: "L" },
  ];

  return (
    <section id="marketing-results" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Real Results, Real Numbers
            </h2>
            <p className="text-textMuted font-light text-lg">
              We don't do vanity metrics. Here's what actually matters: revenue and growth.
            </p>
          </div>
        </FadeIn>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-surface border border-border p-8 text-center hover:border-gold/40 transition-colors">
                <div className="text-5xl font-display text-gold mb-3">
                  {metric.value}
                </div>
                <div className="text-lg font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-textMuted font-light">
                  {metric.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <FadeIn key={index} delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-gold text-sm font-medium mb-2">
                    CASE STUDY
                  </div>
                  <h3 className="text-3xl font-display mb-2">{study.client}</h3>
                  <div className="text-textMuted text-sm mb-6">
                    {study.industry}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gold font-medium mb-2">The Challenge</h4>
                    <p className="text-textMuted font-light leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gold font-medium mb-2">Our Solution</h4>
                    <p className="text-textMuted font-light leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-gold font-medium mb-3">The Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5"
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
                          <span className="text-textMuted font-light">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-video overflow-hidden bg-surface">
                    <img
                      src={study.image}
                      alt={`${study.client} - ${study.industry} marketing success case study`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Client Logos */}
        <FadeIn delay={0.4}>
          <div className="mt-24 border-t border-border pt-16">
            <p className="text-center text-textMuted mb-8 font-light">
              Trusted by ambitious businesses across Europe
            </p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="w-20 h-20 border border-gold/30 flex items-center justify-center hover:border-gold transition-colors"
                >
                  <span className="text-3xl font-display text-gold italic">
                    {logo.letter}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
