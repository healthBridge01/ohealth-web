"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="mx-auto max-w-3xl divide-y divide-gray-200 px-4 md:px-0">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <li key={item.question} className="py-4 md:py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full flex-row-reverse items-start gap-3 text-left md:flex-row md:gap-4"
              aria-expanded={open}
            >
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-light transition-transform ${
                  open
                    ? "rotate-45 border-brand-blue text-brand-blue"
                    : "border-gray-200 text-gray-500"
                }`}
                aria-hidden
              >
                +
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-gray-900 md:text-lg">
                  {item.question}
                </span>
                {open ? (
                  <span className="mt-3 block text-[15px] leading-relaxed text-gray-600 md:text-[16px]">
                    {item.answer}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
