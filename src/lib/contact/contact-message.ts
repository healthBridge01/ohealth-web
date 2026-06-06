export type ContactMessageInput = {
  fullName: string;
  email: string;
  profession: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidContactEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

export function parseContactFormData(formData: FormData): ContactMessageInput | null {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const profession = formData.get('profession');
  const message = formData.get('message');

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    fullName.trim().length === 0 ||
    email.trim().length === 0 ||
    message.trim().length === 0 ||
    !isValidContactEmail(email)
  ) {
    return null;
  }

  return {
    fullName: fullName.trim(),
    email: email.trim(),
    profession: typeof profession === 'string' ? profession.trim() : '',
    message: message.trim(),
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
