'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'scale-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantMap: Record<AnimationVariant, { hidden: any; visible: any }> = {
  'fade-up': {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: 45 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: -45 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    hidden: { opacity: 0, scale: 1.08 },
    visible: { opacity: 1, scale: 1 },
  },
  'flip-up': {
    hidden: { opacity: 0, rotateX: 20, y: 25 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  once = false,
  className = '',
  style,
  as = 'div',
}: ScrollRevealProps) {
  const Component = (motion as any)[as] || motion.div;
  const config = variantMap[variant];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: config.hidden,
        visible: {
          ...config.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  ref?: React.Ref<any>;
}

export const StaggerContainer = React.forwardRef<any, StaggerContainerProps>(
  function StaggerContainer(
    {
      children,
      staggerDelay = 0.1,
      delayChildren = 0.05,
      threshold = 0.12,
      once = false,
      className = '',
      style,
      as = 'div',
    },
    ref,
  ) {
    const Component = (motion as any)[as] || motion.div;

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delayChildren,
        },
      },
    };

    return (
      <Component
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: threshold }}
        variants={containerVariants}
        className={className}
        style={style}
      >
        {children}
      </Component>
    );
  },
);

interface StaggerItemProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export function StaggerItem({
  children,
  variant = 'fade-up',
  duration = 0.5,
  className = '',
  style,
  as = 'div',
}: StaggerItemProps) {
  const Component = (motion as any)[as] || motion.div;
  const config = variantMap[variant];

  const itemVariants: Variants = {
    hidden: config.hidden,
    visible: {
      ...config.visible,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component variants={itemVariants} className={className} style={style}>
      {children}
    </Component>
  );
}
