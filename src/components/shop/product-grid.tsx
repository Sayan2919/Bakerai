import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProductCard } from "@/components/shop/product-card";
import { FeaturedProductCard } from "@/components/shop/featured-product-card";
import type { Cake } from "@/types/cake";

function isFeaturedSlot(index: number) {
  return index % 5 === 0;
}

export function ProductGrid({ cakes }: { cakes: Cake[] }) {
  if (cakes.length === 0) {
    return (
      <p className="py-24 text-center text-sm text-muted-foreground">
        No cakes match those filters yet — try clearing one.
      </p>
    );
  }

  return (
    <ScrollReveal className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
      {cakes.map((cake, index) =>
        isFeaturedSlot(index) ? (
          <div key={cake.id} className="sm:col-span-2 sm:border-b sm:border-border sm:pb-16">
            <FeaturedProductCard cake={cake} />
          </div>
        ) : (
          <ProductCard key={cake.id} cake={cake} />
        )
      )}
    </ScrollReveal>
  );
}
