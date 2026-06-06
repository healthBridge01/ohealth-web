'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useId } from 'react';

import { easeOutSmooth } from '@/lib/motion/presets';
import { cn } from '@/lib/utils';

type BrandLogoMarkProps = {
  className?: string;
  size?: number;
  /** When true, runs the intro animation (splash). When false, renders static mark. */
  animate?: boolean;
};

export function BrandLogoMark({
  className,
  size = 96,
  animate = false,
}: BrandLogoMarkProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, '');
  const gradientId = `brand-heart-${uid}`;
  const shouldAnimate = animate && !reduceMotion;

  const heartTransition = shouldAnimate
    ? { type: 'spring' as const, stiffness: 280, damping: 20, mass: 0.85 }
    : { duration: 0 };

  const plusTransition = shouldAnimate
    ? { duration: 0.45, ease: easeOutSmooth }
    : { duration: 0 };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('overflow-visible', className)}
      aria-hidden>
      <defs>
        <linearGradient
          id={gradientId}
          x1="2"
          y1="11.9994"
          x2="22"
          y2="11.9994"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#063595" />
          <stop offset="1" stopColor="#254991" />
        </linearGradient>
      </defs>

      <motion.g
        style={{ transformOrigin: '12px 12px' }}
        initial={shouldAnimate ? { scale: 0.68, opacity: 0 } : false}
        animate={
          shouldAnimate
            ? { scale: [0.68, 1.06, 1], opacity: 1 }
            : { scale: 1, opacity: 1 }
        }
        transition={
          shouldAnimate
            ? {
                scale: {
                  times: [0, 0.72, 1],
                  duration: 0.9,
                  ease: easeOutSmooth,
                },
                opacity: { duration: 0.35, ease: easeOutSmooth },
              }
            : heartTransition
        }>
        <path
          d="M19.4626 3.99354C16.7809 2.34862 14.4404 3.0115 13.0344 4.0674C12.4578 4.50035 12.1696 4.71682 12 4.71682C11.8304 4.71682 11.5422 4.50035 10.9656 4.0674C9.55962 3.0115 7.21909 2.34862 4.53744 3.99354C1.01807 6.15232 0.221718 13.2742 8.33953 19.2827C9.88572 20.4272 10.6588 20.9994 12 20.9994C13.3412 20.9994 14.1143 20.4272 15.6605 19.2827C23.7783 13.2742 22.9819 6.15232 19.4626 3.99354Z"
          fill={`url(#${gradientId})`}
        />
      </motion.g>

      <motion.path
        d="M12 9V15"
        stroke="#D1E0FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transformOrigin: '12px 12px' }}
        initial={shouldAnimate ? { scaleY: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { scaleY: 1, opacity: 1 } : undefined}
        transition={shouldAnimate ? { ...plusTransition, delay: 0.38 } : plusTransition}
      />
      <motion.path
        d="M9 12H15"
        stroke="#D1E0FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transformOrigin: '12px 12px' }}
        initial={shouldAnimate ? { scaleX: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { scaleX: 1, opacity: 1 } : undefined}
        transition={shouldAnimate ? { ...plusTransition, delay: 0.52 } : plusTransition}
      />
    </svg>
  );
}
