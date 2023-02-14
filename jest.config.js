/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(png|jpg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^.+.(png|jpg)$': 'jest-transform-stub',
  },

  setupFilesAfterEnv: ['<rootDir>/test/setupTests.tsx'],
};
