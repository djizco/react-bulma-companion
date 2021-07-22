const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  testEnvironment: 'jsdom',
  testMatch: [path.join(__dirname, 'src/**/*.test.js')],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
