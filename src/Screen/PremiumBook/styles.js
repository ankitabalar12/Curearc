import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#fff'
    },
    posi:{
        position:'absolute', top:20, alignSelf:'center',right:135
    },
    stylesinfo:{
        height:20, width:20, tintColor:'#fff',alignSelf:'center'
    },
    PremiumBookBenefitstext:{
        alignSelf:'center', marginTop:'5%',
        fontSize:15,
        fontWeight:'900', color:'#126000'
    },
    calenimstyle:{
        height:70, width:70, alignSelf:'center', marginTop:'5%'
    },
    instant:{
        textAlign:'center', marginTop:'5%', color:'#000', fontWeight:'900'
    },
    instantwo:{
        marginTop:'9%', height:60, width:60
    },bookbuttontwo:{
        width:200, marginTop:'10%'
    },
    redtextstyles:{
        textAlign:"center"
    },
    redtextstyles:{
        color:'#f22',
        textAlign:"center", fontSize:11, fontWeight:'500', marginTop:'5%'
    },
    mainviewstyle:{
        height: 120, width: '85%',
        backgroundColor: '#fff',
        position: 'absolute', top: 30,
       borderRadius:20,
        borderTopWidth: 1,
        borderTopColor: '#CCCBCB',
        marginTop: '5%',
        
       alignSelf:'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    TriangleView: {
        width: 0,
        height: 0,
        position:'absolute',
        zIndex:1,
        top:-10,right:104,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,   // Increase for wider base
        borderRightWidth: 10,  // Increase for wider base
        borderBottomWidth: 15, // Increase for height of triangle
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff', // Triangle color
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        alignSelf: 'center', // Center the triangle
      },
      Nottext:{
        alignSelf:'center',fontSize:12,
        fontWeight:'900', marginTop:10, marginHorizontal:"5%"
      }
      
})