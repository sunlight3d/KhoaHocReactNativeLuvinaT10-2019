import React from 'react'
import {Text, View, Stylesheet} from 'react-native'
//component as a "function", no state!
export const ComponentB = ({x, y}) => {
    return <View>
        <Text>x = {x}, y = {y}</Text>
    </View>
}