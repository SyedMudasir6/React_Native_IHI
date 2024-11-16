import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../constant/images'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon, { Icons } from './Icons'
import color from '../constant/color'
import { GoogleIcon, IconSvg } from './svg'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function ImageComponents() {
    return (
        <View style={styles.continer}>
            <Text style={styles.txt}>Icon</Text>
            <Icon
                type={Icons.AntDesign}
                name={'check'}
                size={50}
                color={color.RED}
                style={styles.icon}
            />
            <Text style={styles.txt}>SVG Icon</Text>
            <View style={{ backgroundColor: color.BLACK, width: '50%', height: '30%' }}>

                <IconSvg />
                <GoogleIcon />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        flex: 1
    },
    txt: {
        color: 'black',
        fontSize: 30
    },
    bgimage: {
        width: '50%',
        height: '50%',
    },
    icon: {
        width: 50,
        alignSelf: 'center',
    }
})