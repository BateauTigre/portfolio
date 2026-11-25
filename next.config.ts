import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // L'adresse racine envoie vers la version française.
  async redirects() {
    return [{ source: "/", destination: "/fr", permanent: false }];
  },
};

export default nextConfig;
