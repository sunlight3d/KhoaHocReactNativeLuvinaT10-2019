import React, {Component} from 'react'
import {View, TextInput,PushNotificationIOS } from 'react-native'
import {firebaseManager} from '../Firebase/Firebase'

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            counter: 0
        }
        setInterval(() => {
            console.log("Change state...")
            this.setState({counter: this.state.counter + 1})
        }, 2000);
    } 
    componentDidMount() {
        console.log('componentDidMount')
        firebaseManager.database.ref('timestamps').on('value', function(snapshot) {
            //alert("Firebae da ve")
            PushNotificationIOS.presentLocalNotification({                
                alertBody: 'Firebase da ve', // STRING: The notification message
                userInfo: {name: 'Hoang'}, // OBJECT: The push data
            });
        })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return (nextState.counter !== this.state.counter)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
    }

    render() {
        console.log("render")
        return <View style={{backgroundColor: 'red', flex: 1}}>

        </View>
    }
}
/**
 1. Bat app len, chua lam gi: constructor-> componentDidMount
 2. Minimum app, timer ko hoat dong
 3. Thay doi state: => shouldComponentUpdate, neu true => render
 */