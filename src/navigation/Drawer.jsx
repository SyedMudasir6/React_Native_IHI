// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import BottomNavigation from './BottomTab';
// import { SCREENS } from '../constant/screen';
// import Home from '../screens/Bottom/Home';
// import DrawerScreen from './DrawerScreen';

// const Drawer = createDrawerNavigator();

// export default function DrawerNavigator(props) {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerType: 'slide',
//       }}
//     // drawerContent={props => <DrawerScreen {...props} />}
//     >
//       <Drawer.Screen
//         name={SCREENS.BOTTOM_TAB}
//         component={BottomNavigation}
//       />
//       <Drawer.Screen
//         options={{
//           drawerIcon: ({ focused, size }) => (
//             <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
//           ),
//         }}
//         name={SCREENS.BOTTOM_SCREEN.Home}
//         component={Home}
//       />

//     </Drawer.Navigator>
//   )
// }

// const styles = StyleSheet.create({})