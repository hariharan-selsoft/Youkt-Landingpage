"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
  CheckCircle2,
  Users,
  Briefcase,
  UserCheck,
  Building2,
  ShieldCheck,
  Workflow,
  Bot,
  Share2,
  Lock,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  ScrollPlacingItem,
  TextAutoAlign,
} from "@/components/ScrollPlacingSection";

interface SolutionsProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Solutions({ onNavigate }: SolutionsProps) {
  // Active role state for the interactive split-stage workbench
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    {
      id: "recruiters",
      num: "01",
      name: "Recruiters & Talent Acquisition Teams",
      shortTitle: "Recruiters & TA",
      icon: Users,
      badge: "TALENT DISCOVERY & ATS",
      heading: "Hire smarter. Spend less time on repetitive work.",
      description:
        "Discover qualified candidates, manage talent pipelines, coordinate interviews, and automate recruitment workflows with AI assistance.",
      keyBenefits: [
        "AI-powered talent discovery",
        "Candidate pipeline management",
        "Automated recruitment workflows",
        "Recruitment Copilot",
      ],
      ctaText: "Explore Recruiter Solutions",
      ctaTarget: "ai-automation",
      metric: { value: "70%", label: "Faster Shortlisting Velocity" },
      simulatedInterface: {
        tag: "Recruiter Copilot Active",
        title: "Natural-Language Talent Sourcing",
        query: 'query(skills=["React", "TypeScript"], experience="5+ yrs")',
        status: "98% Match Identified",
        candidate: {
          name: "Sarah Jenkins",
          role: "Senior Full-Stack Engineer",
          score: "98% Fit Score",
          skills: ["React", "TypeScript", "Node.js", "Temporal"],
        },
      },
    },
    {
      id: "candidates",
      num: "02",
      name: "Candidates & Job Seekers",
      shortTitle: "Candidates & Seekers",
      icon: UserCheck,
      badge: "CANDIDATE EXPERIENCE",
      heading: "Your next opportunity starts here.",
      description:
        "Discover relevant jobs, submit applications, track your progress, complete skill assessments, and manage onboarding through a seamless careers portal.",
      keyBenefits: [
        "Easy job discovery and applications",
        "Transparent application tracking",
        "Skill assessments",
        "Digital onboarding",
      ],
      ctaText: "Explore the Careers Portal",
      ctaTarget: "resources",
      metric: { value: "100%", label: "Status Transparency Rate" },
      simulatedInterface: {
        tag: "Live Careers Portal",
        title: "Real-Time Application Journey",
        query: "application_id: #YK-84920 · Lead AI Engineer",
        status: "Stage 3 of 4: Interview Ready",
        steps: [
          { name: "Application Submitted", done: true, time: "Verified" },
          { name: "Skill Assessment (96th percentile)", done: true, time: "Completed" },
          { name: "Technical Interview", active: true, time: "Tomorrow, 2:00 PM" },
          { name: "Digital Onboarding & Offer", done: false, time: "Pending Review" },
        ],
      },
    },
    {
      id: "managers",
      num: "03",
      name: "Hiring Managers & Interviewers",
      shortTitle: "Hiring Managers",
      icon: Briefcase,
      badge: "COLLABORATIVE EVALUATION",
      heading: "Make confident, informed hiring decisions.",
      description:
        "Review candidate profiles, conduct structured interviews, evaluate skills using scorecards, and share feedback with recruitment teams.",
      keyBenefits: [
        "Candidate submission reviews",
        "Structured interview workflows",
        "Standardized evaluation scorecards",
        "Collaborative hiring feedback",
      ],
      ctaText: "Explore Hiring Tools",
      ctaTarget: "ai-automation",
      metric: { value: "4.9/5", label: "Interviewer Consensus Score" },
      simulatedInterface: {
        tag: "Scorecard Evaluation Console",
        title: "Standardized Technical Review Rubric",
        query: "Candidate: Michael Vance · Distributed Systems",
        status: "Strong Yes · Consensus Reached",
        scorecards: [
          { criteria: "Architecture & System Design", rating: 5.0, max: 5 },
          { criteria: "Algorithmic Problem Solving", rating: 4.8, max: 5 },
          { criteria: "Cross-Functional Collaboration", rating: 5.0, max: 5 },
        ],
      },
    },
    {
      id: "enterprises",
      num: "04",
      name: "Enterprises & Recruitment Agencies",
      shortTitle: "Enterprises & Agencies",
      icon: Building2,
      badge: "MULTI-TENANT GOVERNANCE",
      heading: "Scale hiring across teams, clients, and brands.",
      description:
        "Manage multiple hiring pipelines, collaborate across departments or client accounts, enforce hiring governance, and maintain full recruitment visibility.",
      keyBenefits: [
        "Multi-client and multi-department management",
        "Standardized hiring processes",
        "Client and team collaboration",
        "Comprehensive recruitment oversight",
      ],
      ctaText: "Explore Enterprise Solutions",
      ctaTarget: "resources",
      metric: { value: "10x", label: "Recruitment Volume Capacity" },
      simulatedInterface: {
        tag: "Multi-Client Control Plane",
        title: "Enterprise Tenant Portfolio",
        query: "Active Organizations: 3 Isolated Workspaces",
        status: "All SLAs Healthy (99.9%)",
        workspaces: [
          { name: "Acme Global Enterprise", pipelines: "24 Open Roles", sla: "99.9%" },
          { name: "Apex Health Partners", pipelines: "12 Open Roles", sla: "100%" },
          { name: "Vanguard Tech Labs", pipelines: "9 Open Roles", sla: "99.9%" },
        ],
      },
    },
    {
      id: "admins",
      num: "05",
      name: "Platform Administrators & HR Operations",
      shortTitle: "Platform Admins",
      icon: ShieldCheck,
      badge: "SECURITY & COMPLIANCE",
      heading: "Keep recruitment secure, compliant, and reliable.",
      description:
        "Configure roles and permissions, maintain data integrity, monitor recruitment workflows, and ensure secure access across the platform.",
      keyBenefits: [
        "Role-based access control (RBAC)",
        "Data security and compliance",
        "System configuration and monitoring",
        "Audit logs and governance",
      ],
      ctaText: "Explore Admin & Security Controls",
      ctaTarget: "resources",
      metric: { value: "SOC2", label: "Type II & GDPR Certified" },
      simulatedInterface: {
        tag: "Admin & Compliance Telemetry",
        title: "Immutable Cryptographic Audit Stream",
        query: "tenant_id: tenant-sec-884 · RBAC Policy Enforced",
        status: "Zero Security Vulnerabilities Detected",
        auditLogs: [
          { time: "15:24:02", action: "RBAC check: recruiter_permissions passed" },
          { time: "15:24:08", action: "Temporal state checkpoint saved (hash: 9a4f...3e)" },
          { time: "15:24:14", action: "Candidate data access encrypted under AES-256" },
        ],
      },
    },
  ];

  const currentRole = roles[activeRoleIndex];

  const ecosystemHighlights = [
    {
      id: "connected-workflows",
      icon: Workflow,
      title: "Connected Workflows",
      tag: "End-to-End Alignment",
      description:
        "Unifies job postings, candidate submissions, approvals, and onboarding without data silos or dropped handoffs between departments.",
    },
    {
      id: "ai-intelligence",
      icon: Bot,
      title: "AI-Powered Intelligence",
      tag: "Recruitment Copilot",
      description:
        "Autonomous talent discovery, smart resume indexing, and copilot actions that execute with strict human-in-the-loop approvals.",
    },
    {
      id: "transparent-collaboration",
      icon: Share2,
      title: "Transparent Collaboration",
      tag: "Shared Visibility",
      description:
        "Standardized scorecards, candidate dossiers, and live status milestones keep recruiters, managers, and applicants completely aligned.",
    },
    {
      id: "enterprise-controls",
      icon: Lock,
      title: "Enterprise-Ready Controls",
      tag: "Security & Scale",
      description:
        "100% logical multi-tenant isolation, immutable audit trails, role-based access governance, and SOC2/GDPR compliance at scale.",
    },
  ];

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="solutions-page" className="pt-4 pb-16 sm:pt-8 sm:pb-20 relative bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: "One Platform. Every Hiring Role."                      */}
        {/* ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 pb-12 sm:pb-14">
          {/* Top Pill Badge with Auto-Aligning Entrance */}
          <TextAutoAlign direction="down" delay={0.04} distance={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FCE29A] text-[#8B640A] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.9)] animate-pulse" />
              <span>BUILT FOR EVERY HIRING ROLE</span>
            </div>
          </TextAutoAlign>

          {/* Main Headline with Scroll Auto-Align Effect */}
          <TextAutoAlign direction="up" delay={0.08} distance={26}>
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-[#141517] tracking-tight leading-[1.12] mb-5">
              One Platform.{" "}
              <span className="text-[#D97706] bg-gradient-to-r from-[#D97706] via-[#E8890C] to-[#F59E0B] bg-clip-text text-transparent block sm:inline">
                Every Hiring Role.
              </span>
            </h1>
          </TextAutoAlign>

          {/* Description with Auto-Aligning Placement */}
          <TextAutoAlign direction="up" delay={0.12} distance={22}>
            <p className="text-sm sm:text-base lg:text-lg text-[#52555C] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
              From discovering talent to managing recruitment operations, Youkt connects everyone involved in hiring through one intelligent, AI-powered platform.
            </p>
          </TextAutoAlign>

          {/* Dual Action CTAs with Auto-Aligning Placement */}
          <TextAutoAlign direction="up" delay={0.16} distance={18}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              <button
                onClick={() => onNavigate?.("platform")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#141517] hover:bg-[#282A2F] shadow-[0_4px_16px_rgba(20,21,23,0.18)] hover:shadow-[0_6px_22px_rgba(246,196,69,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Explore Youkt</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToAnchor("who-can-use-youkt")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#141517] bg-white/90 hover:bg-white border border-[#EAE6DF] hover:border-[#D8D2C5] shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Discover Our Platform</span>
                <ChevronDown className="w-4 h-4 text-[#8B640A] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </TextAutoAlign>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION 2: WHO CAN USE YOUKT? — INTERACTIVE ROLE WORKBENCH             */}
        {/* ========================================================================= */}
        <section id="who-can-use-youkt" className="scroll-mt-24 mb-16 sm:mb-20">
          
          {/* Section 2 Header with Text Auto-Align Effect */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <TextAutoAlign direction="down" delay={0.04} distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FCE29A] text-[#8B640A] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#D97706]" />
                <span>ROLE-BASED CAPABILITIES</span>
              </div>
            </TextAutoAlign>

            <TextAutoAlign direction="up" delay={0.08} distance={24}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-[#141517] tracking-tight leading-[1.15] mb-4">
                Designed Around Your Role.{" "}
                <span className="text-[#D97706] bg-gradient-to-r from-[#D97706] via-[#E8890C] to-[#F59E0B] bg-clip-text text-transparent">
                  Built for Better Hiring.
                </span>
              </h2>
            </TextAutoAlign>

            <TextAutoAlign direction="up" delay={0.12} distance={20}>
              <p className="text-sm sm:text-base text-[#52555C] leading-relaxed">
                Whether you&apos;re hiring talent, searching for opportunities, evaluating candidates, or managing recruitment operations, Youkt gives you the tools to work smarter.
              </p>
            </TextAutoAlign>
          </div>

          {/* Interactive Role Switcher Pill Navigation Tabs */}
          <div className="flex items-center justify-center mb-8 px-2">
            <div className="inline-flex flex-wrap items-center justify-center bg-white/90 backdrop-blur-md p-1.5 rounded-2xl sm:rounded-full border border-[#EAE6DF] shadow-xs gap-1.5 max-w-full">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                const isActive = activeRoleIndex === idx;

                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRoleIndex(idx)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#141517] text-white shadow-sm"
                        : "text-[#5E6168] hover:text-[#141517] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-black ${
                        isActive
                          ? "bg-[#F6C445] text-[#141517]"
                          : "bg-[#FFF9E6] text-[#8B640A] border border-[#FCE29A]"
                      }`}
                    >
                      {role.num}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F6C445]" : "text-[#7A7D85]"}`} />
                    <span>{role.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Split-Stage Role Console with Dynamic Placing */}
          <div className="rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-12 bg-white border border-[#EAE6DF] shadow-[0_12px_36px_-12px_rgba(20,21,23,0.06)] relative overflow-hidden">
            {/* Subtle warm ambient backdrop gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6C445]/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
              >
                {/* Left Column (7 Cols): Editorial Narrative with Text Auto-Align Effect */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Role Index & Category Badge */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#141517] text-[#F6C445] text-xs font-black tracking-wide">
                        ROLE #{currentRole.num}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-[11px] font-bold uppercase tracking-wider">
                        {currentRole.badge}
                      </span>
                    </div>

                    {/* Role Title with Auto-Aligning Spring */}
                    <TextAutoAlign direction="left" delay={0.02} distance={24}>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141517] tracking-tight mb-2">
                        {currentRole.name}
                      </h3>
                    </TextAutoAlign>

                    {/* Punchy Subheading with Auto-Aligning Spring */}
                    <TextAutoAlign direction="left" delay={0.06} distance={20}>
                      <p className="text-base sm:text-lg font-bold text-[#D97706] mb-4">
                        {currentRole.heading}
                      </p>
                    </TextAutoAlign>

                    {/* Description with Auto-Aligning Spring */}
                    <TextAutoAlign direction="left" delay={0.1} distance={18}>
                      <p className="text-sm sm:text-base text-[#52555C] leading-relaxed mb-6">
                        {currentRole.description}
                      </p>
                    </TextAutoAlign>

                    {/* Key Benefits Grid with Auto-Aligning Stagger */}
                    <div className="mb-8">
                      <div className="text-xs font-bold text-[#8B640A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Key Benefits for {currentRole.shortTitle}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentRole.keyBenefits.map((benefit, bIdx) => (
                          <motion.div
                            key={bIdx}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.12 + bIdx * 0.05 }}
                            className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EDE8DF] hover:bg-white hover:border-[#F6C445] transition-all"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#141517] text-[#F6C445] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-[#F6C445]" />
                            </div>
                            <span className="text-xs sm:text-[13px] font-semibold text-[#141517] leading-snug">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Role CTA & Trust Footnote */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-[#EDE8DF]">
                    <button
                      onClick={() => onNavigate?.(currentRole.ctaTarget)}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#141517] hover:bg-[#282A2F] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                    >
                      <span>{currentRole.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#F6C445] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-[#7A7D85]">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span>Verified Logical Multi-Tenant Isolation</span>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 Cols): Live Simulated Interactive Interface Dashboard */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#FFFDF7] via-[#FFF9E6] to-[#FAF8F5] border border-[#FCE29A] shadow-xs">
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F5DC96]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                        <span className="text-xs font-bold text-[#141517]">
                          {currentRole.simulatedInterface.tag}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#8B640A] border border-[#FCE29A] font-bold">
                        {currentRole.metric.value} {currentRole.metric.label.split(" ")[0]}
                      </span>
                    </div>

                    {/* Console Subheader */}
                    <div className="mb-4">
                      <div className="text-xs font-extrabold text-[#141517] mb-1">
                        {currentRole.simulatedInterface.title}
                      </div>
                      <div className="text-[11px] font-mono text-[#7A7D85] bg-white/80 p-2 rounded-xl border border-[#EDE8DF] break-all">
                        {currentRole.simulatedInterface.query}
                      </div>
                    </div>

                    {/* Role-Specific Simulated Content */}
                    {activeRoleIndex === 0 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-2xl bg-white border border-[#F3E1B0] shadow-2xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#141517]">
                              {currentRole.simulatedInterface.candidate?.name}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#047857]">
                              {currentRole.simulatedInterface.candidate?.score}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#5E6168] mb-2.5">
                            {currentRole.simulatedInterface.candidate?.role}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {currentRole.simulatedInterface.candidate?.skills.map((s, i) => (
                              <span key={i} className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#52555C] border border-[#EAE6DF]">
                                {s}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => onNavigate?.("ai-automation")}
                            className="w-full mt-1 py-1.5 rounded-xl bg-[#141517] text-white text-[11px] font-bold hover:bg-[#282A2F] transition-all cursor-pointer"
                          >
                            Add to Candidate Pipeline →
                          </button>
                        </div>
                      </div>
                    )}

                    {activeRoleIndex === 1 && (
                      <div className="space-y-2">
                        {currentRole.simulatedInterface.steps?.map((st, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EDE8DF] text-xs">
                            <div className="flex items-center gap-2">
                              {st.done ? (
                                <Check className="w-3.5 h-3.5 text-[#10B981]" />
                              ) : st.active ? (
                                <Clock className="w-3.5 h-3.5 text-[#D97706] animate-spin" />
                              ) : (
                                <span className="w-3.5 h-3.5 rounded-full border border-[#D4CFC4]" />
                              )}
                              <span className={`font-semibold ${st.active ? "text-[#D97706]" : "text-[#141517]"}`}>
                                {st.name}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#7A7D85] font-mono">{st.time}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeRoleIndex === 2 && (
                      <div className="space-y-2.5">
                        {currentRole.simulatedInterface.scorecards?.map((sc, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white border border-[#EDE8DF]">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-semibold text-[#141517]">{sc.criteria}</span>
                              <span className="font-bold text-[#D97706]">{sc.rating} / {sc.max}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#FAF8F5] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#F6C445] to-[#D97706] rounded-full"
                                style={{ width: `${(sc.rating / sc.max) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeRoleIndex === 3 && (
                      <div className="space-y-2">
                        {currentRole.simulatedInterface.workspaces?.map((ws, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EDE8DF] text-xs">
                            <div>
                              <div className="font-bold text-[#141517]">{ws.name}</div>
                              <div className="text-[10px] text-[#7A7D85]">{ws.pipelines}</div>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#047857]">
                              SLA: {ws.sla}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeRoleIndex === 4 && (
                      <div className="space-y-2">
                        {currentRole.simulatedInterface.auditLogs?.map((log, i) => (
                          <div key={i} className="p-2 rounded-xl bg-white border border-[#EDE8DF] text-[11px] font-mono">
                            <span className="text-[#8B640A] font-bold">[{log.time}] </span>
                            <span className="text-[#52555C]">{log.action}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Telemetry Status Footer */}
                    <div className="mt-4 pt-3 border-t border-[#F5DC96] flex items-center justify-between text-[11px] text-[#8B640A] font-semibold">
                      <span>{currentRole.simulatedInterface.status}</span>
                      <span className="text-[#141517] font-bold">{currentRole.metric.value}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 3: DIFFERENT ROLES. ONE CONNECTED EXPERIENCE.                  */}
        {/* ========================================================================= */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <TextAutoAlign direction="down" delay={0.04} distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FCE29A] text-[#8B640A] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <Workflow className="w-3 h-3 text-[#D97706]" />
                <span>UNIFIED ARCHITECTURE</span>
              </div>
            </TextAutoAlign>

            <TextAutoAlign direction="up" delay={0.08} distance={24}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-[#141517] tracking-tight leading-[1.15] mb-4">
                Different Roles.{" "}
                <span className="text-[#D97706] bg-gradient-to-r from-[#D97706] via-[#E8890C] to-[#F59E0B] bg-clip-text text-transparent">
                  One Connected Experience.
                </span>
              </h2>
            </TextAutoAlign>

            <TextAutoAlign direction="up" delay={0.12} distance={20}>
              <p className="text-sm sm:text-base lg:text-lg text-[#52555C] leading-relaxed">
                Youkt brings every participant in the recruitment lifecycle together. Recruiters discover talent, candidates track opportunities, hiring managers evaluate skills, and enterprises oversee operations—all within one connected ecosystem.
              </p>
            </TextAutoAlign>
          </div>

          {/* 4 Ecosystem Highlights Grid with Auto-Aligning Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemHighlights.map((hl, hlIdx) => {
              const Icon = hl.icon;
              return (
                <ScrollPlacingItem
                  key={hl.id}
                  delay={hlIdx * 0.08}
                  yOffset={28}
                  className="h-full"
                >
                  <div className="p-6 rounded-3xl bg-white border border-[#EAE6DF] shadow-xs hover:border-[#F6C445] transition-all hover:-translate-y-1 group h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] border border-[#FCE29A] flex items-center justify-center text-[#8B640A] mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-[#8B640A]" />
                      </div>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A7D85] mb-1">
                        {hl.tag}
                      </div>

                      <h3 className="text-lg font-bold text-[#141517] mb-2">
                        {hl.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                </ScrollPlacingItem>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SECTION 4: FINAL CTA: "Find Your Place in the Future of Hiring."       */}
        {/* ========================================================================= */}
        <section className="mb-8">
          <ScrollPlacingItem delay={0.1} yOffset={32}>
            <div className="relative rounded-3xl sm:rounded-[36px] lg:rounded-[40px] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#FFFDF7] via-[#FFF9E6] to-[#FDF0BE] border-[1.5px] border-[#FBD982]/85 shadow-[0_24px_56px_-16px_rgba(20,21,23,0.08),0_4px_16px_rgba(20,21,23,0.03),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden text-center max-w-5xl mx-auto">
              {/* Ambient warm glow effects */}
              <div className="absolute -top-24 -right-16 w-96 h-96 bg-[#F6C445]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-16 w-88 h-88 bg-white/80 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                {/* Badge with Auto-Align */}
                <TextAutoAlign direction="down" delay={0.04} distance={18}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FCE29A] text-[#8B640A] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.9)] animate-pulse" />
                    <span>START YOUR JOURNEY TODAY</span>
                  </div>
                </TextAutoAlign>

                {/* Main Heading with Auto-Align */}
                <TextAutoAlign direction="up" delay={0.08} distance={24}>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#141517] tracking-tight leading-[1.14] mb-4">
                    Find Your Place in the{" "}
                    <span className="text-[#D97706] bg-gradient-to-r from-[#D97706] via-[#E8890C] to-[#F59E0B] bg-clip-text text-transparent">
                      Future of Hiring.
                    </span>
                  </h2>
                </TextAutoAlign>

                {/* Description with Auto-Align */}
                <TextAutoAlign direction="up" delay={0.12} distance={20}>
                  <p className="text-sm sm:text-base lg:text-lg text-[#52555C] leading-relaxed mb-8 max-w-2xl mx-auto">
                    Discover how Youkt helps your team simplify recruitment, unlock talent intelligence, and build a smarter hiring experience.
                  </p>
                </TextAutoAlign>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                  <button
                    onClick={() => onNavigate?.("resources")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#141517] hover:bg-[#282A2F] shadow-[0_4px_16px_rgba(20,21,23,0.18)] hover:shadow-[0_6px_22px_rgba(246,196,69,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <span>Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 text-[#F6C445] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onNavigate?.("platform")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#141517] bg-white/95 hover:bg-white border border-[#EAE6DF] hover:border-[#D8D2C5] shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Explore the Platform</span>
                  </button>
                </div>

                {/* Compact Trust Indicators Row */}
                <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 sm:gap-x-6 text-[10.5px] sm:text-xs text-[#6B6D74]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
                    <span>No credit card required</span>
                  </div>
                  <span className="hidden sm:inline text-[#D4CFC4]">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
                    <span>SOC2 Type II & GDPR Compliant</span>
                  </div>
                  <span className="hidden sm:inline text-[#D4CFC4]">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
                    <span>100% Logical Tenant Isolation</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollPlacingItem>
        </section>

      </div>
    </div>
  );
}
