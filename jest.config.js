module.exports = {
  preset: ['react-native'],
  setupFiles: [],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testRegex: [
    '(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$',
    '(/__tests__/.*|\\.(test|spec))\\.(jsx?|tsx?)$',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  ],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/'
  ],
  modulePaths: ['<rootDir>'],
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
