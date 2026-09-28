import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function ClosingCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
        <h2 className="font-serif text-4xl sm:text-5xl">
          Ready to build your cake?
        </h2>
        <p className="max-w-md text-primary-foreground/75">
          Choose a size, a flavor, and a message — we&apos;ll take it from
          there.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-none bg-accent px-10 text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/shop">Start browsing</Link>
        </Button>
      </ScrollReveal>
    </section>
  );
}
