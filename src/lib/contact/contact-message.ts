import { CONTACT_FIELD_LIMITS } from '@/lib/contact/contact-limits';

export type ContactMessageInput = {
  fullName: string;
  email: string;
  profession: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function withinLimit(value: string, max: number): boolean {
  return value.length > 0 && value.length <= max;
}

export function isValidContactEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim()) && email.length <= CONTACT_FIELD_LIMITS.email;
}

export function parseContactFormData(formData: FormData): ContactMessageInput | null {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const profession = formData.get('profession');
  const message = formData.get('message');

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return null;
  }

  const trimmedName = fullName.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const trimmedProfession = typeof profession === 'string' ? profession.trim() : '';

  if (
    !withinLimit(trimmedName, CONTACT_FIELD_LIMITS.fullName) ||
    !withinLimit(trimmedMessage, CONTACT_FIELD_LIMITS.message) ||
    trimmedProfession.length > CONTACT_FIELD_LIMITS.profession ||
    !isValidContactEmail(trimmedEmail)
  ) {
    return null;
  }

  return {
    fullName: trimmedName,
    email: trimmedEmail,
    profession: trimmedProfession,
    message: trimmedMessage,
  };
}

export function parseContactJson(body: unknown): ContactMessageInput | null {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const record = body as Record<string, unknown>;
  const formData = new FormData();

  for (const key of ['fullName', 'email', 'profession', 'message'] as const) {
    if (typeof record[key] === 'string') {
      formData.set(key, record[key]);
    }
  }

  return parseContactFormData(formData);
}
