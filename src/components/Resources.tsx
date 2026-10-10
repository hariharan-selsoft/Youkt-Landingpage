"use client";

import { useState } from "react";
import {
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Shield,
  ArrowRight,
  ArrowUp,
  Globe,
  MessageSquare,
  Code2,
  Share2,
  Lock,
} from "lucide-react";

interface ResourcesProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Resources({ onNavigate }: ResourcesProps) {
  const [activeTab, setActiveTab] = useState<"proof" | "faq" | "security">("proof");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const proofCards = [
    {
      badge: "Skill Assessments",
      title: "Measure Skills. Not Just Resumes.",
      description:
        "Standardized skill assessments and automated evaluation help organizations identify candidates based on practical capabilities and job requirements.",
      points: [
        "Standardized automated code & architecture grading",
        "Objective benchmark scoring without keyword bias",
        "Role-tailored challenge catalog",
        "Pre-interview telemetry dossiers",
      ],
      initials: "SA",
      category: "Verified Talent",
    },
    {
      badge: "Candidate Experience",
      title: "Give Candidates a Better Hiring Experience",
      description:
        "Keep candidates informed and engaged throughout the recruitment journey with a modern, transparent careers experience.",
      points: [
        "Modern job search & 1-click verified applications",
        "Real-time transparent application milestone tracking",
        "Interactive interview visibility & automated rescheduling",
        "Frictionless digital onboarding and contract sign-off",
      ],
      initials: "CX",
      category: "Careers Portal",
    },
    {
      badge: "Enterprise Security",
      title: "Enterprise-Ready by Design",
      description:
        "Built to support secure, reliable recruitment operations across organizations, teams, and clients.",
      points: [
        "100% logical multi-tenant architecture & strict data isolation",
        "Granular RBAC with immutable cryptographic audit trails",
        "Stateful Temporal workflows with checkpoint recovery",
        "SOC2 Type II, GDPR, and human-in-the-loop governance",
      ],
      initials: "ES",
      category: "Security & Scale",
    },
  ];

  const faqs = [
    {
      q: "How does Youkt's Recruitment Copilot assist talent teams?",
      a: "Youkt's Recruitment Copilot is an autonomous AI assistant that executes permitted workflows with human-in-the-loop governance. Recruiters use natural language to discover talent, understand candidate pipelines, and prepare recruitment actions while remaining in complete control.",
    },
    {
      q: "What is the BM25 Dynamic Operation Registry?",
      a: "The BM25 Dynamic Operation Registry dynamically discovers the right recruitment capabilities for each request instead of overwhelming the AI with every available operation, enabling 10x faster candidate discovery.",
    },
    {
      q: "How does Human-in-the-Loop governance work?",
      a: "Autonomous doesn't mean uncontrolled. When an AI action affects hiring status, candidates, clients, or offer letters, the workflow pauses for human approval. The AI prepares the action, the recruiter reviews it, the recruiter approves it, and only then does the action execute.",
    },
    {
      q: "How is enterprise multi-tenancy and data isolation enforced?",
      a: "Youkt enforces 100% logical multi-tenant data isolation with tenant-aware authorization, granular RBAC, client CRM controls, and immutable audit trails to ensure safe candidate data access across all organizations and clients.",
    },
    {
      q: "How does Youkt ensure reliability across complex hiring workflows?",
      a: "Youkt orchestrates multi-agent recruitment workflows with durable Temporal workflows, persistent conversational threads, checkpoint recovery, and AI observability, delivering 99.9% delivery reliability.",
    },
    {
      q: "What candidate experience does Youkt provide?",
      a: "Youkt features a transparent, mobile-responsive careers portal with modern job search, one-click applications, real-time tracking, interview visibility, standardized skill assessments, and frictionless digital onboarding.",
    },
  ];

