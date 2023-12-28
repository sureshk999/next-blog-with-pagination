// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/
//   });
  
//   const nextConfig = {
//     // Your existing nextConfig options here
//   };
  
//   module.exports = withMDX({
//     ...nextConfig,
//     pageExtensions: ['js', 'jsx', 'md', 'mdx']
//   });
  
  // For adding external images

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });
  
  const nextConfig = {

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        // Add more patterns as needed
      ],
    },

  };
  
  module.exports = withMDX({
    ...nextConfig,
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  });

  