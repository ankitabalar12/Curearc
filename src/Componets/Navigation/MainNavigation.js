import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../../Screen/Splash/Splash'
import Onboard from '../../Screen/Onboard/Onboard'
import Forgotpassword from '../../Screen/Forgotpassword/Forgotpassword'
import DoctorLogin from '../../Screen/DoctorLogin/DoctorLogin'
import PatientLogin from '../../Screen/PatientLogin/PatientLogin'
import ClinicLogin from '../../Screen/ClinicLogin/ClinicLogin'
import BottomTabNavigation from '../BottomBarTab/BottomTabNavigation'
import Treatment from '../../Screen/Treatment/Treatment'
import DoctorsProfile from '../../Screen/DoctorsProfile/DoctorsProfile'
import Booking from '../../Screen/Booking/Booking'
import Appointments from '../../Screen/Appointments/Appointments'
import MedicalReports from '../../Screen/MedicalReports/MedicalReports'
import UploadReports from '../../Screen/UploadReports/UploadReports'
import UploadImages from '../../Screen/UploadImages/UploadImages'
import FavoutiteDoctors from '../../Screen/FavoutiteDoctors/FavoutiteDoctors'
import Addresses from '../../Screen/Addresses/Addresses'
import ContactUs from '../../Screen/ContactUs/ContactUs'
import TC from '../../Screen/TC/TC'
import FAQs from '../../Screen/FAQs/FAQs'
import Notifications from '../../Screen/Notifications/Notifications'
import RemedoDoctor from '../../Screen/RemedoDoctor/RemedoDoctor'
import AddOfflinePatient from '../../Screen/AddOfflinePatient/AddOfflinePatient'
import Profile from '../../Screen/Profile/Profile'
import PremiumBook from '../../Screen/PremiumBook/PremiumBook'
import PremiumBookAppointment from '../../Screen/PremiumBookAppointment/PremiumBookAppointment'
import OfflinePatient from '../../Screen/OfflinePatient/OfflinePatient'
import ReportsRemedo from '../../Screen/ReportsRemedo/ReportsRemedo'
import Calender from '../../Screen/Calender/Calender'
import BlockCalender from '../../Screen/BlockCalender/BlockCalender'


const stack = createStackNavigator()

const MainNavigation = () => {


  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash'>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="DoctorLogin" component={DoctorLogin} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="PatientLogin" component={PatientLogin} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ClinicLogin" component={ClinicLogin} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Medicine" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Treatment" component={Treatment} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="DoctorsProfile" component={DoctorsProfile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Booking" component={Booking} options={{ headerShown: false }}></stack.Screen>
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
        <stack.Screen name="RemedoDoctor" component={RemedoDoctor} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="OfflinePatient" component={OfflinePatient} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="AddOfflinePatient" component={AddOfflinePatient} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="PremiumBook" component={PremiumBook} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="PremiumBookAppointment" component={PremiumBookAppointment} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ReportsRemedo" component={ReportsRemedo} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Calender" component={Calender} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="BlockCalender" component={BlockCalender} options={{ headerShown: false }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigation

