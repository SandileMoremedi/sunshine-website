/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_PROJECT_ID: "e2xnj9f2",
    NEXT_PUBLIC_DATASET: "production",
    NEXT_PUBLIC_API_VERSION: "2022-05-31",
    NEXT_PUBLIC_API_KEY: "AIzaSyDfl-5RM3CqfTuxvb6fmmkL0St_cikJZ1k",
    NEXT_PUBLIC_AUTH_DOMAIN: "sunshine-development-c2ee4.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "sunshine-development-c2ee4",
    NEXT_PUBLIC_STORAGE_BUCKET: "sunshine-development-c2ee4.appspot.com",
    NEXT_PUBLIC_MESSAGING_SENDER_ID: "944039709775",
    NEXT_PUBLIC_APP_ID: "1:944039709775:web:7949af70b4a45595666e3a",
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
