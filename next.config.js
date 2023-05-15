/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["http.cat"],
  },
  async redirects() {
    return require("./redirects.json");
  },
};

module.exports = nextConfig;
