import { CheckCircle2, Shield, Sparkles, Award } from "lucide-react";

export default function Testimonials() {
  const cards = [
    {
      badge: "Skill Assessments",
      title: "Measure Skills. Not Just Resumes.",
      description:
        "Standardized skill assessments and automated evaluation help organizations identify candidates based on practical capabilities and job requirements.",
      points: [
        "Standardized assessments",
        "Automated evaluation",
        "Objective scoring",
        "Job requirement matching",
      ],
      initials: "SA",
      category: "Verified Talent",
      role: "Standardized Scoring",
    },
    {
      badge: "Candidate Experience",
      title: "Give Candidates a Better Hiring Experience",
      description:
        "Keep candidates informed and engaged throughout the recruitment journey with a modern, transparent careers experience.",
      points: [
        "Modern job search & one-click applications",
        "Real-time application tracking",
        "Interview visibility & scheduling",
        "Frictionless digital onboarding",
      ],
      initials: "CX",
      category: "Careers Portal",
      role: "Mobile-Responsive",
    },
    {
      badge: "Enterprise Security",
      title: "Enterprise-Ready by Design",
      description:
        "Built to support secure, reliable recruitment operations across organizations, teams, and clients.",
      points: [
        "Multi-tenant architecture & strict isolation",
        "Granular RBAC & immutable audit trails",
        "Secure business rules & durable workflows",
        "Reliable background processing",
      ],
      initials: "ES",
      category: "Enterprise Security",
      role: "Strict Tenant Isolation",
    },
  ];

  return (
    <section id="resources" className="py-24 sm:py-32 relative bg-[#F7F5F0] border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8B640A] bg-[#FFF9E6] px-3.5 py-1 rounded-full border border-[#FCE29A]">
            Enterprise Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight mt-4 mb-4 leading-tight">
            Assessments. Experience.{" "}
            <span className="text-[#64666D] font-normal block sm:inline">
              Enterprise Trust.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5E6168]">
            Objective talent evaluation, modern candidate portals, and strict multi-tenant security built to support mission-critical hiring operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_-2px_rgba(20,21,23,0.03)] flex flex-col justify-between hover:border-[#DDD8CE] transition-all hover:-translate-y-1"
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center gap-1 mb-5">
                  <span className="text-[11px] font-bold text-[#8B640A] bg-[#FFF9E6] border border-[#FCE29A] px-2.5 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141517] mb-3 leading-snug">
                  {card.title}
                </h3>

                <p className="text-[#55575D] text-xs sm:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Supporting Points List */}
                <div className="space-y-2 mb-6">
                  {card.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-[#141517]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author / Category Details */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-[#F2EFE9]">
                <div className="w-10 h-10 rounded-full bg-[#141517] text-white flex items-center justify-center font-bold text-xs">
                  {card.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#141517]">
                    {card.category}
                  </div>
                  <div className="text-xs text-[#7A7D85]">
                    {card.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
