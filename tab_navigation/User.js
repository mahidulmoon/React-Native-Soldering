import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function User({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>User Screen</Text>
    </View>
  );
}
