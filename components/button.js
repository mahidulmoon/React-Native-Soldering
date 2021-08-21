import React from 'react'
import { TouchableOpacity,Text,StyleSheet,Alert } from 'react-native'

class ButtonClass extends React.Component{
    state = {
        response: "cholen dekhi"
    }
    clickMe = () => {
        Alert.alert(this.state.response,
            // [
            //     {
            //         text : "Cancel",
            //         //onPress : () => console.log("cancel press"),
            //         //style: 'cancel'
            //     },
            //     {
            //         text : "ok",
            //         //onPress : () => console.log("ok press"),
            //     }
            // ]
        );
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
        marginBottom: 15

    }
})

export default ButtonClass;