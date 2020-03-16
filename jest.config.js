module.exports = {
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styles-mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js']
}
