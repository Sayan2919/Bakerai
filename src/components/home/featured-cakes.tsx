import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProductCard } from "@/components/shop/product-card";
import { getFeaturedCakes } from "@/lib/data/cakes";

export function FeaturedCakes() {
  const cakes = getFeaturedCakes().slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-accent">The Collection</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
            Recently in the atelier
          </h2>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-secondary hover:text-foreground"
        >
          View all cakes <ArrowRightIcon size={16} />
        </Link>
      </div>

      <ScrollReveal className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {cakes.map((cake) => (
          <ProductCard key={cake.id} cake={cake} />
        ))}
      </ScrollReveal>
    </section>
  );
}
