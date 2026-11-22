"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollPlacingItem } from "@/components/ScrollPlacingSection";

interface FaqSectionProps {
  onOpenLogin?: () => void;
}

const FAQS = [
  {
    q: "Does Youkt use AI to automatically reject or rank candidates?",
    a: "No. AI helps parse resumes, draft job descriptions, and look up records. Your team handles all screening, shortlisting, and hiring decisions.",
  },
  {
    q: "Can Recruitment Copilot change data without asking?",
    a: "No. Before making any change, Copilot previews the exact fields and waits for you to click Approve. It also follows your exact role permissions.",
  },
  {
    q: "How does Youkt prevent duplicate candidate profiles?",
    a: "During manual entry and bulk resume imports, Youkt checks for matching profiles first. Possible duplicates pause for review so you can merge them or save separately with a note.",
  },
  {
    q: "Can we limit which clients, jobs, or offers a recruiter sees?",
    a: "Yes. Custom roles support Full access or Assigned-only access across clients, candidates, jobs, interviews, and offers—checked on every request.",
  },
  {
    q: "What if a candidate edits their profile after applying?",
    a: "Nothing changes on the submitted application. Youkt locks the exact resume and cover-letter version sent when the candidate applied.",
  },
  {
    q: "How do coding tests work for candidates?",
    a: "Recruiters assign a published test, and candidates code directly in the Careers Portal. A Judge0-compatible runner scores visible and hidden tests while keeping answer keys private.",
  },
];

export default function FaqSection({ onOpenLogin }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="resource-faq"
      className="w-full py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EAE6DF] scroll-mt-24"
    >
      <div className="max-w-[780px] mx-auto">
        {/* Clean Centered Minimal Header */}
        <div className="text-center mb-8 sm:mb-14">
          <ScrollPlacingItem yOffset={14}>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              <span>FAQ</span>
            </div>
            <h2
              className="text-[#141517] tracking-[-0.03em] leading-[1.1] mb-2.5"
              style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
            >
              <span className="font-bold">Common </span>
              <span className="font-editorial-serif text-[#8B640A]">
                questions.
              </span>
            </h2>
            <p className="text-sm text-[#5E6168] max-w-md mx-auto leading-relaxed">
              Clear answers on AI control, duplicate checks, roles,
              applications, and coding tests.
            </p>
          </ScrollPlacingItem>
        </div>

        {/* Minimal Hairline Accordion */}
        <div className="border-t border-[#EAE6DF]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.q} className="border-b border-[#EAE6DF]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-6 cursor-pointer group"
                >
                  <span
                    className={`text-sm sm:text-[16px] leading-snug transition-colors ${
                      isOpen
                        ? "font-bold text-[#141517]"
                        : "font-semibold text-[#141517] group-hover:text-[#8B640A]"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#F6C445] text-[#141517]"
                        : "bg-[#FAF8F5] text-[#5E6168] group-hover:text-[#141517]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-xs sm:text-[14.5px] text-[#5E6168] leading-[1.75]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quiet Single-Line Bottom Action */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-[#5E6168]">
          <span>Still have questions about roles, Copilot, or coding tests?</span>
          <button
            type="button"
            onClick={() => onOpenLogin?.()}
            className="inline-flex items-center gap-1 font-semibold text-[#141517] hover:text-[#8B640A] transition-colors cursor-pointer"
          >
            <span>Request a demo</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C98908]" />
          </button>
        </div>
      </div>
    </section>
  );
}
