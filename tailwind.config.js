/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1152px'
        },
      },
    }
  }
}

