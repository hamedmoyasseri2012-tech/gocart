import { create } from "zustand";

const useCartStore = create((set) => ({
  quantity: 1,

  increase: () =>
    set((state) => ({
      quantity: state.quantity + 1,
    })),

  decrease: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1,
    })),

  resetQuantity: () =>
    set({
      quantity: 1,
    }),
}));

export default useCartStore;
