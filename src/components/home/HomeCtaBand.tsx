import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';
import { images } from '@/lib/images';

export function HomeCtaBand() {
  return (
    <section className="overflow-hidden bg-brand-blue-deep">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center md:flex-row">
        <div className="w-full px-8 pb-12 pt-16 md:w-1/2 md:pb-32 md:pl-24 md:pt-32 lg:pl-32">
          <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white md:text-[64px]">
            Get started with{' '}
            <span className="font-serif font-medium italic text-[#f5b179]">OHealth</span>{' '}
            today
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/90 md:text-[17px]">
            Whether you are seeking care or providing it, OHealth makes healthcare more
            accessible, efficient, and connected.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="w-full rounded-lg bg-white px-8 py-4 text-center text-[15px] font-bold text-brand-cta transition-colors hover:bg-blue-50 sm:w-auto">
              Create a free account
            </Link>
            <Link
              href="/for-professionals"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/10 sm:w-auto">
              Join as a professional
              <ArrowRightCircle className="h-5 w-5 opacity-80" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="relative flex w-full justify-end self-end md:w-1/2">
          <div className="relative aspect-4/3 w-full md:h-[650px] md:max-w-none lg:h-[750px]">
            <Image
              src={images.ctaPhones}
              alt="Person using the OHealth app"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom md:object-bottom-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
