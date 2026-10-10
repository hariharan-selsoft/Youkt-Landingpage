"use client";

import {
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronDown,
  Bot,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import YouktLogo from "@/components/YouktLogo";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const capabilities = [
    { label: "Autonomous Copilot", icon: Bot },
    { label: "Dynamic Pipeline ATS", icon: Layers },
    { label: "Objective Skill Benchmarks", icon: Cpu },
    { label: "Strict Tenant Isolation", icon: ShieldCheck },
  ];

  return (
    <section
      id="platform"
      className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col justify-between items-center py-3 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent select-none"
    >
      {/* Central Interactive Content Area */}
      <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Centered YOUKT Wordmark with Inverting Part-by-Part Hover */}
        <div className="flex flex-col items-center justify-center mb-3 sm:mb-4 animate-align-in">
          <YouktLogo
            className="h-12 sm:h-16 md:h-20 w-auto drop-shadow-sm select-none"
            darkColor="#141517"
            yellowColor="#F6C445"
          />

          {/* Simple 'Your Hiring Partner' Text Matching Title Style */}
          <p className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-[#1E2024] mt-1.5 sm:mt-2">
            Your Hiring Partner
          </p>
        </div>

        {/* Elevated Modern Typography Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-[2.85rem] font-black text-[#111215] tracking-tight leading-[1.14] mb-2.5 sm:mb-3">
          Transform Your Hiring Velocity{" "}
          <span className="block mt-0.5 sm:mt-1 text-xl sm:text-3xl lg:text-[2.1rem] font-light text-[#5B5E66] tracking-tight">
            with Autonomous Intelligence
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[#52555C] max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-5 font-normal">
          Youkt unifies modern ATS workflows, client CRM, automated skill assessments, and stateful AI Copilot orchestration into one lightning-fast, enterprise-secure platform.
        </p>

        {/* Value Highlights Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-4 sm:mb-6">
          {capabilities.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 border border-[#E8E4DC] text-[11px] sm:text-xs font-medium text-[#40434A] shadow-xs hover:border-[#F6C445] hover:shadow-[0_2px_10px_rgba(246,196,69,0.2)] transition-all cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-[#B8870A]" />
                <span>{pillar.label}</span>
              </div>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-4 sm:mb-5">
          <button
            onClick={() => onNavigate?.("resources")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-[0_4px_16px_rgba(246,196,69,0.38)] hover:shadow-[0_6px_22px_rgba(246,196,69,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Schedule a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={() => onNavigate?.("ai-automation")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-[#141517] bg-white hover:bg-[#F4F1EA] border border-[#E2DDD3] shadow-xs hover:border-[#D1C9BC] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#141517] fill-[#141517]" />
            <span>Launch Live Simulator</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 sm:gap-x-6 text-[10px] sm:text-xs text-[#6B6D74]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>No credit card required</span>
          </div>
          <span className="hidden sm:inline text-[#D4CFC4]">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>SOC2 Type II & GDPR Compliant</span>
          </div>
          <span className="hidden sm:inline text-[#D4CFC4]">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>100% Logical Tenant Isolation</span>
          </div>
        </div>
      </div>

      {/* Sequential Flow Indicator Prompt to Explore Next Section */}
      <div className="w-full text-center pt-1 pb-1">
        <button
          onClick={() => onNavigate?.("solutions")}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#EAE6DF] text-[11px] sm:text-xs font-bold text-[#141517] shadow-xs hover:bg-[#F4F1EA] hover:border-[#DDD8CE] transition-all group cursor-pointer"
        >
          <span>Next: Explore Solutions</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#F6C445] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
