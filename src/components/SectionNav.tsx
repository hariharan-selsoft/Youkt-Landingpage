"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

interface SectionNavProps {
  sections: { id: string; label: string; num: string }[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function SectionNav({
  sections,
  activeSection,
  onSelectSection,
  onNext,
  onPrev,
}: SectionNavProps) {
  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <aside
      aria-label="Section Stage Navigation"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 bg-white/90 backdrop-blur-md p-2.5 rounded-full border border-[#EAE6DF] shadow-[0_8px_30px_rgba(20,21,23,0.06)]"
    >
      {/* Up Button */}
      <button
        onClick={onPrev}
        disabled={activeIndex === 0}
        aria-label="Previous section"
        className="p-1.5 rounded-full text-[#7A7D85] hover:text-[#141517] hover:bg-[#F4F1EA] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Dots / Pills */}
      <div className="flex flex-col items-center gap-2.5 py-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="group relative flex items-center justify-center cursor-pointer p-1"
              aria-label={`Go to ${section.label}`}
            >
              <span
                className={`transition-all rounded-full block ${
                  isActive
                    ? "w-3 h-3 bg-[#F6C445] ring-4 ring-[#F6C445]/20 shadow-xs"
                    : "w-2 h-2 bg-[#D1CCC2] group-hover:bg-[#141517] group-hover:scale-125"
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2.5 py-1 rounded-lg bg-[#141517] text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
                <span className="text-[#F6C445] font-mono mr-1.5">{section.num}</span>
                {section.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Down Button */}
      <button
        onClick={onNext}
        disabled={activeIndex === sections.length - 1}
        aria-label="Next section"
        className="p-1.5 rounded-full text-[#7A7D85] hover:text-[#141517] hover:bg-[#F4F1EA] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </aside>
  );
}
