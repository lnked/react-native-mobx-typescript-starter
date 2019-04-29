module.exports = (api) => {
  const test = api.env('test');
  const production = api.env('production');
  const development = api.env('development');

  console.log({ test, production, development });

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'mobx',
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread'],
      ['module-resolver', {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        alias: {
          '@': './src',
        },
      }],
    ],
    comments: false,
  };
};
