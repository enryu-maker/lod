import Navbar from "@/components/Navbar";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata = {
  title: "Contact Us | LOD",
  description:
    "Contact LOD by text, email, or Instagram. Customer support 7AM to 8PM, 7 days a week.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
    </>
  );
}
