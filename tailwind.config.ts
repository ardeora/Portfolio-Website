import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        "rotate-clockwise": "rotate-clockwise 20s linear infinite",
        "rotate-anticlockwise": "rotate-anticlockwise 20s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "rotate-clockwise": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "rotate-anticlockwise": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      colors: {
        woodsmoke: {
          "50": "#f5f6f6",
          "100": "#e6e7e7",
          "200": "#cfd2d2",
          "300": "#aeb2b1",
          "400": "#858b8a",
          "500": "#6a706f",
          "600": "#5b5f5f",
          "700": "#4d5151",
          "800": "#444645",
          "900": "#3b3e3e",
          "950": "#171818",
        },

        "nav-1": {
          "50": "#fbffe7",
          "100": "#f4ffc1",
          "200": "#eeff86",
          "300": "#ecff41",
          "400": "#f2ff0d",
          "500": "#ffff01",
          "600": "#d1bf00",
          "700": "#a68b02",
          "800": "#896c0a",
          "900": "#74580f",
          "950": "#443004",
        },
        "nav-2": {
          "50": "#f6fee7",
          "100": "#eafdca",
          "200": "#d6fa9c",
          "300": "#aff24b",
          "400": "#9ee833",
          "500": "#7dce14",
          "600": "#60a50b",
          "700": "#497d0e",
          "800": "#3c6311",
          "900": "#345413",
          "950": "#192e05",
        },
        "nav-3": {
          "50": "#eefff3",
          "100": "#d8ffe6",
          "200": "#b4fecd",
          "300": "#7afba8",
          "400": "#5cf291",
          "500": "#0fd857",
          "600": "#06b344",
          "700": "#098c38",
          "800": "#0d6e31",
          "900": "#0d5a2a",
          "950": "#003314",
        },
        "nav-4": {
          "50": "#edfffd",
          "100": "#c2fff9",
          "200": "#85fff3",
          "300": "#40ffee",
          "400": "#07f2db",
          "500": "#00dbc8",
          "600": "#00b1a5",
          "700": "#008c85",
          "800": "#006f6a",
          "900": "#065b57",
          "950": "#003738",
        },
        lwj: {
          1: "#D459AB",
          2: "#FF8266",
          3: "#FFDE38",
          4: "#A1FCA6",
          5: "#A8FFFB",
        },
        cmu: {
          "50": "#fff1f1",
          "100": "#ffe4e4",
          "200": "#fecdcf",
          "300": "#fda4a8",
          "400": "#fb717b",
          "500": "#f53e50",
          "600": "#e21c39",
          "700": "#c41230",
          "800": "#9f122e",
          "900": "#88132e",
          "950": "#4c0514",
        },
        iu: {
          "50": "#ffeeee",
          "100": "#ffdada",
          "200": "#ffbbbb",
          "300": "#ff8b8c",
          "400": "#ff494a",
          "500": "#ff1113",
          "600": "#ff0002",
          "700": "#e70002",
          "800": "#be0001",
          "900": "#990001",
          "950": "#560001",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        editorial: ["PPEditorial", "sans-serif"],
        "daily-shine": ["DailyShine", "sans-serif"],
        lwj: ["LWJ", "sans-serif"],
      },
    },

    screens: {
      "640": "640px",

      "720": "720px",

      "768": "768px",

      "856": "856px",

      "948": "948px",

      "1024": "1024px",

      "1280": "1280px",

      "1536": "1536px",
    },
  },
} satisfies Config;
