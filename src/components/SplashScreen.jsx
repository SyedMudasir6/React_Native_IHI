import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsive_functions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constant/colors';
import { SCREENS } from '../constant/screen';
import { GoogleIcon } from './svg';
import images from '../constant/images';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: SCREENS.DRAWER_NAVIGATION}],
        }),
      );
    }, 3000);
  }, []);
  return (
    <View style={styles.animationContainer}>
      {/* <Text style={styles.txt}>Shopping</Text>
      <Text style={styles.txt}>Now</Text> */}
      <GoogleIcon/>
      {/* <Image width={200} height={100} source={images.BackGround}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: colors.PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: rf(5),
    color: colors.GREAT_WHITE,
  },
});
