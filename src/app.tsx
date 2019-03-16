import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import i18n from '@/i18n'
import AppContainer from '@/navigation/AppContainer'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
})

interface Props {}
interface State {}

export class App extends Component<Props, State> {
  // someEvent() {
  //   // call navigate for AppNavigator here:
  //   this.navigator &&
  //     this.navigator.dispatch(
  //       NavigationActions.navigate({ routeName: someRouteName })
  //     );
  // }

  handleNavigationChange = (props: any) => {
    console.tron.log(props)
  }

  render() {
    console.tron.log('render App')

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View><Text>{i18n.t('main.button.text')}</Text></View>

        <AppContainer
          // ref={nav => { this.navigator = nav }}
          onNavigationStateChange={this.handleNavigationChange}
          uriPrefix='/app'
        />
      </View>

      // <View style={CommonStyles.flex}>
      //   <Provider {...stores}>
      //     <Root>
      //       <ConnectionStatus />

      //       <AppNavigator
      //         uriPrefix={uriPrefix}
      //         ref={navigatorRef => setAppNavigator(navigatorRef)}
      //       />
      //     </Root>
      //   </Provider>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})