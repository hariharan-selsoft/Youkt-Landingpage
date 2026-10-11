"use client";

import React from "react";
import { motion } from "motion/react";

interface ScrollPlacingSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function ScrollPlacingSection({
  children,
  id,
  className = "",
  delay = 0,
  yOffset = 36,
}: ScrollPlacingSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: yOffset, scale: 0.988 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.06, margin: "-20px 0px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function ScrollPlacingItem({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextAutoAlign: Auto-aligns text elements from an offset (left, right, up, down)
 * into their exact aligned grid position as the user scrolls into view.
 */
export function TextAutoAlign({
  children,
  className = "",
  direction = "up",
  distance = 28,
  delay = 0,
  blur = true,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  blur?: boolean;
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "down":
        return { x: 0, y: -distance };
      case "up":
      default:
        return { x: 0, y: distance };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialPos.x,
        y: initialPos.y,
        filter: blur ? "blur(6px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

