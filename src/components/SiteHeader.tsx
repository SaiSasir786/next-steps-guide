import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/#projects", label: "Projects" },
  { href: "/#stack", label: "Tech Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary via-stellar to-accent" />
            <span className="relative font-mono font-bold text-[10px] text-background z-10">
              SK
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold tracking-tight text-sm">
              SAI SASIR · K
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
              Gen-AI & ML Engineer
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
          <span className="inline-flex items-center gap-2 rounded-sm border border-stellar/40 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-stellar" />
            Open to Work
          </span>
        </div>
      </div>
    </header>
  );
}
