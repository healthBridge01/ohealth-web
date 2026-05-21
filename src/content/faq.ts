export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'What is OHealth?',
    answer:
      'OHealth is a digital healthcare platform that connects patients with verified healthcare professionals. It allows users to book consultations, schedule lab tests, and manage their health records securely in one place.',
  },
  {
    question: 'Who can use OHealth?',
    answer:
      'Patients seeking care, licensed healthcare professionals, and partner institutions such as hospitals, pharmacies, and laboratories can all use OHealth within the scope of their role and applicable regulations.',
  },
  {
    question: 'How can I create an account?',
    answer:
      'You can create an account by clicking the "Create Account" button on the homepage and following the steps to provide your details. Once your account is created, you can start using the platform to book consultations, schedule lab tests, and manage your health records.',
  },
  {
    question: 'How do online consultations work?',
    answer:
      'Online consultations work similarly to in-person visits. You can schedule a consultation with a healthcare professional through the platform. The professional will then provide a diagnosis and treatment plan. You can then follow up with the professional to discuss the treatment plan.',
  },
  {
    question: 'Can I choose my healthcare professional?',
    answer:
      'Yes, you can choose your healthcare professional by searching for a professional through the platform. You can then select the professional you want to book a consultation with.',
  },
  {
    question: 'Can I reschedule or cancel a consultation?',
    answer:
      'Yes, you can reschedule or cancel a consultation by logging into your account and selecting the consultation you want to reschedule or cancel. You can also contact the healthcare professional to reschedule or cancel the consultation.',
  },
  {
    question: 'How do I book a lab test?',
    answer:
      'You can book a lab test by logging into your account and selecting the lab test you want to book. You can then select the lab you want to book the test at. You can then select the date and time you want to book the test for.',
  },
  {
    question: 'How will I receive my health records?',
    answer:
      'Your health records will be available in your account. You can download them as a PDF or share them with your healthcare professional.',
  },
  {
    question: 'How can healthcare professionals join OHealth?',
    answer:
      'Healthcare professionals can join OHealth by completing the onboarding process. Once onboarded, they can start accepting consultations and lab tests through the platform.',
  },
  {
    question: 'Can hospitals, pharmacies, and laboratories partner with OHealth?',
    answer:
      'Yes, hospitals, pharmacies, and laboratories can partner with OHealth by contacting us to discuss the partnership. We are always looking for new partners to help us grow and improve the platform.',
  },
];
