import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Work />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
