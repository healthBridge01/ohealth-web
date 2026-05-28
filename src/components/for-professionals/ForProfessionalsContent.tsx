import { MarketingCtaBandSection } from '@/components/sections/MarketingCtaBandSection';
import { PromoSection } from '@/components/sections/PromoSection';
import { HeroSection } from './HeroSection';
import { DesignedWorkflowSection } from '../sections/DesignedWorkflowSection';
import { WhoCanSection } from '../sections/WhoCanSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { WhatDoesSection } from '../sections/WhatDoesSection';

export function ForProfessionalsContent() {
  const proSteps = [
    {
      n: 1,
      title: 'Create an Account',
      body: 'Sign up on the OHealth web platform and set up your professional profile.',
      tone: 'blue' as const,
    },
    {
      n: 2,
      title: 'Get Verified',
      body: 'Submit your credentials for verification to ensure a trusted healthcare environment.',
      tone: 'orange' as const,
    },
    {
      n: 3,
      title: 'Start Receiving Patients',
      body: 'Patients can find you, book consultations, and connect with you directly.',
      tone: 'orange' as const,
    },
    {
      n: 4,
      title: 'Manage Care Seamlessly',
      body: 'Conduct consultations, add notes, and track patient progress—all from your dashboard.',
      tone: 'blue' as const,
    },
  ];

  const whoCanItems = [
    { title: 'Doctors' },
    { title: 'Nurses' },
    { title: 'Therapists' },
    { title: 'Nutritionists' },
    { title: 'Hospitals, Pharmacies, and Laboratories' },
    { title: 'Other certified healthcare specialists' },
  ];

  const designedCards = [
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

  const whyCards: { title: string; description: string }[] = [
    {
      title: 'Reach More Patients',
      description:
        'Connect with patients beyond your physical location and grow your practice digitally.',
    },
    {
      title: 'Manage Consultations Easily',
      description:
        'Schedule, conduct, and track consultations all in one place—without unnecessary back and forth.',
    },
    {
      title: 'Centralised Patient Records',
      description:
        'Access patient history, lab results, and notes in a structured and organized way.',
    },
    {
      title: 'Save Time on Admin Work',
      description:
        'Spend less time on manual processes and more time caring for patients.',
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-brand-gray-100 max-w-350 px-4 md:mx-5 md:px-10 2xl:mx-auto">
        <HeroSection />

        <WhatDoesSection
          eyebrow="Why Join OHealth"
          title="Why Healthcare Professionals Choose OHealth"
          description="OHealth is built to simplify your workflow, expand your reach, and help you
            focus on what matters most - providing quality care."
          cards={whyCards}
        />

        <HowItWorksSection
          title="Get started"
          description="Start using OHealth in just a few steps and begin connecting with patients seamlessly."
          steps={proSteps}
        />
      </section>

      <WhoCanSection
        heading="Who Can Join"
        subheading="Built for Healthcare Professionals Across Specialties"
        items={whoCanItems}
        highlightedIndex={0}
      />

      <DesignedWorkflowSection
        eyebrow="Built for Your Workflow"
        title="Designed for Modern Healthcare Professionals"
        description="OHealth is designed to fit naturally into your workflow, helping you deliver care efficiently without the complexity of traditional systems."
        cards={designedCards}
        desktopCols={3}
      />

      <PromoSection />

      <MarketingCtaBandSection
        title="Start Growing Your Practice Today"
        description="Join OHealth and take the next step in delivering accessible, efficient, and modern healthcare."
        primaryCtaLabel="Join as professional"
        primaryCtaHref="#"
        secondaryCtaLabel="Create an Account"
        secondaryCtaHref="/"
      />
    </main>
  );
}
