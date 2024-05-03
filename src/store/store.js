import { create } from "zustand";
import data from "../data/data.json";

const initialState = {
  isLoading: true,
  products: [],
  product: [],
};

const useStore = create((set) => ({
  ...initialState,

  fetchProducts: async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({
        isLoading: false,
        products: data,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  ProductDetails: (p) => {
    set({ Product: p });
  },
}));

export default useStore;
