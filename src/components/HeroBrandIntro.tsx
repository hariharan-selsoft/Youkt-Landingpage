"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";

export interface HeroBrandIntroProps {
  /** Scroll progress (0 to 1) from the parent Hero container */
  scrollYProgress?: MotionValue<number>;
  className?: string;
}

export default function HeroBrandIntro({
  scrollYProgress,
  className = "",
}: HeroBrandIntroProps) {
  const prefersReduced = useReducedMotion();

  // Container and Letter ref specifically for letter K
  const wordmarkContainerRef = useRef<HTMLDivElement>(null);
  const kRef = useRef<HTMLSpanElement>(null);

  // Fallback constant motion value if rendered standalone (e.g. preview)
  const defaultProgress = useTransform(() => 0);
  const progress = scrollYProgress ?? defaultProgress;

  // ---------------------------------------------------------------------------
  // 1. Fixed Zoom Focal Point Strictly Centered on Letter "K"
  // ---------------------------------------------------------------------------
  // Default to optical center of K in YOUKT (~71% X, 50% Y)
  const [kOrigin, setKOrigin] = useState<{ x: number; y: number }>({
    x: 71,
    y: 50,
  });

  useEffect(() => {
    function measureKOrigin() {
      if (!kRef.current || !wordmarkContainerRef.current) return;
      const containerRect = wordmarkContainerRef.current.getBoundingClientRect();
      const kRect = kRef.current.getBoundingClientRect();

      if (containerRect.width > 0 && containerRect.height > 0) {
        const kCenterX = kRect.left + kRect.width / 2;
        const kCenterY = kRect.top + kRect.height / 2;

        const px = ((kCenterX - containerRect.left) / containerRect.width) * 100;
        const py = ((kCenterY - containerRect.top) / containerRect.height) * 100;

        setKOrigin({
          x: Math.round(px * 10) / 10,
          y: Math.round(py * 10) / 10,
        });
      }
    }

    measureKOrigin();
    window.addEventListener("resize", measureKOrigin);
    return () => window.removeEventListener("resize", measureKOrigin);
  }, []);

  const fixedOrigin = `${kOrigin.x}% ${kOrigin.y}%`;

  // ---------------------------------------------------------------------------
  // 2. Storytelling Scroll Transitions
  // ---------------------------------------------------------------------------
  // Initial Copy Fade-out (early in scroll: 0.02 -> 0.15 for tagline and scroll prompt)
  const initialCopyOpacity = useTransform(progress, [0.02, 0.15], [1, 0]);
  const initialCopyY = useTransform(progress, [0.02, 0.15], [0, -32]);

  // Progressive Zoom on YOUKT Wordmark (0.04 -> 0.40) directly into the letter "K"
  const textScale = useTransform(
    progress,
    [0.04, 0.16, 0.28, 0.40],
    [1, 2.4, 8.5, 45]
  );
  const textOpacity = useTransform(progress, [0.04, 0.34, 0.40], [1, 1, 0]);
  const scrollTextY = useTransform(progress, [0.04, 0.40], [0, 24]);

  // Whole page wrapper opacity (smooth handoff to Page 2 between 0.35 and 0.46)
  const pageOpacity = useTransform(progress, [0.35, 0.46], [1, 0]);

  return (
    <motion.div
      style={prefersReduced ? undefined : { opacity: pageOpacity }}
      className={`absolute inset-0 z-20 flex flex-col justify-between items-center pointer-events-none ${className}`}
    >
      {/* ----------------------------------------------------------------- */}
      {/* MODERN AMBIENT BACKGROUND: LAYERED WARM GOLDEN AURA & DEPTH       */}
      {/* ----------------------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 44%, #FFFAEB 0%, #FEF3C7 50%, #FDE68A 100%)",
        }}
      />

      {/* Central Warm Radiant Backlight Orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] max-w-full h-[380px] bg-gradient-to-b from-[#F6C445]/30 via-[#FDE047]/15 to-transparent blur-[110px] rounded-full -z-10"
      />

      {/* Architectural subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `radial-gradient(#141517 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle top light sheen vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,255,255,0.85) 0%, transparent 70%)",
        }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* PAGE 1 CONTENT: STABLE AT REST, SCROLL-ZOOM EXCLUSIVELY ON YOUKT   */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative w-full flex-1 flex flex-col justify-between items-center pt-24 sm:pt-28 pb-8 sm:pb-10">
        {/* Top spacer for clean vertical balance */}
        <div className="w-full h-4 sm:h-6" aria-hidden="true" />

        {/* CENTER: YOUKT WORDMARK & SUPPORTING TAGLINE */}
        <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center justify-center my-auto px-4 sm:px-6">
          {/* Zooming Wordmark Container (Fixed Zoom directly through letter K) */}
          <motion.div
            ref={wordmarkContainerRef}
            style={
              prefersReduced
                ? undefined
                : {
                    scale: textScale,
                    opacity: textOpacity,
                    y: scrollTextY,
                    transformOrigin: fixedOrigin,
                  }
            }
            className="will-change-transform select-none flex flex-col items-center justify-center relative py-2"
          >
            {/* Luminous warm ambient aura centered on the wordmark */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-12 -inset-y-6 -z-10 bg-gradient-to-r from-[#F6C445]/0 via-[#F6C445]/30 to-[#F6C445]/0 blur-3xl rounded-full opacity-70 pointer-events-none"
            />

            {/* Stable Bold Typographic Headline with ref on letter K */}
            <h1 className="font-brand-wordmark text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.8rem] font-black leading-none select-none text-[#141517] flex items-start justify-center drop-shadow-[0_18px_42px_rgba(20,21,23,0.11)]">
              <span className="bg-gradient-to-b from-[#0F1013] via-[#1B1D22] to-[#2D3038] bg-clip-text text-transparent flex items-baseline tracking-[0.05em] sm:tracking-[0.07em] lg:tracking-[0.09em] gap-1.5 sm:gap-3 md:gap-4.5 lg:gap-6">
                <span className="inline-block transition-transform duration-200 hover:scale-[1.03]">Y</span>
                <span className="inline-block transition-transform duration-200 hover:scale-[1.03]">O</span>
                <span className="inline-block transition-transform duration-200 hover:scale-[1.03]">U</span>
                <span ref={kRef} className="inline-block transition-transform duration-200 hover:scale-[1.03]">K</span>
                <span className="inline-block transition-transform duration-200 hover:scale-[1.03]">T</span>
              </span>
              <span className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#8B640A] tracking-wider ml-1.5 sm:ml-2.5 lg:ml-3.5 self-start pt-1 sm:pt-2 md:pt-3 select-none drop-shadow-sm font-sans">
                ™
              </span>
            </h1>
          </motion.div>

          {/* Tagline & Copy: Fades out cleanly on scroll (Not part of zoom scaling) */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="mt-4 sm:mt-6 lg:mt-8 flex flex-col items-center text-center max-w-2xl mx-auto px-4"
          >
            {/* Modern Pill Badge for the Tagline */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-[#F2D27A] shadow-[0_4px_20px_-4px_rgba(20,21,23,0.06)] mb-3 transition-transform duration-300 hover:scale-[1.02]">
              <span className="w-2 h-2 rounded-full bg-[#8B640A] shadow-[0_0_8px_rgba(246,196,69,0.8)]" />
              <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#141517]">
                Your Hiring Partner
              </p>
            </div>

            {/* Supporting Micro-copy */}
            <p className="text-xs sm:text-sm md:text-base font-medium text-[#5E6168] max-w-lg mx-auto leading-relaxed">
              An intelligent hiring platform that helps teams streamline recruitment, manage candidates, and accelerate hiring decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
