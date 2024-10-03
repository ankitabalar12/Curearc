import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    inputview:{
        height:50, width:'90%',
        alignSelf:'center',
        marginTop:'10%',
        borderBottomColor:'#E3E3E3', borderBottomWidth:2

    },
    flexrowview:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    trueiconstyle:{
        height:25, width:25,
        alignSelf:'center'
    },
    inputview3:{
        marginTop:'3%'
    },
    loginbutton:{
        width:100, marginTop:'30%'
    },
    error:{
        color:'red', fontSize:10,
        marginLeft:'5%'
    }
})