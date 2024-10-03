import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';
import Medicine from '../../Screen/BottomTabScreen/Medicine';
import Doctors from '../../Screen/BottomTabScreen/Doctors/Doctors';
import Hospitals from '../../Screen/BottomTabScreen/Hospitals/Hospitals';
import Clinics from '../../Screen/BottomTabScreen/Clinics/Clinics';
import Treatment from '../../Screen/Treatment/Treatment';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorsProfile from '../../Screen/DoctorsProfile/DoctorsProfile';
import Appointments from '../../Screen/Appointments/Appointments';
import MedicalReports from '../../Screen/MedicalReports/MedicalReports';
import UploadReports from '../../Screen/UploadReports/UploadReports';
import UploadImages from '../../Screen/UploadImages/UploadImages';
import FavoutiteDoctors from '../../Screen/FavoutiteDoctors/FavoutiteDoctors';
import Addresses from '../../Screen/Addresses/Addresses';
import ContactUs from '../../Screen/ContactUs/ContactUs';
import TC from '../../Screen/TC/TC';
import FAQs from '../../Screen/FAQs/FAQs';
import Notifications from '../../Screen/Notifications/Notifications';
import RemedoDoctor from '../../Screen/RemedoDoctor/RemedoDoctor';
import AddOfflinePatient from '../../Screen/AddOfflinePatient/AddOfflinePatient';
import Profile from '../../Screen/Profile/Profile';
import Booking from '../../Screen/Booking/Booking';
import PremiumBook from '../../Screen/PremiumBook/PremiumBook';
import PremiumBookAppointment from '../../Screen/PremiumBookAppointment/PremiumBookAppointment';
import OfflinePatient from '../../Screen/OfflinePatient/OfflinePatient';
import ReportsRemedo from '../../Screen/ReportsRemedo/ReportsRemedo';
import Calender from '../../Screen/Calender/Calender';
import BlockCalender from '../../Screen/BlockCalender/BlockCalender';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
const DoctorScreen = () => {
  return (
    <stack.Navigator initialRouteName="Doctors">
      <stack.Screen name="Doctors" component={Doctors} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Treatment" component={Treatment} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="DoctorsProfile" component={DoctorsProfile} options={{ headerShown: false }}></stack.Screen>
    </stack.Navigator>
  );
}
const ClinicsScreen = () => {
  return (
    <stack.Navigator initialRouteName="Clinics">
      <stack.Screen name="Clinics" component={Clinics} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="RemedoDoctor" component={RemedoDoctor} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="OfflinePatient" component={OfflinePatient} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="AddOfflinePatient" component={AddOfflinePatient} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ReportsRemedo" component={ReportsRemedo} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Calender" component={Calender} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="BlockCalender" component={BlockCalender} options={{ headerShown: false }}></stack.Screen>

    </stack.Navigator>
  );
}
const MedicalScreen = () => {
  return (
    <stack.Navigator initialRouteName="Medicine">
      <stack.Screen name="Medicine" component={Medicine} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Appointments" component={Appointments} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="MedicalReports" component={MedicalReports} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="UploadReports" component={UploadReports} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="UploadImages" component={UploadImages} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="FavoutiteDoctors" component={FavoutiteDoctors} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Addresses" component={Addresses} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="TC" component={TC} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="FAQs" component={FAQs} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}></stack.Screen>

     
    </stack.Navigator>
  );
}

const HospitalsScreen = () => {
  return (
    <stack.Navigator initialRouteName="Hospitals">
      <stack.Screen name="Hospitals" component={Hospitals} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="Booking" component={Booking} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PremiumBook" component={PremiumBook} options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name="PremiumBookAppointment" component={PremiumBookAppointment} options={{ headerShown: false }}></stack.Screen>

    </stack.Navigator>
  );
}
const BottomTabNavigation = () => {

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#c59619',
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 10,
          fontWeight: '800'
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          alignItems: 'center',
          position: 'absolute',
          height: 65,
          width: '100%',
          alignSelf: 'center',
          justifyContent: "center",
          borderColor: "#CCCBCB",
          borderWidth: 1,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

        },
      }}>

      <Tab.Screen
        name="Medicine"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginTop: 20, tintColor: focused ? '#2F6C20' : '#8D8D8D' }} source={icons.meds} />
              <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: '900', color: focused ? '#2F6C20' : '#8D8D8D' }}>Medicine</Text>
              <View style={{ height: 3, width: 70, backgroundColor: focused ? '#2F6C20' : '#ffff', position: "absolute", bottom: -18 }}></View>

            </View>
          ),
        }}
        component={MedicalScreen}
      />


      <Tab.Screen
        name="Doctors"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginTop: 20, tintColor: focused ? '#2F6C20' : '#8D8D8D' }} source={icons.doctortwos} />
              <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: '900', color: focused ? '#2F6C20' : '#8D8D8D' }}>Doctors</Text>
              <View style={{ height: 3, width: 70, backgroundColor: focused ? '#2F6C20' : '#ffff', position: "absolute", bottom: -18 }}></View>

            </View>

          ),
        }}
        component={DoctorScreen}
      />

      <Tab.Screen
        name="Hospitals"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginTop: 20, tintColor: focused ? '#2F6C20' : '#8D8D8D' }} source={icons.cliincbottom} />
              <Text style={{ fontSize: 12, fontWeight: '900', color: focused ? '#2F6C20' : '#8D8D8D' }}>Hospitals</Text>
              <View style={{ height: 3, width: 70, backgroundColor: focused ? '#2F6C20' : '#ffff', position: "absolute", bottom: -18 }}></View>
            </View>
          ),
        }}
        component={HospitalsScreen}
      />
      <Tab.Screen
        name="Clinics"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
              <Image style={{ width: 25, height: 25, marginTop: 20, tintColor: focused ? '#2F6C20' : '#8D8D8D' }} source={icons.clinicicon} />
              <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: '900', color: focused ? '#2F6C20' : '#8D8D8D' }}>Clinics</Text>
              <View style={{ height: 3, width: 70, backgroundColor: focused ? '#2F6C20' : '#ffff', position: "absolute", bottom: -18 }}></View>


            </View>
          ),
        }}
        component={ClinicsScreen}
      />



    </Tab.Navigator>

  );
}

export default BottomTabNavigation