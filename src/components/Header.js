import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Header({menu, onPress, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menu && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
            style={styles.row}>
            <Entypo name="menu" size={40} color="black" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={onPress ? 0.8 : 1}
          style={styles.row}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
