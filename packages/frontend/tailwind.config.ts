import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',
        },
        accent: {
          DEFAULT: '#6366f1',
        },
        surface: {
          light: '#f9fafb',
          dark: '#1f2937',
        },
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
} satisfies Config;
