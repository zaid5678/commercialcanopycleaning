/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          surface: '#111111',
          'blue-deep': '#1A5FA8',
          'blue-bright': '#2E8DE8',
          white: '#FFFFFF',
          grey: '#8A8A8A',
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #1A5FA8, #2E8DE8)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #0d1520 100%)',
      },
    },
  },
  plugins: [],
}
