import type { NextConfig } from "next";

const nextConfig: NextConfig = { 
    reactStrictMode: true,
    distDir: 'dist',
    images: {
        domains: ['cdn.sanity.io']
    }
}

export default nextConfig;
