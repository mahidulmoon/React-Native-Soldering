import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function ProfileScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Profile Screen</Text>

      <Button
        title='Go to Edit'
        onPress={() => navigation.navigate('Edit')}
      />
    </View>
  );
}
