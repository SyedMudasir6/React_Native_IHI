import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

export default function CoreComponents() {
    return (
        <View style={styles.Container}>
            <View style={styles.subContainer}>
                <Text style={styles.txt_style}>Core Components</Text>
            </View>

            <Button title='press me' color={'red'} />

            <CustomButton onPress={() => console.log("pressMe")} lableStyle={styles.txt} style={styles.btn} title={'Custom Button'} />
            <CustomButton onPress={() => console.log("press Last")} lableStyle={styles.txt} style={styles.btn} title={'Custom Button'} />

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        //backgroundColor: 'red',
        flex: 1,
        marginHorizontal: 10
    },
    subContainer: {
        //backgroundColor: 'blue',
        // height: 150
        //flex: 0.5,
        marginBottom: 20
    },
    txt_style: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
    },
    btn: {
        height: '6%',
        marginTop: 10
    },
    txt: {
        color: 'white',
        fontSize: 20,
    }
})