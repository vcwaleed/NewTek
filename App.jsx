import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import SignupScreen from './src/screen/SignupScreen';
import LoginScreen from './src/screen/LoginScreen';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown : false,
    }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})