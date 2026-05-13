import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 md:pt-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[100px] w-full max-w-[1200px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(26,63,212,0.08)_0%,rgba(255,255,255,0)_100%)] md:h-[125px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-10">
        <h1 className="mx-auto max-w-4xl text-[32px] font-bold leading-[1.2] tracking-tight text-gray-900 md:text-6xl md:leading-[1.15]">
          Healthcare made{' '}
          <span className="font-serif text-[1.05em] font-medium italic text-brand-blue">
            accessible
          </span>
          , secure, and connected.
        </h1>

        <p className="mx-auto mt-5 max-w-3xl px-2 text-sm font-normal leading-relaxed text-gray-700 md:mt-6 md:px-4 md:text-lg">
          OHealth is a digital healthcare platform that connects you with verified
          healthcare professionals, lets you book consultations and lab tests online, and
          securely manage all your health records in one place.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">
          <Link
            href="#"
            className="w-full rounded-xl bg-brand-blue px-10 py-4 text-center text-[15px] font-semibold text-white shadow-xl shadow-blue-200/50 transition-all hover:bg-blue-800 sm:w-auto">
            Get app
          </Link>
          <Link
            href="/for-professionals"
            className="group flex w-full items-center justify-center gap-3 py-2 text-[15px] font-semibold text-gray-900 transition-colors hover:text-brand-blue sm:w-auto">
            Join as a professional
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[10px] transition-colors group-hover:border-brand-blue">
              ▶
            </span>
          </Link>
        </div>

        <div className="relative mt-10 flex justify-center px-2 md:mt-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[80px] md:blur-[140px]" />

          <div className="relative z-10 w-full max-w-[340px] md:max-w-[900px]">
            <Image
              src={images.heroPhones}
              alt="OHealth app interface preview"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
