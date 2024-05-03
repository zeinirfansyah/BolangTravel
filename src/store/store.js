import { create } from "zustand";
import { persist } from "zustand/middleware";
import data from "../data/data.json";

const initialState = {
  isLoading: true,
  products: [],
  product: [],
};

const useStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "bolangTravelStore",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;