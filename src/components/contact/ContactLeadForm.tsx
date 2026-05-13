"use client";

import { FormEvent, useState } from "react";

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const initial: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactLeadForm() {
  const [values, setValues] = useState<ContactFormValues>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl bg-linear-to-b from-[#3b82f6] to-[#1d4ed8] p-8 shadow-xl md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
        Contact us
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
        Tell us how we can help.
      </h2>

      {submitted ? (
        <p className="mt-8 text-white/95">
          Thanks — we&apos;ve received your message. This demo form doesn&apos;t
          send email yet; wire your API here when ready.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-white">Full name *</span>
            <input
              required
              name="fullName"
              value={values.fullName}
              onChange={(e) =>
                setValues((v) => ({ ...v, fullName: e.target.value }))
              }
              className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none ring-white/30 placeholder:text-white/50 focus:ring-2"
              placeholder="Jane Doe"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-white">
              Email address *
            </span>
            <input
              required
              type="email"
              name="email"
              value={values.email}
              onChange={(e) =>
                setValues((v) => ({ ...v, email: e.target.value }))
              }
              className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-white">Phone number</span>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={(e) =>
                setValues((v) => ({ ...v, phone: e.target.value }))
              }
              className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              placeholder="+1 (555) 000-0000"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-white">Message *</span>
            <textarea
              required
              name="message"
              rows={4}
              value={values.message}
              onChange={(e) =>
                setValues((v) => ({ ...v, message: e.target.value }))
              }
              className="mt-2 w-full resize-y rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              placeholder="How can we help?"
            />
          </label>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="rounded-lg border-2 border-white px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
