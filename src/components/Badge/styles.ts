import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@/resources/styles';

const styles = StyleSheet.create({
  badge: {
    width: 'auto',
    alignSelf: 'flex-start',
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    lineHeight: 16,
  },

  green: {
    backgroundColor: Colors.greenishTeal20,
  },

  red: {
    backgroundColor: Colors.radicalRed20,
  },

  title: {
    ...Fonts.smallMedium,
  },

  title_green: {
    color: Colors.greenishTeal,
  },

  title_red: {
    color: Colors.radicalRed,
  },
});

export default styles;
