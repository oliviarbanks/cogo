/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
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
        'miami-pink': '#f754a4',
        // Miami Vice blue:
        'miami-blue': '#45a2df',
        // Neon pink (optional):
        'neon-pink': '#f54e95',
        // Neon blue (optional):
        'neon-blue': '#439bd5',
    },
  },
},
  plugins: [],
};
