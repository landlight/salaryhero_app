module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/app/**/*.js"],
  };
};
