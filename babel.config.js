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

// {
//   'presets': [
//     'module:metro-react-native-babel-preset',
//     '@babel/preset-flow'
//   ],
//   'plugins': [
//     '@babel/plugin-syntax-dynamic-import',
//     '@babel/plugin-syntax-import-meta',
//     '@babel/plugin-proposal-class-properties',
//     '@babel/plugin-proposal-json-strings',
//     [
//       '@babel/plugin-proposal-decorators',
//       {
//         'legacy': true
//       }
//     ],
//     '@babel/plugin-proposal-function-sent',
//     '@babel/plugin-proposal-export-namespace-from',
//     '@babel/plugin-proposal-numeric-separator',
//     '@babel/plugin-proposal-throw-expressions',
//     '@babel/plugin-proposal-export-default-from',
//     '@babel/plugin-proposal-logical-assignment-operators',
//     '@babel/plugin-proposal-optional-chaining',
//     [
//       '@babel/plugin-proposal-pipeline-operator',
//       {
//         'proposal': 'minimal'
//       }
//     ],
//     '@babel/plugin-proposal-nullish-coalescing-operator',
//     '@babel/plugin-proposal-do-expressions',
//     '@babel/plugin-proposal-function-bind'
//   ]
// }
