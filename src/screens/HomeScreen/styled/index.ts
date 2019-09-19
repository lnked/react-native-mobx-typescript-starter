import { StyleSheet } from 'react-native';
import { autorun } from 'mobx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'relative',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'violet',
    borderRadius: 100,
    marginBottom: 30,
  },
  value: {
    color: '#333',
    fontSize: 36,
  },
  add: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    lineHeight: 0,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    color: '#f00',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,
  },
});

export default styles;
