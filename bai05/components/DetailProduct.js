import React from 'react'

import {View, TextInput, 
    FlatList, 
    Text,
    Image, 
    TouchableOpacity,
    StyleSheet} from 'react-native'
export default class DetailProduct extends React.Component {
    componentDidMount() {
        const {name, year, url, index} = this.props.navigation.state.params
        alert(`name = ${name}, year : ${year}`)
    }
    render() {
        return <View style = {styles.container}>
            
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    
})