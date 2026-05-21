import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { Button } from '@/components/ui/button';
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
        eyebrow="Support"
        subtitle="Need something cleared up? Here are our most frequently asked questions."
      />
      <div className="bg-white px-4 py-10 xl:px-20 xl:py-24">
        <FaqAccordion items={faqItems} />
      </div>
      <section className="grid gap-8 lg:gap-10 bg-brand-gray-50 px-4 pt-16 pb-28 text-center xl:pt-24 xl:pb-40 xl:px-20">
        <div className="grid gap-4 lg:gap-5">
          <div className="grid gap-3">
            <p className="text-base font-semibold text-brand-primary-700">Contact us</p>
            <h2 className="text-2xl font-semibold text-brand-neutral-900 md:text-4xl tracking-[-2%]">
              Still have questions?
            </h2>
          </div>
          <p className="text-brand-neutral-500 text-lg">
            If you need more help, our support team is available to assist you.
          </p>
        </div>
        <Button
          nativeButton={false}
          variant="marketingBlue"
          className="h-auto mx-auto bg-brand-primary-600 rounded-xl px-10 py-4 text-base w-fit font-semibold shadow-md"
          render={<Link href="/contact" prefetch={false} />}>
          Contact Support
        </Button>
      </section>
    </SiteChrome>
  );
}
