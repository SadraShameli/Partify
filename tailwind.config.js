/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1152px',
                },
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#9d174d',
                    secondary: '#57534e',
                    accent: '#37CDBE',
                    neutral: '#3D4451',
                    'base-100': '#FFFFFF',
                    info: '#0288d1',
                    success: '#2e7d32',
                    warning: '#ed6c02',
                    error: '#d32f2f',
                },
            },
            {
                dark: {
                    primary: '#9d174d',
                    secondary: '#57534e',
                    accent: '#37CDBE',
                    neutral: '#3D4451',
                    'base-100': '#000000',
                    'base-300': 'rgba(204,204,204,0.8)',
                    info: '#29b6f6',
                    success: '#66bb6a',
                    warning: '#ffa726',
                    error: '#f44336',
                },
            },
        ],
        logs: false,
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
