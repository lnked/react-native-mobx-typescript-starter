const ios = require('@react-native-community/cli-platform-ios');
const android = require('@react-native-community/cli-platform-android');

module.exports = {
  platforms: {
    ios: {
      linkConfig: ios.linkConfig,
      projectConfig: ios.projectConfig,
      dependencyConfig: ios.dependencyConfig,
    },
    android: {
      linkConfig: android.linkConfig,
      projectConfig: android.projectConfig,
      dependencyConfig: android.dependencyConfig,
    },
    // windows: require('./local-cli/platform.js').windows,
  },

  project: {
    ios: {
      project: 'ios/app.xcodeproj',
    },
  },

  dependency: {
    platforms: {
      ios: {
        project: 'ios/app.xcodeproj',
      },
    },
  },

  // // config for a library is scoped under "dependency" key
  // dependency: {
  //   // platforms: {
  //   //   // grouped under "platforms" entry
  //   //   windows: require('./local-cli/platform.js').windows,
  //   // },
  //   platforms: {
  //     ios: {},
  //     android: {}, // projects are grouped into "platforms"
  //   },
  //   assets: ['./path-to-assets'], // stays the same
  //   // hooks are considered anti-pattern, please avoid them
  //   hooks: {
  //     prelink: './path-to-a-prelink-hook',
  //   },
  //   commands: require('./path-to-commands.js'), // formerly "plugin", returns an array of commands
  // },
};
