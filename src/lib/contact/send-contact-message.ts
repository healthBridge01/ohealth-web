import { Resend } from 'resend';
import { CONTACT_SUPPORT_EMAIL } from '@/content/contact';
import { buildContactEmailHtml } from '@/lib/contact/contact-email-template';
import type { ContactMessageInput } from '@/lib/contact/contact-message';

export type { ContactMessageInput } from '@/lib/contact/contact-message';

export type SendContactResult =
  | { ok: true; data: { id: string } }
  | { ok: false; error: string };

export async function sendContactMessage(
  input: ContactMessageInput,
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return { ok: false, error: 'Email service is not configured.' };
  }

  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!from) {
    return { ok: false, error: 'Email service is not configured.' };
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_SUPPORT_EMAIL;
  const resend = new Resend(apiKey);

  const html = buildContactEmailHtml(input);

  const text = [
    `Name: ${input.fullName}`,
    `Email: ${input.email}`,
    input.profession ? `Profession: ${input.profession}` : null,
    '',
    'Message:',
    input.message,
    '',
    `Sent from: ${input.email}`,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `Contact form: ${input.fullName}`,
      html,
      text,
    });

    if (error || !data?.id) {
      console.error('Resend error:', error);
      return { ok: false, error: 'Unable to send your message. Please try again.' };
    }

    return { ok: true, data: { id: data.id } };
  } catch (err) {
    console.error('Contact form email failed:', err);
    return { ok: false, error: 'Unable to send your message. Please try again.' };
  }
}
