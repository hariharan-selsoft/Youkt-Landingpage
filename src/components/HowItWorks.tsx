"use client";

import React, { useRef, useState, useEffect, useCallback, useId } from "react";
import {
  Users,
  Briefcase,
  GitBranch,
  Code2,
  Calendar,
  FileCheck2,
  UserCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface HowItWorksProps {
  highlighted?: boolean;
  onNavigate?: (sectionId: string) => void;
}

interface WorkflowStage {
  name: string;
  step: string;
  tagline: string;
  blurb: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  renderSketch?: () => React.ReactNode;
}

function StageArtwork({ stage }: { stage: WorkflowStage }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (stage.image && !imgFailed) {
    return (
      <div className="relative w-full h-[170px] flex items-end justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(stage.image)}
          alt={stage.name}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain object-bottom select-none pointer-events-none"
        />
      </div>
    );
  }

  if (stage.renderSketch) {
    return (
      <div className="relative w-full h-[170px] transition-transform duration-500 ease-out group-hover:-translate-y-2">
        {stage.renderSketch()}
      </div>
    );
  }

  return null;
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: "01",
    name: "Manage Clients & Candidates",
    tagline: "Keep your recruiting data organized.",
    blurb:
      "Manage client accounts, candidate profiles, contacts, resumes, notes, and follow-ups in one place.",
    badge: "99.8% Clean Deduplication",
    icon: Users,
    image: "/how it works/Manage Clients & Candidates.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Left: Client Account Card */}
        <rect x="20" y="28" width="128" height="114" rx="10" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
        <rect x="20" y="28" width="128" height="26" rx="10" fill="#FFF9E6" stroke="#141517" strokeWidth="1.8" />
        <rect x="30" y="35" width="13" height="13" rx="3" fill="#F6C445" stroke="#8B640A" strokeWidth="1.2" />
        <line x1="34" y1="39" x2="34" y2="44" stroke="#141517" strokeWidth="1" />
        <line x1="39" y1="39" x2="39" y2="44" stroke="#141517" strokeWidth="1" />
        <text x="48" y="45" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Client: Acme Corp</text>
        <circle cx="138" cy="41" r="3" fill="#22C55E" />
        <line x1="32" y1="66" x2="114" y2="66" stroke="#141517" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="32" y1="76" x2="94" y2="76" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="32" y="90" width="68" height="16" rx="8" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
        <text x="40" y="101" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="600">6 ACTIVE JOBS</text>
        <rect x="32" y="112" width="104" height="18" rx="6" fill="#FFF9E6" stroke="#C98908" strokeWidth="1" />
        <text x="38" y="124" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold">REP: SARAH CHEN</text>

        {/* Sync Bridge */}
        <path d="M148 76 C 160 66, 164 66, 172 76" stroke="#C98908" strokeWidth="1.8" strokeDasharray="3 3" />
        <circle cx="160" cy="71" r="9" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1.4" />
        <path d="M156 71 L 159 74 L 165 68" stroke="#8B640A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Right: Candidate Talent Dossier */}
        <rect x="172" y="20" width="128" height="122" rx="10" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
        <rect x="172" y="20" width="128" height="26" rx="10" fill="#FAF8F5" stroke="#141517" strokeWidth="1.8" />
        <circle cx="188" cy="33" r="7" fill="#F6C445" stroke="#8B640A" strokeWidth="1.2" />
        <text x="201" y="37" fill="#141517" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Elena Vance</text>
        <rect x="256" y="28" width="36" height="10" rx="5" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="0.8" />
        <text x="261" y="35.5" fill="#15803D" fontSize="6" fontFamily="monospace" fontWeight="bold">DEDUPED</text>
        <line x1="184" y1="58" x2="284" y2="58" stroke="#141517" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="184" y1="68" x2="262" y2="68" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="184" y="80" width="40" height="14" rx="4" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1" />
        <text x="189" y="90" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold">REACT</text>
        <rect x="228" y="80" width="38" height="14" rx="4" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1" />
        <text x="233" y="90" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold">GOLANG</text>
        <rect x="184" y="104" width="104" height="24" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
        <circle cx="196" cy="116" r="4" fill="#F6C445" />
        <text x="206" y="119" fill="#141517" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Talent Match: 99.8%</text>
      </svg>
    ),
  },
  {
    step: "02",
    name: "Create & Approve Jobs",
    tagline: "Turn hiring requirements into active jobs.",
    blurb:
      "Create job orders, use templates, and get manager approval before recruiters begin sourcing.",
    badge: "VP Sign-off Enforced",
    icon: Briefcase,
    image: "/how it works/Create & Approve Jobs.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Requisition Document */}
        <rect x="36" y="20" width="188" height="128" rx="10" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
        <rect x="50" y="32" width="76" height="11" rx="5.5" fill="#F6C445" />
        <text x="56" y="40" fill="#141517" fontSize="6.5" fontFamily="monospace" fontWeight="bold">REQUISITION #2084</text>
        <rect x="132" y="32" width="56" height="11" rx="5.5" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1" />
        <text x="137" y="40" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">ENGINEERING</text>
        <line x1="50" y1="54" x2="204" y2="54" stroke="#141517" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="64" x2="168" y2="64" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" />

        {/* Manager Sign-Off Checklist */}
        <rect x="50" y="76" width="14" height="14" rx="4" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" />
        <path d="M54 83L57 86L62 80" stroke="#8B640A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="70" y="86" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Hiring Manager Sign-Off</text>

        <rect x="50" y="96" width="14" height="14" rx="4" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" />
        <path d="M54 103L57 106L62 100" stroke="#8B640A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="70" y="106" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Headcount Budget Approved</text>

        <rect x="50" y="116" width="14" height="14" rx="4" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" />
        <path d="M54 123L57 126L62 120" stroke="#8B640A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="70" y="126" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">VP Sign-off Finalized</text>

        {/* Official Wax Approval Stamp */}
        <circle cx="256" cy="72" r="32" fill="#FFF9E6" stroke="#C98908" strokeWidth="2.2" strokeDasharray="3 3" />
        <circle cx="256" cy="72" r="26" fill="#F6C445" fillOpacity="0.3" stroke="#8B640A" strokeWidth="1.8" />
        <circle cx="256" cy="72" r="21" stroke="#8B640A" strokeWidth="1" strokeDasharray="2 2" />
        <text x="256" y="70" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VP APPROVED</text>
        <text x="256" y="79" fill="#C98908" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">★ SIGNED ★</text>

        {/* Fountain Signature Pen */}
        <g transform="translate(202, 102) rotate(-35)">
          <rect x="0" y="0" width="8" height="44" rx="3" fill="#141517" stroke="#141517" strokeWidth="1" />
          <polygon points="0,44 8,44 4,52" fill="#F6C445" stroke="#141517" strokeWidth="1" />
          <line x1="4" y1="48" x2="4" y2="52" stroke="#141517" strokeWidth="1.2" />
          <rect x="0" y="4" width="8" height="4" fill="#F6C445" />
        </g>
      </svg>
    ),
  },
  {
    step: "03",
    name: "Build Your Candidate Pipeline",
    tagline: "Move candidates through every stage.",
    blurb:
      "Track candidates from screening to client submission with customizable pipelines and clear progress.",
    badge: "Collision-Free Funnel",
    icon: GitBranch,
    image: "/how it works/Build Your Candidate Pipeline.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Kanban Column 1: Sourced */}
        <g transform="translate(18, 22)">
          <rect x="0" y="0" width="76" height="124" rx="8" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
          <rect x="8" y="8" width="60" height="15" rx="4" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1" />
          <text x="12" y="19" fill="#141517" fontSize="7" fontFamily="monospace" fontWeight="bold">SOURCED (14)</text>
          <rect x="8" y="30" width="60" height="38" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
          <circle cx="20" cy="43" r="5" fill="#EAE6DF" />
          <line x1="30" y1="41" x2="60" y2="41" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="47" x2="52" y2="47" stroke="#8E929E" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="8" y="74" width="60" height="38" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
          <circle cx="20" cy="87" r="5" fill="#EAE6DF" />
          <line x1="30" y1="85" x2="56" y2="85" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="91" x2="48" y2="91" stroke="#8E929E" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* Transition Arrow 1 */}
        <path d="M100 85 L 114 85 M 114 85 L 109 81 M 114 85 L 109 89" stroke="#C98908" strokeWidth="2" strokeLinecap="round" />

        {/* Kanban Column 2: Tech Assessment (Active Highlight) */}
        <g transform="translate(122, 12)">
          <rect x="0" y="0" width="82" height="138" rx="10" fill="#FFFDF7" stroke="#8B640A" strokeWidth="2" />
          <rect x="8" y="8" width="66" height="16" rx="5" fill="#FFF9E6" stroke="#C98908" strokeWidth="1.2" />
          <text x="13" y="19" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold">ASSESS (5) ★</text>
          <rect x="8" y="32" width="66" height="52" rx="8" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1.8" />
          <circle cx="22" cy="46" r="6" fill="#F6C445" stroke="#8B640A" strokeWidth="1" />
          <line x1="34" y1="44" x2="66" y2="44" stroke="#141517" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="51" x2="58" y2="51" stroke="#8B640A" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="14" y="62" width="54" height="13" rx="6.5" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="0.8" />
          <text x="18" y="71" fill="#15803D" fontSize="6.5" fontFamily="monospace" fontWeight="bold">94% EVAL SCORE</text>
          <rect x="8" y="90" width="66" height="38" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
          <circle cx="20" cy="103" r="5" fill="#F6C445" />
          <line x1="30" y1="101" x2="60" y2="101" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="107" x2="52" y2="107" stroke="#8B640A" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* Transition Arrow 2 */}
        <path d="M210 85 L 224 85 M 224 85 L 219 81 M 224 85 L 219 89" stroke="#C98908" strokeWidth="2" strokeLinecap="round" />

        {/* Kanban Column 3: Client Submission */}
        <g transform="translate(230, 22)">
          <rect x="0" y="0" width="76" height="124" rx="8" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
          <rect x="8" y="8" width="60" height="15" rx="4" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1" />
          <text x="10" y="19" fill="#141517" fontSize="7" fontFamily="monospace" fontWeight="bold">SUBMITTED (2)</text>
          <rect x="8" y="30" width="60" height="44" rx="6" fill="#FAF8F5" stroke="#8B640A" strokeWidth="1.4" />
          <circle cx="20" cy="45" r="5" fill="#F6C445" />
          <line x1="30" y1="43" x2="58" y2="43" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M46 60 L 56 50 M 56 50 H 48 M 56 50 V 58" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    step: "04",
    name: "Screen & Assess Candidates",
    tagline: "Evaluate skills with confidence.",
    blurb:
      "Conduct manual screening, aptitude tests, and coding assessments to understand candidate capabilities.",
    badge: "Judge0 Code Engine",
    icon: Code2,
    image: "/how it works/Screen & Assess Candidates.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Terminal Sandbox Window */}
        <rect x="22" y="18" width="194" height="132" rx="10" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
        <path d="M22 28C22 22.4772 26.4772 18 32 18H206C211.523 18 216 22.4772 216 28V32H22V28Z" fill="#FFF9E6" stroke="#141517" strokeWidth="1.8" />
        <circle cx="34" cy="25" r="3" fill="#EAE6DF" stroke="#141517" strokeWidth="1" />
        <circle cx="44" cy="25" r="3" fill="#EAE6DF" stroke="#141517" strokeWidth="1" />
        <circle cx="54" cy="25" r="3" fill="#F6C445" stroke="#8B640A" strokeWidth="1" />
        <text x="80" y="28" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold">Judge0 Code Sandbox</text>

        {/* Code Editor Content */}
        <text x="34" y="50" fill="#8B640A" fontSize="10" fontFamily="monospace" fontWeight="bold">def</text>
        <text x="58" y="50" fill="#141517" fontSize="10" fontFamily="monospace" fontWeight="bold">solve_binary_tree(root):</text>
        <line x1="46" y1="62" x2="160" y2="62" stroke="#141517" strokeWidth="2" strokeLinecap="round" />
        <line x1="58" y1="72" x2="144" y2="72" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="46" y1="82" x2="174" y2="82" stroke="#C98908" strokeWidth="1.8" strokeLinecap="round" />

        {/* Test Suite Results Pane */}
        <rect x="32" y="94" width="174" height="46" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
        <circle cx="44" cy="107" r="4" fill="#22C55E" />
        <path d="M42 107 L 43.5 108.5 L 46.5 105.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        <text x="54" y="110" fill="#141517" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Test Case 1: Pass (0.4ms)</text>

        <circle cx="44" cy="125" r="4" fill="#22C55E" />
        <path d="M42 125 L 43.5 126.5 L 46.5 123.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        <text x="54" y="128" fill="#141517" fontSize="7.5" fontFamily="monospace" fontWeight="bold">Test Case 2: Memory O(1) Pass</text>

        {/* Scorecard Radial Meter Panel */}
        <rect x="226" y="20" width="76" height="126" rx="10" fill="#FFFDF7" stroke="#8B640A" strokeWidth="1.8" />
        <text x="233" y="36" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="bold">SCORECARD</text>
        <circle cx="264" cy="64" r="19" fill="#FFFFFF" stroke="#EAE6DF" strokeWidth="3" />
        <circle cx="264" cy="64" r="19" fill="none" stroke="#F6C445" strokeWidth="3" strokeDasharray="98 120" strokeLinecap="round" transform="rotate(-90 264 64)" />
        <text x="264" y="67" fill="#141517" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">98%</text>
        <text x="264" y="94" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VERIFIED PASS</text>
        <rect x="233" y="104" width="62" height="14" rx="4" fill="#FAF8F5" stroke="#C98908" strokeWidth="1" />
        <text x="237" y="113.5" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">40+ LANGUAGES</text>
        <rect x="233" y="122" width="62" height="16" rx="5" fill="#F6C445" />
        <text x="237" y="133" fill="#141517" fontSize="7" fontFamily="sans-serif" fontWeight="bold">TOP 2% RANK</text>
      </svg>
    ),
  },
  {
    step: "05",
    name: "Schedule & Collaborate",
    tagline: "Keep every interview on track.",
    blurb:
      "Coordinate interviews, prevent scheduling conflicts, collect feedback, and manage candidate progress.",
    badge: "Conflict-Free Sync",
    icon: Calendar,
    image: "/how it works/Schedule & Collaborate.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Main Live Interview Window Frame */}
        <rect x="18" y="14" width="284" height="140" rx="12" fill="#FFFFFF" stroke="#141517" strokeWidth="2" />
        
        {/* Interview App Bar */}
        <path d="M18 26C18 19.3726 23.3726 14 30 14H290C296.627 14 302 19.3726 302 26V32H18V26Z" fill="#FFF9E6" stroke="#141517" strokeWidth="2" />
        <circle cx="32" cy="23" r="3.5" fill="#EF4444" />
        <circle cx="43" cy="23" r="3.5" fill="#F6C445" />
        <circle cx="54" cy="23" r="3.5" fill="#22C55E" />
        <text x="70" y="26" fill="#141517" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Technical Interview: Senior Architect Round</text>
        
        {/* Recording Indicator */}
        <rect x="242" y="18" width="52" height="11" rx="5.5" fill="#141517" />
        <circle cx="250" cy="23.5" r="2.5" fill="#EF4444" />
        <text x="256" y="26.5" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">REC 34:12</text>

        {/* Left Video Stream: Interviewer with Headset */}
        <rect x="28" y="40" width="126" height="76" rx="8" fill="#FAF8F5" stroke="#141517" strokeWidth="1.6" />
        <circle cx="91" cy="65" r="14" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1.8" />
        {/* Headset Arc & Pads */}
        <path d="M75 65 C 75 52, 107 52, 107 65" stroke="#141517" strokeWidth="2.2" fill="none" />
        <rect x="73" y="61" width="4" height="8" rx="2" fill="#141517" />
        <rect x="105" y="61" width="4" height="8" rx="2" fill="#141517" />
        <path d="M105 67 C 103 73, 97 75, 91 75" stroke="#141517" strokeWidth="1.4" fill="none" />
        <path d="M71 98 C 71 85, 111 85, 111 98" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.8" />
        <rect x="34" y="96" width="62" height="14" rx="4" fill="#141517" fillOpacity="0.85" />
        <text x="40" y="106" fill="#FFFFFF" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Alex (Lead VP)</text>
        <circle cx="140" cy="50" r="5" fill="#22C55E" fillOpacity="0.25" />
        <circle cx="140" cy="50" r="2.5" fill="#22C55E" />

        {/* Right Video Stream: Candidate with Speech Bubble */}
        <rect x="166" y="40" width="126" height="76" rx="8" fill="#FFFDF7" stroke="#8B640A" strokeWidth="1.8" />
        <circle cx="229" cy="65" r="14" fill="#FFFFFF" stroke="#C98908" strokeWidth="1.8" />
        <path d="M219 59 C 219 51, 239 51, 239 59" fill="#F6C445" />
        <path d="M225 70 Q 229 74 233 70" stroke="#141517" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M209 98 C 209 85, 249 85, 249 98" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.8" />
        <rect x="172" y="96" width="70" height="14" rx="4" fill="#141517" fillOpacity="0.85" />
        <text x="178" y="106" fill="#FFFFFF" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Rachel (Candidate)</text>
        {/* Speech Bubble */}
        <path d="M256 48 H 280 C 283 48, 285 50, 285 53 V 63 C 285 66, 283 68, 280 68 H 264 L 258 74 V 68 H 256 C 253 68, 251 66, 251 63 V 53 C 251 50, 253 48, 256 48 Z" fill="#F6C445" stroke="#8B640A" strokeWidth="1" />
        <text x="257" y="60" fill="#141517" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Explaining...</text>

        {/* Real-time Collaborative Feedback Bar */}
        <rect x="28" y="122" width="264" height="24" rx="6" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" />
        <text x="38" y="137" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="bold">FEEDBACK: ★★★★★ 5.0 (HIRE)</text>
        <circle cx="204" cy="134" r="4" fill="#22C55E" />
        <text x="212" y="137" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Conflict-Free Calendar Sync</text>
      </svg>
    ),
  },
  {
    step: "06",
    name: "Submit & Manage Offers",
    tagline: "Move the right candidates toward placement.",
    blurb:
      "Review submissions, manage client feedback, track offer approvals, and finalize placements.",
    badge: "Salary Band Governed",
    icon: FileCheck2,
    image: "/how it works/Submit & Manage Offers.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Official Offer Letter */}
        <rect x="34" y="16" width="252" height="138" rx="12" fill="#FFFFFF" stroke="#141517" strokeWidth="2" />
        <rect x="44" y="26" width="232" height="118" rx="8" fill="#FFFDF9" stroke="#C98908" strokeWidth="1.2" strokeDasharray="4 2" />

        {/* Offer Header Ribbon */}
        <rect x="58" y="36" width="104" height="12" rx="4" fill="#F6C445" />
        <text x="64" y="45" fill="#141517" fontSize="7" fontFamily="monospace" fontWeight="bold">OFFICIAL OFFER LETTER</text>
        <rect x="170" y="36" width="48" height="12" rx="6" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="0.8" />
        <text x="175" y="44.5" fill="#15803D" fontSize="6.5" fontFamily="monospace" fontWeight="bold">APPROVED</text>

        <line x1="58" y1="58" x2="214" y2="58" stroke="#141517" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="58" y1="68" x2="182" y2="68" stroke="#8B640A" strokeWidth="1.8" strokeLinecap="round" />

        {/* Salary & Equity Grid */}
        <rect x="58" y="78" width="148" height="26" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
        <text x="66" y="89" fill="#8E929E" fontSize="6" fontFamily="monospace">BASE SALARY</text>
        <text x="66" y="99" fill="#141517" fontSize="8" fontFamily="monospace" fontWeight="bold">$165,000 / YR</text>
        <line x1="134" y1="82" x2="134" y2="100" stroke="#EAE6DF" strokeWidth="1" />
        <text x="142" y="89" fill="#8E929E" fontSize="6" fontFamily="monospace">EQUITY GRANT</text>
        <text x="142" y="99" fill="#8B640A" fontSize="8" fontFamily="monospace" fontWeight="bold">12,500 RSUs</text>

        {/* Signature Line */}
        <line x1="58" y1="124" x2="134" y2="124" stroke="#141517" strokeWidth="1.5" strokeLinecap="round" />
        <text x="58" y="133" fill="#8E929E" fontSize="6" fontFamily="sans-serif">Candidate Signed & Accepted</text>
        <path d="M62 120 C 70 114, 80 126, 90 118 C 96 114, 106 122, 116 118" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />

        {/* Placement Gold Wax Seal */}
        <g transform="translate(234, 96)">
          <path d="M-6 16 L -12 36 L 0 30 L 6 36 L 0 16 Z" fill="#8B640A" stroke="#141517" strokeWidth="1.2" />
          <path d="M6 16 L 12 36 L 0 30 L -6 36 L 0 16 Z" fill="#C98908" stroke="#141517" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="23" fill="#F6C445" stroke="#8B640A" strokeWidth="2.2" />
          <circle cx="0" cy="0" r="18" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" strokeDasharray="3 2" />
          <text x="0" y="-3" fill="#8B640A" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PLACED</text>
          <text x="0" y="7" fill="#141517" fontSize="9" textAnchor="middle">★</text>
        </g>
      </svg>
    ),
  },
  {
    step: "07",
    name: "Onboard New Hires",
    tagline: "Make joining simple and organized.",
    blurb:
      "Manage onboarding checklists, required documents, assigned tasks, and approvals in one workspace.",
    badge: "Automated Day-1 Checklist",
    icon: UserCheck,
    image: "/how it works/Onboard New Hires.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Day-1 Checklist Clipboard */}
        <g transform="translate(30, 16)">
          <rect x="0" y="8" width="156" height="130" rx="10" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
          <rect x="44" y="0" width="68" height="16" rx="4" fill="#FAF8F5" stroke="#141517" strokeWidth="1.8" />
          <circle cx="78" cy="8" r="3.5" fill="#141517" />
          
          <text x="18" y="32" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DAY-1 READINESS CHECKLIST</text>

          <circle cx="24" cy="48" r="6" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="1.2" />
          <path d="M21.5 48 L 23.5 50 L 27 46" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
          <text x="36" y="51" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Laptop & Hardware Shipped</text>

          <circle cx="24" cy="68" r="6" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="1.2" />
          <path d="M21.5 68 L 23.5 70 L 27 66" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
          <text x="36" y="71" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">I-9 & Tax Verification</text>

          <circle cx="24" cy="88" r="6" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="1.2" />
          <path d="M21.5 88 L 23.5 90 L 27 86" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
          <text x="36" y="91" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Google SSO & Slack Provisioned</text>

          <circle cx="24" cy="108" r="6" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="1.2" />
          <path d="M21.5 108 L 23.5 110 L 27 106" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
          <text x="36" y="111" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Onboarding Buddy Assigned</text>

          <rect x="18" y="120" width="120" height="12" rx="6" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="0.8" />
          <text x="78" y="128.5" fill="#15803D" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">100% READY FOR DAY 1</text>
        </g>

        {/* Lanyard & Company Security Badge */}
        <g transform="translate(208, 12)">
          <path d="M38 -10 L 40 22 M 52 -10 L 46 22" stroke="#8B640A" strokeWidth="3" strokeLinecap="round" />
          <rect x="36" y="20" width="16" height="8" rx="3" fill="#141517" />
          <circle cx="44" cy="24" r="2" fill="#F6C445" />

          <rect x="4" y="28" width="82" height="118" rx="10" fill="#FFFDF7" stroke="#141517" strokeWidth="2" />
          <rect x="4" y="28" width="82" height="24" rx="10" fill="#F6C445" stroke="#141517" strokeWidth="2" />
          <text x="45" y="42" fill="#141517" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">YOUKT CORP</text>
          <text x="45" y="49" fill="#8B640A" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">SECURITY ACCESS</text>

          <rect x="26" y="58" width="38" height="38" rx="6" fill="#FAF8F5" stroke="#8B640A" strokeWidth="1.4" />
          <circle cx="45" cy="72" r="9" fill="#F6C445" stroke="#141517" strokeWidth="1.2" />
          <path d="M34 93 C 34 86, 56 86, 56 93" fill="#FFF9E6" stroke="#141517" strokeWidth="1.2" />

          <text x="45" y="106" fill="#141517" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Marcus Reed</text>
          <text x="45" y="113" fill="#8B640A" fontSize="6" fontFamily="monospace" textAnchor="middle">Staff Engineer</text>
          
          <g transform="translate(18, 122)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#141517" strokeWidth="1.5" />
            <line x1="5" y1="0" x2="5" y2="12" stroke="#141517" strokeWidth="1" />
            <line x1="10" y1="0" x2="10" y2="12" stroke="#141517" strokeWidth="2.5" />
            <line x1="16" y1="0" x2="16" y2="12" stroke="#141517" strokeWidth="1" />
            <line x1="21" y1="0" x2="21" y2="12" stroke="#141517" strokeWidth="2" />
            <line x1="28" y1="0" x2="28" y2="12" stroke="#141517" strokeWidth="1.5" />
            <line x1="34" y1="0" x2="34" y2="12" stroke="#141517" strokeWidth="2" />
            <line x1="41" y1="0" x2="41" y2="12" stroke="#141517" strokeWidth="1" />
            <line x1="47" y1="0" x2="47" y2="12" stroke="#141517" strokeWidth="2" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    step: "08",
    name: "AI-Powered Recruiting",
    tagline: "Spend less time on repetitive work.",
    blurb:
      "Use AI to parse resumes, draft job descriptions, and find workspace information—with your approval before changes.",
    badge: "Resume Parser in 1.2s",
    icon: Sparkles,
    image: "/how it works/AI-Powered Recruiting.png",
    renderSketch: () => (
      <svg
        viewBox="0 0 320 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-hidden="true"
      >
        <ellipse cx="160" cy="140" rx="120" ry="24" fill="#F6C445" fillOpacity="0.18" />
        {/* Left: Raw Resume Input */}
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="110" height="130" rx="8" fill="#FFFFFF" stroke="#141517" strokeWidth="1.8" />
          <circle cx="20" cy="22" r="8" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1.4" />
          <line x1="36" y1="18" x2="94" y2="18" stroke="#141517" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="36" y1="26" x2="80" y2="26" stroke="#8E929E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="44" x2="94" y2="44" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="16" y1="54" x2="86" y2="54" stroke="#8B640A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="64" x2="92" y2="64" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="16" y1="74" x2="74" y2="74" stroke="#8E929E" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="90" x2="94" y2="90" stroke="#141517" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="16" y1="100" x2="82" y2="100" stroke="#8B640A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="110" x2="88" y2="110" stroke="#8E929E" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Center: Laser Neural Scanner */}
        <g transform="translate(132, 18)">
          <rect x="14" y="0" width="4" height="134" rx="2" fill="#F6C445" />
          <line x1="16" y1="0" x2="16" y2="134" stroke="#8B640A" strokeWidth="1.2" strokeDasharray="4 2" />
          <circle cx="16" cy="40" r="12" fill="#F6C445" fillOpacity="0.25" />
          <circle cx="16" cy="40" r="4" fill="#8B640A" />
          <circle cx="16" cy="94" r="12" fill="#F6C445" fillOpacity="0.25" />
          <circle cx="16" cy="94" r="4" fill="#8B640A" />
          <path d="M2 -2 L 5 6 L 13 9 L 5 12 L 2 20 L -1 12 L -9 9 L -1 6 Z" fill="#F6C445" stroke="#8B640A" strokeWidth="1" />
          <path d="M34 94 L 36 98 L 40 100 L 36 102 L 34 106 L 32 102 L 28 100 L 32 98 Z" fill="#F6C445" stroke="#8B640A" strokeWidth="1" />
        </g>

        {/* Right: Extracted Structured Data & Human Approval */}
        <g transform="translate(174, 18)">
          <rect x="0" y="0" width="128" height="132" rx="10" fill="#FFFDF7" stroke="#8B640A" strokeWidth="2" />
          <rect x="8" y="8" width="112" height="16" rx="5" fill="#FFF9E6" stroke="#C98908" strokeWidth="1" />
          <text x="14" y="19" fill="#8B640A" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AI RESUME PARSER (1.2s)</text>

          <text x="12" y="38" fill="#141517" fontSize="7" fontFamily="monospace" fontWeight="bold">EXTRACTED SKILLS</text>
          <rect x="10" y="44" width="36" height="14" rx="4" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1" />
          <text x="15" y="54" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">REACT</text>
          <rect x="50" y="44" width="40" height="14" rx="4" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1" />
          <text x="55" y="54" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">PYTHON</text>
          <rect x="94" y="44" width="26" height="14" rx="4" fill="#FFFFFF" stroke="#8B640A" strokeWidth="1" />
          <text x="98" y="54" fill="#8B640A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">AWS</text>

          <rect x="8" y="66" width="112" height="32" rx="6" fill="#FAF8F5" stroke="#EAE6DF" strokeWidth="1.2" />
          <text x="16" y="78" fill="#8E929E" fontSize="6" fontFamily="monospace">ROLE MATCH SCORE</text>
          <text x="16" y="91" fill="#15803D" fontSize="10.5" fontFamily="monospace" fontWeight="bold">99.2% FIT</text>
          <circle cx="104" cy="82" r="9" fill="#22C55E" fillOpacity="0.2" />
          <path d="M100 82 L 103 85 L 109 79" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="8" y="104" width="112" height="20" rx="6" fill="#FFF9E6" stroke="#8B640A" strokeWidth="1" />
          <circle cx="20" cy="114" r="4" fill="#22C55E" />
          <text x="28" y="117" fill="#141517" fontSize="7" fontFamily="sans-serif" fontWeight="bold">Recruiter Sign-Off ✓</text>
        </g>
      </svg>
    ),
  },
];

