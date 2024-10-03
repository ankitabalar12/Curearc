import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { ImageBackground } from 'react-native'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'
import { string } from '../../Helper/string'
import { useNavigation } from '@react-navigation/native'

const Forgotpassword = () => {
    const [emailID, setEmailID] = useState('')
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.viewone}>
                <ImageBackground source={icons.stethoscope} style={[styles.setscopstyle,]}>
                    <View style={styles.overlay} />
                    <View style={styles.flexdractionview}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={styles.arrowbackstyle} source={icons.arrowback}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.imgstyle} source={icons.doctortwos}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <LinearGradient
                style={styles.viewtwo}
                colors={['#a9a700', '#a0a300', '#989f01', '#8c9901',
                    '#809400', '#728d01', '#578001', '#457801',
                    '#3d7401', '#286a01', '#1d6500', '#136001']}>
            </LinearGradient>
            <View style={styles.swiperview}>
                <Text style={styles.forgotpasstext}>{string.Forgotpassword}</Text>
                <Text style={styles.Pleaseentext}>{string.Pleaseent}</Text>
                <View style={[styles.textinputniewtwo, styles.textinputniewtdffeer]}>
                    <View style={styles.textinputrwo}>
                        <TextInput
                            style={styles.input}
                            placeholder="EmailID"
                            onChangeText={(value) => setEmailID(value)}
                            value={emailID}
                        />
                        <TouchableOpacity style={styles.positionimg}>
                            <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <Bottoncomponet
                    title={string.SENDEMAIL}
                    loginbutton={styles.loginbutton} />

            </View>
        </View>
    )
}

export default Forgotpassword

