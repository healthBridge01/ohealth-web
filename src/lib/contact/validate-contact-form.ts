import type { ContactFormState } from '@/lib/contact/contact-form-state';
import {
  isValidContactEmail,
  parseContactFormData,
  type ContactMessageInput,
} from '@/lib/contact/contact-message';

export type ValidateContactResult =
  | { ok: true; payload: ContactMessageInput }
  | { ok: false; error: string; fieldErrors: ContactFormState['fieldErrors'] };

export function validateContactForm(formData: FormData): ValidateContactResult {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const message = formData.get('message');

  const fieldErrors: ContactFormState['fieldErrors'] = {};

  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    fieldErrors.fullName = 'Full name is required.';
  }

  if (typeof email !== 'string' || email.trim().length === 0) {
    fieldErrors.email = 'Email address is required.';
  } else if (!isValidContactEmail(email)) {
    fieldErrors.email = 'Please enter a valid email address.';
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    fieldErrors.message = 'Message is required.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: 'Please fix the errors below.',
      fieldErrors,
    };
  }

  const payload = parseContactFormData(formData);

  if (!payload) {
    return {
      ok: false,
      error: 'Something went wrong. Please try again.',
      fieldErrors: {},
    };
  }

  return { ok: true, payload };
}
