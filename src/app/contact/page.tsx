import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — Bakerai",
  description: "Get in touch about a custom cake order.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow text-accent">Get in touch</p>
      <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
        Let&apos;s talk about your cake
      </h1>
      <p className="mt-4 text-muted-foreground">
        Tell us about your occasion and we&apos;ll follow up to talk flavors,
        sizing, and timing.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
