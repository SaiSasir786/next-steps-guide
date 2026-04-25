import { useEffect, useRef, useState } from "react";

/**
 * Rocky cursor — Eridian from Project Hail Mary.
 * Stone-grey blocky carapace with 5 jointed legs and turquoise joint accents.
 * - Legs walk with phase-offset, segments visibly hinge
 * - On click: legs contract/grip inward (holding body parts in)
 * - Body rotates toward direction of travel
 */
export function Cursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const legRefs = useRef<Array<SVGGElement | null>>([]);
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
      const ease = reduced ? 1 : 0.3;
      prevBodyX = bodyX;
      prevBodyY = bodyY;
      bodyX += (mouseX - bodyX) * ease;
      bodyY += (mouseY - bodyY) * ease;

      const vx = bodyX - prevBodyX;
      const vy = bodyY - prevBodyY;
      const speed = Math.hypot(vx, vy);
      const moveAngle = Math.atan2(vy, vx);

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${bodyX}px, ${bodyY}px, 0) translate(-50%, -50%)`;
      }

      const bodyScale = pressed ? 0.85 : hovering ? 1.15 : 1;
      const bodyRot = speed > 0.5 && !reduced ? (moveAngle * 180) / Math.PI + 90 : 0;
      if (bodyRef.current) {
        bodyRef.current.style.transform = `rotate(${bodyRot}deg) scale(${bodyScale})`;
      }

      // Animate each leg (two-segment jointed)
      for (let i = 0; i < LEG_COUNT; i++) {
        const g = legRefs.current[i];
        if (!g) continue;
        const baseAng = baseAngles[i];

        // Walking phase per leg
        const phase = (t * 0.16 + i * 1.25) % (Math.PI * 2);
        const walk = reduced ? 0 : Math.sin(phase);
        // Step lift swings the upper segment back/forth
        const upperSwing = pressed ? -25 : walk * Math.min(8 + speed * 0.6, 18);
        // Lower segment bends opposite for that crawly look
        const lowerBend = pressed ? 55 : 25 + walk * 10;

        g.setAttribute(
          "transform",
          `rotate(${baseAng}) translate(5 0) rotate(${upperSwing})`
        );
        const lower = g.querySelector("[data-lower]") as SVGGElement | null;
        if (lower) {
          lower.setAttribute("transform", `translate(7 0) rotate(${lowerBend})`);
        }
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

  // Stone palette
  const stone = "#8a7560";
  const stoneDark = "#5a4a3a";
  const stoneLight = "#a89078";
  const teal = "#2fb5a0";

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
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.55))",
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="-32 -32 64 64"
        style={{ overflow: "visible", display: "block", marginLeft: -32, marginTop: -32 }}
      >
        <g
          ref={bodyRef}
          style={{
            transformOrigin: "0 0",
            transformBox: "fill-box",
            transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* LEGS — rendered first so body sits on top */}
          {Array.from({ length: 5 }).map((_, i) => (
            <g
              key={i}
              ref={(el) => {
                legRefs.current[i] = el;
              }}
            >
              {/* Upper segment (shoulder → knee) */}
              <rect
                x={0}
                y={-2}
                width={8}
                height={4}
                rx={0.6}
                fill={stone}
                stroke={stoneDark}
                strokeWidth={0.4}
              />
              {/* Knee joint — teal accent */}
              <circle cx={7} cy={0} r={1.4} fill={teal} opacity={0.9} />
              {/* Lower segment (knee → tip) */}
              <g data-lower>
                <rect
                  x={0}
                  y={-1.6}
                  width={7.5}
                  height={3.2}
                  rx={0.5}
                  fill={stoneLight}
                  stroke={stoneDark}
                  strokeWidth={0.4}
                />
                {/* Tip cap */}
                <rect x={6.5} y={-1.2} width={1.4} height={2.4} rx={0.3} fill={stoneDark} />
              </g>
              {/* Shoulder joint */}
              <circle cx={0} cy={0} r={1.6} fill={stoneDark} />
            </g>
          ))}

          {/* BODY — chunky cuboid carapace */}
          {/* Main body block */}
          <rect
            x={-5}
            y={-5.5}
            width={10}
            height={11}
            rx={1.2}
            fill={stone}
            stroke={stoneDark}
            strokeWidth={0.5}
          />
          {/* Top highlight plate */}
          <rect x={-4} y={-5} width={8} height={3.2} rx={0.6} fill={stoneLight} opacity={0.7} />
          {/* Cracks/seams */}
          <line x1={-3} y1={-1} x2={3} y2={-1} stroke={stoneDark} strokeWidth={0.4} opacity={0.6} />
          <line x1={-2} y1={1.5} x2={2.5} y2={2.5} stroke={stoneDark} strokeWidth={0.3} opacity={0.5} />
          {/* Teal accent patches */}
          <rect x={-3.5} y={-4} width={2} height={2} rx={0.4} fill={teal} opacity={0.85} />
          <rect x={2} y={2} width={1.6} height={1.6} rx={0.3} fill={teal} opacity={0.7} />
        </g>
      </svg>
    </div>
  );
}
