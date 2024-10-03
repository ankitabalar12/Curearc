import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import LinearGradient from 'react-native-linear-gradient'

const UploadImages = () => {
  const [selectedletter, setSelectedLetter] = useState()
  useEffect(() => {
    const id = 1
    setSelectedLetter(id)
  }, [])

  const selectedtext = (id) => {
    setSelectedLetter(id)
  }
  return (
    <View style={styles.container}>
      <HeaderThree
        titel={string.MedicalReports} />
      <View style={styles.flexrow}>
        <TouchableOpacity onPress={() => {
          selectedtext(1)
        }}>
          <Text style={[styles.doctext, { color: selectedletter === 1 ? '#126000' : '#ccc' }]}>{string.Reports}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectedtext(2)
        }}>
          <Text style={[styles.doctext, { color: selectedletter === 2 ? '#126000' : '#ccc' }]}>{string.Prescription}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineview}>
        <View style={styles.linerow}>
          <View style={[styles.haftline, { backgroundColor: selectedletter === 1 ? "#126000" : '#ccc' }]}></View>
          <View style={[styles.haftline, { backgroundColor: selectedletter === 2 ? "#126000" : '#ccc' }]}></View>
        </View>
      </View>
      <View style={styles.flexrow2}>
        <View style={[styles.Triangleview, { borderTopColor: selectedletter === 1 ? "#126000" : "#fff" }]}></View>
        <View style={[styles.Triangleview, { borderTopColor: selectedletter === 2 ? "#126000" : "#fff" }]}></View>
      </View>
      {selectedletter == '1' ? (
        <>
          <View style={styles.medicalrepo}>
            <View style={styles.imgviewstyl}>
              <View>
                <ImageBackground style={styles.backgroundimg} source={icons.repotsimg}>
                  <View style={styles.flexrowviewstyle}>
                    <TouchableOpacity style={styles.greenview}>
                      <Image source={icons.verticalalignbot} style={styles.iconstylesdle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenview}>
                      <Image source={icons.delete} style={[styles.iconstylesdle, styles.iconstylesdle3]}></Image>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={styles.ReportofDiabitiestext}>{string.ReportofDiabities}</Text>
              </View>

            </View>
            <View style={styles.imgviewstyl}>
              <View>
              <ImageBackground style={styles.backgroundimg} source={icons.repotsimg}>
                <View style={styles.flexrowviewstyle}>
                  <TouchableOpacity style={styles.greenview}>
                    <Image source={icons.verticalalignbot} style={styles.iconstylesdle}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.greenview}>
                    <Image source={icons.delete} style={[styles.iconstylesdle, styles.iconstylesdle3]}></Image>
                  </TouchableOpacity>
                  </View>
              </ImageBackground>
              <Text style={styles.ReportofDiabitiestext}>{string.ReportofDiabities}</Text>
                </View>
            </View>
           
          </View>
          <TouchableOpacity style={styles.roundview}>
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
    <Image style={styles.addstyle} source={icons.add}></Image>
    </LinearGradient>
    </TouchableOpacity>
        </>
      ) : null}
      
    </View>
  )
}

export default UploadImages

