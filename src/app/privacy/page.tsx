import type { Metadata } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { MarketingDocHero } from "@/components/marketing/MarketingDocHero";
import { PolicyBody } from "@/components/marketing/PolicyBody";
import { privacySections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        metaLine="Effective date: May 13, 2026"
        title="Privacy policy"
        subtitle="This policy explains how OHealth collects, uses, and protects your information when you use our websites and apps."
      />
      <div className="bg-white">
        <PolicyBody sections={privacySections} />
      </div>
    </SiteChrome>
  );
}
