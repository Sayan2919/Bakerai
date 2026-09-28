"use client";

import { cn } from "@/lib/utils";
import { OCCASIONS, FLAVORS } from "@/lib/data/occasions";
import type { Occasion, Flavor } from "@/types/cake";

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
        "border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-secondary hover:border-primary hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function FilterBar({
  occasions,
  flavors,
  onToggleOccasion,
  onToggleFlavor,
  onClear,
}: {
  occasions: Occasion[];
  flavors: Flavor[];
  onToggleOccasion: (value: Occasion) => void;
  onToggleFlavor: (value: Flavor) => void;
  onClear: () => void;
}) {
  const hasFilters = occasions.length > 0 || flavors.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow mr-1 text-muted-foreground">Occasion</span>
        {OCCASIONS.map((o) => (
          <Chip key={o.id} active={occasions.includes(o.id)} onClick={() => onToggleOccasion(o.id)}>
            {o.label}
          </Chip>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow mr-1 text-muted-foreground">Flavor</span>
        {FLAVORS.map((f) => (
          <Chip key={f.id} active={flavors.includes(f.id)} onClick={() => onToggleFlavor(f.id)}>
            {f.label}
          </Chip>
        ))}
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={onClear}
          className="eyebrow ml-auto text-muted-foreground hover:text-foreground"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
