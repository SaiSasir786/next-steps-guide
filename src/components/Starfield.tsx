import { useEffect, useRef } from "react";

/**
 * Slow parallax starfield — Endurance / Hail Mary observation-window vibe.
 * Pure canvas, GPU-friendly, respects prefers-reduced-motion.
 */
export function Starfield({ density = 140 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; z: number; r: number; tw: number; warm: boolean };
    let stars: Star[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.7 + 0.3,
        r: Math.random() * 1.1 + 0.2,
        tw: Math.random() * Math.PI * 2,
        warm: Math.random() > 0.78,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        if (!reduced) {
          s.y += dt * 3 * s.z;
          s.x += dt * 1.2 * s.z;
          s.tw += dt * 1.4;
          if (s.y > h) s.y = 0;
          if (s.x > w) s.x = 0;
        }
        const twinkle = 0.55 + Math.sin(s.tw) * 0.45;
        const alpha = s.z * twinkle * 0.85;
        ctx.fillStyle = s.warm
          ? `rgba(255, 215, 150, ${alpha})`
          : `rgba(220, 230, 255, ${alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
