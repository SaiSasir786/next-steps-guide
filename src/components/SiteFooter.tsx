import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                <span className="font-mono font-semibold text-[10px] text-background">
                  SK
                </span>
              </div>
              <h3 className="font-medium tracking-tight text-base">
                Sai Sasir Kosuri
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Generative AI &amp; Machine Learning Engineer. Building
              production systems with LLMs, RAG, and autonomous agents.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Sections
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="/#work" className="text-foreground/80 hover:text-foreground link-underline">Selected Work</a></li>
              <li><a href="/#expertise" className="text-foreground/80 hover:text-foreground link-underline">Expertise</a></li>
              <li><a href="/#about" className="text-foreground/80 hover:text-foreground link-underline">About</a></li>
              <li><a href="/#contact" className="text-foreground/80 hover:text-foreground link-underline">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Elsewhere
            </p>
            <div className="flex items-center gap-2">
              <SocialLink href="https://github.com/saisasir" icon={Github} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/saisasirkosuri/" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="mailto:saisasir99@gmail.com" icon={Mail} label="Email" />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              India · Open to remote &amp; relocation
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Sai Sasir Kosuri. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground font-mono">
            Designed &amp; built with React · TanStack Start
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border-bright transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
