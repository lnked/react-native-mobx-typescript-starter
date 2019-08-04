import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@/resources/styles';

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },

  btn: {
    height: 49,
    borderRadius: 4,
    shadowColor: Colors.ceruleanBlue15,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    justifyContent: 'center',
  },

  btnText: {
    ...Fonts.normalSemiBold,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.white,
  },

  btnlight: {
    color: Colors.darkText,
  },

  btntransparent: {
    color: Colors.white,
  },

  btnsecondary: {
    color: Colors.black,
  },
});

export default styles;
