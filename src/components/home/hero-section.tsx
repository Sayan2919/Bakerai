"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SplitTextHeading } from "@/components/motion/split-text-heading";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        },
        () => {
          if (!sectionRef.current || !bgRef.current) return;

          gsap.to(bgRef.current, {
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=100%",
              scrub: 1,
              pin: true,
              pinSpacing: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[90vh] min-h-[560px] items-end overflow-hidden bg-primary"
    >
      <div ref={bgRef} className="absolute inset-0 -top-16 scale-110">
        <Image
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Sea_Salt_Caramel%2C_Banana_%26_Pecan_Cake_-_GAIL%27s_2025-06-11.jpg/1920px-Sea_Salt_Caramel%2C_Banana_%26_Pecan_Cake_-_GAIL%27s_2025-06-11.jpg"
          alt="A handcrafted layer cake, finished with caramel and toasted pecans"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-primary/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          Atelier de Gâteaux
        </p>
        <SplitTextHeading
          as="h1"
          className="mt-4 max-w-2xl text-5xl font-medium leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl"
        >
          Handcrafted, made to order.
        </SplitTextHeading>
        <p className="mt-6 max-w-md text-base text-primary-foreground/80">
          Custom cakes built around your flavors, your size, your occasion —
          baked to order, never from a freezer case.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-accent px-8 text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/shop">Browse the collection</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none border-primary-foreground/40 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/about">Our story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
