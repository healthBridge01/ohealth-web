'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const initial: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactLeadForm() {
  const [values, setValues] = useState<ContactFormValues>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl bg-linear-to-b from-[#063595] to-[#254991] px-4 py-6 lg:py-12.5 lg:px-10 shadow-xl md:p-10">
      <p className="text-[14px] lg:text-[16px] font-medium uppercase tracking-[-0.8px] text-[#FDEAD7] text-center leading-[110.00000000000001%]">
        Contact us
      </p>
      <h2 className="mt-2 lg:text-[36px] text-[24px] leading-[100%]  font-semibold text-white md:text-3xl text-center">
        Tell us how we can help.
      </h2>

      {submitted ? (
        <p className="mt-8 text-white/95">
          Thanks — we&apos;ve received your message. This demo form doesn&apos;t send
          email yet; wire your API here when ready.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-semibold text-[14px] text-white  leading-[120%]">
                Full Name *
              </span>
              <input
                required
                name="fullName"
                value={values.fullName}
                onChange={e => setValues(v => ({ ...v, fullName: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none ring-white/30 placeholder:text-white/50 focus:ring-2"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block">
              <span className="font-semibold text-[14px] text-white  leading-[120%]">
                Email Address *
              </span>
              <input
                required
                type="email"
                name="email"
                value={values.email}
                onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-semibold text-[14px] text-white  leading-[120%]">
              Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={e => setValues(v => ({ ...v, phone: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              placeholder="+1 (555) 000-0000"
            />
          </label>
          <label className="block">
            <span className="font-semibold text-[14px] text-white  leading-[120%]">
              Message *
            </span>
            <textarea
              required
              name="message"
              rows={4}
              value={values.message}
              onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
              className="mt-2 w-full resize-y rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              placeholder="How can we help?"
            />
          </label>
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-[8px] border border-white/90 px-4.5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
              Send Message
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
