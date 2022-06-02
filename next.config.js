/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_PROJECT_ID: "e2xnj9f2",
    NEXT_PUBLIC_DATASET: "production",
  },
};

module.exports = nextConfig;
