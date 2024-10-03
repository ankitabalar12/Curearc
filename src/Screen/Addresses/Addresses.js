import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { TouchableOpacity } from 'react-native'

const Addresses = () => {
  return (
    <View style={styles.container}>
     <HeaderThree
        titel={string.Myaddresses} />
      <ScrollView>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainview}>
            <View style={styles.flexrowview}>
                <Image source={icons.home} style={styles.homestyle}></Image>
                <Text style={styles.hometext}>{string.home}</Text>
            </View>
            <Text style={styles.Manishprajapatitext}>{string.Manishprajapati}</Text>
            <Text style={styles.BlockRatext}>{string.BlockRammurthynagar}</Text>
        </TouchableOpacity>
        
        <View style={ styles.martop}/>
        </ScrollView>
        </View>
  )
}

export default Addresses

