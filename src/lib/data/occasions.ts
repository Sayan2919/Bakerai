import type { Flavor, Occasion } from "@/types/cake";

export const OCCASIONS: { id: Occasion; label: string }[] = [
  { id: "birthday", label: "Birthday" },
  { id: "wedding", label: "Wedding" },
  { id: "anniversary", label: "Anniversary" },
  { id: "celebration", label: "Celebration" },
  { id: "everyday", label: "Everyday" },
];

export const FLAVORS: { id: Flavor; label: string }[] = [
  { id: "chocolate-truffle", label: "Chocolate Truffle" },
  { id: "vanilla-bean", label: "Vanilla Bean" },
  { id: "red-velvet", label: "Red Velvet" },
  { id: "pistachio-rose", label: "Pistachio Rose" },
  { id: "lemon-elderflower", label: "Lemon Elderflower" },
  { id: "salted-caramel", label: "Salted Caramel" },
];
