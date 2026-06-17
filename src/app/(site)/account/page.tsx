import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "My Account | LOD",
  description: "Manage your LOD account, orders, and preferences.",
};

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#F4F6F8] min-h-[60vh] flex items-center justify-center px-5 py-16 md:py-24">
        <div className="text-center max-w-md">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-[#0A1628] mb-4">
            Your account
          </h1>
          <p className="font-heading font-normal text-base text-[rgba(10,22,40,0.65)] mb-8">
            Schedule pickups, track orders, and manage your LOD preferences.
          </p>
          <Link
            href="/signup"
            className="inline-flex font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 px-8 py-4 rounded-lg transition-all duration-200"
          >
            Schedule a pickup
          </Link>
        </div>
      </main>
    </>
  );
}
