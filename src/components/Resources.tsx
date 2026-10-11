"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Sparkles,
  Search,
  X,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Users,
  Code,
  Zap,
  ArrowUp,
  SlidersHorizontal,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResourcesProps {
  onNavigate?: (sectionId: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  targetId: string;
  keywords: string[];
}

export default function Resources({ onNavigate }: ResourcesProps) {
  // Search query state
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Active Stage in Connected Platform Process Overview (0 to 6)
  const [activeProcessStage, setActiveProcessStage] = useState<number>(0);

  // FAQ Accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>("all");

  // Highlighted section for visual anchor feedback
  const [highlightedSectionId, setHighlightedSectionId] = useState<string | null>(null);

  // Featured Resource In-Page Modal/Drawer state
  const [previewModalResource, setPreviewModalResource] = useState<{
    title: string;
    category: string;
    badge: string;
    summary: string;
    keyTakeaways: string[];
    technicalDetails: string;
  } | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Search Index Data focused on the refined, non-redundant sections
  const searchIndex: SearchItem[] = useMemo(
    () => [
      {
        id: "feat-1",
        title: "Getting Started with Youkt",
        description:
          "Understand Youkt's unified recruitment platform and discover how its core capabilities connect throughout the hiring lifecycle.",
        category: "Product Guide",
        targetId: "featured-resources",
        keywords: ["getting started", "basics", "introduction", "lifecycle", "onboarding", "overview", "ats", "crm"],
      },
      {
        id: "feat-2",
        title: "Platform Architecture & Workflows",
        description:
          "Unified ATS, recruitment CRM, and applicant pipelines working seamlessly with zero context switching.",
        category: "Platform Architecture",
        targetId: "featured-resources",
        keywords: ["architecture", "workflows", "pipeline", "crm", "ats"],
      },
      {
        id: "feat-3",
        title: "Enterprise Scale & Governance",
        description:
          "100% logical multi-tenancy, granular role-based access control (RBAC), and durable Temporal workflow execution.",
        category: "Enterprise Security",
        targetId: "featured-resources",
        keywords: ["security", "tenant isolation", "rbac", "permissions", "temporal", "audit"],
      },
      {
        id: "flow-all",
        title: "One Platform. Connected Recruitment.",
        description:
          "7 Connected Stages: Source, Discover, Screen, Assess, Interview, Select, and Onboard.",
        category: "Platform Process",
        targetId: "product-overview",
        keywords: [
          "source",
          "discover",
          "screen",
          "assess",
          "interview",
          "select",
          "onboard",
          "process",
          "hiring lifecycle",
        ],
      },
      {
        id: "flow-source",
        title: "Stage 01: SOURCE",
        description: "Bring candidates into the recruitment pipeline through CRM databases, job boards, and talent networks.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["source", "ingestion", "candidate pool", "import"],
      },
      {
        id: "flow-discover",
        title: "Stage 02: DISCOVER",
        description: "Find relevant talent using BM25 natural language search and automated criteria filtering.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["discover", "search", "talent search", "bm25"],
      },
      {
        id: "flow-screen",
        title: "Stage 03: SCREEN",
        description: "Review candidates against job requirements and pre-qualification benchmarks.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["screen", "screening", "pre-qualification", "scorecard"],
      },
      {
        id: "flow-assess",
        title: "Stage 04: ASSESS",
        description: "Evaluate skills and practical competencies with sandboxed code challenges and automated aptitude tests.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["assess", "skill assessment", "coding test", "judge0"],
      },
      {
        id: "flow-interview",
        title: "Stage 05: INTERVIEW",
        description: "Coordinate structured interviews, synchronize calendar slots, and collect consolidated panel feedback.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["interview", "calendar", "panel", "feedback", "scorecard"],
      },
      {
        id: "flow-select",
        title: "Stage 06: SELECT",
        description: "Support informed recruitment decisions with objective candidate scorecards and consensus review.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["select", "decision", "consensus", "hiring manager"],
      },
      {
        id: "flow-onboard",
        title: "Stage 07: ONBOARD",
        description: "Manage digital onboarding, document compliance, and seamless transition from applicant to employee.",
        category: "Process Stage",
        targetId: "product-overview",
        keywords: ["onboard", "offer", "contract", "digital onboarding"],
      },
      {
        id: "faq-all",
        title: "Frequently Asked Questions",
        description:
          "Answers on what Youkt is, who can use it, how Copilot works, approval gates, assessments, and permissions.",
        category: "FAQs",
        targetId: "resource-faq",
        keywords: ["faq", "questions", "answers", "help", "support", "who can use", "permissions"],
      },
      {
        id: "ai-auto",
        title: "AI & Automation Studio",
        description: "Recruitment Copilot, Human-in-the-Loop approvals, pipeline triggers, and skill evaluation.",
        category: "AI & Automation",
        targetId: "ai-automation",
        keywords: ["ai", "copilot", "automation", "human in the loop", "triggers"],
      },
    ],
    []
  );

  // Search filtering logic
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCategory = item.category.toLowerCase().includes(q);
      const inKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
      return inTitle || inDesc || inCategory || inKeywords;
    });
  }, [searchQuery, searchIndex]);

  // Smooth scroll helper
  const scrollToAnchor = (targetId: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);

    if (targetId === "ai-automation" || targetId === "platform" || targetId === "solutions") {
      onNavigate?.(targetId);
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      // Visual flash highlight
      setHighlightedSectionId(targetId);
      setTimeout(() => setHighlightedSectionId(null), 1800);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewModalResource(null);
        setIsSearchFocused(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // FAQs data with category tags
  const faqs = useMemo(
    () => [
      {
        category: "platform",
        q: "What is Youkt?",
        a: "Youkt is an AI-powered recruitment platform that brings applicant tracking, recruitment CRM, skill assessments, and workflow automation together.",
      },
      {
        category: "platform",
        q: "Who can use Youkt?",
        a: "Recruiters, candidates, hiring managers, recruitment agencies, enterprises, and platform administrators can use the platform through their respective interfaces and permissions.",
      },
      {
        category: "ai",
        q: "How does the Recruitment Copilot work?",
        a: "Recruiters can use natural-language requests to search candidates and access permitted recruitment operations.",
      },
      {
        category: "ai",
        q: "Can AI make recruitment changes without approval?",
        a: "Important write operations can pause for explicit human approval before execution.",
      },
      {
        category: "ai",
        q: "Does Youkt support automated assessments?",
        a: "Yes. Youkt supports automated aptitude scoring and coding evaluation.",
      },
      {
        category: "security",
        q: "How does Youkt manage access permissions?",
        a: "Youkt uses tenant-aware access controls and role-based permissions to restrict access to recruitment data and operations.",
      },
    ],
    []
  );

  const filteredFaqs = useMemo(() => {
    if (faqCategoryFilter === "all") return faqs;
    return faqs.filter((f) => f.category === faqCategoryFilter);
  }, [faqs, faqCategoryFilter]);

  // Connected 7 process stages with detailed interactive inspection
  const processStages = [
    {
      id: "source",
      num: "01",
      title: "SOURCE",
      shortDesc: "Bring candidates into the recruitment pipeline.",
      icon: Users,
      headline: "Multi-Channel Candidate Sourcing & Pool Ingestion",
      details: [
        "Aggregate candidates from applicant forms, agency submissions, and CRM pools.",
        "Automatic resume parsing into normalized candidate schemas with role ontology matching.",
        "Deduplication engine prevents duplicate records across concurrent campaigns.",
      ],
      telemetry: "Instant Ingestion • Idempotent Records",
    },
    {
      id: "discover",
      num: "02",
      title: "DISCOVER",
      shortDesc: "Find relevant talent using search and AI assistance.",
      icon: Search,
      headline: "Natural-Language Search & Precision Filtering",
      details: [
        "Zero-hallucination BM25 lexical discovery translates recruiter queries into schema queries.",
        "Filter by availability, seniority, verified tech stacks, and compensation benchmarks.",
        "Candidate search results respect recruiter tenant isolation and role permissions.",
      ],
      telemetry: "0.38s Search Latency • Zero Hallucinations",
    },
    {
      id: "screen",
      num: "03",
      title: "SCREEN",
      shortDesc: "Review candidates against job requirements.",
      icon: Filter,
      headline: "Automated Pre-Qualification & Objective Screening",
      details: [
        "Standardized qualification checklists matched against job requisition requirements.",
        "Recruiter evaluation scorecards auto-initialized with consistent rubrics.",
        "Candidate status automatically updated to IN_SCREENING with recruiter assignment.",
      ],
      telemetry: "< 24h Review SLA • Standardized Rubrics",
    },
    {
      id: "assess",
      num: "04",
      title: "ASSESS",
      shortDesc: "Evaluate skills and competencies.",
      icon: Code,
      headline: "Sandboxed Code Execution & Aptitude Benchmarking",
      details: [
        "Objective coding challenges executed in isolated Judge0 sandbox containers.",
        "Automated unit testing, algorithmic complexity verification, and anti-cheat tracking.",
        "Instant benchmark scorecards delivered directly to the recruitment dossier.",
      ],
      telemetry: "Sandboxed Runtime • 18/18 Automated Test Benchmarks",
    },
    {
      id: "interview",
      num: "05",
      title: "INTERVIEW",
      shortDesc: "Coordinate interviews and collect hiring feedback.",
      icon: SlidersHorizontal,
      headline: "Frictionless Scheduling & Panel Scorecard Synchronization",
      details: [
        "Self-scheduling calendar links dispatched with interviewer availability.",
        "Briefing kits delivered with candidate test scorecards and role question guides.",
        "Collaborative feedback forms collected with automatic consensus calculations.",
      ],
      telemetry: "Zero Calendar Conflicts • Structured Feedback",
    },
    {
      id: "select",
      num: "06",
      title: "SELECT",
      shortDesc: "Support informed recruitment decisions.",
      icon: CheckCircle2,
      headline: "Consensus-Driven Selection & Gated Human Authorization",
      details: [
        "Aggregated candidate scoring dossier synthesized across all interview stages.",
        "Sensitive write operations (advancing to offer) pause for explicit recruiter sign-off.",
        "Comprehensive audit log recorded with actor authentication and timestamp.",
      ],
      telemetry: "Human Consent Enforced • Cryptographic Audit Log",
    },
    {
      id: "onboard",
      num: "07",
      title: "ONBOARD",
      shortDesc: "Manage the digital onboarding process.",
      icon: Sparkles,
      headline: "Frictionless Offer Generation & Digital Onboarding",
      details: [
        "Formal offer letter drafted with compensation benchmarks and approval locks.",
        "Candidate digital signing and onboarding milestone tracking in careers portal.",
        "Temporal background workflows schedule reminders and IT provisioning tasks.",
      ],
      telemetry: "Durable Temporal Execution • Automated Reminders",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <div className="relative w-full text-[#141517] select-none">
      {/* ==================================================
          1. HERO SECTION (Clean Editorial SaaS Knowledge Hub)
          ================================================== */}
      <section
        id="resources"
        className="pt-10 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            <span>YOUKT RESOURCE CENTER</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#141517] tracking-tight mb-5 leading-[1.15]">
            Everything You Need to Know{" "}
            <span className="text-[#8B640A] block sm:inline">About Youkt.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#5E6168] leading-relaxed max-w-2xl mx-auto mb-9">
            Explore product guides, understand platform capabilities, discover connected hiring
            workflows, and find answers to common questions.
          </p>

          {/* Search Bar with Interactive Client-Side Filtering */}
          <div className="max-w-2xl mx-auto relative mb-6">
            <div
              className={`flex items-center bg-white rounded-full border px-4 sm:px-5 py-3 sm:py-3.5 shadow-sm transition-all ${
                isSearchFocused || searchQuery
                  ? "border-[#141517] ring-4 ring-[#141517]/5 shadow-md"
                  : "border-[#EAE6DF] hover:border-[#DDD8CE]"
              }`}
            >
              <Search className="w-5 h-5 text-[#8B640A] shrink-0 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="What would you like to learn about?"
                className="w-full text-xs sm:text-sm text-[#141517] placeholder-[#8E929E] bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    searchInputRef.current?.focus();
                  }}
                  className="p-1 text-[#7A7D85] hover:text-[#141517] rounded-full hover:bg-black/5 transition-colors cursor-pointer ml-2"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Autocomplete / Matching Results Dropdown Panel */}
            <AnimatePresence>
              {(isSearchFocused || searchQuery.trim().length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 right-0 top-full mt-2.5 bg-white rounded-2xl border border-[#EAE6DF] shadow-2xl p-3 z-50 text-left max-h-[360px] overflow-y-auto"
                >
                  {searchQuery.trim().length === 0 ? (
                    <div className="p-3 text-xs text-[#7A7D85]">
                      <span className="font-semibold text-[#141517] block mb-1">
                        Popular Topics:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {[
                          { label: "Getting Started Guide", id: "featured-resources" },
                          { label: "7-Stage Hiring Process", id: "product-overview" },
                          { label: "AI & Automation Studio", id: "ai-automation" },
                          { label: "Frequently Asked Questions", id: "resource-faq" },
                        ].map((pop) => (
                          <button
                            key={pop.label}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              scrollToAnchor(pop.id);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#FFF9E6] border border-[#EAE6DF] hover:border-[#FCE29A] text-[11px] font-medium text-[#141517] cursor-pointer transition-colors"
                          >
                            {pop.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-bold text-[#7A7D85] uppercase tracking-wider flex items-center justify-between border-b border-[#F0ECE4]">
                        <span>Matching Knowledge Items ({searchResults.length})</span>
                        <span className="text-[#8B640A]">Click to navigate</span>
                      </div>
                      {searchResults.map((item) => (
                        <button
                          key={item.id}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            scrollToAnchor(item.targetId);
                          }}
                          className="w-full text-left p-3 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer group flex items-start justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-bold text-[#141517] group-hover:text-[#8B640A] transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-[#FFF9E6] text-[#8B640A] border border-[#FCE29A]">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#6B6D74] line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#8B640A] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-[#7A7D85]">
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F5] mx-auto mb-2 flex items-center justify-center text-[#8B640A]">
                        <Search className="w-4 h-4" />
                      </div>
                      <p className="font-semibold text-[#141517] mb-0.5">
                        No matching resources found.
                      </p>
                      <p className="text-[11px]">
                        Try searching for &ldquo;Getting Started&rdquo;, &ldquo;Lifecycle&rdquo;, or &ldquo;FAQ&rdquo;.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Topic Anchor Suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <span className="text-[11px] text-[#7A7D85] mr-1">Suggested Topics:</span>
            {[
              { label: "Getting Started", target: "featured-resources" },
              { label: "Hiring Lifecycle", target: "product-overview" },
              { label: "AI & Automation", target: "ai-automation" },
              { label: "FAQs & Support", target: "resource-faq" },
            ].map((topic) => (
              <button
                key={topic.label}
                onClick={() => scrollToAnchor(topic.target)}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#FFF9E6] border border-[#EAE6DF] hover:border-[#FCE29A] text-[#141517] hover:text-[#8B640A] shadow-2xs transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{topic.label}</span>
                <ChevronDown className="w-3 h-3 text-[#8B640A]" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          2. FEATURED RESOURCES SECTION (Asymmetric Composition)
          ================================================== */}
      <section
        id="featured-resources"
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 rounded-3xl ${
          highlightedSectionId === "featured-resources" ? "ring-2 ring-[#F6C445] bg-[#FFFDF5]" : ""
        }`}
      >
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A] mb-2.5">
            <BookOpen className="w-3.5 h-3.5 text-[#F6C445]" />
            <span>START EXPLORING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141517] tracking-tight mb-2">
            Your Starting Point with Youkt.
          </h2>
          <p className="text-sm sm:text-base text-[#5E6168] max-w-2xl">
            Discover the essential information you need to understand the platform and its capabilities.
          </p>
        </div>

        {/* Asymmetric 7-col Prominent + 5-col Secondary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Prominent Card 1: Getting Started */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] shadow-xs flex flex-col justify-between hover:border-[#DDD8CE] transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#141517] text-white">
                  PRODUCT GUIDE
                </span>
                <span className="text-xs font-semibold text-[#8B640A] flex items-center gap-1">
                  Core Foundations <Sparkles className="w-3 h-3 fill-[#F6C445] text-[#F6C445]" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#141517] mb-3 group-hover:text-[#8B640A] transition-colors">
                Getting Started with Youkt
              </h3>

              <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed mb-6">
                Understand Youkt&apos;s unified recruitment platform and discover how its core capabilities connect throughout the hiring lifecycle.
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {[
                  "Unified ATS & CRM Architecture with zero context switching",
                  "Single source of truth across candidate pools and requisition pipelines",
                  "Pre-configured role taxonomies and standardized interview scorecards",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#141517]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#7A7D85]">
                Complete Platform Architecture Overview
              </span>
              <button
                onClick={() =>
                  setPreviewModalResource({
                    title: "Getting Started with Youkt",
                    category: "PRODUCT GUIDE",
                    badge: "CORE ARCHITECTURE",
                    summary:
                      "Youkt unifies candidate sourcing, applicant tracking, recruitment CRM, and standardized assessments into a single coherent system. Instead of stitching together disconnected legacy point solutions, recruiting teams collaborate inside one governed workspace.",
                    keyTakeaways: [
                      "Centralized candidate dossiers with chronological timeline records.",
                      "Customizable stage pipelines matching your organization's hiring milestones.",
                      "Automated background indexing of resumes and portfolio code repositories.",
                    ],
                    technicalDetails:
                      "Built on durable Temporal workflow orchestration and a zero-hallucination BM25 lexical discovery registry, ensuring high reliability under high concurrent applicant volume.",
                  })
                }
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141517] group-hover:text-[#8B640A] cursor-pointer"
              >
                <span>Read Guide Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F6C445] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Secondary Column: 2 Complementary Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Card 2: Platform Architecture & Connected Pipelines */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAE6DF] shadow-xs flex-1 flex flex-col justify-between hover:border-[#DDD8CE] transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#8B640A] border border-[#FCE29A]">
                    CONNECTED WORKFLOWS
                  </span>
                  <Zap className="w-4 h-4 text-[#8B640A]" />
                </div>
                <h3 className="text-lg font-bold text-[#141517] mb-2 group-hover:text-[#8B640A] transition-colors">
                  Platform Architecture & Lifecycle
                </h3>
                <p className="text-xs text-[#5E6168] leading-relaxed mb-4">
                  Explore how candidate sourcing, automated screening, technical code evaluations, and offer onboarding interconnect seamlessly.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between">
                <button
                  onClick={() => scrollToAnchor("product-overview")}
                  className="text-xs font-bold text-[#8B640A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect 7 Connected Stages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-[#7A7D85]">7 Connected Steps</span>
              </div>
            </div>

            {/* Card 3: Enterprise Readiness & Governance */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAE6DF] shadow-xs flex-1 flex flex-col justify-between hover:border-[#DDD8CE] transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#52555C] border border-[#EAE6DF]">
                    ENTERPRISE SECURITY
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                </div>
                <h3 className="text-lg font-bold text-[#141517] mb-2 group-hover:text-[#8B640A] transition-colors">
                  Enterprise Scale & Governance
                </h3>
                <p className="text-xs text-[#5E6168] leading-relaxed mb-4">
                  Learn how Youkt approaches strict tenant isolation, role-based access control, cryptographic audit logs, and durable workflows.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between">
                <button
                  onClick={() =>
                    setPreviewModalResource({
                      title: "Security & Enterprise Governance",
                      category: "ENTERPRISE SPECIFICATION",
                      badge: "TENANT AIRGAP & RBAC",
                      summary:
                        "Youkt isolates every organization's candidate and client databases using strict tenant-scoped RBAC and schema-enforced permission barriers. Every critical candidate record change requires authenticated recruiter authorization.",
                      keyTakeaways: [
                        "100% tenant-isolated data projections prevent cross-organization leakage.",
                        "Fine-grained RBAC enforces read and write operation privileges.",
                        "Durable Temporal state machines guarantee zero lost background events.",
                      ],
                      technicalDetails:
                        "Cryptographic HMAC audit events track all state changes with actor IDs, timestamps, and request hashes for enterprise compliance.",
                    })
                  }
                  className="text-xs font-bold text-[#141517] hover:text-[#8B640A] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Security Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F6C445]" />
                </button>
                <span className="text-[11px] text-[#10B981] font-semibold">100% Airgapped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. HOW TO USE YOUKT — INTERACTIVE PROCESS WORKBENCH
          ================================================== */}
      <section
        id="product-overview"
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 rounded-3xl ${
          highlightedSectionId === "product-overview" ? "ring-2 ring-[#F6C445] bg-[#FFFDF5]" : ""
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A] mb-2.5">
            <Zap className="w-3.5 h-3.5 text-[#F6C445]" />
            <span>UNDERSTAND THE PLATFORM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141517] tracking-tight mb-3">
            One Platform. Connected Recruitment.
          </h2>
          <p className="text-sm sm:text-base text-[#5E6168] leading-relaxed">
            Youkt brings applicant tracking, recruitment CRM, assessments, and AI-assisted workflows
            together to support the recruitment lifecycle.
          </p>
        </div>

        {/* Interactive 7-Stage Process Workbench Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EAE6DF] shadow-xs space-y-6">
          {/* Header indicator */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE4] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6C445] animate-ping" />
              <span className="font-bold text-[#141517]">
                Click Any Milestone to Inspect Operational Capabilities:
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#8B640A] bg-[#FFF9E6] px-2.5 py-0.5 rounded-full border border-[#FCE29A]">
              7 Connected Stages
            </span>
          </div>

          {/* Desktop Horizontal Connected Timeline Rail */}
          <div className="hidden lg:block relative py-2">
            {/* Background connecting rail */}
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-[#F0ECE4] -translate-y-1/2 z-0 rounded-full" />
            
            <div className="grid grid-cols-7 gap-2 relative z-10 text-center">
              {processStages.map((st, i) => {
                const Icon = st.icon;
                const isActive = activeProcessStage === i;
                const isPast = i < activeProcessStage;
                return (
                  <button
                    key={st.id}
                    onClick={() => setActiveProcessStage(i)}
                    className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                      isActive
                        ? "bg-[#141517] text-white border-[#282A2F] shadow-md scale-105"
                        : isPast
                        ? "bg-[#E6F8F0] text-[#0A7347] border-[#B3ECCF]"
                        : "bg-white text-[#52555C] border-[#EAE6DF] hover:border-[#DDD8CE]"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#F6C445] text-[#141517]"
                          : isPast
                          ? "bg-[#10B981] text-white"
                          : "bg-[#FAF8F5] text-[#8B640A]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-wider ${
                        isActive ? "text-[#F6C445]" : "text-[#7A7D85]"
                      }`}
                    >
                      {st.num}
                    </span>
                    <h4 className="text-xs font-bold truncate w-full">{st.title}</h4>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Horizontal Step Scroller */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {processStages.map((st, i) => {
              const isActive = activeProcessStage === i;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveProcessStage(i)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 border cursor-pointer ${
                    isActive
                      ? "bg-[#141517] text-[#F6C445] border-[#282A2F]"
                      : "bg-[#FAF8F5] text-[#6B6D74] border-[#EAE6DF]"
                  }`}
                >
                  {st.num} {st.title}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Inspection Canvas */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE6DF]">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B640A] bg-[#FFF9E6] px-2 py-0.5 rounded border border-[#FCE29A] inline-block mb-1">
                  Stage {processStages[activeProcessStage].num} Milestone
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#141517]">
                  {processStages[activeProcessStage].headline}
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#0A7347] bg-[#E6F8F0] px-2.5 py-1 rounded-full border border-[#B3ECCF] self-start sm:self-auto">
                {processStages[activeProcessStage].telemetry}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
              {processStages[activeProcessStage].shortDesc}
            </p>

            {/* Stage operational capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {processStages[activeProcessStage].details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#EAE6DF] text-xs text-[#141517] shadow-2xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. FAQ SECTION (Categorized Accordion)
          ================================================== */}
      <section
        id="resource-faq"
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-700 rounded-3xl ${
          highlightedSectionId === "resource-faq" ? "ring-2 ring-[#F6C445] bg-[#FFFDF5]" : ""
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[11px] font-bold text-[#8B640A] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445]" />
            <span>NEED CLARITY?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#141517] tracking-tight mb-2">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm text-[#5E6168]">
            Quick answers to common questions about Youkt and its capabilities.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {[
              { id: "all", label: "All Questions" },
              { id: "platform", label: "Platform & Access" },
              { id: "ai", label: "AI & Automation" },
              { id: "security", label: "Security & Governance" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFaqCategoryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  faqCategoryFilter === tab.id
                    ? "bg-[#141517] text-white border-[#282A2F] shadow-xs"
                    : "bg-white text-[#6B6D74] border-[#EAE6DF] hover:border-[#DDD8CE]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Accordion Interface */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EAE6DF] hover:border-[#DDD8CE] shadow-2xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#141517]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-[#141517] text-white" : "text-[#7A7D85]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#5E6168] leading-relaxed border-t border-[#F0ECE4]/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          5. FINAL CTA SECTION
          ================================================== */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#141517] text-white rounded-3xl p-8 sm:p-12 lg:p-14 text-center border border-[#282A2F] shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Yellow Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F6C445]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#F6C445] text-[11px] font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO EXPLORE?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Your Next Smarter Hiring Decision Starts Here.
            </h2>

            <p className="text-xs sm:text-base text-[#9CA0AA] leading-relaxed mb-8 max-w-xl mx-auto">
              Discover how Youkt brings talent intelligence, AI assistance, and recruitment
              automation together in one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate?.("platform")}
                className="w-full sm:w-auto px-7 py-3 bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] text-xs sm:text-sm font-bold rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Explore the Platform
              </button>
              <button
                onClick={() => onNavigate?.("resources")}
                className="w-full sm:w-auto px-7 py-3 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold rounded-full border border-white/15 transition-all cursor-pointer"
              >
                Try Youkt Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. GLOBAL FOOTER (No How It Works, clean links)
          ================================================== */}
      <footer className="w-full border-t border-[#EAE6DF] bg-white pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#F0ECE4]">
            {/* Left Brand Col */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 text-[#141517] flex items-center justify-center">
                  <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                    <path
                      d="M14.5 2.5C8.8 2.5 4.1 7.2 4.1 12.9c0 5.5 4.1 10.1 9.4 10.8 2.2.3 4.3-.2 6.2-1.2-1.9-.4-3.6-1.6-4.8-3.2-2.1-2.8-2.3-6.6-.5-9.6 1.2-2 3.1-3.4 5.4-4-1.6-1.6-3.4-2.8-5.3-2.8z"
                      fill="#141517"
                    />
                    <path
                      d="M18.2 4.9c-.8.6-1.5 1.4-1.9 2.3-.9 2.2-.4 4.7 1.4 6.3 1.3 1.2 3.1 1.7 4.9 1.3-.4-3.2-1.8-6-4.4-9.9z"
                      fill="#F6C445"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-[#141517]">Youkt</span>
              </div>
              <p className="text-xs text-[#5E6168] max-w-sm leading-relaxed">
                Autonomous multi-agent recruitment orchestration platform. Where hiring intent meets
                autonomous execution.
              </p>
              <div className="pt-2 text-[11px] text-[#7A7D85]">
                Enterprise Multi-Tenant Infrastructure • Temporal Durable Workflows
              </div>
            </div>

            {/* Navigation Columns (How It Works removed completely!) */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-[11px] font-bold text-[#141517] uppercase tracking-wider block mb-2">
                Navigation
              </span>
              <ul className="space-y-1.5 text-xs text-[#5E6168]">
                <li>
                  <button
                    onClick={() => onNavigate?.("platform")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Platform
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate?.("solutions")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate?.("ai-automation")}
                    className="hover:text-[#141517] transition-colors cursor-pointer"
                  >
                    AI & Automation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToAnchor("resources")}
                    className="hover:text-[#141517] font-semibold text-[#141517] transition-colors cursor-pointer"
                  >
                    Resources Hub
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-4 space-y-2">
              <span className="text-[11px] font-bold text-[#141517] uppercase tracking-wider block mb-2">
                Stay Updated
              </span>
              <p className="text-xs text-[#5E6168]">
                Receive the latest enterprise product briefings and recruitment engineering updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="pt-1 flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email"
                  required
                  className="w-full text-xs px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] focus:outline-none focus:border-[#141517]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#141517] text-white text-xs font-bold rounded-xl hover:bg-[#282A2F] transition-colors shrink-0 cursor-pointer"
                >
                  {newsletterSubmitted ? "Joined ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7D85] gap-3">
            <span>© 2026 Youkt Technologies Inc. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#141517] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#141517] cursor-pointer">Terms of Service</span>
              <span className="hover:text-[#141517] cursor-pointer">Security Whitepaper</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#141517] cursor-pointer flex items-center gap-1 font-semibold"
              >
                Top <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================================================
          IN-PAGE PREVIEW MODAL / DRAWER
          ================================================== */}
      <AnimatePresence>
        {previewModalResource && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div
              className="fixed inset-0"
              onClick={() => setPreviewModalResource(null)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] shadow-2xl z-10"
            >
              <button
                onClick={() => setPreviewModalResource(null)}
                className="absolute top-5 right-5 p-1.5 text-[#5E6168] hover:text-[#141517] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-[#8B640A] bg-[#FFF9E6] px-2.5 py-0.5 rounded-full border border-[#FCE29A]">
                  {previewModalResource.category}
                </span>
                <span className="text-[10px] font-semibold text-[#7A7D85]">
                  {previewModalResource.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#141517] mb-3">
                {previewModalResource.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed mb-5">
                {previewModalResource.summary}
              </p>

              <div className="space-y-2 mb-5">
                <span className="text-[11px] font-bold text-[#141517] uppercase tracking-wider block">
                  Key Architecture Highlights:
                </span>
                {previewModalResource.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#141517]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] text-xs text-[#52555C] mb-6">
                <strong>Platform Guarantee:</strong> {previewModalResource.technicalDetails}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setPreviewModalResource(null)}
                  className="px-5 py-2.5 bg-[#141517] text-white text-xs font-bold rounded-full hover:bg-[#282A2F] transition-colors cursor-pointer"
                >
                  Close Briefing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
