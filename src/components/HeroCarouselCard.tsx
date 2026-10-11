"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Layers,
  Target,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export interface HeroCardChip {
  label: string;
  iconName?: "bot" | "workflow" | "target" | "layers" | "shield" | "zap";
}

export interface HeroCardData {
  id: string;
  badge: string;
  headingPrefix?: string;
  headingAccent?: string;
  headingSuffix?: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaTarget: string;
  image: string;
  imageAlt: string;
  chips: HeroCardChip[];
  floatingMetric?: {
    title: string;
    subtitle: string;
  };
}

interface HeroCarouselCardProps {
  card: HeroCardData;
  cardIndex: number;
  totalCards: number;
  onNavigate?: (sectionId: string) => void;
  onSelectIndex: (index: number) => void;
  className?: string;
}

export default function HeroCarouselCard({
  card,
  cardIndex,
  totalCards,
  onNavigate,
  onSelectIndex,
  className = "",
}: HeroCarouselCardProps) {
  // Helper to render icon for chips
  const renderChipIcon = (iconName?: string) => {
    switch (iconName) {
      case "bot":
        return <Bot className="w-3.5 h-3.5 text-[#8B640A]" />;
      case "workflow":
        return <Workflow className="w-3.5 h-3.5 text-[#8B640A]" />;
      case "target":
        return <Target className="w-3.5 h-3.5 text-[#8B640A]" />;
      case "layers":
        return <Layers className="w-3.5 h-3.5 text-[#8B640A]" />;
      case "shield":
        return <ShieldCheck className="w-3.5 h-3.5 text-[#8B640A]" />;
      case "zap":
        return <Zap className="w-3.5 h-3.5 text-[#8B640A]" />;
      default:
        return <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />;
    }
  };

  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 8, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.995 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative w-full min-h-auto md:min-h-[490px] lg:min-h-[540px] xl:min-h-[565px] md:h-[500px] lg:h-[550px] xl:h-[575px] rounded-3xl sm:rounded-[36px] lg:rounded-[40px] bg-gradient-to-br from-[#FFFDF7] via-[#FFF9E6] to-[#FDF0BE] border-[1.5px] border-[#FBD982]/85 shadow-[0_24px_56px_-16px_rgba(20,21,23,0.08),0_4px_16px_rgba(20,21,23,0.03),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden transition-all flex flex-col justify-center ${className}`}
    >
      {/* Ambient Warm Golden Glow Effects inside Card */}
      <div className="absolute -top-24 -right-16 w-96 h-96 bg-[#F6C445]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#F6C445]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-88 h-88 bg-white/80 rounded-full blur-3xl pointer-events-none" />

      {/* Top-Right Floating Metric Badge */}
      {card.floatingMetric && (
        <div className="hidden sm:flex absolute top-4 md:top-5 lg:top-7 right-4 md:right-6 lg:right-9 bg-white/95 backdrop-blur-md border border-[#FCE29A] rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 shadow-md items-center gap-2 sm:gap-2.5 z-20 transition-all hover:scale-[1.02]">
          <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-xl bg-[#FFF9E6] border border-[#FCE29A] flex items-center justify-center text-[#8B640A] shrink-0">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#F6C445] text-[#8B640A]" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-[#141517] leading-tight">{card.floatingMetric.title}</div>
            <div className="text-[9.5px] sm:text-[10px] text-[#7A7D85] leading-tight">{card.floatingMetric.subtitle}</div>
          </div>
        </div>
      )}

      {/* Main Content Layout - Responsive 2-Column Desktop / Tablet, Clean Stack on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-5 sm:gap-6 md:gap-6 lg:gap-10 px-5 sm:px-8 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-7 md:py-6 lg:py-9 xl:py-11 relative z-10 w-full h-full">
        
        {/* Left Side: Content Column */}
        <div className="md:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left justify-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-[#FCE29A] text-[#8B640A] text-[10.5px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-2.5 md:mb-2 lg:mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.9)] animate-pulse" />
            <span>{card.badge}</span>
          </div>

          {/* Prominent Headline with Golden Accent */}
          <h1 className="text-2xl sm:text-3xl md:text-[1.85rem] lg:text-[2.45rem] xl:text-[2.75rem] font-black text-[#141517] tracking-tight leading-[1.14] mb-2 sm:mb-2.5 md:mb-2 lg:mb-3.5">
            {card.headingPrefix || card.heading}{" "}
            {card.headingAccent && (
              <span className="text-[#D97706] bg-gradient-to-r from-[#D97706] via-[#E8890C] to-[#F59E0B] bg-clip-text text-transparent">
                {card.headingAccent}
              </span>
            )}
            {card.headingSuffix && ` ${card.headingSuffix}`}
          </h1>

          {/* Concise Description */}
          <p className="text-xs sm:text-sm md:text-[13px] lg:text-[14.5px] xl:text-[15px] text-[#52555C] leading-relaxed max-w-lg mb-3.5 sm:mb-4 md:mb-3 lg:mb-5 font-normal">
            {card.description}
          </p>

          {/* Feature Highlight Chips */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 lg:gap-2.5 mb-4 sm:mb-5 md:mb-3.5 lg:mb-6">
            {card.chips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/90 border border-[#EDE8DF] text-[11px] sm:text-xs font-medium text-[#2C2E33] shadow-2xs hover:border-[#F6C445]/80 hover:bg-white transition-all cursor-default"
              >
                {renderChipIcon(chip.iconName)}
                <span>{chip.label}</span>
              </span>
            ))}
          </div>

          {/* Action Row - Clean and Uncluttered */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate?.(card.ctaTarget)}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#141517] hover:bg-[#282A2F] shadow-[0_4px_16px_rgba(20,21,23,0.18)] hover:shadow-[0_6px_22px_rgba(246,196,69,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>{card.ctaText}</span>
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Visual & Grounded Pedestal Column */}
        <div className="md:col-span-5 flex items-center justify-center relative w-full h-full min-h-[190px] sm:min-h-[240px] md:min-h-[290px] lg:min-h-[400px] xl:min-h-[440px]">
          {/* Main Visual Image Wrapper with Common Identical Dimensions Across All Cards */}
          <div className="relative flex items-center justify-center w-[160px] sm:w-[200px] md:w-[240px] lg:w-[330px] xl:w-[365px] h-[190px] sm:h-[240px] md:h-[290px] lg:h-[400px] xl:h-[440px] shrink-0">
            {/* Grounding Pedestal Glow - Anchored to bottom of image */}
            <div className="absolute -bottom-1.5 w-[115%] h-[50px] sm:h-[60px] lg:h-[75px] bg-gradient-to-t from-[#F6C445]/35 to-transparent rounded-full blur-xl pointer-events-none" />

            <img
              src={card.image}
              alt={card.imageAlt}
              width={455}
              height={548}
              className="w-full h-full object-contain drop-shadow-[0_20px_36px_rgba(20,21,23,0.16)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>

      {/* Right Side Down Indicator Component - Matched to Youkt UI with Large Accessible Click Target */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-4 sm:right-6 lg:right-9 z-30 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#FCE29A] shadow-xs">
        {Array.from({ length: totalCards }).map((_, idx) => {
          const isActive = cardIndex === idx;
          return (
            <button
              key={idx}
              id={`hero-carousel-indicator-${idx}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectIndex(idx);
              }}
              className="relative p-1.5 flex items-center justify-center cursor-pointer group"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`transition-all duration-300 rounded-full block ${
                  isActive
                    ? "w-6 sm:w-7 h-2 bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.7)]"
                    : "w-2 h-2 bg-[#E0D9CC] group-hover:bg-[#F6C445]/60"
                }`}
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
