"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

export function ScrollPlacingItem({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
  scaleFrom = 0.975,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  scaleFrom?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReduced ? false : { opacity: 0, y: yOffset, scale: scaleFrom }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14, margin: "-24px 0px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollDownReveal: Scroll-linked appear animation that progresses smoothly
 * strictly while scrolling down (progress latches upward so scrolling up
 * never hides already-revealed elements).
 */
export function ScrollDownReveal({
  children,
  className = "",
  fromY = 44,
  fromX = 0,
  fromScale = 0.95,
  stagger = 0,
}: {
  children: React.ReactNode;
  className?: string;
  fromY?: number;
  fromX?: number;
  fromScale?: number;
  /** Value between 0 and 0.3 to stagger elements in the same horizontal row */
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "start 70%"],
  });

  // Latches upward so elements appear while scrolling down and stay visible when scrolling up
  const latchedProgress = useMotionValue(0);

  useEffect(() => {
    const current = scrollYProgress.get();
    if (current > latchedProgress.get()) {
      latchedProgress.set(current);
    }
  }, [scrollYProgress, latchedProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > latchedProgress.get()) {
      latchedProgress.set(latest);
    }
  });

  const smooth = useSpring(latchedProgress, {
    stiffness: 115,
    damping: 22,
    mass: 0.3,
  });

  const start = Math.min(Math.max(stagger, 0), 0.32);
  const end = Math.min(start + 0.68, 1);

  const opacity = useTransform(smooth, [start, end], [0, 1]);
  const y = useTransform(smooth, [start, end], [fromY, 0]);
  const x = useTransform(smooth, [start, end], [fromX, 0]);
  const scale = useTransform(smooth, [start, end], [fromScale, 1]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? undefined : { opacity, y, x, scale }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ScrollParallaxLift({
  children,
  className = "",
  fromY = 48,
  toY = -18,
}: {
  children: React.ReactNode;
  className?: string;
  fromY?: number;
  toY?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    mass: 0.25,
  });
  const y = useTransform(smoothProgress, [0, 1], [fromY, toY]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? undefined : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
