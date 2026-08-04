/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dtwine.wpenginepowered.com",
      },
    ],
  },
};

export default nextConfig;