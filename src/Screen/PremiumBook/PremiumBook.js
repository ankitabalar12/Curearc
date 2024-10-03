import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native-animatable'
import { icons } from '../../Helper/icons'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'
import ReactNativeModal from 'react-native-modal'

const PremiumBook = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.container}>
      <HeaderThree
        titel={string.PremiumBook} />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.posi}>
        <Image style={styles.stylesinfo} source={icons.info}></Image>
      </TouchableOpacity>
      <Text style={styles.PremiumBookBenefitstext}>{string.PremiumBookBenefits}</Text>
      <Image style={styles.calenimstyle} source={icons.calenim}></Image>
      <Text style={[styles.instant]}>{string.Instantminutes}</Text>
      <Image style={[styles.calenimstyle, styles.instantwo]} source={icons.tag}></Image>
      <Text style={styles.instant}>{string.FixedConsultationFee}</Text>
      <Image style={[styles.calenimstyle, styles.instantwo]} source={icons.watch}></Image>
      <Text style={[styles.instant]}>{string.Appointmentwit}</Text>
      <Bottoncomponet
        title={string.PaynowBook}
        onPress={() => {
          navigation.navigate('PremiumBookAppointment')
        }}
        bookbuttontwo={styles.bookbuttontwo} />
      <Text style={styles.redtextstyles}>{string.feeatclinic}</Text>
      <ReactNativeModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        transparent={true}
        backdropColor={'rgba(0, 0, 0, 0.0)'}
        style={{ margin: 0, bottom: 0 }}
        backdropOpacity={0.5}
        animationIn="slideInDown"    // Animation when modal appears
        animationOut="slideOutUp">
        <View style={styles.mainviewstyle}>
          <View style={styles.TriangleView}></View>
          <Text style={styles.Nottext}>{string.Not}</Text>
        </View>
      </ReactNativeModal>
    </View>
  )
}

export default PremiumBook

