import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

class ButtonClass extends React.Component{
    clickMe = (e) => {
        console.log("cholen dekhi");
    }
    render(){
        return(
            <TouchableOpacity onPress={this.clickMe} style={styles.button}>
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
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20

    }
})

export default ButtonClass;