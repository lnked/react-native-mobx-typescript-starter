module.exports = {
  displayName: 'test',
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.jsx?$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.tsx?$': 'ts-jest',
  },
  cacheDirectory: '<rootDir>/.cache/.jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|@react-navigation.*)',
  ],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      diagnostics: true,
    },
	},

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // Setup Coverage
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/ios/', '/android/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/node_modules/**'],

  verbose: false,
}
