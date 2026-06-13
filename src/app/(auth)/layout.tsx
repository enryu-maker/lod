import Navbar from "@/components/Navbar";

export default function AuthRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex flex-col overflow-hidden bg-[#0A1628]">
      <Navbar embedded />
      <main className="flex flex-1 min-h-0 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
