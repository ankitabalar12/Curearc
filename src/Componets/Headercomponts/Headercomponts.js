import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import { useNavigation } from '@react-navigation/native'

const Headercomponts = ({ title,onPress}) => {
    const navigation = useNavigation();
    return (

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
            <View style={styles.flexderactionrow}>
                <TouchableOpacity onPress={onPress} style={styles.threeview}>
                    <Image source={icons.hamburger} style={styles.hamburgerstyle}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.threeview}>
                    <View style={styles.flexrowview}>
                        <Image source={icons.location} style={styles.locationstyle}></Image>
                        <Text style={styles.ahemtext}>Ahemdabad</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.threeview}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}} style={styles.positionview}>
                        <Image source={icons.bell} style={styles.bellstyle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.positionview2}>
                        <Image source={icons.map} style={styles.mapstyle}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.textbutton}>{title}</Text>
        </LinearGradient>

    )
}

export default Headercomponts

const styles = StyleSheet.create({
    headerview: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
    },
    flexderactionrow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginTop: 10


    },
    threeview: {
        height: 30, width: 120,
        alignSelf: "center",
        marginTop: 15

    },
    hamburgerstyle: {
        height: 20, width: 20, tintColor: '#fff',

    },
    flexrowview: {
        flexDirection: "row",
    },
    locationstyle: {
        height: 18, width: 18,
    },
    ahemtext: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 5
    },
    bellstyle: {
        height: 20,
        width: 20,
        tintColor: "#fff"
    },
    positionview: {
        position: "absolute",
        right: 40
    },
    mapstyle: {
        height: 25, width: 25
    },
    positionview2: {
        position: 'absolute', right: 5, marginTop: -2
    }
})