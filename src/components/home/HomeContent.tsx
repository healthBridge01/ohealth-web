import { HeroSection } from './HeroSection';
import { MarketingCtaBandSection } from '../sections/MarketingCtaBandSection';
import { PromoSection } from '../sections/PromoSection';
import { DesignedWorkflowSection } from '../sections/DesignedWorkflowSection';
import { WhoCanSection } from '../sections/WhoCanSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { WhatDoesSection } from '../sections/WhatDoesSection';

export function HomeContent() {
  const homeSteps = [
    {
      n: 1,
      title: 'Create an Account',
      body: 'Sign up in minutes and set up your personal health profile.',
      tone: 'blue' as const,
    },
    {
      n: 2,
      title: 'Connect with Professionals',
      body: 'Find and consult verified healthcare professionals that match your needs.',
      tone: 'orange' as const,
    },
    {
      n: 3,
      title: 'Book Services',
      body: 'Schedule online consultations or book lab tests with trusted partners.',
      tone: 'orange' as const,
    },
    {
      n: 4,
      title: 'Manage Your Health Data',
      body: 'Access test results, prescriptions, and medical records securely anytime.',
      tone: 'blue' as const,
    },
  ];

  const whoItsForItems = [
    {
      title: 'Patients',
      description:
        'Access trusted healthcare professionals, book consultations and tests online, and take control of your health records.',
    },
    {
      title: 'Healthcare Professionals',
      description:
        'Reach more patients digitally, manage appointments efficiently, and deliver quality care without unnecessary administrative stress.',
    },
    {
      title: 'Hospitals, Pharmacies & Lab Partners',
      description:
        'Expand your digital presence, receive bookings seamlessly, and connect with patients looking for reliable diagnostic services.',
    },
  ];

  const whatDoesCards = [
    {
      title: 'Online Medical Consultations',
      description:
        'Connect with verified doctors, therapists, and specialists for virtual consultations from anywhere.',
      imageSrc: '/images/card-image-1.svg',
      imageAlt: 'Online consultation preview',
    },
    {
      title: 'Hospital, Pharmacy & Lab Partnerships',
      description:
        'Book diagnostic tests with registered hospitals, pharmacies and laboratories and receive results digitally.',
      imageSrc: '/images/card-image-2.svg',
      imageAlt: 'Hospital and lab partnerships preview',
    },
    {
      title: 'AI-Assisted Support',
      description:
        'Get guided support to help you navigate symptoms, appointments, and health information more easily.',
      imageSrc: '/images/card-mage-3.svg',
      imageAlt: 'AI-assisted support preview',
    },
  ];

  const trustedCards = [
    {
      title: 'Verified Healthcare Professionals',
      description:
        'All doctors, therapists, and specialists are properly verified before joining the platform.',
      iconSrc: '/icons/settings.svg',
    },
    {
      title: 'Secure & Private Data',
      description:
        'Your health information is protected with industry-standard security and privacy measures.',
      iconSrc: '/icons/lock.svg',
    },
    {
      title: 'Privacy & Compliance',
      description:
        'OHealth is built with patient confidentiality and regulatory compliance at its core.',
      iconSrc: '/icons/security-user.svg',
    },
    {
      title: 'Registered Hospitals, Pharmacies & Laboratories',
      description: 'We work only with recognised and trusted healthcare institutions.',
      iconSrc: '/icons/profile-add.svg',
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-brand-gray-100 max-w-350 px-4 md:mx-5 md:px-10 2xl:mx-auto">
        <HeroSection />

        <WhatDoesSection
          eyebrow="What HealthBridge Does"
          title="Everything You Need to Manage Your Health In One Platform"
          description="OHealth brings healthcare services together so you can access care, diagnostics, and your health data without stress or unnecessary hospital visits."
          cards={whatDoesCards}
          cardClassName="pb-0"
          gridClassName="md:grid-cols-2 xl:grid-cols-3"
        />

        <HowItWorksSection
          title="How OHealth Works"
          description="Create an account, connect with verified professionals, book consultations or lab tests, and manage your health data-all in one seamless experience."
          steps={homeSteps}
          headingWrapClassName="mx-auto max-w-181 text-center"
          cardsWrapClassName="relative mx-auto mt-2 sm:mt-10 md:mt-14 max-w-232 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[813px]"
          cardsGridClassName="pt-10 md:pt-20 lg:pt-27"
          cardClassName="relative flex max-w-67 gap-4 rounded-xl bg-white px-3 pb-3 pt-4 text-left shadow-brand-sm md:max-w-87.5 md:px-6 md:pb-6 md:pt-7.5"
          titleClassName="text-base sm:text-lg lg:text-[1.375rem]"
          bodyClassName="text-sm sm:text-base"
          backgroundImageSrc="/images/how-iphone.svg"
          backgroundImageClassName="h-auto w-[300px] sm:w-[360px] md:w-[400px] lg:w-[400px]"
          alternateFromMd={false}
        />
      </section>

      <WhoCanSection
        heading="Who It’s For"
        subheading="Built for Everyone in the Healthcare Journey"
        items={whoItsForItems}
        highlightedIndex={0}
      />

      <DesignedWorkflowSection
        title="A Trusted Healthcare Platform You Can Rely On"
        description="Create an account, connect with verified professionals, book consultations or lab tests, and manage your health data-all in one seamless experience."
        cards={trustedCards}
        desktopCols={2}
      />

      <PromoSection />

      <MarketingCtaBandSection
        title={
          <>
            Get started with{' '}
            <span className="font-serif font-medium italic text-[#f5b179]">OHealth</span>{' '}
            today
          </>
        }
        description="Whether you are seeking care or providing it, OHealth makes healthcare more accessible, efficient, and connected."
        primaryCtaLabel="Create a free account"
        primaryCtaHref="#"
        secondaryCtaLabel="Join as a professional"
        secondaryCtaHref="/for-professionals"
      />
    </main>
  );
}
