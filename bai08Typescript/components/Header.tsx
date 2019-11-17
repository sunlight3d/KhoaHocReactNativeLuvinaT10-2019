import React from 'react'
import {Component} from 'react'
import {View, 
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
interface HeaderProps {
    actionBack: (event: object) => void
    actionAdd: (event: object) => void 
    title: string
    options: {hideBackButton: boolean}
}
export const Header:React.FC<HeaderProps> = (props) => {
    const {actionBack, actionAdd, title} = props
    const {hideBackButton} = props.options
    return <View style={styles.container}>
        {hideBackButton == true ? <View style={styles.btnBack} />:  
        <TouchableOpacity onPress={actionBack}>
            <Image source={require('../images/icon-back.png')} style={styles.btnBack}>

            </Image>
        </TouchableOpacity>}
       
        <Text>
            {title}
        </Text>
        <TouchableOpacity onPress={actionAdd}>
        <Image source={require('../images/icon-add.png')} style={styles.btnBack}>

        </Image>
        </TouchableOpacity>
        
    </View>
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnBack: {
        width: 35,
        height: 35,
        marginHorizontal: 8,
    }
})