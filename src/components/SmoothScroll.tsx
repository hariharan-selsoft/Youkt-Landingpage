"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const updateGlobal = () => {
      if (lenisRef.current?.lenis && typeof window !== "undefined") {
        (window as unknown as { __lenis?: unknown }).__lenis = lenisRef.current.lenis;
      }
    };
    updateGlobal();
    const timer = setTimeout(updateGlobal, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

