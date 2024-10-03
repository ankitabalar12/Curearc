import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { styles } from './styles'
import { string } from '../../Helper/string'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'
import LinearGradient from 'react-native-linear-gradient'
import ReactNativeModal from 'react-native-modal'
import CustomCalendartwo from '../../Componets/CustomCalendartwo/CustomCalendartwo'

const PremiumBookAppointment = ({navigation}) => {
  const [selectetime, setSelectedTime] = useState('')
  const [pateintname, setPateintName] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState()
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const avilbletime = (id) => {
    setSelectedTime(id)
  }
  const handlepatient = async () => {

    const newErrors = {};
    if (!pateintname) {
      newErrors.pateintname = 'Please enter pateint name';
    }
    if (!phonenumber) {
      newErrors.phonenumber = 'Please enter phone number';
    }

    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);
      return;
    }
    setErrors({});
    alert('Form submitted successfully');
    navigation.navigate('OnlinePatient')
  }
  return (
    <View style={styles.container}>
      <HeaderThree
        titel={string.PremiumBook} />
         <TouchableOpacity  style={styles.posi}>
            <Image style={styles.stylesinfo} source={icons.info}></Image>
        </TouchableOpacity>
      <ScrollView>
        <View style={styles.flexrow}>
          <View style={styles.imgview}>
            <Image style={styles.drstyle} source={icons.dr}></Image>
          </View>
          <View style={styles.marlef}>
            <Text style={styles.shatext}>Dr, Shah</Text>
            <Text style={styles.Mbbstext}>MBBS, Mch - Cardio Theracic & FRCH Surgey</Text>

          </View>
        </View>
        <CustomCalendartwo/>
        <Text style={styles.AppoloHospitalstext}>{string.AvilableTime}</Text>
        <View style={styles.tiemview}>

          <TouchableOpacity onPress={() => avilbletime(1)}>
            {selectetime === 1 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>12:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>12:00 PM</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => avilbletime(2)}>
            {selectetime === 2 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>02:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>02:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(3)}>
            {selectetime === 3 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>03:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>03:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(4)}>
            {selectetime === 4 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>12:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>12:00 PM</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.tiemview}>

          <TouchableOpacity onPress={() => avilbletime(5)}>
            {selectetime === 5 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>01:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>01:00 PM</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => avilbletime(6)}>
            {selectetime === 6 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>02:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>02:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(7)}>
            {selectetime === 7 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>03:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>03:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(8)}>
            {selectetime === 8 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>01:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>01:00 PM</Text>
            )}
          </TouchableOpacity>



        </View>
        <View style={styles.tiemview}>

          <TouchableOpacity onPress={() => avilbletime(9)}>
            {selectetime === 9 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>12:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>12:00 PM</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => avilbletime(10)}>
            {selectetime === 10 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>01:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>01:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(11)}>
            {selectetime === 11 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>02:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>02:00 PM</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avilbletime(12)}>
            {selectetime === 12 ? (
              <LinearGradient
                style={styles.headerview}
                colors={[
                  '#a9a700',
                  '#a0a300',
                  '#989f01',
                  '#8c9901',
                  '#809400',
                  '#728d01',
                  '#578001',
                  '#457801',
                  '#3d7401',
                  '#286a01',
                  '#1d6500',
                  '#136001',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.timetextstyle}>03:00 PM</Text>
              </LinearGradient>
            ) : (
              <Text style={styles.timetextstyle2}>03:00 PM</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.lineviewstyle}></View>
        <Text style={styles.AppoloHospitalstext}>{string.bookfor}</Text>
        <View style={styles.inputview}>
          <View style={styles.flexrowview}>
            <TextInput
              style={styles.input}
              placeholder="Pateint Name"
              onChangeText={(value) => setPateintName(value)}
              value={pateintname}
            />
            <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
          </View>

        </View>
        {errors.pateintname && <Text style={styles.error}>{errors.pateintname}</Text>}

        <View style={[styles.inputview, styles.inputview3]}>
          <View style={styles.flexrowview}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={(value) => setPhoneNumber(value)}
              value={phonenumber}
            />
            <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
          </View>
        </View>
        {errors.phonenumber && <Text style={styles.error}>{errors.phonenumber}</Text>}
        <Bottoncomponet
          title={string.ConfirmBook}
          onPress={() => {
            handlepatient();
            setModalVisible(true);
          }}
          loginbutton={styles.loginbutton} />
      </ScrollView>
      <ReactNativeModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        transparent={true}
        backdropColor={'rgba(0, 0, 0, 0.0)'}
        style={{ margin: 0, bottom: 0 }}
        backdropOpacity={0.5}>
        <View style={styles.mainviewstyle}>
            <Image style={styles.ackonstyle} source={icons.ackon}></Image>
         <Text style={styles.Yourappointmentwithtext}>Your appointment with {'\n'}<Text style={styles.shahacolor}>DR. SHAH</Text>  has been confirmed on {'\n'} <Text style={styles.shahacolor}>11 Nov 2020 Tue 3:00 PM</Text></Text>
          <Bottoncomponet
            title={string.MyAppointments}
            onPress={() => {
              handlepatient();
              setModalVisible(false);
              navigation.navigate('Appointments')
            }}
            bookbutton={styles.bookbutton} />
         
        </View>
      </ReactNativeModal>
    </View>
  )
}

export default PremiumBookAppointment

