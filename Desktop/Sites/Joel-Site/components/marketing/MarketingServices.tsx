import FadeIn from "../FadeIn";

export default function MarketingServices() {
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Turn more visitors into customers. We analyze user behavior, identify friction points, and implement changes that boost conversions by 20-50%.",
      features: [
        "Heatmaps & user session analysis",
        "A/B testing & experimentation",
        "Checkout flow optimization",
        "Landing page optimization",
        "Call-to-action optimization",
        "Form & UX improvements",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: "Copywriting & Content",
      description:
        "Words that sell. Strategic copy that speaks directly to your audience's pain points and drives them to take action.",
      features: [
        "Website copy that converts",
        "Email sequences & automation",
        "Landing page copy",
        "Ad copy & creative",
        "Product descriptions",
        "Voice & brand messaging",
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "SEO & Discovery",
      description:
        "Get found by customers actively searching for what you offer. Strategic SEO that brings qualified traffic and grows month after month.",
      features: [
        "Keyword research & strategy",
        "Technical SEO audits",
        "On-page optimization",
        "Content strategy & planning",
        "Local SEO for businesses",
        "Performance tracking & reporting",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Paid Advertising",
      description:
        "Profitable ad campaigns on Google, Meta, and LinkedIn. We focus on ROI—every euro spent should bring back more in revenue.",
      features: [
        "Google Ads management",
        "Meta Ads (Facebook & Instagram)",
        "LinkedIn advertising",
        "Campaign strategy & setup",
        "Ad creative & copywriting",
        "ROI tracking & optimization",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Analytics & Testing",
      description:
        "Make decisions based on data, not guesswork. We track what matters, run experiments, and continuously improve performance.",
      features: [
        "GA4 setup & dashboards",
        "Event tracking & goals",
        "A/B testing frameworks",
        "User behavior analysis",
        "Custom reporting",
        "Data-driven recommendations",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Growth Engineering",
      description:
        "Technical growth hacks and automation. From referral systems to email sequences—we build growth into your product.",
      features: [
        "Automation & workflows",
        "Email marketing systems",
        "Referral programs",
        "Lead magnets & funnels",
        "CRM integration",
        "Growth experiments",
      ],
    },
  ];

  return (
    <section id="marketing-services" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Full-Stack Marketing Services
            </h2>
            <p className="text-textMuted font-light text-lg max-w-3xl mx-auto">
              Everything you need to attract, convert, and retain customers. No fluff—just strategies that drive measurable growth.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-background border border-border p-8 hover:border-gold/40 transition-all duration-300 group h-full flex flex-col">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display mb-4">{service.title}</h3>
                <p className="text-textMuted font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-light">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0" />
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
          <div className="text-center mt-16">
            <p className="text-textMuted font-light mb-6">
              All services work together as a complete growth system
            </p>
            <a
              href="#marketing-pricing"
              className="inline-block bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors"
            >
              View Pricing
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
