import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
