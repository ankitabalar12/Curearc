import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'

const HeaderFour = ({titel,onPress}) => {
    const navigation = useNavigation();
  return (
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
        <View style={styles.flexrowview}>
            <TouchableOpacity onPress={onPress}>
             <Image source={icons.hamburger} style={styles.hamburgerstyle}></Image>
             </TouchableOpacity>
             <View style={styles.Multispciaview}>
             <Text style={styles.titeltext}>{titel}</Text>
              </View>
              <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}} >
              <Image source={icons.bell} style={styles.bellstyle}></Image>
             </TouchableOpacity>
        </View>
             <View style={styles.dotview}></View>
   </LinearGradient>
  )
}

export default HeaderFour

export const styles = StyleSheet.create({
    headerview: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
    },
    flexrowview:{
        flexDirection:"row", justifyContent:'space-between', marginHorizontal:'5%'
    },
    hamburgerstyle: {
        height: 20, width: 20, tintColor: '#fff',

    },
    titeltext:{
        color:'#fff', fontSize:14, fontWeight:'700'
    },
    
    titeltext2:{
 color:'#fff', fontSize:10, 
    },
    bellstyle: {
        height: 20,
        width: 20,
        tintColor: "#fff"
    },
    dotview:{
        height:5, width:5, backgroundColor:'red',zIndex:1, position:'absolute', right:23, top:24, borderRadius:5
    }
})