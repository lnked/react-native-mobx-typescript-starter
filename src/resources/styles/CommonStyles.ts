import { StyleSheet } from 'react-native';
import { Colors } from './';

export const CommonStyles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  containerPadding: {
    paddingHorizontal: 24,
  },

  centralize: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  flex: {
    flex: 1,
  },

  text: {
    fontSize: 14,
    color: Colors.black,
  },

  smallText: {
    fontSize: 14,
    color: Colors.black,
  },

  bigText: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },

  strikethroughText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

  backgroundImg: {
    flex: 1,
    width: '100%',
  },
});
