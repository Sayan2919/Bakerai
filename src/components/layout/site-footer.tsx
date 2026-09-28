import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl tracking-[0.15em]">Bakerai</span>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              Handcrafted cakes, made to order. Every cake is built for your
              occasion — no two ever come out the same.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-primary-foreground/70">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/shop" className="hover:text-primary-foreground">
                  All cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?occasion=wedding"
                  className="hover:text-primary-foreground"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?occasion=birthday"
                  className="hover:text-primary-foreground"
                >
                  Birthdays
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-primary-foreground/70">Studio</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bakerai. All rights reserved.</p>
          <p>Handcrafted cakes, made to order.</p>
        </div>
      </div>
    </footer>
  );
}
