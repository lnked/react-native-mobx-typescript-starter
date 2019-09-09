import { StyleSheet } from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    padding: 0,
    borderTopWidth: 1,
    borderColor: 'red',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    width: 100,
    height: 50,
    flex: 1,
  },
});

export default styles;
