/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: {
          50: "#fffefa",
          100: "#fff7d5",
          200: "#feecaa",
          300: "#fddb74",
          400: "#fbc13c",
          500: "#f9aa16",
          600: "#ea8e0c",
          700: "#c26d0c",
          800: "#9a5512",
          900: "#7c4712",
          950: "#432307",
        },
        woodsmoke: {
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#cfd2d2",
          300: "#aeb2b1",
          400: "#858b8a",
          500: "#6a706f",
          600: "#5b5f5f",
          700: "#4d5151",
          800: "#444645",
          900: "#3b3e3e",
          950: "#171818",
        },
      },
      screens: {
        lg: "960px",
        xs: "480px",
      },
      fontFamily: {
        editorial: ["PPEditorialNew", "sans-serif"],
      },
    },
  },
  plugins: [],
};
