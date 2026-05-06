import { useEffect, useRef, useState } from "react";

/**
 * Premium portfolio cursor.
 * - Inner dot tracks the mouse 1:1
 * - Outer thin ring eases behind for smooth momentum
 * - On interactive elements: ring expands and softly fills
 * - On press: dot punches in, ring contracts
 * - Subtle glow trail follows the dot for a luxe stellar feel
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hoverKind, setHoverKind] = useState<"none" | "link" | "text" | "media">("none");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let gx = mx;
    let gy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-hover], [data-cursor]'
      ) as HTMLElement | null;

      if (!interactive) {
        setHoverKind("none");
        setLabel("");
        return;
      }

      const explicit = interactive.getAttribute("data-cursor");
      if (explicit === "media" || interactive.tagName === "IMG" || interactive.tagName === "VIDEO") {
        setHoverKind("media");
      } else if (interactive.tagName === "INPUT" || interactive.tagName === "TEXTAREA") {
        setHoverKind("text");
      } else {
        setHoverKind("link");
      }
      const lbl = interactive.getAttribute("data-cursor-label") || "";
      setLabel(lbl);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      [dotRef, ringRef, glowRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "0";
      });
    };
    const onEnter = () => {
      [dotRef, ringRef, glowRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1";
      });
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
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

  const hovering = hoverKind !== "none";
  const dotScale = pressed ? 0.5 : hoverKind === "text" ? 0 : 1;
  const ringScale = pressed ? 0.85 : hoverKind === "link" ? 1.7 : hoverKind === "media" ? 1.9 : hoverKind === "text" ? 0.5 : 1;
  const ringFill = hovering ? 0.1 : 0;
  const ringBorder = hoverKind === "text" ? 1 : 1.25;

  return (
    <>
      {/* Soft glow trail */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden md:block"
        style={{
          width: 120,
          height: 120,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 22%, transparent) 0%, color-mix(in oklch, var(--primary) 6%, transparent) 40%, transparent 70%)",
          filter: "blur(6px)",
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          width: 38,
          height: 38,
          borderRadius: "9999px",
          border: `${ringBorder}px solid var(--primary)`,
          background: `color-mix(in oklch, var(--primary) ${ringFill * 100}%, transparent)`,
          backdropFilter: hoverKind === "media" ? "blur(2px)" : "none",
          boxShadow: "0 0 18px color-mix(in oklch, var(--primary) 35%, transparent)",
          transform: `scale(${ringScale})`,
          transition:
            "transform 0.28s cubic-bezier(0.22,1,0.36,1), background 0.25s ease, border-width 0.2s ease, opacity 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Hover label (only when explicitly set via data-cursor-label) */}
      {label ? (
        <div
          ref={labelRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
          style={{
            color: "var(--primary-foreground)",
            background: "var(--primary)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 8px",
            borderRadius: 9999,
            marginLeft: 24,
            marginTop: 16,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px color-mix(in oklch, var(--primary) 35%, transparent)",
          }}
        >
          {label}
        </div>
      ) : null}

      {/* Center dot — tracks 1:1 */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: "9999px",
          background: "var(--primary)",
          transform: `scale(${dotScale})`,
          transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1), opacity 0.2s ease",
          boxShadow: "0 0 14px color-mix(in oklch, var(--primary) 70%, transparent), 0 0 4px var(--background)",
          willChange: "transform",
        }}
      />
    </>
  );
}
