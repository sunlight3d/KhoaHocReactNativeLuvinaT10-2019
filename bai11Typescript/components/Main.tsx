interface Point {
    x: number
    y: number
}
type PointA = {
    x: number
    y: number
}
interface Point {
    z: number
}
interface Point2 extends Point {
    xx: number
}
type Point3 = {
    xxx: number
}
class MyPoint implements Point3 {
    constructor() {
        this.x = 1;
        this.y = 2;
        this.z = 3;
        this.xx = 44;
        debugger
    }
    methodA(){
        
        debugger
    }
}
var mp = new MyPoint()
mp.methodA()

import React from 'react'
import { Provider, connect } from 'react-redux'
import store from '../redux/store/store'
import AsyncStorage from '@react-native-community/async-storage'

import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Alert,
    TouchableHighlight} from 'react-native'
import MyTextInput from './MyTextInput'
import Icon from 'react-native-vector-icons/FontAwesome'
import {provider, authentication, firebaseDatabase} from '../Firebase/Firebase'
import { NavigationStackProp } from 'react-navigation-stack'
import { LoginManager, LoginResult, AccessToken } from "react-native-fbsdk";
import { type } from 'os';

const {width, height} = Dimensions.get('window')
const textInputWidth = 0.8 * width
const textInputHeight = 45
const borderRadius = 10
interface LoginProps {
    navigate: (screenName: string, params: object) => void
}
const _Login:React.FC<LoginProps> = (props) => {
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
                 navigate("ProductList", {name: "Hoang"})
                 return
                 authentication.signInWithEmailAndPassword("hoang1@gmail.com", "123456").
                 then(() => {
                    navigate("ProductList", {name: "Hoang"})
                 }).catch(error => {
                    Alert.alert(`Cannot signin, Error: ${error}`)
                 })
                 
             }}>
                <Text style={styles.textButton}>Login to your account</Text>
             </TouchableHighlight>
    </View>
}
interface RegisterProps {
    navigate?: (screenName: string, params: object)=>void
}
const _Register: React.FC<RegisterProps> = (props) => {
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
interface MainProps {
    navigation: NavigationStackProp<{ }>
    user: {email: string, password: string}
}
class Main extends React.Component<MainProps> {
    state = {
        isLogin: true
        
    }
    _loginFacebook() {
        
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function(result:LoginResult) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                
                AccessToken.getCurrentAccessToken().then(accessToken => {
                    debugger
                    console.log("dd")
                }).catch(error => {
                    console.log("Cannot get access token:"+error)
                })
              }
            }).catch(function(error) {
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
        //alert(Object.keys(this.props))
        const {navigate} = this.props.navigation
        const {navigation} = this.props
        const {email, password} = this.props.user
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
                    onPress={async (event) => {
                        Alert.alert(`Email = ${email}, password = ${password}`)
                        try {
                            // await AsyncStorage.setItem('email', email)
                            // await AsyncStorage.setItem('password', password)
                            debugger
                            const x = await AsyncStorage.getItem('email')
                            const y = await AsyncStorage.getItem('password')
                            console.log(`x = ${x}, y = ${y}`)
                        } catch (e) {
                            console.log(`Error saving Storage: ${e}`)
                        }
                        //this._loginFacebook()
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
const mapStateToProps = (state: {userReducer: {email: string, password: string}}) => {
    // debugger
    return {
      user: {
          email: state.userReducer.email,
          password: state.userReducer.password
      }
    }
  }
const MainContainer = connect(mapStateToProps)(Main)
export default (props: MainProps) => {
    return <Provider store={store}>
        <MainContainer {...props}/>
    </Provider>
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