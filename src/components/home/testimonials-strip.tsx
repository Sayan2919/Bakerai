import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-accent">
        From Our Customers
      </p>

      <ScrollReveal className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.id} className="border-t border-border pt-6">
            <blockquote className="font-serif text-xl leading-snug text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {t.name} &mdash; {t.context}
            </figcaption>
          </figure>
        ))}
      </ScrollReveal>
    </section>
  );
}
