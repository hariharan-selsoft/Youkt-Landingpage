"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import HeroBrandIntro from "@/components/HeroBrandIntro";
import HeroCompanyCard from "@/components/HeroCompanyCard";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Storytelling scroll track (280vh provides ~2.8 viewports of smooth, deliberate progression)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
      className="relative w-full h-[280vh] bg-[#F6C445]"
    >
      {/* Pinned Fullscreen Storytelling Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* ================================================================= */}
        {/* PAGE 1: BRAND TYPOGRAPHY & OVERSIZED LOGO INTRO (Dedicated File)  */}
        {/* ================================================================= */}
        <HeroBrandIntro scrollYProgress={scrollYProgress} />

        {/* ================================================================= */}
        {/* PAGE 2: SELSOFT HIRING PARTNER COMPANY CARD (Dedicated File)      */}
        {/* ================================================================= */}
        <HeroCompanyCard
          scrollYProgress={scrollYProgress}
          onNavigate={onNavigate}
        />

        {/* Seamless bottom fade into MetricsRow (#FAF8F5) */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: bottomFeatherOpacity }}
          className="pointer-events-none absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent z-40 will-change-[opacity]"
        />
      </div>
    </section>
  );
}
