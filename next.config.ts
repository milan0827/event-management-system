import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 4,
  },
};

export default nextConfig;
