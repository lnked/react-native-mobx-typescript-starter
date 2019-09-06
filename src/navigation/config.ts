import { CommonStyles, Colors } from '@/resources/styles';

const defaultNavigationOptions = {
  // headerMode: 'none',
  headerStyle: CommonStyles.headerStyle,
  headerBackTitle: ' ',
  // headerTintColor: Colors.black,
  // gesturesEnabled: true,
  // headerTitleStyle: {
  //   fontSize: 16,
  //   alignSelf: 'center',
  //   flexGrow: 1,
  //   textAlign: 'center',
  // },
};

export const stackNavigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions,
};
