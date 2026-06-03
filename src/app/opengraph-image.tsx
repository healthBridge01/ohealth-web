import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'OHealth+ — Digital healthcare platform';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 80,
        background: 'linear-gradient(135deg, #0040c1 0%, #155eef 45%, #063595 100%)',
        color: '#ffffff',
        fontFamily: 'system-ui, sans-serif',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          opacity: 0.95,
        }}>
        OHealth+
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          maxWidth: 900,
        }}>
        Healthcare made accessible, secure, and connected
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 26,
          lineHeight: 1.4,
          opacity: 0.9,
          maxWidth: 820,
        }}>
        Book consultations, connect with verified professionals, and manage health records
        online.
      </div>
    </div>,
    { ...size },
  );
}
