'use client';

import { motion, useReducedMotion, type Transition } from 'motion/react';
import type { ReactNode } from 'react';

import {
  motionVariantMap,
  staggerContainer,
  transitionDefault,
  viewportDefault,
  type MotionVariantName,
} from '@/lib/motion/presets';
import { cn } from '@/lib/utils';

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  main: motion.main,
  ul: motion.ul,
  li: motion.li,
  footer: motion.footer,
} as const;

type MotionTag = keyof typeof motionTags;

type ScrollRevealProps = {
  as?: MotionTag;
  variant?: MotionVariantName;
  /** Animate on mount (heroes, page headers above the fold). */
  aboveFold?: boolean;
  delay?: number;
  className?: string;
  children?: ReactNode;
  id?: string;
};

export function ScrollReveal({
  as = 'div',
  variant = 'fadeUp',
  aboveFold = false,
  delay = 0,
  className,
  children,
  id,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motionTags[as];
  const variants = motionVariantMap[variant];
  const transition: Transition = { ...transitionDefault, delay };

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  if (aboveFold) {
    return (
      <MotionComponent
        id={id}
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}>
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={variants}
      transition={transition}>
      {children}
    </MotionComponent>
  );
}

type ScrollRevealGroupProps = {
  className?: string;
  children?: ReactNode;
  stagger?: number;
};

export function ScrollRevealGroup({
  className,
  children,
  stagger = 0.09,
}: ScrollRevealGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={{
        ...staggerContainer,
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: 0.06,
          },
        },
      }}>
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  className?: string;
  children?: ReactNode;
  variant?: MotionVariantName;
};

export function ScrollRevealItem({
  className,
  children,
  variant = 'fadeUp',
}: ScrollRevealItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={motionVariantMap[variant]}>
      {children}
    </motion.div>
  );
}
