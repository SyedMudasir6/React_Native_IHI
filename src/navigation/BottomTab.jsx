import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Bottom/Home';
import Shop from '../screens/Bottom/Shop';
import Wishlist from '../screens/Bottom/Wishlist';
import Account from '../screens/Bottom/Account';

const Tab = createBottomTabNavigator()
export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                transitionSpec: {
                    animation: 'timing',
                    config: {
                        duration: 150,
                        easing: Easing.inOut(Easing.ease),
                    },
                },
                sceneStyleInterpolator: ({ current }) => ({
                    sceneStyle: {
                        opacity: current.progress.interpolate({
                            inputRange: [-1, 0, 1],
                            outputRange: [0, 1, 0],
                        }),
                    },
                }),
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="WishList" component={Wishlist} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({})