import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const button = ({ title, style, outlined }) => {
  return (
    <TouchableOpacity
      style={[outlined ? styles.outlined : styles.filled, style]}
    >
      <Text
        style={outlined ? styles.text_outlined : styles.text_filled}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filled: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  outlined: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'blue',
  },
  text_outlined: {
    color: 'blue',
  },
  text_filled: {
    color: 'white',
  },
});

export default button;
