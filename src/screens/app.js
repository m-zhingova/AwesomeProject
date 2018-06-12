import React, { Component, PropTypes} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen'

export default class App extends Component {
  render() {
    return <RootStack /> ;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    LoginScreen: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


