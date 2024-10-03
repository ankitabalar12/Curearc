import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const DoctorsProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
      <HeaderThree
        titel={string.DoctorProfile} />
      <View style={styles.flexrow}>
        <View style={styles.imgview}>
          <Image style={styles.drstyle} source={icons.dr}></Image>
        </View>
        <View style={styles.marlef}>
          <Text style={styles.shatext}>Dr, Shah</Text>
          <Text style={styles.Mbbstext}>MBBS, Mch - Cardio Theracic & FRCH Surgey</Text>
          <View style={styles.buttonview}>
            <View>
              <TouchableOpacity style={styles.buttonstyle}>
                <Text style={styles.bookimgtext}>{string.boking}</Text>
              </TouchableOpacity>
              <Text style={styles.waittimetext}>Wait time: Upto 1 hour <Text style={styles.buttstyle}>*</Text></Text>
            </View>
            <View>
              <Bottoncomponet
                title={string.PrimeumBoook}
                titelstylepro={styles.titelstylepro}
                Profilebutton={styles.Profilebutton} />
              <Text style={styles.waittimetext2}>Wait time: Upto 1 hour <Text style={styles.buttstyle}>*</Text></Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.flexrowend}>
        <Image style={styles.starstyle} source={icons.star}></Image>
        <Image style={styles.starstyle} source={icons.star}></Image>
        <Image style={styles.starstyle} source={icons.star}></Image>
        <Image style={styles.starstyle} source={icons.star}></Image>
        <Image style={styles.starstyle} source={icons.starhalf}></Image>
        <Text style={styles.ratext}>(500)</Text>
      </View>
      <View style={styles.timinrow}>
        <Text style={styles.AvilableTimingsstyle}>{string.AvilableTimings}</Text>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}
          style={styles.arrowtop}>
          <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
        </TouchableOpacity>
      </View>
      {isVisible && (
        <>
          <View style={styles.flexrowselecte}>
            <View style={styles.selecttwobox}>
              <View style={styles.flexximhtexttyle}>
                <Image source={icons.cardtravel} style={styles.thumbupstyles}></Image>
                <Text style={styles.Experiencetext}>{string.Experience}</Text>
              </View>
              <View style={styles.flexximhtexttyle}>
                <Image source={icons.attachmoney} style={styles.thumbupstyles}></Image>
                <Text style={styles.Experiencetext}>{string.ConsultancyFee}</Text>
              </View>
              <View style={styles.flexximhtexttyle}>
                <Image source={icons.querybuilder} style={styles.thumbupstyles}></Image>
                <Text style={styles.Experiencetext}>{string.Availability}</Text>
              </View>
              <View style={styles.flexximhtexttyle}>
                <Image source={icons.thumbup} style={styles.thumbupstyles}></Image>
                <Text style={styles.Experiencetext}>{string.Feedback}</Text>
              </View>
            </View>
            <View style={styles.selecttwobox}>
              <Text style={styles.textstyleend}>15 years</Text>
              <Text style={styles.textstyleend}>$25</Text>
              <Text style={styles.textstyleend}>12:00 to 13:00</Text>
              <View style={styles.flexrowend}>
                <Text style={styles.textstyleend}>4.9</Text>
                <Image style={styles.starstyle} source={icons.star}></Image>
                <Image style={styles.starstyle} source={icons.star}></Image>
                <Image style={styles.starstyle} source={icons.star}></Image>
                <Image style={styles.starstyle} source={icons.star}></Image>
                <Image style={styles.starstyle} source={icons.starhalf}></Image>
                <Text style={[styles.ratext, styles.ratexttwo]}>(500)</Text>
              </View>
            </View>
          </View>
        </>)}
      <View style={[styles.timinrow, styles.timinrow4]}>
        <Text style={styles.AvilableTimingsstyle}>{string.AvilableTimings}</Text>
        <TouchableOpacity onPress={() => setIsVisible2(!isVisible2)}
          style={styles.arrowtop}>
          <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
        </TouchableOpacity>
      </View>
      {isVisible2 && (
        <>
          <View style={styles.twoviewrow}>
            <View style={styles.oneviewstyle}>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Mon</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>12:00 to 13:00</Text>
                </View>
              </View>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Tue</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>12:00 to 13:00</Text>
                </View>
              </View>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Wed</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>12:00 to 13:00</Text>
                </View>
              </View>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Thu</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>12:00 to 13:00</Text>
                </View>
              </View>
            </View>

            <View style={styles.oneviewstyle}>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Fri</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>Closed</Text>
                </View>
              </View>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Sat</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>11:00 to 12:00</Text>
                </View>
              </View>
              <View style={styles.monnamerow}>
                <View style={styles.months}>
                  <Text style={styles.montext}>Sun</Text>
                </View>
                <View style={styles.tieview}>
                  <Text style={styles.timetext}>Closed</Text>
                </View>
              </View>
            </View>
          </View>
        </>)}
      <View style={[styles.timinrow, styles.timinrow4]}>
        <Text style={styles.AvilableTimingsstyle}>{string.Specializations}</Text>
        <TouchableOpacity onPress={() => setIsVisible3(!isVisible3)}
          style={styles.arrowtop}>
          <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
        </TouchableOpacity>
      </View>
      {isVisible3 && (
        <>
          <View style={[styles.viewstyle, styles.viewstyle3]}>
            <View style={styles.viewstyletwo3}>
              <Image style={styles.truincon} source={icons.trueicon}></Image>
            </View>
            <View style={styles.viewthree}>
              <Text style={styles.treattext}>General Physician</Text>
            </View>
          </View>
          <View style={[styles.viewstyle, styles.viewstyle3]}>
            <View style={styles.viewstyletwo3}>
              <Image style={styles.truincon} source={icons.trueicon}></Image>
            </View>
            <View style={styles.viewthree}>
              <Text style={styles.treattext}>Family Physician</Text>
            </View>
          </View>
          <View style={[styles.viewstyle, styles.viewstyle3]}>
            <View style={styles.viewstyletwo3}>
              <Image style={styles.truincon} source={icons.trueicon}></Image>
            </View>
            <View style={styles.viewthree}>
              <Text style={styles.treattext}>Cardiologist</Text>
            </View>
          </View>
        </>)}
        <View style={styles.lineviewstyle}></View>
        <Text style={[styles.AvilableTimingsstyle,styles.AvilableTimingsstyletwo]}>{string.AppoloHospitals}</Text>
        </ScrollView>
    </View>
  )
}

export default DoctorsProfile

