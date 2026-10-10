"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Simulator from "@/components/Simulator";
import Workflow from "@/components/Workflow";
import Resources from "@/components/Resources";
import SectionNav from "@/components/SectionNav";
import UniversalHeroBackground from "@/components/UniversalHeroBackground";

const SECTIONS = [
  { id: "platform", label: "Platform", num: "01" },
  { id: "solutions", label: "Solutions", num: "02" },
  { id: "ai-automation", label: "AI & Automation", num: "03" },
  { id: "how-it-works", label: "How It Works", num: "04" },
  { id: "resources", label: "Resources", num: "05" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("platform");
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const isTransitioningRef = useRef<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const navigateToSection = useCallback(
    (targetId: string) => {
      const targetIdx = SECTIONS.findIndex((s) => s.id === targetId);
      if (targetIdx === -1 || targetId === activeSection || isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      setDirection(targetIdx > activeIndex ? "next" : "prev");
      setActiveSection(targetId);

      // Reset scroll of stage container to top for clean alignment
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }

      // 650ms cooldown prevents rapid multi-jump from trackpad inertia
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 650);
    },
    [activeSection, activeIndex]
  );

  const handleNext = useCallback(() => {
    if (activeIndex < SECTIONS.length - 1) {
      navigateToSection(SECTIONS[activeIndex + 1].id);
    }
  }, [activeIndex, navigateToSection]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      navigateToSection(SECTIONS[activeIndex - 1].id);
    }
  }, [activeIndex, navigateToSection]);

  // Wheel / Trackpad scroll detection with single-page snap on hero & boundary checking on others
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (isTransitioningRef.current) return;

      // 1. When on Hero page, it is fixed in a single page (no inner scroll required).
      // Any scroll down immediately moves to next section!
      if (activeSection === "platform") {
        if (e.deltaY > 15) {
          handleNext();
        }
        return;
      }

      const container = scrollContainerRef.current;
      if (!container) return;

      const isScrollable = container.scrollHeight > container.clientHeight + 25;
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
      const isAtTop = container.scrollTop <= 15;

      // Scrolling Down
      if (e.deltaY > 20) {
        if (!isScrollable || isAtBottom) {
          if (activeIndex < SECTIONS.length - 1) {
            handleNext();
          }
        }
      }
      // Scrolling Up
      else if (e.deltaY < -20) {
        if (!isScrollable || isAtTop) {
          if (activeIndex > 0) {
            handlePrev();
          }
        }
      }
    },
    [activeSection, activeIndex, handleNext, handlePrev]
  );

  // Touch swipe support for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null || isTransitioningRef.current) return;
    const diff = e.changedTouches[0].clientY - touchStartY.current;
    touchStartY.current = null;

    if (activeSection === "platform") {
      if (diff < -30) {
        handleNext();
      }
      return;
    }

    const container = scrollContainerRef.current;
    if (!container) return;

    const isScrollable = container.scrollHeight > container.clientHeight + 25;
    const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 25;
    const isAtTop = container.scrollTop <= 20;

    if (diff < -40) {
      // Swiped UP -> scroll DOWN
      if (!isScrollable || isAtBottom) {
        handleNext();
      }
    } else if (diff > 40) {
      // Swiped DOWN -> scroll UP
      if (!isScrollable || isAtTop) {
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        if (activeSection === "platform") {
          handleNext();
          return;
        }
        const container = scrollContainerRef.current;
        if (!container || container.scrollTop + container.clientHeight >= container.scrollHeight - 25) {
          handleNext();
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        if (activeSection === "platform") return;
        const container = scrollContainerRef.current;
        if (!container || container.scrollTop <= 20) {
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, handleNext, handlePrev]);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col text-[#141517] selection:bg-[#F6C445]/30 selection:text-[#141517] relative">
      {/* Universal Hero Background Layer (Applied to Hero and every other page) */}
      <UniversalHeroBackground />

      {/* Sticky Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={navigateToSection}
      />

      {/* Floating Right Deck Navigator */}
      <SectionNav
        sections={SECTIONS}
        activeSection={activeSection}
        onSelectSection={navigateToSection}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Main Alignment Stage Container */}
      <main
        ref={scrollContainerRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full overflow-y-auto custom-stage-scroll relative focus:outline-none z-10"
        tabIndex={0}
      >
        <div
          key={activeSection}
          className={`w-full min-h-full ${
            direction === "next" ? "animate-align-in" : "animate-align-in-reverse"
          }`}
        >
          {activeSection === "platform" && (
            <Hero onNavigate={navigateToSection} />
          )}

          {activeSection === "solutions" && (
            <Solutions onNavigate={navigateToSection} />
          )}

          {activeSection === "ai-automation" && (
            <Simulator onNavigate={navigateToSection} />
          )}

          {activeSection === "how-it-works" && (
            <Workflow onNavigate={navigateToSection} />
          )}

          {activeSection === "resources" && (
            <Resources onNavigate={navigateToSection} />
          )}
        </div>
      </main>
    </div>
  );
}
