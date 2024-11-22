import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Bottom/Home';
import Shop from '../screens/Bottom/Shop';
import Wishlist from '../screens/Bottom/Wishlist';
import Account from '../screens/Bottom/Account';
import { SCREENS } from '../constant/screen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons
import colors from '../constant/colors';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    let name;

                    if (route.name === SCREENS.BOTTOM_SCREEN.Home) {
                        iconName = 'home-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Shop) {
                        iconName = 'cart-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Wishlist) {
                        iconName = 'heart-outline';
                    } else if (route.name === SCREENS.BOTTOM_SCREEN.Account) {
                        iconName = 'person-outline';
                    }
                    return (
                        <View style={{ marginTop: 8 }}>
                            <Icon name={iconName} size={30} color={color} />
                            <Text style={styles.bottom_txt}>{name}</Text>
                        </View>
                    )
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: colors.SKY,
                tabBarInactiveTintColor: colors.LAVENDER_SYRUP,
                tabBarStyle: {
                    backgroundColor: colors.BLACK,
                    height: '10%',
                }
            })}
        >
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Home} component={Home} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Shop} component={Shop} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Wishlist} component={Wishlist} />
            <Tab.Screen name={SCREENS.BOTTOM_SCREEN.Account} component={Account} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottom_txt: {
        color: colors.WHITE,
        // fontSize: 20,
        // marginBottom: hp(2),
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        // fontFamily: fontfamily.Medium,
    },
});
