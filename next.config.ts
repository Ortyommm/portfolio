import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            '*.svg': {
                loaders: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            dimensions: false,
                        },
                    },

                ],
                as: '*.js',
            },
        },
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        dimensions: false,
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
