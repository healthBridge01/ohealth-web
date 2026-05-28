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
              Healthcare Made{' '}
              <span className="relative inline-block">
                <span className="relative font-serif font-medium italic text-brand-blue-deep">
                  Accessible
                </span>
              </span>{' '}
              , Secure, and Connected.
            </h2>
            <p className="mt-3 text-base leading-5.5 text-brand-neutral-700 md:leading-6.5">
              OHealth is a digital healthcare platform that connects you with verified
              healthcare professionals, lets you book consultations and lab tests online,
              and securely manage all your health records in one place.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="marketingPrimary"
              className="h-auto w-auto justify-center rounded-lg border border-brand-primary-600 bg-brand-primary-600 px-4.5 py-2.5 text-base font-semibold leading-[110%] text-white shadow-none hover:bg-brand-primary-700"
              render={<Link href="#" prefetch={false} />}>
              Get App
            </Button>
            <Button
              variant="marketingOutline"
              // size="nav-cta"
              className="h-auto w-auto justify-center rounded-lg border border-brand-neutral-300 bg-transparent px-4.5 py-2.5 text-base font-semibold leading-[110%] text-brand-neutral-700 shadow-brand-sm hover:bg-brand-neutral-50"
              render={<Link href="/for-professionals" />}>
              Join as a professional
            </Button>
          </div>
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
