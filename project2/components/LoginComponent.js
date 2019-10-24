import React, { Component } from 'react'
import {View, 
    TextInput, 
    TouchableOpacity,
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView, 
    ScrollView, 
    ActivityIndicator,
    Dimensions,
    Text,    
} from 'react-native'
import { COLOR_GREEN, COLOR_RED, globalCSS, COLOR_ORANGE} from '../GlobalCSS'
const {width, height} = Dimensions.get('window')
import {firebaseManager} from '../Firebase/Firebase'
export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        //init state = only in contructor !
        this.state = {
            borderColorOfText: 'red',
            email: '',
            password: '',
            validateEmail:'',
            validatePassword:'',
            isLoading: false
        }
    }
    componentDidMount() {        
        firebaseManager.authentication.onAuthStateChanged((user) => {
            if (user) {
                const {uid, email, refreshToken} = user
                // alert(`uid = ${uid}`)
            } 
        })
        this.setState({email: 'hoang@gmail.com', password: '123456'})
    }
    _validateEmail(text){
        //Regular Expression
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(text);
    }
    signIn() {
        let { email = "", password=""} = this.state
        //alert(`firebaseManager = ${firebaseManager}`)
        this.setState({isLoading: true})
        firebaseManager.signInWithEmailAndPassword(email, password).then(result => {
            const {uid, email} = result.user                        
            this.props.navigation.navigate('ProductsComponent', {uid, email})
            this.setState({isLoading: false})
        }).catch(error => {
            alert(`sign in failed: ${error}`)
            this.setState({isLoading: false})
        })
    }
    render() {
        console.log(`this.state.colodddd = ${this.state.borderColorOfText}`)
        let {validateEmail, validatePassword, isLoading,
            email, password,
            } = this.state
        
        return <SafeAreaView style={styles.container}>
            {isLoading && <View style={styles.loadingView}>                
                <ActivityIndicator size="large" color="red" />
            </View>}
            <KeyboardAvoidingView style={styles.container} 
                    keyboardVerticalOffset = {20}
                    behavior="padding">
            <ScrollView 
                style={{flex: 1, width: '100%'}}
                contentContainerStyle={{alignItems: 'center'}}>
            <Image source={require('../images/pet.jpg')} 
                style={styles.imageProfile} />
            <TextInput onChangeText = {(text) => {
                
            }}
                placeholder = {"Enter your email"}
                keyboardType={"email-address"}
                secureTextEntry={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={email}
                onChangeText = {(email) => {
                    this.setState({email})
                    if(this._validateEmail(email) == false) {
                        this.setState({validateEmail: 'Invalid email'})
                    } else {
                        this.setState({validateEmail: ''})
                    }
                }}
                style={[styles.textInput, {borderColor: this.state.borderColorOfText}]}
            />
            {validateEmail.length > 0 && <Text style={styles.checkInput}>{validateEmail}</Text>}
            <TextInput 
                placeholder={"Enter your password"}
                keyboardType={"default"}
                secureTextEntry={true}
                style={styles.textInput}
                value={password}
                onChangeText = {(password) => {
                    this.setState({password})
                    if(password.length <  3) {
                        this.setState({validatePassword: 'Password must be at least 3 characters'})
                    } else {
                        this.setState({validatePassword: ''})
                    }
                }}
            />
            {validatePassword.length > 0 && <Text style={styles.checkInput}>{validatePassword}</Text>}
            
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                        this.signIn()                                        
                }}
            >
                <Text style={[styles.loginButtonText, {backgroundColor: COLOR_GREEN}]}>Login</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.registerButton}
                onPress= {() => {
                    //destructuring
                    let {email, password} = this.state
                    //alert(`email = ${email}, password = ${password}`)   
                    this.setState({isLoading: true})                 
                    firebaseManager.createUserWithEmailAndPassword(email, password).then(() => {
                        alert("register user successfully")
                        this.setState({isLoading: false})
                    }).catch(error => {
                        alert(`register failed: ${error}`)
                        this.setState({isLoading: false})
                    })
                }}
            >
                <Text style={[styles.registerButtonText, {backgroundColor: COLOR_ORANGE}]}>Register</Text>
            </TouchableOpacity>
            </ScrollView>     
            </KeyboardAvoidingView> 
        </SafeAreaView>        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',        
    },
    loadingView: {
        position: 'absolute',
        top: 0,
        left: 0, 
        width, height,
        backgroundColor:'rgba(0,0,0, 0.2)',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageProfile: {
        width: 140,
        height: 140,
        marginTop: 40,
        borderRadius: 70
    }, 
    textInput: {     
        marginTop: 20,   
        height: 45,
        width: '90%',
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: 10

    },
    checkInput: {
        color: 'red',
        textAlign: 'left',
        width: '90%',
        paddingTop: 5
    },
    loginButton: {
        marginTop: 20,
        width: '90%',        
    },
    registerButton: {
        marginTop: 20,
        width: '90%',                
    },
    loginButtonText: {
        fontSize: 20,
        height: 45,
        backgroundColor: 'green',
        textAlign: 'center',
        lineHeight: 45  ,
        color: 'white'      
    },
    registerButtonText: {
        fontSize: 20,
        height: 45,
        backgroundColor: 'orange',
        textAlign: 'center',
        lineHeight: 45  ,
        color: 'white'      
    }
})