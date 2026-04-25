import { useEffect, useRef, useState } from "react";

/**
 * Rocky cursor — Eridian from Project Hail Mary.
 * 3D-perspective top-down view of a domed rocky carapace with 5 splayed
 * jointed legs radiating outward. Movement tracks cursor 1:1 (no lag)
 * with subtle leg swing while moving and a grip pose on click.
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
    let prevX = mouseX;
    let prevY = mouseY;
    let raf = 0;
    let t = 0;
    let moving = 0; // decays when idle

    const LEG_COUNT = 5;
    // Splayed forward+sideways like the reference (front 2, mid 2, rear 1)
    // Angles in degrees, 0 = right, 90 = down
    const baseAngles = [-110, -55, 0, 55, 110]; // front-left, front-right, side?, etc.
    // Better: symmetric 5-legged splay (front pair, side pair, rear)
    const legLayout = [
      { ang: -125, len: 1.0 },  // front-left
      { ang: -55, len: 1.0 },   // front-right
      { ang: 0,    len: 0.95 }, // right side
      { ang: 125,  len: 1.0 },  // rear-left  -> using 180-style
      { ang: 55,   len: 0.95 }, // ... will reassign below
    ];
    // Final: 5 legs evenly splayed but biased forward (top of cursor)
    const finalLegs = [
      { ang: -135 }, // top-left
      { ang: -65 },  // top-right
      { ang: -10 },  // right
      { ang: 180 },  // left
      { ang: 110 },  // rear
    ];

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

      const vx = mouseX - prevX;
      const vy = mouseY - prevY;
      const speed = Math.hypot(vx, vy);
      prevX = mouseX;
      prevY = mouseY;

      // moving factor decays so legs settle when idle
      moving = Math.max(0, Math.min(1, moving * 0.85 + speed * 0.15));

      // 1:1 tracking — no lag
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const bodyScale = pressed ? 0.9 : hovering ? 1.12 : 1;
      if (bodyRef.current) {
        // No rotation — Rocky stays oriented (top-down 3D view)
        bodyRef.current.style.transform = `scale(${bodyScale})`;
      }

      for (let i = 0; i < LEG_COUNT; i++) {
        const g = legRefs.current[i];
        if (!g) continue;
        const baseAng = finalLegs[i].ang;

        const phase = (t * 0.18 + i * 1.1) % (Math.PI * 2);
        const wiggle = reduced ? 0 : Math.sin(phase) * (4 + moving * 6);
        const upperSwing = pressed ? -18 : wiggle;
        const lowerBend = pressed ? 70 : 35 + (reduced ? 0 : Math.cos(phase) * 6);

        g.setAttribute(
          "transform",
          `rotate(${baseAng}) translate(4.5 0) rotate(${upperSwing})`
        );
        const lower = g.querySelector("[data-lower]") as SVGGElement | null;
        if (lower) {
          lower.setAttribute("transform", `translate(6.5 0) rotate(${lowerBend})`);
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

  // Rocky stone palette (warm grey/tan with teal joints)
  const stone = "#8a7a66";
  const stoneDark = "#4a3d30";
  const stoneMid = "#6b5b48";
  const stoneLight = "#b09a82";
  const stoneHi = "#d4c2a8";
  const teal = "#2fb5a0";
  const tealDark = "#1a7a6a";

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
        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.45))",
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="-40 -40 80 80"
        style={{ overflow: "visible", display: "block", marginLeft: -40, marginTop: -40 }}
      >
        <defs>
          {/* Domed carapace gradient — light on top, dark on edges for 3D bulge */}
          <radialGradient id="rockyDome" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor={stoneHi} />
            <stop offset="35%" stopColor={stoneLight} />
            <stop offset="70%" stopColor={stone} />
            <stop offset="100%" stopColor={stoneDark} />
          </radialGradient>
          {/* Leg gradient */}
          <linearGradient id="rockyLeg" x1="0" y1="-2" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={stoneLight} />
            <stop offset="50%" stopColor={stone} />
            <stop offset="100%" stopColor={stoneDark} />
          </linearGradient>
        </defs>

        <g
          ref={bodyRef}
          style={{
            transformOrigin: "0 0",
            transformBox: "fill-box",
            transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* GROUND SHADOW under body for grounding */}
          <ellipse cx={0} cy={2} rx={11} ry={4} fill="#000" opacity={0.25} />

          {/* LEGS — render before body so body sits on top */}
          {Array.from({ length: 5 }).map((_, i) => (
            <g
              key={i}
              ref={(el) => {
                legRefs.current[i] = el;
              }}
            >
              {/* Upper segment (shoulder → knee) — tapered */}
              <path
                d="M0 -2.2 L7 -1.6 L7 1.6 L0 2.2 Z"
                fill="url(#rockyLeg)"
                stroke={stoneDark}
                strokeWidth={0.4}
              />
              {/* Knee joint */}
              <circle cx={6.8} cy={0} r={1.6} fill={teal} stroke={tealDark} strokeWidth={0.3} />
              {/* Lower segment (knee → tip) */}
              <g data-lower>
                <path
                  d="M0 -1.7 L6.5 -1.1 L7.5 1.1 L0 1.7 Z"
                  fill="url(#rockyLeg)"
                  stroke={stoneDark}
                  strokeWidth={0.35}
                />
                {/* Tip / claw */}
                <circle cx={7.2} cy={0} r={1} fill={stoneDark} />
              </g>
              {/* Shoulder joint */}
              <circle cx={0} cy={0} r={1.8} fill={stoneDark} />
              <circle cx={-0.4} cy={-0.5} r={0.7} fill={stoneMid} opacity={0.7} />
            </g>
          ))}

          {/* BODY — domed rocky carapace (top-down 3D view) */}
          {/* Outer ring (base of dome) */}
          <ellipse cx={0} cy={1} rx={11} ry={9.5} fill={stoneDark} />
          {/* Main dome */}
          <ellipse cx={0} cy={0} rx={10.5} ry={9} fill="url(#rockyDome)" />

          {/* Carapace plates — irregular polygons for rocky look */}
          <path
            d="M-6 -5 L-2 -7 L3 -6.5 L1 -3 L-4 -2 Z"
            fill={stoneMid}
            stroke={stoneDark}
            strokeWidth={0.35}
            opacity={0.55}
          />
          <path
            d="M3 -6.5 L7 -3 L6 0 L1 -3 Z"
            fill={stoneLight}
            stroke={stoneDark}
            strokeWidth={0.35}
            opacity={0.5}
          />
          <path
            d="M-7 -2 L-4 -2 L-3 2 L-6 4 Z"
            fill={stoneMid}
            stroke={stoneDark}
            strokeWidth={0.35}
            opacity={0.55}
          />
          <path
            d="M1 -3 L6 0 L5 4 L0 3 L-3 2 L-4 -2 Z"
            fill={stoneMid}
            stroke={stoneDark}
            strokeWidth={0.35}
            opacity={0.45}
          />
          <path
            d="M-6 4 L-3 2 L0 3 L5 4 L2 7 L-3 7 Z"
            fill={stoneDark}
            stroke={stoneDark}
            strokeWidth={0.35}
            opacity={0.55}
          />

          {/* Specular highlight on top of dome (3D bulge cue) */}
          <ellipse cx={-3} cy={-4.5} rx={3.5} ry={2} fill={stoneHi} opacity={0.55} />
          <ellipse cx={-3.5} cy={-5} rx={1.5} ry={0.8} fill="#fff" opacity={0.35} />

          {/* Teal accent vents (small) */}
          <circle cx={-1} cy={5} r={0.9} fill={teal} opacity={0.85} />
          <circle cx={2} cy={5.5} r={0.7} fill={teal} opacity={0.7} />
          <circle cx={4} cy={-4} r={0.6} fill={teal} opacity={0.75} />
        </g>
      </svg>
    </div>
  );
}
