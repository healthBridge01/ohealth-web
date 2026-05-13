import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  CalendarDays,
  ClipboardCheck,
  Globe2,
  LayoutDashboard,
  ShieldCheck,
  Stethoscope,
  Users2,
  Video,
} from 'lucide-react';
import { images } from '@/lib/images';

const whyCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Reach more patients',
    description:
      'Offer virtual and in-person access so patients can find you when they need care — without extra admin overhead.',
    icon: Globe2,
  },
  {
    title: 'Manage consultations easily',
    description:
      'Keep schedules, visit notes, and follow-ups organized in one workspace built for clinical workflows.',
    icon: Video,
  },
  {
    title: 'Less paperwork, more care',
    description:
      'Automate reminders, intake, and status updates so your team spends time with patients, not chasing forms.',
    icon: ClipboardCheck,
  },
  {
    title: 'Built for trust',
    description:
      'Verification, access controls, and audit-friendly tools help you meet expectations for privacy and compliance.',
    icon: ShieldCheck,
  },
];

const steps: { n: number; title: string; body: string; tone: 'blue' | 'orange' }[] = [
  {
    n: 1,
    title: 'Create an account',
    body: 'Tell us about your practice and the services you provide.',
    tone: 'blue',
  },
  {
    n: 2,
    title: 'Get verified',
    body: 'Complete credential checks so patients know they’re in safe hands.',
    tone: 'orange',
  },
  {
    n: 3,
    title: 'Start receiving patients',
    body: 'Set availability and begin accepting bookings through OHealth.',
    tone: 'orange',
  },
  {
    n: 4,
    title: 'Manage your dashboard',
    body: 'Track visits, messages, and outcomes from a single control center.',
    tone: 'blue',
  },
];

const roles = [
  'Physicians & specialists',
  'Nurses & nurse practitioners',
  'Therapists & counselors',
  'Allied health professionals',
  'Clinic administrators (with provider oversight)',
];

const designedCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Modern scheduling',
    description:
      'Smart availability, buffers, and patient self-service reduce back-and-forth.',
    icon: CalendarDays,
  },
  {
    title: 'Team-ready workflows',
    description: 'Coordinate with staff while keeping the right access for each role.',
    icon: Users2,
  },
  {
    title: 'Insight at a glance',
    description: 'See what needs attention today — from follow-ups to pending labs.',
    icon: LayoutDashboard,
  },
];

export function ForProfessionalsContent() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-b from-sky-50/90 to-white px-5 pb-12 pt-10 md:px-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-gray-900 md:text-6xl">
            Grow your practice,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">reach</span>
              <span
                className="absolute -bottom-1 left-0 right-0 z-0 h-3 rounded-full bg-sky-200/90 md:h-4"
                aria-hidden
              />
            </span>{' '}
            patients anywhere.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg">
            OHealth helps verified professionals deliver excellent care online and in
            person — with tools patients actually enjoy using.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex rounded-xl bg-brand-blue px-10 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-200/40 transition hover:bg-blue-800">
            Join as professional
          </Link>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1/2 bg-brand-blue/10 blur-[100px]" />
          <Image
            src={images.proDashboard}
            alt="Provider dashboard preview"
            width={1200}
            height={720}
            className="relative z-10 h-auto w-full rounded-2xl border border-gray-100 shadow-2xl"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why healthcare professionals choose OHealth
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Designed around real clinics — not generic chat software.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map(c => (
            <article
              key={c.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-deep">
                <c.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get started</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            A straightforward path from signup to your first booked visit.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`flex gap-4 text-left ${i % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white ${
                  s.tone === 'blue' ? 'bg-brand-blue' : 'bg-brand-orange'
                }`}>
                {s.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Who can join</h2>
            <p className="mt-3 text-gray-600">
              OHealth supports a wide range of licensed roles and supervised care teams.
            </p>
            <ul className="mt-8 space-y-3 text-gray-800">
              {roles.map(r => (
                <li key={r} className="flex gap-3">
                  <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full max-w-md md:w-1/2">
            <div className="relative aspect-square w-full">
              <Image
                src={images.whoItsFor}
                alt="OHealth on mobile"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Designed for modern healthcare professionals
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Clear workflows, fewer clicks, and a calm interface for busy days.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {designedCards.map(c => (
            <article
              key={c.title}
              className="rounded-2xl border border-gray-100 bg-[#fafafa] p-8 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-brand-orange-deep">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f9fafb] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Grow your practice with OHealth
          </h2>
          <Link
            href="#"
            className="mt-8 inline-flex rounded-xl bg-brand-cta px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition hover:bg-[#0041cc]">
            Join as professional
          </Link>
          <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
            <Image
              src={images.proDashboard}
              alt="Appointments and patient records"
              width={1200}
              height={700}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-blue-deep px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Start growing your practice today
            </h2>
            <p className="mt-4 text-white/85">
              Join OHealth as a verified provider and meet patients where they already are
              — on their phones.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="#"
                className="inline-flex justify-center rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-brand-cta hover:bg-blue-50">
                Join as professional
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-lg border-2 border-white px-8 py-3.5 text-[15px] font-bold text-white hover:bg-white/10">
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-xs shrink-0 md:max-w-sm">
            <div className="relative aspect-4/5 w-full">
              <Image
                src={images.ctaPhones}
                alt="Doctor profile on mobile"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
