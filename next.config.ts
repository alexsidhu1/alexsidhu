import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/thoughts/newsletter-01",
        destination: "/thoughts/the-inaugural-newsletter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
