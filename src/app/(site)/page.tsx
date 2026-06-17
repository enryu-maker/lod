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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LOD",
  "description": "Premium laundry pickup and delivery service in Boston. We pick up, wash, fold, and deliver.",
  "url": "https://lodvalet.com",
  "telephone": "(857) 280-0992",
  "email": "hello@lodvalet.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "addressCountry": "US"
  },
  "areaServed": [
    "Back Bay Boston",
    "Brookline MA",
    "Fenway Boston",
    "Mission Hill Boston",
    "Longwood Boston",
    "Prudential Boston"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 07:00-20:00",
  "sameAs": [
    "https://instagram.com/lodvalet"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Laundry Pickup and Delivery",
  "provider": {
    "@type": "LocalBusiness",
    "name": "LOD"
  },
  "areaServed": "Boston, MA",
  "offers": [
    {
      "@type": "Offer",
      "name": "Essential",
      "price": "41.99",
      "priceCurrency": "USD",
      "description": "Next day laundry pickup and delivery"
    },
    {
      "@type": "Offer",
      "name": "Express",
      "price": "53.49",
      "priceCurrency": "USD",
      "description": "Same day laundry pickup and delivery"
    },
    {
      "@type": "Offer",
      "name": "Rush",
      "price": "64.99",
      "priceCurrency": "USD",
      "description": "6-hour laundry pickup and delivery"
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
    </>
  );
}
