"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

type Category = "All" | "Restaurant" | "Wellness" | "Retail" | "Professional" | "Hospitality";

interface Template {
  title: string;
  category: Category;
  description: string;
  image: string;
  demoUrl: string;
  features: string[];
}

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const templates: Template[] = [
    // Creative/Agency
    {
      title: "Apex Creative Agency",
      category: "Professional",
      description: "High-end agency template with 3D block clock preloader, particle animations, magnetic cursor, and 3D card effects.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/clock-preloader-final.html",
      features: ["3D Clock Preloader", "Particle Canvas", "Magnetic Cursor"],
    },
    {
      title: "La Maison",
      category: "Restaurant",
      description: "Dark luxury fine dining template with navigation, menu cards, and reservation form.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/la-maison-demo.html",
      features: ["Dark Theme", "Menu Grid", "Booking Form"],
    },
    {
      title: "Miazia Menu",
      category: "Restaurant",
      description: "Full interactive menu experience with food photography and Italian specialties.",
      image: "/miazia-images/0001-2024.02.21-MIAZIA-0328-done.jpg",
      demoUrl: "/miazia-preloader.html",
      features: ["Interactive Menu", "Food Photos", "Multi-course"],
    },
    {
      title: "Perspective Massages",
      category: "Wellness",
      description: "Calm wellness site for massage therapist with services, pricing, and booking.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/perspective-wellness.html",
      features: ["Service List", "Pricing", "Contact Form"],
    },
    // New templates
    {
      title: "Café Moderne",
      category: "Retail",
      description: "Hipster coffee shop with menu grid, Instagram feed, and location map.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/cafe-moderne-template.html",
      features: ["Menu Grid", "Instagram Feed", "Location Map"],
    },
    {
      title: "Élégance Beauty Salon",
      category: "Wellness",
      description: "Elegant salon template with services, gallery, and booking system.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/beauty-salon-template.html",
      features: ["Service Pricing", "Photo Gallery", "Booking Form"],
    },
    {
      title: "Serenity Yoga Studio",
      category: "Wellness",
      description: "Calm yoga studio with class schedule, instructor profiles, and pricing.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/yoga-studio-template.html",
      features: ["Class Schedule", "Instructors", "Membership Plans"],
    },
    {
      title: "Le Refuge Hotel",
      category: "Hospitality",
      description: "Luxury boutique hotel with room gallery, amenities, and booking integration.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/boutique-hotel-template.html",
      features: ["Room Gallery", "Amenities", "Booking System"],
    },
    {
      title: "Sterling & Associates",
      category: "Professional",
      description: "Clean corporate template for accountants, lawyers, and professional services.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      demoUrl: "/professional-services-template.html",
      features: ["Service Pages", "Team Profiles", "Contact Form"],
    },
  ];

  const categories: Category[] = ["All", "Restaurant", "Wellness", "Retail", "Professional", "Hospitality"];

  const filteredTemplates = activeCategory === "All"
    ? templates
    : templates.filter(t => t.category === activeCategory);

  return (
    <section id="templates" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Template Collection
            </h2>
            <p className="text-textMuted font-light text-lg max-w-3xl mx-auto mb-8">
              Ready-made templates you can customize. Choose a design, we'll adapt it to your brand.
            </p>
            <p className="text-gold font-medium text-xl">
              From €499 · Fully customizable
            </p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-background"
                    : "bg-surface2 text-textMuted hover:bg-gold/20 hover:text-gold border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <FadeIn key={template.title} delay={index * 0.1}>
              <div className="bg-background border border-border overflow-hidden group hover:border-gold/40 transition-all duration-300">
                {/* Template Image */}
                <div className="relative aspect-video overflow-hidden bg-surface2">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-gold/90 text-background px-3 py-1 text-xs font-medium">
                    {template.category}
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display mb-2 group-hover:text-gold transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-textMuted font-light text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-surface2 text-textMuted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-200 text-sm font-medium"
                    >
                      View Demo
                    </a>
                    <a
                      href="#contact"
                      className="flex-1 text-center py-2 bg-gold text-background hover:bg-goldLight transition-all duration-200 text-sm font-medium"
                    >
                      Customize
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-16 p-8 bg-background border border-border">
            <h3 className="text-2xl font-display mb-3">
              Don't See What You Need?
            </h3>
            <p className="text-textMuted font-light mb-6">
              We can create a custom design from scratch or modify any template to match your vision.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gold text-background hover:bg-goldLight transition-colors duration-200 font-medium"
            >
              Request Custom Design
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
