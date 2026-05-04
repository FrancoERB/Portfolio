/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Textos
        "text-primary": "#fff",
        "secondary": "#6D7F93",
        "blue": "#007BFF",

        // Backgrounds
        "bg-primary": "#000",
        "bg-secondary": "#E2E8F0",
        "bg-accent": "#0F1729",

        // Botones
        "button-primary": "#0F1729",
        "button-hover": "#1E2A44",
      },
    },
  },
  plugins: [],
};