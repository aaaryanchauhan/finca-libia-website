/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#1a1816',
          800: '#26231f',
          700: '#322e29',
          600: '#423c35',
          500: '#5a534a',
          400: '#7a7166',
          300: '#9a9084',
          200: '#b8aea0',
          100: '#d4ccc0',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#f9f6ef',
          200: '#f2ece1',
          300: '#e8dfd0',
          400: '#d8ccb8',
        },
        stone: {
          50: '#f5f3ef',
          100: '#e8e3da',
          200: '#d1c9bb',
          300: '#b5ab98',
          400: '#948a78',
          500: '#7a7062',
          600: '#5e564a',
        },
        champagne: {
          200: '#e6d8b8',
          300: '#d4c4a0',
          400: '#c4b088',
          500: '#b09a6e',
          600: '#96805c',
          700: '#7a6747',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
        'widest-4': '0.4em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
