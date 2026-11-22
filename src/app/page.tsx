"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsRow from "@/components/MetricsRow";
import { FeatureSection } from "@/components/feature-components";
import HowItWorks from "@/components/HowItWorks";
import CopilotSection from "@/components/CopilotSection";
import Resources from "@/components/Resources";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const NAV_SECTIONS = [
  { id: "platform", label: "Platform" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "resources", label: "Resources" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("platform");
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const isScrollingProgrammatically = useRef<boolean>(false);

  const scrollToSection = useCallback((targetId: string) => {
    const resolvedId = targetId === "solutions" ? "how-it-works" : targetId;
    if (NAV_SECTIONS.some((s) => s.id === resolvedId)) {
      setActiveSection(resolvedId);
    }
    isScrollingProgrammatically.current = true;

    const el = document.getElementById(resolvedId);
    if (el) {
      const navOffset = 88;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - navOffset;

      const lenis = typeof window !== "undefined" ? (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis : undefined;
      if (lenis) {
        lenis.scrollTo(Math.max(0, offsetPosition), { duration: 1.6 });
      } else {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }

    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 1600);
  }, []);

  const triggerHighlight = useCallback((sectionId: string) => {
    setHighlightedId(sectionId);
    setTimeout(() => setHighlightedId(null), 1600);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const scrollPosition = window.scrollY + 190;
      const sectionElements = NAV_SECTIONS.map((sec) => ({
        id: sec.id,
        element: document.getElementById(sec.id),
      })).filter((item) => item.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element && scrollPosition >= item.element.offsetTop) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col text-[#141517] selection:bg-[#F6C445]/35 selection:text-[#141517] relative bg-white">
      {/* Floating Pill Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        loginModalOpen={loginModalOpen}
        onSetLoginModalOpen={setLoginModalOpen}
      />

      <main className="w-full flex-1 flex flex-col">
        {/* 1. Hero — Scroll-Overlapping CSS Smartphone over Hero Copy + Capability Strip */}
        <Hero onNavigate={scrollToSection} />

        {/* Core Platform Guarantees */}
        <MetricsRow />

        {/* 2. Features — Interactive Staggered Pillars Deck */}
        <FeatureSection onNavigate={scrollToSection} />

        {/* 3. How It Works — 8-Step Modern Hiring Workflow */}
        <HowItWorks
          highlighted={highlightedId === "how-it-works"}
          onNavigate={scrollToSection}
        />

        {/* 4. AI and Automation — Copilot, Bulk Resumes, JD Drafts, Automation & Limits */}
        <CopilotSection onNavigate={scrollToSection} />

        {/* 5. Resources — Structured Guide & Resource Cards */}
        <Resources
          onNavigate={scrollToSection}
          onHighlightSection={triggerHighlight}
          onOpenLogin={() => setLoginModalOpen(true)}
        />

        {/* 6. Standalone Minimal FAQ */}
        <FaqSection onOpenLogin={() => setLoginModalOpen(true)} />

        {/* 7. Standalone Final Demo CTA */}
        <FinalCta
          onNavigate={scrollToSection}
          onOpenLogin={() => setLoginModalOpen(true)}
        />
      </main>

      {/* 8. Standalone Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLogin={() => setLoginModalOpen(true)}
      />
    </div>
  );
}
