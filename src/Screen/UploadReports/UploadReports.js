import { Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { string } from '../../Helper/string'
import HeaderThree from '../../Componets/HeaderThree/HeaderThree'
import { icons } from '../../Helper/icons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Bottoncomponet from '../../Componets/Bottoncomponet/Bottoncomponet'

const UploadReports = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [imageUri, setImageUri] = useState(null);
  const selectedReports = (id) =>{
    setSelectedOption(id)
  }
 const openCamera = async () => {
  
    if (Platform.OS === 'android') {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        Alert.alert("Permission Denied", "Camera permission is required to take photos.");
        return;
      }
    }

   
    let options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

  
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

 
  const openGallery = () => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Gallery Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera to take photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('Permission request error:', err);
      return false;
    }
  };
  
  return (
    <View style={styles.container}>
      <HeaderThree
        titel={string.MedicalReports} />
      <Text style={styles.yourreport}>{string.Pleaseuploadyourreport}</Text>
      <View style={styles.flexrowstyle}>
        <View>
        <TouchableOpacity onPress={()=>{
          selectedReports(1);
          openGallery()
        }} style={selectedOption === 1 ? styles.whiteview :  styles.whiteview2}>
        <Image style={styles.garallimg2} source={icons.gallary}></Image>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{
          selectedReports(2);}}>
        <Text style={[styles.gallarytext,{
          color:selectedOption === 1 ? '#126000' :'#000', 
          fontWeight:selectedOption === 1 ? '900' :'500'}]}>{string.Gallery}</Text>
        </TouchableOpacity>
       
        </View>
        <View>
        <TouchableOpacity onPress={()=>{
          selectedReports(2);
          openCamera();
        }} style={selectedOption === 2 ? styles.whiteview : styles.whiteview2}>
        <Image style={styles.garallimg} source={icons.camera}></Image>
        </TouchableOpacity>
       <TouchableOpacity  onPress={()=>{
          selectedReports(2);}}>
       <Text style={[styles.gallarytext,{
          color:selectedOption === 2 ? '#126000' :'#000',
          fontWeight:selectedOption === 2 ? '900' :'500'}]}>{string.Camera}</Text>
       </TouchableOpacity>
        </View>
              </View>
              <Bottoncomponet
                title={string.UploadReports}
                onPress={() => { navigation.navigate('UploadImages') }}
                loginbutton={styles.loginbutton} />
    </View>
  )
}

export default UploadReports

