import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';


function Details(){
    
        return(
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
        )
        
          
    
}
const styles = StyleSheet.create({
            
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

export default Details;