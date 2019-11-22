import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    TouchableHighlight} from 'react-native'
import { Provider, connect } from 'react-redux'
import {validateEmail, validatePassword} from '../helpers/validations'
import Icon from 'react-native-vector-icons/FontAwesome'
import {changeEmail, changePassword} from '../redux/actions/actions'
interface MyTextInputProps {
    title: string
    iconName: string
    placeholder: string
    secureTextEntry?: boolean
    validate: string
    style: object
    dispatch: any
}
class MyTextInput extends React.Component<MyTextInputProps> {
    state = {
        typedText: '',
        firstTimeCheck: true
    }
    checkValidate(validateString: string) {
        switch(validateString) {
            case 'password':
                return validatePassword(this.state.typedText);
                break;
            case 'email':
                return validateEmail(this.state.typedText);
                break;
            default:
                return "";
        }
    }
    render() {
        const {title, iconName, placeholder, secureTextEntry, validate} = this.props
        // debugger
        const {dispatch} = this.props
        return <View style={[this.props.style, styles.container]}>
                    <View>
                        <Text style={styles.title}>{title.toUpperCase()}:</Text>
                    </View> 
                    <View style={styles.bottomView}>
                        <Icon name={iconName} size={20} color="#000000" style={styles.icon}/>   
                        <TextInput style={styles.textInput}
                            placeholder={placeholder} secureTextEntry={secureTextEntry}
                            onChangeText={(typedText) => {
                                // this.setState({typedText, firstTimeCheck: false})   
                                if(title==="Email") {
                                    dispatch(changeEmail(typedText))
                                } else if(title === "Password") {
                                    dispatch(changePassword(typedText))
                                }
                                
                            }}
                        />
                    </View>
                    {!this.state.firstTimeCheck && <Text style={styles.error}>{
                            this.checkValidate(validate)
                    }</Text>}
        </View>
    }
}
const MyTextInputContainer = connect()(MyTextInput)
export default MyTextInputContainer
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        // alignSelf: 'stretch',
        // backgroundColor: 'red'
    },
    title: {
        textAlign: 'left',
    },
    icon: {
        paddingStart: 10
    },
    textInput: {
        flex: 1,
        marginStart: 8,
    },
    bottomView: {
        flexDirection:'row', 
        height: 45,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        borderRadius: 8,
    },
    error: {
        color: 'red',
        fontWeight: 'bold'
    }
    
})