export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is OHealth?",
    answer:
      "OHealth is a digital healthcare platform that connects patients with verified professionals for consultations, diagnostics coordination, and secure health record management — designed to make care more accessible from anywhere.",
  },
  {
    question: "Who can use OHealth?",
    answer:
      "Patients seeking care, licensed healthcare professionals, and partner institutions such as hospitals, pharmacies, and laboratories can all use OHealth within the scope of their role and applicable regulations.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "We use industry-standard security practices and encryption to protect your information. Access is limited to what is needed to provide the service, and providers you choose to engage with.",
  },
  {
    question: "Do I need insurance to book?",
    answer:
      "Coverage rules depend on your region and provider. Many services can be booked directly through the platform; any insurance or payment requirements will be shown before you confirm.",
  },
  {
    question: "How do appointments work?",
    answer:
      "You can search for a service or provider, pick an available time, and receive confirmations and reminders in the app. Reschedule or cancel according to the provider’s policy shown at booking.",
  },
  {
    question: "How do professionals join?",
    answer:
      "Healthcare professionals can start onboarding from the For professionals page, complete verification steps, and then configure availability and services supported on the platform.",
  },
  {
    question: "What regions are supported?",
    answer:
      "Availability varies by market and regulatory clearance. Create an account or contact us with your location and we’ll confirm what is supported in your area.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Visit the Contact page for customer support, sales, and technical options. We aim to respond as quickly as possible during business hours.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes. You can request account deletion subject to any legal or clinical record retention requirements that apply to your care history. Contact support for assistance.",
  },
  {
    question: "Are video consultations recorded?",
    answer:
      "Recording policies depend on provider configuration and local regulations. If a consultation may be recorded, you will be informed and asked to consent where required.",
  },
  {
    question: "What devices are supported?",
    answer:
      "OHealth runs on modern web browsers and our iOS and Android apps. For the best experience, keep your device updated and use a stable internet connection.",
  },
  {
    question: "Where can I read legal policies?",
    answer:
      "Our Terms & conditions and Privacy policy are available on this site. They describe how the service works and how we handle personal data.",
  },
];
