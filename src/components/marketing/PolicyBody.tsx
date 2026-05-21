import type { PolicyBlock } from '@/content/legal';

type PolicyBodyProps = {
  sections: PolicyBlock[];
};

export function PolicyBody({ sections }: PolicyBodyProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:py-24">
      <div className="space-y-10 md:space-y-15">
        {sections.map(section => (
          <section key={section.number} id={section.id} className="scroll-mt-28">
            <h2 className="text-xl font-semibold text-brand-neutral-800 tracking-[-0.8px] leading-[100%] mb-3">
              {section.number}. {section.title}
            </h2>
            <div className="space-y-4 text-base text-brand-neutral-600 leading-[130%] tracking-[-0.6px]">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
