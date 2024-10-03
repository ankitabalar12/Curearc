import {  Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import HeaderTwo from '../../../Componets/HeaderTwo/HeaderTwo'
import { string } from '../../../Helper/string'
import { Image } from 'react-native'
import { icons } from '../../../Helper/icons'
import { ScrollView } from 'react-native-gesture-handler'
import Bottoncomponet from '../../../Componets/Bottoncomponet/Bottoncomponet'

const Clinics = () => {
  const [selectedletter, setSelectedLetter] = useState()
  useEffect(() => {
    const id = 1
    setSelectedLetter(id)
  }, [])

  const selectedtext = (id) => {
    setSelectedLetter(id)
  }
  return (
    <View style={styles.container}>
      <HeaderTwo
      titel={string.AppoloClinic}
      titel2={string.MultispcialistClinic}
      />
       <View style={styles.imgview2}>
        <Image style={styles.badimg} source={icons.Rectangle2}></Image>
      </View>
      <View style={styles.flexrow}>
        <TouchableOpacity onPress={() => {
          selectedtext(1)
        }}>
          <Text style={[styles.doctext, { color: selectedletter === 1 ? '#126000' : '#ccc' }]}>{string.Doctor}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          selectedtext(2)
        }}>
          <Text style={[styles.doctext, { color: selectedletter === 2 ? '#126000' : '#ccc' }]}>{string.About}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineview}>
        <View style={styles.linerow}>
          <View style={[styles.haftline, { backgroundColor: selectedletter === 1 ? "#126000" : '#ccc' }]}></View>
          <View style={[styles.haftline, { backgroundColor: selectedletter === 2 ? "#126000" : '#ccc' }]}></View>
        </View>
      </View>
      <View style={styles.flexrow2}>
        <View style={[styles.Triangleview, { borderTopColor: selectedletter === 1 ? "#126000" : "#fff" }]}></View>
        <View style={[styles.Triangleview, { borderTopColor: selectedletter === 2 ? "#126000" : "#fff" }]}></View>
      </View>
      <ScrollView>
      {selectedletter == '1' ? (
        <>
          <View>
            <ScrollView>
              <TouchableOpacity style={styles.doctorview}>
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
                      <View style={styles.permiumview}>
                        <View style={styles.flexrowim}>
                          <View style={styles.bottomviewstyle}></View>
                          <Image source={icons.image25} style={styles.image25style}></Image>
                          <Text style={styles.Premiumtext}>{string.Premium}</Text>
                        </View>
                      </View>
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
              <TouchableOpacity style={styles.doctorview}>
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
              <TouchableOpacity style={styles.doctorview}>
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
              <TouchableOpacity style={styles.doctorview}>
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
              <TouchableOpacity style={styles.doctorview}>
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
                    <View style={styles.permiumview}>
                        <View style={styles.flexrowim}>
                          <View style={styles.bottomviewstyle}></View>
                          <Image source={icons.image25} style={styles.image25style}></Image>
                          <Text style={styles.Premiumtext}>{string.Premium}</Text>
                        </View>
                      </View>
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
              {/* <View style={styles.marbottom}></View> */}
            </ScrollView>
          </View>
        </>
      ) : null}
        <View style={styles.martopnwe}></View>
      </ScrollView>
    </View>
  )
}

export default Clinics

