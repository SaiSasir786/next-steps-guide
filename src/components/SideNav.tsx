import { useEffect, useState } from "react";

const sections = [
  { id: "work", label: "work" },
  { id: "expertise", label: "expertise" },
  { id: "stack", label: "corestack" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
];

/**
 * Vertical rotated sidebar nav — Gaurav Dewan inspired.
 * Fixed to left edge, scrollspy highlights active section.
 */
export function SideNav() {
  const [active, setActive] = useState<string>("work");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-0 top-0 bottom-0 z-40 w-12 flex-col items-center justify-center gap-8 border-r border-border bg-background/40 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
        <span className="block w-px h-10 bg-gradient-to-b from-stellar/60 to-transparent" />
      </div>

      <nav className="flex flex-col items-center gap-7">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center"
            >
              <span
                className={`writing-vertical text-[10px] font-mono uppercase tracking-[0.32em] transition-colors duration-300 ${
                  isActive
                    ? "text-stellar"
                    : "text-muted-foreground/60 group-hover:text-foreground"
                }`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {s.label}
              </span>
              {isActive && (
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-stellar" />
              )}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-1">
        <span className="block w-px h-10 bg-gradient-to-t from-stellar/60 to-transparent" />
        <span
          className="text-[9px] font-mono tracking-[0.22em] text-muted-foreground/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SSK · 2026
        </span>
      </div>
    </aside>
  );
}
