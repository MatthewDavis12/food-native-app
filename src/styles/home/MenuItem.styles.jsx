import { StyleSheet } from "react-native";
import { toVL, toVS } from "@/src/utils/relativeSize";

export default styles = StyleSheet.create({
    cardCont: {
        width: '23%',
        height: toVL(20),
        borderRadius: 6,
        boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgb(255, 255, 255)'
    }
})