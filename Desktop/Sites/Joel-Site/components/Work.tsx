import Image from "next/image";
import FadeIn from "./FadeIn";
import CardTilt from "./CardTilt";

export default function Work() {
  const projects = [
    {
      title: "Perspective Massages",
      category: "Massage & Wellness · Chamonix",
      description:
        "Elegant minimal website for a Swiss massage therapist. Calm aesthetic, service listings, online booking integration, and full brand identity. Professional design that converts visitors into clients.",
      status: "live",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&auto=format&fit=crop&q=80",
      tags: ["Web Design", "Wellness", "Branding"],
      large: true,
      url: "/perspective-wellness.html",
    },
    {
      title: "La Maison",
      category: "Restaurant Template · Demo",
      description:
        "Premium dark restaurant template for fine dining venues. Hero, story section, menu cards, photo gallery, reservation form — fully responsive.",
      status: "template",
      badge: "Template Available",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      tags: ["Web Design", "Restaurant", "Template"],
      large: false,
      url: "/la-maison-demo.html",
    },
    {
      title: "Miazia",
      category: "Restaurant · Luxembourg",
      description:
        "Full website for an Italian restaurant in Luxembourg. Brand identity, food photography integration, reservation system, and full menu display.",
      status: "live",
      badge: "Live Project",
      image: "/miazia-images/CP0031_-scaled.jpg",
      tags: ["Web Design", "Branding", "Restaurant"],
      large: false,
      url: "/miazia-preloader.html",
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
          {/* First card - full width - Miazia */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <CardTilt>
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
              <div className="relative aspect-video overflow-hidden bg-surface2">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-background px-3 py-1 text-xs font-medium">
                  LIVE PROJECT
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-display group-hover:text-gold transition-colors">
                    {projects[0].title}
                  </h3>
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
              </a>
            </CardTilt>
          </FadeIn>

          {/* Second card - La Maison Template */}
          <FadeIn delay={0.4}>
            <CardTilt>
              <a
                href={projects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
              <div className="relative aspect-video overflow-hidden bg-surface2">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-goldLight text-background px-3 py-1 text-xs font-medium">
                  {projects[1].badge}
                </div>
              </div>
              <div className="mt-6">
                <div className="mb-2">
                  <h3 className="text-xl font-display group-hover:text-gold transition-colors">
                    {projects[1].title}
                  </h3>
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
              </a>
            </CardTilt>
          </FadeIn>

          {/* Third card - Wellness Studio */}
          <FadeIn delay={0.6}>
            <CardTilt>
              <a
                href={projects[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
              <div className="relative aspect-video overflow-hidden bg-surface2">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-goldLight text-background px-3 py-1 text-xs font-medium">
                  {projects[2].badge}
                </div>
              </div>
              <div className="mt-6">
                <div className="mb-2">
                  <h3 className="text-xl font-display group-hover:text-gold transition-colors">
                    {projects[2].title}
                  </h3>
                  <span className="text-sm text-textMuted">{projects[2].category}</span>
                </div>
                <p className="text-textMuted font-light text-sm mb-4 leading-relaxed">
                  {projects[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-gold/30 text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </CardTilt>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
