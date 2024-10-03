import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    },
    setscopstyle: {
        height: "90%",
        width: "100%",
        tintColor: '#dcdfe3',
        alignSelf: 'center',
        marginTop: 130,
    },
    viewone: {
        height: "50%",
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    viewtwo: {
        height: "50%",
        width: '100%',

    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    swiperview: {
        height: 590,
        width: 355,
        backgroundColor: '#fff',
        zIndex: 1,
        position: 'absolute',
        top: 170,
        bottom: 20,
        right: 0,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: "#CCCBCB",
        borderWidth: 1,


        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flexdractionview: {
        flexDirection: 'row',

        height: 50,
        width: '100%',
        //    backgroundColor:'red',
        justifyContent: 'space-between',
        alignSelf: 'center',
        position: 'absolute', top: -65
    },
    imgstyle: {
        height: 31.7, width: 35, tintColor: '#000',
        marginRight: 15, tintColor: '#708C00'
    },
    arrowbackstyle: {
        height: 20, width: 20, marginLeft: '15%'
    },
    forgotpasstext: {
        marginLeft: '15%',
        marginTop: '15%',
        fontSize: 15,
        fontWeight: '900',
        color: '#708C00'
    },
    Pleaseentext: {
        marginLeft: '15%',
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        marginRight: '25%',
        marginTop: 10
    },
    textinputniewtwo: {
        height: 40,
        width: '90%',
        marginBottom: 10,
        marginLeft: '15%',
        borderBottomColor: '#cccc',
        borderBottomWidth: 2,
    },
   
    textinputniewtdffeer:{
  marginTop: '5%'
    },
    textinputrwo: {
        flexDirection: 'row'
    },
    trueiconstyle: {
        height: 20, width: 20
    },
    positionimg: {
        position: 'absolute',
        right: 50,
        alignSelf: 'center'
    },
    loginbutton: {
        marginTop: '10%'
    },
})