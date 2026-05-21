import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { MarketingDocHero } from '@/components/marketing/MarketingDocHero';
import { PolicyBody } from '@/components/marketing/PolicyBody';
import { termsSections } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms & conditions',
};

export default function TermsPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        eyebrow="Current as of May 13, 2026"
        title="Terms and conditions"
        subtitle="We respect your privacy regarding any information we may collect from you across our application."
      />
      <div className="bg-white">
        <PolicyBody sections={termsSections} />
      </div>
    </SiteChrome>
  );
}
