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
        width: '100%',
        rowGap: toVL(0.2),
        padding: toVL(1.5)
    },

    navLeftBottom: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",
        rowGap: toVL(0.2),
        padding: toVL(1.5)
    },

    // Right Nav Style
    bodyNavRight: {
        flex: 1,
        height: '100%',
        width: toVL(2),
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
        padding: 5
        // backgroundColor: 'red',
    },

    rightNavTopRight: {
        flex: 1,
        // backgroundColor: 'blue'
    },

    //// New Ticket Button Style ////

    newTicket: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: toVL(11),
        height: toVL(3),
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 3,
        columnGap: 5
    },

    newTicketIcon: {
        tintColor: 'rgb(120, 120, 120)',
        height: toVL(1.2),
        width: toVL(1.2),
    },

    newTicketText: {
        color: 'rgb(120, 120, 120)',
        textAlign: 'center',
        fontSize: toVL(1.5)
    },

    ticketNum: {
        visibility: 'hidden'
    },
    //// New Ticket Button Style END ////

    /// Right Nav Header Styling END ///

    rightNavBody: {
        flex: 8,
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
        // backgroundColor: 'red'
    },

    menuNav: {
        flexDirection: 'row',
        padding: '1%',
        columnGap: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '95%',
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