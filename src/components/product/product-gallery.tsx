"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CakeImage } from "@/types/cake";

export function ProductGallery({ images }: { images: CakeImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="animate-in fade-in object-cover duration-500"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-20 w-16 overflow-hidden bg-muted transition-opacity",
                i === active ? "opacity-100 ring-1 ring-accent" : "opacity-60 hover:opacity-90"
              )}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
            >
              <Image src={img.src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
