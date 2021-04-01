const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  // distDir: "example",
  compress: false,
  poweredByHeader: false,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  // Enforce static build id
  generateBuildId: () => "bazel",
});
