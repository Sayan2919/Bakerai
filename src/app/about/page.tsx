import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "Our Story — Bakerai",
  description: "How Bakerai builds every cake by hand, for one table at a time.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden bg-primary">
        <Image
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg/1920px-Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg"
          alt="A dark chocolate cake finished in glossy ganache"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary via-primary/20 to-transparent">
          <div className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Our Story
            </p>
            <h1 className="mt-3 font-serif text-5xl text-primary-foreground sm:text-6xl">
              Built by hand, for one table.
            </h1>
          </div>
        </div>
      </div>

      <ScrollReveal className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="font-serif text-2xl leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent">
          Bakerai started in a home kitchen, with one oven and a list of
          people asking for a cake that didn&apos;t taste like it came from a
          freezer case. It still runs that way — every order is a
          conversation first, a cake second.
        </p>

        <p className="mt-8 leading-relaxed text-foreground/80">
          We don&apos;t keep a display case of finished cakes. Instead, every
          order starts with a short conversation about the occasion, the
          people you&apos;re feeding, and the flavors that mean something to
          you. From there, our head baker builds your cake from scratch —
          real butter, real vanilla, real fruit — in the days leading up to
          your event.
        </p>

        <blockquote className="my-10 border-l-2 border-accent pl-6 font-serif text-2xl italic text-foreground">
          &ldquo;A cake should taste like someone made it for you, not for a
          shelf.&rdquo;
        </blockquote>

        <p className="leading-relaxed text-foreground/80">
          That philosophy shapes everything, from the six flavors in our core
          collection to the way we build a three-tier wedding cake one
          conversation at a time. We size cakes to the table, not the other
          way around, and we&apos;d rather turn down an order that doesn&apos;t
          give us time to do it properly than rush one out the door.
        </p>

        <p className="mt-8 leading-relaxed text-foreground/80">
          Today, Bakerai still fills orders in small batches, still answers
          the phone personally, and still tastes every batch of frosting
          before it goes on a cake. As we grow, that&apos;s the part we&apos;re
          not willing to change.
        </p>
      </ScrollReveal>
    </div>
  );
}
