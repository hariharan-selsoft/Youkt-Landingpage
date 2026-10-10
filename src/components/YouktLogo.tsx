"use client";

import React, { useState } from "react";

interface YouktLogoProps {
  className?: string;
  darkColor?: string;
  yellowColor?: string;
}

type LogoPart = "Y" | "O" | "U" | "K_stem" | "K_arm" | "T" | null;

export default function YouktLogo({
  className = "h-20 sm:h-28 md:h-32 w-auto",
  darkColor = "#141517",
  yellowColor = "#F6C445",
}: YouktLogoProps) {
  const [hoveredPart, setHoveredPart] = useState<LogoPart>(null);

  // Helper to determine fill: if hovering dark part, turns yellow; if hovering yellow part, turns dark
  const getFill = (part: LogoPart, isNormallyYellow: boolean = false) => {
    const isHovered = hoveredPart === part;
    if (isNormallyYellow) {
      return isHovered ? darkColor : yellowColor;
    }
    return isHovered ? yellowColor : darkColor;
  };

  return (
    <div className="relative inline-block select-none group">
      <svg
        viewBox="0 0 378 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} overflow-visible transition-transform duration-300`}
        aria-label="YOUKT"
        role="img"
      >
        <defs>
          <filter id="partGlowYellow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F6C445" floodOpacity="0.5" />
          </filter>
          <filter id="partGlowDark" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#141517" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Letter 'Y' (Normally Dark -> Inverts to Yellow on Hover) */}
        <path
          d="M 15 13.905 C 15 14.705, 27.302 37.243, 28.970 39.500 C 29.377 40.050, 31.283 43.425, 33.205 47 C 36.594 53.301, 36.677 53.714, 35.902 60.500 C 35.462 64.350, 35.080 69.188, 35.051 71.250 L 35 75 45.906 75 L 56.812 75 57.384 70.250 C 57.699 67.638, 58.256 62.804, 58.623 59.509 C 59.343 53.052, 57.958 55.168, 81.520 24.500 C 84.901 20.100, 87.993 15.938, 88.392 15.250 C 88.955 14.281, 86.565 14, 77.749 14 L 66.380 14 58.571 24.500 C 54.275 30.275, 50.459 35, 50.091 35 C 49.722 35, 47.188 30.449, 44.460 24.887 C 41.387 18.622, 38.739 14.498, 37.500 14.048 C 34.615 13.001, 15 12.876, 15 13.905 Z"
          fill={getFill("Y", false)}
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "Y" ? "url(#partGlowYellow)" : undefined}
          onMouseEnter={() => setHoveredPart("Y")}
          onMouseLeave={() => setHoveredPart(null)}
        />

        {/* Letter 'O' (Normally Dark -> Inverts to Yellow on Hover) */}
        <path
          d="M 113.232 13.997 C 106.720 15.378, 97.211 20.900, 93.541 25.434 C 87.494 32.903, 86.529 35.659, 86.514 45.500 C 86.502 53.119, 86.879 55.243, 88.974 59.343 C 91.872 65.018, 96.063 68.944, 103.287 72.752 C 108.172 75.327, 109.285 75.499, 121 75.488 C 132.606 75.478, 133.904 75.279, 139.143 72.716 C 164.234 60.442, 163.820 25.615, 138.469 16.057 C 131.778 13.535, 119.963 12.570, 113.232 13.997 Z M 116.500 32.358 C 106.453 37.004, 104.901 51.795, 113.967 56.483 C 117.755 58.442, 125.275 58.426, 129.094 56.451 C 137.491 52.109, 138.350 38.735, 130.559 33.630 C 126.995 31.296, 120.139 30.675, 116.500 32.358 Z"
          fill={getFill("O", false)}
          fillRule="evenodd"
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "O" ? "url(#partGlowYellow)" : undefined}
          onMouseEnter={() => setHoveredPart("O")}
          onMouseLeave={() => setHoveredPart(null)}
        />

        {/* Letter 'U' (Normally Dark -> Inverts to Yellow on Hover) */}
        <path
          d="M 171.507 15.250 C 170.377 18.532, 167.833 50.180, 168.291 55.250 C 169.205 65.365, 175.431 72.771, 186.223 76.579 C 192.717 78.870, 209.656 78.475, 216.619 75.869 C 223.865 73.158, 230.109 67.045, 232.386 60.433 C 233.320 57.720, 234.961 47.625, 236.033 38 C 237.104 28.375, 238.199 19.262, 238.466 17.750 L 238.950 15 L 227.656 15 L 216.363 15 L 214.602 33.078 C 213.634 43.020, 212.388 52.458, 211.832 54.051 C 209.272 61.397, 198.192 63.136, 192.750 57.046 C 189.577 53.496, 189.602 53.918, 191.509 35.500 C 192.306 27.800, 192.968 19.813, 192.979 17.750 L 193 14 L 182.469 14 C 174.940 14, 171.815 14.356, 171.507 15.250 Z"
          fill={getFill("U", false)}
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "U" ? "url(#partGlowYellow)" : undefined}
          onMouseEnter={() => setHoveredPart("U")}
          onMouseLeave={() => setHoveredPart(null)}
        />

        {/* Letter 'K' - Lower Stem & Leg (Normally Dark -> Inverts to Yellow on Hover) */}
        <path
          d="M 246 52.106 C 246 52.714, 249.885 58.789, 254.633 65.606 L 263.266 78 L 276.192 78 L 289.117 78 L 284.741 72.250 C 282.334 69.088, 277.950 63.013, 274.999 58.750 L 269.633 51 L 257.816 51 C 249.850 51, 246 51.360, 246 52.106 Z"
          fill={getFill("K_stem", false)}
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "K_stem" ? "url(#partGlowYellow)" : undefined}
          onMouseEnter={() => setHoveredPart("K_stem")}
          onMouseLeave={() => setHoveredPart(null)}
        />

        {/* Letter 'K' - Upper Diagonal Arm (Normally Yellow -> Inverts to Dark on Hover) */}
        <path
          d="M 249.556 16.250 C 249.091 17.772, 245.964 45.796, 245.985 48.250 C 245.998 49.817, 247.228 49.999, 257.750 49.990 L 269.500 49.980 283 34.870 C 290.425 26.559, 297.325 18.689, 298.333 17.380 L 300.167 15 L 287.898 15 C 276.677 15, 275.431 15.186, 273.314 17.174 L 271 19.349 271 17.174 C 271 15.080, 270.615 15, 260.469 15 C 252.914 15, 249.829 15.353, 249.556 16.250 Z"
          fill={getFill("K_arm", true)}
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "K_arm" ? "url(#partGlowDark)" : undefined}
          onMouseEnter={() => setHoveredPart("K_arm")}
          onMouseLeave={() => setHoveredPart(null)}
        />

        {/* Letter 'T' (Normally Dark -> Inverts to Yellow on Hover) */}
        <path
          d="M 302.719 20.250 C 299.854 23.642, 298.079 26.827, 297.705 29.250 L 297.126 33 L 306.563 33 L 316 33 L 315.989 35.750 C 315.983 37.263, 315.088 46.375, 314 56 C 312.912 65.625, 312.017 74.513, 312.011 75.750 C 312 77.946, 312.260 78, 322.886 78 L 333.773 78 L 334.352 73.750 C 334.671 71.412, 335.670 61.850, 336.573 52.500 C 337.476 43.150, 338.639 35.050, 339.158 34.500 C 339.676 33.950, 343.999 33.488, 348.765 33.473 L 357.429 33.447 L 358.082 30.255 C 358.441 28.499, 359.042 24.349, 359.417 21.031 L 360.099 15 L 333.627 15 L 307.155 15 L 302.719 20.250 Z"
          fill={getFill("T", false)}
          className="cursor-pointer transition-all duration-200 ease-out hover:opacity-95"
          filter={hoveredPart === "T" ? "url(#partGlowYellow)" : undefined}
          onMouseEnter={() => setHoveredPart("T")}
          onMouseLeave={() => setHoveredPart(null)}
        />
      </svg>
    </div>
  );
}
