import Link from 'next/link';
import Image from 'next/image';
import { footerPrimaryLinks } from '@/lib/nav';
import { Button } from '@/components/ui/button';

type FooterLinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'ghost' | 'link';
  className?: string;
};

function FooterLinkButton({
  href,
  children,
  variant = 'ghost',
  className,
}: FooterLinkButtonProps) {
  return (
    <Button
      nativeButton={false}
      variant={variant}
      className={className}
      render={<Link href={href} prefetch={false} />}>
      {children}
    </Button>
  );
}

const socialLinks: {
  href: string;
  label: string;
  className: string;
  path: string;
}[] = [
  {
    href: '#',
    label: 'X',
    className: 'hover:text-gray-900',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    href: '#',
    label: 'LinkedIn',
    className: 'hover:text-blue-700',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: '#',
    label: 'Facebook',
    className: 'hover:text-blue-600',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: '#',
    label: 'GitHub',
    className: 'hover:text-gray-900',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    href: '#',
    label: 'Instagram',
    className: 'hover:text-pink-600',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-100 bg-brand-gray-100">
      <section className="mx-auto grid max-w-460 gap-12 px-4 py-12 xl:gap-16 xl:px-20 xl:pt-16 xl:pb-12">
        <section className="flex flex-col gap-12 px-0 md:px-8 lg:flex-row lg:justify-between">
          <div className="grid gap-8">
            <div className="grid gap-6 md:gap-8">
              <Image
                src="/icons/mini-logo.svg"
                alt="OHealth logo"
                width={100}
                height={24}
                className="h-6 w-25"
              />
              <p className="max-w-md text-base text-brand-neutral-500">
                OHealth is a digital healthcare platform that connects you with verified
                healthcare professionals, lets you book consultations and lab tests
                online, and securely manage all your health records in one place.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-base leading-6 font-medium text-brand-neutral-500 md:flex md:gap-8">
              {footerPrimaryLinks.map(item => (
                <li key={item.href + item.label}>
                  <FooterLinkButton
                    href={item.href}
                    variant="ghost"
                    className="h-auto whitespace-nowrap px-0 text-base font-medium text-brand-neutral-500 hover:text-brand-blue">
                    {item.label}
                  </FooterLinkButton>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium text-brand-primary-700">Get the app</p>
            <div className="flex gap-4 lg:flex-col">
              <Button
                nativeButton={false}
                variant="ghost"
                className="h-auto w-fit p-0 hover:bg-transparent"
                render={<Link href="#" prefetch={false} />}>
                <Image
                  src="/icons/apple-app-store.svg"
                  alt="Apple App Store"
                  width={135}
                  height={40}
                />
              </Button>
              <Button
                nativeButton={false}
                variant="ghost"
                className="h-auto w-fit p-0 hover:bg-transparent"
                render={<Link href="#" prefetch={false} />}>
                <Image
                  src="/icons/google-play-store.svg"
                  alt="Google Play Store"
                  width={135}
                  height={40}
                />
              </Button>
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse items-center justify-between gap-4 border-t border-brand-neutral-200 pt-8 md:flex-row md:px-8">
          <p className="text-base text-brand-neutral-500">
            © {new Date().getFullYear()} OHealth Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-brand-neutral-500">
            {socialLinks.map(s => (
              <Button
                key={s.label}
                nativeButton={false}
                variant="ghost"
                size="icon"
                className={`text-brand-neutral-500 ${s.className}`}
                render={<Link href={s.href} prefetch={false} aria-label={s.label} />}>
                <svg
                  className="size-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden>
                  <path d={s.path} />
                </svg>
              </Button>
            ))}
          </div>
        </section>
      </section>
    </footer>
  );
}
