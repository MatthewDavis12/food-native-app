import { StyleSheet, Dimensions } from "react-native";
import { toVH, toVW, toVL, toVS } from "@/src/utils/relativeSize";

export default styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginBottom: 15,
        // backgroundColor: 'rgb(0, 255, 0)',
    },

    inputLabel: {
        marginBottom: 5,
        fontSize: toVS(2.5),
        paddingLeft: 5,
        color: 'rgb(100, 100, 100)'
    },

    inputBox: {
        width: '100%',
        height: '60%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'solid',
        justifyContent: 'center',
        fontSize: toVS(2),
        color: 'rgb(100, 100, 100)',
        borderColor: 'rgb(210, 210, 210)',
        backgroundColor: 'rgb(255, 255, 255)',
    },

    inputBoxFocused: {
        borderColor: 'hsl(216, 100.00%, 57.60%)',
        outlineStyle: 'none',
    }
})