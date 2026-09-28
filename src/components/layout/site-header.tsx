import Link from "next/link";
import { CartIndicator } from "@/components/layout/cart-indicator";
import { AccountLink } from "@/components/layout/account-link";
import { MobileNav } from "@/components/layout/mobile-nav";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-2xl font-medium tracking-[0.15em] text-foreground"
        >
          Bakerai
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <AccountLink />
          <CartIndicator />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
