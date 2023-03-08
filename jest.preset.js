// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
const nxPreset = require("@nrwl/jest/preset").default;

module.exports = {
  ...nxPreset,
  clearMocks: true,
  modulePathIgnorePatterns: ["/__fixtures__/"],
  testEnvironment: "node",
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "/node_modules/"
    // ],
  
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",
  
    coveragePathIgnorePatterns: [
      '/node_modules/'
    ],
};