import { create } from "zustand";
import { persist } from "zustand/middleware";
import data from "../data/data.js";

const initialState = {
  isLoading: true,
  products: [],
  product: [],
  categories: [],
  selectedCategory: "",
  filteredProducts: [],
  bookingData: [],
  checkoutData: [],
};

const useStore = create(
  persist(
    (set) => ({
      ...initialState,

      fetchProducts: async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const categories = new Set(data.map((product) => product.category));

          set({
            isLoading: false,
            products: data,
            categories: [...categories],
            filteredProducts: data,
          });
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },

      setSelectedCategory: (category) =>
        set((state) => ({ ...state, selectedCategory: category })),

      filterProducts: () =>
        set((state) => ({
          filteredProducts: state.selectedCategory
            ? state.products.filter(
                (product) => product.category === state.selectedCategory
              )
            : state.products,
        })),

      setBookingData: (bookingData) => set({ bookingData }),
      setCheckoutData: (checkoutData) => set({ checkoutData }),
    }),
    {
      name: "bolangTravelStore",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
