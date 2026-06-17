import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOD — Premium Laundry Pickup & Delivery in Boston | We Handle It",
  description:
    "LOD picks up your laundry, washes it, folds it, and delivers it back to your door. Boston's premium laundry pickup and delivery service. Back Bay, Brookline, Fenway. Starting at $41.99.",
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
