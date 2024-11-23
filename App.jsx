import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Bottom/Home'
import MainNavigation from './src/navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomTab'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
      {/* <BottomTab /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})