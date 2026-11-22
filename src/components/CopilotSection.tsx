"use client";

import React from "react";
import { Sparkles, FileUp, FileText, Workflow, Gauge } from "lucide-react";
import {
  ScrollPlacingItem,
  ScrollDownReveal,
} from "@/components/ScrollPlacingSection";

interface CopilotSectionProps {
  onNavigate?: (sectionId: string) => void;
}

const AI_CAPABILITIES = [
  {
    num: "01",
    icon: Sparkles,
    title: "Recruitment Copilot",
    description:
      "Search records your role can access and preview every edit before clicking Approve. Never auto-ranks or rejects.",
    tag: "Human-Approved",
  },
  {
    num: "02",
    icon: FileUp,
    title: "Bulk Resume Import",
    description:
      "Parse batches in the background, pause duplicates for review, and retry single failed files anytime.",
    tag: "Background Queue",
  },
  {
    num: "03",
    icon: FileText,
    title: "AI Job Description Drafts",
    description:
      "Turn quick notes or client briefs into editable draft sections without ever overwriting live Job Orders.",
    tag: "Draft Only",
  },
  {
    num: "04",
    icon: Workflow,
    title: "Background Automation",
    description:
      "Isolate bad import rows, send interview and contract alerts, and clean unused temp files safely.",
    tag: "Reliable",
  },
  {
    num: "05",
    icon: Gauge,
    title: "AI Quotas & Cost Controls",
    description:
      "Set daily caps per feature with an 80% early alert and optional monthly spend limits. Raw resumes stay out of logs.",
    tag: "80% Alert",
  },
];

export default function CopilotSection(_props: CopilotSectionProps) {
  void _props;

  return (
    <section
      id="ai-automation"
      className="w-full py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20"
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Clean Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <ScrollPlacingItem yOffset={14} className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              <span>AI &amp; Automation</span>
            </div>
            <h2
              className="text-[#141517] tracking-[-0.03em] leading-[1.08]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              <span className="font-bold">AI that helps </span>
              <span className="font-editorial-serif text-[#8B640A]">
                without taking over.
              </span>
            </h2>
          </ScrollPlacingItem>

          <ScrollPlacingItem delay={0.06} yOffset={14} className="max-w-xs">
            <p className="text-sm text-[#5E6168] leading-relaxed">
              Built with role permissions, predictable daily limits, and human
              confirmation on every write.
            </p>
          </ScrollPlacingItem>
        </div>

        {/* Minimal Editorial 5-Row Hairline List */}
        <div className="border-t border-[#EAE6DF]">
          {AI_CAPABILITIES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="border-b border-[#EAE6DF] overflow-hidden">
                <ScrollDownReveal
                  fromY={28}
                  fromX={-24}
                  fromScale={0.98}
                >
                <div className="py-5 sm:py-6 px-2 sm:px-3 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start md:items-center hover:bg-[#FAF8F5]/80 transition-colors rounded-xl">
                  {/* Number + Icon + Title */}
                  <div className="md:col-span-4 flex items-center gap-3.5">
                    <span className="text-[11px] font-mono text-[#8E929E] w-5 shrink-0">
                      {item.num}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-[#FFF9E6] border border-[#F2D27A] text-[#8B640A] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-[15px] font-bold text-[#141517] tracking-[-0.015em]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Single Concise Sentence */}
                  <p className="md:col-span-6 text-[13.5px] text-[#5E6168] leading-relaxed pl-8 md:pl-0">
                    {item.description}
                  </p>

                  {/* Minimal Right Tag */}
                  <div className="md:col-span-2 md:text-right pl-8 md:pl-0">
                    <span className="inline-block text-[10.5px] font-mono font-semibold text-[#8B640A] bg-[#FAF8F5] border border-[#EAE6DF] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                </ScrollDownReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
