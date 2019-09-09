import * as React from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
