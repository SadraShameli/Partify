/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
      },
      padding: {
        'navbar': '0.5rem'
      },
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
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    logs: false,
  }
}

