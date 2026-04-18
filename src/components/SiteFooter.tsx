import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Transmission End
            </p>
            <h3 className="font-display font-bold text-xl tracking-tight">
              SAI SASIR · K
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Gen-AI & ML Engineer
            </p>
          </div>

          <div className="flex md:justify-center items-center gap-3">
            <SocialLink
              href="https://github.com/saisasir"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/saisasirkosuri/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:saisasir99@gmail.com"
              icon={Mail}
              label="Email"
            />
          </div>

          <div className="md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} · All Systems Nominal
            </p>
            <p className="font-mono text-[10px] text-stellar/60 mt-1">
              "We're not meant to save the world. We're meant to leave it."
            </p>
          </div>
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
      className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:border-stellar hover:text-stellar transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
