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
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              {index && (
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  {index}
                </span>
              )}
              {eyebrow && (
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {eyebrow}
                </p>
              )}
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-foreground">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
