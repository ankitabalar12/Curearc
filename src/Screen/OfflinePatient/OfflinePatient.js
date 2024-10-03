import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import LinearGradient from 'react-native-linear-gradient'

const OfflinePatient = ({navigation}) => {
    const [selectedbutton, setSelectedBotton] = useState('')
    const seenbutton = (id) => {
        setSelectedBotton(id)
    }
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.OnlinePatient} />
            <View style={styles.mainview}>
                <View style={styles.viewrow}>
                    <View style={styles.nameview}>
                        <Text style={styles.username}>John Doe</Text>
                        <View style={styles.viewroetwo}>
                            <Text style={styles.numverset}>{string.Mo}<Text style={styles.nubertext}> 99887 88776</Text></Text>
                            <Text style={styles.numverset}>{string.age}<Text style={styles.nubertext}> 30</Text></Text>
                        </View>
                        <Text style={styles.numverset}>{string.Gender}<Text style={styles.nubertext}> Male</Text></Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.akshya}</Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.LoremIpsumissimply}</Text>
                    </View>
                    <View style={styles.nameview2}>
                        <View style={styles.proview}>
                            <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>
                        </View>
                        {selectedbutton === 1 ? (
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.SeenByDoctor}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ) :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} >
                                    <Text style={styles.Seentext3}>{string.SeenByDoctor}</Text>
                                </TouchableOpacity>
                            </>
                        }
                        {selectedbutton === 2 ? (
                            <>

                                <TouchableOpacity onPress={() => { seenbutton(2) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.notsceen}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                            :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(2) }} >
                                    <Text style={styles.Seentext3}>{string.notsceen}</Text>
                                </TouchableOpacity>
                            </>}
                    </View>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.viewrow}>
                    <View style={styles.nameview}>
                        <Text style={styles.username}>John Doe</Text>
                        <View style={styles.viewroetwo}>
                            <Text style={styles.numverset}>{string.Mo}<Text style={styles.nubertext}> 99887 88776</Text></Text>
                            <Text style={styles.numverset}>{string.age}<Text style={styles.nubertext}> 30</Text></Text>
                        </View>
                        <Text style={styles.numverset}>{string.Gender}<Text style={styles.nubertext}> Male</Text></Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.akshya}</Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.LoremIpsumissimply}</Text>
                    </View>
                    <View style={styles.nameview2}>
                        <View style={styles.proview}>
                            <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>
                        </View>
                        {selectedbutton === 1 ? (
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.SeenByDoctor}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ) :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} >
                                    <Text style={styles.Seentext3}>{string.SeenByDoctor}</Text>
                                </TouchableOpacity>
                            </>
                        }
                        {selectedbutton === 2 ? (
                            <>

                                <TouchableOpacity onPress={() => { seenbutton(2) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.notsceen}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                            :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(2) }} >
                                    <Text style={styles.Seentext3}>{string.notsceen}</Text>
                                </TouchableOpacity>
                            </>}
                    </View>
                </View>
            </View>
            <View style={styles.mainview}>
                <View style={styles.viewrow}>
                    <View style={styles.nameview}>
                        <Text style={styles.username}>John Doe</Text>
                        <View style={styles.viewroetwo}>
                            <Text style={styles.numverset}>{string.Mo}<Text style={styles.nubertext}> 99887 88776</Text></Text>
                            <Text style={styles.numverset}>{string.age}<Text style={styles.nubertext}> 30</Text></Text>
                        </View>
                        <Text style={styles.numverset}>{string.Gender}<Text style={styles.nubertext}> Male</Text></Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.akshya}</Text>
                        <Text style={[styles.numverset, styles.numverset3]}>{string.LoremIpsumissimply}</Text>
                    </View>
                    <View style={styles.nameview2}>
                        <View style={styles.proview}>
                            <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>
                        </View>
                        {selectedbutton === 1 ? (
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.SeenByDoctor}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ) :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(1) }} >
                                    <Text style={styles.Seentext3}>{string.SeenByDoctor}</Text>
                                </TouchableOpacity>
                            </>
                        }
                        {selectedbutton === 2 ? (
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(2) }} style={styles.greenviewstyle}>
                                    <View style={styles.seleview}>
                                        <Text style={styles.Seentext}>{string.notsceen}</Text>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                            :
                            <>
                                <TouchableOpacity onPress={() => { seenbutton(2) }} >
                                    <Text style={styles.Seentext3}>{string.notsceen}</Text>
                                </TouchableOpacity>
                            </>}
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('AddOfflinePatient') }} style={styles.addbutton}>
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
                    <Image style={styles.addbutton2} source={icons.add}></Image>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default OfflinePatient
