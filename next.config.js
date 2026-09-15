const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "g.tlcdn.com", pathname: "/view/**" },
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
