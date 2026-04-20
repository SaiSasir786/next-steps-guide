import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", cmd: "ssh sai@kosuri.dev", delay: 0 },
  { prompt: ">", cmd: "Establishing secure connection…", delay: 600, soft: true },
  { prompt: "✓", cmd: "Authenticated as sai", delay: 1100, ok: true },
  { prompt: "$", cmd: "load-portfolio --mode=production", delay: 1500 },
  { prompt: ">", cmd: "Compiling 3+ years of AI / ML engineering", delay: 2100, soft: true },
  { prompt: "✓", cmd: "Ready. Welcome.", delay: 2700, ok: true },
];

/**
 * Hail-Mary-style terminal boot intro — pure CSS-driven reveal.
 * Renders the same on server and client (no Date.now / Math.random),
 * so it is hydration-safe.
 */
export function BootSequence() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      aria-hidden
      className="font-mono text-[11px] leading-relaxed text-muted-foreground select-none"
    >
      <div className="flex items-center gap-2 mb-3 text-[10px] uppercase tracking-[0.22em]">
        <span className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-destructive/70" />
          <span className="w-2 h-2 rounded-full bg-stellar/70" />
          <span className="w-2 h-2 rounded-full bg-beacon/70" />
        </span>
        <span className="ml-2 text-muted-foreground/70">kosuri.dev — bash</span>
      </div>
      <div className="space-y-1.5">
        {lines.map((l, i) => (
          <div
            key={i}
            className="flex gap-3 opacity-0"
            style={
              mounted
                ? {
                    animation: `fade-up 0.5s cubic-bezier(0.22,1,0.36,1) ${l.delay}ms both`,
                  }
                : undefined
            }
          >
            <span
              className={
                l.ok
                  ? "text-stellar"
                  : l.soft
                    ? "text-muted-foreground/60"
                    : "text-beacon"
              }
            >
              {l.prompt}
            </span>
            <span className={l.soft ? "text-muted-foreground/70" : "text-foreground/85"}>
              {l.cmd}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
