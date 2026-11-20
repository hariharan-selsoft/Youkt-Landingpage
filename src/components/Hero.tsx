"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Storytelling scroll track (280vh provides ~2.8 viewports of smooth, deliberate progression)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ---------------------------------------------------------------------------
  // 1. Initial Hero Copy Fade-out (early in scroll: 0.02 -> 0.15)
  // ---------------------------------------------------------------------------
  const initialCopyOpacity = useTransform(
    scrollYProgress,
    [0.02, 0.15],
    [1, 0]
  );
  const initialCopyY = useTransform(scrollYProgress, [0.02, 0.15], [0, -32]);

  // ---------------------------------------------------------------------------
  // 2. Progressive Typography Zoom (0.04 -> 0.40)
  // Direct scroll-linked zoom into the letter stroke from reference video
  // ---------------------------------------------------------------------------
  const textScale = useTransform(
    scrollYProgress,
    [0.04, 0.16, 0.28, 0.40],
    [1, 2.4, 8.5, 45]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.34, 0.40],
    [1, 1, 0]
  );
  const textY = useTransform(scrollYProgress, [0.04, 0.40], [0, 24]);

  // ---------------------------------------------------------------------------
  // 3. Branded Yellow Surface Transition (0.14 -> 0.36)
  // Deepens from initial soft yellow shade to saturated signature YouKT yellow
  // ---------------------------------------------------------------------------
  const yellowBgOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.34],
    [0, 1]
  );

  // ---------------------------------------------------------------------------
  // 4. Selsoft Company Reveal (0.42 -> 1.0)
  // Enters cleanly on pure yellow surface, remains 100% solid & readable until unpin
  // ---------------------------------------------------------------------------
  const selsoftOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.54],
    [0, 1]
  );
  const selsoftScale = useTransform(
    scrollYProgress,
    [0.42, 0.54],
    [0.92, 1]
  );
  const selsoftY = useTransform(
    scrollYProgress,
    [0.42, 0.54],
    [40, 0]
  );

  // Soft bottom feather as container transitions into the next section (0.86 -> 0.98)
  const bottomFeatherOpacity = useTransform(
    scrollYProgress,
    [0.86, 0.98],
    [0, 1]
  );

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#FEF3C7]"
    >
      {/* Pinned Fullscreen Storytelling Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8">

        {/* ----------------------------------------------------------------- */}
        {/* INITIAL HERO BACKGROUND: WARM BRAND YELLOW SHADE                   */}
        {/* ----------------------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 42%, #FFF8DC 0%, #FEF0B3 48%, #FDE488 100%)",
          }}
        />

        {/* Subtle architectural dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#141517 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* ----------------------------------------------------------------- */}
        {/* BRANDED FULL-SCREEN YELLOW TRANSITION SURFACE                     */}
        {/* Deepens into radiant rich YouKT brand yellow as user scrolls      */}
        {/* ----------------------------------------------------------------- */}
        <motion.div
          aria-hidden="true"
          style={
            prefersReduced
              ? { opacity: 0 }
              : {
                  opacity: yellowBgOpacity,
                }
          }
          className="pointer-events-none absolute inset-0 z-10 will-change-[opacity]"
        >
          {/* Radiant Deep YouKT Yellow Gradient */}
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 46%, #FFDE7A 0%, #F6C445 52%, #E5AF28 100%)",
            }}
          />
          {/* Subtle soft luminous sheen */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.9) 0%, transparent 65%)",
            }}
          />
        </motion.div>

        {/* Seamless bottom fade into MetricsRow (#FAF8F5) */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: bottomFeatherOpacity }}
          className="pointer-events-none absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent z-20 will-change-[opacity]"
        />

        {/* ================================================================= */}
        {/* 1. INITIAL HERO CONTENT (Bold typography-focused product intro)   */}
        {/* ================================================================= */}
        <div className="relative z-20 w-full flex-1 flex flex-col justify-between items-center pt-24 sm:pt-28 pb-8 sm:pb-10 pointer-events-none">

          {/* Minimal Top Subtitle / Pill */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="flex items-center justify-center pt-2 sm:pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#F2D27A] shadow-[0_2px_12px_rgba(20,21,23,0.06)] text-xs font-semibold text-[#141517]">
              <span className="w-2 h-2 rounded-full bg-[#8B640A] animate-pulse" />
              <span>Intelligent Recruitment Infrastructure</span>
            </div>
          </motion.div>

          {/* CENTER: GIGANTIC TYPOGRAPHY & TAGLINE */}
          <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center justify-center my-auto px-2 sm:px-4">

            {/* Oversized Scalable Word: YOUKT */}
            <motion.div
              style={
                prefersReduced
                  ? undefined
                  : {
                      scale: textScale,
                      opacity: textOpacity,
                      y: textY,
                      transformOrigin: "67% 50%",
                    }
              }
              className="will-change-transform select-none flex items-center justify-center"
            >
              <h1 className="font-black tracking-[-0.04em] uppercase leading-[0.86] text-center whitespace-nowrap text-[21vw] sm:text-[19vw] lg:text-[17vw] xl:text-[15.8vw] text-[#141517]">
                <span>YOU</span>
                <span className="text-[#C98908] inline-block">K</span>
                <span>T</span>
              </h1>
            </motion.div>

            {/* Tagline: Your Hiring Partner */}
            <motion.div
              style={
                prefersReduced
                  ? undefined
                  : { opacity: initialCopyOpacity, y: initialCopyY }
              }
              className="mt-4 sm:mt-6 lg:mt-8 flex flex-col items-center text-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight text-[#141517]">
                Your Hiring Partner
              </p>
              <div className="mt-2.5 h-1 w-14 rounded-full bg-[#141517]" />
            </motion.div>
          </div>

          {/* Bottom Scroll Prompt */}
          <motion.div
            style={
              prefersReduced
                ? undefined
                : { opacity: initialCopyOpacity, y: initialCopyY }
            }
            className="flex flex-col items-center gap-1.5 pb-2 text-[#5E6168]"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] font-semibold text-[#8B640A]">
              Scroll to explore
            </span>
            <ArrowDown className="w-4 h-4 text-[#8B640A] animate-bounce" />
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* 2. SELSOFT COMPANY REVEAL (Clean white surface on Yellow Canvas)   */}
        {/* ================================================================= */}
        <motion.div
          style={
            prefersReduced
              ? { opacity: 1 }
              : {
                  opacity: selsoftOpacity,
                  scale: selsoftScale,
                  y: selsoftY,
                }
          }
          className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none will-change-transform"
        >
          <div className="pointer-events-auto w-full max-w-[620px] bg-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 border border-[#F2D27A]/60 shadow-[0_32px_80px_-20px_rgba(20,21,23,0.24)] text-center relative overflow-hidden backdrop-blur-xl">

            {/* Top signature YouKT yellow accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F6C445]" />

            {/* Subtle soft ambient glow inside card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#F6C445]/15 blur-2xl"
            />

            {/* 1. Official Selsoft Logo Asset (Reused from project) */}
            <div className="relative mb-5 flex justify-center">
              <Image
                src="/selsoft-logo.png"
                alt="Selsoft Inc."
                width={260}
                height={70}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* 2. Small Label: A Selsoft Product */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#FFF9E6] text-[#8B640A] border border-[#F2D27A] mb-4.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B640A]" />
              <span>A Selsoft Product</span>
            </div>

            {/* 3. Product Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-[#141517] tracking-tight leading-[1.14] mb-3.5">
              <span>YouKT</span>{" "}
              <span className="text-[#8B640A] font-medium">—</span>{" "}
              <span className="text-[#141517]">Your Hiring Partner</span>
            </h2>

            {/* 4. Short Product Description */}
            <p className="text-sm sm:text-[15px] lg:text-base text-[#5E6168] leading-relaxed max-w-lg mx-auto mb-7">
              An intelligent hiring platform that helps teams streamline recruitment, manage candidates and simplify the hiring process.
            </p>

            {/* 5. Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
              <button
                onClick={() => onNavigate?.("features")}
                className="w-full sm:w-auto min-w-[170px] px-6 py-3.5 rounded-full btn-youkt-pill-yellow text-xs sm:text-sm font-bold cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-[#141517]" />
              </button>
              <button
                onClick={() => onNavigate?.("resources")}
                className="w-full sm:w-auto min-w-[170px] px-6 py-3.5 rounded-full btn-youkt-pill-dark text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Request a Demo
              </button>
            </div>

            {/* Continuous scroll guidance */}
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#8E929E]">
              <span>Scroll to discover platform</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#8B640A] animate-bounce" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
