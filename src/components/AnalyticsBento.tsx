"use client";

import React from "react";
import {
  Building2,
  Users,
  BarChart3,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import {
  ScrollPlacingItem,
  ScrollDownReveal,
} from "@/components/ScrollPlacingSection";

interface AnalyticsBentoProps {
  highlighted?: boolean;
  onNavigate?: (sectionId: string) => void;
}

const SOLUTIONS = [
  {
    num: "01",
    icon: Building2,
    title: "Staffing & recruiting agencies",
    summary:
      "Keep client accounts, manager sign-offs, and recruiter credit aligned in one place.",
    points: [
      "Client contract expiry reminders",
      "Manager review before client submission",
      "Clear recruiter credit on every hire",
    ],
  },
  {
    num: "02",
    icon: Users,
    title: "In-house hiring teams",
    summary:
      "Approve job drafts cleanly, test candidates, and hand signed offers straight to onboarding.",
    points: [
      "Draft approvals with no self-approval",
      "Built-in aptitude & Judge0 coding tests",
      "Conflict-free interview scheduling",
    ],
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Managers & ops leads",
    summary:
      "Track real daily team output and workloads without chasing manual spreadsheets.",
    points: [
      "Team Insights across 6 work categories",
      "Filterable CSV reports",
      "Optional shift & break attendance",
    ],
  },
  {
    num: "04",
    icon: UserCheck,
    title: "Candidates",
    summary:
      "Apply once with saved resumes, take tests, review offers, and finish onboarding in one portal.",
    points: [
      "Links to existing profiles—no duplicates",
      "Locked application snapshots",
      "Tests, offers & onboarding in one hub",
    ],
  },
];

export default function AnalyticsBento({
  highlighted = false,
  onNavigate,
}: AnalyticsBentoProps) {
  return (
    <section
      id="solutions"
      className={`w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#EAE6DF] scroll-mt-20 transition-colors duration-500 ${
        highlighted ? "bg-[#FFF9E6]" : "bg-[#FAF8F5]"
      }`}
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Clean Minimal Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <ScrollPlacingItem yOffset={14} className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              <span>Solutions</span>
            </div>
            <h2
              className="text-[#141517] tracking-[-0.03em] leading-[1.08]"
              style={{ fontSize: "clamp(1.95rem, 4vw, 3rem)" }}
            >
              <span className="font-bold">Built for Every Role </span>
              <span className="font-editorial-serif text-[#8B640A]">
                in Hiring.
              </span>
            </h2>
          </ScrollPlacingItem>

          <ScrollPlacingItem delay={0.06} yOffset={14} className="max-w-xs">
            <p className="text-sm text-[#5E6168] leading-relaxed">
              Clear workflows tailored for agencies, internal teams, managers,
              and candidates.
            </p>
          </ScrollPlacingItem>
        </div>

        {/* Clean Minimal 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollDownReveal
                key={item.num}
                fromY={46}
                fromX={idx % 2 === 0 ? -24 : 24}
                fromScale={0.95}
                stagger={(idx % 2) * 0.12}
                className="h-full"
              >
                <div className="h-full rounded-[22px] bg-white border border-[#EAE6DF] hover:border-[#F6C445] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-18px_rgba(20,21,23,0.1)] flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="w-9 h-9 rounded-xl bg-[#FFF9E6] border border-[#F2D27A] text-[#8B640A] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-mono text-[#8E929E]">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#141517] tracking-[-0.02em] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#5E6168] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <ul className="pt-4 border-t border-[#F0ECE4] space-y-2">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#141517] font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollDownReveal>
            );
          })}
        </div>

        {/* Quiet Single Action */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate?.("ai-automation")}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141517] hover:text-[#8B640A] transition-colors cursor-pointer"
          >
            <span>See how AI &amp; Automation helps</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C98908]" />
          </button>
        </div>
      </div>
    </section>
  );
}
