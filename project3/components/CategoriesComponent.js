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
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
const NUMBER_OF_COLUMNS = 2
//import { TouchableOpacity } from 'react-native-gesture-handler';
var selectedColorIndex = 0
const randomColor = () => {
    var colors = ['rgb(170, 231, 251)', 'rgb(221, 102, 95)', 'rgb(246, 213, 111)', 
    'rgb(107, 187, 236)', 'rgb(92, 103, 115)']
    //let randomIndex = Math.floor(Math.random() * colors.length)  
    selectedColorIndex++;
    selectedColorIndex = selectedColorIndex >= colors.length ? 0: selectedColorIndex    
    return colors[selectedColorIndex]
}
const {width, height} = Dimensions.get("window")
let categories = [{
    name: 'Electronics',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},
{
    name: 'Fahsion',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},
{
    name: 'Foods', 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
}
,{
    name: 'Something',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},{
    name: 'Furniture',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},{
    name: 'Books', 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
}
,{
    name: 'Travels',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},{
    name: 'Gym',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},{
    name: 'Abcc 123 ', 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
}
,{
    name: 'Xyz 12',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
},{
    name: 'Mnpq 2',     
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
}]
export default class CategoriesComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {        
        //alert(Object.keys(this.props.navigation))
        const {goBack, navigate, getParam} = this.props.navigation        
        
    }
    render() {   
        const {navigate} = this.props.navigation    
        return <SafeAreaView>
            <FlatList data={categories}
                renderItem={({item, index}) => <ProductItem 
                    {...item} 
                    index={index}
                    navigate = {navigate}
                    >
                </ProductItem>}
                keyExtractor={(category, index) => `${index}`}
                numColumns={NUMBER_OF_COLUMNS}
            >

            </FlatList>
        </SafeAreaView>
    }
}
const ProductItem = (item) => {
    //alert(JSON.stringify(item))
    const {name, imageUrl, index, navigate} = item
    return <View style={styles.flatListItem}>
        <TouchableOpacity style={[styles.innerFlatList, {backgroundColor: randomColor()}]}
            onPress={() => {
                navigate('TabProductsComponent', {item: {name, imageUrl, index}})
            }}
        >
            <Image source={{uri: imageUrl}} style={styles.itemImage}></Image>
            <Text style={styles.textItem}>{name}</Text>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    constainer : {
        flex: 1
    },
    flatListItem: {
        width: width/NUMBER_OF_COLUMNS,
        height: width/NUMBER_OF_COLUMNS,        
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