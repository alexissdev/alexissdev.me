/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http.cat'],
  },
  async redirects() {
    return require('./redirects.json');
  }
}

module.exports = nextConfig
