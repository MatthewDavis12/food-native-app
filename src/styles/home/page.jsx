import { StyleSheet } from "react-native";
import { toVH, toVL, toVS } from "@/src/utils/relativeSize";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(243, 247, 250)'
    },

    // Header Style
    header: {
        width: '100%',
        height: toVL(5),
        borderBottomWidth: toVL(0.17),
        borderBottomColor: 'rgb(235, 235, 235)',
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    headerRight: {
        flex: 1,
        alignItems: 'flex-end'
    },

    headerLeft: {
        flex: 1,
        alignItems: 'flex-start'
    },

    companyTitle: {
        fontSize: toVL(2),
        fontWeight: 'bold',
        color: 'rgb(50, 50, 50)'
    },

    // Body Styles
    body: {
        flex: 1,
        flexDirection: 'row'
        // backgroundColor: 'red'
    },

    // Nav Left Styles
    bodyNavLeft: {
        height: '100%',
        width: toVL(8),
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
        borderRightColor: 'rgb(235, 235, 235)',
        borderRightWidth: toVL(0.17),
        padding: 0
    },

    navLeftTop: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        rowGap: toVL(0.2),
        paddingTop: 10,
    },

    navLeftBottom: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: "flex-end",
        rowGap: toVL(0.2),
        paddingBottom: 10
    },

    // Right Nav Style
    bodyNavRight: {
        flex: 1,
        height: '100%',
        backgroundColor: 'rgb(255,255,255)',
        borderLeftColor: 'rgb(235, 235, 235)',
        borderLeftWidth: toVL(0.17),
    },

    /// Right Nav Header Styling ///

    rightNavTop: {
        height: toVL(5),
        flexDirection: 'row',
        borderBottomWidth: toVL(0.17),
        borderBottomColor: 'rgb(235, 235, 235)'
        // backgroundColor: 'rgb(255, 0, 0)'
    },

    rightNavTopLeft: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        // backgroundColor: 'red',
    },

    rightNavTopRight: {
        flex: 1,
        // backgroundColor: 'blue'
    },

    //// New Ticket Button Style ////

    newTicket: {
        height: '80%',
        aspectRatio: 4,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 3,
        boxShadow: '0px 2px 1px -1px rgba(60, 60, 60, 0.1)',
        columnGap: 5,
        paddingLeft: '5%'
    },

    newTicketIconWrapper: {
        height: '50%',
        aspectRatio: 1
    },

    newTicketIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        tintColor: 'rgb(120, 120, 120)',
    },

    newTicketText: {
        color: 'rgb(120, 120, 120)',
        fontSize: toVL(1.5),
        lineHeight: toVL(1.5),
        padding: 0,
        alignContent: 'center',
        textAlignVertical: 'center'
    },

    ticketNum: {
        visibility: 'hidden'
    },
    //// New Ticket Button Style END ////

    /// Right Nav Header Styling END ///

    rightNavBody: {
        flex: 8,
        padding: 1
        // backgroundColor: 'rgb(0, 255, 0)'
    },

    rightNavBottom: {
        flex: 2,
        backgroundColor: 'rgb(245, 245, 245)'
    },

    // Menu Container Styles
    bodyContainer: {
        flex: 2,
        gap: 20,
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        // backgroundColor: 'red'
    },

    menuNav: {
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: toVL(4.5),
        borderRadius: 5,
        padding: '1%',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 1px 12px -6px rgba(0, 0, 0, 0.2)'
    },

    menuItems: {
        flex: 1,
        width: '100%',
        rowGap: 30,
        columnGap: 19,
    },

    menuItemsContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 0,
        columnGap: '2.666669%', // This is dumb but has to be done for smaller screens to look the same as larger screens for the column gap.
        rowGap: 30
    }
})