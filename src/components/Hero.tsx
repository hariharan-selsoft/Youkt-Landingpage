"use client";

import { Sparkles, ArrowRight, Play, CheckCircle2, Zap, Shield, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section id="platform" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle warm glow highlights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#F6C445]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Announcement Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-8 shadow-sm hover:border-[#F8D572] transition-colors cursor-pointer group">
            <span className="w-2 h-2 rounded-full bg-[#F6C445] shadow-[0_0_6px_rgba(246,196,69,0.8)] animate-pulse" />
            <span className="tracking-wide uppercase text-[11px]">
              Autonomous Multi-Agent AI Orchestration Platform
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8B640A] group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#141517] tracking-tight leading-[1.08] mb-6">
            Transform Your Hiring Velocity{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              with Autonomous Talent Intelligence
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-xl text-[#5E6168] max-w-2xl mx-auto leading-relaxed mb-10">
            Youkt unifies modern ATS workflows, client CRM, automated skill assessments, and stateful AI Copilot orchestration into one lightning-fast, enterprise-secure platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-12">
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-[0_3px_12px_rgba(246,196,69,0.35)] hover:shadow-[0_6px_20px_rgba(246,196,69,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#141517] bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] shadow-sm hover:border-[#DDD8CE] transition-all"
            >
              <Play className="w-3.5 h-3.5 text-[#141517] fill-[#141517]" />
              <span>View Interactive Tour</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#6B6D74]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#141517]" />
              <span>No credit card required</span>
            </div>
            <span className="hidden sm:inline text-[#D4CFC4]">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#141517]" />
              <span>SOC2 Type II & GDPR Compliant</span>
            </div>
            <span className="hidden sm:inline text-[#D4CFC4]">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#141517]" />
              <span>100% Logical Tenant Isolation</span>
            </div>
          </div>
        </div>

        {/* Product Showcase Window */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-2 sm:p-3.5 bg-white border border-[#EAE6DF] shadow-[0_24px_70px_-15px_rgba(20,21,23,0.08)]">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 mb-2 rounded-2xl bg-[#F7F5F0] border border-[#EAE6DF]/70 text-xs text-[#5E6168]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2DED6]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2DED6]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2DED6]" />
                <span className="ml-3 font-mono text-[11px] text-[#7A7D85] hidden md:inline">
                  youkt.ai/platform/talent-copilot
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[11px] font-medium text-[#141517] border border-[#EAE6DF] shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] animate-ping" />
                  Live Copilot Active
                </span>
              </div>
            </div>

            {/* Dashboard Visual Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#EDE8DF] bg-[#FAF8F5]">
              <img
                src="/dashboard-preview.png"
                alt="Youkt Autonomous Orchestration & Telemetry Dashboard"
                className="w-full h-auto object-cover block"
              />

              {/* Floating Highlight Chips */}
              <div className="hidden sm:flex absolute bottom-5 left-5 bg-white/95 backdrop-blur-md border border-[#EAE6DF] rounded-2xl p-3 shadow-lg items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FFF9E6] border border-[#FCE29A] flex items-center justify-center text-[#8B640A]">
                  <Zap className="w-4 h-4 fill-[#F6C445] text-[#8B640A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#141517]">70% Faster Shortlist</div>
                  <div className="text-[10px] text-[#7A7D85]">Autonomous talent intelligence</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute bottom-5 right-5 bg-[#141517] text-white border border-[#2B2D33] rounded-2xl p-3 shadow-lg items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Human-in-the-Loop</div>
                  <div className="text-[10px] text-white/70">Recruiter-Controlled Approvals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
