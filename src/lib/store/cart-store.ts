import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine, CakeCustomization } from "@/types/cake";

function lineKey(cakeSlug: string, customization: CakeCustomization) {
  return `${cakeSlug}:${customization.sizeId}:${customization.flavor}:${customization.message}`;
}

interface CartState {
  lines: CartLine[];
  addLine: (line: Omit<CartLine, "id">) => void;
  removeLine: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      addLine: (line) =>
        set((state) => {
          const id = lineKey(line.cakeSlug, line.customization);
          const existing = state.lines.find((l) => l.id === id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.id === id ? { ...l, quantity: l.quantity + line.quantity } : l
              ),
            };
          }
          return { lines: [...state.lines, { ...line, id }] };
        }),
      removeLine: (id) =>
        set((state) => ({ lines: state.lines.filter((l) => l.id !== id) })),
      setQuantity: (id, quantity) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.id === id ? { ...l, quantity } : l))
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
    }),
    { name: "bakerai-cart" }
  )
);

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0);
}

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}
