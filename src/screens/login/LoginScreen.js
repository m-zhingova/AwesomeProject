import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'; 

import styles from './style';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: 'Email/Username',
            password: 'Password'
        };
    }

    render() {
      return (
        <View style={styles.container}>
            <Text>
            Log in 
            </Text>

            <TextInput
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
            />
            <TextInput
                secureTextEntry={true} 
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />
            <Button
                title="lOG IN " 
                accessibilityLabel="forgoten password"
            />
            <Button
                title="forgoten password" 
                accessibilityLabel="forgoten password"
            />
            <Button
                title="jOIN nOW" 
                accessibilityLabel="forgoten password"
            /> 
            <Button
                title="skip" 
                accessibilityLabel="forgoten password"
            />
      </View>
      );
    }
  }