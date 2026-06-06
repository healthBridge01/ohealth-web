import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { Button } from '@/components/ui/button';
import { isLocalPublicImage } from '@/lib/images';
import { cn } from '@/lib/utils';
import {
  homeHero,
  professionalsHero,
  type HeroContent,
  type HeroCta,
} from '@/content/hero';

type HeroSectionProps = {
  variant: 'home' | 'professionals';
};

const heroByVariant = {
  home: homeHero,
  professionals: professionalsHero,
} as const;

function HomeHeroTitle() {
  return (
    <h2 className="text-4xl font-semibold leading-[120%] tracking-[-1px] text-brand-gray-800 md:text-5xl xl:text-6xl lg:leading-17.5">
      Healthcare Made{' '}
      <span className="relative inline-block">
        <span className="relative font-serif font-medium italic text-brand-blue-deep">
          Accessible
        </span>
      </span>
      , Secure, and Connected.
    </h2>
  );
}

function ProfessionalsHeroTitle() {
  return (
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
          style={{ width: '100%', height: 'auto' }}
          aria-hidden
        />
      </span>{' '}
      Patients Anywhere.
    </h2>
  );
}

function HeroCtaButtons({ ctas }: { ctas: HeroCta[] }) {
  return (
    <div
      className={cn(
        'flex gap-2',
        ctas.length > 1
          ? 'flex-col gap-y-4 sm:flex-row sm:gap-x-2'
          : 'flex-col items-center',
      )}>
      {ctas.map(cta => (
        <Button
          key={cta.label}
          nativeButton={false}
          variant={cta.variant}
          size={cta.size}
          render={<Link href={cta.href} prefetch={false} />}>
          {cta.label}
        </Button>
      ))}
    </div>
  );
}

// const professionalsGlowBackground =
//   'radial-gradient(ellipse 170% 78% at 50% 86%, rgba(53, 110, 224, 0.55) 0%, rgba(53, 110, 224, 0.22) 36%, rgba(53, 110, 224, 0.07) 56%, transparent 72%), radial-gradient(ellipse 125% 52% at 50% 88%, rgba(53, 110, 224, 0.3) 0%, transparent 58%)';

// const homeImageGlowBackground =
//   'radial-gradient(ellipse 155% 95% at 50% 50%, rgba(53, 110, 224, 0.5) 0%, rgba(53, 110, 224, 0.2) 42%, rgba(53, 110, 224, 0.06) 58%, transparent 72%), radial-gradient(ellipse 100% 65% at 50% 50%, rgba(53, 110, 224, 0.28) 0%, transparent 64%)';

// function HeroSectionGlow({ variant }: { variant: 'home' | 'professionals' }) {
//   return (
//     <>
//       {variant === 'professionals' ? (
//         <div
//           aria-hidden
//           className="hero-glow-layer pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[88%] w-full"
//           style={{ background: professionalsGlowBackground }}
//         />
//       ) : null}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[52%] bg-linear-to-b from-brand-gray-100 from-0% via-brand-gray-100/92 via-30% to-transparent max-md:via-22% max-md:to-48% sm:h-[48%] md:h-[44%]"
//       />
//     </>
//   );
// }

// function HomeImageCenterGlow() {
//   return (
//     <div
//       aria-hidden
//       className="hero-glow-home pointer-events-none absolute top-1/2 left-1/2 z-0 h-[min(36rem,140%)] w-[175%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[min(40rem,155%)] sm:w-[190%]"
//       style={{ background: homeImageGlowBackground }}
//     />
//   );
// }

// function HeroPreviewImage({
//   image,
//   variant,
// }: {
//   image: HeroContent['image'];
//   variant: 'home' | 'professionals';
// }) {
//   return (
//     <div
//       className={cn(
//         'relative flex w-full max-w-315 mx-auto justify-center overflow-hidden',
//         variant === 'home' ? '' : 'rounded-t-3xl',
//       )}>
//       <div
//         className={cn(
//           'relative w-full overflow-hidden mx-auto',
//           variant === 'home'
//             ? 'max-w-[717px]'
//             : 'bg-brand-gray-100 rounded-t-3xl px-4 pt-4 xl:px-6 xl:pt-6',
//         )}>
//         {variant === 'home' ? <HomeImageCenterGlow /> : null}
//         <Image
//           src={image.src}
//           alt={image.alt}
//           width={image.width}
//           height={image.height}
//           className={cn(
//             'relative z-10 h-auto w-full rounded-t-2xl object-contain',
//             image.imageClassName,
//           )}
//           style={{ width: '100%', height: 'auto' }}
//           sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`}
//         />
//       </div>
//     </div>
//   );
// }

// export function HeroSection({ variant }: HeroSectionProps) {
//   const content = heroByVariant[variant];

