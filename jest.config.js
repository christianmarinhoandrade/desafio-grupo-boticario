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
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/fileMock.js',
    '\\.(css|less)$': '<rootDir>/.jest/fileMock.js'
  }
}
