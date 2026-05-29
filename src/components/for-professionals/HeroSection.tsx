import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/images';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50/90 to-white">
      <div className="mx-auto flex max-w-430 flex-col items-center gap-15 pt-12.5 text-center sm:px-4 xl:px-7.5 xl:pt-25">
        <div className="flex flex-col items-center gap-10">
          <div className="mx-auto max-w-162.5 xl:max-w-209">
            <h2 className="text-4xl font-semibold leading-[120%] tracking-[-1px] text-brand-gray-800 md:text-5xl xl:text-6xl lg:leading-17.5">
              Grow Your Practice.{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Reach</span>
                <Image
                  src="/icons/hero-d.svg"
                  alt=""
                  width={226}
                  height={27}
                  unoptimized
                  className="pointer-events-none absolute -bottom-1 left-1/2 z-0 w-full max-w-none -translate-x-1/2 sm:h-5 lg:-bottom-4 lg:h-10 lg:w-[calc(100%+2.5rem)]"
                  aria-hidden
                />
              </span>{' '}
              Patients Anywhere.
            </h2>
            <p className="mt-3 text-base leading-5.5 text-brand-neutral-700 md:leading-6.5">
              OHealth helps healthcare professionals connect with patients, manage
              consultations, and deliver care more efficiently through a secure,
              easy-to-use web platform.
            </p>
          </div>
          <Button
            variant="marketingPrimary"
            className="h-12 w-auto justify-center rounded-lg border border-brand-primary-600 bg-brand-primary-600 px-4.5 py-2.5 text-base font-semibold leading-[110%] text-white shadow-none hover:bg-brand-primary-700"
            render={<Link href="#" prefetch={false} />}>
            Join as a Professional
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-t-3xl bg-brand-gray-100 md:px-7.5 md:pt-7.5">
          <Image
            src={images.proDashboard}
            alt="Appointments and patient records"
            width={1200}
            height={700}
            className="h-auto w-full"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
