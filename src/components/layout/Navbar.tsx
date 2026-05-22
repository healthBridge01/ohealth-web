'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import type { VariantProps } from 'class-variance-authority';
import { mainNav } from '@/lib/nav';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavLinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
  className?: string;
  onClick?: () => void;
};

function NavLinkButton({
  href,
  children,
  variant = 'navLink',
  size,
  className,
  onClick,
}: NavLinkButtonProps) {
  return (
    <Button
      nativeButton={false}
      variant={variant}
      size={size}
      className={className}
      render={<Link href={href} onClick={onClick} prefetch={false} />}>
      {children}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-460 items-center justify-between px-4 py-3.5 xl:py-7.5 xl:px-15">
        <Link href="/" className="" onClick={() => setOpen(false)}>
          <Image
            src="/icons/mini-logo.svg"
            alt="OHealth logo"
            width={100}
            height={20}
            className="h-5 w-22"
          />
        </Link>

        <div className="hidden items-center gap-7.5 lg:flex">
          {mainNav.map(item => (
            <NavLinkButton
              key={item.href + item.label}
              href={item.href}
              variant="navLink"
              className={cn(
                'px-0 text-base leading-[110%] font-medium tracking-[-0.2px] text-brand-neutral-700 hover:text-brand-blue',
                pathname === item.href && 'text-brand-blue',
              )}>
              {item.label}
            </NavLinkButton>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <NavLinkButton
            href="/for-professionals"
            variant="marketingOutline"
            size="nav-cta">
            Join as a professional
          </NavLinkButton>
          <NavLinkButton href="#" variant="marketingPrimary" size="nav-cta">
            Get App
          </NavLinkButton>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="flex flex-col gap-0.5 border-brand-neutral-300 p-0 text-gray-600 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}>
          <span className="block h-0.5 w-3 rounded-full bg-current" />
          <span className="block h-0.5 w-3 rounded-full bg-current" />
          <span className="block h-0.5 w-3 rounded-full bg-current" />
        </Button>
      </nav>

      {open ? (
        <nav className="absolute top-full left-0 w-full border-b border-gray-100 bg-white px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-2">
            {mainNav.map(item => (
              <NavLinkButton
                key={item.href + item.label}
                href={item.href}
                variant="navLink"
                className="justify-start text-base font-medium text-gray-900 hover:text-brand-blue"
                onClick={() => setOpen(false)}>
                {item.label}
              </NavLinkButton>
            ))}
            <hr className="my-2 border-gray-100" />
            <NavLinkButton
              href="/for-professionals"
              variant="marketingOutline"
              size="nav-cta"
              onClick={() => setOpen(false)}>
              Join as a professional
            </NavLinkButton>
            <NavLinkButton
              href="#"
              variant="marketingPrimary"
              size="nav-cta"
              onClick={() => setOpen(false)}>
              Get app
            </NavLinkButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
