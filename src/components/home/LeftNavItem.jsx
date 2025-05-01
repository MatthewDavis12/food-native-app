import { View, Text, Image } from 'react-native';
import styles from '@styles/home/LeftNavItem.styles';

export default function LeftNavItem({ icon, text, isSelected }) {
    return (
        <View style={[styles.itemContainer, isSelected && styles.itemSelected]}>
            <Image source={icon} style={[styles.itemIcon, isSelected && styles.itemSelectedImage]} />
            <Text style={[styles.itemText, isSelected && styles.itemSelectedText]}>{text}</Text>
        </View>
    )
}