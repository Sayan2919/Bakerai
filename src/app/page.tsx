import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCakes } from "@/components/home/featured-cakes";
import { StoryTeaser } from "@/components/home/story-teaser";
import { TestimonialsStrip } from "@/components/home/testimonials-strip";
import { ClosingCta } from "@/components/home/closing-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCakes />
      <StoryTeaser />
      <TestimonialsStrip />
      <ClosingCta />
    </>
  );
}
