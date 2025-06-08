@type {import('tailwindcss').Config} */
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
        brand: {
          50: '#F9FAFB',
          100: '#FFFFFF',
          900: '#0F172A',
        },
        surface: {
          0:  '#fafafa',
          900:'#111827',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
