module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
  },
}
