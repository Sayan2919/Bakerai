import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

export function StoryTeaser() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <ScrollReveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-[560px]">
          <Image
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/CLOSEUP_OF_A_ROSETTE_MADE_BY_GERMAN_IMMIGRANT_HANS_STRZYSO_WHO_IS_CHIEF_BAKER_AT_MADSENS_SUPERMARKET._HE_SPECIALIZES..._-_NARA_-_558348.jpg/1920px-CLOSEUP_OF_A_ROSETTE_MADE_BY_GERMAN_IMMIGRANT_HANS_STRZYSO_WHO_IS_CHIEF_BAKER_AT_MADSENS_SUPERMARKET._HE_SPECIALIZES..._-_NARA_-_558348.jpg"
            alt="A baker piping a buttercream rosette by hand"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="px-6 py-16 sm:px-12 md:px-16">
          <p className="eyebrow text-secondary-foreground/80">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Every cake, built by hand, for one table.
          </h2>
          <p className="mt-6 max-w-md text-secondary-foreground/80">
            We don&apos;t keep a freezer case. Every order starts with a
            conversation about your occasion, your flavors, and the people
            you&apos;re feeding — then it&apos;s built from scratch, in small
            batches, in the days before it reaches you.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-8 rounded-none border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
          >
            <Link href="/about">Read our story</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
