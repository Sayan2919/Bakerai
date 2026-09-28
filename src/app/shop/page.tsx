import { Suspense } from "react";
import type { Metadata } from "next";
import { getCakes } from "@/lib/data/cakes";
import { ShopBrowser } from "@/components/shop/shop-browser";

export const metadata: Metadata = {
  title: "Shop — Bakerai",
  description: "Browse our collection of handcrafted, made-to-order cakes.",
};

export default function ShopPage() {
  const cakes = getCakes();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="eyebrow text-accent">The Collection</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          Every cake, made to order
        </h1>
        <p className="mt-4 text-muted-foreground">
          Pick a starting point below — size, flavor, and any message are all
          yours to customize on the next page.
        </p>
      </div>

      <Suspense fallback={null}>
        <ShopBrowser cakes={cakes} />
      </Suspense>
    </div>
  );
}
