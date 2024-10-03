import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ImageBackground } from 'react-native'
import { icons } from '../../Helper/icons'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native'
import { string } from '../../Helper/string'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native'
const ClinicLogin = () => {
    const [seleteduser, setSeleteduser] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [isVisible, setIsVisible] = useState(true);
    const [otp, setOtp] = useState('')
    const [ClinicorHospitalName, setClinicorHospitalName] = useState('')
    const [Email_id, setEmail_ID] = useState('')
    const [password, setPassword] = useState('')
    const [passwordSingu, setPasswordSingup] = useState('')
    const [Yourname, setYourname] = useState('')
    const [isPasswordVisibleSingu, setIsPasswordVisibleSingu] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isVisible_login, setIsVisible_Login] = useState(true);
    const [mobail, setMobail] = useState('')
    const [EmailID, setEmailID] = useState('')
    const navigation = useNavigation();
    useEffect(() => {
        const id = 1;
        setSeleteduser(id)
    }, []);
    const userselected = (id) => {
        setSeleteduser(id)
    }
    const handleOTPChange = (code) => {
        setOtp(code);
    };
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleVisibilityLogin = () => {
        setIsVisible_Login(!isVisible_login);
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewone}>
                <ImageBackground source={icons.stethoscope} style={[styles.setscopstyle,]}>
                    <View style={styles.overlay} />
                    <View style={styles.flexdractionview}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={styles.arrowbackstyle} source={icons.arrowback}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.imgstyle} source={icons.clinicicon}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <LinearGradient
                style={styles.viewtwo}
                colors={['#a9a700', '#a0a300', '#989f01', '#8c9901',
                    '#809400', '#728d01', '#578001', '#457801',
                    '#3d7401', '#286a01', '#1d6500', '#136001']}>
            </LinearGradient>
            <View style={styles.swiperview}>
                <View style={styles.flexrowtwo}>
                    <TouchableOpacity onPress={() => {
                        userselected(1)
                    }}>
                        <Text style={[styles.logintext, { color: seleteduser === 1 ? '#136001' : null }]}>{string.Login}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        userselected(2)
                    }}>
                        <Text style={[styles.logintext, { color: seleteduser === 2 ? '#136001' : null }]}>{string.Signup}</Text>
                    </TouchableOpacity>
                </View>
                {seleteduser == '1' ? (
                    <>
                        {isVisible && (<>
                            <View style={styles.textinputniew}>
                                <View style={styles.textinputrwo}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Phone number"
                                        onChangeText={(value) => setPhoneNumber(value)}
                                        value={phonenumber}
                                    />
                                    <TouchableOpacity style={styles.positionimg}>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Bottoncomponet
                                title={string.continue}
                                onPress={toggleVisibility} />
                            <TouchableOpacity style={styles.emilview}>
                                <Text style={styles.loginwithemil}>{string.LoginwithEmailID}</Text>
                            </TouchableOpacity>
                        </>
                        )}

                        {!isVisible && isVisible_login && (
                            <>
                                <View style={styles.flexrowmobilenumber}>
                                    <Text style={styles.numbertext}>+91 99886 77777</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.ChangeText}>{string.change}</Text>
                                    </TouchableOpacity>
                                </View>
                                <OTPTextView
                                    containerStyle={styles.otpContainer}
                                    textInputStyle={styles.otpInput}
                                    length={4}
                                    handleTextChange={(code) => handleOTPChange(code)}
                                    keyboardType="numeric"
                                />
                                <View style={styles.resentrow}>
                                    <Text style={styles.Donrecievecodetext}>{string.Donrecievecode}</Text>
                                    <TouchableOpacity style={styles.mar}>
                                        <Text style={styles.Resendtext}>{string.Resend}</Text>
                                    </TouchableOpacity>
                                </View>
                                <Bottoncomponet
                                    title={string.LOGIN}
                                    onPress={toggleVisibilityLogin} />
                                <TouchableOpacity style={styles.emilview}>
                                    <Text style={styles.loginwithemil}>{string.LoginwithEmailID}</Text>
                                </TouchableOpacity>
                            </>)}
                        {!isVisible_login &&  (<>
                            <View style={[styles.textinputniewtwo, styles.textinputniewtdff]}>
                                <View style={styles.textinputrwo}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Username or EmailID"
                                        onChangeText={(value) => setEmail_ID(value)}
                                        value={Email_id}
                                    />
                                    <TouchableOpacity style={styles.positionimg}>
                                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.textinputniewtwo]}>
                                <View style={styles.textinputrwo}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        onChangeText={(value) => setPassword(value)}
                                        value={password}
                                        secureTextEntry={!isPasswordVisible}
                                    />
                                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.positionimg}>
                                        <Image source={isPasswordVisible ? icons.eyes : icons.hidden} style={isPasswordVisible ? styles.trueiconstyle : styles.hidehowpassword}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {

                            }}>
                                <Text style={styles.forgotpass}>{string.Forgotpassword}</Text>
                            </TouchableOpacity>
                            <Bottoncomponet
                                title={string.LOGIN}
                                onPress={() => { navigation.navigate('Medicine') }}
                                loginbutton={styles.loginbutton} />
                            <TouchableOpacity onPress={() => { setIsVisible_Login(true); setIsVisible(false); }} style={styles.emilview}>
                                <Text style={styles.loginwithemil}>{string.LoginwithPhonenumber}</Text>
                            </TouchableOpacity>
                        </>
                        )}

                    </>
                ) : null}

                {seleteduser == '2' ? (<>

                    <View style={[styles.textinputniewtwo, styles.textinputniewtdff]}>
                        <View style={styles.textinputrwo}>
                            <TextInput
                                style={styles.input}
                                placeholder="Clinic or Hospital Name"
                                onChangeText={(value) => setClinicorHospitalName(value)}
                                value={ClinicorHospitalName}
                            />
                            <TouchableOpacity style={styles.positionimg}>
                                <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.textinputniewthree]}>
                        <View style={styles.textinputrwo}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your name"
                                onChangeText={(value) => setYourname(value)}
                                value={Yourname}
                            />
                            <TouchableOpacity style={styles.positionimg}>
                                <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.textinputniewthree]}>
                        <View style={styles.textinputrwo}>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                onChangeText={(value) => setMobail(value)}
                                value={mobail}
                            />
                            <TouchableOpacity style={styles.positionimg}>
                                <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.textinputniewthree]}>
                        <View style={styles.textinputrwo}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your name"
                                onChangeText={(value) => setEmailID(value)}
                                value={EmailID}
                            />
                            <TouchableOpacity style={styles.positionimg}>
                                <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.textinputniewthree]}>
                        <View style={styles.textinputrwo}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(value) => setPasswordSingup(value)}
                                value={passwordSingu}
                                secureTextEntry={!isPasswordVisibleSingu}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisibleSingu(!isPasswordVisibleSingu)} style={styles.positionimg}>
                                <Image source={isPasswordVisibleSingu ? icons.eyes : icons.hidden} style={isPasswordVisibleSingu ? styles.trueiconstyle : styles.hidehowpassword}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Bottoncomponet
                        title={string.SIGNUP}
                        onPress={() => {
                            
                            userselected(1);
                          }}
                        loginbutton={styles.loginbutton} />
                    <TouchableOpacity onPress={() => { setIsVisible_Login(true); setIsVisible(false); }} style={styles.emilview}>
                        <Text style={styles.loginwithemil}>{string.LoginwithPhonenumber}</Text>
                    </TouchableOpacity>
                </>) : null}
            </View>
        </View>
    )
}

export default ClinicLogin

