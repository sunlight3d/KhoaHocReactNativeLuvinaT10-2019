import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    TouchableHighlight} from 'react-native'
import MyTextInput from './MyTextInput'
import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')
const textInputWidth = 0.8 * width
const textInputHeight = 45
const borderRadius = 10
export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    _loginFacebook() {
        alert("Login facebook")
    }
    _loginGoogle() {
        alert("Login Google")
    }
    _loginTwitter() {
        alert("Login Twitter")
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.viewProfile}>
                <Image source={require('../images/mycat.png')} 
                    style={styles.imageProfile} />
            </View>
            <MyTextInput style={styles.myTextInput} 
                    title={"Email"} placeholder={"Enter your email"} 
                    validate={"email"}
                    iconName={"user"}/>
            <MyTextInput style={styles.myTextInput} 
                    title={"Password"} placeholder={"Enter your password"} secureTextEntry 
                    validate={"password"}
                    iconName={"lock"}/>   
                   
             <TouchableHighlight style={styles.button}>
                <Text style={styles.textButton}>Login to your account</Text>
             </TouchableHighlight>
             <View style={styles.viewLine}>
                <View style={styles.line}/>
                <Text>OR</Text>
                <View style={styles.line}/>
             </View>
             <View style={styles.bottomView}>
                <Icon name={"facebook"} size={30} 
                    onPress={(event) => {
                        this._loginFacebook()
                    }}
                    color="rgb(74, 102, 173)" 
                    style={styles.icon}/>  
                <Icon name={"google"} size={30} 
                    onPress={(event) => {
                        this._loginGoogle()
                    }}
                color="rgb(216, 81, 64)" style={styles.icon}/>  
                <Icon name={"twitter"} size={30} 
                    onPress={(event) => {
                        this._loginTwitter()
                    }}
                    color="rgb(76,158,233)" style={styles.icon}/>  
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
        marginVertical: 20,
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
        
    },
    bottomView: {
        flexDirection: 'row',
        height: 40,
        justifyContent:'center',
        alignItems:'center', 
        alignSelf: 'stretch'
    }, 
    icon: {
        padding: 15,
    }
})