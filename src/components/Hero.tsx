"use client";

import React, { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const heroStageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroStageRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const copyScale = useTransform(smoothScroll, [0, 0.75], [1, 0.94]);
  const copyOpacity = useTransform(smoothScroll, [0, 0.75], [1, 0.2]);
  const copyY = useTransform(smoothScroll, [0, 0.75], [0, 36]);

  return (
    <section id="platform" className="relative w-full">
      {/* FULL-BLEED YOUKT HERO CANVAS (CLEAN TYPOGRAPHY, NO MOCKUP BOX) */}
      <div
        ref={heroStageRef}
        className="relative w-full min-h-[76vh] sm:min-h-[82vh] flex items-center justify-center bg-[#141517] pt-32 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 52% at 50% 100%, rgba(246, 196, 69, 0.16) 0%, rgba(139, 100, 10, 0.09) 38%, rgba(20, 21, 23, 0) 72%)",
        }}
      >
        {/* Ambient Luminous Concentric Arches (aligned softly behind hero copy) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-[-260px] -translate-x-1/2 w-[820px] sm:w-[1040px] lg:w-[1240px] h-[520px] sm:h-[600px] rounded-t-full border border-[#F6C445]/15"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 72%, rgba(246, 196, 69, 0.09) 0%, rgba(246, 196, 69, 0.03) 48%, transparent 76%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-[-200px] -translate-x-1/2 w-[560px] sm:w-[740px] lg:w-[880px] h-[360px] sm:h-[420px] rounded-t-full border border-white/[0.07]"
        />

        <motion.div
          style={
            prefersReduced
              ? undefined
              : { scale: copyScale, opacity: copyOpacity, y: copyY }
          }
          className="relative z-10 w-full max-w-[820px] mx-auto flex flex-col items-center text-center will-change-transform"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="text-white tracking-[-0.035em] leading-[1.06] max-w-3xl mx-auto mb-6"
            style={{ fontSize: "clamp(2.55rem, 6vw, 5rem)" }}
          >
            <span className="font-bold block">Run hiring, tests,</span>
            <span className="font-editorial-serif text-[#FCE29A] block mt-0.5 tracking-[-0.015em]">
              and onboarding in one place.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.68,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-sm sm:text-base lg:text-[17px] text-white/85 leading-[1.7] max-w-[580px] mx-auto mb-8 sm:mb-10"
          >
            Manage clients, candidates, jobs, pipelines, technical tests,
            interviews, offers, and a careers portal in one workspace—with AI
            that helps while your team makes every decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.68,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6"
          >
            <button
              onClick={() => onNavigate?.("resources")}
              className="w-full sm:w-auto min-w-[172px] px-7 py-3.5 rounded-full btn-youkt-pill-yellow text-sm font-bold cursor-pointer"
            >
              Request a demo
            </button>
            <button
              onClick={() => onNavigate?.("features")}
              className="w-full sm:w-auto min-w-[172px] px-7 py-3.5 rounded-full btn-youkt-pill-ghost text-sm font-semibold cursor-pointer"
            >
              Explore features
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-xs sm:text-[13px] text-white/75 inline-flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#F6C445] shrink-0" />
            <span>
              Built for staffing agencies and in-house hiring teams.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
