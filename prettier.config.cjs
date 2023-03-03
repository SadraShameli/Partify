/** @type {import("prettier").Config} */
const config = {
    printWidth: 160,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSameLine: false,
    trailingComma: 'all',
    bracketSpacing: true,
    tabWidth: 4,
    semi: true,
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
