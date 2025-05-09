import { StyleSheet } from "react-native";
import { toVL, toVS } from '@/src/utils/relativeSize';

export default styles = StyleSheet.create({
    itemContainer: {
        width: '70%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 5
    },

    itemSelected: {
        backgroundColor: 'rgba(1, 103, 238, 0.1)',
        borderWidth: toVS(0.3),
        borderColor: 'rgb(57, 134, 236)',
        borderRadius: toVL(0.5)
    },

    itemSelectedText: {
        color: 'rgb(57, 134, 236)',
    },

    itemSelectedImage: {
        tintColor: 'rgb(57, 134, 236)',
    },

    itemText: {
        fontSize: toVS(1.8),
        color: 'rgb(80, 80, 80)'
    },

    itemIcon: {
        height: '40%',
        aspectRatio: 1,
        padding: 0,
        tintColor: 'rgb(80, 80, 80)'
    }
})