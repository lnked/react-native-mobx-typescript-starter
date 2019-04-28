import 'react-native';
import mocks from 'react-native-jest-mocks';
// import './__mocks__';

// jest
//   .mock('Button', () => {
//     const RealComponent = require.requireActual('react-native-elements').Button;
//     return RealComponent;
//   });

// const emptyFn = () => {};
// const AnimatedValue = function() {
//   this.setValue = emptyFn;
//   this.setOffset = emptyFn;
// };

// const AnimatedValueXY = function() {};
// AnimatedValueXY.prototype.x = new AnimatedValue();
// AnimatedValueXY.prototype.y = new AnimatedValue();

// console.error = jest.genMockFunction();

// jest.resetModules();

mocks.initAll();

jest.mock('react-native-device-info', () => ({
  getModel: jest.fn(),
}));

jest.mock('react-native-languages', () => ({
  RNLanguages: {
    language: 'en',
    languages: ['en'],
  },
}));

jest.mock('react-native-gesture-handler', () => ({}));

// global.fetch = jest.fn(() => new Promise(resolve => resolve()));

// jest.mock('NativeModules', () => ({
//   UIManager: {
//     RCTView: () => ({
//       directEventTypes: {},
//     }),
//     getViewManagerConfig: jest.fn(),
//   },
//   PlatformConstants: {
//     forceTouchAvailable: false,
//   },
//   KeyboardObserver: {},
//   RNGestureHandlerModule: {
//     attachGestureHandler: jest.fn(),
//     createGestureHandler: jest.fn(),
//     dropGestureHandler: jest.fn(),
//     updateGestureHandler: jest.fn(),
//     State: {},
//     Directions: {},
//   },
//   WebSocketModule: {
//     connect: jest.fn(),
//     send: jest.fn(),
//     sendBinary: jest.fn(),
//     ping: jest.fn(),
//     close: jest.fn(),
//     addListener: jest.fn(),
//     removeListeners: jest.fn(),
//   },
// }));


// jest.mock('react-native-splash-screen', () => ({
//   show: jest.fn().mockImplementation( () => { console.log('show splash screen'); } ),
//   hide: jest.fn().mockImplementation( () => { console.log('hide splash screen'); } ),
// }));

// jest.mock('react-navigation', () => ({
//   createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
//   createDrawerNavigator: jest.fn(),
//   createMaterialTopTabNavigator: jest.fn(),
//   createStackNavigator: jest.fn(),
//   StackActions: {
//     push: jest.fn().mockImplementation(x => ({...x,  'type': 'Navigation/PUSH'})),
//     replace: jest.fn().mockImplementation(x => ({...x,  'type': 'Navigation/REPLACE'})),
//   },
//   NavigationActions: {
//     navigate: jest.fn().mockImplementation(x => x),
//   },
// }));
