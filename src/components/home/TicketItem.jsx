import { View, Text, Animated, Image, TouchableOpacity } from "react-native";
import { styles, openStyles, closeStyles } from '@styles/home/TicketItem.styles';

export default function TicketItem() {
    return (
        <TouchableOpacity
            style={[
                styles.ticketContainer
            ]}
        >
            {/* Image Wrapper */}
            <View style={styles.imageWrapper}>
                <Image source={require('@assets/images/dropdown.png')} style={styles.image} />
            </View>

            {/* Ticket Meal */}
            <Text style={styles.ticketMeal}>Fried Chicken Meal</Text>

            {/* Ticket Details */}
            <View>

            </View>
        </TouchableOpacity>
    )
}