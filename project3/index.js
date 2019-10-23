/**
npm install react-native-gesture-handler
npm install react-native-image-crop-picker
npm install react-native-reanimated
npm install react-native-super-grid
npm install react-navigation 
npm install axios
npm install firebase
npm install native-base
npm i react-navigation-stack
*/

import {AppRegistry} from 'react-native';
import LoginComponent from './components/LoginComponent';
import CategoriesComponent from './components/CategoriesComponent';
import TabProductsComponent from './components/TabProductsComponent';
import LifeCycleComponent from './components/LifeCycleComponent'
import DetailProductComponent from './components/DetailProductComponent'

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
    CategoriesComponent: {
        screen: CategoriesComponent,
        navigationOptions: {
            header: null
        }
    },
    TabProductsComponent: {
        screen: TabProductsComponent,
        navigationOptions: {
            header: null
        }
    },
    DetailProductComponent: {
        screen: DetailProductComponent,
        navigationOptions: {
            header: null
        }
    }

}, {
    //initialRouteName: 'LoginComponent'//root component 
    //initialRouteName: 'CategoriesComponent',//root component 
    initialRouteName: 'TabProductsComponent'//root component 
})
const AppContainer = createAppContainer(StactNavigator);
//AppRegistry.registerComponent(appName, () => LifeCycleComponent);
AppRegistry.registerComponent(appName, () => AppContainer);
