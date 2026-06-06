import { NextResponse } from 'next/server';

import { parseContactJson } from '@/lib/contact/contact-message';
import { sendContactMessage } from '@/lib/contact/send-contact-message';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = parseContactJson(body);

    if (!payload) {
      return NextResponse.json(
        { success: false, message: 'Missing or invalid fields.' },
        { status: 400 },
      );
    }

    const result = await sendContactMessage(payload);

    if (!result.ok) {
      const status = result.error.includes('not configured') ? 503 : 500;
      return NextResponse.json({ success: false, message: result.error }, { status });
    }

    return NextResponse.json(
      {
        success: true,
        data: result.data,
        message: 'Mail sent successfully',
      },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: 'Error sending mail' },
      { status: 500 },
    );
  }
}
