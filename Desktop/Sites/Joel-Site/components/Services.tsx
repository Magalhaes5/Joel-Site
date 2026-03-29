import FadeIn from "./FadeIn";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Websites That Turn Visitors Into Customers",
      description:
        "Like Miazia Restaurant (3x more bookings) and Perspective Wellness (40% more appointments). Professional sites that make your phone ring and your calendar fill up.",
      features: ["Proven conversion design", "Mobile-first approach", "2-7 day delivery", "SEO optimized", "Easy to update", "Results that pay for themselves"],
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Brand Identity That Commands Premium Pricing",
      description:
        "Stand out from competitors with a polished brand that positions you as the premium choice. Professional branding that justifies higher prices and attracts better clients.",
      features: [
        "Memorable logo design",
        "Complete visual identity",
        "Professional brand guidelines",
        "Print-ready assets",
        "Social media templates",
        "Consistent look across all touchpoints",
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Social Media That Drives Real ROI",
      description:
        "Stop posting into the void. Strategic content that builds trust, showcases your work, and turns followers into paying customers. Consistent presence without the daily stress.",
      features: [
        "High-quality content creation",
        "Strategic monthly calendar",
        "Engaging captions + hashtags",
        "Performance tracking & insights",
        "Audience growth strategies",
        "Time saved: 10+ hours/month",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              What We Build
            </h2>
            <p className="text-textMuted font-light text-lg max-w-3xl mx-auto">
              Every project is created from scratch — tailored to your business,
              your audience, and your goals.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
            <div
              key={index}
              className="bg-background border border-border p-8 hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display mb-4">{service.title}</h3>
              <p className="text-textMuted font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-light">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer Note */}
        <FadeIn delay={0.6}>
        <p className="text-center text-textMuted font-light text-sm">
          All services can be combined into a tailored monthly retainer.
        </p>
        </FadeIn>
      </div>
    </section>
  );
}
