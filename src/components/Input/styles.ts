import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@/resources/styles';

const styles = StyleSheet.create({
  formItem: {
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
    marginBottom: 20,
  },

  input: {
    ...Fonts.big,
    color: Colors.dark,
    paddingLeft: 0,
  },

  inputLabelPlaceholder: {
    ...Fonts.bigMedium,
    color: Colors.lightGreyBlue,
  },
});

export default styles;
