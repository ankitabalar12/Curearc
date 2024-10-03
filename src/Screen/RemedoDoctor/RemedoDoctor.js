import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderFour from '../../Componets/HeaderFour/HeaderFour';
import { string } from '../../Helper/string';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';

const RemedoDoctor = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState()
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.containar}>
            <HeaderFour
                titel={string.RemedoDoctor}
                onPress={() => {
                    setModalVisible(true)
                }} />
            <ScrollView>
                <View style={styles.weview}>
                    <View style={styles.flexrow}>
                        <Text style={styles.welcomtext}>{string.Welcome}   <Text style={styles.gurutex}>DR. GUHA</Text></Text>
                    </View>
                    <TouchableOpacity  style={styles.posi}>
                        <Image source={icons.info} style={styles.infostyle}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.flewarpview}>
                    <TouchableOpacity onPress={() => { navigation.navigate('OfflinePatient') }} style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.onlnine}></Image>
                            <Text style={styles.onlintext}>{string.OnlinePatient}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.pati}></Image>
                            <Text style={styles.onlintext}>{string.OnlinePatient}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Calender') }} style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.calender}></Image>
                            <Text style={styles.onlintext}>{string.Calender}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ReportsRemedo') }}  style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.calen}></Image>
                            <Text style={styles.onlintext}>{string.Report}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.xyz}></Image>
                            <Text style={styles.onlintext}>{string.ManageProfile}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainview}>
                        <View>
                            <Image style={styles.img} source={icons.dasdor}></Image>
                            <Text style={styles.onlintext}>{string.Dashboard}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.martop} />
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
                        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.profileview}>
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
                        <TouchableOpacity onPress={() => { navigation.navigate('') }} style={styles.flexrowviewstyle}>
                            <Image source={icons.key} style={styles.keystyle}></Image>
                            <Text style={styles.homestyletext}>{string.ChangePassword}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineviewstyle}></View>
                        <TouchableOpacity onPress={() => { navigation.navigate('') }} style={styles.flexrowviewstyle}>
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

export default RemedoDoctor

