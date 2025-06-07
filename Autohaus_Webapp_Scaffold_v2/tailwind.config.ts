import type { Config } from 'tailwindcss';
import { emerald } from 'tailwindcss/colors';

export default <Config>{
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { ...emerald },
        surface: {
          0: '#F9FAFB',
          100: '#FFFFFF',
          900: '#0F172A',
        },
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
