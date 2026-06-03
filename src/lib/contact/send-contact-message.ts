import { Resend } from 'resend';

import { CONTACT_SUPPORT_EMAIL } from '@/content/contact';

export type ContactMessageInput = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export type SendContactResult = { ok: true } | { ok: false; error: string };

export function parseContactFormData(formData: FormData): ContactMessageInput | null {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    typeof phone !== 'string' ||
    fullName.trim().length === 0 ||
    email.trim().length === 0 ||
    message.trim().length === 0
  ) {
    return null;
  }

  return {
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
  };
}

export async function sendContactMessage(
  input: ContactMessageInput,
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { ok: false, error: 'Email service is not configured.' };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_SUPPORT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || 'OHealth+ Website <onboarding@resend.dev>';

  const profession = input.phone;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `Contact form: ${input.fullName}`,
    text: [
      `Name: ${input.fullName}`,
      `Email: ${input.email}`,
      profession ? `Profession: ${profession}` : null,
      '',
      'Message:',
      input.message,
    ]
      .filter(Boolean)
      .join('\n'),
  });

  if (error) {
    console.error('Contact form email failed:', error);
    return {
      ok: false,
      error: 'Unable to send your message. Please try again.',
    };
  }

  return { ok: true };
}
