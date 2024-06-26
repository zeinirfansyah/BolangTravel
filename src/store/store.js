import { create } from "zustand";
import axios from "axios";

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
  (set) => ({
    ...initialState,

    fetchProducts: async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/travel-packages/table/5&1");
        const data = response.data;
        const categories = new Set(data.data.rows.map((product) => product.category));

        set({ products: data, isLoading: false, filteredProducts: data, categories: [...categories], });
      } catch (error) {
        console.error("Error fetching data:", error);
        set({ error: "Error fetching data", isLoading: false });
      }
    },

    fetchDetailProduct: async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/travel-package/${id}`);
        const data = response.data;
        set({ product: data, isLoading: false });
      } catch (error) {
        console.error("Error fetching data:", error);
        set({ error: "Error fetching data", isLoading: false });
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
);

export default useStore;
