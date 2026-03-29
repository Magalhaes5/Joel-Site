"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Templates", href: "#templates" },
    { label: "Services", href: "#services" },
    { label: "Marketing", href: "/marketing" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-gold font-display italic text-2xl">JM</span>
          <span className="text-textPrimary font-body font-light text-sm tracking-wide">
            Digital Solutions
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className="text-textMuted hover:text-gold transition-colors duration-200 text-sm font-light"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-textMuted hover:text-gold transition-colors duration-200 text-sm font-light"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-gold text-background px-5 py-2 text-sm font-medium hover:bg-goldLight transition-colors duration-200"
        >
          Start a Project
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textPrimary"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
