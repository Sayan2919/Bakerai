export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Our wedding cake looked like it came from a magazine, and it tasted even better than it looked.",
    name: "Priya & Aman",
    context: "Wedding, October 2025",
  },
  {
    id: "2",
    quote:
      "I've never had a bakery ask this many questions about what I actually wanted. Worth every one of them.",
    name: "Marcus T.",
    context: "50th birthday",
  },
  {
    id: "3",
    quote:
      "Understated, elegant, and genuinely delicious — not always all three at once.",
    name: "Farah K.",
    context: "Anniversary order",
  },
];
