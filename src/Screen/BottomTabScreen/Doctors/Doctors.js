import {ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderThree from '../../../Componets/HeaderThree/HeaderThree'
import { string } from '../../../Helper/string'
import { styles } from './styles'
import SerachComponets from '../../../Componets/SerachComponets/SerachComponets'
import { Image } from 'react-native'
import { icons } from '../../../Helper/icons'
import Bottoncomponet from '../../../Componets/Bottoncomponet/Bottoncomponet'

const Doctors = ({navigation}) => {
  return (
    <View style={styles.container}>
     <HeaderThree
       titel={string.Doctor}/>
        <SerachComponets
        style={styles.searchInput}
        placeholder="Search your text here.."
        placeholderTextColor={"#8D8D8D"}
      //  onChangeText={onChangeText}
      />
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity  style={styles.docview}>
          <View>
            <Image source={icons.docdr} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Doctors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.docview}>
          <View>
            <Image source={icons.denti} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Dentist</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.docview}>
          <View>
            <Image source={icons.ayus} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Ayurvedic</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.docview}>
          <View>
            <Image source={icons.the} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Therapist</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.docview}>
          <View>
            <Image source={icons.docdr} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Doctors</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.docview}>
          <View>
            <Image source={icons.denti} style={styles.imagestyle}></Image>
            <Text style={styles.textstyles}>Dentist</Text>
          </View>
        </TouchableOpacity>
        
       </ScrollView>
       <ScrollView>
       <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <TouchableOpacity onPress={() => { navigation.navigate('Treatment') }} style={styles.doctorview}>
                <View style={styles.rowviewdr}>
                  <View style={styles.imgboxview}>
                    <Image style={styles.imgdr} source={icons.dr}></Image>
                  </View>
                  <View style={styles.imgboxview2}>
                    <View style={styles.ratingview}>
                      <View>
                        <Text style={styles.shahtext}>Dr.Shah</Text>
                        <Text style={styles.sugeontrext}>Cardiac sugeon</Text>
                      </View>
                      <View style={styles.starview}>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.star}></Image>
                        <Image style={styles.starstyle} source={icons.starhalf}></Image>
                      </View>
                    </View>
                  </View>
                  
                  <TouchableOpacity style={styles.positionsty}>
                    <View style={styles.imgboxview3}>
                      
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.flexrow3}>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.Experience}<Text style={styles.yesr}>15 yrs.</Text></Text>
                  </View>
                  <View style={styles.exView}>
                    <Text style={styles.Experienctext}>{string.consultation}<Text style={styles.yesr}>$25</Text></Text>

                  </View>
                  <View style={styles.exView}>
                    <View style={styles.flewlikeimg}>
                      <TouchableOpacity>
                        <Image style={styles.favorite} source={icons.favorite}></Image>
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
              <View style={styles.matop}/>
       </ScrollView>
    </View>
  )
}

export default Doctors

