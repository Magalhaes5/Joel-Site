"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites are delivered in 5-10 days. Template-based sites take 5 days, custom designs take 7-10 days, and full brand packages take 10-14 days. Rush delivery available for urgent projects.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Everything you need for a professional online presence: custom design, mobile optimization, contact forms, basic SEO, hosting setup guidance, and post-launch support. No hidden fees or surprise charges.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "We help you set up hosting with recommended providers (usually €5-15/month). We'll guide you through the entire process and can manage it for you if needed. Domain registration assistance included.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes! We build on user-friendly platforms or provide easy-to-update solutions. We'll train you on how to make basic changes. Ongoing maintenance packages available if you prefer hands-off management.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "All packages include support: 30-60 days depending on your package. Minor tweaks and bug fixes are covered. After that, we offer affordable maintenance packages or pay-per-change options.",
    },
    {
      question: "Do you work with businesses outside Luxembourg?",
      answer:
        "Absolutely! While based in Luxembourg and Switzerland, we work with clients across Europe and beyond. All communication happens remotely via email, video calls, and collaboration tools.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "Just the basics: your business info, content (text and images), branding assets (if you have them), and examples of sites you like. We'll guide you through everything in our kickoff call.",
    },
    {
      question: "What if I don't like the design?",
      answer:
        "Every package includes revision rounds (2-3 depending on the package). We work with you until you're happy. Plus, our 30-day satisfaction guarantee means you're never stuck with something you don't love.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-textMuted font-light text-lg">
              Everything you need to know about working with us
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="border border-border bg-background">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-surface transition-colors"
                >
                  <h3 className="text-lg font-display pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gold flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-textMuted font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12 pt-12 border-t border-border">
            <p className="text-textMuted mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="text-gold hover:text-goldLight transition-colors font-medium"
            >
              Get in touch - we're happy to help
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
