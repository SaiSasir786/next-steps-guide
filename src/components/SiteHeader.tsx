import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function useUTC() {
  // Start as null on both server and client to avoid hydration mismatch.
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      return `${hh}:${mm}:${ss} UTC`;
    };
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const utc = useUTC();

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
          <div className="relative w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
            <span className="font-mono font-semibold text-[10px] text-background tracking-tight">
              SK
            </span>
            <span className="absolute -inset-1 rounded-full border border-stellar/30 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <span
            className="hidden lg:inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] text-muted-foreground min-w-[92px]"
            suppressHydrationWarning
          >
            <span className="w-1 h-1 rounded-full bg-beacon animate-pulse-soft" />
            {utc ?? "--:--:-- UTC"}
          </span>
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-border-bright px-4 py-1.5 text-[12px] text-foreground hover:bg-surface transition-colors"
          >
            Resume
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-1.5 text-[12px] font-medium hover:bg-foreground/90 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
            Open to work
          </a>
        </div>
      </div>
    </header>
  );
}