//   return (
//     <ScrollReveal
//       as="section"
//       aboveFold
//       variant="fadeUp"
//       className="relative mx-auto max-w-430 overflow-hidden bg-brand-gray-100">
//       <HeroSectionGlow variant={variant} />
//       <div className="relative z-10 mx-auto flex flex-col items-center gap-10 pt-12.5 text-center sm:px-4 md:gap-15 xl:px-0 xl:pt-25">
//         <div className="flex flex-col items-center gap-6 md:gap-10">
//           <div className={cn('mx-auto max-w-162.5', content.headingMaxWidthClass)}>
//             {variant === 'home' ? <HomeHeroTitle /> : <ProfessionalsHeroTitle />}
//             <p className="mt-3 text-base leading-5.5 text-brand-neutral-700 md:leading-6.5">
//               {content.description}
//             </p>
//           </div>
//           <HeroCtaButtons ctas={content.ctas} />
//         </div>
//         <HeroPreviewImage image={content.image} variant={variant} />
//       </div>
//     </ScrollReveal>
//   );
// }

// // ─── Glow: Home ──────────────────────────────────────────────────────────────
// // Rendered INSIDE the 717px-capped image wrapper so percentages are relative
// // to the actual mock-up width, not the 1260px section.
// function HomeImageCenterGlow() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none absolute inset-0 z-0"
//       style={{
//         background:
//           'radial-gradient(ellipse 130% 110% at 50% 60%, rgba(53,110,224,0.45) 0%, rgba(53,110,224,0.18) 40%, rgba(53,110,224,0.05) 60%, transparent 75%), ' +
//           'radial-gradient(ellipse 90% 75% at 50% 62%, rgba(53,110,224,0.25) 0%, transparent 60%)',
//       }}
//     />
//   );
// }

// // ─── Glow: Professionals ─────────────────────────────────────────────────────
// // Rendered INSIDE the rounded-t-3xl image wrapper so it stays within the
// // dashboard card boundaries and never bleeds wider than the screenshot.
// function ProfessionalsImageGlow() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full w-full rounded-t-3xl"
//       style={{
//         background:
//           'radial-gradient(ellipse 140% 65% at 50% 100%, rgba(53,110,224,0.50) 0%, rgba(53,110,224,0.20) 38%, rgba(53,110,224,0.06) 56%, transparent 72%), ' +
//           'radial-gradient(ellipse 100% 45% at 50% 100%, rgba(53,110,224,0.28) 0%, transparent 55%)',
//       }}
//     />
//   );
// }

// // ─── Section-level top fade (unchanged) ──────────────────────────────────────
// function HeroSectionGlow() {
//   return (
//     <div
//       aria-hidden
//       className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[52%] bg-linear-to-b from-brand-gray-100 from-0% via-brand-gray-100/92 via-30% to-transparent max-md:via-22% max-md:to-48% sm:h-[48%] md:h-[44%]"
//     />
//   );
// }

// // ─── Preview image ────────────────────────────────────────────────────────────
// function HeroPreviewImage({
//   image,
//   variant,
// }: {
//   image: HeroContent['image'];
//   variant: 'home' | 'professionals';
// }) {
//   return (
//     <div className="relative flex w-full max-w-330 mx-auto justify-center overflow-hidden">
//       <div
//         className={cn(
//           'relative w-full overflow-hidden mx-auto',
//           variant === 'home'
//             ? 'max-w-[717px]'
//             : 'bg-brand-gray-100 rounded-t-3xl px-4 pt-4 xl:px-6 xl:pt-6',
//         )}>
//         {/* Glow is now always rendered inside the correctly-sized inner wrapper */}
//         {variant === 'home' ? <HomeImageCenterGlow /> : <ProfessionalsImageGlow />}
//         <Image
//           src={image.src}
//           alt={image.alt}
//           width={image.width}
//           height={image.height}
//           className={cn(
//             'relative z-10 h-auto w-full rounded-t-2xl object-contain',
//             image.imageClassName,
//           )}
//           style={{ width: '100%', height: 'auto' }}
//           sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`}
//         />
//       </div>
//     </div>
//   );
// }

// // ─── Hero section ─────────────────────────────────────────────────────────────
// export function HeroSection({ variant }: HeroSectionProps) {
//   const content = heroByVariant[variant];

//   return (
//     <ScrollReveal
//       as="section"
//       aboveFold
//       variant="fadeUp"
//       className="relative mx-auto max-w-430 overflow-hidden bg-brand-gray-100">
//       {/* Single top-fade glow — no more per-variant section glow */}
//       <HeroSectionGlow />
//       <div className="relative z-10 mx-auto flex flex-col items-center gap-10 pt-12.5 text-center sm:px-4 md:gap-15 xl:px-0 xl:pt-25">
//         <div className="flex flex-col items-center gap-6 md:gap-10">
//           <div className={cn('mx-auto max-w-162.5', content.headingMaxWidthClass)}>
//             {variant === 'home' ? <HomeHeroTitle /> : <ProfessionalsHeroTitle />}
//             <p className="mt-3 text-base leading-5.5 text-brand-neutral-700 md:leading-6.5">
//               {content.description}
//             </p>
//           </div>
//           <HeroCtaButtons ctas={content.ctas} />
//         </div>
//         <HeroPreviewImage image={content.image} variant={variant} />
//       </div>
//     </ScrollReveal>
//   );
// }

