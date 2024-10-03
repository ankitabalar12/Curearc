import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { string } from '../../Helper/string'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const MedicalReports = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.MedicalReports} />
            <Image source={icons.erth} style={styles.erthstyle}></Image>
            <Text style={styles.Pleaseupload}>{string.Pleaseupload}</Text>
            <Bottoncomponet
                title={string.UploadPrescription}
                onPress={() => { navigation.navigate('UploadReports') }}
                canbutton={styles.canbutton} />
            <Bottoncomponet
                title={string.UploadReports}
                onPress={() => { navigation.navigate('UploadReports') }}
                loginbutton={styles.loginbutton} />
        </View>
    )
}

export default MedicalReports

