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
    <header className="flex flex-col items-center justify-center gap-4 md:gap-3 bg-site h-83 px-4 md:px-0 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        {eyebrow ? (
          <p className="text-base font-normal md:tracking-[0.2] uppercase text-brand-primary-600">
            {eyebrow}
          </p>
        ) : null}
        {metaLine ? <p className="text-sm text-gray-500">{metaLine}</p> : null}
        <h1 className="text-4xl font-semibold tracking-[-2%] md:tracking-[-1.2px] md:leading-[120%] text-brand-neutral-900 md:text-6xl">
          {title}
        </h1>
      </div>
      <p className="text-base text-brand-neutral-700 md:text-base">{subtitle}</p>
    </header>
  );
}
