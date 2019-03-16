module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    ['module-resolver', {
      'root': ['./src'],
      'extensions': ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
      'alias': {
        '@': './src',
        'assets': './src/assets',
        'components': './src/components',
        'navigation': './src/navigation',
        'resources': './src/resources',
        'screens': './src/screens',
        'models': './src/models',
        'routes': './src/routes',
        'services': './src/services',
        'utils': './src/utils',
      },
    }],
  ],
};
