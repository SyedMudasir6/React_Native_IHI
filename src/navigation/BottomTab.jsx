import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Bottom/Home';
import Shop from '../screens/Bottom/Shop';
import Wishlist from '../screens/Bottom/Wishlist';
import Account from '../screens/Bottom/Account';
import { SCREENS } from '../constant/screen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
        
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === SCREENS.BOTTOM_SCREEN.Home) {
                        iconName = 'home-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Shop) {
                        iconName = 'cart-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Wishlist) {
                        iconName = 'heart-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Account) {
                        iconName = 'person-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false, 
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray', 
            })}
        >
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Shop} component={Shop} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
