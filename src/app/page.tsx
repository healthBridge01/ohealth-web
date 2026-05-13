import { SiteChrome } from "@/components/layout/SiteChrome";
import { HomeCtaBand } from "@/components/home/HomeCtaBand";
import { HomeFeatures } from "@/components/home/HomeFeatures";
import { HomeForProfessionalsBand } from "@/components/home/HomeForProfessionalsBand";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { HomeTrustedPlatform } from "@/components/home/HomeTrustedPlatform";
import { HomeWhoItsFor } from "@/components/home/HomeWhoItsFor";

export default function HomePage() {
  return (
    <SiteChrome>
      <div className="bg-slate-50/50">
        <HomeHero />
        <HomeFeatures />
        <HomeHowItWorks />
        <HomeWhoItsFor />
        <HomeTrustedPlatform />
        <HomeForProfessionalsBand />
        <HomeCtaBand />
      </div>
    </SiteChrome>
  );
}
