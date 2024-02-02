/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      backgroundImage: {
        "gradient-title":
          "linear-gradient(to bottom, #FFFFFF 0%, #5588FF 100%)",
        "gradient-footer-tittle":
          "linear-gradient(to bottom, #FFFFFF 46%, #0000 100%)",
        "gradient-footer-tittle_white":
          "linear-gradient(to bottom, black 46%, black 100%)",
      },
      fontSize: {
        h4: { xl: "3.5rem" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
