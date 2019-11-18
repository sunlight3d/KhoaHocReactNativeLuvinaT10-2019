import React from 'react'
import {Header} from './Header'
import {ACTION_INSERT, ACTION_UPDATE} from '../actions/actionTypes'
var fakeProducts = [{
    productId: "aaa",
    name: 'iphone 3',
    year: 2013,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
}, {
    productId: "bbb",
    name: 'iphone 4',
    year: 2014,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/IPhone_Text_Message_Amber_Alert_1882467856_o.jpg/2560px-IPhone_Text_Message_Amber_Alert_1882467856_o.jpg'
},
{
    productId: "ccc",
    name: 'iphone 5',
    year: 2015,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
},{
    productId: "ddd",
    name: 'iphone 6',
    year: 2016,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg'
},
{
    productId: "eee",
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
import { NavigationStackProp } from 'react-navigation-stack'
type ProductListProps = {
    navigation: NavigationStackProp<{}>;
};
export default class ProductList extends React.Component<ProductListProps> {
    state = {
        products: fakeProducts
    }
    componentDidMount() {
        
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
    year: number 
    insertProduct: Function 
    updateProduct: Function
    index:number
    url: string
    navigate: (screenName: string, params: object)=>void
}
const _ProductItem:React.FC<ProductItemProps> = (props) => {
    //alert(`props = ${JSON.stringify(Object.keys(props))}`)
    const {productId, name, year, 
        insertProduct, updateProduct,
        index, navigate} = props
    let {url} = props
    url = url === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alt_Telefon.jpg/330px-Alt_Telefon.jpg"
                    : url
    // const {index} = props
    return (
        <TouchableOpacity onPress={(event) => {
            //alert(`You clicked : ${name}`)
            navigate("DetailProduct", 
                {productId, name, year, url, index, 
                    actionType: ACTION_UPDATE, updateProduct})
        }}>
            <View style={[styles.productItem,
            index % 2 == 0 ? styles.productItemGray : styles.productItemYellow]}>
                {/* <Text>Name = {name}, year = {year}, url = {url}</Text> */}
                <Image source={{ uri: url }}
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