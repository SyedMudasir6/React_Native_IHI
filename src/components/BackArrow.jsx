import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from './Icons';
import colors from '../constant/colors';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsive_functions';
import {useNavigation} from '@react-navigation/native';

const BackArrow = ({color}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        name={'keyboard-backspace'}
        type={Icons.MaterialCommunityIcons}
        size={rf(3)}
        color={color ? color : colors.PRIMARY}
        style={{marginRight: wp(2)}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackArrow;
