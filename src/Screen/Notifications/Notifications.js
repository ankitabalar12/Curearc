import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { ScrollView } from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.Notifications} />
                <ScrollView>
            <TouchableOpacity style={styles.mainview}>
                <View style={styles.flexrowview}>
                    <Text style={styles.addmin}>{string.adminAdd}</Text>
                    <Text style={styles.time}>10mins ago</Text>
                </View>
                <TouchableOpacity style={styles.position}>
                    <Image source={icons.deletedtwo} style={styles.deleteicon}></Image>
                </TouchableOpacity>
                <Text style={styles.readabletext}>{string.readable}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainview}>
                <View style={styles.flexrowview}>
                    <Text style={styles.addmin}>{string.flatdiscount}</Text>
                    <Text style={styles.time}>10mins ago</Text>
                </View>
                <TouchableOpacity style={styles.position}>
                    <Image source={icons.deletedtwo} style={styles.deleteicon}></Image>
                </TouchableOpacity>
                <Text style={styles.readabletext}>{string.readable}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainview}>
                <View style={styles.flexrowview}>
                    <Text style={styles.addmin}>{string.Youwononecoupen}</Text>
                    <Text style={styles.time}>10mins ago</Text>
                </View>
                <TouchableOpacity style={styles.position}>
                    <Image source={icons.deletedtwo} style={styles.deleteicon}></Image>
                </TouchableOpacity>
                <Text style={styles.readabletext}>{string.readable}</Text>
            </TouchableOpacity>
            <View style={ styles.martopview}/>
            </ScrollView>
        </View>
    )
}

export default Notifications

