import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    swiperview: {
        height: 200, width: '100%', backgroundColor: '#f2f2f2'
    },

    paginationStyle: {
        bottom: 20,
        position: 'absolute', right: -180
    },

    dotStyle: {
        width: 8,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
        marginRight: 5

    },
    activeDotStyle: {
        width: 15,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#126000',
        marginHorizontal: 5,
        marginRight: 5

    },
    medicine2style: {
        height: '100%', width: '100%'
    },
    Itsalongtext: {
        // alignSelf: 'flex-end',
        // marginRight: '5%',
        // marginLeft: '30%',
        // marginTop: '15%',
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        color: '#000',
        fontSize: 12,
        fontWeight: '900'

    },
    AppoloHospitalstxt: {
        marginLeft: '5%', color: '#000',
        fontSize: 17,
         fontWeight: '900',
          marginTop: '2%'
    },
    MultispcialistHospitalstext: {
        fontSize: 13,
        color: '#000',
        marginLeft: '5%'
    },
    AkshyaAhemdabadtext: {
        fontSize: 11,
        marginLeft: '5%',
        marginTop: 5
    },
    imgview: {
        height: 170,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
        // borderColor: "#CCCBCB",
        //  borderWidth: 1,
        borderBottomWidth:1,
         borderBottomColor:'#CCCBCB',
         marginTop:'5%',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imgstylesview:{
        height:80, width:80,borderRadius:5, backgroundColor:'#f2f2f2', marginTop:10, marginLeft:10  
    },
    imgstyle:{
        height:'80%', width:'80%',
        alignSelf:'center', borderRadius:5
    },
    marto:{
        marginTop:'30%'
    },
    mainmodelview:{
        height:'100%', width:350, backgroundColor:'#fff'
    },
    headerview:{
        height:180, width:'100%',
        
    },
    clearstyle:{
        height:20, width:20, alignSelf:"flex-end", marginRight:'5%',
        marginTop:"5%"
    },
    profileview:{
        height:80, width:80, borderRadius:50, backgroundColor:'#f2f2f2',
        alignSelf:'center', justifyContent:'center'
    },
    profileimstyle:{
        height:'100%',
        width:'100%', borderRadius:50
    },
    usename:{
        alignSelf:'center',
        marginTop:'2%',
        color:'#fff', fontWeight:'500'
    },
    jonnatext:{
        fontSize:20,
        fontWeight:'900'
    },
    flexrowviewstyle:{
        flexDirection:'row', marginTop:'5%',
    },
    homestyle:{
        height:20, width:20, marginLeft:'5%'
    },
    homestyletext:{
        fontSize:15, fontWeight:'900', marginLeft:'5%', color:'#000'
    },
    lineviewstyle:{
        height:2, width:'85%', backgroundColor:'#dbd8d0', alignSelf:'flex-end', marginTop:'5%'
    },
    TermsandConditionstext:{
        alignSelf:'center', fontSize:15, fontWeight:'900',color:'#000'
    },
    position:{
        position:'absolute', bottom:0,alignSelf:'center',
    },
    martopview:{
        marginTop:'20%'
    },
    textview:{
        height:'auto', width:300, alignSelf:'flex-end', marginRight:'5%', marginTop:'20%'
    }
})