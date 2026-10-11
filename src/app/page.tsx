"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import AiAutomationSection from "@/components/AiAutomationSection";
import Resources from "@/components/Resources";
import UniversalHeroBackground from "@/components/UniversalHeroBackground";
import ScrollPlacingSection from "@/components/ScrollPlacingSection";

const SECTIONS = [
  { id: "platform", label: "Platform", num: "01" },
  { id: "solutions", label: "Solutions", num: "02" },
  { id: "ai-automation", label: "AI & Automation", num: "03" },
  { id: "resources", label: "Resources", num: "04" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("platform");
  const isScrollingProgrammatically = useRef<boolean>(false);

  // Smooth scroll to target section with sticky navbar offset compensation
  const scrollToSection = useCallback((targetId: string) => {
    setActiveSection(targetId);
    isScrollingProgrammatically.current = true;

    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 76; // Navbar height + margin offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }

    // Cooldown to prevent scrollspy conflict while animating smoothly
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 800);
  }, []);

  // ScrollSpy: Dynamically update activeSection indicator in top navbar based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const scrollPosition = window.scrollY + 180; // Offset benchmark for navbar line
      const sectionElements = SECTIONS.map((sec) => ({
        id: sec.id,
        element: document.getElementById(sec.id),
      })).filter((item) => item.element !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col text-[#141517] selection:bg-[#F6C445]/30 selection:text-[#141517] relative bg-[#FAF8F5]">
      {/* Universal Hero Background Layer (Fixed backdrop across the entire single page) */}
      <UniversalHeroBackground />

      {/* Sticky Glassmorphic Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={scrollToSection}
      />

      {/* Single Continuous Landing Page with Content Placing Effect on Scroll */}
      <main className="w-full relative z-10 flex-1 flex flex-col">
        {/* 01. Platform (Hero Carousel) */}
        <ScrollPlacingSection id="platform" delay={0.05} yOffset={20}>
          <Hero onNavigate={scrollToSection} />
        </ScrollPlacingSection>

        {/* 02. Solutions (Roles & Connected Ecosystem) */}
        <ScrollPlacingSection id="solutions" delay={0.08} yOffset={36}>
          <Solutions onNavigate={scrollToSection} />
        </ScrollPlacingSection>

        {/* 03. AI & Automation (Distinctive Command Center Hub) */}
        <ScrollPlacingSection id="ai-automation" delay={0.08} yOffset={36}>
          <AiAutomationSection onNavigate={scrollToSection} />
        </ScrollPlacingSection>

        {/* 04. Resources (Editorial Hub, Product Overview, AI & Security, FAQ, Footer) */}
        <ScrollPlacingSection id="resources" delay={0.08} yOffset={36}>
          <Resources onNavigate={scrollToSection} />
        </ScrollPlacingSection>
      </main>
    </div>
  );
}
