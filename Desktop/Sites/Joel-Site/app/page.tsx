import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Work from "@/components/Work";
import Templates from "@/components/Templates";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MarketingTeaser from "@/components/MarketingTeaser";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup type="home" />
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Work />
        <Templates />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <MarketingTeaser />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
