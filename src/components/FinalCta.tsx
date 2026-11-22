"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ScrollDownReveal } from "@/components/ScrollPlacingSection";

interface FinalCtaProps {
  onNavigate?: (sectionId: string) => void;
  onOpenLogin?: () => void;
}

export default function FinalCta({ onNavigate, onOpenLogin }: FinalCtaProps) {
  return (
    <section
      aria-label="Request a demo"
      className="w-full py-14 sm:py-20 px-3 sm:px-5 lg:px-6 bg-white"
    >
      <ScrollDownReveal
        fromY={44}
        fromScale={0.96}
        className="max-w-[1220px] mx-auto"
      >
        <div className="relative w-full rounded-[26px] sm:rounded-[34px] bg-white border border-[#EAE6DF] overflow-hidden shadow-[0_24px_60px_-32px_rgba(20,21,23,0.12)]">
          {/* Signature Thin Warm-Yellow Top Accent Line */}
          <div
            aria-hidden="true"
            className="h-[3px] w-full bg-gradient-to-r from-[#FAF8F5] via-[#F6C445] to-[#FAF8F5]"
          />

          {/* Spacious Centered Editorial CTA */}
          <div
            className="relative px-5 sm:px-12 lg:px-16 py-12 sm:py-20 text-center"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 64% 60% at 50% 0%, rgba(255, 249, 230, 0.9) 0%, rgba(255, 255, 255, 0) 74%)",
            }}
          >
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FFF9E6] border border-[#F2D27A] text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
                <span>Get Started</span>
              </div>

              <h2
                className="text-[#141517] tracking-[-0.035em] leading-[1.08]"
                style={{ fontSize: "clamp(1.85rem, 4.6vw, 3.65rem)" }}
              >
                <span className="font-bold block">From job order to hire,</span>
                <span className="font-editorial-serif text-[#8B640A] block mt-0.5">
                  all in one workspace.
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-[16.5px] text-[#5E6168] leading-[1.7] max-w-lg mx-auto">
                See how Youkt brings client CRM, candidate pipelines, technical
                tests, offers, and onboarding together for your team.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenLogin?.()}
                  className="w-full sm:w-auto min-w-[190px] group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full btn-youkt-pill-yellow text-sm font-bold cursor-pointer"
                >
                  <span>Request a demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.("features")}
                  className="w-full sm:w-auto min-w-[172px] px-7 py-3.5 rounded-full btn-youkt-pill-dark text-sm font-semibold cursor-pointer"
                >
                  Explore features
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollDownReveal>
    </section>
  );
}
