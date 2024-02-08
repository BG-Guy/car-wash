import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Automobile, Order, OrderItem, Service } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { FormattedAutomobile, FormattedService } from "@/types";
import { toast } from "sonner";

interface CartStore {
  removeAll: any;
  items: (FormattedAutomobile | FormattedService)[];
  totalPrice: number;
  addItem: any;
  removeItem: (id: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      addItem: (itemToAdd: any) => {
        const cartItems = get().items;
        // If the item is an automobile, replace it
        if (itemToAdd.type) {
          const existingItemIndex = cartItems.findIndex((item) => item.type);
          cartItems.splice(existingItemIndex, 1);
          toast.success("Vehicle selected");
          return set({ items: [...get().items, itemToAdd] });
        }
        const isItemExists = cartItems.find(
          (cartItem) => cartItem.id === itemToAdd.id
        );

        if (isItemExists) {
          return toast("Item already in cart.");
        }

        set({
          items: [...get().items, itemToAdd],
        });

        toast.success("Item added to cart.");
      },

      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });

        toast.success("Item removed from cart.");
      },

      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
