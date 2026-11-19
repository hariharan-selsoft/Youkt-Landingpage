"use client";

import React from "react";
import {
  ScrollPlacingItem,
  ScrollParallaxLift,
} from "@/components/ScrollPlacingSection";

export default function MetricsRow() {
  return (
    <section
      aria-label="Core Workspace Highlights"
      className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <ScrollPlacingItem yOffset={14}>
            <h2
              className="text-[#141517] tracking-[-0.03em] leading-[1.12] mb-3"
              style={{ fontSize: "clamp(1.95rem, 4vw, 3rem)" }}
            >
              <span className="font-bold">Built for Clear, </span>
              <span className="font-editorial-serif text-[#8B640A]">
                Controlled Hiring.
              </span>
            </h2>
            <p className="text-sm sm:text-[15px] text-[#5E6168] leading-relaxed">
              Keep your client accounts, candidate pipelines, and team reviews
              organized without losing control.
            </p>
          </ScrollPlacingItem>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          <ScrollParallaxLift fromY={26} toY={-12} className="lg:mt-4">
            <ScrollPlacingItem delay={0.04} yOffset={22} className="h-full">
              <div className="h-full rounded-[26px] bg-white border border-[#EAE6DF] p-6 sm:p-7 shadow-[0_14px_34px_-14px_rgba(20,21,23,0.08)] flex flex-col justify-between transition-all duration-300 lg:-rotate-[1.5deg] hover:rotate-0 hover:-translate-y-1 hover:border-[#F2D27A]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8B640A] bg-[#FFF9E6] px-2.5 py-1 rounded-full border border-[#F2D27A]">
                      Access Control
                    </span>
                    <div className="flex items-end gap-1 h-4">
                      <span className="w-1 h-2 rounded-full bg-[#EAE6DF]" />
                      <span className="w-1 h-3 rounded-full bg-[#F2D27A]" />
                      <span className="w-1 h-4 rounded-full bg-[#F6C445]" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-[1.9rem] font-extrabold tracking-[-0.03em] text-[#141517] leading-tight mb-2">
                    Full or Assigned
                  </div>
                  <div className="text-sm font-bold text-[#141517] mb-1.5">
                    Custom Role Scopes
                  </div>
                </div>
                <p className="text-xs text-[#5E6168] leading-relaxed">
                  Each user only sees the clients, candidates, jobs, and offers
                  they have permission to access.
                </p>
              </div>
            </ScrollPlacingItem>
          </ScrollParallaxLift>

          <ScrollParallaxLift fromY={42} toY={-22} className="lg:-mt-2">
            <ScrollPlacingItem delay={0.1} yOffset={26} className="h-full">
              <div className="h-full rounded-[26px] bg-[#141517] text-white border border-[#282A2F] p-6 sm:p-7 shadow-[0_24px_50px_-14px_rgba(20,21,23,0.35)] flex flex-col justify-between relative overflow-hidden transition-all duration-300 lg:rotate-[1deg] hover:rotate-0 hover:-translate-y-1">
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#F6C445]/20 blur-2xl pointer-events-none"
                />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#141517] bg-[#F6C445] px-2.5 py-1 rounded-full mb-5">
                    Human Control
                  </span>
                  <div className="text-2xl sm:text-[1.9rem] font-extrabold tracking-[-0.03em] text-white leading-tight mb-2">
                    0 Auto-Rejects
                  </div>
                  <div className="text-sm font-bold text-[#F6C445] mb-1.5">
                    Human-Approved AI
                  </div>
                </div>
                <p className="relative z-10 text-xs text-white/75 leading-relaxed">
                  AI never ranks or rejects candidates. Every record update waits
                  for your click to approve.
                </p>
              </div>
            </ScrollPlacingItem>
          </ScrollParallaxLift>

          <ScrollParallaxLift fromY={24} toY={-10} className="lg:mt-3">
            <ScrollPlacingItem delay={0.16} yOffset={22} className="h-full">
              <div className="h-full rounded-[26px] bg-white border border-[#EAE6DF] p-6 sm:p-7 shadow-[0_14px_34px_-14px_rgba(20,21,23,0.08)] flex flex-col justify-between transition-all duration-300 lg:-rotate-[1deg] hover:rotate-0 hover:-translate-y-1 hover:border-[#F2D27A]">
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#5E6168] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EAE6DF] mb-5">
                    Locked Records
                  </span>
                  <div className="text-2xl sm:text-[1.9rem] font-extrabold tracking-[-0.03em] text-[#141517] leading-tight mb-2">
                    Locked Versions
                  </div>
                  <div className="text-sm font-bold text-[#141517] mb-1.5">
                    Safe Snapshots
                  </div>
                </div>
                <p className="text-xs text-[#5E6168] leading-relaxed">
                  Submitted resumes and assigned tests stay locked so later edits
                  never change past records.
                </p>
              </div>
            </ScrollPlacingItem>
          </ScrollParallaxLift>

          <ScrollParallaxLift fromY={36} toY={-18} className="lg:mt-6">
            <ScrollPlacingItem delay={0.22} yOffset={26} className="h-full">
              <div className="h-full rounded-[26px] bg-white border border-[#EAE6DF] p-6 sm:p-7 shadow-[0_14px_34px_-14px_rgba(20,21,23,0.08)] flex flex-col justify-between transition-all duration-300 lg:rotate-[1.5deg] hover:rotate-0 hover:-translate-y-1 hover:border-[#F2D27A]">
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A7347] bg-[#E6F8F0] px-2.5 py-1 rounded-full mb-5">
                    Reliable Queue
                  </span>
                  <div className="text-2xl sm:text-[1.9rem] font-extrabold tracking-[-0.03em] text-[#141517] leading-tight mb-2">
                    No Lost Work
                  </div>
                  <div className="text-sm font-bold text-[#141517] mb-1.5">
                    Background Processing
                  </div>
                </div>
                <p className="text-xs text-[#5E6168] leading-relaxed">
                  Bulk resume uploads, imports, and reminders keep running safely
                  even if you close your tab.
                </p>
              </div>
            </ScrollPlacingItem>
          </ScrollParallaxLift>
        </div>
      </div>
    </section>
  );
}
