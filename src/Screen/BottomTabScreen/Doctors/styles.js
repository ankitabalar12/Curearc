import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
  },
  docview:{
    height: 80,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    // borderColor: "#CCCBCB",
    //  borderWidth: 1,
      marginLeft:15,
      marginBottom:20,
    borderBottomWidth:1,
     borderBottomColor:'#CCCBCB',
     marginTop:30,
    alignSelf: 'center',
    justifyContent:'center',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textstyles:{
alignSelf:'center',
fontSize:14,
color:'#000',
fontWeight:'900'
  },
  imagestyle:{
    height:40, width:40, 
    alignSelf:"center"
  },
  doctorview:{
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
rowviewdr:{
    flexDirection:"row",
},
imgboxview:{
   height:50, width:50, backgroundColor:'#f2f2f2' , margin:5, borderRadius:50, justifyContent:'center'
},
imgboxview2:{
    height:50, width:200, backgroundColor:'#fff' ,margin:5  , justifyContent:'center'  
},
imgboxview3:{
    height:50, width:90,   
},
positionsty:{
    position:'absolute', right:0
},
ratingview:{
    flexDirection:'row'
},
shahtext:{
    fontSize:14, color:'#000',
    fontWeight:'900', 
},
sugeontrext:{
    color:'#000',
    fontSize:13
},
permiumview:{
    height:25, width:'100%',
    backgroundColor:'#98B400', 
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    justifyContent:'center'
   
},
bottomviewstyle:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 25,  // Horizontal size of the triangle
    borderBottomWidth: 25,    // Vertical size of the triangle
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',  
},
flexrowim:{
    flexDirection:'row', 
  
},
image25style:{
    height:15, width:15,
    alignSelf:'center'
},
Premiumtext:{
    color:'#fff',
    fontSize:8, fontWeight:'900',
    alignSelf:'center', marginLeft:2
},
flexrow3:{
    flexDirection:'row', marginTop:5
},
exView:{
    height:20, width:120, margin:2, justifyContent:'center'
},
Experienctext:{
   fontSize:13,
    color:'#000',
    alignSelf:"center"
},
yesr:{
    color:'#000',
    fontWeight:'900'
},
flewlikeimg:{
    flexDirection:'row', 
justifyContent:'space-between', marginHorizontal:'5%'
},
favorite:{
    height:20, width:20,
     marginTop:2
},
newstyle:{
  height:25, width:70, borderRadius:5,
  alignSelf:'center'
},
styletext:{
    fontSize:10, fontWeight:'900'
},
imgdr:{
    height:'100%',
    width:"100%"
},
starstyle:{
    height:15, width:15
},
starview:{
    height:20, width:150, marginLeft:-25, flexDirection:'row'
},
marbottom:{
    marginTop:'20%'
},
martopnwe:{
  marginTop:'30%'
},
matop:{
  marginTop:'50%'
}
 
  })