import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Bottom/Home';
import { SCREENS } from '../constant/screen';
import Shop from '../screens/Bottom/Shop';
import Wishlist from '../screens/Bottom/Wishlist';
import Account from '../screens/Bottom/Account';
import Icon, { Icons } from '../components/Icons';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) =>
                    (<Icon
                        type={Icons.MaterialCommunityIcons}
                        name="home-outline"
                        color={color} size={size} />)
                }}
                name={SCREENS.BOTTOM_SCREEN.Home}
                component={Home}
            />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) =>
                (<Icon
                    type={Icons.MaterialCommunityIcons}
                    name="shopping-outline"
                    color={color} size={size} />)
            }} name={SCREENS.BOTTOM_SCREEN.Shop}
                component={Shop}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) =>
                (<Icon
                    type={Icons.MaterialCommunityIcons}
                    name="cards-heart-outline"
                    color={color} size={size} />)
            }} name={SCREENS.BOTTOM_SCREEN.Wishlist}
                component={Wishlist}
            />
            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) =>
                (<Icon
                    type={Icons.MaterialCommunityIcons}
                    name="account-supervisor-outline"
                    color={color} size={size} />)
            }} name={SCREENS.BOTTOM_SCREEN.Account}
                component={Account}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})