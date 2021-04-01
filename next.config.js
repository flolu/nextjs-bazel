const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  compress: false,
  poweredByHeader: false,
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },

  // Enforce static build id
  generateBuildId: () => "bazel",

  webpack: (config) => {
    // To make Bazel dev server work
    config.watchOptions = { poll: 300 };
    return config;
  },
});
