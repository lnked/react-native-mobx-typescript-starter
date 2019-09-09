import * as React from 'react';
import * as RNLocalize from 'react-native-localize';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { configure } from 'mobx';
import { observer, Provider } from 'mobx-react';

import i18n, { setI18nConfig } from '@/i18n';
import { Footer } from '@/modules';
import { CommonStyles, Colors } from '@/resources/styles';
import AppContainer from '@/navigation';
import NavigationService from '@/navigation/NavigationService';

configure({
  enforceActions: 'observed',
});

@observer
class App extends React.Component {
  constructor (props: any) {
    super(props);

    setI18nConfig();
  }

  componentDidMount() {
    SplashScreen.hide();
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  }

  render() {
    const stores = {};

    return (
      <React.Fragment>
        <StatusBar backgroundColor={Colors.orange} barStyle="dark-content" />

        <Provider {...stores}>
          <View style={[CommonStyles.centralize, CommonStyles.flex]}>
            <AppContainer
              ref={(navigatorRef: any) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <Footer />
          </View>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
