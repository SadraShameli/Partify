const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        borderRadius: {
            DEFAULT: '0.5rem',
        },
        borderColor: {
            light: colors.gray[200],
            DEFAULT: colors.gray[200],
            dark: colors.zinc[900],
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', 'SF Display', 'Lato', ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                padding: '1.75rem',
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1152px',
                },
            },
            margin: {
                hero: '100px',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#0071e3',
                    secondary: '#57534e',
                    accent: '#37CDBE',
                    neutral: '#1d1d1f',
                    'base-100': '#fff',
                    info: colors.blue[800],
                    success: colors.green[700],
                    warning: colors.yellow[800],
                    error: colors.red[600],
                },
            },
            {
                dark: {
                    primary: '#0071e3',
                    secondary: '#57534e',
                    accent: '#37CDBE',
                    neutral: '#cecece',
                    'base-100': '#000',
                    info: colors.blue[600],
                    success: colors.green[700],
                    warning: colors.yellow[700],
                    error: colors.red[600],
                },
            },
        ],
        logs: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
        function ({ addVariant }) {
            addVariant('children', '& > *'), addVariant('all-children', '& *');
        },
    ],
};
