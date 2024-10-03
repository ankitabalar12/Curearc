import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainview:{
        flex:1,
        backgroundColor:'#fff'
    },
    mainview:{
        height: 'auto',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
      
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
    addresviewstyle:{
        flexDirection:'row',marginTop:'4%', marginLeft:'5%'
    },
    homestty:{
        height:20, width:20, 
    },
    addressvtext:{
        fontSize:12, fontWeight:'500', color:'#000', marginLeft:'3%', 
        marginBottom:'5%'
    },
    matrto:{
        marginBottom:30
    },
    flexdrac:{
        flexDirection:'row'
    },
    callstyle:{
        height:15, width:15, marginLeft:'5%'
    },
    mainviewcall:{
        height: 50,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 5,
      justifyContent:'center',
        borderBottomWidth:1,
         borderBottomColor:'#CCCBCB',
         marginTop:'1%',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    numbertext:{
        fontSize:12, fontWeight:'500', color:'#000', marginLeft:'3%', 
         
    },
    callcolorbutton:{
        position:'absolute' ,
        right:20, bottom:-450
    },
    headerview: {
      justifyContent:'center',
        height: 40,
        width: 40,
        borderRadius: 50,
        bottom: 0,
    },
    callcol:{
        height:20, width:20, alignSelf:'center', tintColor:'#fff'
    }
})