/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
        general: ["general", "sans-serif"],
        "space-mono-medium": ["space-mono-medium", "sans-serif"],
        "space-mono-regular": ["space-mono-regular", "sans-serif"],
      },
      colors: {
        green: {
          50: "#e9eab4",
          75: "#d6d88b",
          100: "#b4bb72",
          200: "#b1bd5d",
          300: "#2e5a1c",
        },
        violet: {
          300: "#a18796",
        },
        brown: {
          100: "#c7b198",
          300: "#535238",
        },
      },
    },
  },
  plugins: [],
};
