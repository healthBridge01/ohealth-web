import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/images';

type MarketingCtaBandProps = {
  title: ReactNode;
  description: ReactNode;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export function MarketingCtaBandSection({
  title,
  description,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: MarketingCtaBandProps) {
  return (
    <section className="bg-brand-primary-800 px-4 pb-0 pt-12.5 md:px-5 md:pt-8 xl:px-15 lg:py-[0.005rem]">
      <div className="mx-auto flex max-w-430 flex-col items-center gap-7.5 md:flex-row md:justify-between md:gap-0 md:pl-6 xl:pl-16">
        <div className="max-w-xl py-0 text-center md:py-6 md:text-left lg:py-16">
          <div>
            <h2 className="text-[2.5rem] font-semibold leading-[1.15] tracking-[-1px] text-brand-neutral-25 lg:text-[3.75rem]">
              {title}
            </h2>
            <p className="mt-3 text-base text-brand-neutral-50">{description}</p>
          </div>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center md:mt-17.5 md:justify-start">
            <Button
              nativeButton={false}
              variant="marketingPrimary"
              className="h-auto w-full justify-center rounded-lg border-0 bg-white px-4.5 py-2.5 text-base font-semibold leading-[110%] text-brand-primary-700 shadow-none hover:bg-blue-50 sm:w-auto"
              render={<Link href={primaryCtaHref} prefetch={false} />}>
              {primaryCtaLabel}
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="h-auto justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-4.5 py-2.5 text-base font-semibold leading-[110%] text-white shadow-none hover:bg-white/10 hover:text-white dark:border-white dark:bg-transparent dark:hover:bg-white/10"
              render={<Link href={secondaryCtaHref} prefetch={false} />}>
              {secondaryCtaLabel}
              <ArrowRightCircle className="size-6" aria-hidden />
            </Button>
          </div>
        </div>
        <div className="relative h-auto self-end">
          <Image
            src={images.ctaPhones}
            alt="Doctor profile on mobile"
            width={652}
            height={683}
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
