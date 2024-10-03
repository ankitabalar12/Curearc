import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import { string } from '../../Helper/string';

const Onboard = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index

  return (
    <View style={styles.container}>
      <View style={styles.viewone}>
        <ImageBackground source={icons.stethoscope} style={[styles.setscopstyle,]}>
          <View style={styles.overlay} />
          <Image style={styles.logoicon} source={icons.logonew}></Image>
        </ImageBackground>
      </View>

      <LinearGradient
        style={styles.viewtwo}
        colors={['#a9a700', '#a0a300', '#989f01', '#8c9901',
          '#809400', '#728d01', '#578001', '#457801',
          '#3d7401', '#286a01', '#1d6500', '#136001']}>
      </LinearGradient>
      <View style={styles.swiperview}>
      <Swiper
      loop={true}
      autoplay={false}
      autoplayTimeout={3}
      onIndexChanged={(index) => setCurrentIndex(index)} // Track current slide
      showsPagination={currentIndex === 0} // Only show dots on the first slide
      paginationStyle={styles.paginationStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    >
          <View style={styles.slide}>
            <Image style={styles.images} source={icons.doctoricon}></Image>
            <Text style={styles.itistext}>{string.itis}</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.WelcomeBacktest}>{string.WelcomeBack}  <Text style={styles.Backstyle}>{string.Back}</Text></Text>
            <TouchableOpacity  onPress={() => { navigation.navigate('DoctorLogin') }}>
              <Image source={icons.stetjoscopeicon} style={styles.stetjoscopeiconstyle}></Image>
              <Text style={styles.Doctortext}>{string.Doctor}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('PatientLogin') }}>
              <Image source={icons.hospital} style={styles.stetjoscopeiconstyle}></Image>
              <Text style={styles.Doctortext}>{string.Patient}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('ClinicLogin') }}>
              <Image source={icons.clinic} style={styles.stetjoscopeiconstyle}></Image>
              <Text style={styles.Doctortext}>{string.Clinic}</Text>
            </TouchableOpacity>
          </View>
           {/* <View style={styles.slide}>
            <Text style={styles.text}>Slide 3</Text>
          </View> */}
        </Swiper>
      </View>
    </View>

  )
}

export default Onboard

