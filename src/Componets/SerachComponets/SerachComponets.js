import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'

const SerachComponets = ({ placeholder, placeholderTextColor, onChangeText }) => {
    return (
        <View style={styles.serchview}>
            <View style={styles.flexrow}>
            <Image source={icons.search} style={styles.searchicon}></Image>
            <TextInput
                style={styles.searchInput}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
            />
            </View>
        </View>
    )
}

export default SerachComponets

const styles = StyleSheet.create({
    serchview: {
        height: 50, width: '100%', backgroundColor: '#fff', 
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchicon: {
        height: 20, width: 20, alignSelf:"center", marginLeft:'5%'
    },
    flexrow:{
        flexDirection:'row', 
    }
})