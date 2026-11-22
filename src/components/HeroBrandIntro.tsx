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
  // Default to optical center of K in YOUKT (~70.5% X, 50% Y)
  const [kOrigin, setKOrigin] = useState<{ x: number; y: number }>({
    x: 70.5,
    y: 50,
  });

  useEffect(() => {
    function measureKOrigin() {
      // Only measure when at top and unscaled to prevent transformed coordinates
      if (typeof window !== "undefined" && window.scrollY > 20) return;
      if (!kRef.current || !wordmarkContainerRef.current) return;
      const containerRect = wordmarkContainerRef.current.getBoundingClientRect();
      const kRect = kRef.current.getBoundingClientRect();

      if (containerRect.width > 0 && containerRect.height > 0) {
        const kCenterX = kRect.left + kRect.width / 2;
        const kCenterY = kRect.top + kRect.height / 2;

        const px = ((kCenterX - containerRect.left) / containerRect.width) * 100;
        const py = ((kCenterY - containerRect.top) / containerRect.height) * 100;

        // Strict bounds validation (K in YOUKT is always between 55% and 82%)
        if (!isNaN(px) && !isNaN(py) && px > 50 && px < 85) {
          setKOrigin({
            x: Math.round(px * 10) / 10,
            y: Math.round(py * 10) / 10,
          });
        }
      }
    }

    measureKOrigin();
    const timer = setTimeout(measureKOrigin, 150);
    window.addEventListener("resize", measureKOrigin);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureKOrigin);
    };
  }, []);

  const fixedOrigin = `${kOrigin.x}% ${kOrigin.y}%`;

  // ---------------------------------------------------------------------------
  // 2. Storytelling Scroll Transitions (Bi-directional Smooth & GPU Friendly)
  // ---------------------------------------------------------------------------
  // Initial Copy Fade-out (early in scroll: 0.01 -> 0.10 for tagline and scroll prompt)
  const initialCopyOpacity = useTransform(progress, [0.01, 0.10], [1, 0]);
  const initialCopyY = useTransform(progress, [0.01, 0.10], [0, -20]);

  // Progressive Zoom on YOUKT Wordmark (0.03 -> 0.28) directly through the letter "K"
  // Kept within GPU hardware texture dimensions (scale max 6.8x) to prevent tile dropping on reverse scroll
  const textScale = useTransform(
    progress,
    [0.03, 0.12, 0.20, 0.28],
    [1, 1.8, 3.6, 6.8]
  );
  const textOpacity = useTransform(progress, [0.03, 0.20, 0.28], [1, 1, 0]);
  const scrollTextY = useTransform(progress, [0.03, 0.28], [0, 16]);

  // Dynamic Slant on YOUKT Wordmark while scrolling (0.02 -> 0.28)
  const textRotate = useTransform(
    progress,
    [0.02, 0.10, 0.18, 0.28],
    [0, -2.5, -5.5, -8.5]
  );
  const textSkewX = useTransform(
    progress,
    [0.02, 0.10, 0.18, 0.28],
    [0, -2, -4.5, -6.5]
  );

  // Whole page wrapper opacity (smooth handoff between 0.18 and 0.28)
  const pageOpacity = useTransform(progress, [0.18, 0.28], [1, 0]);
  const pagePointerEvents = useTransform(progress, (v) =>
    v >= 0.24 ? "none" : "auto"
  );

  return (
    <motion.div
      style={
        prefersReduced
          ? undefined
          : {
              opacity: pageOpacity,
              pointerEvents: pagePointerEvents,
            }
      }
      className={`absolute inset-0 z-20 flex flex-col justify-between items-center ${className}`}
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
      {/* PAGE 1 CONTENT: COMPACT UNIFIED HERO BLOCK (NO EMPTY DEAD SPACE)  */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center justify-center text-center my-auto">
          {/* Top Eyebrow Badge: Directly above wordmark */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="mb-3.5 sm:mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#F2D27A] shadow-[0_2px_14px_rgba(20,21,23,0.05)] transition-transform duration-300 hover:scale-[1.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] shadow-[0_0_8px_#F6C445]" />
              <span className="text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#8B640A]">
                Next-Gen Talent Intelligence
              </span>
            </div>
          </motion.div>

          {/* CENTER: YOUKT WORDMARK */}
          <motion.div
            ref={wordmarkContainerRef}
            style={
              prefersReduced
                ? undefined
                : {
                    scale: textScale,
                    opacity: textOpacity,
                    y: scrollTextY,
                    rotate: textRotate,
                    skewX: textSkewX,
                    transformOrigin: fixedOrigin,
                  }
            }
            className="will-change-transform select-none flex flex-col items-center justify-center relative py-1 sm:py-2"
          >
            {/* Luminous warm ambient aura centered on the wordmark */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-12 sm:-inset-x-16 -inset-y-6 sm:-inset-y-8 -z-10 bg-gradient-to-r from-transparent via-[#F6C445]/35 to-transparent blur-2xl sm:blur-3xl rounded-full opacity-80 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 sm:-inset-x-8 -inset-y-3 sm:-inset-y-4 -z-10 bg-radial-[ellipse_80%_60%_at_50%_50%] from-[#FFE58F]/40 via-transparent to-transparent blur-xl sm:blur-2xl pointer-events-none"
            />

            {/* Stylized Typographic Headline (NO TM, Signature K Highlight) */}
            <h1 className="font-brand-wordmark text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-black leading-none select-none flex items-baseline justify-center tracking-[-0.01em] sm:tracking-[0.01em] lg:tracking-[0.02em] text-[#141517]">
              <span className="flex items-baseline gap-1.5 sm:gap-2.5 md:gap-3.5 lg:gap-5">
                <span className="inline-block text-[#141517] drop-shadow-[0_12px_28px_rgba(20,21,23,0.12)]">
                  Y
                </span>
                <span className="inline-block text-[#141517] drop-shadow-[0_12px_28px_rgba(20,21,23,0.12)]">
                  O
                </span>
                <span className="inline-block text-[#141517] drop-shadow-[0_12px_28px_rgba(20,21,23,0.12)]">
                  U
                </span>
                {/* Focal Letter K: Luminous Golden-Amber Signature Finish */}
                <span
                  ref={kRef}
                  className="relative inline-block text-[#DDA010] bg-gradient-to-b from-[#F6C445] via-[#DDA010] to-[#8B640A] bg-clip-text [-webkit-text-fill-color:transparent] drop-shadow-[0_12px_28px_rgba(246,196,69,0.42)]"
                >
                  K
                  {/* Subtle highlight glint on letter K */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-1 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFF9E6] blur-[1px] opacity-90 animate-pulse"
                  />
                </span>
                <span className="inline-block text-[#141517] drop-shadow-[0_12px_28px_rgba(20,21,23,0.12)]">
                  T
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Tagline & Copy: Sits gracefully below wordmark with compact, tight spacing */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="mt-4 sm:mt-6 lg:mt-7 flex flex-col items-center text-center max-w-xl mx-auto px-4"
          >
            {/* Modern Editorial Tagline */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="h-px w-5 sm:w-8 bg-gradient-to-r from-transparent via-[#8B640A]/40 to-[#8B640A]/70" />
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[1.85rem] font-bold tracking-tight text-[#141517]">
                <span>Your </span>
                <span className="font-editorial-serif text-[#8B640A] font-normal italic text-xl sm:text-3xl md:text-4xl lg:text-[2.25rem]">
                  Hiring Partner.
                </span>
              </h2>
              <span className="h-px w-5 sm:w-8 bg-gradient-to-l from-transparent via-[#8B640A]/40 to-[#8B640A]/70" />
            </div>

            {/* Supporting Micro-copy */}
            <p className="text-xs sm:text-sm md:text-[15px] font-normal text-[#5E6168] max-w-sm sm:max-w-md mx-auto leading-relaxed">
              An autonomous talent alignment platform streamlining candidate discovery, automated recruitment pipelines, and verified hiring decisions.
            </p>
          </motion.div>

          {/* Bottom Animated Scroll Indicator */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-1.5 text-center select-none"
          >
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#8B640A]/80 font-semibold">
              Scroll to Discover
            </span>
            <div className="w-4 h-6 sm:h-7 rounded-full border-2 border-[#8B640A]/40 flex items-start justify-center p-0.5">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-[#8B640A]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
