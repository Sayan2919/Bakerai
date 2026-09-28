"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FilterBar } from "@/components/shop/filter-bar";
import { ProductGrid } from "@/components/shop/product-grid";
import type { Cake, Flavor, Occasion } from "@/types/cake";

function toggleValue<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function ShopBrowser({ cakes }: { cakes: Cake[] }) {
  const initialParams = useSearchParams();
  const [occasions, setOccasions] = useState<Occasion[]>(
    () => initialParams.getAll("occasion") as Occasion[]
  );
  const [flavors, setFlavors] = useState<Flavor[]>(
    () => initialParams.getAll("flavor") as Flavor[]
  );

  // Reflect filters in the URL for shareable links, without triggering a
  // Next.js navigation (App Router would otherwise re-fetch this route on
  // every query change, which is what made filtering feel jittery).
  useEffect(() => {
    const params = new URLSearchParams();
    occasions.forEach((o) => params.append("occasion", o));
    flavors.forEach((f) => params.append("flavor", f));
    const query = params.toString();
    const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }, [occasions, flavors]);

  const filteredCakes = useMemo(() => {
    return cakes.filter((cake) => {
      const occasionMatch =
        occasions.length === 0 || cake.occasions.some((o) => occasions.includes(o));
      const flavorMatch =
        flavors.length === 0 || cake.flavors.some((f) => flavors.includes(f));
      return occasionMatch && flavorMatch;
    });
  }, [cakes, occasions, flavors]);

  return (
    <>
      <div className="mt-10">
        <FilterBar
          occasions={occasions}
          flavors={flavors}
          onToggleOccasion={(value) => setOccasions((prev) => toggleValue(prev, value))}
          onToggleFlavor={(value) => setFlavors((prev) => toggleValue(prev, value))}
          onClear={() => {
            setOccasions([]);
            setFlavors([]);
          }}
        />
      </div>

      <div className="mt-12">
        <ProductGrid cakes={filteredCakes} />
      </div>
    </>
  );
}
