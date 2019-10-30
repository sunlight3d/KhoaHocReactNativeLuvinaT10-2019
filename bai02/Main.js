import React, {Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
//export = public 
import {sum, multiply, mobiles} from './Calculations'
import ComponentA from './components/ComponentA'
import {ComponentB} from './components/ComponentB'
import ComponentC from './components/ComponentC'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    doSomething(paramX) {
        alert(`dosomething with paramx = ${paramX}`)
    }
    render() {    
        console.log(`${Date.now()}.render`)
        return <SafeAreaView style={styles.container}>
            {/* <Text style={styles.centerText}>{JSON.stringify(mobiles)}</Text> */}
            <ComponentA name={"abcxy"} color={"red"}/>
            <ComponentB x = {10} y = {20}/>  
            <ComponentC name="haha" doSomething={this.doSomething}/>
        </SafeAreaView>
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    centerText: {
        fontSize: 30,
    }
})