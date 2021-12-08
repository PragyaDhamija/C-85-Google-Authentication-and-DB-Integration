import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

checkIfLoggedIn=()=>{
    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            this.props.navigaton.navigate("DashboardScreen")
        }
        else{
            this.props.navigaton.navigate("LoginScreen")
        }
    })
}

export default class LoadingScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}