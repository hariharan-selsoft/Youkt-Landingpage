"use client";

import React from "react";

export default function UniversalHeroBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#FAF8F5]">
      {/* Top-Left Organic Yellow Shade Wave (from Wireframe Sketch) */}
      <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 w-[380px] sm:w-[620px] h-[380px] sm:h-[620px] opacity-85">
        <svg viewBox="0 0 500 500" className="w-full h-full filter blur-[1px]">
          <defs>
            <linearGradient id="globalYellowShadeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6C445" stopOpacity="0.48" />
              <stop offset="45%" stopColor="#FDE68A" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#FEF3C7" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="globalYellowGlowTop" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#F6C445" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="230" fill="url(#globalYellowGlowTop)" />
          <path
            d="M0,0 L380,0 C340,90 310,140 250,190 C180,250 140,290 80,340 C40,370 15,395 0,420 Z"
            fill="url(#globalYellowShadeTop)"
          />
        </svg>
      </div>

      {/* Bottom-Right Organic Yellow Shade Wave (from Wireframe Sketch) */}
      <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 w-[380px] sm:w-[620px] h-[380px] sm:h-[620px] opacity-85">
        <svg viewBox="0 0 500 500" className="w-full h-full filter blur-[1px]">
          <defs>
            <linearGradient id="globalYellowShadeBottom" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#F6C445" stopOpacity="0.48" />
              <stop offset="45%" stopColor="#FDE68A" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#FEF3C7" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="globalYellowGlowBottom" cx="70%" cy="70%" r="70%">
              <stop offset="0%" stopColor="#F6C445" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="340" cy="340" r="230" fill="url(#globalYellowGlowBottom)" />
          <path
            d="M500,500 L120,500 C160,410 190,360 250,310 C320,250 360,210 420,160 C460,130 485,105 500,80 Z"
            fill="url(#globalYellowShadeBottom)"
          />
        </svg>
      </div>

      {/* Ambient Warm Golden Center Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-[#F6C445]/14 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Background Grid Texture */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />
    </div>
  );
}
