module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/pages/**/*.tsx',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/providers/**/*.tsx',
    '!src/routes/**/*.tsx',
    '!src/styles/**/*.ts(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
