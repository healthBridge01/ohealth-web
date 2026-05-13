import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { MarketingDocHero } from '@/components/marketing/MarketingDocHero';

export const metadata: Metadata = {
  title: 'Careers',
};

export default function CareersPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        title="Careers at OHealth"
        subtitle="We’re building a calmer, more connected healthcare experience. Open roles will be posted here soon."
      />
      <div className="bg-white px-5 py-16 text-center md:px-10 md:py-24">
        <p className="mx-auto max-w-lg text-gray-600">
          Interested in working with us? Send a note through{' '}
          <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
            contact
          </Link>{' '}
          and tell us what you’d like to build.
        </p>
      </div>
    </SiteChrome>
  );
}
