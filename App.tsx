import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './src/Screens/Screen1'
import Screen2 from './src/Screens/Screen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <View>
      <Screen1 />  
        </View>
  )
}

export default App

const styles = StyleSheet.create({})