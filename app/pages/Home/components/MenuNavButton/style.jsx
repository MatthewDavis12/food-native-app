import { StyleSheet } from "react-native";
import { toVL, toVS } from "@/utils/relativeSize";

export default styles = StyleSheet.create({
    optionButton: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    optionText: {
        fontSize: toVL(1.4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(50, 50, 50)'
    },

    optionSelected: {
        backgroundColor: 'rgba(1, 103, 238, 0.1)',
        borderWidth: toVS(0.3),
        borderColor: 'rgb(57, 134, 236)',
        borderRadius: toVL(0.5)
    },

    optionSelectedText: {
        color: 'rgb(57, 134, 236)',
    }
})