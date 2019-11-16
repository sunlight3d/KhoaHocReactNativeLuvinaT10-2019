/**
npm i react-native-gesture-handler
npm i react-native-image-crop-picker
npm i react-native-reanimated
npm i react-native-super-grid
npm i react-navigation 
npm i axios
npm i firebase
npm i native-base
npm i react-navigation-stack
 */
import {AppRegistry} from 'react-native';
import LoginComponent from './components/LoginComponent';
import ProductsComponent from './components/ProductsComponent';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//createStackNavigator = HOC = Higher order component
//added props: 
const StactNavigator = createStackNavigator({
    LoginComponent: {
        screen: LoginComponent,
        navigationOptions: {
            header: null
        }
    },
    ProductsComponent: {
        screen: ProductsComponent,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'LoginComponent'//root component 
})
const AppContainer = createAppContainer(StactNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);



