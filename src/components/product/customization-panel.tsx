"use client";

import { useMemo, useState } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart-store";
import { FLAVORS } from "@/lib/data/occasions";
import type { Cake } from "@/types/cake";

const MESSAGE_LIMIT = 40;

export function CustomizationPanel({ cake }: { cake: Cake }) {
  const [sizeId, setSizeId] = useState(cake.sizes[0].id);
  const [flavor, setFlavor] = useState(cake.flavors[0]);
  const [message, setMessage] = useState("");
  const [justAdded, setJustAdded] = useState(false);
  const addLine = useCartStore((s) => s.addLine);

  const size = cake.sizes.find((s) => s.id === sizeId) ?? cake.sizes[0];
  const price = useMemo(() => cake.basePrice + size.priceModifier, [cake.basePrice, size]);

  const flavorOptions = FLAVORS.filter((f) => cake.flavors.includes(f.id));

  const handleAddToCart = () => {
    addLine({
      cakeSlug: cake.slug,
      name: cake.name,
      image: cake.images[0].src,
      unitPrice: price,
      quantity: 1,
      customization: { sizeId, flavor, message },
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-4xl text-foreground">{cake.name}</h1>
        <p className="mt-2 text-muted-foreground">{cake.tagline}</p>
        <p className="mt-4 text-2xl text-secondary">${price}</p>
      </div>

      <p className="text-sm leading-relaxed text-foreground/80">{cake.description}</p>

      <div>
        <Label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Size
        </Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {cake.sizes.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSizeId(s.id)}
              className={cn(
                "border px-4 py-2 text-sm transition-colors",
                s.id === sizeId
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary"
              )}
            >
              {s.label}
              <span className="ml-2 text-xs opacity-70">{s.serves}</span>
            </button>
          ))}
        </div>
      </div>

      {flavorOptions.length > 1 && (
        <div>
          <Label className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Flavor
          </Label>
          <div className="mt-3 flex flex-wrap gap-2">
            {flavorOptions.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFlavor(f.id)}
                className={cn(
                  "border px-4 py-2 text-sm transition-colors",
                  f.id === flavor
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="cake-message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Message on cake (optional)
        </Label>
        <Textarea
          id="cake-message"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MESSAGE_LIMIT))}
          placeholder="e.g. Happy Birthday, Nina"
          className="mt-3 rounded-none"
          rows={2}
        />
        <p className="mt-1 text-right text-xs text-muted-foreground">
          {message.length}/{MESSAGE_LIMIT}
        </p>
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          size="lg"
          onClick={handleAddToCart}
          className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Add to cart — ${price}
        </Button>
        {justAdded && (
          <p
            role="status"
            className="flex items-center gap-2 text-sm text-secondary"
          >
            <CheckCircleIcon size={16} weight="fill" className="text-accent" />
            Added to your cart.
          </p>
        )}
      </div>
    </div>
  );
}
