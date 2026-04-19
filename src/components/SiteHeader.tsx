import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
            <span className="font-mono font-semibold text-[10px] text-background tracking-tight">
              SK
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-medium tracking-tight text-sm text-foreground">
              Sai Sasir Kosuri
            </span>
            <span className="hidden sm:inline text-[11px] text-muted-foreground">
              · Gen-AI Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-[12px] font-medium hover:bg-foreground/90 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
            Available
          </a>
        </div>
      </div>
    </header>
  );
}
