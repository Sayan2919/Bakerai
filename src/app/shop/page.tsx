import type { Metadata } from "next";
import { getCakes } from "@/lib/data/cakes";
import { ProductGrid } from "@/components/shop/product-grid";
import { FilterBar } from "@/components/shop/filter-bar";
import type { Flavor, Occasion } from "@/types/cake";

export const metadata: Metadata = {
  title: "Shop — Bakerai",
  description: "Browse our collection of handcrafted, made-to-order cakes.",
};

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const occasions = toArray(params.occasion) as Occasion[];
  const flavors = toArray(params.flavor) as Flavor[];

  const cakes = getCakes().filter((cake) => {
    const occasionMatch =
      occasions.length === 0 ||
      cake.occasions.some((o) => occasions.includes(o));
    const flavorMatch =
      flavors.length === 0 || cake.flavors.some((f) => flavors.includes(f));
    return occasionMatch && flavorMatch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          Every cake, made to order
        </h1>
        <p className="mt-4 text-muted-foreground">
          Pick a starting point below — size, flavor, and any message are all
          yours to customize on the next page.
        </p>
      </div>

      <div className="mt-10">
        <FilterBar />
      </div>

      <div className="mt-12">
        <ProductGrid cakes={cakes} />
      </div>
    </div>
  );
}
