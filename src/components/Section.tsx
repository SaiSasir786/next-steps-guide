import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  index,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-28 lg:py-36 ${className}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Dewan-style massive section header with horizontal rule */}
        <header className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8">
            {index && (
              <span className="font-mono text-[11px] text-stellar tabular-nums tracking-[0.18em]">
                {index}
              </span>
            )}
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                / {eyebrow}
              </p>
            )}
            <span className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[-0.025em] leading-[0.98] text-foreground">
              {title}
            </h2>
            {description && (
              <p className="lg:col-span-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
