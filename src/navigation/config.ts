import { Easing, Animated } from 'react-native';

import { CommonStyles, Colors } from '@/resources/styles';
import { initialRouteName } from '@/configs';

const defaultNavigationOptions = {
  // headerMode: 'none',
  headerStyle: CommonStyles.headerStyle,
  headerBackTitle: ' ',
  gesturesEnabled: true,
  // headerTintColor: Colors.black,
  // headerTitleStyle: {
  //   fontSize: 16,
  //   alignSelf: 'center',
  //   flexGrow: 1,
  //   textAlign: 'center',
  // },
};

// https://reactnavigation.org/docs/en/stack-navigator.html

export const stackNavigatorConfig = {
  initialRouteName,
  defaultNavigationOptions,

  transitionConfig: () => ({
    transitionSpec: {
      duration: 100,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },

    // screenInterpolator: sceneProps => {
    //   const { layout, position, scene } = sceneProps;
    //   const { index } = scene;

    //   const height = layout.initHeight;
    //   const translateY = position.interpolate({
    //     inputRange: [index - 1, index, index + 1],
    //     outputRange: [height, 0, 0],
    //   });

    //   const opacity = position.interpolate({
    //     inputRange: [index - 1, index - 0.99, index],
    //     outputRange: [0, 1, 1],
    //   });

    //   return { opacity, transform: [{ translateY }] };
    // },
  }),
};
