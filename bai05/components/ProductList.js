import React from 'react'
var products = [{
    name: 'iphone 3',
    year: 2013,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
}, {
    name: 'iphone 4',
    year: 2014,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/IPhone_Text_Message_Amber_Alert_1882467856_o.jpg/2560px-IPhone_Text_Message_Amber_Alert_1882467856_o.jpg'
},
{
    name: 'iphone 5',
    year: 2015,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
},{
    name: 'iphone 6',
    year: 2016,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
},
{
    name: 'iphone 7',
    year: 2017,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
}]
import {View, TextInput, 
    FlatList, 
    Text,
    Image, 
    TouchableOpacity,
    StyleSheet} from 'react-native'
export default class ProductList extends React.Component {
    componentDidMount() {
        const {name} = this.props.navigation.state.params
    }
    render() {
        const {navigation} = this.props
        return <View style = {styles.container}>
            <FlatList data={products} 
                    renderItem = {({item, index}) => 
                        <_ProductItem index ={index} {...item} {...navigation}/>}
                    keyExtractor = {(product) => {
                        return product.name
                    }}
                    >

            </FlatList>
        </View>
    }
}
const _ProductItem = (props) => {
    console.log(`props = ${JSON.stringify(Object.keys(props))}`)
    const {name, year, url, index, navigate} = props
    // const {index} = props
    return (
        <TouchableOpacity onPress={(event) => {
            //alert(`You clicked : ${name}`)
            navigate("DetailProduct", {name, year, url, index})
        }}>
            <View style={[styles.productItem,
            index % 2 == 0 ? styles.productItemGray : styles.productItemYellow]}>
                {/* <Text>Name = {name}, year = {year}, url = {url}</Text> */}
                <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
                    style={styles.productImage} />
                <View style={styles.rightView}>
                    <Text style={styles.boldText}>{name}</Text>
                    <Text style={styles.lightText}>{year}</Text>
                </View>
            </View>
        </TouchableOpacity>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productItem: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    productImage: {
        width: 60,
        height: 60,
        backgroundColor: 'red'
    },
    rightView: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    productItemYellow: {
        backgroundColor: 'yellow'
    }, 
    boldText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    lightText: {
        fontSize: 14,
    },
    productItemGray: {
        backgroundColor: 'grey'
    }
})