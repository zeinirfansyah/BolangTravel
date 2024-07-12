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

export const useAuthStore = create(
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

export const useAuthenticatedUser = create(
  (set) => (
    {
      ...initialState,
      authenticatedUser: async (token) => {
        const response = await axios.get("http://localhost:3000/api/account", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
    
        set ({user: response.data.data})
      },
    }
  )
)

