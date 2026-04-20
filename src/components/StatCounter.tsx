import { useEffect, useRef, useState } from "react";

/**
 * Animated stat counter — counts up when scrolled into view.
 * SSR-safe: renders the final value as the initial fallback.
 */
export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const [n, setN] = useState(value);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setN(0);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            setStarted(true);
            const start = performance.now();
            const tick = (t: number) => {
              const k = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - k, 3);
              setN(Math.floor(eased * value));
              if (k < 1) requestAnimationFrame(tick);
              else setN(value);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, started]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
