/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dtwine.wpenginepowered.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dtwine.wpenginepowered.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;