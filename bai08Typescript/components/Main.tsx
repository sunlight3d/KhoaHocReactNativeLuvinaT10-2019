import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    TouchableHighlight,
    Alert} from 'react-native'
import MyTextInput from './MyTextInput'
import Icon from 'react-native-vector-icons/FontAwesome'
import {authentication, firebaseDatabase} from '../Firebase/Firebase'
import { NavigationStackProp } from 'react-navigation-stack'
import {LoginManager } from 'react-native-fbsdk'
const {width, height} = Dimensions.get('window')
const textInputWidth = 0.8 * width
const textInputHeight = 45
const borderRadius = 10


interface Props {
    navigate?: (screenName: string, params: object)=>void
}

const _Login: React.FC<Props> = (props) => {
    const {navigate} = props    
    return <View>
        <MyTextInput style={styles.myTextInput} 
                    title={"Email"} placeholder={"Enter your email"} 
                    validate={"email"}
                    iconName={"user"}/>
            <MyTextInput style={styles.myTextInput} 
                    title={"Password"} placeholder={"Enter your password"} secureTextEntry 
                    validate={"password"}
                    iconName={"lock"}/>   
                   
             <TouchableHighlight style={styles.button} onPress={() => {                 
                 authentication.signInWithEmailAndPassword("hoang1@gmail.com", "123456").
                 then(() => {
                    navigate!("ProductList", {name: "Hoang"})
                 }).catch(error => {
                    Alert.alert(`Cannot signin, Error: ${error}`)
                 })                 
             }}>
                <Text style={styles.textButton}>Login to your account</Text>
             </TouchableHighlight>
    </View>
}
const _Register: React.FC<Props> = (props) => {
    const {navigate} = props
    return <View>
        <MyTextInput style={styles.myTextInput} 
                    title={"Email"} placeholder={"Enter your email"} 
                    validate={"email"}
                    iconName={"user"}/>
            <MyTextInput style={styles.myTextInput} 
                    title={"Password"} placeholder={"Enter your password"} secureTextEntry 
                    validate={"password"}
                    iconName={"lock"}/>  
            <MyTextInput style={styles.myTextInput} 
                    title={"Retype password"} placeholder={"Retype your password"} secureTextEntry 
                    validate={"password"}
                    iconName={"lock"}/>    
                   
             <TouchableHighlight style={styles.button}>
                <Text style={styles.textButton}> Register</Text>
             </TouchableHighlight>
    </View>
}
export default class Main extends React.Component<{navigation: NavigationStackProp<{}>}> {
    state = {
        isLogin: true
    }
    _loginFacebook() {
        // Alert.alert("Login facebook")             
        LoginManager.logInWithPermissions(["public_profile"]).then(
            (result:any) =>  {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );

                }
            }            
        ).catch((error:any) => {
            console.log("Login fail with error: " + error);
        })
    }
    _loginGoogle() {
        Alert.alert("Login Google")
    }
    _loginTwitter() {
        Alert.alert("Login Twitter")
    }
    render() {
        const {isLogin} = this.state
        //Alert.alert(Object.keys(this.props))
        const {navigate} = this.props.navigation
        const {navigation} = this.props
        return <View style={styles.container}>
            <View style={styles.viewProfile}>
                <Image source={require('../images/mycat.png')} 
                    style={styles.imageProfile} />
            </View>
            <View style={styles.headerView}>
                <TouchableHighlight style = {styles.headerButton} onPress={() => {
                    this.setState({isLogin: true})
                }}><Text>Login</Text></TouchableHighlight>
                <TouchableHighlight style = {styles.headerButton} 
                onPress={() => {
                    this.setState({isLogin: false})
                }}><Text>Signup</Text></TouchableHighlight>
            </View>
            {isLogin == true ? <_Login navigate={navigate}/> : <_Register />}
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
    headerView: {
        flexDirection: 'row',
        height: 40,
        justifyContent:'center',
        alignItems:'center', 
        alignSelf: 'stretch',
        backgroundColor: 'red'
    },
    headerButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'green',
        paddingHorizontal: 30
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