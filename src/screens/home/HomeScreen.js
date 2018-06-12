import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'; 

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Text>
          Tennis round happy tennis
        </Text>
        <Button
          buttonStyle ={styles.btnControle}
          title="Log In" 
          accessibilityLabel="Log In"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
        <Button
          buttonStyle ={styles.btnControle}
          title="Join Now!" 
          accessibilityLabel="Join Now!"
        />
         <Button
          title="forgoten password" 
          accessibilityLabel="forgoten password"
        />
      </View>
      );
    }
  }