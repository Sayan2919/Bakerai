export type Occasion =
  | "birthday"
  | "wedding"
  | "anniversary"
  | "celebration"
  | "everyday";

export type Flavor =
  | "chocolate-truffle"
  | "vanilla-bean"
  | "red-velvet"
  | "pistachio-rose"
  | "lemon-elderflower"
  | "salted-caramel";

export interface CakeSize {
  id: string;
  label: string;
  serves: string;
  priceModifier: number;
}

export interface CakeImage {
  src: string;
  alt: string;
}

export interface Cake {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  basePrice: number;
  occasions: Occasion[];
  flavors: Flavor[];
  sizes: CakeSize[];
  images: CakeImage[];
  featured: boolean;
}

export interface CakeCustomization {
  sizeId: string;
  flavor: Flavor;
  message: string;
}

export interface CartLine {
  id: string;
  cakeSlug: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  customization: CakeCustomization;
}
