import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { OCCASIONS } from "@/lib/data/occasions";
import { TiltCard } from "@/components/motion/tilt-card";
import type { Cake } from "@/types/cake";

export function FeaturedProductCard({ cake }: { cake: Cake }) {
  const primaryOccasion = OCCASIONS.find((o) => o.id === cake.occasions[0]);

  return (
    <Link
      href={`/shop/${cake.slug}`}
      className="group grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:gap-16"
    >
      <TiltCard className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[3/4]">
        <Image
          src={cake.images[0].src}
          alt={cake.images[0].alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {primaryOccasion && (
          <Badge className="absolute left-4 top-4 rounded-none border-none bg-rose text-rose-foreground">
            {primaryOccasion.label}
          </Badge>
        )}
      </TiltCard>
      <div>
        <p className="eyebrow text-accent">Featured</p>
        <h3 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
          {cake.name}
        </h3>
        <p className="mt-3 max-w-sm text-muted-foreground">{cake.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-lg text-secondary">From ${cake.basePrice}</span>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-foreground underline-offset-4 group-hover:underline">
            View &amp; customize
            <ArrowUpRightIcon size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
