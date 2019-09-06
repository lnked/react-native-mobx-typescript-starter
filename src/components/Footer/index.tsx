import * as React from 'react';
import { Button, View } from 'react-native';
import NavigationService from '@/navigation/NavigationService';

import styles from './styles';

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.button}>
      <Button
        title="Home"
        onPress={() => NavigationService.navigate('Home')}
      />
    </View>

    <View style={styles.button}>
      <Button
        title="Details"
        onPress={() => NavigationService.navigate('Details')}
      />
    </View>

    <View style={styles.button}>
      <Button
        title="Login"
        onPress={() => NavigationService.navigate('Login')}
      />
    </View>
  </View>
);

export default Footer;
