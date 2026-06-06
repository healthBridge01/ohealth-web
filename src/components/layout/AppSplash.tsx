'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

import { BrandLogoMark } from '@/components/brand/BrandLogoMark';
import { easeOutSmooth } from '@/lib/motion/presets';
import { cn } from '@/lib/utils';

/** Time the splash stays fully visible before fade-out (~4s total with exit) */
const SPLASH_HOLD_MS = 3400;
const SPLASH_EXIT_MS = 550;
const SPLASH_REDUCED_MS = 1000;

export function AppSplash() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const holdMs = reduceMotion ? SPLASH_REDUCED_MS : SPLASH_HOLD_MS;

    const exitTimer = window.setTimeout(() => {
      setActive(false);
    }, holdMs);

    return () => window.clearTimeout(exitTimer);
  }, [active, reduceMotion]);

  return (
    <AnimatePresence mode="wait">
      {active ? (
        <motion.div
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
          <motion.div
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

          <motion.div
            className="relative flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              duration: reduceMotion ? 0.15 : 0.65,
              ease: easeOutSmooth,
            }}>
            <motion.div
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
            </motion.div>

            <motion.p
              className="text-xl font-semibold tracking-[-0.8px] text-brand-black-800 sm:text-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduceMotion ? 0 : 0.8,
                duration: 0.5,
                ease: easeOutSmooth,
              }}>
              OHealth+
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
