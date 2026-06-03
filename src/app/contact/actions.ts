'use server';

import type { ContactFormState } from '@/lib/contact/contact-form-state';
import {
  parseContactFormData,
  sendContactMessage,
} from '@/lib/contact/send-contact-message';

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const payload = parseContactFormData(formData);

  if (!payload) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  const result = await sendContactMessage(payload);

  if (!result.ok) {
    return { success: false, error: result.error };
  }

  return { success: true, error: null };
}
