import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Home';
import { ProfileScreen } from './Profile';
import { EditScreen } from './Edit';

const Root = createStackNavigator();
const Stack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator>
      <Root.Screen name='Home' component={HomeScreen} />
      <Root.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Root.Navigator mode='modal'>
        <Stack.Screen
          name='Main'
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;
