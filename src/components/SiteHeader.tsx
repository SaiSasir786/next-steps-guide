import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#expertise", label: "Mission" },
  { href: "/#projects", label: "Logs" },
  { href: "/#stack", label: "Systems" },
  { href: "/#about", label: "Crew" },
  { href: "/#contact", label: "Comms" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const d = new Date();
      const utc = d.toISOString().slice(11, 19);
      setTime(`UTC ${utc}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full border border-stellar/40 flex items-center justify-center">
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary via-stellar to-accent animate-pulse-stellar" />
            <span className="relative font-mono font-bold text-[10px] text-background z-10">
              SK
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold tracking-tight text-sm">
              SAI SASIR · K
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
              Mission Specialist
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-stellar transition-colors"
            >
              <span className="text-stellar/40 mr-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            {time}
          </span>
          <span className="inline-flex items-center gap-2 rounded-sm border border-stellar/40 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-stellar" />
            ONLINE
          </span>
        </div>
      </div>
    </header>
  );
}
