import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import MarketingServices from "@/components/marketing/MarketingServices";
import MarketingResults from "@/components/marketing/MarketingResults";
import MarketingProcess from "@/components/marketing/MarketingProcess";
import MarketingPricing from "@/components/marketing/MarketingPricing";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Digital Marketing Services That Drive Growth",
  description: "Full-stack digital marketing: CRO, SEO, paid ads, and analytics. 173% avg traffic increase. 4.2x ROAS. Month-to-month, no long contracts.",
  keywords: [
    "digital marketing Luxembourg",
    "CRO services",
    "SEO optimization",
    "Google Ads management",
    "conversion rate optimization",
    "growth marketing",
    "paid advertising",
    "marketing consultant",
  ],
  openGraph: {
    title: "Digital Marketing Services That Drive Growth | JM Digital",
    description: "Full-stack digital marketing: CRO, SEO, paid ads, and analytics. 173% avg traffic increase. 4.2x ROAS.",
    type: "website",
    url: "https://jmdigitalsolutions.com/marketing",
    images: [
      {
        url: "/og-image-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "JM Digital Solutions Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services That Drive Growth | JM Digital",
    description: "Full-stack digital marketing: CRO, SEO, paid ads. 173% avg traffic increase. 4.2x ROAS.",
    images: ["/og-image-marketing.jpg"],
  },
};

export default function MarketingPage() {
  const faqs = [
    {
      question: "How is this different from hiring a marketing agency?",
      answer:
        "Traditional agencies charge €5K-€15K/month with long contracts and slow results. We focus on what actually moves the needle: revenue and growth. You get hands-on execution, not just strategy decks. Plus, you can cancel anytime—no 12-month lock-in.",
    },
    {
      question: "What results can I expect in the first 90 days?",
      answer:
        "Most clients see 20-40% improvements in key metrics (conversion rates, traffic, leads, or revenue) within 90 days. We prioritize quick wins first, then build long-term systems. If we don't hit meaningful targets, we keep working until we do.",
    },
    {
      question: "Do you work with businesses outside Europe?",
      answer:
        "Yes! While most of our clients are in Europe (Luxembourg, France, Switzerland, Belgium), we work with English-speaking businesses worldwide. All communication happens via email, Slack, or video calls.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "Perfect! We'll audit it, identify opportunities, and optimize what you have. Most of our marketing clients already have websites—we just make them work harder for your business.",
    },
    {
      question: "Can I combine marketing services with web design?",
      answer:
        "Absolutely. Many clients start with a website project, then continue with ongoing marketing to drive traffic and conversions. We'll create a custom package that fits your needs.",
    },
    {
      question: "What tools and platforms do you use?",
      answer:
        "We're platform-agnostic and use whatever works best for your business: Google Analytics, Google Ads, Meta Ads, Mailchimp, HubSpot, Webflow, WordPress, Shopify, and more. We adapt to your stack.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No. All plans are month-to-month. We believe in earning your business every month through results, not locking you into contracts. Give 30 days' notice to cancel anytime.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We've worked with restaurants, wellness studios, e-commerce, professional services, and B2B companies. The principles of growth marketing apply across industries—we focus on understanding your specific audience and what drives them to buy.",
    },
  ];

  return (
    <>
      <SchemaMarkup type="marketing" />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-background to-surface">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-gold text-sm font-medium mb-4 tracking-wide">
                  MARKETING THAT ACTUALLY CONVERTS
                </div>
                <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
                  Stop Wasting Money on Marketing That Doesn't Work
                </h1>
                <p className="text-xl text-textMuted font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  Get a dedicated growth partner who focuses on one thing: driving measurable results for your business. More traffic. Higher conversions. Real revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#marketing-pricing"
                    className="bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors text-center"
                  >
                    View Pricing
                  </a>
                  <a
                    href="#marketing-results"
                    className="border border-gold text-gold px-8 py-4 font-medium hover:bg-gold hover:text-background transition-all text-center"
                  >
                    See Results
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Social Proof Strip */}
            <FadeIn delay={0.3}>
              <div className="mt-16 pt-12 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-display text-gold mb-2">
                      +173%
                    </div>
                    <div className="text-sm text-textMuted">
                      Average traffic increase
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display text-gold mb-2">
                      4.2x
                    </div>
                    <div className="text-sm text-textMuted">
                      Average ROAS on paid ads
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-display text-gold mb-2">
                      €47K
                    </div>
                    <div className="text-sm text-textMuted">
                      Avg. revenue in first campaign
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Marketing Services */}
        <MarketingServices />

        {/* Results & Case Studies */}
        <MarketingResults />

        {/* Process */}
        <MarketingProcess />

        {/* Pricing */}
        <MarketingPricing />

        {/* FAQ Section */}
        <section id="marketing-faq" className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-textMuted font-light">
                  Everything you need to know about our marketing services
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-surface border border-border p-8 hover:border-gold/30 transition-colors">
                    <h3 className="text-lg font-display mb-3 text-gold">
                      {faq.question}
                    </h3>
                    <p className="text-textMuted font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.8}>
              <div className="text-center mt-12">
                <p className="text-textMuted mb-4">
                  Still have questions?
                </p>
                <a
                  href="#contact"
                  className="text-gold hover:text-goldLight transition-colors font-medium"
                >
                  Get in touch →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-surface to-background">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-textMuted font-light text-lg mb-8 max-w-2xl mx-auto">
                Let's talk about your goals and create a custom growth plan. No sales pitch—just an honest conversation about what's possible.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gold text-background px-10 py-5 text-lg font-medium hover:bg-goldLight transition-colors"
              >
                Book a Free Strategy Call
              </a>
              <p className="text-textMuted text-sm mt-6">
                30-minute call · No commitment · Free audit included
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
