import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    setscopstyle: {
        height: "90%",
        width: "100%",
        tintColor: '#dcdfe3',
        alignSelf: 'center',
        marginTop: 130, marginRight: 130
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
    logoicon: {
        height: 95, width: 105,
        marginLeft: '30%', marginTop: -50

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
    paginationStyle: {
        top: -450, right: -120
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
        marginRight: 20

    },
    activeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#708C00',
        marginHorizontal: 5,
        marginRight: 20

    },
    images: {
        height: 200,
        width: 200,
        marginTop: 150,
        alignSelf: 'center'
    },
    itistext: {
        textAlign: 'center',
        color: '#000',
        marginHorizontal: '20%',
        fontWeight: '900'
    },
    WelcomeBacktest: {
        marginTop: 100,
        marginLeft: 50, color: '#000', fontSize:18
    },
    Backstyle: {
        fontWeight: '900', color: '#000'
    },
    stetjoscopeiconstyle: {
        height: 30.10,
        width: 33.5,
        alignSelf: 'center',
        marginTop: 50
    },
    Doctortext: {
        alignSelf: 'center',
        color: '#000',
        fontWeight: '900',
        marginTop: 5,
        fontSize: 15
    },
    
})