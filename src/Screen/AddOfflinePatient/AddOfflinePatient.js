import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { string } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const AddOfflinePatient = ({ navigation }) => {
    const [pateintname, setPateintName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGenter] = useState('')
    const [address, setAddress] = useState('')
    const [ressonodvisit, setRessoFodVisit] = useState('')
    const [errors, setErrors] = useState({});
    const handleofflinepatient = async () => {

        const newErrors = {};
        if (!pateintname) {
            newErrors.pateintname = 'Please enter pateint name';
        }
        if (!phonenumber) {
            newErrors.phonenumber = 'Please enter phone number';
        }
        if (!age) {
            newErrors.age = 'Please enter age';
        }
        if (!gender) {
            newErrors.gender = 'Please enter gender';
        }
        if (!address) {
            newErrors.address = 'Please enter address';
        }
        if (!ressonodvisit) {
            newErrors.ressonodvisit = 'Please enter resson of visit';
        }
        if (Object.keys(newErrors).length > 0) {
            // Set the errors in the state and stop further execution
            setErrors(newErrors);
            return;  // Return early if there are errors
        }

        // Clear errors and proceed if no validation errors
        setErrors({});
        alert('Form submitted successfully');

        // Navigate to another screen after successful validation
        navigation.navigate('OnlinePatient')
    }
    return (
        <View style={styles.container}>
            <HeaderThree
                titel={string.AddOfflinePatient} />
            <ScrollView>
                <View style={styles.inputview}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pateint Name"
                            onChangeText={(value) => setPateintName(value)}
                            value={pateintname}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>

                </View>
                {errors.pateintname && <Text style={styles.error}>{errors.pateintname}</Text>}

                <View style={[styles.inputview, styles.inputview3]}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={(value) => setPhoneNumber(value)}
                            value={phonenumber}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>
                </View>
                {errors.phonenumber && <Text style={styles.error}>{errors.phonenumber}</Text>}
                <View style={[styles.inputview, styles.inputview3]}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Age"
                            onChangeText={(value) => setAge(value)}
                            value={age}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>
                </View>
                {errors.age && <Text style={styles.error}>{errors.age}</Text>}
                <View style={[styles.inputview, styles.inputview3]}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Gender"
                            onChangeText={(value) => setGenter(value)}
                            value={gender}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>
                </View>
                {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                <View style={[styles.inputview, styles.inputview3]}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            onChangeText={(value) => setAddress(value)}
                            value={address}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>
                </View>
                {errors.address && <Text style={styles.error}>{errors.address}</Text>}
                <View style={[styles.inputview, styles.inputview3]}>
                    <View style={styles.flexrowview}>
                        <TextInput
                            style={styles.input}
                            placeholder="Reason of visit"
                            onChangeText={(value) => setRessoFodVisit(value)}
                            value={ressonodvisit}
                        />
                        <Image source={icons.trueicon} style={styles.trueiconstyle}></Image>
                    </View>
                </View>
                {errors.ressonodvisit && <Text style={styles.error}>{errors.ressonodvisit}</Text>}
                <Bottoncomponet
                    title={string.add}
                    onPress={handleofflinepatient}
                    loginbutton={styles.loginbutton} />
            </ScrollView>
        </View>
    )
}

export default AddOfflinePatient

