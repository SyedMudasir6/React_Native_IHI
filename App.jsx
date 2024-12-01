import { StyleSheet, Text, View ,StatusBar, SafeAreaView} from 'react-native'
import React from 'react'
import Home from './src/screens/Bottom/Home'
import MainNavigation from './src/navigation/MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
import colors from './src/constant/colors'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor={colors.PRIMARY}/>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})