module.exports = async () => {
  return {
    verbose: true,
    rootDir: "/Users/sunhwalee/Documents/spoqa-assignment/",
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
    coveragePathIgnorePatterns: ["src/components/index.ts"],
    moduleNameMapper: {
      "\\.(styles)$": "identity-obj-proxy",
    },
  };
};
