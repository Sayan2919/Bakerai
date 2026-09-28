import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CAKES, getCakeBySlug } from "@/lib/data/cakes";
import { ProductGallery } from "@/components/product/product-gallery";
import { CustomizationPanel } from "@/components/product/customization-panel";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function generateStaticParams() {
  return CAKES.map((cake) => ({ slug: cake.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cake = getCakeBySlug(slug);
  if (!cake) return {};
  return {
    title: `${cake.name} — Bakerai`,
    description: cake.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cake = getCakeBySlug(slug);
  if (!cake) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <ProductGallery images={cake.images} />
        <CustomizationPanel cake={cake} />
      </ScrollReveal>
    </div>
  );
}
