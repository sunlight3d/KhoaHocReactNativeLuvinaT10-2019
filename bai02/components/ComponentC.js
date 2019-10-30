import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
//component contains "variables" and function props
export default class ComponentC extends Component{
    constructor(props) {
        //props = attributes in html
        super(props)
    }
    componentDidMount() {

    }
    render() {
        //destructuring an object
        const {name, doSomething} = this.props
        return <View>
            <Text>{name}</Text>
            <TouchableHighlight style={styles.btnClickMe} onPress={() => {
                doSomething("Hehe")
            }}>
                <Text style={styles.textClickme}>Click me</Text>
            </TouchableHighlight>

        </View>
    }
}
const styles = StyleSheet.create({
    btnClickMe: {
        borderRadius: 6,
        padding: 10,
        height: 40,
        backgroundColor: 'red',
    },
    textClickme: {
        fontSize: 20,
        color: 'white',        
    }
})