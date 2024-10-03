import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { string } from '../../Helper/string'
import { styles } from './styles'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'

const TC = () => {
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.TaC} />
            <ScrollView>
                <Text style={styles.terms}>{string.TermsConditions}</Text>
                <Text style={styles.CurearTERMSCONDITIONStext}>{string.CurearTERMSCONDITIONS}</Text>
                <Text style={styles.imtext}>{string.import}</Text>
                <View style={styles.martop} />
            </ScrollView>
        </View>
    )
}

export default TC

