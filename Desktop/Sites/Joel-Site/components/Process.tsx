import FadeIn from "./FadeIn";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We start with a 30-minute conversation to understand your business, audience, and goals. No fluff—just real talk about what you need.",
      details: [
        "Understand your brand identity",
        "Identify target audience",
        "Define success metrics",
        "Discuss timeline & budget",
      ],
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "We create a custom website tailored to your brand. You'll see mockups, provide feedback, and watch your vision come to life—no surprises.",
      details: [
        "Custom design mockups",
        "2 revision rounds included",
        "Mobile-first development",
        "Real-time progress updates",
      ],
    },
    {
      number: "03",
      title: "Launch & Support",
      description:
        "Your site goes live with full training, analytics setup, and 30 days of support. We don't disappear after launch—we ensure your success.",
      details: [
        "Domain & hosting setup",
        "SEO optimization",
        "Analytics integration",
        "30-day support included",
      ],
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              How We Work
            </h2>
            <p className="text-textMuted font-light text-lg">
              A simple, transparent process from first call to launch
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.2}>
              <div className="relative">
                {/* Connecting Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-gold/50 to-transparent"></div>
                )}

                <div className="bg-background border border-border p-8 h-full hover:border-gold transition-colors duration-300">
                  {/* Number Badge */}
                  <div className="w-16 h-16 bg-gold/10 border border-gold flex items-center justify-center mb-6">
                    <span className="text-2xl font-display text-gold">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display mb-4 text-gold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textMuted font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-textMuted"
                      >
                        <span className="text-gold mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-textMuted mb-6">
              Most projects launch within <strong className="text-gold">2-4 weeks</strong>
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
