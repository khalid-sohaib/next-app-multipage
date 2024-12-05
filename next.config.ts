import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    dirs: ["pages", "components", "lib"], // Directories to lint
  },
  images: {
    domains: ["example.com"], // Add any external image domains here
  },
  productionBrowserSourceMaps: true, // Enable source maps for production
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Custom-Header", value: "my custom header value" }],
      },
    ];
  },
};

export default nextConfig;
