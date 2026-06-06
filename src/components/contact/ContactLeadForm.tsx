'use client';

import { useActionState, useEffect, useRef, useState, type ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

import { submitContactForm } from '@/app/contact/actions';
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { contactFormInitialState } from '@/lib/contact/contact-form-state';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

/** Fields on the gradient contact card — extends shadcn defaults without forking primitives */
const contactFieldClassName = cn(
  'mt-3 h-auto min-h-0 rounded-lg border-brand-neutral-200/25 bg-white/5 p-4 text-base leading-[120%] tracking-[-0.5px]',
  'text-white shadow-none placeholder:text-white/50',
  'focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/30',
  'disabled:opacity-70 disabled:bg-white/5 dark:bg-white/5 dark:disabled:bg-white/5',
  'aria-invalid:border-red-300/80 aria-invalid:ring-red-200/40',
);

const THANK_YOU_VISIBLE_MS = 10_000;

function ContactFieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-semibold text-sm text-neutral-50 leading-[120%] tracking-[-0.5px]">
        {children}
      </span>
    </label>
  );
}

function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="marketingOnDark" size="form-submit" disabled={pending}>
      {pending ? (
        <>
          Sending...
          <Loader2 size={16} className="animate-spin" aria-hidden />
        </>
      ) : (
        <>
          Send Message
          <ArrowRight size={16} strokeWidth={2} aria-hidden />
        </>
      )}
    </Button>
  );
}

export function ContactLeadForm() {
  const [state, formAction] = useActionState(submitContactForm, contactFormInitialState);
  const [dismissedSuccessAt, setDismissedSuccessAt] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const wasSuccessful = useRef(false);

  const showThankYou = state.successAt != null && dismissedSuccessAt !== state.successAt;

  useEffect(() => {
    if (state.success && !wasSuccessful.current) {
      formRef.current?.reset();
    }
    wasSuccessful.current = state.success;
  }, [state.success]);

  useEffect(() => {
    if (state.successAt == null) return;

    const successAt = state.successAt;
    const timer = window.setTimeout(() => {
      setDismissedSuccessAt(successAt);
    }, THANK_YOU_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, [state.successAt]);

  return (
    <ScrollReveal
      variant="slideInRight"
      delay={0.06}
      className="grid w-full gap-6 rounded-3xl bg-linear-to-b from-[#063595] to-[#254991] px-4 py-6 shadow-xl md:gap-7 md:p-7 lg:gap-12.5 xl:px-10 xl:py-12.5">
      <div>
        <p className="text-center text-sm font-medium uppercase leading-[110%] tracking-[-0.8px] text-brand-accent-100 lg:text-base">
          Contact us
        </p>
        <h2 className="mt-3 text-center text-4xl font-semibold leading-none text-white">
          Tell us how we can help.
        </h2>
      </div>

      <form ref={formRef} action={formAction} noValidate className="grid gap-12">
        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <ContactFieldLabel htmlFor="fullName">Full Name *</ContactFieldLabel>
              <Input
                id="fullName"
                name="fullName"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className={contactFieldClassName}
                aria-invalid={!!state.fieldErrors.fullName}
                aria-describedby={
                  state.fieldErrors.fullName ? 'fullName-error' : undefined
                }
              />
              {state.fieldErrors.fullName ? (
                <p
                  id="fullName-error"
                  role="alert"
                  className="mt-1.5 text-xs text-red-300">
                  {state.fieldErrors.fullName}
                </p>
              ) : null}
            </div>
            <div>
              <ContactFieldLabel htmlFor="email">Email Address *</ContactFieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={contactFieldClassName}
                aria-invalid={!!state.fieldErrors.email}
                aria-describedby={state.fieldErrors.email ? 'email-error' : undefined}
              />
              {state.fieldErrors.email ? (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-300">
                  {state.fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <ContactFieldLabel htmlFor="profession">
              Profession (optional)
            </ContactFieldLabel>
            <Input
              id="profession"
              name="profession"
              autoComplete="organization-title"
              placeholder="Profession"
              className={contactFieldClassName}
            />
          </div>

          <div>
            <ContactFieldLabel htmlFor="message">Message *</ContactFieldLabel>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="How can we help?"
              className={cn(
                contactFieldClassName,
                'field-sizing-fixed min-h-40 resize-y',
              )}
              aria-invalid={!!state.fieldErrors.message}
              aria-describedby={state.fieldErrors.message ? 'message-error' : undefined}
            />
            {state.fieldErrors.message ? (
              <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-300">
                {state.fieldErrors.message}
              </p>
            ) : null}
          </div>

          {state.error && Object.keys(state.fieldErrors).length === 0 ? (
            <p className="text-center text-sm text-red-200" role="alert">
              {state.error}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col items-center gap-0 pt-2">
          <ContactSubmitButton />
          {showThankYou ? (
            <p
              className="mt-8 max-w-md animate-in fade-in duration-300 text-center text-base leading-relaxed text-white/95"
              role="status"
              aria-live="polite">
              Thanks — we&apos;ve received your message. Our team will get back to you
              soon.
            </p>
          ) : null}
        </div>
      </form>
    </ScrollReveal>
  );
}
