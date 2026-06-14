import Navbar from "@/components/Navbar";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata = {
  title: "About LOD | LOD",
  description:
    "Learn about LOD, Boston's premium laundry service. Our mission, values, and the story behind giving you your time back.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
    </>
  );
}
