import React, { Component } from 'react'
import { StyleSheet,View,TextInput } from 'react-native'
export default class FormFile extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                onChangeText={(test) => this.props.changeText(test)} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: '100%',
    }
})