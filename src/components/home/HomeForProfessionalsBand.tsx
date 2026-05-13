import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

export function HomeForProfessionalsBand() {
  return (
    <section className="bg-[#f9fafb] px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-[13px] font-bold text-brand-orange md:text-[15px]">
          For professionals
        </span>
        <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-[#101828] md:text-[42px]">
          Grow your practice with OHealth
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-[12px] leading-relaxed text-[#353a44] md:text-[14px]">
          Join a trusted digital platform to reach more patients, manage your schedule,
          and deliver care flexibly.
        </p>
        <Link
          href="/for-professionals"
          className="mt-8 inline-block rounded-xl bg-brand-cta px-8 py-3.5 text-[15px] font-bold text-white shadow-md shadow-blue-100 transition-all hover:bg-[#0041cc] md:text-[16px]">
          Get started as a provider
        </Link>

        <div className="relative mx-auto mt-16 max-w-[1060px] md:mt-24">
          <div className="relative overflow-hidden rounded-2xl border border-[#eaecf0] shadow-[0_32px_64px_-12px_rgba(16,24,40,0.14)]">
            <Image
              src={images.proDashboard}
              alt="OHealth provider dashboard preview"
              width={1060}
              height={660}
              priority
              sizes="(max-width: 1060px) 100vw, 1060px"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-full bg-blue-500/5 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
