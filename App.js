import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import Avatar from './components/avatar';
import Details from './components/details';
import ButtonClass from './components/button';
import FormFile from './components/formFile';
import Artists from './components/artists';
export default function App() {
  const [text, setText] = useState('');
  const valueChange = (value) => {
    setText(value);
  } 
  return (
    
      <SafeAreaView style={styles.container}>
        <Avatar />
        {/* <Details /> */}
        <FormFile changeText={valueChange} />
        <Artists />
        <ButtonClass title="Next" />
        <ButtonClass title={text} />
        
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
