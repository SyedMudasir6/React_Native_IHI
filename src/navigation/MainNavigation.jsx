import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Bottom/Home'
import Shop from '../screens/Bottom/Shop'
import Wishlist from '../screens/Bottom/Wishlist'
import Account from '../screens/Bottom/Account'
import NavigationContainer  from '@react-navigation/native';

const Stack = createStackNavigator()
export default function MainNavigation() {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Shop" component={Shop} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
        // </NavigationContainer>

    )
}

const styles = StyleSheet.create({})