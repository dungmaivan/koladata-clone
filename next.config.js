/** @type {import('next').NextConfig} */

const { ANALYZE, NEXT_PUBLIC_APP_URL } = process.env

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    output: 'standalone',
    eslint: {
        dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/pricing',
                destination: `${NEXT_PUBLIC_APP_URL}/pricing`,
                permanent: false,
            },
            {
                source: '/reviews',
                destination: `${NEXT_PUBLIC_APP_URL}/reviews`,
                permanent: false,
            },
            {
                source: '/login/',
                destination: `${NEXT_PUBLIC_APP_URL}/login`,
                permanent: false,
            },
        ]
    },
})
