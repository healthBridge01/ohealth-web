import { describe, expect, it } from 'vitest';

import {
  CONTACT_FIELD_LIMITS,
  CONTACT_HONEYPOT_FIELD,
} from '@/lib/contact/contact-limits';
import { isValidContactEmail } from '@/lib/contact/contact-message';
import { validateContactForm } from '@/lib/contact/validate-contact-form';

function formData(entries: Record<string, string>): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) {
    data.set(key, value);
  }
  return data;
}

describe('isValidContactEmail', () => {
  it('accepts a standard address', () => {
    expect(isValidContactEmail('user@example.com')).toBe(true);
  });

  it('rejects malformed addresses', () => {
    expect(isValidContactEmail('not-an-email')).toBe(false);
  });
});

describe('validateContactForm', () => {
  it('returns payload for valid input', () => {
    const result = validateContactForm(
      formData({
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello team',
      }),
    );

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.payload.fullName).toBe('Jane Doe');
      expect(result.payload.email).toBe('jane@example.com');
    }
  });

  it('rejects honeypot submissions', () => {
    const result = validateContactForm(
      formData({
        fullName: 'Bot',
        email: 'bot@example.com',
        message: 'spam',
        [CONTACT_HONEYPOT_FIELD]: 'filled',
      }),
    );

    expect(result.ok).toBe(false);
  });

  it('rejects messages over the limit', () => {
    const result = validateContactForm(
      formData({
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        message: 'x'.repeat(CONTACT_FIELD_LIMITS.message + 1),
      }),
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.message).toBeDefined();
    }
  });
});
