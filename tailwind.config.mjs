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
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        editorial: ["PPEditorialNew", "sans-serif"],
      },
    },
  },
  plugins: [],
};
