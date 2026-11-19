"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onOpenLogin?: () => void;
}

interface PolicyDoc {
  badge: string;
  title: string;
  summary: string;
  points: string[];
}

const POLICY_DOCS: Record<"security" | "ai-policy", PolicyDoc> = {
  security: {
    badge: "DATA ISOLATION",
    title: "Security & tenant isolation",
    summary:
      "Every organization runs inside strict tenant boundaries with live role verification on every request.",
    points: [
      "Full or Assigned-only access scopes across clients, candidates, jobs, interviews, and offers.",
      "Private S3-compatible file storage with restricted document rules.",
      "Full audit history on approvals, offers, and placements.",
    ],
  },
  "ai-policy": {
    badge: "AI GOVERNANCE",
    title: "Human-in-the-loop AI policy",
    summary:
      "Youkt uses AI for routine prep while keeping humans in charge of every hiring outcome.",
    points: [
      "Explicit Approve confirmation required before any Copilot update.",
      "AI job drafts never overwrite published Job Orders automatically.",
      "Raw resume text is excluded from production telemetry logs.",
    ],
  },
};

export default function Footer({ onNavigate, onOpenLogin }: FooterProps) {
  const [openPolicy, setOpenPolicy] = useState<"security" | "ai-policy" | null>(
    null
  );

  const scrollToFaq = () => {
    const el = document.getElementById("resource-faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      onNavigate?.("resources");
    }
  };

  const activePolicy = openPolicy ? POLICY_DOCS[openPolicy] : null;

  return (
    <footer className="relative w-full bg-white border-t border-[#EAE6DF] text-[#141517]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 pb-10 sm:pb-12">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 sm:pb-14">
          {/* Left: Official YOUKT Logo + Short Summary + Social Circles */}
          <div className="lg:col-span-5 space-y-5">
            <button
              type="button"
              onClick={() => onNavigate?.("platform")}
              className="inline-flex items-center cursor-pointer"
              aria-label="Youkt Home"
            >
              <Image
                src="/youkt-wordmark.png"
                alt="YOUKT"
                width={372}
                height={81}
                className="h-[24px] w-auto object-contain"
              />
            </button>

            <p className="text-[13.5px] text-[#4A4D55] leading-[1.7] max-w-[330px]">
              Multi-tenant recruiting workspace for managing clients, candidate
              pipelines, technical assessments, offers, and onboarding—with
              human-approved AI built in.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com/company/selsoftinc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Selsoft on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F4F5F7] hover:bg-[#FFF9E6] border border-transparent hover:border-[#F2D27A] text-[#141517] flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.22 8.22C14.43 8.22 13.49 9.21 13.03 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.03V13.36C13.03 13.02 13.06 12.69 13.16 12.45C13.43 11.79 14.04 11.1 15.07 11.1C16.41 11.1 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
                </svg>
              </a>

              <a
                href="https://x.com/selsoftinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Selsoft on X"
                className="w-9 h-9 rounded-full bg-[#F4F5F7] hover:bg-[#FFF9E6] border border-transparent hover:border-[#F2D27A] text-[#141517] flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: 3 Clean Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="space-y-4">
              <div className="text-[14px] font-bold text-[#141517] tracking-[-0.01em]">
                Product
              </div>
              <ul className="space-y-3 text-[13.5px] text-[#4A4D55]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("platform")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Platform
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("features")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("solutions")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("ai-automation")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    AI &amp; Automation
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-[14px] font-bold text-[#141517] tracking-[-0.01em]">
                Resources
              </div>
              <ul className="space-y-3 text-[13.5px] text-[#4A4D55]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate?.("resources")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Guides &amp; Setup
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={scrollToFaq}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenPolicy("security")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Security
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenPolicy("ai-policy")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    AI Policy
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="text-[14px] font-bold text-[#141517] tracking-[-0.01em]">
                Company
              </div>
              <ul className="space-y-3 text-[13.5px] text-[#4A4D55]">
                <li>
                  <a
                    href="https://selsoftinc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#141517] transition-colors"
                  >
                    About Selsoft
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenLogin?.()}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Request a demo
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenLogin?.()}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Log in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright + "A product of Selsoft Inc." */}
        <div className="pt-7 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#5E6168]">
          <div>
            © 2026 <strong className="font-semibold text-[#141517]">SelsoftInc.</strong> All rights reserved.
          </div>

          <a
            href="https://selsoftinc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[#5E6168] hover:text-[#141517] transition-colors"
          >
            <span>A product of</span>
            <Image
              src="/selsoft-logo.png"
              alt="Selsoft Inc."
              width={397}
              height={111}
              className="h-[20px] w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Circular Back-to-Top Button (Matches Reference Bottom-Right Placement) */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#EAE6DF] shadow-[0_8px_24px_-6px_rgba(20,21,23,0.16)] hover:border-[#F6C445] hover:bg-[#FFF9E6] text-[#141517] transition-all cursor-pointer absolute right-6 lg:right-8 bottom-6 lg:bottom-8"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Policy Quick-View Modal */}
      <AnimatePresence>
        {activePolicy && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPolicy(null)}
              className="fixed inset-0 bg-[#141517]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-white border border-[#EAE6DF] rounded-3xl overflow-hidden z-10 shadow-2xl"
            >
              <div className="h-1.5 w-full bg-[#F6C445]" />
              <div className="p-6 sm:p-7">
                <button
                  type="button"
                  onClick={() => setOpenPolicy(null)}
                  className="absolute top-5 right-5 p-1.5 text-[#5E6168] hover:text-[#141517] cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#8B640A] mb-2">
                  {activePolicy.badge}
                </div>
                <h3 className="text-xl font-bold text-[#141517] mb-2">
                  {activePolicy.title}
                </h3>
                <p className="text-sm text-[#3A3D44] leading-relaxed mb-4">
                  {activePolicy.summary}
                </p>
                <ul className="space-y-2 py-4 border-y border-[#EAE6DF] mb-5">
                  {activePolicy.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#141517]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpenPolicy(null)}
                    className="px-5 py-2 rounded-full btn-youkt-pill-yellow text-xs font-bold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
