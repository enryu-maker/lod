import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Schedule Pickup | LOD",
  description: "Schedule your LOD laundry pickup.",
};

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#0A1628] min-h-[60vh] flex items-center justify-center px-5 py-16 md:py-24">
        <div className="text-center max-w-md">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Schedule your pickup
          </h1>
          <p className="font-heading font-normal text-base text-white/65 mb-8">
            Your account is ready. Book your first LOD pickup in under 60 seconds.
          </p>
          <Link
            href="/#schedule"
            className="inline-flex font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 px-8 py-4 rounded-lg transition-all duration-200"
          >
            Continue
          </Link>
        </div>
      </main>
    </>
  );
}
