import * as React from 'react';
import * as RNLocalize from 'react-native-localize';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Container } from 'native-base';
import { configure } from 'mobx';

import { observer, Provider } from 'mobx-react';

import * as stores from '@/stores';
import AppContainer from '@/navigation';
import NavigationService from '@/navigation/NavigationService';
import { setI18nConfig } from '@/i18n';
import { Header, Footer } from '@/modules';
import { Colors } from '@/resources/styles';
import { isAndroid } from '@/configs';
import { getActiveRouteName } from '@/utils';

const uriPrefix = isAndroid ? 'app://app/' : 'app://';

configure({ enforceActions: 'observed' });

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

  handleNavigationChange = (prevState, currentState) => {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      stores.app.setRoute(currentScreen);
      console.log('stores', currentScreen, prevScreen);
    }
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor={Colors.orange} barStyle="dark-content" />

        <Provider {...stores}>
          <Container>
            <Header />

            <AppContainer
              uriPrefix={uriPrefix}
              onNavigationStateChange={this.handleNavigationChange}
              ref={(navigatorRef: any) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />

            <Footer />
          </Container>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