export default function HowItWorks({
  highlighted = false,
}: HowItWorksProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [activeCard, setActiveCard] = useState(0);
  const id = useId().replace(/:/g, "");

  const getPitch = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 380;
    const cardEl = track.querySelector<HTMLElement>("[data-card-slot]");
    if (!cardEl) return 380;
    const gap = 24; // 1.5rem (gap-6)
    return cardEl.offsetWidth + gap;
  }, []);

  const syncEdge = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setEdge({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft >= max - 4,
    });
    const pitch = getPitch();
    const idx = Math.max(
      0,
      Math.min(
        WORKFLOW_STAGES.length - 1,
        Math.round(track.scrollLeft / pitch)
      )
    );
    setActiveCard(idx);
  }, [getPitch]);

  const handleStep = useCallback(
    (direction: number) => {
      const track = trackRef.current;
      if (!track) return;
      const pitch = getPitch();
      const currentIdx = Math.round(track.scrollLeft / pitch);
      const nextIdx = Math.max(
        0,
        Math.min(WORKFLOW_STAGES.length - 1, currentIdx + direction)
      );
      track.scrollTo({
        left: nextIdx * pitch,
        behavior: "smooth",
      });
    },
    [getPitch]
  );

  // Drag-to-scroll support with mouse
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.style.cursor = "grabbing";
      track.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      track.scrollLeft = startScroll - dx;
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = "grab";
      track.style.removeProperty("user-select");
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleStep(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleStep(-1);
    }
  };

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className={`relative w-full py-16 sm:py-24 border-y border-[#EAE6DF] scroll-mt-20 transition-colors duration-500 overflow-hidden ${
        highlighted ? "bg-[#FFF9E6]" : "bg-[#FAF8F5]"
      }`}
      aria-roledescription="carousel"
      aria-labelledby={`${id}-title`}
    >
      {/* Anchor alias for backwards compatibility */}
      <span id="solutions" className="sr-only" aria-hidden="true" />

      {/* Luminous Blurred Yellow Ambient Shades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,#FDE047_0%,#F6C445_35%,#FFF3C4_65%,transparent_85%)] opacity-85 blur-[95px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-6 sm:left-16 w-[550px] h-[420px] bg-[radial-gradient(circle_at_center,#FDE047_0%,#F6C445_45%,transparent_75%)] opacity-55 blur-[105px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-6 sm:right-16 w-[550px] h-[420px] bg-[radial-gradient(circle_at_center,#FDE047_0%,#F6C445_45%,transparent_75%)] opacity-55 blur-[105px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-[1350px] h-[380px] bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,#FDE047_0%,#F6C445_40%,transparent_80%)] opacity-50 blur-[100px] -z-10"
      />

      {/* ------------------------------------------------------------- */}
      {/* CAROUSEL HEADER: Editorial Title on Left, Round Arrows on Right*/}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-[1600px] 2xl:max-w-[1760px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#8B640A] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
              <span>How It Works</span>
            </div>
            <h2
              id={`${id}-title`}
              className="text-[#141517] tracking-[-0.03em] leading-[1.08] text-3xl sm:text-4xl lg:text-[44px] font-bold"
            >
              <span>A Seamless Workflow From </span>
              <span className="font-editorial-serif text-[#8B640A]">
                Sourcing to Hire.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5E6168] mt-2.5 leading-relaxed">
              Eight interconnected recruitment stages designed to eliminate recruiter
              collisions, enforce sign-offs, and accelerate placements.
            </p>
          </div>

          {/* Round Navigation Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
            <button
              type="button"
              onClick={() => handleStep(-1)}
              disabled={edge.start}
              aria-label="Previous workflow stage"
              aria-controls={`${id}-track`}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                edge.start
                  ? "bg-white/60 border-[#EAE6DF] text-[#8E929E] opacity-40 cursor-not-allowed shadow-none"
                  : "bg-white border-[#EAE6DF] text-[#141517] hover:border-[#8B640A] hover:text-[#8B640A] hover:bg-[#FFF9E6]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleStep(1)}
              disabled={edge.end}
              aria-label="Next workflow stage"
              aria-controls={`${id}-track`}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                edge.end
                  ? "bg-white/60 border-[#EAE6DF] text-[#8E929E] opacity-40 cursor-not-allowed shadow-none"
                  : "bg-white border-[#EAE6DF] text-[#141517] hover:border-[#8B640A] hover:text-[#8B640A] hover:bg-[#FFF9E6]"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* HORIZONTAL CAROUSEL TRACK: Framed with small space on both side */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full">
        {/* Soft edge blend fades with blurred yellow tone */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 bottom-8 w-10 sm:w-16 bg-gradient-to-r from-[#FAF8F5] via-[#FFF9E6]/70 to-transparent z-10 transition-opacity duration-300 ${
            edge.start ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 bottom-8 w-10 sm:w-16 bg-gradient-to-l from-[#FAF8F5] via-[#FFF9E6]/70 to-transparent z-10 transition-opacity duration-300 ${
            edge.end ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          ref={trackRef}
          id={`${id}-track`}
          tabIndex={0}
          role="group"
          aria-label="Recruiting workflow stages: drag or use the arrow buttons to step through cards"
          onKeyDown={onKeyDown}
          onScroll={syncEdge}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-8 pt-3 scrollbar-none cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            scrollPaddingLeft: "clamp(28px, 4vw, 72px)",
            paddingLeft: "clamp(28px, 4vw, 72px)",
            paddingRight: "clamp(28px, 4vw, 72px)",
          }}
        >
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                data-card-slot="true"
                className="flex-none scroll-snap-align-start w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[420px] h-[525px]"
                style={{ scrollSnapAlign: "start" }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${stage.step} of 08: ${stage.name}`}
              >
                {/* 
                  Tall Ivory / Warm Peach Card with Hover Lift
                  The hand-drawn sketch at the bottom rises on hover
                */}
                <div className="group relative w-full h-full rounded-[24px] bg-white border border-[#EAE6DF] hover:border-[#D5D0C7] p-7 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_-10px_rgba(20,21,23,0.07)] hover:shadow-[0_20px_40px_-12px_rgba(20,21,23,0.12)] transition-all duration-300 hover:-translate-y-2">
                  {/* Subtle Card Background Amber Wash */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#FFFDF9] pointer-events-none" />

                  {/* 1. TOP METADATA: Icon & Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <span className="w-10 h-10 rounded-xl bg-[#FFF9E6] border border-[#F2D27A] text-[#8B640A] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#141517] tracking-tight leading-snug">
                      {stage.name}
                    </h3>

                    {/* Subtitle / Tagline */}
                    <p className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#8B640A] mt-2">
                      {stage.tagline}
                    </p>

                    {/* Editorial Blurb */}
                    <p className="text-[14px] text-[#5E6168] leading-relaxed mt-3">
                      {stage.blurb}
                    </p>

                    {/* Guarantee / Feature Badge */}
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#EAE6DF] text-[11.5px] font-mono font-medium text-[#141517]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C98908] shrink-0" />
                      <span>{stage.badge}</span>
                    </div>
                  </div>

                  {/* 2. BOTTOM ARTWORK: Image from /how it works or Hand-drawn architectural artwork */}
                  <div className="relative z-10 mt-auto -mx-7 -mb-7 h-[190px] flex items-end justify-center overflow-hidden border-t border-[#F0ECE4]/70 bg-gradient-to-t from-[#FFFDF7] to-transparent pt-3 px-4">
                    <StageArtwork stage={stage} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Active Accessibility Text */}
        <p className="sr-only" aria-live="polite">
          {WORKFLOW_STAGES[activeCard]
            ? `${WORKFLOW_STAGES[activeCard].name}, step ${WORKFLOW_STAGES[activeCard].step} of 08`
            : ""}
        </p>
      </div>
    </section>
  );
}
