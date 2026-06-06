import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollRevealGroup, ScrollRevealItem } from '@/components/motion/scroll-reveal';
import { supportCards } from '@/content/contact';

export function SupportCardGrid() {
  return (
    <ScrollRevealGroup className="grid max-w-116.5 gap-4 md:gap-6 xl:gap-12.5">
      {supportCards.map(card => (
        <ScrollRevealItem key={card.title}>
          <article className="flex flex-col items-left gap-3 rounded-[0.5rem] border border-brand-neutral-200 bg-black/3 p-4 shadow-sm transition-shadow hover:shadow-md md:p-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-gray-800 leading-[110%] tracking-[-0.8px]">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-[120%] text-brand-neutral-700 tracking-[-0.8px]">
                {card.description}
              </p>
            </div>
            <Link
              href={card.href}
              className="inline-flex items-center gap-1.5 text-base font-semibold text-brand-primary-600 hover:text-blue-800 leading-[110%] tracking-[-0.8px]">
              {card.linkLabel}
              <ArrowUpRight className="stroke-2 size-5" aria-hidden />
            </Link>
          </article>
        </ScrollRevealItem>
      ))}
    </ScrollRevealGroup>
  );
}
