"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "@phosphor-icons/react/dist/ssr";
import { useCartStore, cartCount } from "@/lib/store/cart-store";

export function CartIndicator() {
  const lines = useCartStore((s) => s.lines);
  const count = cartCount(lines);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted"
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
    >
      <ShoppingBagIcon size={20} weight="regular" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-medium text-accent-foreground">
          {count}
        </span>
      )}
    </Link>
  );
}
