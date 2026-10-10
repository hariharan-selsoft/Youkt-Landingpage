"use client";

import { useState } from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  ChevronDown,
  Network,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Code2,
  Lock,
  Workflow,
  Activity,
  Users,
  Briefcase,
  Layers,
  FileCheck,
} from "lucide-react";

interface SolutionsProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Solutions({ onNavigate }: SolutionsProps) {
  const [activePersona, setActivePersona] = useState<"recruiters" | "managers" | "candidates" | "enterprises">("recruiters");

  const personas = [
    {
      id: "recruiters" as const,
      name: "Recruiters & Talent Teams",
      badge: "Unified Talent ATS & CRM",
      tagline: "Reduce repetitive administration and find verified candidates 10x faster.",
      icon: Users,
      stats: "70% Faster Shortlisting",
      features: [
        "Natural-language candidate search & BM25 sourcing registry",
        "Automated candidate shortlisting & verified talent alerts",
        "Visual dynamic pipeline stage tracking with stage-gating",
        "Autonomous Recruitment Copilot assistant for scheduling & screening",
        "Human-in-the-loop workflow governance sign-offs",
      ],
      highlight: "AI that assists, while recruiters stay in total control of hiring decisions.",
    },
    {
      id: "managers" as const,
      name: "Hiring Managers & Reviewers",
      badge: "Collaborative Review Hub",
      tagline: "Standardized candidate dossiers, structured interview scorecards, and instant feedback.",
      icon: Briefcase,
      stats: "100% Structured Scorecards",
      features: [
        "Review standardized, anonymized candidate submissions",
        "Conduct structured interview workflows with pre-calibrated questions",
        "Complete objective skills assessment scorecards in minutes",
        "Real-time collaborative feedback dossiers per requisition",
        "Automated notification triggers for next-stage approvals",
      ],
      highlight: "Eliminate interview bias and accelerate hiring consensus across departments.",
    },
    {
      id: "candidates" as const,
      name: "Candidates & Job Seekers",
      badge: "Candidate-First Experience",
      tagline: "A transparent, mobile-responsive careers portal that respects candidates' time.",
      icon: Boxes,
      stats: "4.8/5 Candidate Satisfaction",
      features: [
        "Modern job search & 1-click verified applications",
        "Real-time transparent application milestone tracking",
        "Standardized objective skill assessments without resume blackholes",
        "Interactive interview visibility & automated rescheduling",
        "Frictionless digital onboarding and contract sign-off",
      ],
      highlight: "A humane, transparent hiring journey that elevates employer brand reputation.",
    },
    {
      id: "enterprises" as const,
      name: "Enterprises & Staffing Agencies",
      badge: "Multi-Tenant Infrastructure",
      tagline: "Built for massive scale, strict tenant isolation, and regulatory compliance.",
      icon: Layers,
      stats: "99.9% Workflow Uptime",
      features: [
        "100% logical multi-tenant data isolation & custom branding",
        "Client CRM, agency rate contracts, and placement fee tracking",
        "Granular RBAC with immutable cryptographic audit trails",
        "Durable Temporal workflows with state checkpoint recovery",
        "Enterprise SSO, SOC2 Type II, and GDPR compliance certifications",
      ],
      highlight: "Safe candidate data access across multiple client organizations and subsidiary entities.",
    },
  ];

  const currentPersona = personas.find((p) => p.id === activePersona) || personas[0];

  const valuePillars = [
    {
      title: "Recruitment Copilot",
      subtitle: "Autonomous & Governed",
      desc: "Autonomous AI assistant that executes permitted workflows with human-in-the-loop governance.",
      icon: Network,
      tag: "Autonomous Agent",
    },
    {
      title: "Dynamic Talent Pipelines",
      subtitle: "Stage-by-Stage Tracking",
      desc: "Visual stage-by-stage tracking from initial application to offer acceptance across all hiring teams.",
      icon: Cpu,
      tag: "Recruitment ATS",
    },
    {
      title: "Enterprise Multi-Tenancy",
      subtitle: "Strict Tenant Isolation",
      desc: "Granular RBAC, client CRM, contract management, and immutable audit trails built for enterprise scale.",
      icon: ShieldCheck,
      tag: "Enterprise Ready",
    },
  ];

