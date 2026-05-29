import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { supportCards } from '@/content/contact';

export function SupportCardGrid() {
  return (
    <div className="grid gap-4 md:gap-5">
      {supportCards.map(card => (
        <article
          key={card.title}
          className="flex flex-col items-left max-w-116.5 rounded-[12px] border border-brand-neutral-200 bg-[#00000008] p-6 md:p-7 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="text-[18px] font-semibold text-[#1F2A37] leading-[110.00000000000001%] tracking-[-0.8px]">
            {card.title}
          </h3>
          <p className="mt-2 text-[16px] leading-[120%] text-brand-neutral-700 md:text-[15px] tracking-[-0.8px]">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="mt-4 inline-flex items-center gap-2 text-[16px] font-semibold text-brand-primary-600 hover:text-blue-800 leading-[110.00000000000001%] tracking-[-0.8px]">
            {card.linkLabel}
            <ArrowUpRight className="h-4.5 w-4.5 stroke-2" aria-hidden />
          </Link>
        </article>
      ))}
    </div>
  );
}
