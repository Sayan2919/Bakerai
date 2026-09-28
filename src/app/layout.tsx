import type { Metadata } from "next";
import { cormorant, montserrat } from "@/lib/fonts";
import { MockSessionProvider } from "@/components/auth/mock-session-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bakerai — Handcrafted Cakes, Made to Order",
  description:
    "Custom homemade cakes for weddings, birthdays, and every occasion in between. Built around your flavors, sized for your table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <MockSessionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MockSessionProvider>
      </body>
    </html>
  );
}
