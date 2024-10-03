import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    yourreport: {
        marginTop: '5%',
        marginLeft: '5%',
        color: '#000',
        fontSize: 15
    },
    flexrowstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15%', marginHorizontal: '25%'
    },
    garallimg: {
        height: 40, width: 40, alignSelf: 'center',
    },
    garallimg2: {
        height: 40, width: 40, alignSelf: 'center',
    },
    whiteview: {
        height: 80,
        width: 80,
        backgroundColor: '#FFF',
        borderRadius: 90, justifyContent: 'center',
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
    gallarytext: {
        alignSelf: 'center',
        marginTop: '6%',
        color: '#000',
        fontWeight: '900'
    },
    whiteview2: {
        height: 80,
        width: 80,
        borderRadius: 90,
        justifyContent: 'center',
 },
 loginbutton:{
    marginTop:'15%', width:200
 }
})