import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTwo from '../../../Componets/HeaderTwo/HeaderTwo'
import { string } from '../../../Helper/string'
import { Image } from 'react-native'
import { icons } from '../../../Helper/icons'
import { styles } from './styles'
import Bottoncomponet from '../../../Componets/Bottoncomponet/Bottoncomponet'



const Hospitals = () => {
  const [selectedletter, setSelectedLetter] = useState()
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);

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
        titel={string.AppoloHospitals}
        titel2={string.MultispcialistHospitals} />

      <View style={styles.imgview2}>
        <Image style={styles.badimg} source={icons.Rectangle2}></Image>
      </View>
      <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
      <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
      <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
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
              <View style={styles.marbottom}></View>
            </ScrollView>
          </View>
        </>
      ) : null}

      {selectedletter == '2' ? (
        <>
          <ScrollView>
            <View style={styles.timinrow}>
              <Text style={styles.AvilableTimingsstyle}>{string.AvilableTimings}</Text>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.arrowtop}>
                <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
              </TouchableOpacity>
            </View>
            {isVisible && (<>
              <View style={styles.twoviewrow}>
                <View style={styles.oneviewstyle}>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Mon</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>12:00 to 13:00</Text>
                    </View>
                  </View>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Tue</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>12:00 to 13:00</Text>
                    </View>
                  </View>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Wed</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>12:00 to 13:00</Text>
                    </View>
                  </View>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Thu</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>12:00 to 13:00</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.oneviewstyle}>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Fri</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>Closed</Text>
                    </View>
                  </View>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Sat</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>11:00 to 12:00</Text>
                    </View>
                  </View>
                  <View style={styles.monnamerow}>
                    <View style={styles.months}>
                      <Text style={styles.montext}>Sun</Text>
                    </View>
                    <View style={styles.tieview}>
                      <Text style={styles.timetext}>Closed</Text>
                    </View>
                  </View>
                </View>
              </View>
            </>)}
            <View style={styles.timinrow}>
              <Text style={styles.AvilableTimingsstyle}>{string.Services}</Text>
              <TouchableOpacity onPress={() => setIsVisibleServices(!isVisibleServices)} style={styles.arrowtop}>
                <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
              </TouchableOpacity>
            </View>
            {isVisibleServices && (<>
              <View style={styles.teowviewstyle}>
                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>COPD Treatment</Text>
                  </View>
                </View>

                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>Health checkup</Text>
                  </View>
                </View>
              </View>
              <View style={styles.teowviewstyle}>
                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>ECG</Text>
                  </View>
                </View>

                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>Fever Treatment</Text>
                  </View>
                </View>
              </View>
              <View style={styles.teowviewstyle}>
                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>Diabetology</Text>
                  </View>
                </View>

                <View style={styles.viewstyle}>
                  <View style={styles.viewstyletwo}>
                    <Image style={styles.truincon} source={icons.trueicon}></Image>
                  </View>
                  <View style={styles.viewthree}>
                    <Text style={styles.treattext}>Diabetes Management</Text>
                  </View>
                </View>
              </View>


            </>)}
            <View style={styles.timinrow}>
              <Text style={styles.AvilableTimingsstyle}>{string.HospitalAddress}</Text>
              <TouchableOpacity onPress={() => setIsVisibleAdd(!isVisibleAdd)} style={styles.arrowtop}>
                <Image style={styles.uparrowstyle} source={icons.uparrow}></Image>
              </TouchableOpacity>
            </View>
            {isVisibleAdd && (
              <>
                <Text style={styles.AppoloHospitalstxt}>{string.AppoloHospitals}</Text>
                <Text style={styles.MultispcialistHospitalstext}>{string.MultispcialistHospitals}</Text>
                <Text style={styles.AkshyaAhemdabadtext}>{string.AkshyaAhemdabad}</Text>
              </>)}
            <View style={styles.matrog} />
          </ScrollView>
        </>
      ) : null}
    </View>
  )
}

export default Hospitals

