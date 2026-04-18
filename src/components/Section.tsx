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
    <section id={id} className={`relative scroll-mt-20 py-24 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            {index && (
              <span className="font-mono text-[10px] text-stellar tracking-[0.25em]">
                [{index}]
              </span>
            )}
            {eyebrow && (
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            <span className="flex-1 h-px bg-gradient-to-r from-stellar/40 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
