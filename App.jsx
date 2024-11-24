import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Bottom/Home'
import MainNavigation from './src/navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})