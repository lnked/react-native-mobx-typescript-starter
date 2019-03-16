module.exports = {
  // preset: 'react-native',
  preset: ['react-native'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testRegex: [
    '(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$',
    '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  ],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/'
  ],
  cacheDirectory: '.jest/cache',
}