  const footerLinks = {
    Platform: [
      { label: "Recruitment ATS", id: "platform" },
      { label: "Recruitment CRM", id: "solutions" },
      { label: "Skill Assessments", id: "solutions" },
      { label: "Recruitment Copilot", id: "ai-automation" },
    ],
    Solutions: [
      { label: "For Recruiters", id: "solutions" },
      { label: "For Hiring Managers", id: "solutions" },
      { label: "For Candidates", id: "solutions" },
      { label: "For Enterprises", id: "solutions" },
    ],
    Architecture: [
      { label: "How It Works", id: "how-it-works" },
      { label: "AI & Automation", id: "ai-automation" },
      { label: "Security Whitepaper", id: "resources" },
      { label: "Audit Telemetry", id: "platform" },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="resources" className="pt-6 pb-16 sm:pt-10 sm:pb-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            Enterprise Resources & Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-4 leading-tight">
            Enterprise Scale.{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              Verified Reliability.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] leading-relaxed">
            Explore our enterprise architecture, verified client capabilities, and answers to key questions.
          </p>

          {/* Sub-Tabs */}
          <div className="inline-flex items-center bg-white p-1 rounded-full border border-[#EAE6DF] shadow-xs mt-8 gap-1">
            <button
              onClick={() => setActiveTab("proof")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "proof"
                  ? "bg-[#141517] text-white shadow-xs"
                  : "text-[#5E6168] hover:text-[#141517]"
              }`}
            >
              Enterprise Capabilities
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "faq"
                  ? "bg-[#141517] text-white shadow-xs"
                  : "text-[#5E6168] hover:text-[#141517]"
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "security"
                  ? "bg-[#141517] text-white shadow-xs"
                  : "text-[#5E6168] hover:text-[#141517]"
              }`}
            >
              Security & Compliance
            </button>
          </div>
        </div>

        {/* Tab 1: Enterprise Proof */}
        {activeTab === "proof" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {proofCards.map((card) => (
              <div
                key={card.title}
                className="p-7 rounded-3xl bg-white border border-[#EAE6DF] shadow-xs hover:border-[#DDD8CE] transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold text-[#8B640A] bg-[#FFF9E6] border border-[#FCE29A] px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#141517] text-white flex items-center justify-center font-bold text-xs">
                      {card.initials}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141517] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#141517]">
                        <CheckCircle2 className="w-4 h-4 text-[#F6C445] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F4F1EA] flex items-center justify-between text-xs font-semibold text-[#141517]">
                  <span>{card.category}</span>
                  <span className="text-[#10B981]">✓ Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: FAQ */}
        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto space-y-3.5 mb-16">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#EAE6DF] bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#141517]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7A7D85] shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[#141517]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5E6168] leading-relaxed border-t border-[#F4F1EA]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Security */}
        {activeTab === "security" && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#EAE6DF] p-6 sm:p-10 shadow-xs mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#141517] text-[#F6C445] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#141517]">Enterprise Security & Logical Isolation Standards</h3>
                <p className="text-xs text-[#5E6168]">Architected with defense-in-depth principles for global enterprises.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                <div className="font-bold text-[#141517] mb-1 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#F6C445]" />
                  Cryptographic Data Isolation
                </div>
                <p className="text-[#5E6168]">
                  Every tenant query executes with tenant-scoped encryption keys and isolated virtual namespaces preventing cross-organization leakage.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                <div className="font-bold text-[#141517] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  SOC2 Type II & GDPR Compliant
                </div>
                <p className="text-[#5E6168]">
                  Annual third-party security audits, zero-retention candidate telemetry options, and comprehensive data residency controls.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* High-Converting Demo Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-[#141517] text-white text-center shadow-[0_20px_60px_-15px_rgba(20,21,23,0.3)] border border-[#26282E] mb-16">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#F6C445]/12 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C445]" />
              Enterprise Talent Intelligence
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Build a Faster, Smarter Hiring Operation
            </h2>

            <p className="text-[#A2A6B3] text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Bring talent intelligence, autonomous workflows, assessments, CRM, and candidate experience together with Youkt.
            </p>

            {submitted ? (
              <div className="p-4 rounded-full bg-[#F6C445]/20 border border-[#F6C445]/40 text-[#F6C445] max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#F6C445]" />
                Thank you! Your demo request has been received for {email}.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#F6C445] text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-[0_2px_12px_rgba(246,196,69,0.4)] transition-all cursor-pointer"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E929E]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> 70% faster shortlist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> 100% tenant data isolation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> Human-in-the-loop governance
              </span>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="pt-10 border-t border-[#EAE6DF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-[#EAE6DF]">
            <div className="col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6C445]" />
                <span className="text-base font-bold text-[#141517]">Youkt AI</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#606268] border border-[#EAE6DF]">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-xs text-[#6B6D74] max-w-sm">
                The autonomous multi-agent AI orchestration platform unifying ATS workflows, client CRM, automated skill assessments, and stateful AI Copilot intelligence.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onNavigate?.("platform")}
                  className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] cursor-pointer"
                  title="Codebase"
                >
                  <Code2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate?.("platform")}
                  className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] cursor-pointer"
                  title="Global Network"
                >
                  <Globe className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate?.("platform")}
                  className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] cursor-pointer"
                  title="Support"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate?.("platform")}
                  className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] cursor-pointer"
                  title="Community"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#141517]">
                  {category}
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => onNavigate?.(link.id)}
                        className="text-[#6B6D74] hover:text-[#141517] transition-colors cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E929E] gap-3">
            <div>&copy; 2026 Youkt AI Inc. All rights reserved.</div>
            <button
              onClick={() => onNavigate?.("platform")}
              className="inline-flex items-center gap-1.5 font-bold text-[#141517] hover:text-[#8B640A] transition-colors cursor-pointer"
            >
              <span>Back to Top (Platform)</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F6C445]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
