import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      login: async (username, password) => {

        const response = await axios.post("http://localhost:3000/api/auth/login", {
            username : username,
            password : password
        })

        const userData = jwtDecode(response.data.data.token)

        set({ token: response.data.data.token, user: userData, isAuthenticated: true, isLoading: false });
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        set({
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
