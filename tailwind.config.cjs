// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
const { emerald } = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './modules/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { ...emerald },
        surface: {
          0: '#F9FAFB',
          100: '#FFFFFF',
          900: '#0F172A',
        },
        // … deine weiteren Tokens
      },
      borderRadius: { xl: '1.25rem' },
      boxShadow: { card: '0 2px 8px 0 rgb(0 0 0 / 0.06)' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
