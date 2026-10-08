import { TrendingUp, Clock, Zap, ShieldCheck } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "70%",
      label: "Reduction in Time-to-Shortlist",
      desc: "Accelerate qualification from days to hours with autonomous talent intelligence",
      icon: Zap,
    },
    {
      value: "10x",
      label: "Faster Candidate Discovery with BM25 AI Sourcing",
      desc: "Dynamic operation registry discovers the right talent capabilities instantly",
      icon: Clock,
    },
    {
      value: "100%",
      label: "Logical Multi-Tenant Data Isolation",
      desc: "Tenant-aware authorization with strict data segregation and audit trails",
      icon: ShieldCheck,
    },
    {
      value: "99.9%",
      label: "Delivery Reliability with Durable Temporal Workflows",
      desc: "Persistent stateful execution threads with checkpoint recovery",
      icon: TrendingUp,
    },
  ];

  const partners = [
    "ACME Cloud",
    "HyperScale Labs",
    "Synthetix AI",
    "Vertex Systems",
    "Nexus Data",
    "Pulse Dev",
  ];

  return (
    <section className="py-16 sm:py-20 border-y border-[#EAE6DF] bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Marquee / Grid */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#7A7D85] font-semibold mb-6">
            Trusted by high-velocity talent acquisition teams & modern enterprise leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 opacity-80">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-sm sm:text-base font-bold font-mono tracking-wider text-[#64666D] hover:text-[#141517] transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-3xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_-2px_rgba(20,21,23,0.03)] hover:border-[#DDD8CE] transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#F7F5F0] border border-[#EAE6DF] flex items-center justify-center text-[#141517] mb-4">
                  <Icon className="w-5 h-5 text-[#141517]" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#141517] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#141517] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B6D74] leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
