module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@contexts': '<rootDir>/src/contexts$1',
    '^@constants': '<rootDir>/src/appConstants',
    '^@hooks': '<rootDir>/src/hooks$1',
    '^@models': '<rootDir>/src/models$1',
    '^@services': '<rootDir>/src/services/**',
  },
}
