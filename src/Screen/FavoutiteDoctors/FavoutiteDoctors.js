import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'
import { icons } from '../../Helper/icons'

const FavoutiteDoctors = () => {
  return (
    <View style={styles.container}>
      <HeaderThree
        titel={string.FavouriteDoctors} />
        <ScrollView>
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
                <View style={ styles.martopview}/>
                </ScrollView>
    </View>
  )
}

export default FavoutiteDoctors

