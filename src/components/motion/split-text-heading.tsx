"use client";

import { useRef, type ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

interface SplitTextHeadingProps {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}

export function SplitTextHeading({
  children,
  as: Tag = "h1",
  className,
  delay = 0,
}: SplitTextHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        { reduce: "(prefers-reduced-motion: reduce)", noPreference: "(prefers-reduced-motion: no-preference)" },
        (context) => {
          const { reduce } = context.conditions as { reduce: boolean };

          if (reduce) {
            gsap.set(el, { opacity: 1 });
            return;
          }

          const split = new SplitText(el, { type: "words, chars" });
          gsap.from(split.chars, {
            opacity: 0,
            y: 20,
            rotateX: -40,
            duration: 0.6,
            stagger: 0.015,
            ease: "expo.out",
            delay,
          });

          return () => split.revert();
        }
      );

      return () => mm.revert();
    },
    { scope: ref, dependencies: [children] }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
