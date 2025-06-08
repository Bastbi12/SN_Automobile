@type {import('tailwindcss').Config} */
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
        surface: { 0: '#FFFFFF', 100: '#F9FAFB', 900: '#0F172A' },
      },
      borderRadius: { xl: '1.25rem' },
      boxShadow: { card: '0 2px 8px 0 rgb(0 0 0 / 0.08)' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
