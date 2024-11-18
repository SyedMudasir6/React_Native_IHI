import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomButton({ style, title, onPress, lableStyle }) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.txt_btn, lableStyle]}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        height: '6%'
    },
    txt_btn: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})