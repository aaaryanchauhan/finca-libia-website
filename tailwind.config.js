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
        olive: {
          400: '#8a8a5c',
          500: '#6b6b42',
          600: '#545434',
          700: '#3d3d26',
        },
        champagne: {
          300: '#d4c4a0',
          400: '#c4b088',
          500: '#b09a6e',
          600: '#96805c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-up-slow': 'fadeUp 1.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 1.2s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
