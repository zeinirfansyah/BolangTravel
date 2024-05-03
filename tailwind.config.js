/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF",
        secondary: "#00C0E6",
        navy: "#152C5B",
        lightGray: "#F5F6F8",  
        pureGray: "#E5E5E5",
        darkGray:"#B3B3B3",
        textGray:"#8f8f8f",
        pink: "#FF498B"                                     
      }
    },
  },
  plugins: [],
};
