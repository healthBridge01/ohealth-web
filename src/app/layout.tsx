import type { Metadata } from 'next';
import { Inter, Playfair_Display, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'OHealth — Accessible & secure healthcare',
    template: '%s | OHealth',
  },
  description:
    'Digital healthcare platform for consultations, lab bookings, and secure health records.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiased',
        inter.variable,
        playfair.variable,
        'font-sans',
        geist.variable,
      )}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
