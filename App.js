import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import Avatar from './components/avatar';
import Details from './components/details';
import ButtonClass from './components/button';
export default function App() {
  return (
    
      <SafeAreaView style={styles.container}>
        <Avatar />
        <Details />
        <ButtonClass title="Next" />
        <ButtonClass title="Prev" />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    //alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 250
  },
  
});
