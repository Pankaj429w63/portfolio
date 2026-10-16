/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#8B5CF6',
          700: '#7C3AED',
          800: '#6D28D9',
          900: '#581C87',
        },
        brand: {
          accent: '#A855F7',
          light: '#8B5CF6',
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
      },
      backgroundImage: {
        'purple-radial': 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.18) 0%, rgba(11, 15, 25, 0) 70%)',
        'purple-gradient': 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A855F7 100%)',
      },
    },
  },
  plugins: [],
};
