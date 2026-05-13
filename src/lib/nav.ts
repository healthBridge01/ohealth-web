export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Product', href: '/#features' },
  { label: 'For professionals', href: '/for-professionals' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerPrimaryLinks: NavItem[] = [
  { label: 'Product', href: '/#features' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy policy', href: '/privacy' },
];

export const footerLegalColumns: { title: string; links: NavItem[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Overview', href: '/#features' },
      { label: 'For professionals', href: '/for-professionals' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQs', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Support', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'About', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/privacy#data-security' },
    ],
  },
];
