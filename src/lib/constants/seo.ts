import type { Metadata } from 'next';

/** Public site origin for canonical URLs, Open Graph, and sitemap. */
export function getSiteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');

  return (fromEnv || 'http://localhost:3000').replace(/\/$/, '');
}

const siteUrl = getSiteUrl();

export const SEO_DETAILS = {
  title: {
    default: 'OHealth+ — Accessible, secure, and connected healthcare',
    template: '%s | OHealth+',
  },
  description:
    'OHealth+ is a digital healthcare platform that connects you with verified healthcare professionals, lets you book consultations and lab tests online, and helps you manage health records securely in one place.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'OHealth+ Ltd', url: siteUrl }],
  keywords: [
    'OHealth',
    'OHealth+',
    'digital healthcare',
    'telehealth',
    'online doctor',
    'health records',
    'lab tests',
    'book consultation',
    'healthcare professionals',
    'patient portal',
    'medical appointments',
  ],
  generator: 'Next.js',
  publisher: 'OHealth+ Ltd',
  category: 'Healthcare',
  applicationName: 'OHealth+',
} satisfies Omit<Metadata, 'openGraph' | 'twitter'>;

export const siteOpenGraphImage = '/opengraph-image';

export function buildRootMetadata(): Metadata {
  const title =
    typeof SEO_DETAILS.title === 'object' && SEO_DETAILS.title !== null
      ? SEO_DETAILS.title.default
      : 'OHealth+';

  return {
    ...SEO_DETAILS,
    openGraph: {
      title,
      description: SEO_DETAILS.description,
      type: 'website',
      url: SEO_DETAILS.metadataBase,
      siteName: 'OHealth+',
      locale: 'en_US',
      images: [{ url: siteOpenGraphImage, width: 1200, height: 630, alt: 'OHealth+' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: SEO_DETAILS.description,
      images: [siteOpenGraphImage],
    },
  };
}
