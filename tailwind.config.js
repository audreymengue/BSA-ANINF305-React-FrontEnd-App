/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "#0F1FAD",
        colorGreen: "#16C31C",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        jockey: ["Jockey One", "cursive"],
      },
    },
    plugins: [],
  },
};
