type MarketingDocHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Shown under eyebrow / above title depending on layout */
  metaLine?: string;
};

export function MarketingDocHero({
  eyebrow,
  title,
  subtitle,
  metaLine,
}: MarketingDocHeroProps) {
  return (
    <header className="border-b border-sky-100/80 bg-linear-to-b from-sky-50 via-white to-white px-5 py-14 text-center md:px-10 md:py-20">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue md:text-[13px]">
          {eyebrow}
        </p>
      ) : null}
      {metaLine ? <p className="mt-3 text-sm text-gray-500 md:mt-4">{metaLine}</p> : null}
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
        {subtitle}
      </p>
    </header>
  );
}
