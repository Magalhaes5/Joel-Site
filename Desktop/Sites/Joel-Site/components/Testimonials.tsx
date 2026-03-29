"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

interface Testimonial {
  name: string;
  business: string;
  location: string;
  quote: string;
  result?: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Marco Benedetti",
      business: "Miazia Restaurant",
      location: "Luxembourg",
      quote: "Joel delivered our custom website in just 7 days — something our previous agency quoted 3 months for. The website perfectly captures the elegance of our Italian cuisine, and we've tripled our online reservations since launch. Worth every euro.",
      result: "3x more online bookings in 2 months",
      rating: 5,
    },
    {
      name: "Claire Dubois",
      business: "Perspective Massages",
      location: "Chamonix, France",
      quote: "Working with JM Digital was effortless. Joel delivered my custom wellness website in 6 days — and it's already paying for itself. The site perfectly reflects my calm, professional approach, and I've seen a 40% increase in appointment requests. Clients specifically mention how easy it is to book.",
      result: "40% more appointments + 5-day delivery",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      business: "Weber & Associates",
      location: "Luxembourg",
      quote: "We needed a corporate site that reflected our professionalism without being boring. Joel delivered exactly that in 8 days—clean, modern, and it positions us perfectly against competitors. Several clients have specifically commented on how professional we look. Best investment we made this year.",
      result: "Delivered in 8 days, not 3 months",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      business: "Café Le Moderne",
      location: "Brussels",
      quote: "We chose the template + customization package at €899 — other agencies wanted €3,500+ for similar work. Joel delivered in just 4 days with everything we needed. Our customers love checking our menu and location online. Incredible value and speed.",
      result: "€899 vs €3,500 quotes + 4-day delivery",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-surface2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Client Success Stories
            </h2>
            <p className="text-textMuted font-light text-lg">
              Real feedback from real businesses we've helped grow
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-background border border-border p-8 hover:border-gold/40 transition-all duration-300 group">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-textPrimary font-light leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                {testimonial.result && (
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
                      ✓ {testimonial.result}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-textPrimary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-textMuted font-light">
                    {testimonial.business} · {testimonial.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-textMuted font-light mb-6">
              Join 12+ businesses that trust us with their digital presence
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gold text-background hover:bg-goldLight transition-colors duration-200 font-medium"
            >
              Start Your Project
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
