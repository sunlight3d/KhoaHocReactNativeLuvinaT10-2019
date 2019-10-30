import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
//component dang class, co state
export default class ComponentA extends React.Component{
    constructor(props) {
        //props = attributes in html
        super(props)
    }
    componentDidMount() {

    }
    render() {
        //destructuring an object
        const {name, color} = this.props
        return <View>
            {/* <Text>{name}, color = {color}</Text> */}
            <TextInput style={[styles.textInput, {backgroundColor: 'blue'}]} onChangeText={() => {
                
            }}>

            </TextInput>
        </View>
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        color: 'white',
        marginHorizontal: 20,
        paddingStart: 10,
        borderRadius: 10,
        backgroundColor: 'red'
    }
})