// ─── Home glow: centered on where the phones sit ─────────────────────────────
// Positioned from the bottom of the section, bleeds out naturally in all
// directions — NOT clipped by the image wrapper.
const homeGlow =
  'radial-gradient(ellipse 80% 55% at 50% 88%, rgba(53,110,224,0.55) 0%, rgba(53,110,224,0.22) 38%, rgba(53,110,224,0.07) 58%, transparent 74%)';

// ─── Professionals glow: per breakpoint (section-level, not image wrapper) ─
const professionalsGlowMobile =
  'radial-gradient(ellipse 120% 75% at 50% 95%, rgba(53,110,224,0.58) 0%, rgba(53,110,224,0.24) 35%, rgba(53,110,224,0.08) 55%, transparent 72%), ' +
  'radial-gradient(ellipse 85% 50% at 50% 96%, rgba(53,110,224,0.32) 0%, transparent 58%)';

const professionalsGlowDesktop =
  'radial-gradient(ellipse 140% 75% at 50% 75%, rgba(53,110,224,0.58) 0%, rgba(53,110,224,0.24) 35%, rgba(53,110,224,0.08) 55%, transparent 72%), ' +
  'radial-gradient(ellipse 85% 50% at 50% 96%, rgba(53,110,224,0.32) 0%, transparent 58%)';

const professionalsGlowBigScreenDesktop =
  'radial-gradient(ellipse 80% 75% at 50% 75%, rgba(53,110,224,0.58) 0%, rgba(53,110,224,0.24) 35%, rgba(53,110,224,0.08) 55%, transparent 72%), ' +
  'radial-gradient(ellipse 75% 40% at 50% 96%, rgba(53,110,224,0.32) 0%, transparent 58%)';

const professionalsGlowLayerClassName =
  'pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full w-full';

function ProfessionalsGlowLayers() {
  return (
    <>
      {/* < md */}
      <div
        aria-hidden
        className={cn(professionalsGlowLayerClassName, 'md:hidden')}
        style={{ background: professionalsGlowMobile }}
      />
      {/* md → below hero-wide (104.6875rem / 1675px) — range variant avoids fighting md:block */}
      <div
        aria-hidden
        className={cn(professionalsGlowLayerClassName, 'hidden md:max-hero-wide:block')}
        style={{ background: professionalsGlowDesktop }}
      />
      {/* >= hero-wide */}
      <div
        aria-hidden
        className={cn(professionalsGlowLayerClassName, 'hidden hero-wide:block')}
        style={{ background: professionalsGlowBigScreenDesktop }}
      />
    </>
  );
}

function HeroSectionGlows({ variant }: { variant: 'home' | 'professionals' }) {
  return (
    <>
      {variant === 'home' ? (
        <div
          aria-hidden
          className={professionalsGlowLayerClassName}
          style={{ background: homeGlow }}
        />
      ) : (
        <ProfessionalsGlowLayers />
      )}

      {/* Top-to-transparent fade that sits above the glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[52%] bg-linear-to-b from-brand-gray-100 from-0% via-brand-gray-100/92 via-30% to-transparent max-md:via-22% max-md:to-48% sm:h-[48%] md:h-[44%]"
      />
    </>
  );
}

function HeroPreviewImage({
  image,
  variant,
}: {
  image: HeroContent['image'];
  variant: 'home' | 'professionals';
}) {
  return (
    // overflow-hidden REMOVED from outer div — it was clipping the glow
    <div className="relative flex w-full max-w-315 mx-auto justify-center">
      <div
        className={cn(
          'relative mx-auto w-full',
          variant === 'home'
            ? 'max-w-[717px]'
            : 'max-w-68 min-[360px]:max-w-80 min-[380px]:max-w-82 min-[400px]:max-w-94 sm:max-w-none bg-brand-gray-100 rounded-t-3xl px-2 pt-2 lg:px-3 lg:pt-3 xl:px-6 xl:pt-6',
          image.imageClassName,
        )}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          unoptimized={isLocalPublicImage(image.src)}
          className="relative z-10 block h-auto w-full max-w-none rounded-t-2xl object-contain"
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
          sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`}
        />
      </div>
    </div>
  );
}

export function HeroSection({ variant }: HeroSectionProps) {
  const content = heroByVariant[variant];

  return (
    <ScrollReveal
      as="section"
      aboveFold
      variant="fadeUp"
      // overflow-hidden stays here so glow doesn't bleed past section edges
      className="relative mx-auto  bg-brand-gray-100">
      <HeroSectionGlows variant={variant} />
      <div className="relative z-10 mx-auto max-w-430 flex flex-col items-center gap-10 pt-12.5 text-center sm:px-4 md:gap-15 xl:px-0 xl:pt-25">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <div className={cn('mx-auto max-w-162.5', content.headingMaxWidthClass)}>
            {variant === 'home' ? <HomeHeroTitle /> : <ProfessionalsHeroTitle />}
            <p className="mt-3 text-base leading-5.5 text-brand-neutral-700 md:leading-6.5">
              {content.description}
            </p>
          </div>
          <HeroCtaButtons ctas={content.ctas} />
        </div>
        <HeroPreviewImage image={content.image} variant={variant} />
      </div>
    </ScrollReveal>
  );
}
