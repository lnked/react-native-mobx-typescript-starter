import * as React from 'react';
import { Button, Icon } from 'native-base';
import { View, Text } from 'react-native';

import styles from './styled';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Button style={styles.add}>
            <Icon name="add" style={styles.icon} />
          </Button>

          <Text style={styles.value}>100 P</Text>
        </View>

        <Text style={{ fontSize: 20 }}>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
