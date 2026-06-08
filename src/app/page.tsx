import type { Metadata } from 'next';

import { SiteChrome } from '@/components/layout/SiteChrome';
import { HomeContent } from '@/components/home/HomeContent';
import { buildRootMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildRootMetadata();

export default function HomePage() {
  return (
    <SiteChrome>
      <HomeContent />
    </SiteChrome>
  );
}
