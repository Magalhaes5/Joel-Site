import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Work from "@/components/Work";
import Templates from "@/components/Templates";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SchemaMarkup type="home" />
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Work />
        <Templates />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
