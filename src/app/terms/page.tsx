import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { MarketingDocHero } from "@/components/marketing/MarketingDocHero";
import { PolicyBody } from "@/components/marketing/PolicyBody";
import { termsSections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & conditions",
};

export default function TermsPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        metaLine="Updated May 13, 2026"
        title="Terms and conditions"
        subtitle="Please read these terms and conditions carefully before using our service."
      />
      <div className="bg-white">
        <PolicyBody sections={termsSections} />
      </div>
    </SiteChrome>
  );
}
