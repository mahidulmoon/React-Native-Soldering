import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';

export default function Avatar() {
  return (
    
      
        <View style={styles.avatar_container}>
          <View style={{alignItems:'center',justifyContent:'center',color:'black',marginTop: 10}}>
            <Image style={{marginBottom:20}} source={require("../assets/batman.png")} />
            {/* <Text>Welcome to First Native App</Text> */}
          </View>
        </View>
        
      
    
  );
}

const styles = StyleSheet.create({
  
  avatar_container:{
    flex: 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
