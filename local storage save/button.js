import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          borderWidth: 1,
          borderColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
        }}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
