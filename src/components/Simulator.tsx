"use client";

import { useState } from "react";
import {
  Play,
  CheckCircle2,
  Terminal,
  Zap,
  RotateCcw,
  Code,
  Shield,
  Database,
  Check,
  Sparkles,
} from "lucide-react";

type Preset = {
  id: string;
  title: string;
  icon: any;
  duration: string;
  tokens: string;
  description: string;
  steps: { name: string; status: "done" | "running" | "ready"; detail: string }[];
  output: string[];
};

export default function Simulator() {
  const presets: Preset[] = [
    {
      id: "natural-talent-search",
      title: "Natural Language Talent Search",
      icon: Code,
      duration: "0.74s",
      tokens: "BM25 Registry",
      description: 'Turn requests into validated searches: "Find senior React engineers available this month."',
      steps: [
        { name: "Natural-Language Query Parsing", status: "done", detail: "Turned natural language request into structured, validated candidate query" },
        { name: "BM25 Dynamic Operation Registry", status: "done", detail: "Discovered talent search capabilities without overwhelming the AI" },
        { name: "Tenant-Aware Authorization", status: "done", detail: "Strict multi-tenant data isolation and safe candidate data access verified" },
        { name: "Candidate Shortlist Prepared", status: "done", detail: "Surfaced verified candidates; awaiting recruiter review" },
      ],
      output: [
        "> Initializing Youkt Recruitment Copilot...",
        '> [NLP-Search] Prompt received: "Find senior React engineers available this month."',
        '> [BM25-Registry] Selected operation: talentPool.query(skills=["React", "TypeScript"], available="<30d")',
        "> [Tenant-Security] Verified tenant-aware authorization & safe candidate data access",
        "> [Pipeline-Match] 8 qualified candidate profiles retrieved with verified assessment scores",
        '✨ Match prepared: "AI that assists. Humans stay in control."',
      ],
    },
    {
      id: "multi-agent-orchestration",
      title: "Multi-Agent AI Orchestration",
      icon: Database,
      duration: "0.85s",
      tokens: "Stateful Temporal",
      description: "Automate complex recruitment workflows with persistent context and reliable execution.",
      steps: [
        { name: "Stateful AI Workflows", status: "done", detail: "Coordinated specialized sourcing, screening, and assessment agents" },
        { name: "Persistent Conversational Threads", status: "done", detail: "Retained complete recruiter context across hiring workflows" },
        { name: "Checkpoint Recovery", status: "done", detail: "Temporal durable workflow state saved with 99.9% delivery reliability" },
        { name: "AI Observability & Telemetry", status: "done", detail: "Sub-second execution trace logs streamed to enterprise dashboard" },
      ],
      output: [
        "> Initializing Multi-Agent Recruitment Orchestration Mesh...",
        "> [Agent-Sourcing] Ingesting candidate profiles from careers portal & CRM talent pools",
        "> [Agent-Assessments] Automated evaluation against standardized job requirements completed",
        "> [Durable-Temporal] Checkpoint saved: stateful execution thread #rec-904",
        "> [AI-Telemetry] Observability trace: 0.85s latency across distributed clusters",
        "✨ Multi-agent workflow synchronized: Candidate dossier ready for hiring manager review",
      ],
    },
    {
      id: "human-in-the-loop",
      title: "Human-in-the-Loop Governance",
      icon: Shield,
      duration: "0.62s",
      tokens: "Approval Gate",
      description: "When an action affects hiring status, candidates, or offer letters, workflow pauses for approval.",
      steps: [
        { name: "AI Suggests Action", status: "done", detail: "The AI prepares the action and drafts offer letter with benchmark compensation" },
        { name: "Recruiter Review", status: "done", detail: "The recruiter reviews candidate profile, scorecard evaluations, and offer letter" },
        { name: "Recruiter Approve", status: "done", detail: "The recruiter approves the action with single-click authorization" },
        { name: "Execute Action", status: "done", detail: "Only then does the action execute: Offer letter dispatched and ATS updated" },
      ],
      output: [
        "> Initializing Human-in-the-Loop Approval Gate...",
        "> [AI-Suggest] Candidate scored in top 5% on Objective Skill Assessment",
        "> [Action-Hold] Action affects candidate hiring status: Workflow paused for Recruiter Approval",
        "> [Recruiter-Review] Lead Recruiter inspected compensation benchmark and approved action",
        "> [Execute] Offer letter generated and dispatched with immutable audit log",
        '✨ Executed: "The AI prepares the action. The recruiter reviews and approves it."',
      ],
    },
  ];

  const [selectedPreset, setSelectedPreset] = useState<Preset>(presets[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(true);

  const handleRun = () => {
    setIsRunning(true);
    setCompleted(false);
    setTimeout(() => {
      setIsRunning(false);
      setCompleted(true);
    }, 900);
  };

  return (
    <section id="simulator" className="py-24 sm:py-32 relative bg-[#FAF8F5]">
      <div id="ai-automation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            Recruitment Copilot & Orchestration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-4 leading-tight">
            Recruitment Intelligence{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              That Works With Your Team
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168]">
            Use natural language to discover talent, understand candidate pipelines, and prepare recruitment actions while keeping recruiters in control.
          </p>
          <div className="mt-3 text-xs font-bold text-[#8B640A] bg-[#FFF9E6] inline-block px-3 py-1 rounded-full border border-[#FCE29A]">
            AI that assists. Humans stay in control.
          </div>
        </div>

        {/* Preset Selector Capsule */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {presets.map((preset) => {
            const Icon = preset.icon;
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#141517] text-white shadow-sm"
                    : "bg-white text-[#5E6168] hover:text-[#141517] border border-[#EAE6DF] hover:border-[#DDD8CE]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#F6C445]" : "text-[#7A7D85]"}`} />
                <span>{preset.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Console Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-4 sm:p-7 border border-[#EAE6DF] shadow-[0_12px_40px_-8px_rgba(20,21,23,0.06)]">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#F0ECE4] gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-base font-bold text-[#141517]">
                  {selectedPreset.title}
                </span>
                <span className="text-[11px] font-bold text-[#8B640A] bg-[#FFF9E6] border border-[#FCE29A] px-2.5 py-0.5 rounded-full">
                  Dial: {selectedPreset.duration}
                </span>
              </div>
              <p className="text-xs text-[#64666D]">
                {selectedPreset.description}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] text-xs font-bold rounded-full shadow-sm transition-all cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-[#141517]" />
                <span>{isRunning ? "Executing..." : "Execute Workflow"}</span>
              </button>
              <button
                onClick={() => setCompleted(true)}
                className="p-2 bg-[#F7F5F0] hover:bg-[#EAE6DF] text-[#141517] rounded-full border border-[#EAE6DF] transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Step Pipeline List (Left) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A7D85]">
                  AI Suggests → Review → Approve → Execute
                </span>
              </div>
              {selectedPreset.steps.map((st, i) => (
                <div
                  key={st.name}
                  className="p-3.5 rounded-2xl bg-[#F7F5F0] border border-[#EAE6DF] flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#141517] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F6C445]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#141517]">
                      {i + 1}. {st.name}
                    </div>
                    <div className="text-[11px] text-[#6B6D74] mt-0.5">
                      {st.detail}
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-[#FCE29A] text-[11px] text-[#8B640A] leading-relaxed font-medium">
                The AI prepares the action. The recruiter reviews it. The recruiter approves it. Only then does the action execute.
              </div>
            </div>

            {/* Terminal Window Output (Right) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#141517] p-4 sm:p-5 border border-[#2B2D33] text-xs font-mono text-[#D6D9E0] flex flex-col justify-between shadow-inner">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-[#8E929E]">
                  <span>youkt-copilot://session</span>
                  <span className="flex items-center gap-1.5 text-[#F6C445]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445] animate-ping" />
                    Telemetric Stream
                  </span>
                </div>
                {selectedPreset.output.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.startsWith("✨")
                        ? "text-[#F6C445] font-semibold pt-2"
                        : line.startsWith("> [")
                        ? "text-white"
                        : "text-[#8E929E]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8E929E]">
                <span>Stateful Context: {selectedPreset.tokens}</span>
                <span className="text-[#3DD68C] font-semibold">✓ Human-in-the-Loop Governed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
