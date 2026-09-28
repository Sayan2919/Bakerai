import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { OCCASIONS } from "@/lib/data/occasions";
import { TiltCard } from "@/components/motion/tilt-card";
import type { Cake } from "@/types/cake";

export function ProductCard({ cake }: { cake: Cake }) {
  const primaryOccasion = OCCASIONS.find((o) => o.id === cake.occasions[0]);

  return (
    <Link href={`/shop/${cake.slug}`} className="group block">
      <TiltCard className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={cake.images[0].src}
          alt={cake.images[0].alt}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {primaryOccasion && (
          <Badge className="absolute left-4 top-4 rounded-none border-none bg-rose text-rose-foreground">
            {primaryOccasion.label}
          </Badge>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-primary-foreground">
            View &amp; customize
            <ArrowUpRightIcon size={14} />
          </span>
        </div>
      </TiltCard>
      <div className="mt-5">
        <h3 className="font-serif text-2xl text-foreground">{cake.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{cake.tagline}</p>
        <p className="mt-2 text-sm text-secondary">From ${cake.basePrice}</p>
      </div>
    </Link>
  );
}