  const capabilityCards = [
    {
      title: "Objective Skill Assessments",
      description: "Automated, standardized evaluations that help surface verified talent based on practical capabilities.",
      icon: CheckCircle2,
      badge: "Assessments",
    },
    {
      title: "Natural Language Talent Search",
      description: "Turn natural-language requests into structured, validated candidate queries with BM25 Dynamic Registry.",
      icon: Code2,
      badge: "BM25 Search",
    },
    {
      title: "Human-in-the-Loop Governance",
      description: "The AI prepares the action. The recruiter reviews and approves it. Workflows pause before affecting status.",
      icon: Lock,
      badge: "Governance",
    },
    {
      title: "Recruitment CRM & Contracts",
      description: "Manage client organizations, departmental requisitions, fee contracts, and tenant-level security.",
      icon: Workflow,
      badge: "Client CRM",
    },
    {
      title: "Durable Temporal Workflows",
      description: "Stateful AI workflows with persistent conversational threads, checkpoint recovery, and 99.9% delivery reliability.",
      icon: Activity,
      badge: "Durable Exec",
    },
    {
      title: "Candidate-First Careers Portal",
      description: "A transparent, mobile-responsive portal that keeps job seekers informed and engaged throughout the journey.",
      icon: FileCheck,
      badge: "Careers Portal",
    },
  ];

  return (
    <section id="solutions" className="pt-6 pb-16 sm:pt-10 sm:pb-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            Purpose-Built Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-4 leading-tight">
            One Intelligent Platform{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              for Every Hiring Role
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] leading-relaxed">
            Whether you are sourcing talent, evaluating code, managing client contracts, or interviewing candidates, Youkt coordinates the entire workflow.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center bg-white p-1.5 rounded-full border border-[#EAE6DF] shadow-xs mt-8 gap-1">
            {personas.map((persona) => {
              const isActive = activePersona === persona.id;
              const Icon = persona.icon;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(persona.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#141517] text-white shadow-xs"
                      : "text-[#5E6168] hover:text-[#141517] hover:bg-[#F4F1EA]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{persona.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Persona Featured Solution Card */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-10 bg-white border border-[#EAE6DF] shadow-[0_10px_35px_-5px_rgba(20,21,23,0.05)] hover:border-[#DDD8CE] transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EAE6DF]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B640A] bg-[#FFF9E6] px-3 py-1 rounded-full border border-[#FCE29A] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
                  {currentPersona.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  {currentPersona.name}
                </h3>
                <p className="text-sm text-[#5E6168] mt-1.5 max-w-xl">
                  {currentPersona.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="px-5 py-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] text-center">
                  <div className="text-lg font-black text-[#141517]">{currentPersona.stats}</div>
                  <div className="text-[10px] text-[#7A7D85] uppercase tracking-wider font-semibold">Key Metric Benchmark</div>
                </div>

                <button
                  onClick={() => onNavigate?.("resources")}
                  className="px-5 py-3 rounded-full bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Solution Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Persona Feature Bullets Grid */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPersona.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#141517] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F6C445]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#141517] leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#F4F1EA] flex items-center justify-between text-xs text-[#7A7D85]">
              <span className="italic font-medium">{currentPersona.highlight}</span>
              <span className="font-semibold text-[#141517]">100% Logical Isolation</span>
            </div>
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#141517] tracking-tight">
              Architectural Value Pillars
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6168] mt-1">
              Engineered from the ground up for speed, reliability, and human-in-the-loop governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-3xl bg-white border border-[#EAE6DF] shadow-xs hover:border-[#DDD8CE] transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] border border-[#FCE29A] flex items-center justify-center text-[#8B640A] mb-5">
                    <Icon className="w-6 h-6 text-[#8B640A]" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A7D85] mb-1">
                    {pillar.tag}
                  </div>
                  <h4 className="text-lg font-bold text-[#141517] mb-2">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed mb-4">{pillar.desc}</p>
                  <div className="text-xs font-semibold text-[#141517] flex items-center gap-1">
                    <span>{pillar.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilityCards.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-white border border-[#EAE6DF] shadow-xs hover:border-[#DDD8CE] transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F5F0] border border-[#EAE6DF] flex items-center justify-center text-[#141517]">
                    <Icon className="w-4 h-4 text-[#141517]" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#7A7D85] border border-[#EAE6DF]">
                    {cap.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#141517] mb-1.5">{cap.title}</h4>
                <p className="text-xs text-[#5E6168] leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>

        {/* Sequential Flow Indicator Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate?.("ai-automation")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EAE6DF] text-xs font-bold text-[#141517] shadow-xs hover:bg-[#F4F1EA] hover:border-[#DDD8CE] transition-all group cursor-pointer"
          >
            <span>Next: AI & Automation Engine</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#F6C445] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
