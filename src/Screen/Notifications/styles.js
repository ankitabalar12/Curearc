import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
flex:1, backgroundColor:'#fff'
    },
    mainview:{
        height: 100,
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
    flexrowview:{
        flexDirection:'row', marginLeft:'5%', marginTop:'2%'
    },
    addmin:{
fontSize:13, fontWeight:'900', color:'#000'
    },
    time:{
marginLeft:'5%', fontSize:12,
fontWeight:'500', alignSelf:'center',
color:'#000'
    },
    position:{
        position:'absolute', right:20
    },
    deleteicon:{
        height:20,
        width:16
    },
    readabletext:{
        fontSize:12,
        color:'#000', marginHorizontal:'5%',
        fontWeight:'400', marginTop:'4%'
    },
    martopview:{
        marginTop:'10%'
    }
})