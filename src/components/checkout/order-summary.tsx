"use client";

import Image from "next/image";
import { useCartStore, cartTotal } from "@/lib/store/cart-store";

export function OrderSummary() {
  const lines = useCartStore((s) => s.lines);
  const total = cartTotal(lines);

  return (
    <div className="border border-border p-6">
      <h2 className="font-serif text-xl text-foreground">Order summary</h2>
      <div className="mt-6 space-y-4">
        {lines.map((line) => (
          <div key={line.id} className="flex items-center gap-3">
            <div className="relative h-14 w-12 shrink-0 overflow-hidden bg-muted">
              <Image src={line.image} alt={line.name} fill sizes="48px" className="object-cover" />
            </div>
            <div className="flex-1 text-sm">
              <p className="text-foreground">{line.name}</p>
              <p className="text-muted-foreground">Qty {line.quantity}</p>
            </div>
            <p className="text-sm text-secondary">${line.unitPrice * line.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Total</span>
        <span className="font-serif text-xl text-foreground">${total}</span>
      </div>
    </div>
  );
}
