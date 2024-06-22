const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["app/**/*.{js,jsx}", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css)$"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    "^.+\\.module\\.(css)$": "identity-obj-proxy",
  },
};
