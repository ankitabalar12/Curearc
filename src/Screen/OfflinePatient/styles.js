import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#fff'
    },
    mainview:{
        height:150, width:'85%',
        alignSelf: 'center',
        backgroundColor:'#fff',
        marginTop:'5%',
        justifyContent:'center',
        borderRadius:10,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewrow:{
        flexDirection:'row', marginHorizontal:'4%'
    },
    nameview:{
        height:140, width:210,  margin:2
    },
    nameview2:{
        height:140, width:105,  margin:2
    },
    username:{
        fontSize:15, 
        fontWeight:'900', color:'#000'
    },
    viewroetwo:{
        flexDirection:'row', justifyContent:'space-between'
    },
    numverset:{
        fontSize:12, color:'#000'
    },
    nubertext:{
        fontWeight:'900'
    },
    numverset3:{
        marginTop:'5%', fontSize:10, fontWeight:'500'
    },
    proview:{
        height:50, width:50, 
        borderRadius:50, 
        backgroundColor:'#f2f2f2',
         alignSelf:'center',
          justifyContent:'center',
        marginTop:'5%'
    },
    profileimgstyle:{
        height:'100%', width:'100%'
    },
    greenviewstyle:{
        height:25, width:'95%', backgroundColor:'#E5FAD6', alignSelf:'center',
        borderRadius:20, marginTop:'15%', justifyContent:'center'
    },
    seleview:{
        flexDirection:'row',
        alignSelf:'center'
    },
    Seentext:{
       fontSize:9, fontWeight:'500',
       color:'#126000'
    },
    trueiconstyle:{
        height:12, width:12,
        alignSelf:'center', marginLeft:'5%'
    },
    Seentext3:{
        alignSelf:'center',
        fontSize:9, fontWeight:'500',
        marginTop:'15%'
    },
    addbutton:{
        position:'absolute',
         bottom:60,
         right:20
    },
    headerview:{
        height:40, width:40, borderRadius:30, justifyContent:'center'
    },
    addbutton2:{
        height:20, width:20, tintColor:'#fff', alignSelf:"center",
    }
})