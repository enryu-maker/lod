import Navbar from "@/components/Navbar";

export default function AuthRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#0A1628]">
      <Navbar embedded />
      <main className="flex-1 min-h-0 overflow-hidden">{children}</main>
    </div>
  );
}
