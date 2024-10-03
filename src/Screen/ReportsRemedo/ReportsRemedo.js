import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { string } from '../../Helper/string'
import HeaderFour from '../../Componets/HeaderFour/HeaderFour'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import { icons } from '../../Helper/icons'

const ReportsRemedo = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState()
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.containar}>
            <HeaderFour
                titel={string.Reports}
                onPress={() => {
                    setModalVisible(true)
                }} />
            <View style={styles.weview}>
                <View style={styles.flexrow}>
                    <Text style={styles.welcomtext}>{string.clinicIndiranagar}</Text>
                </View>
                <TouchableOpacity style={styles.posi}>
                    <Image source={icons.arrowdrop} style={styles.infostyle}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.appoinrowview}>
                <Text style={styles.apptext}>{string.Appointments}</Text>
                <TouchableOpacity style={styles.greenvie}>
                    <View style={styles.flegrrow}>
                        <Image source={icons.arrowup} style={styles.arrowupstyle}></Image>
                        <Text style={styles.number}>20%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podwonarrow}>
                    <Image style={styles.dwonarrow} source={icons.verticalalign}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.numbertext}>75</Text>
            <View style={styles.bookrdrow}>

                <View style={styles.bookedview}></View>
                <View style={styles.cancelledview}></View>
            </View>
            <View style={styles.bookrow}>
                <View style={styles.dotsview}>
                    <View style={styles.flexr}>
                        <View style={styles.dot}></View>
                        <Text style={styles.bookedtextst}>75 % Booked</Text>
                    </View>
                </View>
                <View style={[styles.dotsview, styles.dotsview2]}>
                    <View style={styles.flexr}>
                        <View style={[styles.dot, styles.dot2]}></View>
                        <Text style={styles.bookedtextst}>25 % Cancelled</Text>
                    </View>
                </View>
            </View>
            <View style={styles.blackand}>
                <View style={styles.grayview}></View>
                <View style={styles.blackview}></View>
            </View>
            <View style={styles.bookrow}>
                <View style={[styles.dotsview, styles.dotsview3]}>
                    <View style={styles.flexr}>
                        <View style={styles.dot}></View>
                        <Text style={styles.bookedtextst}>50% New Patients</Text>
                    </View>
                </View>
                <View style={[styles.dotsview, styles.dotsview3]}>
                    <View style={styles.flexr}>
                        <View style={[styles.dot, styles.dot3]}></View>
                        <Text style={[styles.bookedtextst, styles.bookedtextst2]}>50% New Patients</Text>
                    </View>
                </View>
            </View>
            <View style={styles.linviewstyle}></View>
            <View style={styles.appoinrowview}>
                <Text style={styles.apptext}>{string.Appointments}</Text>
                <TouchableOpacity style={[styles.greenvie, styles.greenviered]}>
                    <View style={styles.flegrrow}>
                        <Image source={icons.arrowup2} style={styles.arrowupstyle}></Image>
                        <Text style={styles.number}>20%</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podwonarrow}>
                    <Image style={styles.dwonarrow} source={icons.verticalalign}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.numbertext}>Rs. 75,000</Text>
            <View style={styles.bookrdrow}>

                <View style={styles.bookedview}></View>
                <View style={styles.cancelledview}></View>
            </View>
            <View style={styles.bookrow}>
                <View style={styles.dotsview}>
                    <View style={styles.flexr}>
                        <View style={styles.dot}></View>
                        <Text style={styles.bookedtextst}>75 % Booked</Text>
                    </View>
                </View>
                <View style={[styles.dotsview, styles.dotsview2]}>
                    <View style={styles.flexr}>
                        <View style={[styles.dot, styles.dot2]}></View>
                        <Text style={styles.bookedtextst}>25 % Cancelled</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
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

export default ReportsRemedo

