export default function TrustStrip() {
  const stats = [
    { value: "3", label: "Countries served" },
    { value: "2–5 days", label: "Average delivery" },
    { value: "100%", label: "Built from scratch" },
  ];

  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-4 md:py-0">
              <div className="text-3xl md:text-4xl font-display text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-textMuted font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
