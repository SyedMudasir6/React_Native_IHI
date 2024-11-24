import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREENS } from '../constant/screen'
import Home from '../screens/Bottom/Home'
import Shop from '../screens/Bottom/Shop'
import Wishlist from '../screens/Bottom/Wishlist'
import Account from '../screens/Bottom/Account'
import DrawerNavigation from './Drawer'

const Stack = createStackNavigator()


export default function MainNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.DRAWER_NAVIGATION} component={DrawerNavigation} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Shop} component={Shop} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})