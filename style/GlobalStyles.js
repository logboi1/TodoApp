import { StyleSheet } from 'react-native';

export const Global = StyleSheet.create({
  container: {
    padding: 24,
  },

  main: {
    padding: 40,
    backgroundColor: '#ccc',
    margin: 10,
    borderRadius: 10,
  },

  userN: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  done: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  false: {
    color: 'red',
  },
});
