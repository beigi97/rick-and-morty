/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E20",
        white: "#FFFFFF",
        secondary: {
          default: "#11B0C8",
          dark: "#0D8A9E",
          third: "#0B6F82",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
