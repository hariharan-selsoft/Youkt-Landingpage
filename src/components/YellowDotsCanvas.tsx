"use client";

import { useEffect, useRef } from "react";

interface AmbientDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
}

interface TrailDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function YellowDotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      active: false,
    };

    // Ambient floating yellow dots
    const ambientCount = Math.min(Math.max(Math.floor((width * height) / 14000), 30), 65);
    const ambientDots: AmbientDot[] = [];

    for (let i = 0; i < ambientCount; i++) {
      ambientDots.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.2 + 1.8, // 1.8px - 4px
        baseAlpha: Math.random() * 0.35 + 0.35, // 0.35 - 0.70
        alpha: Math.random() * 0.35 + 0.35,
      });
    }

    // Dynamic mouse trail dots
    const trailDots: TrailDot[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (mouse.prevX > -500) {
        const dx = currentX - mouse.prevX;
        const dy = currentY - mouse.prevY;
        mouse.speed = Math.sqrt(dx * dx + dy * dy);

        // Spawn dynamic yellow dots along cursor movement
        const spawnCount = Math.min(Math.floor(mouse.speed / 7) + 1, 4);
        for (let i = 0; i < spawnCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.8 + 0.5;
          const maxLife = Math.floor(Math.random() * 25 + 25); // ~30-50 frames

          trailDots.push({
            x: currentX + (Math.random() - 0.5) * 8,
            y: currentY + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * speed + dx * 0.12,
            vy: Math.sin(angle) * speed + dy * 0.12,
            size: Math.random() * 2.5 + 2,
            alpha: 0.9,
            life: maxLife,
            maxLife,
          });
        }
      }

      mouse.prevX = currentX;
      mouse.prevY = currentY;
      mouse.x = currentX;
      mouse.y = currentY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.prevX = -1000;
      mouse.prevY = -1000;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle warm cursor glow
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const radial = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );
        radial.addColorStop(0, "rgba(246, 196, 69, 0.20)");
        radial.addColorStop(0.5, "rgba(246, 196, 69, 0.06)");
        radial.addColorStop(1, "rgba(246, 196, 69, 0)");
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render and update ambient dots with mouse push/repulsion
      for (let i = 0; i < ambientDots.length; i++) {
        const dot = ambientDots[i];

        // Ambient drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around boundaries
        if (dot.x < -10) dot.x = width + 10;
        if (dot.x > width + 10) dot.x = -10;
        if (dot.y < -10) dot.y = height + 10;
        if (dot.y > height + 10) dot.y = -10;

        // Mouse displacement & repulsion effect
        let closeToMouse = false;
        if (mouse.active) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 130;

          if (dist < repulsionRadius && dist > 0) {
            closeToMouse = true;
            const force = (1 - dist / repulsionRadius) * 4.2;
            dot.x += (dx / dist) * force;
            dot.y += (dy / dist) * force;
            dot.alpha = Math.min(1, dot.baseAlpha + (1 - dist / repulsionRadius) * 0.45);
          } else {
            dot.alpha += (dot.baseAlpha - dot.alpha) * 0.05;
          }
        } else {
          dot.alpha += (dot.baseAlpha - dot.alpha) * 0.05;
        }

        // Draw ambient dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246, 196, 69, ${dot.alpha})`;
        if (closeToMouse) {
          ctx.shadowColor = "#F6C445";
          ctx.shadowBlur = 12;
        }
        ctx.fill();
        ctx.restore();

        // Connect nearby ambient dots with delicate golden constellation threads
        for (let j = i + 1; j < ambientDots.length; j++) {
          const dot2 = ambientDots[j];
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const threadAlpha = (1 - dist / 100) * 0.20;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.strokeStyle = `rgba(246, 196, 69, ${threadAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 3. Render and update dynamic mouse movement trail dots
      for (let i = trailDots.length - 1; i >= 0; i--) {
        const t = trailDots[i];
        t.x += t.vx;
        t.y += t.vy;
        t.vx *= 0.94; // slight drag
        t.vy *= 0.94;
        t.life -= 1;

        const progress = t.life / t.maxLife;
        const currentAlpha = t.alpha * progress;

        if (t.life <= 0) {
          trailDots.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size * (0.6 + 0.4 * progress), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(246, 196, 69, ${currentAlpha})`;
        ctx.shadowColor = "#F6C445";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // Keep trailDots array bounded
      if (trailDots.length > 80) {
        trailDots.splice(0, trailDots.length - 80);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
