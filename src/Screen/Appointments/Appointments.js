import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { Image } from 'react-native-animatable'
import { icons } from '../../Helper/icons'
import ReactNativeModal from 'react-native-modal'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const Appointments = () => {
    const [modalVisible, setModalVisible] = useState()
    const [modalVisible2, setModalVisible2] = useState()
    const [modalVisible3, setModalVisible3] = useState()
    const [selectedbutton, setSelectedButton] = useState()
    const [review, setReview] = useState()
    const [selectedStars, setSelectedStars] = useState(0);
    const handleRatingPress = (rating) => {
        setSelectedStars(rating);  // Update the state with the selected rating
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2)
    }
    const toggleModal3 = () => {
        setModalVisible3(!modalVisible3)
    }
    const selectBotton = (id) => {
        setSelectedButton(id)
    }
    return (
        <View style={styles.container}>

            <HeaderThree
                titel={string.MyAppointments} />
            <ScrollView>
                <Text style={styles.UpcomingAppointmentstext}>{string.UpcomingAppointments}</Text>
                <View style={styles.appoimentview}>
                    <View style={styles.flexrowview}>
                        <View style={styles.oneviewstyle}>
                            <Text style={styles.AppoloHospitalstext}>{string.AppoloHospitals}</Text>
                            <Text style={styles.akshyatext}>{string.akshya}</Text>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.calendartoday} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>26 Dec 2020, Friday</Text>
                            </View>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.schedule} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>01:00 Pm</Text>
                            </View>
                        </View>
                        <View style={[styles.oneviewstyle, styles.oneviewstyle2]}>
                            <View style={styles.flexrowviewpro}>
                                <View style={styles.profview}>
                                    <Image source={icons.dr} style={styles.derstyle}></Image>
                                </View>
                                <TouchableOpacity style={styles.posio}>
                                    <Image source={icons.alarm} style={styles.alarmstyle}></Image>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.shahtext}>Dr. Shah</Text>
                                    <Text style={styles.shahtext2}>Cardiac surgeon</Text>
                                    <Text style={styles.Loremstyle}>{string.Lorem}</Text>
                                </View>
                            </View>
                            <View style={styles.flexdrationrow}>
                                <TouchableOpacity>
                                    <Text style={styles.bookedtext}>{string.BookedFollowup}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setModalVisible(true)
                                }}>
                                    <Text style={[styles.bookedtext, styles.bookedtext2]}>{string.CancleAppointmet}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.appoimentview, styles.appoimentview2]}>
                    <View style={styles.flexrowview}>
                        <View style={styles.oneviewstyle}>
                            <Text style={styles.AppoloHospitalstext}>{string.AppoloHospitals}</Text>
                            <Text style={styles.akshyatext}>{string.akshya}</Text>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.calendartoday} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>26 Dec 2020, Friday</Text>
                            </View>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.schedule} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>01:00 Pm</Text>
                            </View>
                        </View>
                        <View style={[styles.oneviewstyle, styles.oneviewstyle2]}>
                            <View style={styles.flexrowviewpro}>
                                <View style={styles.profview}>
                                    <Image source={icons.dr} style={styles.derstyle}></Image>
                                </View>
                                <TouchableOpacity style={styles.posio}>
                                    <Image source={icons.alarmoff} style={styles.alarmstyle}></Image>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.shahtext}>Dr. Shah</Text>
                                    <Text style={styles.shahtext2}>Cardiac surgeon</Text>
                                    <Text style={styles.Loremstyle}>{string.Lorem}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(true)
                            }}>
                                <Text style={[styles.bookedtext, styles.bookedtext3]}>{string.CancleAppointmet}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.appoimentview, styles.appoimentview2]}>
                    <View style={styles.flexrowview}>
                        <View style={styles.oneviewstyle}>
                            <Text style={styles.AppoloHospitalstext}>{string.AppoloHospitals}</Text>
                            <Text style={styles.akshyatext}>{string.akshya}</Text>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.calendartoday} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>26 Dec 2020, Friday</Text>
                            </View>
                            <View style={styles.flexrowappo}>
                                <Image source={icons.schedule} style={styles.datapicstyle}></Image>
                                <Text style={styles.dectext}>01:00 Pm</Text>
                            </View>
                        </View>
                        <View style={[styles.oneviewstyle, styles.oneviewstyle2]}>
                            <View style={styles.flexrowviewpro}>
                                <View style={styles.profview}>
                                    <Image source={icons.dr} style={styles.derstyle}></Image>
                                </View>
                                {/* <TouchableOpacity style={styles.posio}>
                                <Image source={icons.alarmoff} style={styles.alarmstyle}></Image>
                            </TouchableOpacity> */}
                                <View>
                                    <Text style={styles.shahtext}>Dr. Shah</Text>
                                    <Text style={styles.shahtext2}>Cardiac surgeon</Text>
                                    <Text style={styles.Loremstyle}>{string.Lorem}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setModalVisible3(true)
                            }} style={styles.rowview}>
                                <Text style={[styles.Feedbackstyle]}>{string.Feedback}</Text>
                                <Image style={styles.forwardstyle} source={icons.forward}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.matrtopview}></View>
            </ScrollView>
            <ReactNativeModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'rgba(0, 0, 0, 0.0)'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.5}>
                <View style={styles.mainmodel}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                    }} style={styles.marright}>
                        <Image source={icons.clear} style={styles.closeiconstyle}></Image>
                    </TouchableOpacity>
                    <View style={styles.cancltextrow}>
                        <Text style={styles.CancleAppointmenttext}>{string.CancleAppointment}</Text>
                    </View>

                    <TouchableOpacity onPress={() => selectBotton(1)} style={[styles.changedrow, styles.changedrow2]}>
                        {selectedbutton === 1 ? (
                            <>
                                <TouchableOpacity onPress={() => selectBotton(1)} style={styles.maincircleview}>
                                    <TouchableOpacity style={styles.whiteview}>
                                        <TouchableOpacity style={styles.circleview}></TouchableOpacity>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <TouchableOpacity onPress={() => selectBotton(1)} style={styles.selectedview}></TouchableOpacity>

                            </>)}
                        <Text style={styles.Ihavechangedmymindtext}>{string.Ihavechangedmymind}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectBotton(2)} style={[styles.changedrow, styles.changedrow2]}>
                        {selectedbutton === 2 ? (
                            <>
                                <TouchableOpacity onPress={() => selectBotton(2)} style={styles.maincircleview}>
                                    <TouchableOpacity style={styles.whiteview}>
                                        <TouchableOpacity style={styles.circleview}></TouchableOpacity>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <TouchableOpacity onPress={() => selectBotton(2)} style={styles.selectedview}></TouchableOpacity>
                            </>)}
                        <Text style={styles.Ihavechangedmymindtext}>{string.Doctorisnotavailable}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectBotton(3)} style={[styles.changedrow, styles.changedrow2]}>
                        {selectedbutton === 3 ? (<>
                            <TouchableOpacity onPress={() => selectBotton(3)} style={styles.maincircleview}>
                                <TouchableOpacity style={styles.whiteview}>
                                    <TouchableOpacity style={styles.circleview}></TouchableOpacity>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </>) : (
                            <>
                                <TouchableOpacity onPress={() => selectBotton(3)} style={styles.selectedview}></TouchableOpacity>
                            </>
                        )}

                        <Text style={styles.Ihavechangedmymindtext}>{string.Others}</Text>
                    </TouchableOpacity>
                    <Bottoncomponet
                        title={string.Cancle}
                        onPress={() => {
                            setModalVisible2(true);
                            // s setModalVisible(false);
                        }}
                        loginbutton={styles.loginbutton} />
                </View>
            </ReactNativeModal>
            <ReactNativeModal
                isVisible={modalVisible2}
                onBackdropPress={toggleModal2}
                transparent={true}
                backdropColor={'rgba(258, 258, 258, 0.9)'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.5}>
                <View style={styles.centermodal}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible2(false)
                    }} style={styles.marright}>
                        <Image source={icons.clear} style={styles.closeiconstyle}></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                        {string.Please}{' '}
                        <Text style={styles.nonRefundable}>non-refundable</Text>.
                    </Text>
                    <Bottoncomponet
                        title={string.YeIwanttocancle}
                        onPress={() => {
                            setModalVisible2(false);

                        }}
                        canbutton={styles.canbutton} />
                    <Bottoncomponet
                        title={string.Dootcancle}
                        onPress={() => {
                            setModalVisible2(true);
                            // s setModalVisible(false);
                        }}
                        loginbutton={styles.loginbutton} />
                </View>
            </ReactNativeModal>
            <ReactNativeModal
                isVisible={modalVisible3}
                onBackdropPress={toggleModal3}
                transparent={true}
                backdropColor={'rgba(258, 258, 258, 0.9)'}
                style={{ margin: 0, bottom: 0 }}
                backdropOpacity={0.5}>
                <View style={styles.ratingview}>
                    <View style={styles.centervierw} />

                    <Text style={styles.whatisyouratingtext}>{string.whatisyourating}</Text>
                    <View style={styles.ratrow}>

                        {[...Array(5).keys()].map((index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.margstar}
                                onPress={() => handleRatingPress(index + 1)}
                            >
                                <Image
                                    source={index < selectedStars ? icons.star : icons.big}
                                    style={styles.ratinicon}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.Pleaseshareyourfeedbacktext}>{string.Pleaseshareyourfeedback}</Text>
                    <View style={styles.styleviewdescrip}>
                        <TextInput
                            placeholder="Your Review"
                            placeholderTextColor="#C2C2C2"
                            value={review}
                            onChangeText={(review) => setReview(review)}
                            style={styles.sttyinput}
                            multiline={true}
                        />
                    </View>
                    <Bottoncomponet
                        title={string.Send}
                        onPress={() => {
                            setModalVisible3(false)
                        }}
                        loginbutton={styles.loginbutton} />
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default Appointments

