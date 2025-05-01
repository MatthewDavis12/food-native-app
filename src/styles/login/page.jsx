import { StyleSheet } from "react-native";
import { toVH, toVW, toVS, toVL } from "@/src/utils/relativeSize";

// Login Page StyleSheet
export default styles = StyleSheet.create({

    // Background Style
    mainPage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
    },

    // Main Login view 
    loginView: {
        height: toVS(70),
        aspectRatio: 0.8,
        borderRadius: 6,
        backgroundColor: 'rgb(240, 240, 240)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(220, 220, 220)',
        boxShadow: '0px 5px 5px -5px rgba(0, 0, 0, 0.5)'
    },

    // Login Header View
    loginHeaderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(57, 134, 236)',
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.3)'
    },

    loginHeaderTitle: {
        fontSize: toVL(2.5),
        fontWeight: 'bold',
        color: 'rgb(255, 255, 255)',
    },

    loginHeaderSubtitle: {
        fontSize: toVS(3),
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'rgb(60, 60, 60)',
        // backgroundColor: 'rgb(255, 0, 0)'
    },

    // Login Body View
    loginBodyView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgb(0, 255, 0)'
    },

    loginSubmitBtn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        borderWidth: 1,
        borderColor: 'rgb(120, 200, 120)',
        backgroundColor: 'rgb(120, 235, 120)',
        borderRadius: 2
    },

    loginSubmitTxt: {
        color: 'rgb(255, 255, 255)',
        fontSize: toVS(3),
        textAlign: 'center',
    },

    loginLoadingImg: {
        height: '70%',
        aspectRatio: 1,
        resizeMode: 'contain',
        opacity: 0.8,
        tintColor: 'rgb(255, 255, 255)',
    },

    // Login Footer View
    loginFooterView: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: 'rgb(235, 235, 235)'
    },

    footerMsg: {
        textAlign: 'center',
        fontSize: toVS(2),
        color: 'rgb(70, 70, 70)'
    }
})