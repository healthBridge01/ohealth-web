import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { supportCards } from '@/content/contact';

export function SupportCardGrid() {
  return (
    <div className="grid gap-4 md:gap-5">
      {supportCards.map(card => (
        <article
          key={card.title}
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
          <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-[15px]">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-blue-800">
            {card.linkLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </article>
      ))}
    </div>
  );
}
