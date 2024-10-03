import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#fff'
    },
    mainview:{
        height: 120,
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
        flexDirection:'row', marginLeft:'5%', marginTop:'3%'
    },
    homestyle:{
        height:15, width:15
    },
    hometext:{
        fontSize:12, fontWeight:'900', color:'#000', marginLeft:'2%'
    },
    Manishprajapatitext:{
        marginLeft:'5%',
        fontSize:12,
        color:'#000', fontWeight:'900', marginTop:'5%'
    },
    BlockRatext:{
        fontSize:11, fontWeight:'500', marginLeft:'5%', marginRight:'5%'
    },
    martop:{
        marginTop:'20%'
    }
})