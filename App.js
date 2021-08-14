import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';

export default function App() {
  return (
    
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar_container}>
          <View style={{alignItems:'center',justifyContent:'center',color:'black',marginTop: 10}}>
            <Image style={{marginBottom:20}} source={require("./assets/batman.png")} />
            <Text>Welcome to First Native App</Text>
          </View>
        </View>
        <View style={styles.detail_container}>
          <View style={styles.item}>
            <Text style={styles.attribute}>Name:</Text>
            <Text style={styles.data}>Md. Mahidul Islam</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.attribute}>Age:</Text>
            <Text style={styles.data}>23</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.attribute}>Designation:</Text>
            <Text style={styles.data}>{`Software 
            Engineer`}</Text>
          </View>
        </View>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 250
  },
  avatar_container:{
    flex: 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detail_container:{
    flex: 0.6,
    backgroundColor: 'white'
  },
  item:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  attribute:{
    flex: 0.8,
    color: 'orange',
    fontSize: 30,
  },
  data:{
    color: 'blue',
    fontSize: 25,
    fontFamily: 'italic'
  }
});
