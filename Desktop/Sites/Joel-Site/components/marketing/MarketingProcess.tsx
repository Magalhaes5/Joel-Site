import FadeIn from "../FadeIn";

export default function MarketingProcess() {
  const steps = [
    {
      number: "01",
      title: "Research & Audit",
      description:
        "We dive deep into your business, audience, competitors, and current performance. No guesswork—we analyze data to find the biggest opportunities.",
      details: [
        "Customer & market research",
        "Competitor analysis",
        "Website & funnel audit",
        "Analytics & tracking review",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "We create a custom growth plan with clear goals, timelines, and KPIs. You'll know exactly what we're doing and why it matters.",
      details: [
        "Growth strategy roadmap",
        "Channel selection & prioritization",
        "Content & campaign planning",
        "Success metrics definition",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We execute the plan—writing copy, designing campaigns, setting up systems, and launching tests. Fast, focused, and data-driven.",
      details: [
        "Campaign creation & launch",
        "Website & funnel optimization",
        "Content creation & distribution",
        "Tracking & automation setup",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "We monitor performance, run experiments, and continuously improve. Marketing is never 'done'—we keep optimizing until you hit your goals.",
      details: [
        "A/B testing & experiments",
        "Performance monitoring",
        "Data analysis & insights",
        "Continuous improvement cycles",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
    },
  ];

  return (
    <section id="marketing-process" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              How We Drive Growth
            </h2>
            <p className="text-textMuted font-light text-lg">
              A proven 4-step framework for sustainable, measurable results
            </p>
          </div>
        </FadeIn>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <div className="relative">
                {/* Connecting Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gold/50 to-transparent z-0"></div>
                )}

                <div className="bg-surface border border-border p-8 h-full hover:border-gold transition-colors duration-300 relative z-10">
                  {/* Number Badge */}
                  <div className="w-16 h-16 bg-gold/10 border border-gold flex items-center justify-center mb-4">
                    <span className="text-2xl font-display text-gold">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-gold mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-display mb-3 text-gold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textMuted font-light text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-xs text-textMuted"
                      >
                        <span className="text-gold mt-0.5">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline Note */}
        <FadeIn delay={0.6}>
          <div className="max-w-3xl mx-auto bg-surface border border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-display text-gold mb-2">
                  Week 1-2
                </div>
                <div className="text-sm text-textMuted">
                  Research & Strategy
                </div>
              </div>
              <div>
                <div className="text-3xl font-display text-gold mb-2">
                  Week 3-4
                </div>
                <div className="text-sm text-textMuted">
                  Implementation & Launch
                </div>
              </div>
              <div>
                <div className="text-3xl font-display text-gold mb-2">
                  Ongoing
                </div>
                <div className="text-sm text-textMuted">
                  Testing & Optimization
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-textMuted mb-6">
              Most clients see measurable improvements within{" "}
              <strong className="text-gold">30-60 days</strong>
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors"
            >
              Start Growing Today
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
