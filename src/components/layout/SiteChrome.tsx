import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </>
  );
}
