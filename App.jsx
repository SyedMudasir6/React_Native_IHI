import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoreComponents from './src/screens/CoreComponents'
import Image from './src/components/Image';
import Header from './src/components/Header';
import MainNavigation from './src/navigation/MainNavigation';
import {NavigationContainer}  from '@react-navigation/native';
import CustomTextInput from './src/components/CustomTextInput';
import Home from './src/screens/Bottom/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CoreComponents/>
           <Header menu title={'logo'}/> 
      <Text>App</Text>
      */}
      {/* <Image/> */}
      {/* <NavigationContainer>
        <MainNavigation />
      </NavigationContainer> */}
<Home/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});