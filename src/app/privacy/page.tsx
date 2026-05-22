import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { MarketingDocHero } from '@/components/marketing/MarketingDocHero';
import { PolicyBody } from '@/components/marketing/PolicyBody';
import { privacySections } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy policy',
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        eyebrow="Current as of May 13, 2026"
        title="Privacy policy"
        subtitle="We respect your privacy regarding any information we may collect from you across our application."
      />
      <div className="bg-white">
        <PolicyBody sections={privacySections} />
      </div>
    </SiteChrome>
  );
}
