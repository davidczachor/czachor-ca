// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.licdn.com',
      },
    ],
  },
};

export default nextConfig;
