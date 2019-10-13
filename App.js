import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import store from './src/store';
import IndexScreen from './src/screens/index';

const AppNavigator = createSwitchNavigator({
  
  Index: {screen: IndexScreen}
  
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
      
    )
  }
}
