export default function TrustStrip() {
  const stats = [
    { value: "12+", label: "Happy Clients" },
    { value: "5-Star", label: "Rated" },
    { value: "2-7 Days", label: "Delivery" },
    { value: "Luxembourg", label: "Serving Luxembourg & Beyond" },
  ];

  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x md:divide-y-0 divide-gold/20">
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
