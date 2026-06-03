import { NextResponse } from 'next/server';

import {
  parseContactFormData,
  sendContactMessage,
  type ContactMessageInput,
} from '@/lib/contact/send-contact-message';

export type { ContactMessageInput as ContactFormPayload };

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const formData = new FormData();
  const record = body as Record<string, unknown>;
  for (const key of ['fullName', 'email', 'phone', 'message'] as const) {
    if (typeof record[key] === 'string') {
      formData.set(key, record[key]);
    }
  }

  const payload = parseContactFormData(formData);

  if (!payload) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const result = await sendContactMessage(payload);

  if (!result.ok) {
    const status = result.error.includes('not configured') ? 503 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true });
}
