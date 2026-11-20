"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import GradientWaves from "@/components/ui/GradientWaves";
import { FeatureItem } from "./feature-data";

interface FeatureCardProps {
  position: number;
  feature: FeatureItem;
  cardSize: number;
  cardSpread?: number;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = React.memo(({
  position,
  feature,
  cardSize,
  cardSpread,
  onClick,
}) => {
  const absPos = Math.abs(position);

  // Skip rendering cards far outside the viewport track
  if (absPos > 3.0) {
    return null;
  }

  const isCenter = absPos < 0.45;
  const isNearCenter = absPos < 1.1;
  const Icon = feature.icon;
  const spread = cardSpread ?? cardSize * 0.95;

  // Smooth continuous transformation
  const x = spread * position;
  const y = (1 - Math.min(1, absPos)) * -20 + Math.min(1, absPos) * 20;
  const rotate = Math.max(-5, Math.min(5, position * 2.8));
  const scale = Math.max(0.82, 1 - absPos * 0.08);
  const zIndex = Math.round(50 - absPos * 8);

  // Smooth continuous opacity curve without sudden steps
  let opacity = 1;
  if (absPos > 2.2) {
    opacity = Math.max(0, 0.72 * (1 - (absPos - 2.2) / 0.8));
  } else if (absPos > 0.4) {
    const factor = Math.min(1, (absPos - 0.4) / 0.5);
    opacity = 1 - factor * 0.28;
  }

  const cardHeight = Math.round(cardSize * 1.24);

  return (
    <div
      onClick={onClick}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer select-none flex flex-col overflow-hidden",
        "bg-white rounded-[26px] sm:rounded-[30px] border",
        "transition-[border-color,box-shadow] duration-250 ease-out",
        isCenter
          ? "border-[#F2D27A] shadow-[0_24px_50px_-12px_rgba(246,196,69,0.30),0_12px_24px_-6px_rgba(20,21,23,0.06),0_0_0_1px_rgba(242,210,122,0.45)]"
          : "border-[#EAE6DF] shadow-[0_12px_32px_-10px_rgba(0,0,0,0.06)] hover:border-[#F2D27A]/80 hover:opacity-90"
      )}
      style={{
        width: cardSize,
        height: cardHeight,
        zIndex,
        opacity,
        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
        willChange: "transform, opacity",
      }}
    >
      {/* 1. TOP HALF: Living 3D WebGL Waves with Amber-Gold Horizon */}
      <div className="relative w-full h-[165px] sm:h-[175px] shrink-0 overflow-hidden bg-[#FFFDF7]">
        {/* Soft Yellow Radial Glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 35%, #FFF991 0%, transparent 75%)`,
            opacity: 0.65,
            mixBlendMode: "multiply",
          }}
        />

        {/* Living 3D WebGL Gradient Waves in Luminous Yellow & Warm Gold */}
        <div className="absolute inset-0 pointer-events-auto">
          <GradientWaves
            horizonColor="#E5A016"
            waveColor="#F6C445"
            crestColor="#FFFDF0"
            speed={isCenter ? 0.35 : 0.18}
            amplitude={2.1}
            waveScale={0.55}
            relief={1.1}
            brightness={1.05}
            lightAngle={120}
            mouseInteraction={isCenter}
            swellOnClick={isCenter}
            lightMode={true}
            paused={!isNearCenter}
            quality="low"
            dpr={1.2}
          />
        </div>

        {/* Soft bottom haze fade into white card body */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />

        {/* Top-Left Floating Squircle Icon Box */}
        <div className="absolute top-3.5 left-3.5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F2D27A]/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#8B640A] transition-transform duration-300 hover:scale-105">
          <Icon className="w-5 h-5 text-[#8B640A]" />
        </div>

        {/* Top-Right Module Number Badge */}
        <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#F2D27A]/60 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-[#8B640A] uppercase">
            MODULE {feature.moduleNum}
          </span>
        </div>
      </div>

      {/* 2. BOTTOM HALF: Typography, Micro-Capabilities & Enterprise Status */}
      <div className="px-5 sm:px-6 pt-3.5 pb-4 sm:pb-5 flex flex-col justify-between flex-1 bg-white relative z-10">
        <div>
          {/* Category Tag */}
          <div className="text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#8B640A] mb-1">
            {feature.tag}
          </div>

          {/* Main Headline */}
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#141517] tracking-tight leading-snug mb-1 text-balance">
            {feature.title}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-[12px] sm:text-[12.5px] text-[#5E6168] leading-relaxed mb-3 line-clamp-2">
            {feature.description}
          </p>

          {/* Micro-Capabilities / Highlights */}
          <div className="space-y-1.5 mb-2">
            {feature.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-[11.5px] sm:text-[12px] text-[#2C2E33] font-medium"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFF9E6] border border-[#F2D27A] flex items-center justify-center shrink-0 text-[#8B640A]">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Bottom Status Divider */}
        <div className="pt-2.5 border-t border-[#F0ECE1] flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#7C808C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
            <span className="font-semibold text-[#141517]/85 text-[11px]">
              {feature.footerBadge}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8B640A] group-hover:text-[#6D4E08] transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
