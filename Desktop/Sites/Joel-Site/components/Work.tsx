import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Work() {
  const projects = [
    {
      title: "Miazia",
      category: "Restaurant · Luxembourg",
      description:
        "Full website for an Italian restaurant in Luxembourg. Brand identity, food photography integration, reservation system, full menu display and multilingual content.",
      status: "live",
      image: "/miazia-images/CP0031_-scaled.jpg",
      tags: ["Web Design", "Branding", "Restaurant"],
      large: true,
    },
    {
      title: "La Maison",
      category: "Restaurant Template · Demo",
      description:
        "Premium dark restaurant template for fine dining venues. Hero, story section, menu cards, photo gallery, reservation form — fully responsive.",
      status: "template",
      badge: "Template Available",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
      tags: ["Web Design", "Restaurant", "Template"],
      large: false,
    },
    {
      title: "Wellness Studio",
      category: "Massage & Wellness · Switzerland",
      description:
        "Elegant minimal website for a Swiss massage therapist. Calm aesthetic, service listings, online booking and full brand identity.",
      status: "coming_soon",
      badge: "Coming Soon",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
      tags: ["Web Design", "Wellness", "Branding"],
      large: false,
      comingSoon: true,
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Selected Work
            </h2>
            <p className="text-textMuted font-light text-lg">
              Real projects. Real clients. Real results.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First card - full width */}
          <FadeIn delay={0.2} className="md:col-span-2">
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface2">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-gold text-background px-3 py-1 text-xs font-medium">
                LIVE PROJECT
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-display">{projects[0].title}</h3>
                <span className="text-sm text-textMuted">{projects[0].category}</span>
              </div>
              <p className="text-textMuted font-light mb-4 leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-gold/30 text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Second card - side by side */}
          <FadeIn delay={0.4}>
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface2">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-goldLight text-background px-3 py-1 text-xs font-medium">
                {projects[1].badge}
              </div>
            </div>
            <div className="mt-6">
              <div className="mb-2">
                <h3 className="text-xl font-display">{projects[1].title}</h3>
                <span className="text-sm text-textMuted">{projects[1].category}</span>
              </div>
              <p className="text-textMuted font-light text-sm mb-4 leading-relaxed">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-gold/30 text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Third card - coming soon with overlay */}
          <FadeIn delay={0.6}>
          <div className="group cursor-not-allowed">
            <div className="relative aspect-video overflow-hidden bg-surface2">
              <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block bg-gold/10 border border-gold px-6 py-3 mb-4">
                    <span className="text-gold font-medium">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-display mb-2">{projects[2].title}</h3>
                  <p className="text-textMuted text-sm">{projects[2].category}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-textMuted font-light text-sm leading-relaxed">
                {projects[2].description}
              </p>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
