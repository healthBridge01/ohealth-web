import Link from "next/link";
import {
  footerLegalColumns,
  footerPrimaryLinks,
} from "@/lib/nav";

function AppleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 814 1000"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.8 188.4-49.8l34.9.4zM554.1 158.3c31.3-35.6 53.9-85.2 53.9-134.8 0-6.9-.6-13.8-1.9-19.4-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 81.6-55.1 131.9 0 7.6 1.3 15.1 1.9 17.6 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.7-72.4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M48 59.49v393a4.33 4.33 0 007.35 3.05L260 256 55.35 56.44A4.33 4.33 0 0048 59.49z"
        fill="#32BBFF"
      />
      <path
        d="M345 175l-56.15-32.35L185.55 256l103.3 113.35L345 337c19.65-11.35 31.51-30.55 31.51-51S364.65 186.35 345 175z"
        fill="#FFD400"
      />
      <path
        d="M55.35 452.56a4.33 4.33 0 006 3.93l.44-.25 229.1-132.09L233.78 256z"
        fill="#00E272"
      />
      <path
        d="M290.89 256L55.35 56.44a4.33 4.33 0 00-6.4 3.05l178.83 196.51z"
        fill="#FF3547"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f9fafb] px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
              <span className="text-sm font-bold tracking-tighter text-white">
                O
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              OHealth
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            OHealth is a digital healthcare platform that connects you with
            verified healthcare professionals, lets you book consultations and
            lab tests online, and securely manage all your health records in one
            place.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium text-gray-600 sm:grid-cols-3">
            {footerPrimaryLinks.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="text-sm font-bold text-gray-900 lg:text-right">
            Get the app
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="#"
              className="flex w-full max-w-[11rem] items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-white transition-colors hover:bg-gray-800 sm:w-44"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-[9px] uppercase leading-none opacity-70">
                  Download on the
                </div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex w-full max-w-[11rem] items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-white transition-colors hover:bg-gray-800 sm:w-44"
            >
              <PlayIcon />
              <div className="text-left">
                <div className="text-[9px] uppercase leading-none opacity-70">
                  Get it on
                </div>
                <div className="text-sm font-bold leading-tight">
                  Google Play
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 border-t border-gray-200 pt-10 md:grid-cols-2 lg:grid-cols-4">
        {footerLegalColumns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {col.title}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-brand-blue"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col-reverse items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} OHealth Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-gray-500">
          <Link href="#" className="transition-colors hover:text-gray-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>X</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="transition-colors hover:text-blue-700">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link href="#" className="transition-colors hover:text-blue-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Link>
          <Link href="#" className="transition-colors hover:text-gray-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
          <Link href="#" className="transition-colors hover:text-pink-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
