/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#F8FAFC",
        lightBgPrimary: "#E2E8F0",
        lightText: "#0F172A",
        darkBg: "#1E293B",
        darkText: "#F5F5F5",
        primaryRed: "#D71920",
      },
    },
  },
  plugins: [],
};
