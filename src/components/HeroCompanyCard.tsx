"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { WaveLines } from "@/components/ui/wave-lines";

export interface HeroCompanyCardProps {
  /** Scroll progress (0 to 1) from the parent Hero container */
  scrollYProgress?: MotionValue<number>;
  onNavigate?: (sectionId: string) => void;
  className?: string;
}

export default function HeroCompanyCard({
  scrollYProgress,
  onNavigate,
  className = "",
}: HeroCompanyCardProps) {
  const prefersReduced = useReducedMotion();

  // Fallback constant motion value if rendered standalone (e.g. preview)
  const defaultProgress = useTransform(() => 0.5);
  const progress = scrollYProgress ?? defaultProgress;

  // Background and Card reveal transitions (0.32 -> 0.54)
  const bgOpacity = useTransform(progress, [0.30, 0.44], [0, 1]);
  const selsoftOpacity = useTransform(progress, [0.42, 0.54], [0, 1]);
  const selsoftScale = useTransform(progress, [0.42, 0.54], [0.92, 1]);
  const selsoftY = useTransform(progress, [0.42, 0.54], [40, 0]);

  return (
    <div className={`absolute inset-0 z-30 pointer-events-none ${className}`}>
      {/* ----------------------------------------------------------------- */}
      {/* PAGE 2 UNIQUE BACKGROUND: INTERACTIVE SILK WAVE LINES CANVAS      */}
      {/* ----------------------------------------------------------------- */}
      <motion.div
        aria-hidden="true"
        style={prefersReduced ? undefined : { opacity: bgOpacity }}
        className="pointer-events-auto absolute inset-0 z-0 overflow-hidden bg-[#F6C445]"
      >
        {/* Ambient warm radial glow in the center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 75% at 50% 50%, #FFFAEB 0%, #FCD34D 55%, #F6C445 100%)",
          }}
        />

        {/* Primary Warm Golden Silk Wave Lines (Interactive with mouse pointer) */}
        <WaveLines
          lines={44}
          amplitude={34}
          speed={1.1}
          interactive={true}
          className="text-[#8B640A] opacity-75"
        />

        {/* Shimmering Sunlight Highlight Wave Lines */}
        <WaveLines
          lines={28}
          amplitude={24}
          speed={0.8}
          interactive={true}
          className="text-white/50 opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_90%)]"
        />

        {/* Ambient luminous depth sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 85% 70% at 50% 48%, rgba(255,255,255,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Architectural subtle dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#141517 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* ----------------------------------------------------------------- */}
      {/* PAGE 2 CONTENT: MODERN HERO HEADLINE & 3 FANNED CARDS (IMAGE 1 & 2)*/}
      {/* ----------------------------------------------------------------- */}
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
        className="absolute inset-0 z-10 flex flex-col items-center justify-between pt-20 sm:pt-24 pb-0 px-4 sm:px-6 pointer-events-none will-change-transform overflow-hidden"
      >
        {/* ============================================================= */}
        {/* TOP SECTION: A SINGLE SENTENCE ABOUT THE PRODUCT              */}
        {/* ============================================================= */}
        <div className="pointer-events-auto w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center shrink-0 z-30 pt-6 sm:pt-8 md:pt-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] text-[#141517] font-semibold tracking-tight leading-relaxed max-w-xl mx-auto drop-shadow-sm font-brand-wordmark">
            An intelligent hiring platform that helps teams streamline recruitment, manage candidates, and accelerate hiring decisions.
          </p>
        </div>

        {/* ============================================================= */}
        {/* BOTTOM SECTION: 3 FANNED DECK CARDS (IMAGE 1)                 */}
        {/* Three cards fanned out in perspective, center card featured   */}
        {/* ============================================================= */}
        <div className="pointer-events-auto relative w-full max-w-[1040px] mx-auto flex items-end justify-center h-[270px] sm:h-[330px] md:h-[385px] lg:h-[420px] perspective-[1200px] mt-auto">
          {/* LEFT FANNED CARD */}
          <div
            className="absolute bottom-0 w-[220px] sm:w-[275px] md:w-[320px] lg:w-[350px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[395px] rounded-[22px] sm:rounded-[28px] bg-white/92 backdrop-blur-xl border border-[#F2D27A]/80 shadow-[0_20px_45px_-12px_rgba(20,21,23,0.16)] transition-all duration-300 z-10 cursor-pointer overflow-hidden"
            style={{
              transform: "translateX(-45%) rotate(-7deg) translateY(16px)",
              transformOrigin: "bottom center",
            }}
          >
            {/* Top signature YouKT yellow accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F6C445]" />
          </div>

          {/* RIGHT FANNED CARD */}
          <div
            className="absolute bottom-0 w-[220px] sm:w-[275px] md:w-[320px] lg:w-[350px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[395px] rounded-[22px] sm:rounded-[28px] bg-white/92 backdrop-blur-xl border border-[#F2D27A]/80 shadow-[0_20px_45px_-12px_rgba(20,21,23,0.16)] transition-all duration-300 z-10 cursor-pointer overflow-hidden"
            style={{
              transform: "translateX(45%) rotate(7deg) translateY(16px)",
              transformOrigin: "bottom center",
            }}
          >
            {/* Top signature YouKT yellow accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F6C445]" />
          </div>

          {/* CENTER ELEVATED CARD - SELSOFT PRODUCT */}
          <div
            className="group relative w-[240px] sm:w-[295px] md:w-[340px] lg:w-[370px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[415px] rounded-[24px] sm:rounded-[30px] bg-gradient-to-b from-[#FFFDF8] via-white to-[#FFFDF5] backdrop-blur-2xl border border-[#F2D27A] shadow-[0_25px_60px_-15px_rgba(20,21,23,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 z-20 cursor-pointer overflow-hidden flex flex-col justify-between"
            style={{
              transform: "translateY(0px)",
              transformOrigin: "bottom center",
            }}
          >
            {/* Top signature YouKT yellow accent bar with luminous sheen */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F6C445] via-[#FFE58F] to-[#F6C445] z-30" />

            {/* Warm golden-yellow gradient shade pouring from top */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 inset-x-0 h-36 sm:h-44 md:h-52 bg-gradient-to-b from-[#F6C445]/24 via-[#FCD34D]/08 to-transparent z-10"
            />

            {/* Stage spotlight glow behind characters */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#FEF3C7]/45 via-[#FFFBEB]/20 to-transparent z-10"
            />

            {/* Soft luminous ambient backlight inside center card */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#F6C445]/25 blur-2xl z-10" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-[#F2D27A]/15 blur-xl z-10" />

            {/* Architectural subtle dot grid overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
              style={{
                backgroundImage: `radial-gradient(#8B640A 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-20 w-full h-full flex flex-col justify-between items-center text-center pt-5 sm:pt-6 md:pt-7 pb-2 sm:pb-3 px-3 sm:px-4">
              {/* ----------------------------------------------------------- */}
              {/* TOP: "[SELSOFT LOGO] / PRODUCT" (Modern Brand Plaque)       */}
              {/* ----------------------------------------------------------- */}
              <div className="flex flex-col items-center justify-center w-full shrink-0 pt-1">
                {/* Selsoft Logo */}
                <div className="mb-1.5 sm:mb-2 flex items-center justify-center">
                  <Image
                    src="/selsoft-logo.png"
                    alt="Selsoft Inc."
                    width={397}
                    height={111}
                    className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                    priority
                  />
                </div>

                {/* Sleek PRODUCT hallmark with subtle side rules */}
                <div className="flex items-center justify-center gap-2.5">
                  <span className="h-px w-5 sm:w-7 bg-gradient-to-r from-transparent via-[#D4CFC4] to-[#D4CFC4]" />
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.34em] text-[#5E6168] uppercase select-none">
                    PRODUCT
                  </span>
                  <span className="h-px w-5 sm:w-7 bg-gradient-to-l from-transparent via-[#D4CFC4] to-[#D4CFC4]" />
                </div>
              </div>

              {/* ----------------------------------------------------------- */}
              {/* LOWER PART: HIRING & RECRUITMENT TEAM ILLUSTRATION          */}
              {/* ----------------------------------------------------------- */}
              <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden mt-1 sm:mt-2">
                {/* Illustration grounded on stage */}
                <Image
                  src="/selsoft-celebration-team.png"
                  alt="Selsoft Hiring Team and Candidate Matching"
                  width={612}
                  height={408}
                  className="w-full h-auto max-h-[165px] sm:max-h-[205px] md:max-h-[245px] lg:max-h-[270px] object-contain object-bottom pointer-events-none opacity-85 sm:opacity-90 mix-blend-multiply drop-shadow-xs transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
