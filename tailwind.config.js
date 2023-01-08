/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
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