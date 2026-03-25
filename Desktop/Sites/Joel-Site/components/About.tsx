import FadeIn from "./FadeIn";

export default function About() {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "3", label: "Countries active" },
    { value: "5", label: "Languages spoken" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <FadeIn>
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              A studio built on craft, not on shortcuts.
            </h2>

            <div className="space-y-6 text-textMuted font-light leading-relaxed">
              <p>
                JM Digital Solutions is a one-person digital studio run by Joel
                Magalhães — a designer and developer based between Luxembourg
                and Switzerland with nearly a decade of experience working with
                businesses across Europe.
              </p>

              <p>
                Every website is built from scratch, designed with intention,
                and delivered with care. No page-builders. No recycled
                templates. Just honest, high-quality work for clients who value
                their online presence.
              </p>

              <p>
                Fluent in English, French, Portuguese, German and Luxembourgish
                — communication is never a barrier.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-display text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-textMuted font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Right Column - Logo/Brand Display */}
          <FadeIn delay={0.3}>
          <div className="flex items-center justify-center">
            <div className="bg-surface2 border border-border p-16 w-full max-w-md aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  {/* Geometric mark */}
                  <div className="w-8 h-8 border-2 border-gold rotate-45" />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-gold font-display italic text-5xl">
                    JM
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-textPrimary font-body font-light text-sm tracking-widest block">
                    DIGITAL SOLUTIONS
                  </span>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-textMuted text-xs font-light italic">
                    Websites that work. Brands that last.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
