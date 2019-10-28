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

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}//only assign 1 time !, in CONSTRUCTOR !
        this.timer = setInterval(()=> {
            console.log(`counter = ${this.state.counter}`)
            this.setState({counter: this.state.counter + 1})
        }, 4000)
    }
    componentDidMount(){
        //alert(`sum 2 and 3 = ${sum(2,3)}`)
        console.log(`${Date.now()}.componentDidMount`)
    }
    shouldComponentUpdate(nextProps, nextState, context){
        console.log(`${Date.now()}.shouldComponentUpdate`)
        return true
    }
    componentWillUnmount() {
        console.log(`${Date.now()}.componentWillUnmount`)
        clearTimeout(this.timer)
    }
    componentDidCatch(error, errorInfo) {

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`${Date.now()}.componentDidUpdate`)
    }
    
    /**
     * Lifecycle
     * Case 1. lan dau tien load component: constructor, render, componentDidMount
     * Case 2. Thay doi state, shouldcomponentUpdate->true->render, componentDidUpdate
     * Case 3.Khi mo app khac, setInterval van chay
     */
    render() {    
        console.log(`${Date.now()}.render`)
        return <SafeAreaView style={styles.container}>
            <Text style={styles.centerText}>{JSON.stringify(mobiles)}</Text>
        </SafeAreaView>
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    centerText: {
        fontSize: 30,
    }
})