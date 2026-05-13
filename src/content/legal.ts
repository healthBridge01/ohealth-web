export type PolicyBlock = {
  id?: string;
  number: number;
  title: string;
  paragraphs: string[];
};

export const termsSections: PolicyBlock[] = [
  {
    number: 1,
    title: "Introduction",
    paragraphs: [
      "Welcome to OHealth. These terms and conditions outline the rules and regulations for the use of OHealth's services, including our website and mobile applications.",
      "By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.",
    ],
  },
  {
    number: 2,
    title: "User accounts",
    paragraphs: [
      "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.",
      "You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
    ],
  },
  {
    number: 3,
    title: "Medical disclaimer",
    paragraphs: [
      "OHealth is a technology platform that facilitates connections between users and independent healthcare providers. We do not provide medical advice, diagnosis, or treatment.",
      "Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
    ],
  },
  {
    number: 4,
    title: "Privacy and data protection",
    paragraphs: [
      "Your use of OHealth is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.",
    ],
  },
  {
    number: 5,
    title: "Appointment booking and cancellation",
    paragraphs: [
      "Users may book appointments through the platform subject to provider availability. Cancellation policies may vary by provider and will be displayed at the time of booking.",
      "Repeated late cancellations or no-shows may result in restrictions on your ability to book future appointments.",
    ],
  },
  {
    number: 6,
    title: "Payment terms",
    paragraphs: [
      "Fees for services are as quoted at the point of purchase. OHealth may use third-party payment processors; your use of those services may be subject to additional terms from the processor.",
      "Refunds, when applicable, will be processed according to the refund policy communicated at checkout or by the provider.",
    ],
  },
  {
    number: 7,
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, OHealth shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    ],
  },
  {
    number: 8,
    title: "Changes to terms",
    paragraphs: [
      "We reserve the right, at our sole discretion, to modify or replace these terms at any time. We will provide notice of material changes where required by law.",
      "By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.",
    ],
  },
];

export const privacySections: PolicyBlock[] = [
  {
    number: 1,
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide directly, such as when you create an account, complete forms, book appointments, or contact us. This may include name, contact details, date of birth, payment information, and health-related information you choose to share.",
      "We also collect usage data and device information to improve our services and keep your account secure.",
    ],
  },
  {
    number: 2,
    title: "How we use your information",
    paragraphs: [
      "We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and comply with legal obligations.",
      "Where required, we rely on appropriate legal bases such as consent, contract performance, and legitimate interests balanced against your rights.",
    ],
  },
  {
    number: 3,
    title: "Disclosure of your information",
    paragraphs: [
      "We may share information with healthcare providers you interact with through the platform, service providers who assist our operations, and authorities when required by law.",
      "We do not sell your personal information.",
    ],
  },
  {
    number: 4,
    id: "data-security",
    title: "Data security",
    paragraphs: [
      "We implement administrative, technical, and physical safeguards designed to protect personal information. No method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    number: 5,
    title: "Children's privacy",
    paragraphs: [
      "Our services are not directed to individuals under the age required by applicable law to consent to data processing without parental authorization. We do not knowingly collect personal information from children in violation of those requirements.",
    ],
  },
  {
    number: 6,
    title: "Your rights and choices",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or port your personal data, or to object to or restrict certain processing. You may exercise these rights by contacting us using the details in the Contact section.",
    ],
  },
  {
    number: 7,
    title: "Data retention",
    paragraphs: [
      "We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.",
    ],
  },
  {
    number: 8,
    title: "Cookies and tracking",
    paragraphs: [
      "We and our partners may use cookies and similar technologies to operate the platform, remember preferences, analyze traffic, and support security. You can control cookies through your browser settings where supported.",
    ],
  },
  {
    number: 9,
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the effective date. We encourage you to review this policy periodically.",
    ],
  },
];
