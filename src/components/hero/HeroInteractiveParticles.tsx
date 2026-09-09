"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  color: string;
  glow: number;
}

export default function HeroInteractiveParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Particle Palette
    const colors = [
      "rgba(0, 212, 255, ",   // Lens Cyan
      "rgba(248, 248, 248, ", // Pure White
      "rgba(200, 240, 255, ", // Ice Blue
      "rgba(119, 119, 119, ", // Muted Grey
    ];

    const particleCount = Math.min(Math.floor((width * height) / 22000), 45);
    const particles: Particle[] = [];

    // Initialize ambient floating particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.05, // gentle upward drift
        size: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.5 + 0.15,
        targetAlpha: Math.random() * 0.5 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.6 ? 6 : 0,
      });
    }

    // Handle Resize
    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and animate ambient floating particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Motion
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around boundaries smoothly
        if (p1.x < -10) p1.x = width + 10;
        if (p1.x > width + 10) p1.x = -10;
        if (p1.y < -10) p1.y = height + 10;
        if (p1.y > height + 10) p1.y = -10;

        // Gentle breathing alpha pulse
        if (Math.abs(p1.alpha - p1.targetAlpha) < 0.01) {
          p1.targetAlpha = Math.random() * 0.5 + 0.15;
        } else {
          p1.alpha += (p1.targetAlpha - p1.alpha) * 0.015;
        }

        // Draw ambient particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha})`;

        if (p1.glow > 0) {
          ctx.shadowColor = "rgba(0, 212, 255, 0.6)";
          ctx.shadowBlur = p1.glow;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    >
      {/* Ambient Floating Light Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
