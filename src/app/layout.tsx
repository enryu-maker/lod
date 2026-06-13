import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOD | Boston Pickup & Delivery",
  description: "Efficient, meticulous, and sophisticated laundry service for urban professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-heading font-normal selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
