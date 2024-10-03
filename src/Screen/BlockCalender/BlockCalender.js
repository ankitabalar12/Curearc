import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { string } from '../../Helper/string'
import HeaderFour from '../../Componets/HeaderFour/HeaderFour'
import { styles } from './styles'
import ReactNativeModal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import { icons } from '../../Helper/icons'
import CustomCalendar from '../../Componets/CustomCalendar/CustomCalendar '
import CustomCalendarMultip from '../../Componets/CustomCalendarMultip/CustomCalendarMultip'

const BlockCalender = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState()
    const [selectedattended, setSelectedAttended] = useState()
    const Attended =  (id)=> {
        setSelectedAttended(id)    
    }
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.containar}>
            <HeaderFour
                titel={string.BlockCalender}
                onPress={() => {
                    setModalVisible(true)
                }} />
            <ScrollView>
                <View style={styles.weview}>
                    <View style={styles.flexrow}>
                        <View style={styles.flexrowview}>

                            <View style={styles.appispview}>
                                <View style={styles.clicicfrow}>
                                    <Text style={styles.clinictext}>{string.Clinic}</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.arrowdrop} style={styles.arroestyle}></Image>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.loremtext}>{string.Appololorem}</Text>
                            </View>
                            <View style={styles.appispview2}>
                                <View style={styles.clicicfrow}>
                                    <Text style={styles.clinictext}>{string.Clinic}</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.arrowdrop} style={styles.arroestyle}></Image>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.loremtext}>{string.Appololorem}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <CustomCalendarMultip/>
                <View style={styles.marline}></View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
             
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        {/* <Text style={styles.dots}></Text> */}
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.timrrowview}>
                    <View style={styles.twoviewstyle}>
                        <View style={styles.dots}></View>
                        <View style={styles.dotsline}></View>
                        <Text style={styles.dots}></Text>
                    </View>
                    <View style={styles.drviewstyle}>
                        <View style={styles.timevirwrow}>
                            <View style={styles.View1}>
                                <Text style={styles.timeview}>2:30 pm</Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.username}>Shweta M</Text>
                                <Text style={styles.Consultationtext}>Consultation</Text>
                                <View style={styles.flwxrovbu}>

                                <TouchableOpacity onPress={()=>{
                                    Attended(1)
                                }} style={[styles.att,{backgroundColor:selectedattended === 1 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 1  ? "#fff" : '#636060'}]}>{string.Attended}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                    Attended(2)
                                }} style={[styles.att,styles.att2,{backgroundColor:selectedattended === 2 ? "#126000" : '#F3F3F3'}]}>
                                    <Text style={[styles.Attendedtext,{color:selectedattended === 2  ? "#fff" : '#636060'}]}>{string.NotAttended}</Text>
                                </TouchableOpacity>
                                
                                </View>
                            </View>
                            <View style={styles.view3}>
                                <TouchableOpacity>
                                    <Image source={icons.more} style={styles.morestyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.matrop}/>
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
                        <TouchableOpacity onPress={() => { navigation.navigate('BlockCalender');
                            setModalVisible(false)
                         }} style={styles.flexrowviewstyle}>
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

export default BlockCalender

