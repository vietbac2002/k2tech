import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"images.unsplash.com",
      },
      {
        hostname:"randomuser.me",
      }
    ]
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
