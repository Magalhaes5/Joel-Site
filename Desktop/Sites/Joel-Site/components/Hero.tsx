"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grain-overlay">
      <div className="max-w-5xl mx-auto px-6 text-center py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 leading-tight">
          We build{" "}
          <span className="italic font-display text-gold">websites</span>
          <br />
          that win clients.
        </h1>

        <p className="text-lg md:text-xl text-textMuted font-light max-w-3xl mx-auto mb-12 leading-relaxed">
          Custom websites for restaurants, wellness businesses, and ambitious local brands.
          Built to impress — delivered fast.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="bg-gold text-background px-8 py-3 font-medium hover:bg-goldLight transition-colors duration-200 w-full sm:w-auto text-center"
          >
            See Our Work
          </a>
          <a
            href="#pricing"
            className="border border-gold text-gold px-8 py-3 font-light hover:bg-gold hover:text-background transition-all duration-200 w-full sm:w-auto text-center"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Horizontal gold divider */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold opacity-30" />

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
