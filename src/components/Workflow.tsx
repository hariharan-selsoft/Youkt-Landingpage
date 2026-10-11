"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, Layers, ShieldCheck, Zap, Bot } from "lucide-react";

interface WorkflowProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Workflow({ onNavigate }: WorkflowProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Source & Discover",
      description:
        "Connect CRM candidate pools, job boards, and talent databases. Natural-language BM25 queries surface verified talent in seconds.",
      tag: "Source → Discover",
      detail: "BM25 Dynamic Operation Registry selects optimal search tools without hallucination or context overflow.",
      benefit: "10x faster candidate identification across legacy ATS databases.",
      icon: Zap,
    },
    {
      num: "02",
      title: "Screen & Assess",
      description:
        "Automated candidate screening paired with standardized skill assessments and objective, job-matched evaluation.",
      tag: "Screen → Assess",
      detail: "Code challenges, system design exercises, and behavioral telemetry standardized across all applicants.",
      benefit: "Zero resume bias, objective capability benchmarks.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Interview & Select",
      description:
        "Coordinate structured interviews, collaborative scorecards, and human-in-the-loop approvals keeping hiring teams aligned.",
      tag: "Interview → Select",
      detail: "Pre-calibrated scorecards and consolidated dossiers allow hiring managers to make confident decisions.",
      benefit: "100% structured evaluation with instant consensus alerts.",
      icon: Bot,
    },
    {
      num: "04",
      title: "Offer & Onboard",
      description:
        "AI prepares offer letters and contracts for recruiter approval, followed by frictionless digital candidate onboarding.",
      tag: "Select → Onboard",
      detail: "Permitted actions pause for recruiter sign-off before contracts are generated and dispatched.",
      benefit: "70% reduction in cycle time from final interview to signature.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="how-it-works" className="pt-6 pb-16 sm:pt-10 sm:pb-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B640A] bg-[#FFF9E6] px-3.5 py-1 rounded-full border border-[#FCE29A]">
            Recruitment Workflow Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mt-4 mb-4 leading-tight">
            One Platform.{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              The Entire Hiring Lifecycle.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] mb-6">
            Youkt connects the entire recruitment lifecycle inside one intelligent platform.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EAE6DF] shadow-xs text-xs font-bold text-[#141517]">
            <span>Source</span>
            <span className="text-[#F6C445]">→</span>
            <span>Discover</span>
            <span className="text-[#F6C445]">→</span>
            <span>Screen</span>
            <span className="text-[#F6C445]">→</span>
            <span>Assess</span>
            <span className="text-[#F6C445]">→</span>
            <span>Interview</span>
            <span className="text-[#F6C445]">→</span>
            <span>Select</span>
            <span className="text-[#F6C445]">→</span>
            <span>Onboard</span>
          </div>
        </div>

        {/* 4 Interactive Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? "border-[#141517] ring-2 ring-[#F6C445]/50 shadow-md"
                    : "border-[#EAE6DF] shadow-xs hover:border-[#DDD8CE]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#141517] font-mono">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-[#64666D] bg-[#F7F5F0] border border-[#EAE6DF] px-2.5 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#141517] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F2EFE9] flex items-center justify-between text-xs font-semibold text-[#141517]">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F6C445]" />
                    <span>Lifecycle Verified</span>
                  </span>
                  <span className="text-[11px] text-[#7A7D85]">Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Inspector */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#EAE6DF] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0ECE4]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-2xl bg-[#FFF9E6] border border-[#FCE29A] flex items-center justify-center font-bold font-mono text-[#8B640A] text-sm">
                {steps[activeStep].num}
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#141517]">
                  {steps[activeStep].title} — Architecture Breakdown
                </h4>
                <div className="text-xs text-[#7A7D85]">{steps[activeStep].detail}</div>
              </div>
            </div>

            <div className="text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1.5 rounded-full border border-[#A7F3D0] self-start sm:self-auto">
              ✓ {steps[activeStep].benefit}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5E6168]">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C445]" />
              Persistent Temporal execution context maintained throughout.
            </span>
            <button
              onClick={() => onNavigate?.("resources")}
              className="text-[#141517] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Enterprise Verification</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
