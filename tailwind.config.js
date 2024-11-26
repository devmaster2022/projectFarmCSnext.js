/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'farm-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        'farm-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
        },
        'farm-brown': {
          500: '#92400e',
          600: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'inner-xl': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '4px',
      },
    },
  },
  plugins: [],
};