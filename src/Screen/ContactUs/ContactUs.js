import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { string } from '../../Helper/string'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ContactUs = () => {
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.ContactUs} />
            <ScrollView>
                <View style={styles.mainview}>
                    <View style={styles.addresviewstyle}>
                        <Image style={styles.homestty} source={icons.home}></Image>
                        <Text style={styles.addressvtext}>Address line 1,{'\n'}
                            Landmark, opp. Palace,{'\n'}
                            st no.3,{'\n'}
                            City - 000 000</Text>
                           
                    </View>
                </View>
                <View style={styles.mainviewcall}>
                    <View style={styles.flexdrac}>
                        <Image source={icons.call} style={styles.callstyle}></Image>
                        <Text style={styles.numbertext}>+91 99999 99999</Text>
                    </View>
                </View>
                <View style={styles.mainviewcall}>
                    <View style={styles.flexdrac}>
                        <Image source={icons.mail} style={styles.callstyle}></Image>
                        <Text style={styles.numbertext}>info@website.com</Text>
                    </View>
                </View>
              
            </ScrollView>
            <TouchableOpacity style={styles.callcolorbutton}>
                <LinearGradient
    style={[styles.headerview,]}
    colors={[
        '#136001',
        '#1d6500',
        '#286a01',
        '#3d7401',
        '#457801',
        '#578001',
        '#728d01',
        '#809400',
        '#8c9901',
        '#989f01',
        '#a0a300',
        '#a9a700',
    ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
        <Image style={styles.callcol} source={icons.call}></Image>
    </LinearGradient>
                </TouchableOpacity>
        </View>
    )
}

export default ContactUs

