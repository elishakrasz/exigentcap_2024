import type { NextConfig } from "next";
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
// const nextConfig = withFonts({});

const nextConfig: NextConfig = { 
    reactStrictMode: true,
    distDir: 'dist',
    images: {
        domains: ['cdn.sanity.io']
    }
}

export default nextConfig;
