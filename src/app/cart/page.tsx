"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { useCartStore, cartTotal } from "@/lib/store/cart-store";

export default function CartPage() {
  const lines = useCartStore((s) => s.lines);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const total = cartTotal(lines);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-foreground">Your cart</h1>

      {!hydrated ? null : lines.length === 0 ? (
        <div className="mt-12 border border-dashed border-border py-16 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Button asChild className="mt-6 rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/shop">Browse the collection</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8">
          <div>
            {lines.map((line) => (
              <CartLineItem key={line.id} line={line} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Subtotal
            </span>
            <span className="font-serif text-2xl text-foreground">${total}</span>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-6 w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
