/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.tsx",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInSlow: 'fadeIn 1s ease-in-out',
        fadeInSlower: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      colors: {
        'primary-darkgreen': '#034544',
        'primary-blue': '#2d4470',
        'hover-blue': '#8ca9ff5c',
        'hover-purple': "#3f2d4d",
        'header-color': '#323232',
        'footer-color': '#1c1e23' 
      },
      fontSize: {
        'custom-title-fs': '2rem',
        'custom-heading-fs': '1.5rem',
        'custom-subheading-fs': '1.25rem',
        'custom-p-fs': '1rem',
      },
      transform: {
        'translate-3d': 'translate3d(0px, 0px, 0.1px)'
      }
    },
  },
  plugins: [],
}