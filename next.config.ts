import { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true,
        scrollRestoration: true,
        turbo: {
            treeShaking: true,
        },
    },
};