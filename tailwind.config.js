/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6', // Trendy purple
        secondary: '#0369A1', // Trendy blue
        accent: '#FBBF24', // Trendy yellow
        glass: 'rgba(255, 255, 255, 0.1)', // Glassmorphism effect
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #5B21B6, #FBBF24)', // Gradient
      },
      animation: {
        pulse: 'pulse 2s infinite', // Animation example
        fadeIn: 'fade-in 1s ease-in forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};