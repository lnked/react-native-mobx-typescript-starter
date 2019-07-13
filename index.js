import { AppRegistry, YellowBox } from 'react-native';

import * as Reactotron from './reactotron.config';
import { name as appName } from './app.json';
import App from '@/App';

// console.disableYellowBox = true;

YellowBox.ignoreWarnings([
  // 'Module RCTImageLoader requires',
  // 'Warning: componentWillMount is deprecated',
  // 'Warning: componentWillReceiveProps is deprecated',
  // 'Warning: isMounted(...) is deprecated',
]);

// const isHermes = () => global.HermesInternal != null;

Reactotron.init(__DEV__);
AppRegistry.registerComponent(appName, () => App);
