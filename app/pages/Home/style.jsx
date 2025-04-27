import { StyleSheet } from "react-native";
import { toVH, toVL } from "@/utils/relativeSize";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(245, 245, 245)'
    },

    header: {
        width: '100%',
        height: toVL(5),
        borderBottomWidth: toVL(0.17),
        borderBottomColor: 'rgb(235, 235, 235)',
        backgroundColor: 'rgb(255, 255, 255)'
    },

    body: {
        flex: 1,
        flexDirection: 'row'
        // backgroundColor: 'red'
    },

    bodyNavLeft: {
        height: '100%',
        width: toVL(8),
        backgroundColor: 'rgb(255,255,255)',
        borderRightColor: 'rgb(235, 235, 235)',
        borderRightWidth: toVL(0.17),
    },

    bodyNavRight: {
        flex: 1,
        height: '100%',
        width: toVL(2),
        backgroundColor: 'rgb(255,255,255)',
        borderLeftColor: 'rgb(235, 235, 235)',
        borderLeftWidth: toVL(0.17),
    },

    // Menu Container Styles
    bodyContainer: {
        flex: 2,
        gap: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
        // backgroundColor: 'red'
    },

    menuNav: {
        width: '98%',
        height: toVL(4),
        borderRadius: 5,
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 1px 12px -6px rgba(0, 0, 0, 0.2)'
    },

    menuItems: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        rowGap: 30,
        columnGap: 19,
    },

    menuItemsContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 0,
        rowGap: 40
    }
})