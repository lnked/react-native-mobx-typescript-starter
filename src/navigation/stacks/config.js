import { Colors } from '@/resources/styles'

const headerStyle = {
  shadowOpacity: 0,
  elevation: 0,
  backgroundColor: Colors.white,
  borderBottomWidth: 0
}

const defaultNavigationOptions = {
  headerStyle,
  headerBackTitle: ' ',
  headerTintColor: Colors.grayDark,
  headerTitleStyle: {
    fontSize: 12,
    alignSelf: 'center',
    flexGrow: 1,
    textAlign: 'center'
  },
  gesturesEnabled: true
}

const stackNavigatorConfig = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions
}

export default stackNavigatorConfig
