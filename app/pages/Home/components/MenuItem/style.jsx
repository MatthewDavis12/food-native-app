import { StyleSheet } from "react-native";
import { toVL } from "@/utils/relativeSize";

export default styles = StyleSheet.create({
    cardCont: {
        width: '22%',
        height: toVL(19),
        borderRadius: 6,
        boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgb(255, 255, 255)'
    }
})