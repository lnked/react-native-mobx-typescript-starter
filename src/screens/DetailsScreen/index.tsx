import * as React from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // static navigationOptions = ({ navigation }) => ({
  //   header: () => null,
  // })

  // static navigationOptions = {
  //   headerTitle: <LogoTitle />,
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default DetailsScreen;
