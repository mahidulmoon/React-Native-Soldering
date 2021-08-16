import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

class ButtonClass extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.button}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 50,
        borderWidth: 1,
        backgroundColor: 'grey',
        //justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }
})

export default ButtonClass;