"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  X,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  ScrollPlacingItem,
  ScrollDownReveal,
} from "@/components/ScrollPlacingSection";

interface ResourcesProps {
  onNavigate?: (sectionId: string) => void;
  onHighlightSection?: (sectionId: string) => void;
  onOpenLogin?: () => void;
}

interface ResourceBrief {
  id: string;
  group: "guide" | "security" | "integration";
  category: string;
  badge: string;
  title: string;
  description: string;
  summary: string;
  keyTakeaways: string[];
  technicalDetails: string;
}

function ResourceGroupIcon({
  group,
  className,
}: {
  group: ResourceBrief["group"];
  className?: string;
}) {
  if (group === "security") return <ShieldCheck className={className} />;
  if (group === "integration") return <Wrench className={className} />;
  return <BookOpen className={className} />;
}

export default function Resources(_props: ResourcesProps) {
  void _props;

  const [resourceTab, setResourceTab] = useState<
    "guide" | "security" | "integration" | "all"
  >("guide");

  const [previewModalResource, setPreviewModalResource] =
    useState<ResourceBrief | null>(null);

  const resourcesCatalog: ResourceBrief[] = useMemo(
    () => [
      {
        id: "workspace-setup",
        group: "guide",
        category: "Product Guide",
        badge: "SETUP",
        title: "Workspace setup guide",
        description:
          "Invite recruiters and choose Full or Assigned-only role scopes.",
        summary:
          "Get your team running quickly with clear roles across clients, candidates, jobs, interviews, and offers.",
        keyTakeaways: [
          "Create custom roles with Full or Assigned-only access.",
          "Invite recruiters and managers in minutes.",
          "Turn on optional Team Insights and shift attendance.",
        ],
        technicalDetails:
          "Permissions are checked live on every request so team boundaries stay enforced.",
      },
      {
        id: "bulk-resume-playbook",
        group: "guide",
        category: "Product Guide",
        badge: "RESUME INTAKE",
        title: "Bulk resume intake playbook",
        description:
          "Parse resume batches in the background and review duplicates first.",
        summary:
          "Upload resumes in bulk without waiting—Youkt parses them in the background and flags duplicates for review.",
        keyTakeaways: [
          "Watch Uploaded, Processing, Ready to review, and Created counts live.",
          "Merge duplicates or create separate profiles with a reason.",
          "Retry single failed files without re-uploading the batch.",
        ],
        technicalDetails:
          "Background processing finishes safely even if you close your browser tab.",
      },
      {
        id: "pipeline-submission-guide",
        group: "guide",
        category: "Product Guide",
        badge: "WORKFLOWS",
        title: "Pipeline & submission review",
        description:
          "Configure job approvals, manager sign-offs, and client feedback.",
        summary:
          "Keep job openings and client presentations consistent with built-in review gates.",
        keyTakeaways: [
          "Approve job drafts before they go live (self-approval is blocked).",
          "Require manager review before junior recruiters submit candidates.",
          "Log client feedback and schedule submission follow-ups.",
        ],
        technicalDetails:
          "Every stage change keeps a clear history and prevents conflicting edits.",
      },
      {
        id: "technical-assessment-guide",
        group: "guide",
        category: "Product Guide",
        badge: "TESTS",
        title: "Technical assessment guide",
        description:
          "Build aptitude and coding tests with locked candidate versions.",
        summary:
          "Create or clone published tests so every candidate is evaluated fairly.",
        keyTakeaways: [
          "Publish tests only when ready to assign to candidates.",
          "Assigned tests stay locked even if the template changes later.",
          "Keep hidden test cases and answer keys invisible to candidates.",
        ],
        technicalDetails:
          "Coding tests run securely through a Judge0-compatible code runner.",
      },
      {
        id: "copilot-guide",
        group: "guide",
        category: "Product Guide",
        badge: "COPILOT",
        title: "Recruitment Copilot guide",
        description:
          "Search workspace records with permission filters and confirmations.",
        summary:
          "Use the slide-out assistant to search workspace records and confirm updates safely.",
        keyTakeaways: [
          "Only shows data the signed-in user is allowed to view.",
          "Asks for an Approve click before creating or editing records.",
          "Tracks daily limits with an early warning at 80% usage.",
        ],
        technicalDetails:
          "Copilot assists with lookups and confirmed actions—it never auto-ranks or rejects candidates.",
      },
      {
        id: "security-isolation",
        group: "security",
        category: "Security Brief",
        badge: "DATA ISOLATION",
        title: "Security & tenant isolation",
        description:
          "Role permissions, private file storage, and live audit trails.",
        summary:
          "Keep every client account, candidate file, and salary detail strictly separated.",
        keyTakeaways: [
          "Live permission checks on every API call.",
          "Private file storage with separate rules for restricted documents.",
          "Full audit history on approvals, offers, and placements.",
        ],
        technicalDetails:
          "Each organization runs inside strict tenant boundaries verified against live database status.",
      },
      {
        id: "hitl-ai-policy",
        group: "security",
        category: "Security Brief",
        badge: "AI POLICY",
        title: "Human-in-the-loop AI policy",
        description:
          "Why AI never auto-rejects candidates and raw resumes stay out of logs.",
        summary:
          "Youkt uses AI for routine prep while keeping humans in charge of every hiring outcome.",
        keyTakeaways: [
          "Explicit confirmation required before any Copilot update.",
          "AI job drafts never overwrite live Job Orders automatically.",
          "Raw resume content is excluded from production telemetry logs.",
        ],
        technicalDetails:
          "Daily limits and optional monthly spend caps keep AI adoption predictable.",
      },
      {
        id: "google-gmail-setup",
        group: "integration",
        category: "Setup Guide",
        badge: "GOOGLE & GMAIL",
        title: "Google Sign-In & Gmail setup",
        description:
          "Enable Google login and connect recruiter Gmail with consent.",
        summary:
          "Let team members sign in with Google and send emails from their own Gmail with consent.",
        keyTakeaways: [
          "Link Google Sign-In to existing user accounts.",
          "Connect individual recruiter Gmail accounts with explicit permission.",
          "Keep outreach tied to candidate records.",
        ],
        technicalDetails:
          "Each recruiter's Gmail connection is scoped to their account and revocable anytime.",
      },
      {
        id: "judge0-runner-setup",
        group: "integration",
        category: "Setup Guide",
        badge: "CODE RUNNER",
        title: "Coding runner setup",
        description:
          "Connect a Judge0-compatible runner and pick test languages.",
        summary:
          "Run candidate code submissions cleanly from the Candidate Careers Portal.",
        keyTakeaways: [
          "Pick the programming languages your team tests.",
          "Run visible and hidden test cases automatically.",
          "Keep answer keys hidden from candidate browsers.",
        ],
        technicalDetails:
          "Works with external Judge0-compatible execution environments.",
      },
      {
        id: "storage-smtp-setup",
        group: "integration",
        category: "Setup Guide",
        badge: "STORAGE & EMAIL",
        title: "Email & storage setup",
        description:
          "Connect S3-compatible file storage and SMTP email alerts.",
        summary:
          "Store resumes privately and send reliable workspace emails and reminders.",
        keyTakeaways: [
          "Direct uploads to private S3-compatible storage.",
          "SMTP delivery for invites, onboarding, and contract alerts.",
          "Auto-cleanup removes expired unused uploads while keeping linked files safe.",
        ],
        technicalDetails:
          "Transactional emails and cleanup jobs run reliably in the background.",
      },
    ],
    []
  );

  const visibleResources = useMemo(() => {
    if (resourceTab === "all") return resourcesCatalog;
    return resourcesCatalog.filter((r) => r.group === resourceTab);
  }, [resourcesCatalog, resourceTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewModalResource(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      id="resources"
      className="relative w-full text-[#141517] scroll-mt-20 bg-white"
    >
      {/* 1. CLEAN MINIMAL RESOURCES LIST */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EAE6DF]">
        <div className="max-w-[1040px] mx-auto">
          {/* Clean Editorial Split Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <ScrollPlacingItem yOffset={14}>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
                <span>Resources</span>
              </div>
              <h2
                className="text-[#141517] tracking-[-0.03em] leading-[1.08]"
                style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.85rem)" }}
              >
                <span className="font-bold">Guides, Security &amp; </span>
                <span className="font-editorial-serif text-[#8B640A]">
                  Setup.
                </span>
              </h2>
            </ScrollPlacingItem>

            <ScrollPlacingItem delay={0.06} yOffset={14} className="max-w-xs">
              <p className="text-sm text-[#5E6168] leading-relaxed">
                Practical playbooks, security briefs, and integration setup
                guides for your team.
              </p>
            </ScrollPlacingItem>
          </div>

          {/* Minimal Underline Category Tabs */}
          <div className="flex items-center gap-6 border-b border-[#EAE6DF] mb-8 overflow-x-auto no-scrollbar">
            {[
              { id: "guide" as const, label: "Product Guides", count: "5" },
              { id: "security" as const, label: "Security & AI", count: "2" },
              { id: "integration" as const, label: "Setup Guides", count: "3" },
              { id: "all" as const, label: "All", count: "10" },
            ].map((tab) => {
              const isActive = resourceTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setResourceTab(tab.id)}
                  className={`relative pb-3 text-xs sm:text-[13.5px] font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#141517]"
                      : "text-[#6B6D74] hover:text-[#141517]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[11px] font-mono text-[#8E929E]">
                    {tab.count}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="minimalResourceTabBar"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#F6C445]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimal Structured Card Grid for Each Guide & Resource */}
          <AnimatePresence mode="wait">
            <motion.div
              key={resourceTab}
              id="featured-resources"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {visibleResources.map((res, idx) => (
                <ScrollDownReveal
                  key={res.id}
                  fromY={46}
                  fromScale={0.94}
                  stagger={(idx % 3) * 0.12}
                  className="h-full"
                >
                  <button
                    type="button"
                    onClick={() => setPreviewModalResource(res)}
                    className="w-full h-full text-left rounded-[22px] bg-white border border-[#EAE6DF] hover:border-[#F6C445] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-18px_rgba(20,21,23,0.12)] flex flex-col justify-between gap-6 cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="w-9 h-9 rounded-xl bg-[#FFF9E6] border border-[#F2D27A] text-[#8B640A] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#F6C445] group-hover:text-[#141517]">
                          <ResourceGroupIcon
                            group={res.group}
                            className="w-4 h-4"
                          />
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8B640A] bg-[#FAF8F5] border border-[#EAE6DF] px-2.5 py-1 rounded-full">
                          {res.badge}
                        </span>
                      </div>

                      <h3 className="text-[15.5px] font-bold text-[#141517] tracking-[-0.015em] group-hover:text-[#8B640A] transition-colors mb-2">
                        {res.title}
                      </h3>

                      <p className="text-[13px] text-[#5E6168] leading-relaxed">
                        {res.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between text-xs font-semibold text-[#141517]">
                      <span>{res.category}</span>
                      <span className="inline-flex items-center gap-1 text-[#8B640A] group-hover:text-[#141517] transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </button>
                </ScrollDownReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* BRIEFING MODAL */}
      <AnimatePresence>
        {previewModalResource && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewModalResource(null)}
              className="fixed inset-0 bg-[#141517]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-lg bg-white border border-[#EAE6DF] rounded-3xl overflow-hidden z-10 shadow-2xl"
            >
              <div className="h-1.5 w-full bg-[#F6C445]" />
              <div className="p-6 sm:p-8">
                <button
                  onClick={() => setPreviewModalResource(null)}
                  className="absolute top-6 right-6 p-1.5 text-[#555861] hover:text-[#141517] cursor-pointer"
                  aria-label="Close briefing"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-[10.5px] font-mono font-bold uppercase tracking-wider mb-2.5">
                  <span className="text-[#8B640A]">
                    {previewModalResource.category}
                  </span>
                  <span className="text-[#8E929E]">·</span>
                  <span className="text-[#5E6168]">
                    {previewModalResource.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141517] tracking-tight mb-2.5">
                  {previewModalResource.title}
                </h3>

                <p className="text-sm text-[#3A3D44] leading-relaxed mb-5">
                  {previewModalResource.summary}
                </p>

                <div className="py-4 hairline-y space-y-2 mb-5">
                  {previewModalResource.keyTakeaways.map((takeaway) => (
                    <div
                      key={takeaway}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141517]"
                    >
                      <span className="text-[#C98908] font-mono font-bold mt-0.5">
                        —
                      </span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#5E6168] leading-relaxed mb-6">
                  {previewModalResource.technicalDetails}
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => setPreviewModalResource(null)}
                    className="px-6 py-2.5 rounded-full btn-youkt-pill-yellow text-xs font-bold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
