"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CtaBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="demo" className="py-20 sm:py-28 relative bg-[#FAF8F5]">
      <div id="signup" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-[#141517] text-white text-center shadow-[0_20px_60px_-15px_rgba(20,21,23,0.3)] border border-[#26282E]">
          {/* Subtle warm ambient highlight */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#F6C445]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C445]" />
              Enterprise Talent Intelligence
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Build a Faster, Smarter Hiring Operation
            </h2>

            <p className="text-[#A2A6B3] text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Bring talent intelligence, autonomous workflows, assessments, CRM, and candidate experience together with Youkt.
            </p>

            {submitted ? (
              <div className="p-4 rounded-full bg-[#F6C445]/20 border border-[#F6C445]/40 text-[#F6C445] max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#F6C445]" />
                Thank you! Your demo request has been received for {email}.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#F6C445] text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-[0_2px_12px_rgba(246,196,69,0.4)] transition-all cursor-pointer"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mb-8">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6D9E0] hover:text-[#F6C445] transition-colors"
              >
                <span>Or explore the product on your own: View Interactive Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E929E]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> 70% faster shortlist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> 100% tenant data isolation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C445]" /> Human-in-the-loop governance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
