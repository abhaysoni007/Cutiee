/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFE4E8',
        'soft-violet': '#E6E6FA',
        'cream': '#FFFDD0',
        'rose': '#FFB6C1',
        'lavender': '#E6E6FA',
        'parchment': '#FDF5E6',
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
} 