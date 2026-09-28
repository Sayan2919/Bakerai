"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { OCCASIONS, FLAVORS } from "@/lib/data/occasions";
import type { Occasion, Flavor } from "@/types/cake";

function useFilterState() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const occasions = searchParams.getAll("occasion") as Occasion[];
  const flavors = searchParams.getAll("flavor") as Flavor[];

  const toggle = (key: "occasion" | "flavor", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll(key);
    params.delete(key);
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    next.forEach((v) => params.append(key, v));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clear = () => router.push(pathname, { scroll: false });

  return { occasions, flavors, toggle, clear };
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-3.5 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-secondary hover:border-primary hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function FilterBar() {
  const { occasions, flavors, toggle, clear } = useFilterState();
  const hasFilters = occasions.length > 0 || flavors.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Occasion
        </span>
        {OCCASIONS.map((o) => (
          <Chip key={o.id} active={occasions.includes(o.id)} onClick={() => toggle("occasion", o.id)}>
            {o.label}
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Flavor
        </span>
        {FLAVORS.map((f) => (
          <Chip key={f.id} active={flavors.includes(f.id)} onClick={() => toggle("flavor", f.id)}>
            {f.label}
          </Chip>
        ))}
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clear}
          className="ml-auto text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
