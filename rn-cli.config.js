module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx', 'js', 'jsx'];
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
}
