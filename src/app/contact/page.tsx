import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { ContactLeadForm } from '@/components/contact/ContactLeadForm';
import { SupportCardGrid } from '@/components/contact/SupportCardGrid';
import { MarketingDocHero } from '@/components/marketing/MarketingDocHero';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        eyebrow="Contact us"
        title="How can we help?"
        subtitle="Have questions, need support, or want to partner with us? We are here to help."
      />
      <div className="bg-white px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <SupportCardGrid />
          <ContactLeadForm />
        </div>
      </div>
    </SiteChrome>
  );
}
