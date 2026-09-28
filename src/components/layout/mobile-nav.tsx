"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted md:hidden"
          aria-label="Open menu"
        >
          <ListIcon size={22} weight="regular" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl tracking-[0.1em]">
            Bakerai
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
