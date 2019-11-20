import React from 'react'
import {Header} from './Header'
import {ACTION_INSERT, ACTION_UPDATE} from '../actions/actionTypes'

import {View, TextInput, 
    FlatList, 
    Text,
    Image, 
    TouchableOpacity,
    StyleSheet} from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import {urlGetProducts, urlGetImage} from '../apis/apis'

type ProductListProps = {
    navigation: NavigationStackProp<{}>;
};
export default class ProductList extends React.Component<ProductListProps> {
    state = {
        products: []
    }
    componentDidMount = async () => {
        try {
            let response = await fetch(
                urlGetProducts,
            );
            let responseJson = await response.json();
            if(responseJson.result === "ok") {
                this.setState({products: responseJson.data})
            }
          } catch (error) {
            console.error(error);
          }     
    }
    insertProduct = async (productId: string, name: string, year:number, url:string) => {
        let {products} = this.state
        this.setState({
            products: products.concat({productId, name, year, url})
        })
    }
    updateProduct = async (productId: string, name: string, year:number, url:string) => {
        /*
        let updatedProducts = [...this.state.products]
        updatedProducts.forEach(product => {
            if(product.productId === productId) {
                product.name = name
                product.year = year
                product.url = url
            }
        })*/
        const updatedProducts = this.state.products.map(product => {
            if(product.productId === productId) {
                product.name = name
                product.year = year
                product.url = url
            }
            return product
        })
        this.setState({
            products: updatedProducts
        })
    }
    render() {
        const {navigation} = this.props
        return <View style = {styles.container}>
            <Header actionBack = {() => {
                navigation.goBack()
            }} actionAdd ={() => {
                navigation.navigate("DetailProduct", {
                    actionType: ACTION_INSERT, insertProduct: this.insertProduct})
            }}
            title = {"List of Products"}
            options = {{
                //hideBackButton: true
            }}
            />
            <FlatList data={this.state.products} 
                    renderItem = {({item, index}) => 
                        <_ProductItem index ={index} 
                            {...item} {...navigation} insertProduct={this.insertProduct} 
                            updateProduct={this.updateProduct}/>}
                    keyExtractor = {(product) => {
                        return product.name
                    }}
                    >

            </FlatList>
        </View>
    }
}
type ProductItemProps = {
    productId:string
    name: string
    description: string 
    imageURL: string
    insertProduct: Function 
    updateProduct: Function
    index:number
    url: string
    navigate: (screenName: string, params: object)=>void
}
const _ProductItem:React.FC<ProductItemProps> = (props) => {
    //alert(`props = ${JSON.stringify(Object.keys(props))}`)
    const {name, description, imageURL, 
        insertProduct, updateProduct,
        index, navigate} = props
    let {url} = props
    url = url === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg"
                    : url
    // const {index} = props
    url = urlGetImage(imageURL)
    debugger

    return (        
        <TouchableOpacity onPress={(event) => {
            //alert(`You clicked : ${name}`)
            navigate("DetailProduct", 
                {name, description, imageURL, url, index, 
                    actionType: ACTION_UPDATE, updateProduct})
        }}>
            <View style={[styles.productItem,
            index % 2 == 0 ? styles.productItemGray : styles.productItemYellow]}>
                {/* <Text>Name = {name}, year = {year}, url = {url}</Text> */}
                <Image source={{ uri: url }}
                    style={styles.productImage} />
                <View style={styles.rightView}>
                    <Text style={styles.boldText}>{name}</Text>
                    <Text style={styles.lightText}>{description}</Text>
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
        borderRadius: 30
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