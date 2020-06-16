module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'tests/coverage',
  moduleNameMapper: {
    '^.+\\.(css)$': '<rootDir>/tests/_helpers/file-mock.ts'
  }
}
