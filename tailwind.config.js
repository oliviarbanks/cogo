/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        searchField: "0px 8px 12px 0px rgba(0, 0, 0, 0.16)"
      },
      backgroundColor: {
        homeBg: "conic-gradient(from -71deg at 50% 50%, #361752 64.80000257492065deg, #F626C1 223.20000171661377deg, #3A45B3 360deg)"
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem', // 5x large (headings)
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '1rem',
        '4': '1.5rem',
        '5': '2rem',
        '6': '3rem',
        '7': '4rem',
      },
      padding: {
        'half': '0.5rem',
        'full': '1rem',
        'double': '2rem',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        // Miami Vice pink:
        'miami-pink': '#f539b7',
        // Miami Vice blue:
        'miami-blue': '#89FFFD',
        // Neon pink (optional):
        'neon-pink': '#f54e95',
        // Neon blue (optional):
        'neon-blue': '#439bd5',
        'primary-pink': '#F539B7',
        'navbarBg': "rgba(251, 252, 252, 0.85)",
        'miami-white': "#F5FFFF",
        'buttonBlue': "rgba(142, 245, 251, 0.98)",
        'circleOrange': "#FF7355",
        'pillBg': "rgba(255, 255, 255, 0.30)",
        'pillBorder': "#F5FFFF",
        'dalePurp' : "rgba(39, 18, 60, 0.80)",
        'eventPageGray': "#F5FFFF99"
      },
    },
  },
  plugins: [],
};
