import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen'
import DashboardScreen from './screens/DashboardScreen';
import firebase from 'firebase';
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator ();
export default class App extends React.Component{
  render(){
    return(
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName = "HomeScreen">
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='DashboardScreen' component={DashboardScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      
        
        
    )
  }
}