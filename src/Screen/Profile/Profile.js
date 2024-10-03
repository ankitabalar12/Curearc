import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import HeaderFour from '../../Componets/HeaderFour/HeaderFour'
import { string } from '../../Helper/string'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import { icons } from '../../Helper/icons'
import { styles } from './styles'

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState()
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <HeaderFour
                titel={string.Profile}
                onPress={() => {
                    setModalVisible(true)
                }} />
            <ScrollView>
                <TouchableOpacity style={styles.editestyle}>
                    <Image source={icons.bordercolor} style={styles.bordercolortext}></Image>
                </TouchableOpacity>
                <View style={styles.imgview}>
                    <Image source={icons.profileim} style={styles.profileimstyle}></Image>
                </View>
                <Text style={styles.username}>Dr. Gayatri Mishra</Text>
                <Text style={styles.msstext}>{string.mss}</Text>
                <View style={styles.linveview} />
                <View style={styles.viewstyle}>
                    <View style={styles.flexdrationview}>
                        <View style={styles.imgadd}>
                            <Image source={icons.Rectangle2df} style={styles.Rectangle2dfstyle}></Image>
                        </View>
                        <View style={styles.textstylest}>
                            <Text style={styles.textstylest1}>Janani Clinic</Text>
                            <Text style={styles.textstylest2}>Janani Clinic</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewstyle}>
                    <View style={styles.flexdrationview}>
                        <View style={styles.imgadd}>
                            <Image source={icons.Rectangle2df} style={styles.Rectangle2dfstyle}></Image>
                        </View>
                        <View style={styles.textstylest}>
                            <Text style={styles.textstylest1}>Janani Clinic</Text>
                            <Text style={styles.textstylest2}>Janani Clinic</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.addrow}>
                    <Image style={styles.addstylesas} source={icons.add}></Image>
                    <Text style={styles.addclin}>Add Clinic</Text>
                </TouchableOpacity>
            </ScrollView>
            <ReactNativeModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'rgba(0, 0, 0, 0.0)'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.5}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
            >
                <View style={styles.mainmodelview}>
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
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                        }}>
                            <Image source={icons.clear} style={styles.clearstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }} style={styles.profileview}>
                            <Image source={icons.profileim} style={styles.profileimstyle}></Image>
                        </TouchableOpacity>
                        <Text style={styles.usename}>Hello, <Text style={styles.jonnatext}>Jonna</Text></Text>
                        <Text style={[styles.usename, styles.usename3]}>{string.Viewandeditprofile}</Text>
                        <Text style={[styles.usename, styles.usename2]}>{string.complete}</Text>
                    </LinearGradient>
                    <ScrollView>
                        <TouchableOpacity onPress={() => { navigation.navigate('Appointments') }} style={styles.flexrowviewstyle}>
                            <Image source={icons.dateimg} style={styles.homestyle}></Image>
                            <Text style={styles.homestyletext}>{string.MyAppointments}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('BlockCalender') }} style={styles.flexrowviewstyle}>
                            <Image source={icons.calendartoday} style={styles.homestyle}></Image>
                            <Text style={styles.homestyletext}>{string.Holiday}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Appointments') }} style={styles.flexrowviewstyle}>
                            <Image source={icons.key} style={styles.keystyle}></Image>
                            <Text style={styles.homestyletext}>{string.ChangePassword}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Appointments') }} style={styles.flexrowviewstyle}>
                            <Image source={icons.share} style={styles.homestyle}></Image>
                            <Text style={styles.homestyletext}>{string.Share}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>
                        <TouchableOpacity style={styles.flexrowviewstyle}>
                            <Image source={icons.info} style={styles.homestyle}></Image>
                            <Text style={styles.homestyletext}>{string.Help}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>

                        <View style={styles.martopview}></View>

                    </ScrollView>
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default Profile
