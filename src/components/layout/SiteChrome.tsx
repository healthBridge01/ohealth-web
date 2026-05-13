import { Footer } from "@/components/layout/Footer";
import { Navbar, type NavbarVariant } from "@/components/layout/Navbar";

type SiteChromeProps = {
  children: React.ReactNode;
  navVariant?: NavbarVariant;
};

export function SiteChrome({ children, navVariant = "default" }: SiteChromeProps) {
  return (
    <>
      <Navbar variant={navVariant} />
      <div className="pt-[4.5rem]">{children}</div>
      <Footer />
    </>
  );
}
