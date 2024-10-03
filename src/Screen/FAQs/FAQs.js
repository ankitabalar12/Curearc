import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { Image } from 'react-native-animatable'
import { icons } from '../../Helper/icons'
import { TouchableOpacity } from 'react-native'

const FAQs = () => {
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.FAQs} />
                <Text style={styles.terms}>{string.Account}</Text>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Unblockaccount}</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Changephonenumber }</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Privacyinformation}</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <Text style={styles.terms}>{string.Paymentandpricing}</Text>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Acceptedpaymentmethods}</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Priceestimation }</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Cancellationfee}</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
                  <TouchableOpacity> 
                  <View style={styles.flexdraction}>
                  <Text style={styles.Unblockaccounttext}>{string.Loremipsum}</Text> 
                  <Image source={icons.rightarrow} style={styles.rightarrowsimg}></Image>
                </View>
                  </TouchableOpacity>
                  <View style={styles.linviewstyle}></View>
        </View>
    )
}

export default FAQs

