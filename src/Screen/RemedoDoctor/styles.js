import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containar:{
flex:1,
backgroundColor:'#fff'
    },
    weview:{
        height:50, width:'100%',
        alignSelf: 'center',
        backgroundColor:'#fff',
        justifyContent:'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flexrow:{
        flexDirection:'row', marginLeft:'5%', justifyContent:'space-between'
    },
    welcomtext:{
        fontSize:12, color:'#000', marginRight:'5%', fontWeight:'500'
    },
    gurutex:{
   marginLeft:'5%', fontSize:14, fontWeight:'900'
    },
    posi:{
        position:"absolute", right:20
    },
    infostyle:{
        height:20, width:20
    },
    flewarpview:{
        flexDirection:'row', flexWrap:'wrap',marginTop:'5%', justifyContent:'center'
    },
    img:{
        height:80, width:80, alignSelf:'center'
    },
    mainview:{
        height: 150,
          width: 150,
        backgroundColor: '#fff',
        borderRadius: 5,
      borderColor: "#CCCBCB",
        borderWidth: 1,
        margin:10,
       justifyContent:'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },
    onlintext:{
        alignSelf:'center',
        color:'#000',
        fontWeight:'900'

    },
    martop:{
        marginTop:'15%'
    },
    mainmodelview:{
        height:'100%', width:350, backgroundColor:'#fff'
    },
    headerview:{
        height:210, width:'100%',
        
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
    keystyle:{
   height:20, width:22, marginLeft:'5%'
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
    usename2:{
        marginTop:1,
         color:'#E0DCDC'
    },
    usename3:{
        color:'#E0DCDC'
    }
})