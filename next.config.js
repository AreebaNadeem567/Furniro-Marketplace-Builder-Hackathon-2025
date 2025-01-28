/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Strict mode React ke liye enable karta hai
    images: {
      domains: ["cdn.sanity.io"], // Sanity ke image domain ko allowed list mein add karte hain
    },
  };
  
  module.exports = nextConfig;











