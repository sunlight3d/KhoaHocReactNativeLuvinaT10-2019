/**
yarn add react-navigation 
yarn add react-native-gesture-handler react-native-reanimated
 */
import React, {Component} from 'react'
import {
    View, 
    SafeAreaView,
    StyleSheet,
    FlatList, 
    Text, 
} from 'react-native'
let products = [{
    name: 'iphone 5', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
},
{
    name: 'iphone 6', 
    year: 2016,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
},
{
    name: 'iphone 7', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
}
,{
    name: 'iphone 8', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
}]
export default class ProductsComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //alert(Object.keys(this.props.navigation))
        const {goBack, navigate, getParam} = this.props.navigation
        alert(`${getParam('email', '')}`)
    }
    render() {
        //... = clone an object
        return <SafeAreaView>
            <FlatList data={products}
                renderItem={({item, index}) => <ProductItem {...item} index={index}>
                </ProductItem>}
                keyExtractor={(product, index) => `${index}`}
            >

            </FlatList>
        </SafeAreaView>
    }
}
const ProductItem = (item) => {
    //alert(JSON.stringify(item))
    const {name, year, imageUrl, index} = item
    return <Text>Chao banannndndndn: {name}, {year}, {index}</Text>
}
const styles = StyleSheet.create({
    constainer : {
        flex: 1
    }
})