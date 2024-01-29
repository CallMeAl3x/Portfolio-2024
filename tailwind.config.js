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
          "linear-gradient(to bottom, #004dff 0%, #002477 60%, #000000 100%)",
        "gradient-footer-tittle":
          "linear-gradient(to bottom, #FFFFFF 46%, #0000 100%)",
      },
      fontSize: {
        h4: { xl: "3.5rem" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
