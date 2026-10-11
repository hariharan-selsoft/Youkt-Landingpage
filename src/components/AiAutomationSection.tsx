"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  ShieldCheck,
  Workflow,
  Code,
  CheckCircle2,
  Clock,
  ArrowRight,
  Check,
  X,
  RotateCcw,
  Lock,
  Bell,
  ListTodo,
  Terminal,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AiAutomationSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export default function AiAutomationSection({ onNavigate }: AiAutomationSectionProps) {
  const [activeTab, setActiveTab] = useState<"copilot" | "approvals" | "pipeline" | "assessments">(
    "copilot"
  );

  // Copilot interactive state
  const [selectedPromptIdx, setSelectedPromptIdx] = useState<number>(0);
  const [copilotViewMode, setCopilotViewMode] = useState<"results" | "rationale">("results");

  const copilotPrompts = [
    {
      query: "Find senior React engineers with TypeScript experience available this month.",
      roleCategory: "Frontend Architecture",
      latency: "0.38s BM25 search",
      filters: ["React 19", "TypeScript", "Senior (5+ yrs)", "Available <30d"],
      candidates: [
        {
          initials: "ER",
          name: "Elena Rostova",
          role: "Lead Frontend Architect",
          experience: "7+ Yrs Exp",
          score: "98% Fit",
          tags: ["React 19", "TypeScript", "Next.js 15"],
          availability: "Available in 2 wks",
          location: "Austin, TX (Remote)",
          rationale:
            "Matched on production React 19 architecture, open-source Next.js libraries, and immediate 14-day start availability.",
        },
        {
          initials: "MC",
          name: "Marcus Chen",
          role: "Senior Full-Stack Engineer",
          experience: "6 Yrs Exp",
          score: "95% Fit",
          tags: ["React", "TypeScript", "GraphQL"],
          availability: "Available Immediately",
          location: "San Francisco, CA",
          rationale:
            "High BM25 score for TypeScript design systems and rapid delivery track record across 3 enterprise platforms.",
        },
      ],
    },
    {
      query: "Show available backend engineers with Go and distributed systems experience.",
      roleCategory: "Backend Distributed Systems",
      latency: "0.32s BM25 search",
      filters: ["Go 1.23", "PostgreSQL", "Temporal / Workflows", "Immediate"],
      candidates: [
        {
          initials: "KR",
          name: "Kavita Rao",
          role: "Senior Backend Architect",
          experience: "7.5 Yrs Exp",
          score: "97% Fit",
          tags: ["Go", "Distributed Systems", "Temporal"],
          availability: "Available Now",
          location: "Seattle, WA (Hybrid)",
          rationale:
            "Demonstrated experience building event-driven microservices with high concurrent throughput and fault tolerance.",
        },
        {
          initials: "LM",
          name: "Lucas Moretti",
          role: "Staff Systems Engineer",
          experience: "9 Yrs Exp",
          score: "94% Fit",
          tags: ["Go", "Kafka", "PostgreSQL", "Redis"],
          availability: "Notice: 14 Days",
          location: "Chicago, IL (Remote)",
          rationale:
            "Proven track record scaling transactional databases to 50k req/s with verified clean code test scores.",
        },
      ],
    },
    {
      query: "Find DevOps engineers with AWS Solutions Architect certification.",
      roleCategory: "Cloud Infrastructure & SRE",
      latency: "0.41s BM25 search",
      filters: ["AWS Certified Pro", "Terraform", "Kubernetes", "Flexible"],
      candidates: [
        {
          initials: "TA",
          name: "Tariq Al-Mansoor",
          role: "Lead Cloud Infrastructure Engineer",
          experience: "8 Yrs Exp",
          score: "99% Fit",
          tags: ["AWS Pro", "Terraform", "EKS"],
          availability: "Available Now",
          location: "Boston, MA",
          rationale:
            "Certified AWS Solutions Architect Professional with deep Terraform IaC and multi-region Kubernetes deployments.",
        },
        {
          initials: "CD",
          name: "Chloe Dupont",
          role: "Senior Platform & DevOps Engineer",
          experience: "6 Yrs Exp",
          score: "94% Fit",
          tags: ["AWS", "Kubernetes", "CI/CD"],
          availability: "Notice: 30 Days",
          location: "Remote (US/EU)",
          rationale:
            "Specializes in zero-downtime deployment pipelines, infrastructure observability, and SOC2 compliance automation.",
        },
      ],
    },
  ];

  // Human-in-the-Loop interactive demo state
  const [approvalDecision, setApprovalDecision] = useState<"pending" | "approved" | "rejected">(
    "pending"
  );
  const [approvalCandidate, setApprovalCandidate] = useState<"devon" | "sarah">("devon");

  // Pipeline Automation interactive state
  const [activePipelineStage, setActivePipelineStage] = useState<number>(2);
  const pipelineStages = [
    {
      step: "01",
      name: "Application",
      sla: "Instant",
      triggerName: "Candidate Ingestion Event",
      actions: [
        "Automated candidate acknowledgment email dispatched via template",
        "Resume parsed & indexed against role ontology in BM25 registry",
        "Role-based routing assigns profile to lead recruiting specialist",
      ],
      codeEvent: "candidate.application_received",
      guarantee: "100% Ingestion Idempotency",
    },
    {
      step: "02",
      name: "Screening",
      sla: "< 24 Hours",
      triggerName: "Recruiter Review Trigger",
      actions: [
        "Pre-qualification criteria checked against job requirements",
        "Recruiter evaluation scorecard created with standardized rubric",
        "Tenant role-based access scope verified for interviewers",
      ],
      codeEvent: "screening.scorecard_initialized",
      guarantee: "RBAC Tenant Isolated",
    },
    {
      step: "03",
      name: "Assessment",
      sla: "48h Window",
      triggerName: "Stage Transition Event",
      actions: [
        "Candidate status updated to IN_ASSESSMENT automatically",
        "Standardized technical assessment link queued in Temporal engine",
        "Automated progress reminders scheduled at 24h and 4h intervals",
      ],
      codeEvent: "assessment.invitation_scheduled",
      guarantee: "Durable Temporal Retry",
    },
    {
      step: "04",
      name: "Interview",
      sla: "Real-time Sync",
      triggerName: "Assessment Completed (>85% Benchmark)",
      actions: [
        "Self-scheduling calendar link dispatched with interviewer availability",
        "Interviewer briefing kit attached with objective assessment benchmarks",
        "Calendar invite synchronized with meeting room link and video bridge",
      ],
      codeEvent: "interview.panel_dispatched",
      guarantee: "Calendar Conflict Free",
    },
    {
      step: "05",
      name: "Offer",
      sla: "Consent Gated",
      triggerName: "Panel Consensus Approved",
      actions: [
        "Formal offer letter drafted with compensation benchmarks",
        "Requires explicit Human Recruiter Approval before dispatch",
        "Temporal reminder scheduled for candidate acceptance deadline",
      ],
      codeEvent: "offer.gated_approval_hold",
      guarantee: "Human Consent Required",
    },
  ];

  // Skill Assessment interactive state
  const [assessmentTrack, setAssessmentTrack] = useState<"typescript" | "systems">("typescript");

  const tabs = [
    {
      id: "copilot",
      num: "01",
      label: "Recruitment Copilot",
      metric: "Natural-Language Search",
      tag: "0.38s BM25 Match",
      icon: Bot,
    },
    {
      id: "approvals",
      num: "02",
      label: "Human-in-the-Loop",
      metric: "Controlled Approvals",
      tag: "100% Recruiter Consent",
      icon: ShieldCheck,
    },
    {
      id: "pipeline",
      num: "03",
      label: "Pipeline Automation",
      metric: "Event-Driven Triggers",
      tag: "5 Automated Stages",
      icon: Workflow,
    },
    {
      id: "assessments",
      num: "04",
      label: "Skill Assessments",
      metric: "Objective Evaluations",
      tag: "Sandboxed Code Runner",
      icon: Code,
    },
  ];

  return (
    <section
      id="ai-automation"
      className="pt-8 pb-18 sm:pt-12 sm:pb-24 px-4 sm:px-6 lg:px-8 relative bg-transparent select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            <span>INTELLIGENT RECRUITMENT AUTOMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-4 leading-tight">
            Where Hiring Intent Meets{" "}
            <span className="text-[#8B640A] block sm:inline">Autonomous Execution.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6168] leading-relaxed max-w-2xl mx-auto">
            Youkt combines natural-language candidate discovery, automated pipeline triggers,
            and objective skill evaluations — keeping recruiters in control of every important hiring decision.
          </p>

          {/* Telemetry pill row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[#141517]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Zero-Hallucination BM25
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              Human Consent Gate
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Durable Temporal Workflows
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B640A]" />
              100% Tenant Isolation
            </span>
          </div>
        </div>

        {/* Feature Selector Tabs (Horizontal Studio Segmented Dock) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto mb-6 sm:mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as typeof activeTab);
                  if (tab.id === "approvals") setApprovalDecision("pending");
                }}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between relative ${
                  isSelected
                    ? "bg-[#141517] text-white border-[#282A2F] shadow-md scale-[1.01]"
                    : "bg-white text-[#52555C] hover:text-[#141517] border-[#EAE6DF] hover:border-[#DDD8CE] shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/10 text-[#F6C445]"
                        : "bg-[#FAF8F5] text-[#7A7D85]"
                    }`}
                  >
                    {tab.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-[#F6C445]" : "text-[#7A7D85]"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold truncate">
                    {tab.label}
                  </div>
                  <div
                    className={`text-[11px] truncate mt-0.5 ${
                      isSelected ? "text-[#F6C445]" : "text-[#7A7D85]"
                    }`}
                  >
                    {tab.metric}
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute -bottom-[2px] left-6 right-6 h-[2px] bg-[#F6C445] rounded-full"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Command Center Showcase Stage (High-Fidelity Studio Workbench) */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#EAE6DF] shadow-[0_20px_50px_-12px_rgba(20,21,23,0.07)] overflow-hidden">
          {/* Studio Chrome Header */}
          <div className="px-5 py-3 border-b border-[#EAE6DF] bg-[#FAF8F5] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block opacity-80" />
              </div>
              <span className="text-[11px] font-semibold text-[#7A7D85] ml-2">
                youkt.ai/studio • tenant_id: org_enterprise_corp
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px]">
              <span className="hidden sm:inline-flex items-center gap-1 text-[#0A7347] font-semibold bg-[#E6F8F0] px-2 py-0.5 rounded-full border border-[#B3ECCF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Engine Active
              </span>
              <span className="text-[#8B640A] font-semibold bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                Human Consent Enforced
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {/* 01. COPILOT STAGE */}
              {activeTab === "copilot" && (
                <motion.div
                  key="copilot"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Context, What/Why & Prompt Controller */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A]">
                      <Bot className="w-3.5 h-3.5 text-[#F6C445]" />
                      <span>NATURAL-LANGUAGE TALENT SEARCH</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                      Find Qualified Candidates in Plain English.
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                      Search your entire talent pool through natural conversation instead of clicking through dozens of manual filters.
                    </p>

                    {/* What & Why points */}
                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">What it is:</strong>{" "}
                          <span className="text-[#52555C]">
                            BM25 lexical discovery translates recruiter requests into schema-validated queries with zero hallucination.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">Why use it:</strong>{" "}
                          <span className="text-[#52555C]">
                            Cuts candidate sourcing time by 70% while respecting tenant boundaries and recruiter access scopes.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Prompt Switcher */}
                    <div className="pt-3 border-t border-[#F0ECE4]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-[#7A7D85] uppercase tracking-wider">
                          Select Sample Search Query:
                        </span>
                        <span className="text-[10px] text-[#8B640A] font-semibold bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                          Interactive Demo
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {copilotPrompts.map((p, idx) => (
                          <button
                            key={p.query}
                            onClick={() => setSelectedPromptIdx(idx)}
                            className={`w-full text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                              selectedPromptIdx === idx
                                ? "bg-[#FAF8F5] border-[#141517] font-semibold text-[#141517] shadow-2xs ring-1 ring-[#141517]/20"
                                : "bg-white border-[#EAE6DF] text-[#6B6D74] hover:text-[#141517] hover:border-[#DDD8CE]"
                            }`}
                          >
                            <div className="truncate flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  selectedPromptIdx === idx ? "bg-[#8B640A]" : "bg-[#DDD8CE]"
                                }`}
                              />
                              <span className="truncate">&ldquo;{p.query}&rdquo;</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#8B640A]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-Fidelity Studio Workbench Canvas */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-5 border border-[#EAE6DF] space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#141517] text-[#F6C445] flex items-center justify-center font-bold text-[10px]">
                          YK
                        </div>
                        <span className="font-bold text-[#141517]">
                          Youkt Copilot • Session #YK-9402
                        </span>
                      </div>

                      {/* View Mode Toggle: Results vs Rationale */}
                      <div className="flex items-center bg-white border border-[#EAE6DF] rounded-lg p-0.5 text-[10px] font-semibold">
                        <button
                          onClick={() => setCopilotViewMode("results")}
                          className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                            copilotViewMode === "results"
                              ? "bg-[#141517] text-white"
                              : "text-[#6B6D74] hover:text-[#141517]"
                          }`}
                        >
                          Candidate Match
                        </button>
                        <button
                          onClick={() => setCopilotViewMode("rationale")}
                          className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                            copilotViewMode === "rationale"
                              ? "bg-[#141517] text-white"
                              : "text-[#6B6D74] hover:text-[#141517]"
                          }`}
                        >
                          Match Rationale
                        </button>
                      </div>
                    </div>

                    {/* Recruiter Query Bubble */}
                    <div className="p-3.5 rounded-xl bg-[#141517] text-white text-xs leading-relaxed space-y-1">
                      <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#9CA0AA] font-bold">
                        <span>Recruiter Query Prompt</span>
                        <span>Processed in {copilotPrompts[selectedPromptIdx].latency}</span>
                      </div>
                      <p className="text-white text-xs font-medium">
                        &ldquo;{copilotPrompts[selectedPromptIdx].query}&rdquo;
                      </p>
                    </div>

                    {/* Extracted Schema Filters */}
                    <div className="flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-lg bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A]">
                      <span className="flex items-center gap-1.5 font-medium truncate">
                        <Cpu className="w-3.5 h-3.5 text-[#8B640A]" />
                        BM25 Operation: <strong>candidate.search</strong> • Validated Schema
                      </span>
                      <span className="font-mono text-[10px] shrink-0 font-semibold">
                        Zero Hallucinations
                      </span>
                    </div>

                    {/* Extracted filter chips */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {copilotPrompts[selectedPromptIdx].filters.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-semibold bg-white border border-[#EAE6DF] px-2.5 py-0.5 rounded-full text-[#141517] shadow-2xs"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>

                    {/* Candidate Results List */}
                    <div className="space-y-2.5 pt-1">
                      {copilotPrompts[selectedPromptIdx].candidates.map((cand) => (
                        <div
                          key={cand.name}
                          className="p-3.5 rounded-xl bg-white border border-[#EAE6DF] hover:border-[#DDD8CE] text-xs shadow-2xs transition-all space-y-2"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 rounded-full bg-[#141517] text-[#F6C445] font-bold text-xs flex items-center justify-center shrink-0">
                                {cand.initials}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-[#141517] truncate">{cand.name}</span>
                                  <span className="text-[10px] font-bold text-[#0A7347] bg-[#E6F8F0] px-1.5 py-0.5 rounded border border-[#B3ECCF]">
                                    {cand.score}
                                  </span>
                                </div>
                                <div className="text-[11px] text-[#6B6D74] truncate">
                                  {cand.role} • {cand.experience}
                                </div>
                              </div>
                            </div>

                            <div className="shrink-0 text-right">
                              <span className="text-[10px] font-semibold text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A] block mb-1">
                                {cand.availability}
                              </span>
                              <span className="text-[10px] text-[#7A7D85]">{cand.location}</span>
                            </div>
                          </div>

                          {/* Conditional View: Skill Tags or Rationale */}
                          {copilotViewMode === "results" ? (
                            <div className="flex items-center justify-between pt-1 border-t border-[#F0ECE4]">
                              <div className="flex flex-wrap gap-1">
                                {cand.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[9px] font-medium bg-[#FAF8F5] text-[#52555C] px-1.5 py-0.5 rounded border border-[#EAE6DF]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <span className="text-[10px] font-semibold text-[#141517] hover:text-[#8B640A] cursor-pointer inline-flex items-center gap-1">
                                Profile Dossier <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          ) : (
                            <div className="pt-2 border-t border-[#F0ECE4] text-[11px] text-[#5E6168] bg-[#FAF8F5] p-2 rounded-lg">
                              <span className="font-semibold text-[#141517] block text-[10px] uppercase tracking-wider mb-0.5">
                                AI Match Reason:
                              </span>
                              {cand.rationale}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Security & Boundary Assurance Footer */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#7A7D85]">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#8B640A]" />
                        Filtered strictly by recruiter tenant role permissions
                      </span>
                      <span className="text-[#10B981] font-semibold">Ready for Review</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 02. HUMAN-IN-THE-LOOP APPROVALS STAGE */}
              {activeTab === "approvals" && (
                <motion.div
                  key="approvals"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Context, What/Why & Candidate Switcher */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F6C445]" />
                      <span>HUMAN-IN-THE-LOOP GOVERNANCE</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                      Autonomous Doesn&apos;t Mean Uncontrolled.
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                      Read operations execute instantly. Write operations that affect candidate records pause for explicit human authorization.
                    </p>

                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">What it is:</strong>{" "}
                          <span className="text-[#52555C]">
                            An explicit consent checkpoint before changes apply to recruitment records.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">Why use it:</strong>{" "}
                          <span className="text-[#52555C]">
                            The AI handles the preparation; the human recruiter retains full decision authority.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Candidate Switcher for the Gate */}
                    <div className="pt-3 border-t border-[#F0ECE4]">
                      <span className="text-[11px] font-bold text-[#7A7D85] uppercase tracking-wider block mb-2">
                        Select Action Under Review:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setApprovalCandidate("devon");
                            setApprovalDecision("pending");
                          }}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer text-left ${
                            approvalCandidate === "devon"
                              ? "bg-[#141517] text-white border-[#282A2F] shadow-2xs"
                              : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                          }`}
                        >
                          <div className="font-bold">Devon Vance</div>
                          <div className="text-[10px] opacity-75 font-normal">Cloud Architect</div>
                        </button>
                        <button
                          onClick={() => {
                            setApprovalCandidate("sarah");
                            setApprovalDecision("pending");
                          }}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer text-left ${
                            approvalCandidate === "sarah"
                              ? "bg-[#141517] text-white border-[#282A2F] shadow-2xs"
                              : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                          }`}
                        >
                          <div className="font-bold">Sarah Jenkins</div>
                          <div className="text-[10px] opacity-75 font-normal">Principal Engineer</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Executive Dark Approval Gate Card */}
                  <div className="lg:col-span-7 bg-[#141517] text-white rounded-2xl p-6 border border-[#282A2F] space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-bold flex items-center gap-1.5 text-white">
                        <ShieldCheck className="w-4 h-4 text-[#F6C445]" />
                        Recruitment Action Approval Gate
                      </span>
                      <span className="text-[10px] text-[#F6C445] bg-[#F6C445]/10 px-2 py-0.5 rounded-full border border-[#F6C445]/30">
                        Gated Write Mutation
                      </span>
                    </div>

                    {/* Proposed Mutation Card */}
                    <div className="p-4 rounded-xl bg-[#202227] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white text-sm">
                            {approvalCandidate === "devon" ? "Devon Vance" : "Sarah Jenkins"}
                          </span>
                          <span className="text-[11px] text-[#A0A2A8] block">
                            {approvalCandidate === "devon"
                              ? "Lead Cloud Architect • Req #YK-902"
                              : "Principal Systems Engineer • Req #YK-841"}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded">
                          {approvalCandidate === "devon" ? "Assessment: 96%" : "Assessment: 98%"}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-[#7A7D85] block">Current Stage:</span>
                          <span className="text-white font-medium">Screening Complete</span>
                        </div>
                        <div>
                          <span className="text-[#7A7D85] block">Proposed Action:</span>
                          <span className="text-[#F6C445] font-semibold">
                            Advance to Technical Panel
                          </span>
                        </div>
                      </div>

                      <div className="text-[10px] text-[#8E929E] pt-1 flex items-center justify-between border-t border-white/5">
                        <span>Panel: Infrastructure Interview Team</span>
                        <span>Comp Band: $185k - $210k Verified</span>
                      </div>
                    </div>

                    {/* Interactive Approve / Reject Action Buttons */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => setApprovalDecision("approved")}
                          className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            approvalDecision === "approved"
                              ? "bg-[#10B981] text-white ring-2 ring-[#10B981]/50 shadow-sm"
                              : "bg-[#F6C445] hover:bg-[#EDB735] text-[#141517]"
                          }`}
                        >
                          <Check className="w-4 h-4" />
                          <span>
                            {approvalDecision === "approved" ? "Action Approved ✓" : "Approve Action"}
                          </span>
                        </button>

                        <button
                          onClick={() => setApprovalDecision("rejected")}
                          className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            approvalDecision === "rejected"
                              ? "bg-[#C5221F] text-white ring-2 ring-[#C5221F]/50 shadow-sm"
                              : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                          }`}
                        >
                          <X className="w-4 h-4" />
                          <span>
                            {approvalDecision === "rejected" ? "Action Rejected ✗" : "Reject Action"}
                          </span>
                        </button>
                      </div>

                      {approvalDecision !== "pending" && (
                        <button
                          onClick={() => setApprovalDecision("pending")}
                          className="w-full text-center text-[10px] text-[#8E929E] hover:text-white pt-1 flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset Simulation</span>
                        </button>
                      )}
                    </div>

                    {/* Execution Audit Log Status */}
                    <div className="pt-3 border-t border-white/10 text-xs flex items-center justify-between">
                      <span className="text-[#8E929E]">Audit Status:</span>
                      {approvalDecision === "pending" && (
                        <span className="text-[#F6C445] font-semibold flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 animate-spin" />
                          Awaiting recruiter authorization
                        </span>
                      )}
                      {approvalDecision === "approved" && (
                        <span className="text-[#10B981] font-semibold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" />
                          Candidate advanced • Audit log #EV-849 recorded
                        </span>
                      )}
                      {approvalDecision === "rejected" && (
                        <span className="text-[#FF6B6B] font-semibold flex items-center gap-1.5">
                          <X className="w-3.5 h-3.5" />
                          Action safely cancelled • Zero state change
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 03. PIPELINE AUTOMATION STAGE */}
              {activeTab === "pipeline" && (
                <motion.div
                  key="pipeline"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Context, What/Why & Stage Selector */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A]">
                      <Workflow className="w-3.5 h-3.5 text-[#F6C445]" />
                      <span>EVENT-DRIVEN PIPELINE ENGINES</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                      Let Routine Steps Run Automatically.
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                      Automate routine pipeline activities so recruitment teams can focus on evaluating talent and interviewing candidates.
                    </p>

                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">What it is:</strong>{" "}
                          <span className="text-[#52555C]">
                            Configured automation triggers that respond to pipeline stage entry events.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">Why use it:</strong>{" "}
                          <span className="text-[#52555C]">
                            Automatically updates status, schedules notifications, and generates recruiter tasks without delay.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stage Selector Grid */}
                    <div className="pt-3 border-t border-[#F0ECE4]">
                      <span className="text-[11px] font-bold text-[#7A7D85] uppercase tracking-wider block mb-2">
                        Click Milestone to Inspect Triggers:
                      </span>
                      <div className="grid grid-cols-5 gap-1.5">
                        {pipelineStages.map((st, i) => (
                          <button
                            key={st.step}
                            onClick={() => setActivePipelineStage(i)}
                            className={`p-1.5 rounded-lg text-center text-[10px] font-bold border transition-all cursor-pointer ${
                              activePipelineStage === i
                                ? "bg-[#141517] text-white border-[#282A2F] shadow-xs"
                                : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                            }`}
                          >
                            {st.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Pipeline Flowchart Visualizer */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-5 border border-[#EAE6DF] space-y-4">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE6DF]">
                      <span className="font-bold text-[#141517]">
                        Stage {pipelineStages[activePipelineStage].step}: {pipelineStages[activePipelineStage].name}
                      </span>
                      <span className="text-[10px] font-mono text-[#7A7D85]">
                        {pipelineStages[activePipelineStage].codeEvent}
                      </span>
                    </div>

                    {/* Visual Connected Pipeline Stage Line */}
                    <div className="relative py-2">
                      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#EAE6DF] -translate-y-1/2 z-0" />
                      <div className="grid grid-cols-5 gap-2 relative z-10 text-center">
                        {pipelineStages.map((st, i) => {
                          const isActive = i === activePipelineStage;
                          const isCompleted = i < activePipelineStage;
                          return (
                            <button
                              key={st.step}
                              onClick={() => setActivePipelineStage(i)}
                              className={`p-2 rounded-xl border text-[11px] font-bold truncate cursor-pointer transition-all flex flex-col items-center gap-1 ${
                                isActive
                                  ? "bg-[#141517] text-[#F6C445] border-[#282A2F] shadow-xs scale-105"
                                  : isCompleted
                                  ? "bg-[#E6F8F0] text-[#0A7347] border-[#B3ECCF]"
                                  : "bg-white text-[#6B6D74] border-[#EAE6DF]"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  isActive
                                    ? "bg-[#F6C445] animate-ping"
                                    : isCompleted
                                    ? "bg-[#10B981]"
                                    : "bg-[#DDD8CE]"
                                }`}
                              />
                              <span className="truncate w-full">{st.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Configured Actions Container */}
                    <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F0ECE4]">
                        <span className="font-bold text-[#8B640A]">
                          Trigger: {pipelineStages[activePipelineStage].triggerName}
                        </span>
                        <span className="text-[10px] text-[#0A7347] font-semibold bg-[#E6F8F0] px-2 py-0.5 rounded-full border border-[#B3ECCF]">
                          {pipelineStages[activePipelineStage].guarantee}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        {pipelineStages[activePipelineStage].actions.map((act, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 text-[#141517] p-2 rounded-lg bg-[#FAF8F5] border border-[#F0ECE4]"
                          >
                            {idx === 0 && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />}
                            {idx === 1 && <Bell className="w-3.5 h-3.5 text-[#8B640A] shrink-0" />}
                            {idx === 2 && <ListTodo className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />}
                            <span className="text-xs text-[#141517]">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] text-[#7A7D85] text-center pt-1">
                      Triggers execute strictly according to configured pipeline conditions.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 04. SKILL ASSESSMENTS STAGE */}
              {activeTab === "assessments" && (
                <motion.div
                  key="assessments"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Context, What/Why & Track Switcher */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A]">
                      <Code className="w-3.5 h-3.5 text-[#F6C445]" />
                      <span>OBJECTIVE SKILL EVALUATION</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                      Measure Skills. Not Just Resumes.
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                      Standardized assessments and automated code evaluations evaluate technical talent against job-related criteria.
                    </p>

                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">What it is:</strong>{" "}
                          <span className="text-[#52555C]">
                            Automated scoring for aptitude tests & isolated sandbox execution for technical code challenges.
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#141517] bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#141517]">Why use it:</strong>{" "}
                          <span className="text-[#52555C]">
                            Replaces subjective resume screening with verified test benchmarks before booking interviews.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Track Switcher */}
                    <div className="pt-3 border-t border-[#F0ECE4]">
                      <span className="text-[11px] font-bold text-[#7A7D85] uppercase tracking-wider block mb-2">
                        Benchmark Track:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setAssessmentTrack("typescript")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            assessmentTrack === "typescript"
                              ? "bg-[#141517] text-white border-[#282A2F] shadow-xs"
                              : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                          }`}
                        >
                          Distributed Systems
                        </button>
                        <button
                          onClick={() => setAssessmentTrack("systems")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            assessmentTrack === "systems"
                              ? "bg-[#141517] text-white border-[#282A2F] shadow-xs"
                              : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                          }`}
                        >
                          Cloud Architecture
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Split Scorecard & Sandbox Trace Mockup */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-5 border border-[#EAE6DF] space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] text-xs">
                      <div>
                        <span className="font-bold text-[#141517] block">
                          {assessmentTrack === "typescript"
                            ? "Full-Stack Distributed Systems Assessment"
                            : "Cloud Infrastructure & Resiliency Benchmark"}
                        </span>
                        <span className="text-[10px] text-[#7A7D85]">
                          Candidate ID: #YK-94812 (Alex Mercer)
                        </span>
                      </div>
                      <span className="text-[10px] text-[#0A7347] font-bold bg-[#E6F8F0] px-2 py-0.5 rounded-full border border-[#B3ECCF]">
                        Verified Integrity
                      </span>
                    </div>

                    {/* Score Cards */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="p-3 rounded-xl bg-white border border-[#EAE6DF] shadow-2xs">
                        <span className="text-[10px] text-[#7A7D85] block">Score</span>
                        <span className="text-xl font-extrabold text-[#141517]">
                          {assessmentTrack === "typescript" ? "94%" : "96%"}
                        </span>
                        <span className="text-[9px] text-[#0A7347] font-semibold block">Top 4% Fit</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#EAE6DF] shadow-2xs">
                        <span className="text-[10px] text-[#7A7D85] block">Test Cases</span>
                        <span className="text-xl font-extrabold text-[#141517]">18/18</span>
                        <span className="text-[9px] text-[#10B981] font-semibold block">100% Passed</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#EAE6DF] shadow-2xs">
                        <span className="text-[10px] text-[#7A7D85] block">Runtime</span>
                        <span className="text-xl font-extrabold text-[#141517]">14ms</span>
                        <span className="text-[9px] text-[#5E6168] block">Zero Leaks</span>
                      </div>
                    </div>

                    {/* Sandboxed Execution Trace Terminal */}
                    <div className="p-3 rounded-xl bg-[#141517] text-white text-[11px] font-mono space-y-1 shadow-md">
                      <div className="text-[#8E929E] flex items-center justify-between pb-1 border-b border-white/10">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3 h-3 text-[#F6C445]" />
                          Judge0 Isolated Sandbox Trace
                        </span>
                        <span className="text-[#10B981] font-bold">ALL TESTS PASSED</span>
                      </div>
                      <div className="text-white pt-1">
                        ✓ Case 1: Token bucket rate limiter concurrency assertion (4ms)
                      </div>
                      <div className="text-white">
                        ✓ Case 2: Distributed lock release under network partition (6ms)
                      </div>
                      <div className="text-[#F6C445]">
                        ★ Algorithmic Complexity: O(1) space, O(1) amortized runtime
                      </div>
                    </div>

                    {/* Rubric Breakdown Progress Bars */}
                    <div className="p-3 rounded-xl bg-white border border-[#EAE6DF] space-y-2 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#7A7D85] uppercase tracking-wider block">
                        Evaluation Rubric Breakdown:
                      </span>
                      <div className="space-y-1.5 text-[11px]">
                        <div>
                          <div className="flex justify-between mb-0.5 text-xs">
                            <span className="text-[#141517] font-medium">Algorithmic Efficiency</span>
                            <span className="font-bold text-[#141517]">96%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-[#FAF8F5] overflow-hidden border border-[#EAE6DF]">
                            <div className="h-full bg-[#10B981] rounded-full w-[96%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-0.5 text-xs">
                            <span className="text-[#141517] font-medium">Code Cleanliness & Typing</span>
                            <span className="font-bold text-[#141517]">94%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-[#FAF8F5] overflow-hidden border border-[#EAE6DF]">
                            <div className="h-full bg-[#F6C445] rounded-full w-[94%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-0.5 text-xs">
                            <span className="text-[#141517] font-medium">Edge Case Robustness</span>
                            <span className="font-bold text-[#141517]">92%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-[#FAF8F5] overflow-hidden border border-[#EAE6DF]">
                            <div className="h-full bg-[#3B82F6] rounded-full w-[92%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#7A7D85] text-center pt-1">
                      Automated scores inform hiring decisions alongside structured human interviews.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Architectural Assurance Strip (4 Crisp Connected Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto mt-8 sm:mt-10">
          <div className="p-4 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs hover:border-[#DDD8CE] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#8B640A] flex items-center justify-center border border-[#EAE6DF]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                01
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#141517] mb-1">
              BM25 Dynamic Registry
            </h4>
            <p className="text-[11px] text-[#6B6D74] leading-relaxed">
              Discovers only permitted tools per turn, eliminating hallucinated operations.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs hover:border-[#DDD8CE] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#8B640A] flex items-center justify-center border border-[#EAE6DF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                02
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#141517] mb-1">
              Core API Authority
            </h4>
            <p className="text-[11px] text-[#6B6D74] leading-relaxed">
              Every operation is validated against tenant identity, roles, and business rules.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs hover:border-[#DDD8CE] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#8B640A] flex items-center justify-center border border-[#EAE6DF]">
                <Workflow className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                03
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#141517] mb-1">
              Temporal Reliability
            </h4>
            <p className="text-[11px] text-[#6B6D74] leading-relaxed">
              Durable background workers retry transient errors so scheduled tasks never get lost.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EAE6DF] shadow-2xs hover:border-[#DDD8CE] transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] text-[#8B640A] flex items-center justify-center border border-[#EAE6DF]">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#FCE29A]">
                04
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#141517] mb-1">
              100% Tenant Isolation
            </h4>
            <p className="text-[11px] text-[#6B6D74] leading-relaxed">
              Strict RBAC authorization prevents cross-tenant leakage & protects candidate data.
            </p>
          </div>
        </div>

        {/* Next Step / Explore Resources Callout */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate?.("resources")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B6D74] hover:text-[#141517] transition-colors cursor-pointer"
          >
            <span>Explore product guides, AI architecture & enterprise resources</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F6C445]" />
          </button>
        </div>
      </div>
    </section>
  );
}
