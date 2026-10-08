"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [activeView, setActiveView] = useState<"teams" | "enterprise">("teams");

  const plansTeams = [
    {
      name: "Recruiters & Talent Teams",
      description: "Reduce repetitive administration, discover candidates faster, automate workflows, and manage recruiting from one unified workspace.",
      roleTier: "Talent ATS & CRM",
      roleSub: "Unified Workspace",
      popular: false,
      features: [
        "Natural-language candidate search & BM25 sourcing",
        "Automated candidate shortlisting & talent alerts",
        "Visual dynamic pipeline stage tracking",
        "Autonomous Recruitment Copilot assistant",
        "Human-in-the-loop workflow approvals",
      ],
      ctaText: "Schedule a Demo",
      isDark: false,
    },
    {
      name: "Hiring Managers & Interviewers",
      description: "Review candidate submissions, conduct structured interviews, complete scorecards, and provide hiring feedback.",
      roleTier: "Review & Scorecards",
      roleSub: "Collaborative Hub",
      popular: true,
      features: [
        "Review standardized candidate submissions",
        "Conduct structured interview workflows",
        "Complete objective assessment scorecards",
        "Provide instant real-time hiring feedback",
        "Collaborative feedback dossiers per requisition",
      ],
      ctaText: "Explore Manager Solutions",
      isDark: true,
    },
    {
      name: "Candidates",
      description: "Track application progress, complete assessments, stay informed about interviews, and experience frictionless digital onboarding.",
      roleTier: "Careers Portal",
      roleSub: "Candidate-First",
      popular: false,
      features: [
        "Modern job search & one-click applications",
        "Real-time transparent application tracking",
        "Interactive interview visibility & updates",
        "Standardized objective skill assessments",
        "Frictionless digital onboarding experience",
      ],
      ctaText: "Explore Candidate Experience",
      isDark: false,
    },
  ];

  const plansEnterprise = [
    {
      name: "Enterprises & Agencies",
      description: "Manage departments, clients, pipelines, analytics, compliance, and tenant-level security from one platform.",
      roleTier: "Multi-Tenant CRM",
      roleSub: "Enterprise Scale",
      popular: false,
      features: [
        "Cross-department & multi-client CRM pipelines",
        "Client contracts, requisitions & billing tracking",
        "100% logical multi-tenant data isolation",
        "Enterprise talent analytics, SLAs & metrics",
        "Granular RBAC & tenant security policies",
      ],
      ctaText: "Schedule an Enterprise Demo",
      isDark: false,
    },
    {
      name: "Platform Administrators",
      description: "Manage tenant lifecycles, global configurations, security policies, and platform telemetry.",
      roleTier: "Admin Console",
      roleSub: "Global Governance",
      popular: true,
      features: [
        "Manage tenant lifecycles & automated provisioning",
        "Global configurations & security access policies",
        "AI observability & execution telemetry",
        "Durable Temporal workflow monitoring & recovery",
        "Immutable audit trails & compliance logs",
      ],
      ctaText: "Contact Administrator Team",
      isDark: true,
    },
    {
      name: "Recruiters & Talent Teams",
      description: "Reduce repetitive administration, discover candidates faster, automate workflows, and manage recruiting from one unified workspace.",
      roleTier: "Talent Intelligence",
      roleSub: "High-Velocity Ops",
      popular: false,
      features: [
        "70% reduction in time-to-shortlist",
        "10x faster candidate discovery with BM25",
        "Safe candidate data access & tenant isolation",
        "Recruitment Copilot execution dials",
        "Human-in-the-loop governance sign-off",
      ],
      ctaText: "Schedule a Demo",
      isDark: false,
    },
  ];

  const currentPlans = activeView === "teams" ? plansTeams : plansEnterprise;

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#FAF8F5]">
      <div id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            Stakeholder Benefits
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-4 leading-tight">
            Built for Everyone{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              Involved in Hiring
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] mb-8">
            Youkt connects recruiters, candidates, hiring managers, agencies, and administrators through one unified recruitment ecosystem.
          </p>

          {/* Persona Switcher Capsule */}
          <div className="inline-flex items-center bg-white p-1 rounded-full border border-[#EAE6DF] shadow-xs">
            <button
              onClick={() => setActiveView("teams")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeView === "teams"
                  ? "bg-[#141517] text-white shadow-xs"
                  : "text-[#5E6168] hover:text-[#141517]"
              }`}
            >
              Hiring Teams & Candidates
            </button>
            <button
              onClick={() => setActiveView("enterprise")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeView === "enterprise"
                  ? "bg-[#141517] text-white shadow-xs"
                  : "text-[#5E6168] hover:text-[#141517]"
              }`}
            >
              <span>Enterprises & Administrators</span>
            </button>
          </div>
        </div>

        {/* 3 Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {currentPlans.map((plan) => {
            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                  plan.isDark
                    ? "bg-[#141517] text-white border border-[#2B2D33] shadow-[0_16px_48px_-12px_rgba(20,21,23,0.2)]"
                    : "bg-white text-[#141517] border border-[#EAE6DF] shadow-[0_4px_24px_-4px_rgba(20,21,23,0.04)] hover:border-[#DDD8CE]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${plan.isDark ? "text-white" : "text-[#141517]"}`}>
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="text-[11px] font-bold text-[#141517] bg-[#F6C445] px-3 py-1 rounded-full shadow-xs">
                        {plan.roleSub}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs mb-6 ${plan.isDark ? "text-[#9EA2AE]" : "text-[#64666D]"}`}>
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8 pb-4 border-b border-[#F0ECE4]/30">
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {plan.roleTier}
                    </span>
                    {!plan.popular && (
                      <span className={`text-[11px] font-medium ${plan.isDark ? "text-[#9EA2AE]" : "text-[#7A7D85]"}`}>
                        • {plan.roleSub}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${plan.isDark ? "text-[#8E929E]" : "text-[#7A7D85]"}`}>
                      Key capabilities:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.isDark ? "text-[#F6C445]" : "text-[#141517]"
                          }`}
                        />
                        <span className={plan.isDark ? "text-[#D6D9E0]" : "text-[#55575D]"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#demo"
                  className={`w-full py-3.5 rounded-full text-xs font-bold inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.isDark
                      ? "bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] shadow-[0_2px_12px_rgba(246,196,69,0.35)]"
                      : "bg-[#141517] hover:bg-[#25272C] text-white shadow-xs"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
