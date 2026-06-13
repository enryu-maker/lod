import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import PromoBanner from "@/components/PromoBanner";
import StatMatrix from "@/components/StatMatrix";
import ServiceAreas from "@/components/ServiceAreas";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProofBar />
        <HowItWorks />
        <Pricing />
        <PromoBanner />
        <StatMatrix />
        <ServiceAreas />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
