import { Sparkles, Globe, MessageSquare, Code2, Share2 } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Platform: [
      { label: "Recruitment ATS", href: "#platform" },
      { label: "Recruitment CRM", href: "#platform" },
      { label: "Skill Assessments", href: "#resources" },
      { label: "Careers Portal", href: "#resources" },
      { label: "Recruitment Copilot", href: "#ai-automation" },
    ],
    Solutions: [
      { label: "Recruiters", href: "#solutions" },
      { label: "Candidates", href: "#solutions" },
      { label: "Hiring Managers", href: "#solutions" },
      { label: "Enterprises", href: "#solutions" },
    ],
    Resources: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "AI & Automation", href: "#ai-automation" },
      { label: "Security", href: "#resources" },
      { label: "Documentation", href: "#resources" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Schedule a Demo", href: "#demo" },
    ],
  };

  return (
    <footer className="border-t border-[#EAE6DF] bg-[#FAF8F5] pt-16 pb-12 text-[#5E6168]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-[#EAE6DF]">
          {/* Logo & Info */}
          <div className="col-span-2 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white rounded-full border border-[#EAE6DF] shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6C445] inline-block shadow-[0_0_6px_rgba(246,196,69,0.5)]" />
              <span className="text-sm font-bold tracking-tight text-[#141517]">
                Youkt
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#606268] border border-[#EAE6DF]">
                AI
              </span>
            </a>

            <p className="text-xs text-[#6B6D74] leading-relaxed max-w-sm">
              The autonomous multi-agent AI orchestration platform unifying modern ATS workflows, client CRM, automated skill assessments, and stateful AI Copilot intelligence.
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAE6DF] text-[11px] font-medium text-[#141517] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>All Systems Operational (99.9% Reliability)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] hover:text-[#141517] transition-colors shadow-xs"
                aria-label="Code Repository"
              >
                <Code2 className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] hover:text-[#141517] transition-colors shadow-xs"
                aria-label="Global Community"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] hover:text-[#141517] transition-colors shadow-xs"
                aria-label="Discussions"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] text-[#64666D] hover:text-[#141517] transition-colors shadow-xs"
                aria-label="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#141517] mb-3">
                {section}
              </h4>
              <ul className="space-y-2 text-xs">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#6B6D74] hover:text-[#141517] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E929E] gap-4">
          <div>
            &copy; 2026 Youkt. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#6B6D74]">
            <span>Next.js & TypeScript</span>
            <span>•</span>
            <span>100% Logical Multi-Tenant Isolation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
