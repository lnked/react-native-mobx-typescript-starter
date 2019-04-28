// "use strict"

// let { each } = require('lodash');
// const React = require('react');
// const ReactNative = React;

// // Base Components

// function createMockComponent(componentName) {
//   return () => { return false }
// };

// each([
//   'View',
//   'ScrollView',
//   'Text',
//   'TouchableOpacity',
//   'TouchableHighlight',
//   'TouchableWithoutFeedback',
//   'ToolbarAndroid',
//   'TextInput',
//   'Image',
// ], (componentName) => {
//   ReactNative[componentName] = createMockComponent(componentName);
// });


// // Special components

// ReactNative.NativeModules= {};

// ReactNative.StyleSheet = {
//   create: function create(styles) {
//     return styles;
//   },
// }

// ReactNative.Platform = {
//   OS: 'ios',
//   Version: undefined,
// };

// export default ReactNative;
