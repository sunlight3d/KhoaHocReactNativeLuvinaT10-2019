import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    TouchableHighlight} from 'react-native'
import MyTextInput from './MyTextInput'
const {width, height} = Dimensions.get('window')
const textInputWidth = 0.8 * width
const textInputHeight = 45
const borderRadius = 10
export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.viewProfile}>
                <Image source={require('../images/mycat.png')} 
                    style={styles.imageProfile} />
            </View>
            
            <TextInput style={styles.textInput} placeholder={"Enter your email"} />
            <MyTextInput style={styles.myTextInput} 
                title={"Email"} placeholder={"Enter your email"} iconName={"star"}/>
            <TextInput style={[styles.textInput]} 
                placeholder={"Enter your password"}
                secureTextEntry
             />
             <TouchableHighlight style={styles.button}>
                <Text style={styles.textButton}>Login to your account</Text>
             </TouchableHighlight>
             <View style={styles.viewLine}>
                <View style={styles.line}/>
                <Text>OR</Text>
                <View style={styles.line}/>
             </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewProfile:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical: 20
    },
    imageProfile: {
        width: 0.5*textInputWidth,
        aspectRatio: 1/1,
        borderRadius: textInputWidth/2
    },
    textInput: {
        height: textInputHeight,
        fontSize: 14,
        width: textInputWidth,
        borderWidth: 1,
        borderRadius,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    myTextInput: {
        height: textInputHeight,
        width: textInputWidth,
        marginBottom: 20,
    },
    textPassword: {
        marginBottom: 0, 
        backgroundColor: 'blue'
    },
    button: {
        height: textInputHeight,
        backgroundColor: 'lightgreen',
        width: textInputWidth,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius,
    },
    viewLine: {
        flexDirection: 'row',
        height: 40,
        width: textInputWidth,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginHorizontal: 10,
        flex: 1
    },
    textButton: {
        color: 'black',
        
    }
})