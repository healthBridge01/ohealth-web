'use server';

import type { ContactFormState } from '@/lib/contact/contact-form-state';
import {
  isValidContactEmail,
  parseContactFormData,
  sendContactMessage,
} from '@/lib/contact/send-contact-message';

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const payload = parseContactFormData(formData);

  if (!payload) {
    const email = formData.get('email');
    const hasInvalidEmail =
      typeof email === 'string' && email.trim().length > 0 && !isValidContactEmail(email);

    return {
      success: false,
      error: hasInvalidEmail
        ? 'Please enter a valid email address.'
        : 'Please fill in all required fields.',
    };
  }

  const result = await sendContactMessage(payload);

  if (!result.ok) {
    return { success: false, error: result.error };
  }

  return { success: true, error: null };
}
