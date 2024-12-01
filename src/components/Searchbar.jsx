import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsive_functions';
import Icon, { Icons } from './Icons';
import fontfamily from '../constant/fontfamily';
import colors from '../constant/colors';

const SearchBar = ({
  style,
  placeholder,
  placeholderTextColor,
  onPress,
  searchIcon,
  onChangeText,
  value,
}) => {
  const [localValue, setLocalValue] = useState('');

  const handleChangeText = text => {
    setLocalValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleSearch = () => {
    if (onPress) {
      onPress(localValue);
    }
  };

  return (
    <View
      style={[style, { flexDirection: 'row', }, styles.container]}>
      <TextInput
        placeholder={placeholder ? placeholder : 'search...'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.GREAT_WHITE
        }
        style={styles.input}
        onChangeText={handleChangeText}
        value={value !== undefined ? value : localValue}
      />
      {searchIcon && (
        <TouchableOpacity
          style={{
            borderLeftWidth: 1,
            paddingLeft: wp(2),
            // backgroundColor: colors.GREAT_WHITE,
            height: hp(6),
            width: wp(10),
            paddingTop: hp(1.5),
            borderLeftColor: colors.GREAT_WHITE
          }}
          onPress={handleSearch}>
          <Icon
            name={'search'}
            type={Icons.Feather}
            size={rf(2.5)}
            color={colors.GREAT_WHITE}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // paddingHorizontal: wp(3),
    marginTop: hp(1.5),
    borderRadius: wp(4),
    height: hp(6),
    justifyContent: 'center',
  },
  input: {
    color: colors.GREAT_WHITE,
    flex: 1,
    fontFamily: fontfamily.Regular,
    fontSize: rf(1.5),
    // backgroundColor:colors.DRAWER_BACK
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
});

export default SearchBar;