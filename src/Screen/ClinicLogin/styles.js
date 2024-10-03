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
    flexrowtwo: {
        flexDirection: 'row',
        marginTop: '5%',
        marginHorizontal: '15%',
        justifyContent: 'space-between'
    },
    logintext: {
        fontSize: 17, fontWeight: '500'
    },
    textinputniew: {
        height: 40,
        width: '90%',
        marginBottom: 50,
        marginLeft: '15%',
        marginTop: '15%', borderBottomColor: '#cccc',
        borderBottomWidth: 2
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
    emilview: {
        height: 20,
        width: 200,
        position: 'absolute',
        bottom: 15,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginwithemil: {
        fontSize: 15,
        fontWeight: '900',
        color: '#000'
    },
    flexrowmobilenumber: {
        flexDirection: 'row',
        marginLeft: '15%',
        marginTop: '15%', justifyContent: 'space-between'
    },
    numbertext: {
        fontSize: 15, fontWeight: '500',
        color: '#000'
    },
    ChangeText: {
        marginRight: "10%",
        color: '#708C00', fontWeight: '800'
    },
    otpInput: {
        width: 40,
        height: 40,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderColor: 'red',
        borderWidth: 2,
        // borderBottomColor:'#fff'
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: '5%'
    },
    Donrecievecodetext: {
        alignSelf: "center",
        color: '#000'
    },
    resentrow: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '5%',
        marginBottom: '15%'
    },
    Resendtext: {
        color: '#708C00',
        fontSize: 15,
        fontWeight: '900',
    },
    mar: {
        marginLeft: "2%"
    },
    textinputniewtwo: {
        height: 40,
        width: '90%',
        marginBottom: 10,
        marginLeft: '15%',
        borderBottomColor: '#cccc',
        borderBottomWidth: 2,
    },
    textinputniewtdff: {
        marginTop: '15%'
    },
    textinputniewtdffeer: {
        marginTop: '5%'
    },
    hidehowpassword: {
        height: 20,
        width: 20,
        tintColor: "#708C00"
    },
    loginbutton: {
        marginTop: '10%'
    },
    forgotpass: {
        alignSelf: 'flex-end',
        marginRight: '10%',
        color: '#000',
        fontWeight: '700'
    },
    forgotpasstext: {
        marginLeft: '15%',
        marginTop: '5%',
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
    textinputniewthree: {
        height: 40,
        width: '90%',
        marginTop: 15,
        marginLeft: '15%',
        borderBottomColor: '#cccc',
        borderBottomWidth: 2,
        marginBottom:10
    },
})