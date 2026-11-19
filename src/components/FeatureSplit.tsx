"use client";

import React, { useState } from "react";
import {
  Users,
  Briefcase,
  GitBranch,
  Code,
  Calendar,
  FileCheck2,
  UserCheck,
  BarChart3,
  ShieldCheck,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  ScrollPlacingItem,
  ScrollDownReveal,
} from "@/components/ScrollPlacingSection";

interface FeatureSplitProps {
  onNavigate?: (sectionId: string) => void;
}

const FEATURES = [
  {
    id: "crm",
    num: "01",
    icon: Users,
    title: "Client & Candidate CRM",
    line: "Manage client contracts, candidate profiles, and duplicates in one place.",
    details: [
      "Client contract expiry reminders",
      "Duplicate check before saving profiles",
      "Role-scoped private documents",
    ],
  },
  {
    id: "jobs",
    num: "02",
    icon: Briefcase,
    title: "Job Orders & Approvals",
    line: "Launch roles faster with reusable templates and manager sign-off.",
    details: [
      "Reusable templates & job cloning",
      "Draft review with no self-approval",
      "Live workload & recruiter credit",
    ],
  },
  {
    id: "pipelines",
    num: "03",
    icon: GitBranch,
    title: "Pipelines & Submissions",
    line: "Move candidates from custom stages to approved client submissions.",
    details: [
      "Custom stages per job order",
      "Manager review before client send",
      "Client feedback & follow-up alerts",
    ],
  },
  {
    id: "assessments",
    num: "04",
    icon: Code,
    title: "Screening & Tech Tests",
    line: "Run saved screenings, aptitude tests, and live Judge0 coding tests.",
    details: [
      "Saved screening question sets",
      "Locked test versions per candidate",
      "Visible & hidden Judge0 code tests",
    ],
  },
  {
    id: "interviews",
    num: "05",
    icon: Calendar,
    title: "Interviews & Scorecards",
    line: "Book conflict-free interviews and collect structured team feedback.",
    details: [
      "Overlap checks across all participants",
      "Full reschedule & status history",
      "Role-scoped reviewer scorecards",
    ],
  },
  {
    id: "offers",
    num: "06",
    icon: FileCheck2,
    title: "Offers & Onboarding",
    line: "Approve offers, lock placements safely, and guide new-hire tasks.",
    details: [
      "Role-restricted salary visibility",
      "Duplicate-safe placement locking",
      "Built-in onboarding checklists",
    ],
  },
  {
    id: "portal",
    num: "07",
    icon: UserCheck,
    title: "Careers Portal",
    line: "One portal for candidates to apply, test, review offers, and onboard.",
    details: [
      "Links to existing profiles—no duplicates",
      "Locked application snapshots",
      "Unified tests, offers & onboarding hub",
    ],
  },
  {
    id: "reports",
    num: "08",
    icon: BarChart3,
    title: "Reports & Team Insights",
    line: "Track daily team output across 6 work categories and export CSVs.",
    details: [
      "Filterable CSV exports",
      "Daily & weekly Team Insights",
      "Optional shift & break attendance",
    ],
  },
  {
    id: "security",
    num: "09",
    icon: ShieldCheck,
    title: "Security & Admin",
    line: "Keep tenants isolated with strict Full or Assigned-only access.",
    details: [
      "Live role checks on every request",
      "Google Sign-In & consented Gmail",
      "In-app bug & feedback reporting",
    ],
  },
];

export default function FeatureSplit({ onNavigate }: FeatureSplitProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="features"
      className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Clean, Spacious Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <ScrollPlacingItem yOffset={14} className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              <span>Features</span>
            </div>
            <h2
              className="text-[#141517] tracking-[-0.03em] leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              <span className="font-bold">Everything You Need. </span>
              <span className="font-editorial-serif text-[#8B640A]">
                Nothing Cluttered.
              </span>
            </h2>
          </ScrollPlacingItem>

          <ScrollPlacingItem delay={0.06} yOffset={14}>
            <p className="text-sm text-[#5E6168] max-w-xs leading-relaxed">
              Nine core tools in one workspace. Click any feature to view key
              details.
            </p>
          </ScrollPlacingItem>
        </div>

        {/* Minimal 3x3 Architectural Grid — Quiet by Default, Expand on Click */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#EAE6DF] rounded-[24px] overflow-hidden bg-white">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="border-r border-b border-[#EAE6DF] overflow-hidden"
              >
                <ScrollDownReveal
                  fromY={40}
                  fromScale={0.96}
                  stagger={(idx % 3) * 0.12}
                  className="h-full"
                >
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className={`w-full h-full text-left p-6 sm:p-7 transition-colors cursor-pointer flex flex-col justify-between group ${
                    isOpen ? "bg-[#FAF8F5]" : "bg-white hover:bg-[#FAF8F5]/70"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-[#141517] text-[#F6C445]"
                            : "bg-[#FFF9E6] border border-[#F2D27A] text-[#8B640A] group-hover:bg-[#F6C445] group-hover:text-[#141517]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono text-[#8E929E]">
                        <span>{item.num}</span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                            isOpen
                              ? "border-[#141517] bg-[#141517] text-[#F6C445]"
                              : "border-[#EAE6DF] text-[#5E6168] group-hover:border-[#141517] group-hover:text-[#141517]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3 h-3" />
                          ) : (
                            <Plus className="w-3 h-3" />
                          )}
                        </span>
                      </span>
                    </div>

                    <h3 className="text-[16px] font-bold text-[#141517] tracking-[-0.015em] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#5E6168] leading-relaxed">
                      {item.line}
                    </p>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden mt-4 pt-4 border-t border-[#EAE6DF] space-y-2"
                        >
                          {item.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-xs text-[#141517] font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
                </ScrollDownReveal>
              </div>
            );
          })}
        </div>

        {/* Subtle Single Action */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => onNavigate?.("solutions")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full btn-youkt-pill-dark text-xs sm:text-sm font-semibold cursor-pointer"
          >
            <span>See Solutions by Team</span>
            <ArrowRight className="w-4 h-4 text-[#F6C445] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
