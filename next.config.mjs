// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "dtwine.wpenginepowered.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "www.dtwine.wpenginepowered.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dtwine.wpenginepowered.com',
      },
       
      {
        protocol: "https",
        hostname: "www.dtwine.wpenginepowered.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;