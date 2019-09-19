import * as React from 'react';
import { View, Text } from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // static navigationOptions = ({ navigation }) => ({
  //   headerLeft: <Text>Hi</Text>,
  //   headerRight: <Text>Hi</Text>,
  //   headerTitle: <Text>Hi</Text>,
  // })

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default LoginScreen;
