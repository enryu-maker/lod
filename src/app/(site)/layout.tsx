import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/policy/CookieConsentBanner";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
      <CookieConsentBanner />
    </>
  );
}
