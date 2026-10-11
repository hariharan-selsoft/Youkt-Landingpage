"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import HeroCarouselCard, { HeroCardData } from "@/components/HeroCarouselCard";

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const isTransitioningRef = useRef(false);

  const heroCards: HeroCardData[] = [
    {
      id: "meet-youkt",
      badge: "MEET YOUKT",
      headingPrefix: "What if hiring could run",
      headingAccent: "smarter?",
      heading: "What if hiring could run smarter?",
      description:
        "Youkt brings recruitment, talent intelligence, assessments, and AI-powered automation together in one unified platform.",
      ctaText: "Explore Youkt",
      ctaTarget: "solutions",
      image: "/Card 1.png",
      imageAlt: "Meet Youkt - Autonomous Talent Intelligence Platform",
      chips: [
        { label: "Autonomous Copilot", iconName: "bot" },
        { label: "Dynamic Pipeline ATS", iconName: "layers" },
        { label: "Skill Assessments", iconName: "target" },
      ],
      floatingMetric: {
        title: "70% Faster Shortlisting",
        subtitle: "Autonomous Sourcing Engine",
      },
    },
    {
      id: "who-uses-youkt",
      badge: "BUILT FOR EVERYONE",
      headingPrefix: "One platform.",
      headingAccent: "Every hiring team.",
      heading: "One platform. Every hiring team.",
      description:
        "From recruiters and hiring managers to candidates and enterprises, Youkt connects everyone to make hiring simpler, smarter, and more transparent.",
      ctaText: "Discover Who It's For",
      ctaTarget: "solutions",
      image: "/card 2.png",
      imageAlt: "Who Uses Youkt - Built for recruiters, hiring managers, candidates, and enterprises",
      chips: [
        { label: "Recruiters & Sourcing", iconName: "bot" },
        { label: "Hiring Managers", iconName: "layers" },
        { label: "Enterprise Scale", iconName: "shield" },
      ],
      floatingMetric: {
        title: "Unified Hiring Hub",
        subtitle: "Cross-Functional Collaboration",
      },
    },
    {
      id: "whats-new",
      badge: "AI-POWERED INNOVATION",
      headingPrefix: "Meet your",
      headingAccent: "AI recruitment copilot.",
      heading: "Meet your AI recruitment copilot.",
      description:
        "Discover intelligent talent search, automated recruitment workflows, and human-approved AI actions that make hiring faster, smarter, and more efficient.",
      ctaText: "Explore What's New",
      ctaTarget: "ai-automation",
      image: "/Card 3.png",
      imageAlt: "Meet your AI recruitment copilot - AI-Powered Innovation in Youkt",
      chips: [
        { label: "AI-Powered Talent Search", iconName: "bot" },
        { label: "Autonomous Workflow Automation", iconName: "workflow" },
        { label: "Human-in-the-Loop Approvals", iconName: "shield" },
      ],
      floatingMetric: {
        title: "AI Recruitment Copilot",
        subtitle: "Verified Action Workflows",
      },
    },
  ];

  const currentCard = heroCards[activeCardIndex];

  // Auto-advance carousel after a set delay (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % heroCards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeCardIndex, heroCards.length]);

  // Touch swipe support horizontally on card for mobile/tablets
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || isTransitioningRef.current) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (diff < -40) {
      // Swiped Left -> next card
      isTransitioningRef.current = true;
      setActiveCardIndex((prev) => (prev + 1) % heroCards.length);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 420);
    } else if (diff > 40) {
      // Swiped Right -> prev card
      isTransitioningRef.current = true;
      setActiveCardIndex((prev) => (prev - 1 + heroCards.length) % heroCards.length);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 420);
    }
  };

  return (
    <section
      id="platform"
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center pt-2 pb-6 px-3 sm:px-6 lg:px-8 bg-transparent select-none"
    >
      {/* Central Hero Carousel Container - Balanced Width, Centered Horizontally */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full max-w-[1240px] xl:max-w-[1300px] 2xl:max-w-[1360px] mx-auto flex flex-col items-center justify-center cursor-default"
      >
        {/* Animated Card Component */}
        <AnimatePresence mode="wait">
          <HeroCarouselCard
            key={currentCard.id}
            card={currentCard}
            cardIndex={activeCardIndex}
            totalCards={heroCards.length}
            onNavigate={onNavigate}
            onSelectIndex={(idx) => setActiveCardIndex(idx)}
          />
        </AnimatePresence>

        {/* Compact Trust Indicators Row - Finished right below the card */}
        <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 sm:gap-x-6 text-[10px] sm:text-[11px] text-[#6B6D74] mt-2.5 sm:mt-3 mb-1 shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>No credit card required</span>
          </div>
          <span className="hidden sm:inline text-[#D4CFC4]">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>SOC2 Type II & GDPR Compliant</span>
          </div>
          <span className="hidden sm:inline text-[#D4CFC4]">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#141517]" />
            <span>100% Logical Tenant Isolation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
