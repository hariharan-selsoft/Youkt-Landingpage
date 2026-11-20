import React from "react";
import {
  Users,
  Briefcase,
  GitBranch,
  Code2,
  Calendar,
  FileCheck2,
  UserCheck,
  BarChart3,
} from "lucide-react";

export interface FeatureItem {
  id: string;
  tempId: number;
  moduleNum: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  footerBadge: string;
  icon: React.ComponentType<{ className?: string }>;
  imgSrc: string;
}

export const YOUKT_FEATURE_LIST: FeatureItem[] = [
  {
    id: "jobs",
    tempId: 0,
    moduleNum: "01",
    title: "Job Orders & Approvals",
    tag: "Requisitions",
    description: "Standardize job creation with modular templates, strict approval governance, and live SLA monitoring.",
    highlights: [
      "Reusable templates with instant cloning",
      "Draft sign-off gate with zero self-approval",
      "Live recruiter workload & placement credit",
    ],
    footerBadge: "VP Sign-off Enforced",
    icon: Briefcase,
    imgSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "pipelines",
    tempId: 1,
    moduleNum: "02",
    title: "Pipelines & Submissions",
    tag: "Funnel Engine",
    description: "Move talent through custom pipeline stages with client submission gates and zero recruiter collisions.",
    highlights: [
      "Custom stage gates tailored per job order",
      "Manager pre-review before client delivery",
      "Real-time client feedback & SLA triggers",
    ],
    footerBadge: "Collision-Free Funnel",
    icon: GitBranch,
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "assessments",
    tempId: 2,
    moduleNum: "03",
    title: "Screening & Tech Tests",
    tag: "Assessment",
    description: "Evaluate skills with standardized screening questions and live Judge0 runtime coding environments.",
    highlights: [
      "40+ runtime language coding sandboxes",
      "Saved role-specific questionnaire banks",
      "Version-locked test snapshots per candidate",
    ],
    footerBadge: "Judge0 Sandboxed Engine",
    icon: Code2,
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "interviews",
    tempId: 3,
    moduleNum: "04",
    title: "Interviews & Scorecards",
    tag: "Evaluation",
    description: "Coordinate conflict-free interview panels and gather calibrated feedback with structured rubric scoring.",
    highlights: [
      "Calendar overlap checks across participants",
      "Role-scoped private evaluator scorecards",
      "Complete reschedule audit log & history",
    ],
    footerBadge: "Calibrated Rubric Scoring",
    icon: Calendar,
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "offers",
    tempId: 4,
    moduleNum: "05",
    title: "Offers & Onboarding",
    tag: "Governance",
    description: "Issue governed offers within salary bands, lock placements safely, and automate compliance onboarding.",
    highlights: [
      "Strict salary band & approval governance",
      "Duplicate-safe candidate placement locking",
      "Automated day-one onboarding checklists",
    ],
    footerBadge: "Strict Band Governance",
    icon: FileCheck2,
    imgSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "portal",
    tempId: 5,
    moduleNum: "06",
    title: "Candidate Careers Portal",
    tag: "Self-Service",
    description: "A single self-service hub for talent to submit applications, complete assessments, and review offers.",
    highlights: [
      "One unified profile linking across jobs",
      "Live application & test progress tracking",
      "Secure mobile-responsive applicant portal",
    ],
    footerBadge: "Zero-Duplicate Sync",
    icon: UserCheck,
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "reports",
    tempId: 6,
    moduleNum: "07",
    title: "Reports & Team Insights",
    tag: "Intelligence",
    description: "Gain executive visibility into team velocity across 6 core recruiting categories with filterable exports.",
    highlights: [
      "Real-time recruiter & team activity metrics",
      "Daily & weekly pipeline velocity breakdowns",
      "Exportable CSV dossiers & audit logs",
    ],
    footerBadge: "Executive-Ready Analytics",
    icon: BarChart3,
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "crm",
    tempId: 7,
    moduleNum: "08",
    title: "Client & Candidate CRM",
    tag: "Core Registry",
    description: "Manage client accounts, contracts, candidate dossiers, and automated expiration alerts without duplicates.",
    highlights: [
      "Instant fuzzy duplicate candidate detection",
      "Client contract & SLA expiration triggers",
      "Role-scoped confidential dossier attachments",
    ],
    footerBadge: "99.8% Clean Deduplication",
    icon: Users,
    imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
];
