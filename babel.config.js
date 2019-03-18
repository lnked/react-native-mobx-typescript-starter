module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'mobx',
  ],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['module-resolver', {
      'root': ['./src'],
      'extensions': ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
      'alias': {
        '@': './src',
      },
    }],
  ],
};
