import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constant/colors';
import Icon, { Icons } from './Icons';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsive_functions';
import { useNavigation } from '@react-navigation/native';
import fontfamily from '../constant/fontfamily';

export default function Header({menu, onPress, title, back}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {menu && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={onPress ? 0.8 : 1}
            style={styles.row}>
            <Entypo name="menu" size={40} color="white" />
          </TouchableOpacity>
        )}
        {back && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name={'left'}
              type={Icons.AntDesign}
              size={rf(2.5)}
              color={colors.WHITE}
              style={{ marginRight: wp(2) }}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    backgroundColor: colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginLeft: '35%',
    fontFamily: fontfamily.Bold,
  },
});
