import React,{useState,useEffect} from 'react'
import { StyleSheet,ScrollView, View,Text } from 'react-native';
import axios from 'axios';
export default function Artists() {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        axios.get('https://5ea731f184f6290016ba7d10.mockapi.io/api/Products')
        .then(res => setApiData(res.data))
    });
    //console.log("data see: ",apiData)
    return (
        <ScrollView style={styles.artist_container}>
            <View style={styles.artist_container}>
                {/* <Text>Hello</Text> */}
                {apiData.map((data,key) => {
                    return (<Text style={styles.itemStyle} key={key}>{key+1} : {data.title}</Text>)
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    artist_container:{
        flex: 1,
    },
    itemStyle:{
        marginLeft: 10
    }
})