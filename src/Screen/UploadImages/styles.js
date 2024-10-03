import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flexrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '18%', marginTop: '10%'

    },
    imgview2: {
        height: 200,
        width: '100%',
        backgroundColor: '#f2f2f2',

    },
    badimg: {
        height: "100%",
        width: '100%',

    },
    AppoloHospitalstxt: {
        marginLeft: '5%', color: '#000',
        fontSize: 17,
        fontWeight: '900',
        marginTop: '2%'
    },
    MultispcialistHospitalstext: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
        marginLeft: '5%', marginTop: 2,
    },
    AkshyaAhemdabadtext: {
        fontSize: 13,
        marginLeft: '5%',
        marginTop: 5,
        marginRight: '15%'
    },
    flexrow2: {
        flexDirection: 'row',
        justifyContent: 'space-between', marginHorizontal: '25%'

    },
    doctext: {
        fontSize: 17, fontWeight: '900', color: '#000', margin: 5
    },
    lineview: {
        height: 2, width: '100%', backgroundColor: '#ccc'
    },
    haftline: {
        height: 2, width: '50%', backgroundColor: "#126000"
    },
    linerow: {
        flexDirection: 'row'
    },
    Triangleview: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderTopWidth: 9,
        borderBottomWidth: 0,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#126000',
        borderBottomColor: 'transparent',
        alignSelf: 'center'
    },
    medicalrepo: {
        flexDirection: 'row',
        flexWrap: 'wrap', alignSelf: 'center', marginTop: '5%'
    },
    imgviewstyl: {
        height: 250, width: 180, backgroundColor: '#fff', margin: 5,
        borderTopRightRadius: 20, borderTopLeftRadius: 20,
        alignSelf: 'center',
        borderColor: "#CCCBCB",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    backgroundimg: {
        height: '100%', width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    flexrowviewstyle: {
        flexDirection: 'row', alignSelf: 'flex-end', marginRight: '5%', marginTop: "5%"
    },
    iconstylesdle: {
        height: 12, width: 12, alignSelf: "center"
    },
    greenview: {
        height: 30, width: 30, backgroundColor: '#126000',
        borderRadius: 30, justifyContent: 'center', margin: 2
    },
    iconstylesdle3: {
        height: 19, width: 14
    },
    ReportofDiabitiestext: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: '#126000'
    },
    headerview: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 50,
        bottom: 0,
    },
    roundview: {
        position: 'absolute',
        bottom: -280,
        alignSelf: 'flex-end', right: 20,
        alignSelf: "center"
    },
    addstyle:{
        height:20, width:20, alignSelf:'center'
    }
})