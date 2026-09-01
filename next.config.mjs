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
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
            {
        protocol: "https",
        hostname: "wineryn-store-demo.myshopify.com",
        pathname: "/cdn/shop/**",
      },
          {
        protocol: "https",
        hostname: "dt-winey.myshopify.com",
      },
            {
        protocol: "https",
        hostname: "img.magnific.com",
      },
    ],
  },
};

export default nextConfig;