import { GitBranch, BrainCircuit, ShieldAlert, Rocket, ArrowRight, Check } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      num: "01",
      title: "Source & Discover",
      description:
        "Connect CRM candidate pools, job boards, and talent databases. Natural-language BM25 queries surface verified talent in seconds.",
      tag: "Source → Discover",
    },
    {
      num: "02",
      title: "Screen & Assess",
      description:
        "Automated candidate screening paired with standardized skill assessments and objective, job-matched evaluation.",
      tag: "Screen → Assess",
    },
    {
      num: "03",
      title: "Interview & Select",
      description:
        "Coordinate structured interviews, collaborative scorecards, and human-in-the-loop approvals keeping hiring teams aligned.",
      tag: "Interview → Select",
    },
    {
      num: "04",
      title: "Offer & Onboard",
      description:
        "AI prepares offer letters and contracts for recruiter approval, followed by frictionless digital candidate onboarding.",
      tag: "Select → Onboard",
    },
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 relative bg-[#F7F5F0] border-y border-[#EAE6DF]">
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B640A] bg-[#FFF9E6] px-3.5 py-1 rounded-full border border-[#FCE29A]">
            Recruitment Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mt-4 mb-4 leading-tight">
            One Platform.{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              The Entire Hiring Lifecycle.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168] mb-6">
            Youkt connects the entire recruitment lifecycle inside one intelligent platform.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EAE6DF] shadow-xs text-xs font-bold text-[#141517]">
            <span>Source</span>
            <span className="text-[#F6C445]">→</span>
            <span>Discover</span>
            <span className="text-[#F6C445]">→</span>
            <span>Screen</span>
            <span className="text-[#F6C445]">→</span>
            <span>Assess</span>
            <span className="text-[#F6C445]">→</span>
            <span>Interview</span>
            <span className="text-[#F6C445]">→</span>
            <span>Select</span>
            <span className="text-[#F6C445]">→</span>
            <span>Onboard</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-7 rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_2px_12px_rgba(20,21,23,0.02)] relative flex flex-col justify-between hover:border-[#DDD8CE] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#141517] font-mono">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold text-[#64666D] bg-[#F7F5F0] border border-[#EAE6DF] px-2.5 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#141517] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6168] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center text-xs font-semibold text-[#141517] gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#F6C445]" />
                <span>Lifecycle Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
