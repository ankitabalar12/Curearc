import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import SerachComponets from '../../Componets/SerachComponets/SerachComponets'
import { string } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { Image } from 'react-native'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const Treatment = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.Doctor} />
            <SerachComponets
                style={styles.searchInput}
                placeholder="Search your text here.."
                placeholderTextColor={"#8D8D8D"}
            //  onChangeText={onChangeText}
            />
            <ScrollView>
                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.Multispecialist}</Text>
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>

                {isVisible && (<>
                    <TouchableOpacity onPress={() => { navigation.navigate('DoctorsProfile') }}  style={styles.Doctorlist}>
                        <View style={styles.flexrowview2}>
                            <View style={styles.imgview}>
                                <Image style={styles.imgdr} source={icons.dr}></Image>
                            </View>
                            <View>
                                <View style={styles.textview}>
                                    <Text style={styles.shahtext}>Dr,Shah</Text>
                                    <Text style={styles.sugeontrext}>Cardiac surgeon</Text>
                                </View>
                                <View style={styles.textview4}>
                                    <Text style={styles.shahtext}>Appolo Hospitals</Text>
                                    <Text style={styles.add}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Ahemdabad</Text>
                                </View>
                            </View>

                            <View style={styles.textview3}>
                                <View style={styles.flexstarrow}>
                                    <Image style={styles.starstyle} source={icons.star}></Image>
                                    <Image style={styles.starstyle} source={icons.star}></Image>
                                    <Image style={styles.starstyle} source={icons.star}></Image>
                                    <Image style={styles.starstyle} source={icons.star}></Image>
                                    <Image style={styles.starstyle} source={icons.starhalf}></Image>
                                </View>
                            </View>
                        </View>
                        <View style={styles.flexrow5}>
                            <View style={styles.exView}>
                                <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                            </View>
                            <View style={styles.exView}>
                                <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                            </View>
                            <View style={styles.exView}>
                                <View style={styles.flewlikeimg}>
                                    <TouchableOpacity>
                                        <Image style={styles.favorite} source={icons.favorite2}></Image>
                                    </TouchableOpacity>
                                    <Bottoncomponet
                                        title={string.boking}
                                        styletext={styles.styletext}
                                        newstyle={styles.newstyle}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('DoctorsProfile') }}  style={styles.Doctorlist}>
                    <View style={styles.flexrowview2}>
                        <View style={styles.imgview}>
                        <Image style={styles.imgdr} source={icons.dr}></Image>
                        </View>
                        <View>
                        <View style={styles.textview}>
                            <Text style={styles.shahtext}>Dr,Shah</Text>
                            <Text style={styles.sugeontrext}>Cardiac surgeon</Text>
                        </View>
                        <View style={styles.textview4}>
                            <Text style={styles.shahtext}>Appolo Hospitals</Text>
                            <Text style={styles.add}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Ahemdabad</Text>
                        </View>
                        </View>

                        <View style={styles.textview3}>
                            <View style={styles.flexstarrow}>
                            <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>   
                            </View>
                        </View>
                    </View>
                    <View style={styles.flexrow5}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite2}></Image>
                      </TouchableOpacity>
                      <Bottoncomponet
                        title={string.boking}
                        styletext={styles.styletext}
                        newstyle={styles.newstyle}
                      />
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('DoctorsProfile') }}  style={styles.Doctorlist}>
                    <View style={styles.flexrowview2}>
                        <View style={styles.imgview}>
                        <Image style={styles.imgdr} source={icons.dr}></Image>
                        </View>
                        <View>
                        <View style={styles.textview}>
                            <Text style={styles.shahtext}>Dr,Shah</Text>
                            <Text style={styles.sugeontrext}>Cardiac surgeon</Text>
                        </View>
                        <View style={styles.textview4}>
                            <Text style={styles.shahtext}>Appolo Hospitals</Text>
                            <Text style={styles.add}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Ahemdabad</Text>
                        </View>
                        </View>

                        <View style={styles.textview3}>
                            <View style={styles.flexstarrow}>
                            <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>   
                            </View>
                        </View>
                    </View>
                    <View style={styles.flexrow5}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite2}></Image>
                      </TouchableOpacity>
                      <Bottoncomponet
                        title={string.boking}
                        styletext={styles.styletext}
                        newstyle={styles.newstyle}
                      />
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
                </>)}






                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.GeneralSurgeon}</Text>
                    <TouchableOpacity style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.Cardiologist}</Text>
                    <TouchableOpacity style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.Dentist}</Text>
                    <TouchableOpacity style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.Dermatologists}</Text>
                    <TouchableOpacity style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.timinrow}>
                    <Text style={styles.AvilableTimingsstyle}>{string.ENTSpecialist}</Text>
                    <TouchableOpacity style={styles.arrowtop}>
                        <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.mattop} />
            </ScrollView>
        </View>
    )
}

export default Treatment

