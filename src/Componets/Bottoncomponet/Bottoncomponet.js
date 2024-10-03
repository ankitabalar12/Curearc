import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Bottoncomponet = ({ title, onPress ,loginbutton,newstyle,styletext,Profilebutton,bookbutton, bookbuttontwo, titelstylepro,canbutton}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                style={[styles.viewtwo,loginbutton,newstyle,Profilebutton,canbutton,bookbutton, bookbuttontwo, ]}
                colors={['#a9a700', '#a0a300', '#989f01', '#8c9901',
                    '#809400', '#728d01', '#578001', '#457801',
                    '#3d7401', '#286a01', '#1d6500', '#136001']}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }}>
                <Text style={[styles.textbutton,styletext,titelstylepro]}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Bottoncomponet

const styles = StyleSheet.create({
    viewtwo: {
        height: 40, width: 150,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbutton: {
        color: '#ffff',
        fontWeight: '900',
        fontSize: 15,

    }
})
