"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F7F5F0] border-t border-[#EAE6DF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B640A] bg-[#FFF9E6] px-3.5 py-1 rounded-full border border-[#FCE29A]">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mt-4 mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168]">
            Everything you need to know about architecture, security, and setup.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_2px_8px_rgba(20,21,23,0.02)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-bold text-[#141517] pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#141517] text-white" : "bg-[#F7F5F0] text-[#5E6168]"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5E6168] leading-relaxed border-t border-[#F2EFE9]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
