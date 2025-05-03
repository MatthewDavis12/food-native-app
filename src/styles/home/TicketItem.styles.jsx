import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ticketContainer: {
        width: '100%',
        height: '9%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 240, 240)',
        padding: '2%',
        columnGap: 10,
        borderRadius: 5
    },

    // Image Wrapper
    imageWrapper: {
        height: '40%',
        aspectRatio: 1,
        // backgroundColor: 'red'
    },

    // Image
    image: {
        width: '100%',
        height: '100%',
        tintColor: 'rgb(130, 130, 130)'
    },

    // Ticket Meal
    ticketMeal: {
        textAlignVertical: 'center',
        alignContent: 'center'
    }
})
