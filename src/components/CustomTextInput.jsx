import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../constant/colors'
import Icon, { Icons } from './Icons';

export default function CustomInput(props) {
    const {
        placeholder,
        style,
        hidelabel,
        value,
        onChangeText,
        onSubmitEditing,
        returnKeyType,
        secureTextEntry,
        password,
    } = props;

    const [secureText, setSecureText] = useState(true);
    const [secureTextIcon, setSecureTextIcon] = useState('eye-slash');
    const [iconColor, setIconColor] = useState(colors.WHITE);



    const showPassword = () => {
        if (secureTextIcon === 'eye') {
            setSecureTextIcon('eye-slash');
            setSecureText(true);
        } else {
            setSecureTextIcon('eye');
            setSecureText(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.hideLabel}>{hidelabel}</Text>
            <TextInput
                value={value}
                onChangeText={text => onChangeText(text, text)}
                placeholder={placeholder}
                style={[styles.txtInput, style]}
                secureTextEntry={password ? secureText : false}
                placeholderTextColor={colors.RED}
            />
            {password ? (
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={showPassword}
                    style={{ flex: 0.1, alignItems: 'flex-end' }}>
                    <Icon
                        name={secureTextIcon}
                        type={Icons.FontAwesome}
                        style={styles.eyeIconStyle}
                    />
                </TouchableOpacity>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    txtInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        // paddingHorizontal:10,
        marginBottom: 10,
        // flex:0.1
    },
    hideLabel: {
        fontSize: 14,
        marginBottom: 5,
        color: colors.BLACK
    },
    eyeIconStyle: {
        color: colors.GREAT_WHITE,
    },
})