import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Headercomponts from '../../Componets/Headercomponts/Headercomponts'
import SerachComponets from '../../Componets/SerachComponets/SerachComponets'
import { styles } from './styles'
import Swiper from 'react-native-swiper'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import ReactNativeModal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'


const Medicine = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.container}>
      <Headercomponts
        onPress={() => { setModalVisible(true); }}
      // onPress2={() => { navigation.navigate('Notifications') }}
      />
      <ScrollView>
        <SerachComponets
          style={styles.searchInput}
          placeholder="Search your text here.."
          placeholderTextColor={"#8D8D8D"}
        //  onChangeText={onChangeText}
        />
        <View style={styles.swiperview}>
          <Swiper
            loop={false}
            showsPagination
            paginationStyle={styles.paginationStyle}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <View style={styles.slide}>
              <ImageBackground source={icons.medicine2} style={styles.medicine2style}>
                <View style={styles.textview}>
                <Text style={styles.Itsalongtext}>{string.Itsalong}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={icons.medicine2} style={styles.medicine2style}>
                <Text style={styles.Itsalongtext}>{string.Itsalong}</Text>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={icons.medicine2} style={styles.medicine2style}>
                <Text style={styles.Itsalongtext}>{string.Itsalong}</Text>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={icons.medicine2} style={styles.medicine2style}>
                <Text style={styles.Itsalongtext}>{string.Itsalong}</Text>
              </ImageBackground>
            </View>
          </Swiper>

        </View>
        <View style={styles.imgview}>
          <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
          <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
          <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle3}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle2}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
          </ScrollView>
        </View>
        <View style={styles.imgview}>
          <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
          <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
          <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle3}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle2}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
          </ScrollView>
        </View>
        <View style={styles.imgview}>
          <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
          <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
          <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle3}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle2}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
          </ScrollView>
        </View>
        <View style={styles.imgview}>
          <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
          <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
          <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle3}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle2}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle}></Image>
            </View>
            <View style={styles.imgstylesview}>
              <Image style={styles.imgstyle} source={icons.Rectangle4}></Image>
            </View>
          </ScrollView>
        </View>
        <View style={styles.marto} />
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
          </LinearGradient>
          <ScrollView>
            <TouchableOpacity onPress={() => {
              setModalVisible(false);
            }} style={styles.flexrowviewstyle}>
              <Image source={icons.home} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.home}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('Appointments') }} style={styles.flexrowviewstyle}>
              <Image source={icons.dateimg} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.MyAppointments}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('MedicalReports') }} style={styles.flexrowviewstyle}>
              <Image source={icons.book} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.Medicalrecords}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('FavoutiteDoctors') }} style={styles.flexrowviewstyle}>
              <Image source={icons.sthescop} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.FavouriteDoctors}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('Addresses') }} style={styles.flexrowviewstyle}>
              <Image source={icons.homtop} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.Myaddresses}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('ContactUs') }} style={styles.flexrowviewstyle}>
              <Image source={icons.call} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.ContactUs}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('FAQs') }} style={styles.flexrowviewstyle}>
              <Image source={icons.qa} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.FAQs}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('RemedoDoctor') }} style={styles.flexrowviewstyle}>
              <Image source={icons.abu} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.AboutUs}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity style={styles.flexrowviewstyle}>
              <Image source={icons.info} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.Help}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <TouchableOpacity style={styles.flexrowviewstyle}>
              <Image source={icons.vertical} style={styles.homestyle}></Image>
              <Text style={styles.homestyletext}>{string.Logout}</Text>
            </TouchableOpacity>
            <View style={styles.lineviewstyle}></View>
            <View style={styles.martopview}></View>
            <TouchableOpacity onPress={() => { navigation.navigate('TC') }} style={styles.position}>
              <Text style={styles.TermsandConditionstext}>{string.TermsandConditions}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ReactNativeModal>
    </View>
  )
}

export default Medicine