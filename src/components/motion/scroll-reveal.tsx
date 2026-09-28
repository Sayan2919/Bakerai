"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Selector for the children to stagger; defaults to direct children. */
  stagger?: number;
  y?: number;
}

export function ScrollReveal({
  children,
  className,
  stagger = 0.08,
  y = 24,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { reduce: "(prefers-reduced-motion: reduce)", noPreference: "(prefers-reduced-motion: no-preference)" },
        (context) => {
          const { reduce } = context.conditions as { reduce: boolean };
          const el = containerRef.current;
          if (!el) return;
          const targets = el.children.length ? Array.from(el.children) : [el];

          if (reduce) {
            gsap.set(targets, { opacity: 1, y: 0 });
            return;
          }

          gsap.set(targets, { opacity: 0, y });
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
