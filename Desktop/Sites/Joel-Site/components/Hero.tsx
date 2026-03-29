"use client";

import { useState, useEffect } from "react";

const showcaseProjects = [
  {
    name: "Perspective Wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&auto=format&fit=crop&q=80",
    tags: ["Wellness Center", "Booking System", "Premium Design"],
    color: "#7A9B8E"
  },
  {
    name: "Le Refuge Hotel",
    image: "/CP0005_6051-scaled.jpg",
    tags: ["Boutique Hotel", "Ambient Audio", "Luxury"],
    color: "#2C5F7C"
  },
  {
    name: "Café Moderne",
    image: "/Gemini_Generated_Image_c1f57tc1f57tc1f5.png",
    tags: ["Coffee Shop", "Custom Cursor", "Events"],
    color: "#6F4E37"
  },
  {
    name: "Miazia Restaurant",
    image: "/Gemini_Generated_Image_beaulpbeaulpbeau.png",
    tags: ["Restaurant", "Interactive Menu", "Authentic Vibe"],
    color: "#8B4513",
    url: "/miazia-preloader.html"
  }
];

export default function Hero() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % showcaseProjects.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const project = showcaseProjects[currentProject];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`
        }}
      />

      {/* Floating Code Snippets Background Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 font-mono text-xs text-gold animate-float">
          &lt;section className="hero"&gt;
        </div>
        <div className="absolute top-40 right-20 font-mono text-xs text-gold animate-float-delayed">
          display: grid;
        </div>
        <div className="absolute bottom-40 left-20 font-mono text-xs text-gold animate-float">
          transition: all 0.3s;
        </div>
        <div className="absolute bottom-20 right-40 font-mono text-xs text-gold animate-float-delayed">
          &lt;/section&gt;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div>
          <div className="inline-block px-4 py-1 border border-gold/30 text-gold text-sm mb-6">
            Web Design × Marketing × Development
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-tight">
            We Don't Just Build Websites.
            <br />
            <span className="text-gold italic">We Build Revenue Engines.</span>
          </h1>

          <p className="text-lg md:text-xl text-textMuted font-light mb-8 leading-relaxed max-w-xl">
            Custom websites that convert visitors into customers. Built with marketing psychology,
            optimized for search engines, delivered in 7 days.
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Conversion-Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SEO-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mobile-First</span>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold">★★★★★</span>
              <span className="text-sm text-textMuted">5.0 from 12+ clients</span>
            </div>
            <p className="text-xs text-textMuted">
              🔥 Only 3 project slots available this month
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-all duration-200 text-center group"
            >
              <span className="inline-flex items-center gap-2">
                Explore Our Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="border-2 border-gold text-gold px-8 py-4 font-medium hover:bg-gold hover:text-background transition-all duration-200 text-center"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Right: Interactive Project Showcase */}
        <div className="relative">
          {/* Main Showcase Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div
              className="absolute -inset-4 rounded-lg opacity-20 blur-2xl transition-all duration-1000"
              style={{ background: project.color }}
            />

            {/* Showcase Container */}
            <div className={`relative bg-cardBg border-2 border-gold/20 rounded-lg overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Browser Chrome */}
              <div className="bg-background/50 border-b border-gold/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex-1 bg-background/30 rounded px-3 py-1 text-xs text-textMuted font-mono ml-4">
                  {project.name.toLowerCase().replace(/\s+/g, '')}.com
                </div>
              </div>

              {/* Project Image */}
              <div className="aspect-[16/10] bg-background overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80`;
                  }}
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-display text-gold mb-2">{project.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gold/20 text-gold border border-gold/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {showcaseProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentProject(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentProject
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`View ${showcaseProjects[idx].name}`}
                />
              ))}
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute -left-8 top-20 bg-cardBg border border-gold/20 px-4 py-3 rounded shadow-lg animate-float hidden lg:block">
            <div className="text-2xl font-display text-gold">173%</div>
            <div className="text-xs text-textMuted">Traffic Increase</div>
          </div>

          <div className="absolute -right-8 bottom-32 bg-cardBg border border-gold/20 px-4 py-3 rounded shadow-lg animate-float-delayed hidden lg:block">
            <div className="text-2xl font-display text-gold">7 Days</div>
            <div className="text-xs text-textMuted">Average Delivery</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 3s;
        }
      `}</style>
    </section>
  );
}
