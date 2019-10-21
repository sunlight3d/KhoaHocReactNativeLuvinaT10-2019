import React, {Component} from 'react'
import {
    View, 
    SafeAreaView,
    StyleSheet,
    FlatList, 
    Text, 
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {firebaseManager} from '../Firebase/Firebase'
import {urlGetProducts} from '../server/constants'


export default class TabProductsComponent extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            products: []
        }            
    }
    async getProductsFromApi() {
        try {
          let response = await fetch(urlGetProducts(10, 0));
          let responseJson = await response.json();
          if(responseJson.result === "ok") {
            let products = responseJson.data
            this.setState({products})
          }          
        } catch (error) {
          console.error(`Cannot get products. Error: ${error}`);
          this.setState({products: []})
        }
      }
    async componentDidMount() {        
        const {goBack, navigate, getParam} = this.props.navigation 
        //alert(JSON.stringify(getParam('item')))        
        this.getProductsFromApi()
        const that = this
        this.observer = firebaseManager.database.ref('timestamps').on('value', function(snapshot) {
            // alert("Firebase da ve")
            that.getProductsFromApi()
        })
    }
    async componentWillUnmount() {
        this.observer = null
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return (nextState.products !== this.state.products)
    }

    render() {     
        const {navigate} = this.props.navigation             
        return <SafeAreaView style={styles.container}>
            <FlatList data={this.state.products}
                renderItem={({item, index}) => <ProductItem 
                    {...item} 
                    index={index}
                    navigate = {navigate}
                    >
                </ProductItem>}
                keyExtractor={(category, index) => `${index}`}
            />
        </SafeAreaView>        
    }
}

const ProductItem = (item) => {
    //alert(JSON.stringify(item))
    const {name, imageURL, description, index, navigate, _id} = item
    let productId = _id
    return <View style={[styles.flatListItem, {backgroundColor: index %2 == 0 ? 'red': 'green'}]}>
        <TouchableOpacity style={styles.innerFlatList}
            onPress={() => {                
                navigate('DetailProductComponent', {item: {name, imageURL, index, productId}})
            }}
        >
            <Image source={{uri: imageURL}} style={styles.itemImage}></Image>
            <Text style={styles.textItem}>{name}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    constainer : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',   
    },
    flatListItem: {
        width: '100%',
        height: 160,       
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    innerFlatList: {              
        width:'95%',
        height:'95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 45
    },
    textItem: {
        marginTop: 15
    }
  
})