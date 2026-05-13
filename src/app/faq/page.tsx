import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { MarketingDocHero } from '@/components/marketing/MarketingDocHero';
import { faqItems } from '@/content/faq';

export const metadata: Metadata = {
  title: 'FAQs',
};

export default function FaqPage() {
  return (
    <SiteChrome>
      <MarketingDocHero
        title="FAQs"
        subtitle="Answers to common questions about OHealth for patients and professionals."
      />
      <div className="bg-white pb-16 pt-4 md:pb-24 md:pt-6">
        <FaqAccordion items={faqItems} />
      </div>
      <section className="bg-[#f9fafb] px-5 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Still have questions?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-600">
          Our team is happy to help with onboarding, partnerships, or technical issues.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-brand-blue px-10 py-4 text-[15px] font-semibold text-white shadow-md transition hover:bg-blue-800">
          Contact us
        </Link>
      </section>
    </SiteChrome>
  );
}
