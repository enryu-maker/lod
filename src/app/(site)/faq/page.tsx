import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqPageContent from "@/components/faq/FaqPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | LOD",
  description:
    "Find answers to common questions about LOD's premium laundry pickup and delivery service, cleaning process, pricing, streak rewards, and referrals.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens if I'm not home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No problem! You can leave your bag with your building's concierge, on your porch, or specify a secure drop-off/pickup location in the app. Just update your delivery instructions before our driver arrives."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a delivery fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delivery is completely free for all standard bag tiers. There are no hidden service fees, delivery surcharges, or fuel fees. The price you see is the price you pay."
      }
    },
    {
      "@type": "Question",
      "name": "Where do you deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LOD currently operates in Boston neighborhoods including Back Bay, Brookline, Fenway/Kenmore, Prudential, Mission Hill, and Longwood. We are expanding soon to Allston, Brighton, Cambridge, and Somerville."
      }
    },
    {
      "@type": "Question",
      "name": "Do you mix my clothes with others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Never. Every customer order is washed, dried, and folded separately in its own dedicated state-of-the-art machine. We guarantee 100% individual processing for hygiene and care."
      }
    },
    {
      "@type": "Question",
      "name": "What detergents do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use premium, hypoallergenic, and eco-friendly detergents by default. If you have special requests or prefer scented/unscented, you can configure your preferences directly in your profile."
      }
    },
    {
      "@type": "Question",
      "name": "What items are prohibited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not accept items requiring special dry-cleaning solvents, hazardous materials (saturated in oils, chemicals, or biohazards), or specialty materials like heavy leather and furs. Review our Prohibited Items policy page for a comprehensive list."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We charge flat rates per bag: Essential (Next-day) is $41.99, Express (Same-day) is $53.49, and Rush (6-hour) is $64.99. No weight-guessing or hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hidden fees or surcharges?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. There are no fuel charges, service surcharges, or delivery fees. Tax is included where applicable. The flat-rate bag price covers everything."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to do anything to start my streak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your streak starts automatically when you place your first LOD order. Your streak card arrives with your first delivery. From that point every order adds a stamp."
      }
    },
    {
      "@type": "Question",
      "name": "What if I miss a week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your streak does not reset if you miss a week. You simply pick up where you left off. The milestone timelines (4 weeks, 8 weeks, etc.) are based on consistent ordering but your 10-bag count never resets unless you claim a reward."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my reward before I reach 10 bags?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Log into your account and set your preference on the streak page any time. You can change it right up until the moment you claim."
      }
    },
    {
      "@type": "Question",
      "name": "What if my driver forgets to stamp my card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us at (857) 280-0992 and we will manually add the stamp to your digital record. Your physical card and your digital account are both tracked. We will always give you the benefit of the doubt."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many times I can earn a streak reward?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No limit. Every 10 bags resets and starts a fresh cycle. Customers who order weekly can earn a free wash every 10 weeks indefinitely."
      }
    },
    {
      "@type": "Question",
      "name": "Does my friend need to use a credit card to get their free bag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. LOD requires a payment method on file for future orders, but their first order is completely free. They will not be charged for it. They pay nothing for their first bag."
      }
    },
    {
      "@type": "Question",
      "name": "When does my $5 credit arrive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automatically within 24 hours of your friend's first order being delivered. You do not need to do anything. It appears in your LOD account and is ready to use immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many people I can refer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No limit. Refer 1 person or 100 people. Each successful referral earns you $5 in credit. Credits stack in your account indefinitely and never expire."
      }
    },
    {
      "@type": "Question",
      "name": "What if my friend already has a LOD account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The referral credit applies only to new LOD customers who have never placed an order before. If your friend already has an account, the referral will not count toward your credit."
      }
    },
    {
      "@type": "Question",
      "name": "Does my referral link expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your unique referral link never expires as long as your LOD account is active. Share it once or share it every week. It always works."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-grow">
        <FaqPageContent />
      </main>
    </>
  );
}
