import { useEffect, useRef, useState } from "react";

/**
 * Rocky cursor — inspired by the Eridian "Rocky" from Project Hail Mary.
 * A small pentagonal carapace with 5 radiating jointed legs.
 * - Legs sway/trail while moving (each leg lags slightly, like walking)
 * - On click: legs contract inward and "grip" (hold body parts in)
 * - Hidden on touch devices, respects prefers-reduced-motion
 */
export function Cursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const legRefs = useRef<Array<SVGPathElement | null>>([]);
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let bodyX = mouseX;
    let bodyY = mouseY;
    let prevBodyX = mouseX;
    let prevBodyY = mouseY;
    let raf = 0;
    let t = 0;

    // 5 legs at 72° apart, starting from the top
    const LEG_COUNT = 5;
    const baseAngles = Array.from({ length: LEG_COUNT }, (_, i) => (i * 360) / LEG_COUNT - 90);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-hover]'
      );
      setHovering(interactive);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      if (wrapRef.current) wrapRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (wrapRef.current) wrapRef.current.style.opacity = "1";
    };

    const tick = () => {
      t += 1;
      // Body follows mouse with slight ease
      const ease = reduced ? 1 : 0.28;
      prevBodyX = bodyX;
      prevBodyY = bodyY;
      bodyX += (mouseX - bodyX) * ease;
      bodyY += (mouseY - bodyY) * ease;

      const vx = bodyX - prevBodyX;
      const vy = bodyY - prevBodyY;
      const speed = Math.hypot(vx, vy);
      const moveAngle = Math.atan2(vy, vx); // radians

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${bodyX}px, ${bodyY}px, 0) translate(-50%, -50%)`;
      }

      // Body subtle scale on press / hover
      if (bodyRef.current) {
        const scale = pressed ? 0.78 : hovering ? 1.18 : 1;
        bodyRef.current.style.transform = `scale(${scale})`;
      }

      // Animate each leg
      const baseLen = pressed ? 5 : 11; // contract on press
      const swayAmp = pressed ? 0 : Math.min(4 + speed * 0.35, 10);

      for (let i = 0; i < LEG_COUNT; i++) {
        const path = legRefs.current[i];
        if (!path) continue;
        const angRad = (baseAngles[i] * Math.PI) / 180;

        // Walking sway: each leg phase-offset, faster when moving
        const phase = (t * 0.18 + i * 1.25) % (Math.PI * 2);
        const sway = reduced ? 0 : Math.sin(phase) * swayAmp * 0.05; // small angular sway

        // Trailing: leg tip drags slightly opposite to motion
        const trailX = -vx * 0.4;
        const trailY = -vy * 0.4;

        // Body anchor (just inside carapace edge)
        const r0 = 4.5;
        const sx = Math.cos(angRad) * r0;
        const sy = Math.sin(angRad) * r0;

        // Knee — outward + perpendicular sway
        const r1 = baseLen * 0.55;
        const perpX = -Math.sin(angRad);
        const perpY = Math.cos(angRad);
        const kx = Math.cos(angRad) * r1 + perpX * sway * 6;
        const ky = Math.sin(angRad) * r1 + perpY * sway * 6;

        // Tip — further out + trail
        const r2 = baseLen + (pressed ? 0 : speed * 0.15);
        // Press grip: pull tips inward toward center
        const tipScale = pressed ? 0.35 : 1;
        const tx = Math.cos(angRad) * r2 * tipScale + trailX * 0.5;
        const ty = Math.sin(angRad) * r2 * tipScale + trailY * 0.5;

        // Quadratic curve via knee for jointed look
        path.setAttribute("d", `M ${sx} ${sy} Q ${kx} ${ky} ${tx} ${ty}`);
      }

      // Rotate whole body subtly toward movement direction
      if (bodyRef.current && speed > 0.5 && !reduced) {
        const deg = (moveAngle * 180) / Math.PI + 90;
        bodyRef.current.style.transform = `rotate(${deg}deg) scale(${pressed ? 0.78 : hovering ? 1.18 : 1})`;
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
  }, [pressed, hovering]);

  if (!enabled) return null;

  // Pentagon points for the carapace (radius ~5)
  const carapace = Array.from({ length: 5 }, (_, i) => {
    const a = ((i * 72 - 90) * Math.PI) / 180;
    return `${Math.cos(a) * 5},${Math.sin(a) * 5}`;
  }).join(" ");

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        width: 0,
        height: 0,
        transition: "opacity 0.2s ease",
        willChange: "transform",
        filter: "drop-shadow(0 0 6px var(--stellar))",
      }}
    >
      <svg
        width="56"
        height="56"
        viewBox="-28 -28 56 56"
        style={{ overflow: "visible", display: "block", marginLeft: -28, marginTop: -28 }}
      >
        <g
          ref={bodyRef}
          style={{
            transformOrigin: "0 0",
            transformBox: "fill-box",
            transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Legs (rendered first so body sits on top) */}
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={i}
              ref={(el) => {
                legRefs.current[i] = el;
              }}
              d="M 0 0 Q 0 0 0 0"
              fill="none"
              stroke="var(--stellar)"
              strokeWidth={1.4}
              strokeLinecap="round"
              opacity={0.95}
            />
          ))}

          {/* Pentagonal carapace — Rocky's body */}
          <polygon
            points={carapace}
            fill="var(--stellar)"
            stroke="var(--stellar)"
            strokeWidth={0.6}
            strokeLinejoin="round"
            opacity={0.95}
          />
          {/* Inner pentagon detail — rocky carapace plates */}
          <polygon
            points={Array.from({ length: 5 }, (_, i) => {
              const a = ((i * 72 - 90) * Math.PI) / 180;
              return `${Math.cos(a) * 2.4},${Math.sin(a) * 2.4}`;
            }).join(" ")}
            fill="none"
            stroke="rgba(0,0,0,0.45)"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
          {/* Tiny center dot */}
          <circle cx={0} cy={0} r={0.8} fill="rgba(0,0,0,0.7)" />
        </g>
      </svg>
    </div>
  );
}
