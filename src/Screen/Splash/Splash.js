import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logostyles}></Image>
      <Image source={icons.logotwo} style={styles.logotwostyles}></Image>
    </View>
  )
}

export default Splash

