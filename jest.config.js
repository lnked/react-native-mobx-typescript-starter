module.exports = {
  preset: ['react-native'],
  setupFiles: [
    "<rootDir>/node_modules/appcenter/test/AppCenterMock.js",
    "<rootDir>/node_modules/appcenter-analytics/test/AppCenterAnalyticsMock.js",
    "<rootDir>/node_modules/appcenter-crashes/test/AppCenterCrashesMock.js",
    "<rootDir>/node_modules/appcenter-push/test/AppCenterPushMock.js"
  ],
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
