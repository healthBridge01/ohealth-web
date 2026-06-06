// import nodemailer from 'nodemailer';

// import { CONTACT_SUPPORT_EMAIL } from '@/content/contact';
// import type { ContactMessageInput } from '@/lib/contact/contact-message';

// export type { ContactMessageInput } from '@/lib/contact/contact-message';

// export type SendContactResult =
//   | { ok: true; data: nodemailer.SentMessageInfo }
//   | { ok: false; error: string };

// function escapeHtml(value: string): string {
//   return value
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;');
// }

// export async function sendContactMessage(
//   input: ContactMessageInput,
// ): Promise<SendContactResult> {
//   const host = process.env.SMTP_HOST?.trim();
//   const user = process.env.SMTP_USER?.trim();
//   const pass = process.env.SMTP_PASSWORD?.trim();

//   if (!host || !user || !pass) {
//     return { ok: false, error: 'Email service is not configured.' };
//   }

//   const port = Number(process.env.SMTP_PORT ?? 465);
//   const secure = process.env.SMTP_SECURE !== 'false';
//   const from = process.env.CONTACT_FROM_EMAIL?.trim() || user;
//   const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_SUPPORT_EMAIL;

//   const transporter = nodemailer.createTransport({
//     host,
//     port,
//     secure,
//     auth: { user, pass },
//   });

//   const professionBlock = input.profession
//     ? `<p><strong>Profession:</strong> ${escapeHtml(input.profession)}</p>`
//     : '';

//   const html = `
//     <div>
//       <p><strong>Name:</strong> ${escapeHtml(input.fullName)}</p>
//       <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
//       ${professionBlock}
//       <hr />
//       <div>${escapeHtml(input.message).replace(/\n/g, '<br />')}</div>
//       <p style="margin-top:1rem;color:#666;">Sent from: ${escapeHtml(input.email)}</p>
//     </div>
//   `;

//   const text = [
//     `Name: ${input.fullName}`,
//     `Email: ${input.email}`,
//     input.profession ? `Profession: ${input.profession}` : null,
//     '',
//     'Message:',
//     input.message,
//     '',
//     `Sent from: ${input.email}`,
//   ]
//     .filter(Boolean)
//     .join('\n');

//   try {
//     const data = await transporter.sendMail({
//       from,
//       to,
//       replyTo: input.email,
//       subject: `Contact form: ${input.fullName}`,
//       html,
//       text,
//     });

//     return { ok: true, data };
//   } catch (err) {
//     console.error('Contact form email failed:', err);
//     return {
//       ok: false,
//       error: 'Unable to send your message. Please try again.',
//     };
//   }
// }

import { Resend } from 'resend';
import { CONTACT_SUPPORT_EMAIL } from '@/content/contact';
import type { ContactMessageInput } from '@/lib/contact/contact-message';

export type { ContactMessageInput } from '@/lib/contact/contact-message';

export type SendContactResult =
  | { ok: true; data: { id: string } }
  | { ok: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(
  input: ContactMessageInput,
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return { ok: false, error: 'Email service is not configured.' };
  }

  const from = process.env.CONTACT_FROM_EMAIL?.trim() || 'onboarding@resend.dev';
  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_SUPPORT_EMAIL;

  const professionLine = input.profession
    ? `<p><strong>Profession:</strong> ${input.profession}</p>`
    : '';

  const html = `
    <div>
      <p><strong>Name:</strong> ${input.fullName}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      ${professionLine}
      <hr />
      <div>${input.message.replace(/\n/g, '<br />')}</div>
      <p style="margin-top:1rem;color:#666;">Sent from: ${input.email}</p>
    </div>
  `;

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

    if (error) {
      console.error('Resend error:', error);
      return { ok: false, error: 'Unable to send your message. Please try again.' };
    }

    return { ok: true, data: { id: data!.id } };
  } catch (err) {
    console.error('Contact form email failed:', err);
    return { ok: false, error: 'Unable to send your message. Please try again.' };
  }
}
