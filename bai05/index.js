import {AppRegistry} from 'react-native'
//import App from './App';
import {name as appName} from './app.json'

import Main from './components/Main'
import ProductList from './components/ProductList'
import DetailProduct from './components/DetailProduct'


import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const StackNavigator = createStackNavigator({
    //screens
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: {
            // header: null
        }
    },
    DetailProduct: {
        screen: DetailProduct,
        navigationOptions: {
            // header: null
        }
    },
},{
    //options
    initialRouteName: 'Main'
})

AppRegistry.registerComponent(appName, () => createAppContainer(StackNavigator));
