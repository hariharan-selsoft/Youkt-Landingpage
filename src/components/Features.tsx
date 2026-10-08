import {
  Network,
  ShieldCheck,
  Code2,
  Activity,
  Boxes,
  Workflow,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function Features() {
  const valuePillars = [
    {
      title: "Recruitment Copilot",
      subtitle: "Autonomous & Governed",
      desc: "Autonomous AI assistant that executes permitted workflows with human-in-the-loop governance.",
      tag: "AI Copilot",
      icon: Network,
    },
    {
      title: "Dynamic Talent Pipelines",
      subtitle: "Stage-by-Stage Tracking",
      desc: "Visual stage-by-stage tracking from initial application to offer acceptance across all hiring teams.",
      tag: "Recruitment ATS",
      icon: Cpu,
    },
    {
      title: "Enterprise Multi-Tenancy",
      subtitle: "Strict Tenant Isolation",
      desc: "Granular RBAC, client CRM, contract management, and immutable audit trails built for enterprise scale.",
      tag: "Enterprise Ready",
      icon: ShieldCheck,
    },
  ];

  const featureList = [
    {
      title: "Objective Skill Assessments",
      description:
        "Automated, standardized candidate evaluations that help surface verified talent based on practical capabilities.",
      icon: CheckCircle2,
      badge: "Assessments",
    },
    {
      title: "Candidate-First Careers Portal",
      description:
        "A transparent, mobile-responsive portal that keeps job seekers informed and engaged throughout the journey.",
      icon: Boxes,
      badge: "Careers Portal",
    },
    {
      title: "Natural Language Talent Search",
      description:
        "Turn natural-language recruitment requests into structured, validated candidate searches with BM25 Dynamic Operation Registry.",
      icon: Code2,
      badge: "Talent Search",
    },
    {
      title: "Human-in-the-Loop Governance",
      description:
        "The AI prepares the action. The recruiter reviews and approves it. Workflows pause before affecting candidate status or offer letters.",
      icon: Lock,
      badge: "Governance",
    },
    {
      title: "Recruitment CRM & Contracts",
      description:
        "Manage departments, clients, pipelines, fee contracts, and tenant-level security from one unified platform.",
      icon: Workflow,
      badge: "Recruitment CRM",
    },
    {
      title: "Durable Temporal Workflows",
      description:
        "Stateful AI workflows with persistent conversational threads, checkpoint recovery, and 99.9% delivery reliability.",
      icon: Activity,
      badge: "Workflows",
    },
  ];

  return (
    <section id="platform" className="py-24 sm:py-32 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FCE29A] text-[#8B640A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C445] fill-[#F6C445]" />
            Core Value Proposition
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mb-5 leading-tight">
            One Intelligent Platform{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              for the Entire Hiring Lifecycle
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] leading-relaxed">
            Youkt connects recruiters, candidates, hiring managers, clients, and enterprise operations through one unified recruitment ecosystem.
          </p>
        </div>

        {/* 3 Core Value Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {valuePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_4px_24px_-4px_rgba(20,21,23,0.04)] hover:border-[#DCD7CD] transition-all hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center text-[#141517]">
                      <Icon className="w-6 h-6 text-[#141517]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#8B640A] bg-[#FFF9E6] border border-[#FCE29A] px-2.5 py-0.5 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141517] mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#7A7D85] mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-[#5E6168] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center text-xs font-bold text-[#141517] gap-1 group cursor-pointer">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureList.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_2px_12px_rgba(20,21,23,0.02)] hover:border-[#DDD8CE] transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F7F5F0] border border-[#EAE6DF] flex items-center justify-center text-[#141517]">
                    <Icon className="w-5 h-5 text-[#141517]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6D74] bg-[#F7F5F0] px-2.5 py-1 rounded-full border border-[#EAE6DF]">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#141517] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64666D] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
