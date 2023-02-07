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
            colors: {
                primary: {
                    dark: '#0071e3',
                    DEFAULT: '#0071e3',
                    light: '#0071e3',
                },
                'primary-hover': {
                    dark: '#0077ed',
                    DEFAULT: '#0077ed',
                    light: '#0077ed',
                },
                secondary: {
                    dark: '#0071e3',
                    DEFAULT: '#57534e',
                    light: '#0071e3',
                },
                accent: {
                    dark: '#0071e3',
                    DEFAULT: '#37CDBE',
                    light: '#0071e3',
                },
                neutral: {
                    dark: '#cecece',
                    DEFAULT: '#1d1d1f',
                    light: '#1d1d1f',
                },
                base: {
                    dark: '#000',
                    DEFAULT: '#fff',
                    light: '#fff',
                },
                info: {
                    dark: colors.blue[600],
                    DEFAULT: colors.blue[600],
                    light: colors.blue[800],
                },
                success: {
                    dark: colors.green[700],
                    DEFAULT: colors.green[700],
                    light: colors.green[700],
                },
                warning: {
                    dark: colors.yellow[700],
                    DEFAULT: colors.yellow[700],
                    light: colors.yellow[800],
                },
                error: {
                    dark: colors.red[600],
                    DEFAULT: colors.red[600],
                    light: colors.red[600],
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addVariant }) {
            addVariant('children', '& > *'), addVariant('all-children', '& *');
        },
    ],
};
