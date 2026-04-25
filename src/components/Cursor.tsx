import { useEffect, useRef, useState } from "react";

/**
 * Portfolio cursor — minimal stellar dot + trailing ring.
 * - Dot: small filled disc, tracks mouse 1:1
 * - Ring: larger outlined circle that eases behind for momentum
 * - Hover: ring expands on interactive elements
 * - Press: dot scales down, ring contracts
 * Uses mix-blend-mode: difference so it stays visible in light & dark themes.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-hover]'
      );
      setHovering(interactive);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const tick = () => {
      // Dot: 1:1
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      // Ring: eased trailing
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  const dotScale = pressed ? 0.6 : hovering ? 0.4 : 1;
  const ringScale = pressed ? 0.85 : hovering ? 1.8 : 1;

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          width: 36,
          height: 36,
          borderRadius: "9999px",
          border: "1.5px solid hsl(var(--primary, 45 90% 60%))",
          mixBlendMode: "difference",
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            transform: `scale(${ringScale})`,
            transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
            border: "1px solid currentColor",
            color: "hsl(var(--primary, 45 90% 60%))",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Center dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "9999px",
          background: "hsl(var(--primary, 45 90% 60%))",
          mixBlendMode: "difference",
          transition: "opacity 0.2s ease",
          willChange: "transform",
          boxShadow: "0 0 12px hsl(var(--primary, 45 90% 60%) / 0.6)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            background: "currentColor",
            color: "hsl(var(--primary, 45 90% 60%))",
            transform: `scale(${dotScale})`,
            transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
    </>
  );
}
