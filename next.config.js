/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:80/:path*',
            },
        ];
    },
    images: {
        domains: ['cdn.shopify.com'],
    },
};
