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
  // Direct scroll-linked zoom into the logo mark from reference video
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
  // 3. Branded Yellow Surface Transition (0.12 -> 0.34)
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

          {/* CENTER: OFFICIAL YOUKT LOGO TYPOGRAPHY & TAGLINE */}
          <div className="w-full max-w-[1380px] mx-auto flex flex-col items-center justify-center my-auto px-2 sm:px-4">

            {/* Oversized Scalable Word: Authentic YouKT Logo Design */}
            <motion.div
              style={
                prefersReduced
                  ? undefined
                  : {
                      scale: textScale,
                      opacity: textOpacity,
                      y: textY,
                      transformOrigin: "42% 58%",
                    }
              }
              className="will-change-transform select-none w-full max-w-[1040px] px-2 sm:px-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 372 81"
                fill="none"
                className="w-full h-auto drop-shadow-[0_8px_24px_rgba(20,21,23,0.06)]"
                aria-label="YOUKT"
                role="img"
              >
                {/* Black Letterforms (Y, O cutout, U with dual dots, K, T, TM) */}
                <path
                  fillRule="evenodd"
                  d="M 354 5 C 354 5.550, 354.450 6, 355 6 C 355.550 6, 356 7.125, 356 8.500 C 356 9.875, 356.450 11, 357 11 C 357.550 11, 358 9.902, 358 8.559 C 358 7.216, 358.450 5.840, 359 5.500 C 359.579 5.142, 360 6.105, 360 7.787 C 360 10.510, 360.251 10.692, 364 10.692 C 367.870 10.692, 368 10.583, 368 7.346 C 368 3.560, 366.489 2.883, 365.437 6.198 L 364.739 8.396 362.959 6.198 C 361.724 4.673, 360.081 4, 357.590 4 C 355.615 4, 354 4.450, 354 5 M 147.495 10.414 C 141.032 16.877, 144.927 26.477, 153.908 26.222 C 162.255 25.984, 165.870 17.564, 160.411 11.077 C 157.022 7.049, 151.161 6.748, 147.495 10.414 M 193.484 11.201 C 191.274 13.828, 190.883 15.091, 191.305 18.240 C 191.943 22.995, 193.221 24.588, 197.542 26.014 C 200.277 26.917, 201.574 26.821, 204.323 25.517 C 210.318 22.672, 211.706 16.181, 207.411 11.077 C 205.256 8.515, 204.099 8, 200.500 8 C 196.865 8, 195.750 8.509, 193.484 11.201 M 96.133 13.569 C 83.711 17.471, 77.501 29.890, 81.351 43.134 C 84.899 55.341, 98.264 61.754, 114.327 58.957 C 122.431 57.546, 127.666 54.551, 131.455 49.161 C 134.084 45.419, 134.540 43.795, 134.845 37.073 C 135.235 28.492, 133.650 23.923, 128.497 18.770 C 122.391 12.664, 106.928 10.179, 96.133 13.569 M 5 13.931 C 5 14.443, 11.412 22.656, 19.250 32.181 L 33.500 49.500 34 61 L 34.500 72.500 43.500 72.500 L 52.500 72.500 52.784 61.129 L 53.068 49.757 65.151 35.129 C 71.796 27.083, 78.306 19.266, 79.617 17.759 C 80.928 16.251, 82 14.563, 82 14.009 C 82 13.392, 77.765 13, 71.108 13 L 60.216 13 52.919 21.750 C 48.906 26.563, 45.092 31.100, 44.443 31.833 C 43.494 32.904, 41.646 31.188, 35.019 23.083 L 26.774 13 15.887 13 C 9.833 13, 5 13.413, 5 13.931 M 218.468 14.224 C 218.193 14.940, 218.088 28.345, 218.234 44.013 L 218.500 72.500 L 227.500 72.500 L 236.500 72.500 L 236.780 59.750 C 236.934 52.737, 237.390 47, 237.794 47 C 238.198 47, 244.366 52.850, 251.500 60 L 264.471 73 275.736 73 C 281.931 73, 287 72.668, 287 72.263 C 287 71.857, 280.593 65.107, 272.763 57.263 L 258.526 43 272.483 29.017 C 286.615 14.858, 288.440 13.817, 287.885 20.233 C 287.777 21.480, 287.759 23.738, 287.844 25.250 L 288 28 299.481 28 L 310.962 28 311.231 50.250 L 311.500 72.500 L 320.500 72.500 L 329.500 72.500 L 329.769 50.250 L 330.038 28 341.563 28 L 353.088 28 352.794 20.750 L 352.500 13.500 308.107 13.265 L 263.714 13.031 250.759 26.015 C 243.633 33.157, 237.636 39, 237.431 39 C 237.227 39, 236.934 33.263, 236.780 26.250 L 236.500 13.500 227.734 13.211 C 221.242 12.997, 218.838 13.260, 218.468 14.224 M 99.503 26.250 C 94.600 30.480, 94.429 40.526, 99.184 44.957 C 103.466 48.946, 113.040 48.716, 116.973 44.529 C 119.365 41.982, 120.631 35.652, 119.583 31.475 C 119.218 30.020, 117.747 27.743, 116.314 26.415 C 112.659 23.028, 103.344 22.937, 99.503 26.250 M 144.186 40.750 C 144.655 53.145, 146.725 59.064, 152.759 65.256 C 158.310 70.954, 165.405 73.250, 177.500 73.261 C 186.063 73.269, 188.291 72.910, 193 70.760 C 205.022 65.274, 209.135 58.050, 209.804 41.250 L 210.252 30 200.626 30 L 191 30 190.978 38.750 C 190.940 53.834, 186.096 59.947, 175.159 58.714 C 166.570 57.746, 163.139 51.526, 163.044 36.750 L 163 30 153.389 30 L 143.779 30 144.186 40.750"
                  fill="#141517"
                />
                {/* Yellow Smile Arc */}
                <path
                  d="M 122.500 61.799 C 115.478 65.508, 102.611 65.622, 92.746 62.064 C 86.102 59.667, 85.970 59.659, 84.552 61.564 C 81.104 66.199, 80.555 67.983, 82.102 69.530 C 87.060 74.488, 109.594 77.731, 119.793 74.954 C 126.108 73.235, 135 69.316, 135 68.252 C 135 67.061, 128.979 58.982, 128.163 59.079 C 127.799 59.123, 125.250 60.347, 122.500 61.799"
                  fill="#F6C445"
                />
              </svg>
            </motion.div>

            {/* Tagline: Your Hiring Partner */}
            <motion.div
              style={
                prefersReduced
                  ? undefined
                  : { opacity: initialCopyOpacity, y: initialCopyY }
              }
              className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center text-center"
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
