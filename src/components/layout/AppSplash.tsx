'use client';

import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { useEffect, useState, useSyncExternalStore } from 'react';

import { BrandLogoMark } from '@/components/brand/BrandLogoMark';
import { easeOutSmooth } from '@/lib/motion/presets';
import { cn } from '@/lib/utils';

/** Time the splash stays fully visible before fade-out (~4s total with exit) */
const SPLASH_HOLD_MS = 3400;
const SPLASH_EXIT_MS = 550;
const SPLASH_REDUCED_MS = 1000;

const subscribeNoop = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function AppSplash() {
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!mounted || !active) return;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mounted, active]);

  useEffect(() => {
    if (!mounted || !active) return;

    const holdMs = reduceMotion ? SPLASH_REDUCED_MS : SPLASH_HOLD_MS;

    const exitTimer = window.setTimeout(() => {
      setActive(false);
    }, holdMs);

    return () => window.clearTimeout(exitTimer);
  }, [mounted, active, reduceMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {active ? (
        <m.div
          key="app-splash"
          role="presentation"
          aria-hidden
          className={cn(
            'fixed inset-0 z-200 flex flex-col items-center justify-center',
            'bg-linear-to-br from-[#d8e5ff] via-white to-brand-gray-50',
          )}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: SPLASH_EXIT_MS / 1000, ease: easeOutSmooth }}>
          <m.div
            aria-hidden
            className="pointer-events-none absolute size-72 rounded-full bg-brand-primary-200/45 blur-3xl sm:size-96"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.85, 0.55], scale: [0.6, 1.15, 1] }}
            transition={{
              duration: reduceMotion ? 0.25 : 1.6,
              ease: easeOutSmooth,
              times: [0, 0.45, 1],
            }}
          />

          <m.div
            className="relative flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.65,
              ease: easeOutSmooth,
            }}>
            <m.div
              className="relative"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.04, 1],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      delay: 1.1,
                      duration: 1.1,
                      repeat: 1,
                      ease: easeOutSmooth,
                    }
              }>
              <BrandLogoMark size={112} animate />
            </m.div>

            <m.p
              className="text-xl font-semibold tracking-[-0.8px] text-brand-black-800 sm:text-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduceMotion ? 0 : 0.8,
                duration: 0.5,
                ease: easeOutSmooth,
              }}>
              OHealth+
            </m.p>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
