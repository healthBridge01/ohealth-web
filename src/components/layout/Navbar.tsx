"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/nav";

export type NavbarVariant = "default" | "professional";

type NavbarProps = {
  variant?: NavbarVariant;
};

export function Navbar({ variant = "default" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isPro = variant === "professional";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
            <span className="text-sm font-bold tracking-tighter text-white">O</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            OHealth
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[15px] font-medium text-gray-600 md:flex">
          {(isPro
            ? [
                { label: "About", href: "/blog" },
                { label: "For professionals", href: "/for-professionals" },
                { label: "FAQs", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ]
            : mainNav
          ).map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`transition-colors hover:text-brand-blue ${
                pathname === item.href ? "text-brand-blue" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {isPro ? (
            <>
              <Link
                href="#"
                className="text-[15px] font-medium text-gray-600 hover:text-brand-blue"
              >
                Sign in
              </Link>
              <Link
                href="/for-professionals"
                className="rounded-full bg-brand-blue px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-blue-800 hover:shadow-lg"
              >
                Join as professional
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/for-professionals"
                className="text-[15px] font-medium text-gray-600 hover:text-brand-blue"
              >
                Join as a professional
              </Link>
              <Link
                href="#"
                className="rounded-full bg-brand-blue px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:shadow-lg"
              >
                Get app
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="p-2 text-gray-600 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 ml-auto block h-0.5 w-4 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="absolute left-0 top-full w-full border-b border-gray-100 bg-white px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {(isPro
              ? [
                  { label: "About", href: "/blog" },
                  { label: "For professionals", href: "/for-professionals" },
                  { label: "FAQs", href: "/faq" },
                  { label: "Contact", href: "/contact" },
                ]
              : mainNav
            ).map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-lg font-medium text-gray-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-gray-100" />
            {isPro ? (
              <>
                <Link
                  href="#"
                  className="font-semibold text-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/for-professionals"
                  className="rounded-xl bg-brand-blue py-4 text-center font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  Join as professional
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/for-professionals"
                  className="font-semibold text-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  Join as a professional
                </Link>
                <Link
                  href="#"
                  className="rounded-xl bg-brand-blue py-4 text-center font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  Get app
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
