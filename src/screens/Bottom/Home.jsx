import { StyleSheet, Text, TextInput, View , ScrollView} from 'react-native'
import React, { useState } from 'react'
import colors from '../../constant/colors'
import CustomInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import { SCREENS } from '../../constant/screen'

export default function Home(props) {
    const [name, SetName] = useState()
    const [email, SetEmail] = useState()
    const [phone, SetPhone] = useState()
    const [passWord, SetPassword] = useState()
    const [SubmitData, setSubmitDta] = useState(false)

    console.log("Name", name)
    console.log("Email", email)
    console.log("Password", passWord)
    console.log("Phone", phone)

    const submit = () => {
        setSubmitDta(true)
    }

    const navigateToAccount = () => {
       props.navigation.navigate(SCREENS.BOTTOM_SCREEN.Account)
    }

    return (
        <View style={styles.container}>
            <Header title={'App'} menu onPress={() => props.navigation.toggleDrawer()} />  
            <View style={{ marginHorizontal: 10, marginTop: 10, flex: 1 }}>
                {/* <ScrollView  showsVerticalScrollIndicator={false}> */}
                <TextInput value={name} onChangeText={SetName} placeholder='Enter Your Name' style={styles.txtInput} />
                <TextInput value={email} onChangeText={text => SetEmail(text)} placeholder='Enter Your email' style={styles.txtInput} />
                <TextInput keyboardType='phone-pad' value={phone} onChangeText={SetPhone} placeholder='Enter Your phone' style={styles.txtInput} />
                <TextInput secureTextEntry value={passWord} onChangeText={SetPassword} placeholder='Enter Your password' style={styles.txtInput} />
                <CustomButton onPress={submit} title={'Submit'} />
                <CustomButton onPress={navigateToAccount} title={'Navigte to account'} />
                {
                    SubmitData && (
                        <View>
                            <Text style={styles.txt}>Name: {name || '-'}</Text>
                            <Text style={styles.txt}>email: {email || '-'}</Text>
                            <Text style={styles.txt}>phone: {phone || '-'}</Text>
                        </View>
                    )
                }
                {/* </ScrollView> */}
            </View>
      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: colors.SKY,
        // marginHorizontal: 10,
    },
    txt: {
        fontSize: 30,
        color: colors.BLACK
    },
    Txtcontainer: {
        width: '100%'
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
})