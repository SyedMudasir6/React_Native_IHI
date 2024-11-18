import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constant/colors'

export default function Wishlist() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Wishlist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.SKY
    },
    txt: {
        fontSize: 30,
        color: colors.BLACK
    }
})