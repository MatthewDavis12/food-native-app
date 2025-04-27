import { StyleSheet, Dimensions } from "react-native";
import { toVH, toVW, toVL, toVS } from "@/utils/relativeSize";

export default styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: toVL(7.5),
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginBottom: 15,
        // backgroundColor: 'rgb(0, 255, 0)',
    },

    inputLabel: {
        marginBottom: 5,
        fontSize: toVL(1.5),
        paddingLeft: 5,
        color: 'rgb(100, 100, 100)'
    },

    inputBox: {
        width: '100%',
        height: toVL(4),
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(210, 210, 210)',
        padding: 5,
        fontSize: toVL(1.5),
        color: 'rgb(60, 60, 60)'
    },

    inputBoxFocused: {
        borderWidth: 2,
        borderColor: 'hsl(216, 100.00%, 57.60%)',
        outlineStyle: 'none',
    }
})