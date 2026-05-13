import type { PolicyBlock } from "@/content/legal";

type PolicyBodyProps = {
  sections: PolicyBlock[];
};

export function PolicyBody({ sections }: PolicyBodyProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <div className="space-y-10 md:space-y-12">
        {sections.map((section) => (
          <section
            key={section.number}
            id={section.id}
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-gray-900 md:text-[22px]">
              {section.number}. {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-gray-600 md:text-[16px]">
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
