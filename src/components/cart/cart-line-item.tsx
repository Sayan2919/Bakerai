"use client";

import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react/dist/ssr";
import { useCartStore } from "@/lib/store/cart-store";
import { FLAVORS } from "@/lib/data/occasions";
import { getCakeBySlug } from "@/lib/data/cakes";
import type { CartLine } from "@/types/cake";

export function CartLineItem({ line }: { line: CartLine }) {
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeLine = useCartStore((s) => s.removeLine);
  const cake = getCakeBySlug(line.cakeSlug);
  const size = cake?.sizes.find((s) => s.id === line.customization.sizeId);
  const flavorLabel = FLAVORS.find((f) => f.id === line.customization.flavor)?.label;

  return (
    <div className="flex gap-4 border-b border-border py-6">
      <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-muted">
        <Image src={line.image} alt={line.name} fill sizes="96px" className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <Link href={`/shop/${line.cakeSlug}`} className="font-serif text-lg text-foreground">
              {line.name}
            </Link>
            <p className="text-sm text-secondary">${line.unitPrice * line.quantity}</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {size?.label ?? line.customization.sizeId} &middot; {flavorLabel ?? line.customization.flavor}
          </p>
          {line.customization.message && (
            <p className="mt-1 text-sm italic text-muted-foreground">
              &ldquo;{line.customization.message}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center border border-border">
            <button
              type="button"
              onClick={() => setQuantity(line.id, line.quantity - 1)}
              className="p-2 hover:bg-muted"
              aria-label="Decrease quantity"
            >
              <MinusIcon size={14} />
            </button>
            <span className="w-8 text-center text-sm">{line.quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(line.id, line.quantity + 1)}
              className="p-2 hover:bg-muted"
              aria-label="Increase quantity"
            >
              <PlusIcon size={14} />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeLine(line.id)}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
          >
            <TrashIcon size={14} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
