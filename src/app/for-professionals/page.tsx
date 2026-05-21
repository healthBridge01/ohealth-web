import type { Metadata } from 'next';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { ForProfessionalsContent } from '@/components/for-professionals/ForProfessionalsContent';

export const metadata: Metadata = {
  title: 'For professionals',
};

export default function ForProfessionalsPage() {
  return (
    <SiteChrome>
      <ForProfessionalsContent />
    </SiteChrome>
  );
}
