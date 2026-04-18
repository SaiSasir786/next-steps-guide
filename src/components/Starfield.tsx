import { useEffect, useRef } from "react";

/**
 * Animated starfield — slow parallax drift, like deep-space windows
 * on the Endurance / Hail Mary. Pure canvas, GPU-friendly.
 */
export function Starfield({ density = 180 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; z: number; r: number; tw: number };
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
        r: Math.random() * 1.2 + 0.2,
        tw: Math.random() * Math.PI * 2,
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
        // gentle drift
        s.y += dt * 4 * s.z;
        s.x += dt * 1.5 * s.z;
        s.tw += dt * 1.5;
        if (s.y > h) s.y = 0;
        if (s.x > w) s.x = 0;

        const twinkle = 0.6 + Math.sin(s.tw) * 0.4;
        const alpha = s.z * twinkle;
        // warm-tinted stars (mix of amber and cool white)
        const warm = s.r > 0.9;
        ctx.fillStyle = warm
          ? `rgba(255, 210, 140, ${alpha})`
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
