import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Bottom/Home'
import Shop from '../screens/Bottom/Shop'
import Wishlist from '../screens/Bottom/Wishlist'
import Account from '../screens/Bottom/Account'
import NavigationContainer from '@react-navigation/native';
import DrawerNavigator from './Drawer'
import { SCREENS } from '../constant/screen'

const Stack = createStackNavigator()
export default function MainNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName={SCREENS.DRAWER_NAVIGATION}>
            <Stack.Screen name={SCREENS.DRAWER_NAVIGATION} component={DrawerNavigator} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Shop} component={Shop} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist} />
            <Stack.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})