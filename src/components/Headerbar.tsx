import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Headerbar = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name={'bars'}
        color={'white'}
        size={20}
        style={styles.icons}
      />
      <Text style={styles.bottomText}>Creativa</Text>
      <FontAwesome5
        name={'shopping-basket'}
        color={'white'}
        size={20}
        style={styles.icons}
      />
      <FontAwesome5
        name={'bell'}
        color={'white'}
        size={20}
        style={styles.icons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4169E1',
  },
  bottomText: {
    flex: 1,
    fontSize: 26,
    color: 'white',
    fontWeight: '700',
  },
  icons: {
    marginHorizontal: 18,
  },
});

export default Headerbar;
