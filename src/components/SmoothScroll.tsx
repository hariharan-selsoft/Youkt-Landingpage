"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with slow, buttery smooth inertia
    const lenis = new Lenis({
      duration: 1.8, // Slower, luxurious smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential deceleration
      smoothWheel: true,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Expose lenis instance globally for coordinate scrolling
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
