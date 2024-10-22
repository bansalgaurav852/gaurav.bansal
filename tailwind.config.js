/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)', 'transform-origin': '70% 70%' },   // Starting position
          '10%': { transform: 'rotate(14deg)', 'transform-origin': '70% 70%' }, // Move right
          '20%': { transform: 'rotate(-8deg)', 'transform-origin': '70% 70%' }, // Move left
          '30%': { transform: 'rotate(12deg)', 'transform-origin': '70% 70%' }, // Move right
          '40%': { transform: 'rotate(-6deg)', 'transform-origin': '70% 70%' }, // Move left
          '50%': { transform: 'rotate(10deg)', 'transform-origin': '70% 70%' }, // Move right
          '60%': { transform: 'rotate(0deg)', 'transform-origin': '70% 70%' },  // Return to neutral
          '100%': { transform: 'rotate(0deg)', 'transform-origin': '70% 70%' }  // End in neutral position
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',          // 1.5s for a quicker wave, infinite loop
      },
    },
  },
  plugins: [],
}