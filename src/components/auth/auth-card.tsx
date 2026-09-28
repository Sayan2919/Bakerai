import type { ReactNode } from "react";

export function AuthCard({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <p className="eyebrow text-center text-accent">{eyebrow}</p>
        <h1 className="mt-3 text-center font-serif text-4xl text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-8 border border-border p-8">{children}</div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {footer}
        </p>
      </div>
    </div>
  );
}
