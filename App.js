import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateStory from './screens/CreateStory';
import Feed from './screens/Feed';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  return (
    <AppNavigator/>
  )

}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  DashboardScreen: DashboardScreen,
  LoginScreen: LoginScreen
})
const AppNavigator = createAppContainer(AppSwitchNavigator)
