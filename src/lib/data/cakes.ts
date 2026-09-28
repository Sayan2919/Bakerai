import type { Cake, CakeSize } from "@/types/cake";

const SIZES: CakeSize[] = [
  { id: "6in", label: '6"', serves: "Serves 6–8", priceModifier: 0 },
  { id: "8in", label: '8"', serves: "Serves 12–14", priceModifier: 18 },
  { id: "10in", label: '10"', serves: "Serves 20–24", priceModifier: 36 },
];

export const CAKES: Cake[] = [
  {
    id: "1",
    slug: "eclat-truffle",
    name: "Éclat Truffle",
    tagline: "Dark chocolate ganache, coffee-soaked sponge",
    description:
      "Layers of coffee-soaked dark chocolate sponge, finished in a mirror-glossed ganache with a dusting of cacao. Rich without being heavy — our most requested cake for milestone birthdays.",
    story:
      "Named for the éclat, the burst of shine, on a fresh ganache pour. We temper the chocolate twice to get the mirror finish.",
    basePrice: 58,
    occasions: ["birthday", "celebration", "everyday"],
    flavors: ["chocolate-truffle"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg/1920px-Rich_Chocolate_Truffle_Cake_by_Ramesh_Bakery_in_Bhopal_Madhya_Pradesh.jpg",
        alt: "Dark chocolate truffle cake with glossy ganache finish",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/8-Layer_Chocolate_Hazelnut_Cake.jpg/1920px-8-Layer_Chocolate_Hazelnut_Cake.jpg",
        alt: "Cross-section of layered chocolate hazelnut cake",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "velvet-noir",
    name: "Velvet Noir",
    tagline: "Classic red velvet, whipped cream cheese",
    description:
      "Our take on the Southern classic — a cocoa-kissed crumb dyed deep and finished with a tangy, barely-sweet cream cheese frosting. Elegant enough for a wedding table, easy enough for Tuesday.",
    story:
      "Velvet Noir is the cake we bring to our own family gatherings. It took eleven test batches to get the crumb this tender.",
    basePrice: 62,
    occasions: ["wedding", "anniversary", "celebration"],
    flavors: ["red-velvet"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg/1920px-Red_Velvet_Cake_Waldorf_Astoria.jpg",
        alt: "Red velvet cake with cream cheese frosting",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Red_velvet_cake_slice.jpg/1920px-Red_velvet_cake_slice.jpg",
        alt: "Slice of red velvet cake showing crumb detail",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "vanille-lavande",
    name: "Vanille & Lavande",
    tagline: "Madagascar vanilla bean, wild lavender",
    description:
      "A pale, delicate crumb built on real vanilla bean and a whisper of culinary lavender. Understated and floral — a favourite for garden weddings and quiet anniversaries.",
    story:
      "We steep the lavender in warm cream for exactly nine minutes — any longer and it turns soapy, any less and you lose the perfume.",
    basePrice: 60,
    occasions: ["wedding", "anniversary", "everyday"],
    flavors: ["vanilla-bean"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Vanilla_Bean_Lavender_with_Salted_Caramel_Vegan_Cup_cake_%283568642009%29.jpg/1920px-Vanilla_Bean_Lavender_with_Salted_Caramel_Vegan_Cup_cake_%283568642009%29.jpg",
        alt: "Vanilla bean and lavender cake with delicate crumb",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Vanilla_Bean_Lavender_with_Salted_Caramel_Vegan_Cup_cake_%283569452158%29.jpg/1920px-Vanilla_Bean_Lavender_with_Salted_Caramel_Vegan_Cup_cake_%283569452158%29.jpg",
        alt: "Close-up of vanilla bean lavender cake crumb",
      },
    ],
    featured: false,
  },
  {
    id: "4",
    slug: "pistache-rose",
    name: "Pistache & Rose",
    tagline: "Toasted pistachio, rosewater cream",
    description:
      "Toasted Sicilian pistachio folded through a fine crumb, layered with a rosewater-scented cream. Green and blush throughout — as beautiful cut open as it is whole.",
    story:
      "This cake started as an experiment for a friend's engagement party. It never left the menu.",
    basePrice: 66,
    occasions: ["wedding", "anniversary", "celebration"],
    flavors: ["pistachio-rose"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Double_crumble_pistachio_cake_%281%29.jpg/1920px-Double_crumble_pistachio_cake_%281%29.jpg",
        alt: "Pistachio cake with crumble topping",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Double_crumble_pistachio_cake_%28close-up%29.jpg/1920px-Double_crumble_pistachio_cake_%28close-up%29.jpg",
        alt: "Close-up of pistachio cake crumb and topping",
      },
    ],
    featured: true,
  },
  {
    id: "5",
    slug: "citron-fleur",
    name: "Citron & Fleur",
    tagline: "Meyer lemon curd, elderflower syrup",
    description:
      "Bright Meyer lemon curd between soft layers, brushed with an elderflower syrup that keeps every bite moist. Our lightest cake — a warm-weather favourite.",
    story:
      "We candy our own lemon peel for the garnish, in small batches, the old-fashioned way.",
    basePrice: 58,
    occasions: ["everyday", "celebration", "anniversary"],
    flavors: ["lemon-elderflower"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Lemon_Cake_-_Olea_2025-08-17.jpg/1920px-Lemon_Cake_-_Olea_2025-08-17.jpg",
        alt: "Lemon cake with citrus glaze",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Slice_of_Lemon_Cake.jpg/1920px-Slice_of_Lemon_Cake.jpg",
        alt: "Slice of lemon cake showing curd layer",
      },
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "caramel-fleur-de-sel",
    name: "Caramel & Fleur de Sel",
    tagline: "Salted caramel, brown butter sponge",
    description:
      "A brown-butter sponge layered with slow-cooked caramel and finished with a scatter of fleur de sel. Deep, a little smoky, never cloying.",
    story:
      "The caramel is cooked to the edge of burnt, then pulled back with cold cream — that's where the flavour lives.",
    basePrice: 64,
    occasions: ["birthday", "celebration", "everyday"],
    flavors: ["salted-caramel"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Sea_Salt_Caramel%2C_Banana_%26_Pecan_Cake_-_GAIL%27s_2025-06-11.jpg/1920px-Sea_Salt_Caramel%2C_Banana_%26_Pecan_Cake_-_GAIL%27s_2025-06-11.jpg",
        alt: "Salted caramel layer cake with pecan topping",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Devil%27s_Food_Chocolate_Cake_with_Salted_Caramel_and_Banana_Twill_%2811900841945%29.jpg/1920px-Devil%27s_Food_Chocolate_Cake_with_Salted_Caramel_and_Banana_Twill_%2811900841945%29.jpg",
        alt: "Chocolate cake with salted caramel drip and banana twill",
      },
    ],
    featured: true,
  },
  {
    id: "7",
    slug: "the-atelier-wedding-tier",
    name: "The Atelier Wedding Tier",
    tagline: "Three tiers, built to your day",
    description:
      "Our signature three-tier wedding cake, built from any two flavours in the collection, finished in hand-piped buttercream with fresh floral accents. Priced per tier — consult with us for your full quote.",
    story:
      "Every Atelier tier is a working conversation between you and our head baker — no two ever come out the same.",
    basePrice: 220,
    occasions: ["wedding"],
    flavors: ["vanilla-bean", "red-velvet", "pistachio-rose"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Pink_decorated_wedding_cake_tiered.jpg/1920px-Pink_decorated_wedding_cake_tiered.jpg",
        alt: "Three-tier wedding cake with blush floral decoration",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Colorful_three_tiered_wedding_cake_LCP.jpg/1920px-Colorful_three_tiered_wedding_cake_LCP.jpg",
        alt: "Tiered wedding cake on display stand",
      },
    ],
    featured: true,
  },
  {
    id: "8",
    slug: "petite-celebration",
    name: "Petite Celebration",
    tagline: "A smaller cake, all the occasion",
    description:
      "A single-tier celebration cake in your choice of flavour, hand-finished with a simple piped border and a name plaque. Built for birthdays that deserve more than a grocery-store box.",
    story:
      "Petite Celebration was born from customers asking for something between a cupcake order and a full tiered cake.",
    basePrice: 48,
    occasions: ["birthday", "celebration"],
    flavors: ["chocolate-truffle", "vanilla-bean", "lemon-elderflower"],
    sizes: SIZES,
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Birthday_Cake_%28decorated%29.jpg/1920px-Birthday_Cake_%28decorated%29.jpg",
        alt: "Decorated birthday celebration cake",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/A_well_decorated_mango_flavoured_cake_during_birthday_celebration.jpg/1920px-A_well_decorated_mango_flavoured_cake_during_birthday_celebration.jpg",
        alt: "Decorated celebration cake with piped border",
      },
    ],
    featured: false,
  },
];

export function getCakes(): Cake[] {
  return CAKES;
}

export function getFeaturedCakes(): Cake[] {
  return CAKES.filter((cake) => cake.featured);
}

export function getCakeBySlug(slug: string): Cake | undefined {
  return CAKES.find((cake) => cake.slug === slug);
}
