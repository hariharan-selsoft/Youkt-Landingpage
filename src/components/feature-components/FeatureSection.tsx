"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { FeatureStaggerDeck } from "./FeatureStaggerDeck";
import { YOUKT_FEATURE_LIST } from "./feature-data";

interface FeatureSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const FeatureSection: React.FC<FeatureSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const current = scrollYProgress.get();
    if (typeof current === "number") {
      setScrollProgress(Math.max(0, Math.min(1, current)));
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    setScrollProgress(clamped);
  });

  const numCards = YOUKT_FEATURE_LIST.length;

  const handleCardClick = (jIndex: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetFraction = Math.max(0, Math.min(numCards, jIndex)) / numCards;
    const targetY = scrollTop + targetFraction * scrollDistance;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] border-b border-[#EAE6DF]"
      style={{ height: "600vh" }}
    >
      {/* Sticky Viewport pinned while scrolling through the cards */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden selection:bg-[#F6C445]/30 py-8 sm:py-12">
        {/* Soft Yellow Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-[800px] sm:w-[1050px] h-[550px] rounded-full blur-[110px] opacity-60 mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #FFF991 0%, transparent 70%)",
          }}
        />

        {/* Header Container */}
        <div className="relative z-20 max-w-2xl mx-auto text-center px-4 mb-4 sm:mb-6 flex flex-col items-center">
          <h2 className="text-[#141517] font-extrabold tracking-[-0.035em] leading-[1.08] text-balance text-2xl sm:text-3xl md:text-4xl">
            <span>Core Hiring </span>
            <span className="font-editorial-serif text-[#8B640A] font-normal block sm:inline">
              Solutions.
            </span>
          </h2>
        </div>

        {/* Interactive Staggered Features Deck (Full-bleed edge-to-edge, scroll driven) */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <FeatureStaggerDeck
            features={YOUKT_FEATURE_LIST}
            progress={scrollProgress}
            onCardClick={handleCardClick}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
