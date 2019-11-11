import React from 'react'
import ImagePicker from 'react-native-image-crop-picker'

import {View, 
    FlatList, 
    Text,
    Image, 
    TouchableOpacity,
    TextInput,
    StyleSheet} from 'react-native'
import {ACTION_INSERT, ACTION_UPDATE} from '../actions/actionTypes'

export default class DetailProduct extends React.Component {
    state = {
        productId: "", name:"", year: "", url :""
    }
    componentDidMount() {
        const {productId, name = "", year="", url="", index=0} = this.props.navigation.state.params
        this.setState({productId, name, year, url})
    }
    getImagesFromPicker = async () => {
        /*
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            console.log(images);
          }).catch(error => {
              console.log(`CAnnot open ImagePicker.Error: ${error}`)
          })
          */
         try {
            let images = await ImagePicker.openPicker({multiple: true})    
            if(images.length > 0) {
                let {sourceURL} = images[0]
                this.setState({url: sourceURL})
            }
            console.log("aaa")    
         } catch(error) {
            console.log(`CAnnot open ImagePicker.Error: ${error}`)
         }
    }
    render() {        
        const {actionType, insertProduct, updateProduct} = this.props.navigation.state.params
        //alert(JSON.stringify(Object.keys(this.props.navigation.state.params)))
        //alert(`year = ${year}`)
        const {navigation} = this.props
        const {productId, name, year, url} = this.state
        return <View style = {styles.container}>
            <TouchableOpacity onPress={() => {
                    this.getImagesFromPicker()
                }}>
                    <Image style={styles.image} source={url === "" ? 
                    require('../images/defaultImage.png'):{uri: url}}/>
            </TouchableOpacity>            
            <TextInput style={styles.textInput} 
                value={name}
                onChangeText = {(text) => {
                    this.setState({name: text})
                }}
                placeholder={"Enter name"}>

            </TextInput>
            <TextInput style={styles.textInput} 
                keyboardType={"numeric"}
                value={`${year}`}
                onChangeText = {(text) => {
                    this.setState({year: text})
                }}
                placeholder={"Enter year"}>

            </TextInput>
            <View style={styles.twoButtons}>
                <TouchableOpacity 
                    onPress={() => {
                        if(actionType === ACTION_INSERT) {
                            insertProduct(`${(new Date()).toUTCString()}`, 
                                name, year, url)
                        } else {
                            updateProduct(productId, name, year, url)
                        }
                        navigation.goBack()
                    }}
                    style={[styles.btnAdd, {backgroundColor: 'green'}]}>
                    <Text style={{color: 'white', height: 35}}>
                        {actionType === ACTION_INSERT ? "Insert" : "Save"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={[styles.btnAdd, {backgroundColor: 'red'}]}>
                    <Text style={{color: 'white', height: 35}}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        margin: 20
    },
    textInput: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 30,
        borderRadius: 8, 
        paddingHorizontal: 6,
        marginBottom: 16
    },
    twoButtons: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAdd: {
        height: 35,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
})