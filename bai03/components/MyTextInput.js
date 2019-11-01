import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class MyTextInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {title, iconName, placeholder} = this.props
        return <View style={[this.props.style, styles.container]}>
                    <View>
                        <Text style={styles.title}>{title.toUpperCase()}:</Text>
                    </View> 
                    <View style={styles.bottomView}>
                        <Icon name="rocket" size={20} color="#FFFFFF" />   
                        <TextInput 
                            placeholder={placeholder}
                        />
                    </View>
        </View>
    }
}
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
        backgroundColor: 'red'
    },
    bottomView: {
        flexDirection:'row', 
        backgroundColor: 'green',
        height: 45,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    
})