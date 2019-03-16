import { StyleSheet } from 'react-native'
import { Colors } from './'

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  containerPadding: {
    paddingHorizontal: 24,
  },

  compensateFooter: {
    paddingBottom: 90,
  },

  centralize: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  flex: {
    flex: 1,
  },

  smallText: {
    fontSize: 14,
    color: Colors.black,
  },

  text: {
    fontSize: 14,
    color: Colors.black,
  },

  bigTextBold: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
  },

  strikethroughText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

  marginBottom: {
    marginBottom: 10,
  },

  marginTop: {
    marginTop: 10,
  },

  backgroundImg: {
    flex: 1,
    width: '100%',
  },

  democratic: {
    backgroundColor: Colors.black,
  },

  republican: {
    backgroundColor: Colors.black,
  },
})
