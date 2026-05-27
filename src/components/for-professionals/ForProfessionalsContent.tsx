import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRightCircle,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Stethoscope,
  Video,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  iconSrc: string;
}[] = [
  {
    title: 'Patient Management Dashboard',
    description:
      'View and manage all your patients in one place with clear, structured records.',
    iconSrc: '/icons/dashboard-square-setting.svg',
  },
  {
    title: 'Consultation Tracking',
    description:
      'Keep a chronological history of consultations, notes, and patient interactions.',
    iconSrc: '/icons/mentoring.svg',
  },
  {
    title: 'Secure Communication',
    description: 'Interact with patients through a safe and reliable platform.',
    iconSrc: '/icons/message-secure.svg',
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

      <section className="bg-white px-4 py-12.5 md:px-8 md:py-10 lg:py-30 lg:px-12.5">
        <div className="flex flex-col items-center text-center gap-3 max-w-180.5 mx-auto">
          <p className="text-brand-primary-600 text-sm font-semibold leading-[120%]">
            Built for Your Workflow
          </p>
          <h2 className="text-2xl lg:text-[2.5rem] leading-[120%] md:leading-none font-semibold text-brand-neutral-800">
            Designed for Modern Healthcare Professionals
          </h2>
          <p className="text-brand-neutral-700 text-base leading-5.5 md:leading-[120%] tracking-[-1%]">
            OHealth is designed to fit naturally into your workflow, helping you deliver
            care efficiently without the complexity of traditional systems.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-335 lg:gap-10 gap-6 md:grid-cols-3">
          {designedCards.map(c => (
            <article
              key={c.title}
              className="grid place-items-center gap-4 rounded-xl hover:border hover:border-brand-primary-200 border-transparent bg-white px-4 lg:px-6 pb-6 pt-7.5 text-center shadow-brand-sm">
              <Image
                src={c.iconSrc}
                alt=""
                width={50}
                height={50}
                unoptimized
                className="lg:h-12.5 lg:w-12.5 h-10 w-10"
              />
              <div className="">
                <h3 className="text-lg lg:text-[1.375rem] lg:leading-8 font-semibold text-brand-gray-800">
                  {c.title}
                </h3>
                <p className="mt-1 text-base leading-[120%] tracking-[-1%] text-brand-gray-700">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-neutral-50 px-4 md:px-8 md:py-4 xl:px-15 xl:py-7.5">
        <div className="flex flex-col items-center gap-10 mx-auto max-w-430 text-center py-12.5 px-4 xl:py-25 xl:px-6">
          <div className="flex flex-col items-center gap-6">
            <p className="text-brand-accent-500 text-sm font-semibold leading-[120%]">
              For Professionals
            </p>
            <div className="max-w-162.5 mx-auto">
              <h2 className="text-2xl lg:text-[2.5rem] leading-[120%] md:leading-none font-semibold text-brand-neutral-800">
                Grow Your Practice with OHealth
              </h2>
              <p className="mt-3 text-brand-neutral-700 text-base leading-5.5 md:leading-[120%] tracking-[-1%]">
                Join a trusted digital platform to reach more patients, manage your
                schedule, and deliver care flexibly.
              </p>
            </div>
            <Button
              variant="marketingPrimary"
              className="h-auto justify-center rounded-lg border border-brand-primary-600 leading-[110%] bg-brand-primary-600 px-4.5 py-2.5 text-sm font-semibold text-white shadow-none hover:bg-brand-primary-700 w-auto"
              render={<Link href="#" prefetch={false} />}>
              Get Started as a Provider
            </Button>
          </div>
          <div className="relative overflow-hidden md:pt-7.5 md:px-7.5 rounded-t-3xl bg-brand-gray-100">
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

      <section className="bg-brand-primary-800 px-4 md:px-5 pt-12.5 md:pt-8 pb-0 xl:px-15 lg:py-[0.005rem]">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:pl-6 xl:pl-16 max-w-430 mx-auto gap-7.5 md:gap-0">
          <div className="max-w-xl text-center md:text-left py-0 md:py-6 lg:py-16">
            <div>
              <h2 className="text-[2.5rem] lg:text-[3.75rem] font-semibold leading-[1.15] tracking-[-1px] text-brand-neutral-25">
                Start Growing Your Practice Today
              </h2>
              <p className="mt-3 text-brand-neutral-50 text-base">
                Join OHealth and take the next step in delivering accessible, efficient,
                and modern healthcare.
              </p>
            </div>
            <div className="mt-6 md:mt-17.5 flex flex-col gap-2 sm:flex-row sm:justify-center md:justify-start">
              <Button
                nativeButton={false}
                variant="marketingPrimary"
                className="h-auto w-full justify-center rounded-lg border-0 leading-[110%] bg-white px-4.5 py-2.5 text-base font-semibold text-brand-primary-700 shadow-none hover:bg-blue-50 sm:w-auto"
                render={<Link href="#" prefetch={false} />}>
                Join as professional
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                className="h-auto justify-center gap-2 rounded-lg border-2 leading-[110%] border-white bg-transparent px-4.5 py-2.5 text-base font-semibold text-white shadow-none hover:bg-white/10 hover:text-white dark:border-white dark:bg-transparent dark:hover:bg-white/10"
                render={<Link href="/" prefetch={false} />}>
                Create an Account
                <ArrowRightCircle className="size-6" aria-hidden />
              </Button>
            </div>
          </div>
          <div className="relative h-auto self-end">
            <Image
              src={images.ctaPhones}
              alt="Doctor profile on mobile"
              width={652}
              height={683}
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
